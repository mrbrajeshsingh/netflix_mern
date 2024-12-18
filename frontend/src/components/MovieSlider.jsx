import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const MovieSlider = ({ title, movies }) => {
    const [showArrows, setShowArrows] = useState(false);
    const [hoveredMovie, setHoveredMovie] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const sliderRef = useRef(null);
    const navigate = useNavigate();

    const handleScroll = (direction) => {
        const container = sliderRef.current;
        const cardWidth = container.offsetWidth / 4; // 4 cards per view
        const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
        
        const newPosition = scrollPosition + scrollAmount;
        const maxScroll = container.scrollWidth - container.offsetWidth;
        
        // Ensure we don't scroll beyond boundaries
        const finalPosition = Math.max(0, Math.min(newPosition, maxScroll));
        
        container.scrollTo({
            left: finalPosition,
            behavior: 'smooth'
        });
        
        setScrollPosition(finalPosition);
    };

    const handleMovieClick = (movieId) => {
        navigate(`/watch/${movieId}`);
    };

    if (!movies || movies.length === 0) {
        return null;
    }

    const handleImageError = (e) => {
        e.target.src = 'https://via.placeholder.com/300x169?text=Image+Not+Found';
    };

    return (
        <div
            className='relative group'
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => {
                setShowArrows(false);
                setHoveredMovie(null);
            }}
        >
            <h2 className='text-xl font-bold mb-4 text-white'>{title}</h2>

            {showArrows && movies.length > 4 && (
                <>
                    <button
                        className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-all'
                        onClick={() => handleScroll('left')}
                        style={{ opacity: scrollPosition > 0 ? 1 : 0.5 }}
                        disabled={scrollPosition <= 0}
                    >
                        <ChevronLeft className="text-white" />
                    </button>

                    <button
                        className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-all'
                        onClick={() => handleScroll('right')}
                        style={{ opacity: scrollPosition < (sliderRef.current?.scrollWidth - sliderRef.current?.offsetWidth) ? 1 : 0.5 }}
                        disabled={scrollPosition >= (sliderRef.current?.scrollWidth - sliderRef.current?.offsetWidth)}
                    >
                        <ChevronRight className="text-white" />
                    </button>
                </>
            )}

            <div
                className='flex gap-4 overflow-x-hidden scroll-smooth'
                ref={sliderRef}
                onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
            >
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className='flex-none w-[calc(25%-12px)] min-w-[200px] cursor-pointer'
                        onMouseEnter={() => setHoveredMovie(movie.id)}
                        onMouseLeave={() => setHoveredMovie(null)}
                        onClick={() => handleMovieClick(movie.id)}
                    >
                        <div className='relative aspect-video rounded-lg overflow-hidden bg-gray-900 group'>
                            <img
                                src={movie.backdrop_path}
                                alt={movie.title}
                                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                                loading="lazy"
                                onError={handleImageError}
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                            
                            {hoveredMovie === movie.id && (
                                <div className='absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300'>
                                    <button className='bg-white rounded-full p-4 hover:bg-white/90 transform hover:scale-110 transition-transform duration-300'>
                                        <Play className="text-black" fill="black" />
                                    </button>
                                </div>
                            )}
                            
                            <div className='absolute bottom-2 left-2 right-2'>
                                <h3 className='text-white text-sm font-medium truncate'>
                                    {movie.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieSlider;
