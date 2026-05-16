import React from 'react';
import './App.css';

// Hooks
import { useDarkMode } from './hooks/useDarkMode';

// Components
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import Clients from './sections/Clients';
import Services from './sections/Services';
import About from './sections/About';

export default function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[#F9F9FA] dark:bg-[#121212] text-gray-800 dark:text-gray-200 font-sans selection:bg-[#5E2CA5] selection:text-white overflow-x-hidden transition-colors duration-300">
        
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <main>
          <Hero />
          <Clients />
          <Services />
          <Portfolio />
          <About />
          <ContactForm />
        </main>

        <Footer />
      </div>
    </div>
  );
}