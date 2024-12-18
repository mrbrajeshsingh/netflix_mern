import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { movieCategories, featuredMovie } from '../../data/mockMovies';

const WatchScreen = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();

    // Find the movie from all categories
    const findMovie = () => {
        if (featuredMovie.id === parseInt(movieId)) {
            return featuredMovie;
        }

        for (const category of Object.values(movieCategories)) {
            const movie = category.find(m => m.id === parseInt(movieId));
            if (movie) return movie;
        }
        return null;
    };

    const movie = findMovie();

    if (!movie) {
        return (
            <div className="h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Movie not found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded hover:bg-white/90"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    // Sample video URL - replace with your actual video URLs
    const videoUrl = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

    return (
        <div className="h-screen bg-black">
            <div className="absolute top-0 left-0 p-4 z-10">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-white hover:text-white/80"
                >
                    <ArrowLeft size={24} />
                    Back to Home
                </button>
            </div>

            <video
                className="w-full h-full object-contain"
                controls
                autoPlay
                src={videoUrl}
            >
                Your browser does not support the video tag.
            </video>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h1 className="text-white text-2xl font-bold">{movie.title}</h1>
            </div>
        </div>
    );
};

export default WatchScreen;
