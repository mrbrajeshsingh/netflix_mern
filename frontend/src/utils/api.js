import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1', // Updated to include full URL
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 seconds timeout
});

// Add request interceptor
api.interceptors.request.use(
    (config) => {
        // Log requests in development
        if (process.env.NODE_ENV === 'development') {
            console.log('Request:', config.method.toUpperCase(), config.url);
        }
        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Add response interceptor
api.interceptors.response.use(
    (response) => {
        // Log successful responses in development
        if (process.env.NODE_ENV === 'development') {
            console.log('Response:', response.status, response.config.url);
        }
        return response;
    },
    (error) => {
        // Enhanced error logging
        console.error('API Error:', {
            url: error.config?.url,
            method: error.config?.method,
            status: error.response?.status,
            data: error.response?.data,
            message: error.message
        });

        if (error.response?.status === 401) {
            // Handle unauthorized access
            window.location.href = '/login';
        }
        
        return Promise.reject(error);
    }
);

// API endpoints
export const authAPI = {
    login: (credentials) => api.post('/auth/login', credentials),
    signup: (credentials) => api.post('/auth/signup', credentials),
    logout: () => api.post('/auth/logout'),
    checkAuth: () => api.get('/auth/authCheck'),
};

export const movieAPI = {
    async getTrending() {
        const response = await api.get('/movie/trending');
        return response.data;
    },

    async getByCategory(category) {
        const response = await api.get(`/movie/${category}`);
        return response.data;
    },

    async getDetails(id) {
        const response = await api.get(`/movie/${id}/details`);
        return response.data;
    },

    async getTrailers(id) {
        const response = await api.get(`/movie/${id}/trailers`);
        return response.data;
    },

    async getSimilar(id) {
        const response = await api.get(`/movie/${id}/similar`);
        return response.data;
    }
};

export const tvAPI = {
    async getTrending() {
        const response = await api.get('/tv/trending');
        return response.data;
    },

    async getByCategory(category) {
        const response = await api.get(`/tv/${category}`);
        return response.data;
    },

    async getDetails(id) {
        const response = await api.get(`/tv/${id}/details`);
        return response.data;
    },

    async getTrailers(id) {
        const response = await api.get(`/tv/${id}/trailers`);
        return response.data;
    },

    async getSimilar(id) {
        const response = await api.get(`/tv/${id}/similar`);
        return response.data;
    }
};

export const searchAPI = {
    async search(query) {
        const response = await api.get(`/search?q=${encodeURIComponent(query)}`);
        return response.data;
    },

    async getHistory() {
        const response = await api.get('/search/history');
        return response.data;
    }
};

export default api;
