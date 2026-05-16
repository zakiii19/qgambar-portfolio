import React from 'react';
import { MonitorSmartphone, Hexagon, Megaphone, Package } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <MonitorSmartphone size={32} strokeWidth={1.5} />, title: 'UI/UX Design', desc: 'App and website interfaces, user flows, and usability improvements that convert.' },
    { icon: <Hexagon size={32} strokeWidth={1.5} />, title: 'Branding & Identity', desc: 'Memorable logos, comprehensive brand guidelines, and unique character mascots.' },
    { icon: <Megaphone size={32} strokeWidth={1.5} />, title: 'Marketing Collateral', desc: 'Eye-catching posters, social media carousels, and high-converting digital banners.' },
    { icon: <Package size={32} strokeWidth={1.5} />, title: 'Packaging and Print Design', desc: 'Physical product packaging, custom die-cut sleeves, and attractive labels.' }
  ];

  return (
    <section id="services" className="py-24 px-6 lg:px-24 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Core Expertise</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">Comprehensive design solutions tailored to elevate your business presence across all touchpoints.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-800 group">
            <div className="text-[#5E2CA5] dark:text-purple-400 mb-8 bg-purple-50 dark:bg-purple-900/30 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#5E2CA5] group-hover:text-white transition-all duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
