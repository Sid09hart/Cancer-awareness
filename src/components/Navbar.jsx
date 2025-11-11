import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

// --- Animation Variants (no change) ---
const navContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  },
};
// --- End Variants ---

function Navbar() {
  return (
    <motion.nav
      variants={navContainer}
      initial="hidden"
      animate="visible"
      className="w-full 
                 sticky top-0 z-50 
                 bg-white/80
                 backdrop-blur-md
                 shadow-sm
                 border-b border-gray-200/80
                "
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-3 items-center h-16">
          
          {/* --- Column 1: Logo (Aligned Left) --- */}
          <motion.div variants={navItem} className="justify-self-start">
            <NavLink to="/">
              <motion.span 
                className="font-bold text-2xl text-[var(--brand-purple)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Awareness Support
              </motion.span>
            </NavLink>
          </motion.div>

          {/* --- Column 2: Navigation Links (Centered) --- */}
          <div className="hidden sm:flex sm:space-x-8 justify-self-center">
            
            {/* Home Link (Added 'end' prop) */}
            <motion.div variants={navItem}>
              {/* 1. FIX: Added 'end' prop. This is critical. */}
              <NavLink 
                to="/" 
                end // This tells it to ONLY be active on the exact path "/"
                className={({ isActive }) => `text-lg font-medium transition-colors duration-200 ${isActive ? 'text-[var(--brand-purple)]' : 'text-gray-700 hover:text-black'}`}
              >
                <motion.span className="block" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>Home</motion.span>
              </NavLink>
            </motion.div>

            {/* About Link (FIXED) */}
            <motion.div variants={navItem}>
              {/* 2. FIX: Changed to="/about" */}
              <NavLink to="/about" className={({ isActive }) => `text-lg font-medium transition-colors duration-200 ${isActive ? 'text-[var(--brand-purple)]' : 'text-gray-700 hover:text-black'}`}>
                <motion.span className="block" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>About</motion.span>
              </NavLink>
            </motion.div>

            {/* Resources Link (FIXED) */}
            <motion.div variants={navItem}>
              {/* 3. FIX: Changed to="/resources" */}
              <NavLink to="/resources" className={({ isActive }) => `text-lg font-medium transition-colors duration-200 ${isActive ? 'text-[var(--brand-purple)]' : 'text-gray-700 hover:text-black'}`}>
                <motion.span className="block" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>Resources</motion.span>
              </NavLink>
            </motion.div>

            {/* Contact Link (FIXED) */}
            <motion.div variants={navItem}>
              {/* 4. FIX: Changed to a simple <a> tag with href="#contact" */}
              <a href="#contact" className="text-lg font-medium text-gray-700 hover:text-black transition-colors duration-200">
                <motion.span className="block" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>Contact</motion.span>
              </a>
            </motion.div>

          </div>

          {/* --- Column 3: "Donate" Button --- */}
          <motion.div variants={navItem} className="justify-self-end">
            <motion.a
              href="#" // This can link to a future donate page
              className="px-5 py-2 bg-[var(--brand-purple)]
                         text-base font-medium rounded-full text-white
                         hover:bg-purple-700
                         transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate
            </motion.a>
          </motion.div>

        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;