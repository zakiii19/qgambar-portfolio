import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-12 text-center text-sm border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-bold text-white text-2xl tracking-tighter">Qolbul Muzaki</div>
        <p>&copy; 2026 Qolbul Muzaki All rights reserved.</p>
        <div className="flex gap-8">
          <a href="https://linkedin.com/in/qolbulmuzaki" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://instagram.com/qgambar_" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://id.pinterest.com/qolbulmu_" className="hover:text-white transition-colors">Pinterest</a>
          <a href="https://medium.com/@qolbulmuzaki" className="hover:text-white transition-colors">Medium</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
