import { authAPI } from '../utils/api';
import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
    user: null,
    isSigningUp: false,
    isCheckingAuth: true,
    isLoggingOut: false,
    isLoggingIn: false,
    error: null,

    signup: async (credentials) => {
        set({ isSigningUp: true, error: null });
        try {
            if (!credentials.email || !credentials.password || !credentials.username) {
                throw new Error("All fields are required");
            }

            const response = await authAPI.signup(credentials);
            set({ 
                user: response.data.user, 
                isSigningUp: false,
                error: null 
            });
            toast.success(response.data.message || "Account created successfully");
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || "Signup failed";
            set({ 
                isSigningUp: false, 
                user: null,
                error: errorMessage 
            });
            toast.error(errorMessage);
            console.error("Signup error:", error);
        }
    },

    login: async (credentials) => {
        set({ isLoggingIn: true, error: null });
        try {
            const response = await authAPI.login(credentials);
            set({ 
                user: response.data.user, 
                isLoggingIn: false,
                error: null 
            });
            toast.success("Logged in successfully");
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || "Login failed";
            set({ 
                isLoggingIn: false, 
                user: null,
                error: errorMessage 
            });
            toast.error(errorMessage);
        }
    },

    logout: async () => {
        set({ isLoggingOut: true, error: null });
        try {
            await authAPI.logout();
            set({ 
                user: null, 
                isLoggingOut: false,
                error: null 
            });
            toast.success("Logged out successfully");
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || "Logout failed";
            set({ 
                isLoggingOut: false,
                error: errorMessage 
            });
            toast.error(errorMessage);
        }
    },

    authCheck: async () => {
        set({ isCheckingAuth: true, error: null });
        try {
            const response = await authAPI.checkAuth();
            set({ 
                user: response.data.user, 
                isCheckingAuth: false,
                error: null 
            });
        } catch (error) {
            set({ 
                isCheckingAuth: false, 
                user: null,
                error: error.response?.data?.message || null 
            });
        }
    },
}));
