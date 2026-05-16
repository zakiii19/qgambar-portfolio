import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 lg:px-24 flex flex-col items-center text-center bg-white dark:bg-[#121212] min-h-[90vh] justify-center transition-colors duration-300">
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/30 text-[#5E2CA5] dark:text-purple-300 text-sm font-semibold mb-8 border border-purple-100 dark:border-purple-800/50">
          <span className="w-2 h-2 rounded-full bg-[#5E2CA5] dark:bg-purple-400 animate-pulse"></span>
          Available for new projects
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 max-w-4xl leading-[1.1]">
          Elevating Brands Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5E2CA5] to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Purposeful Design</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
          Professional design services bridging the gap between aesthetics and functionality. Specializing in Apps, UI/UX, branding, and packaging.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#contact" className="bg-[#5E2CA5] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4a2384] transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-purple-500/30 flex items-center justify-center gap-2">
            Start a Project <ArrowRight size={20} />
          </a>
          <a href="#portfolio" className="bg-white dark:bg-[#121212] border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-8 py-4 rounded-full font-semibold hover:border-[#5E2CA5] dark:hover:border-purple-400 hover:text-[#5E2CA5] dark:hover:text-purple-400 transition-all flex items-center justify-center">
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
