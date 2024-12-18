export const config = {
    apiUrl: process.env.NODE_ENV === 'production' 
        ? 'https://netflix-mern-backend.vercel.app/api/v1'
        : 'http://localhost:5000/api/v1'
};
