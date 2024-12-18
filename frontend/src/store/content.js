import { create } from "zustand";
import { movieAPI } from "../utils/api";

export const useContentStore = create((set, get) => ({
    contentType: "movie",
    movies: [],
    tvShows: [],
    loading: false,
    error: null,

    setContentType: (type) => set({ contentType: type }),

    fetchMovies: async () => {
        try {
            set({ loading: true, error: null });
            const response = await movieAPI.getMovies();
            set({ 
                movies: response.data,
                loading: false 
            });
        } catch (error) {
            console.error('Error fetching movies:', error);
            set({ 
                error: error.message || 'Failed to fetch movies',
                loading: false 
            });
        }
    },

    fetchTvShows: async () => {
        try {
            set({ loading: true, error: null });
            const response = await movieAPI.getTvShows();
            set({ 
                tvShows: response.data,
                loading: false 
            });
        } catch (error) {
            console.error('Error fetching TV shows:', error);
            set({ 
                error: error.message || 'Failed to fetch TV shows',
                loading: false 
            });
        }
    },

    // Helper method to get current content based on type
    getCurrentContent: () => {
        const { contentType, movies, tvShows } = get();
        return contentType === 'movie' ? movies : tvShows;
    }
}));
