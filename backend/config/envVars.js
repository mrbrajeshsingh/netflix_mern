import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Try to load environment variables from different possible locations
const envPaths = [
    path.resolve(__dirname, '../../.env'),
    path.resolve(__dirname, '../.env'),
    path.resolve(__dirname, '.env'),
];

for (const envPath of envPaths) {
    dotenv.config({ path: envPath });
}

// Default configuration
const defaultConfig = {
    MONGO_URI: "mongodb+srv://mrbrajeshkumarsingh17072024:netfliex@cluster0.q5neo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    JWT_SECRET: "djhad;ajsdad;la;sd",
    PORT: "5000",
    NODE_ENV: "development",
    TMDB_API_KEY: "your_tmdb_api_key"
};

// Export environment variables with fallbacks to default values
export const ENV_VARS = {
    MONGO_URI: process.env.MONGO_URI || defaultConfig.MONGO_URI,
    PORT: process.env.PORT || defaultConfig.PORT,
    JWT_SECRET: process.env.JWT_SECRET || defaultConfig.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV || defaultConfig.NODE_ENV,
    TMDB_API_KEY: process.env.TMDB_API_KEY || defaultConfig.TMDB_API_KEY,
    FRONTEND_URL: process.env.NODE_ENV === "production"
        ? process.env.FRONTEND_URL
        : "http://localhost:5173"
};

// Log configuration status
console.log('Environment configuration:', {
    NODE_ENV: ENV_VARS.NODE_ENV,
    PORT: ENV_VARS.PORT,
    MONGO_URI: ENV_VARS.MONGO_URI ? '[SET]' : '[NOT SET]',
    JWT_SECRET: ENV_VARS.JWT_SECRET ? '[SET]' : '[NOT SET]',
});
