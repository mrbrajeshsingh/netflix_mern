import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Info, Play } from "lucide-react";
import MovieSlider from "../../components/MovieSlider";
import { useState } from "react";
import { featuredMovie, movieCategories } from "../../data/mockMovies";

const HomeScreen = () => {
    const [imgLoading, setImgLoading] = useState(true);

    return (
        <>
            <div className='relative h-screen text-white'>
                <Navbar />

                {imgLoading && (
                    <div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center shimmer -z-10' />
                )}

                <img
                    src={featuredMovie.backdrop_path}
                    alt='Featured content'
                    className='absolute top-0 left-0 w-full h-full object-cover -z-50'
                    onLoad={() => setImgLoading(false)}
                    onError={() => setImgLoading(false)}
                />

                <div className='absolute top-0 left-0 w-full h-full bg-black/50 -z-50' />

                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32'>
                    <div className='bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10' />

                    <div className='max-w-2xl'>
                        <h1 className='mt-4 text-6xl font-extrabold text-balance'>
                            {featuredMovie.title}
                        </h1>

                        <p className='mt-4 text-lg text-pretty line-clamp-3'>
                            {featuredMovie.overview}
                        </p>

                        <div className='mt-4 flex gap-3'>
                            <Link
                                to={`/watch/${featuredMovie.id}`}
                                className='flex items-center gap-2 bg-white text-black px-4 py-2 rounded hover:bg-white/90'
                            >
                                <Play size={20} />
                                Play
                            </Link>
                            <button className='flex items-center gap-2 bg-white/25 px-4 py-2 rounded hover:bg-white/30'>
                                <Info size={20} />
                                More Info
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative -mt-36 z-10 pb-8 px-8 md:px-16 lg:px-32 space-y-8'>
                <MovieSlider
                    title="Trending Now"
                    movies={movieCategories.trending}
                />
                <MovieSlider
                    title="Popular on Netflix"
                    movies={movieCategories.popular}
                />
                <MovieSlider
                    title="Top Rated"
                    movies={movieCategories.top_rated}
                />
                <MovieSlider
                    title="Now Playing"
                    movies={movieCategories.now_playing}
                />
            </div>
        </>
    );
};

export default HomeScreen;
