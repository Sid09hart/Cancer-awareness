import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

// --- Animation Variant (no change) ---
const formAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  },
};

function ContactForm() {
  // --- Form State (no change) ---
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form Submitted:', { name, email, message });
    toast.success('Thank you for your message!');
    setName('');
    setEmail('');
    setMessage('');
  };
  // --- End Form State ---

  return (
    // 1. THIS IS THE CHANGE:
    //    The gradient now starts from the bottom (from-),
    //    goes through white (via-), and ends at white (to-).
    <motion.div
      variants={formAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full py-16 md:py-24 overflow-hidden
                 bg-gradient-to-t from-[#E0BBE4] via-white to-white"
      id="contact"
    >
      {/* 2. NO OVERLAY OR BLOBS NEEDED */}

      {/* 3. CONTENT CONTAINER (no change) */}
      <div className="relative z-10 container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Text (no change) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Have questions or want to get involved? Send us a message!
          </p>
        </div>

        {/* --- Form - Simple White Card (no change) --- */}
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6 bg-white p-8 sm:p-10 rounded-xl shadow-xl"
        >
          {/* Form Fields (no change) */}
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700">
              Name
            </label>
            <input
              type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm 
                         focus:ring-[var(--brand-purple)] focus:border-[var(--brand-purple)]"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm 
                         focus:ring-[var(--brand-purple)] focus:border-[var(--brand-purple)]"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-700">
              Message
            </label>
            <textarea
              id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm 
                         focus:ring-[var(--brand-purple)] focus:border-[var(--brand-purple)]"
              placeholder="Your message..."
            />
          </div>

          {/* "Send Message" Button (no change) */}
          <div>
            <motion.button
              type="submit"
              className="w-full flex justify-center px-6 py-3 border border-transparent
                         text-base font-bold rounded-md text-white 
                         bg-[var(--brand-purple)] hover:bg-purple-700
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--brand-purple)]
                         transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </div>
        </form>

      </div>
    </motion.div>
  );
}

export default ContactForm;