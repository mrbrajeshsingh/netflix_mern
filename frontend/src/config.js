export const config = {
    apiUrl: process.env.NODE_ENV === 'production' 
        ? 'https://netflix-clone-backend-YOUR_APP.onrender.com/api/v1'  // Replace with your Render URL
        : 'http://localhost:5000/api/v1'
};
