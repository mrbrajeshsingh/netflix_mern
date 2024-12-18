import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Menu, Search } from "lucide-react";
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuthStore();
    const { setContentType } = useContentStore();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className='fixed top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent z-50'>
            <div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4'>
                <div className='flex items-center gap-10'>
                    <Link to='/'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' 
                             alt='Netflix Logo' 
                             className='w-32 sm:w-40' />
                    </Link>

                    {/* desktop navbar items */}
                    <div className='hidden sm:flex gap-6 items-center text-white/90'>
                        <Link to='/' className='hover:text-white' onClick={() => setContentType("movie")}>
                            Movies
                        </Link>
                        <Link to='/' className='hover:text-white' onClick={() => setContentType("tv")}>
                            TV Shows
                        </Link>
                        <Link to='/history' className='hover:text-white'>
                            Search History
                        </Link>
                    </div>
                </div>

                <div className='flex gap-4 items-center'>
                    <Link to="/search">
                        <Search className='w-6 h-6 text-white/90 hover:text-white cursor-pointer' />
                    </Link>
                    <div className="relative group">
                        <img 
                            src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" 
                            alt='Avatar' 
                            className='w-8 h-8 rounded cursor-pointer'
                        />
                        <button 
                            onClick={logout}
                            className='hidden group-hover:block absolute top-full right-0 mt-2 px-4 py-2 bg-black/90 text-white rounded shadow-lg hover:bg-black'
                        >
                            Sign Out
                        </button>
                    </div>
                    <div className='sm:hidden'>
                        <Menu 
                            className='w-6 h-6 text-white/90 hover:text-white cursor-pointer' 
                            onClick={toggleMobileMenu} 
                        />
                    </div>
                </div>

                {/* mobile navbar items */}
                {isMobileMenuOpen && (
                    <div className='w-full sm:hidden mt-4 bg-black/95 border border-gray-800 rounded-lg overflow-hidden'>
                        <Link 
                            to="/" 
                            className='block px-4 py-2 text-white/90 hover:bg-white/10 hover:text-white' 
                            onClick={() => {
                                setContentType("movie");
                                toggleMobileMenu();
                            }}
                        >
                            Movies
                        </Link>
                        <Link 
                            to="/" 
                            className='block px-4 py-2 text-white/90 hover:bg-white/10 hover:text-white' 
                            onClick={() => {
                                setContentType("tv");
                                toggleMobileMenu();
                            }}
                        >
                            TV Shows
                        </Link>
                        <Link 
                            to="/history" 
                            className='block px-4 py-2 text-white/90 hover:bg-white/10 hover:text-white' 
                            onClick={toggleMobileMenu}
                        >
                            Search History
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
