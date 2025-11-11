import React from 'react';
import Hero from '../components/Hero.jsx'; 
import ContactForm from '../components/ContactForm.jsx';
function HomePage() {
    return (
        <>
        <Hero/>
        
        <ContactForm /> {/* 2. Add it right here */}
        </>
    );
}export default HomePage;