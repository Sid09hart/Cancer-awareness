import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroBackgroundImage from '../assets/Fight-cancer.jpg';

// --- Animation Variants (no change) ---
const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};
const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const quoteReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  }
};
const quoteBoxAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.5 },
  },
  breathe: {
    scale: [1, 1.02, 1],
    rotate: [0, 0.5, 0],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
};
// --- End Variants ---

function Hero() {
  // --- Quote Logic (no change) ---
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchNewQuote = () => {
    setIsLoading(true);
    fetch('https://dummyjson.com/quotes/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.quote);
        setAuthor(data.author);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching quote:", error);
        setQuote("Failed to fetch quote. Please try again later.");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);
  // --- End Quote Logic ---

  return (
    <div 
      className="relative w-full h-[80vh] // Fixed height
                 flex items-center justify-center text-center overflow-hidden" 
      style={{
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10" />

      {/* Content Container (Adjusted max-w and padding) */}
      <div className="relative z-20 container mx-auto max-w-5xl // Slightly less max-w
                      px-4 pt-8 pb-4 sm:px-6 lg:px-8 // Added explicit top/bottom padding to container
                      flex flex-col items-center justify-center h-full // Ensure content fills and centers vertically
                     ">
        
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Main Hero Text (reduced margin-top) */}
          <motion.h1
            variants={textItem}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            <span className="text-white">Let's Fight</span>
            <span className="text-[var(--accent-pink)] ml-3">Cancer</span>
          </motion.h1>
          
          <motion.p variants={textItem} className="mt-4 text-lg text-gray-200 // Reduced mt
                                                   max-w-2xl">
            Join us in our mission to spread awareness, offer support,
            and fund critical research. Together, we can make a difference.
          </motion.p>

          {/* Quote Box (reduced margin-top, smaller vertical padding) */}
          <motion.div
            variants={quoteBoxAnimation}
            initial="initial"
            animate={["animate", "breathe"]}
            className="mt-8 w-full // Reduced mt
                       max-w-5xl
                       relative
                       p-6 sm:p-8 md:p-10 // Reduced vertical padding
                       backdrop-blur-xl bg-white/20 
                       shadow-2xl shadow-[rgba(255,102,153,0.3)] 
                       [clip-path:polygon(10%_0%,_90%_5%,_100%_40%,_90%_100%,_0%_95%,_0%_60%)] 
                       before:content-[''] before:absolute before:inset-0 before:border 
                       before:border-white/40 before:rounded-lg
                       before:[clip-path:polygon(10%_0%,_90%_5%,_100%_40%,_90%_100%,_0%_95%,_0%_60%)]"
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.p
                  key="loading"
                  variants={quoteReveal}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-lg text-gray-800"
                >
                  Loading...
                </motion.p>
              ) : (
                <motion.blockquote
                  key={quote}
                  variants={quoteReveal}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  // QUOTE TEXT SIZE DECREASED SLIGHTLY FOR SMALLER SCREENS
                  className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-gray-900" 
                >
                  "{quote}"
                  <motion.footer 
                    variants={quoteReveal}
                    className="mt-4 text-lg not-italic font-bold text-[var(--brand-dark-purple)]" // Reduced mt
                  >
                    — {author}
                  </motion.footer>
                </motion.blockquote>
              )}
            </AnimatePresence>
          </motion.div>

          {/* "Get New Quote" Button (reduced margin-top) */}
          <motion.button
            onClick={fetchNewQuote}
            disabled={isLoading}
            className="mt-4 px-6 py-2 border-2 border-white // Reduced mt
                       text-sm font-bold rounded-full text-white
                       hover:bg-white hover:text-[var(--accent-pink)]
                       transition-all duration-300 disabled:opacity-50"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? "Loading..." : "Get New Quote"}
          </motion.button>
          
        </motion.div>

      </div>
    </div>
  );
}

export default Hero;