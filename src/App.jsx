// src/App.jsx (Completely new code)
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
// We'll create a ContactPage soon

function App() {
  return (
    <Routes>
      {/* This "Layout" route wraps all our pages */}
      
      <Route path="/" element={<Layout />}>
        
        {/* The index route (path="/") will be our HomePage */}
        <Route index element={<HomePage />} />

        {/* Later, we can add more pages like this: */}
        {/* <Route path="contact" element={<ContactPage />} /> */}
        {/* <Route path="about" element={<AboutPage />} /> */}

      </Route>
    </Routes>
  );
}

export default App;