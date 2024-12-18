export const config = {
    apiUrl: process.env.NODE_ENV === 'production' 
        ? 'https://your-backend-url.onrender.com/api/v1'  // We'll update this after deploying backend
        : 'http://localhost:5000/api/v1'
};
