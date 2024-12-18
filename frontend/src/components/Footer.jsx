import { Github, Heart, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">
                            {new Date().getFullYear()} Netflix Clone. Made with{" "}
                            <Heart className="inline-block w-4 h-4 text-red-500" /> by{" "}
                            <span className="text-white">Your Name</span>
                        </p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/mrbrajeshsingh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors duration-300"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/brajesh-kumar-31149526b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors duration-300"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">About</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">Categories</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Action</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Comedy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Drama</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Facebook</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Twitter</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="mt-8 text-center text-sm">
                    <p>This is a Netflix clone project created for educational purposes only. All rights reserved to Netflix.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
