import { useEffect, useState } from 'react';
import { movieAPI } from '../utils/api';
import { useContentStore } from '../store/content';

const useGetTrendingContent = () => {
    const [trendingContent, setTrendingContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { contentType } = useContentStore();

    useEffect(() => {
        const fetchTrendingContent = async () => {
            try {
                setLoading(true);
                const response = await movieAPI.getMovies();
                setTrendingContent(response.data[0]); // Get the first movie as trending
                setError(null);
            } catch (err) {
                console.error('Error fetching trending content:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingContent();
    }, [contentType]);

    return { trendingContent, loading, error };
};

export default useGetTrendingContent;
