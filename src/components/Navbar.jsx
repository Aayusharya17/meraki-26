import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 py-6 px-8 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent"
        >
            <div className="text-white font-minecraft text-xl md:text-2xl tracking-wider flex items-center gap-3 hover:text-accent-400 transition-colors duration-300 cursor-pointer">
                <span className="text-accent-400 text-sm animate-pulse">►</span>
                Meraki
            </div>
            
            <div className="flex items-center gap-6">
                <div className="hidden md:flex gap-6 font-pixel text-white/80 text-sm tracking-widest">
                    {/* Placeholder links for future */}
                    {/*<span className="hover:text-white cursor-pointer hover:underline decoration-accent-400 underline-offset-4">HOME</span>
                    <span className="hover:text-white cursor-pointer hover:underline decoration-accent-400 underline-offset-4">ABOUT</span>
                    <span className="hover:text-white cursor-pointer hover:underline decoration-accent-400 underline-offset-4">EVENTS</span>
                    */}
                </div>
                <div className="text-white/90 font-terminal text-lg md:text-xl tracking-wide border-l-2 border-accent-500 pl-4 ml-4">
                    IIIT Una
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
