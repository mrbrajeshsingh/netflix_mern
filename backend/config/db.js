import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

mongoose.set('strictQuery', true);

export const connectDB = async () => {
    try {
        if (!ENV_VARS.MONGO_URI) {
            throw new Error('MongoDB URI is not defined in environment variables');
        }

        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
            socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
        };

        const conn = await mongoose.connect(ENV_VARS.MONGO_URI, options);
        
        // Add connection error handlers
        mongoose.connection.on('error', err => {
            console.error('MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('MongoDB disconnected. Attempting to reconnect...');
        });

        mongoose.connection.on('reconnected', () => {
            console.log('MongoDB reconnected successfully');
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        // Log the full error in development
        if (ENV_VARS.NODE_ENV === 'development') {
            console.error('Full error:', error);
        }
        process.exit(1);
    }
};
