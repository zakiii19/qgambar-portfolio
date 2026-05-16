import React, { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { portfolioItems } from '../data/portofolioData';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredPortfolio = filter === 'All' 
    ? [
        portfolioItems.find(item => item.category === 'UI/UX'),
        portfolioItems.find(item => item.category === 'Branding'),
        portfolioItems.find(item => item.category === 'Social Media'),
        portfolioItems.find(item => item.category === 'Packaging and Print')
      ]
    : portfolioItems.filter(item => item.category === filter);

  const categories = ['All', 'UI/UX', 'Branding', 'Social Media', 'Packaging and Print'];

  return (
    <section id="portfolio" className="py-24 px-6 lg:px-24 bg-white dark:bg-[#121212] relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Selected Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">A curated selection of projects demonstrating versatility across digital and Social Media.</p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === f ? 'bg-[#5E2CA5] text-white shadow-md shadow-purple-500/20' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPortfolio.map((item, idx) => (
            item && (
              <div 
                key={idx} 
                onClick={() => window.open(item.link || '#', '_blank', 'noopener,noreferrer')}
                className="group relative rounded-3xl overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-800 aspect-[4/3] shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5E2CA5]/90 via-[#5E2CA5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 md:p-10">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold tracking-wider uppercase mb-3 w-max">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-2xl md:text-3xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#5E2CA5] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      <ChevronRight size={24} />
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => window.open('https://id.pinterest.com/qolbulmu_', '_blank', 'noopener,noreferrer')}
            className="inline-flex items-center gap-2 text-[#5E2CA5] dark:text-purple-400 font-bold hover:text-[#4a2384] dark:hover:text-purple-300 transition-colors bg-transparent border-none cursor-pointer"
          >
            View Full Archive <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
