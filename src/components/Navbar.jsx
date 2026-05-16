import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LEFT SIDE: Logo Only */}
        <div className="font-bold text-2xl tracking-tighter text-[#5E2CA5] dark:text-purple-400 cursor-pointer">
          <img src="image/my-icon.png" alt="Qolbul Muzakilogo" className="w-10 h-10 inline-block mr-1 mb-2" />
          Qolbul Muzaki
        </div>

        {/* RIGHT SIDE: Menu, CTA & Dark Mode */}
        <div className="flex items-center gap-6 lg:gap-8">
          {/* Menu Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {['Services', 'Portfolio', 'About'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#5E2CA5] dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:inline-block bg-[#5E2CA5] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4a2384] hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-0.5">
              Let's Talk
            </a>
            
            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-gray-200 dark:bg-gray-700"></div>

            <button 
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
