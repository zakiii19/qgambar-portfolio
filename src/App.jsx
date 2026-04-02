import React, { useState } from 'react';
import { 
  MonitorSmartphone, Hexagon, Megaphone, Package, 
  ArrowRight, Mail, Layout, PenTool, Code, FileSpreadsheet,
  CheckCircle2, ChevronRight, Sun, Moon, Briefcase, GraduationCap, Award
} from 'lucide-react';

export default function App() {
  const [filter, setFilter] = useState('All');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  // Fungsi untuk menangani perubahan input form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi untuk mengirim pesan (membuka aplikasi email dengan data form)
  const handleSendMessage = (e) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    
    // Format subjek dan isi pesan
    const subject = encodeURIComponent(`Project Inquiry: ${service} - dari ${name}`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\nLayanan yang dibutuhkan: ${service}\n\nDetail Proyek:\n${message}`);
    
    // Buka aplikasi email default
    window.location.href = `mailto:zakiqolbulmuzaki@gmail.com?subject=${subject}&body=${body}`;
  };

  const portfolioItems = [
    // UI/UX Projects
    { title: 'UI / UX Study Case Pijar Music', category: 'UI/UX', img: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*Zkr8P7Iu5ysYvnVOJbUJvw.png', link: 'https://medium.com/@qolbulmuzaki/ui-ux-study-case-pijar-music-9b8632e3e935' },
    { title: 'Digital Banking Dashboard', category: 'UI/UX', img: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*cMEL8rWqfwml3sh82jixGQ.png', link: 'https://medium.com/@qolbulmuzaki/digital-banking-dashboard-6d0fd93b6ec5' },
    { title: 'Redesain Aplikasi Surplus', category: 'UI/UX', img: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*FcYsYuowHDLTZHpNDstYMA.png', link: 'https://medium.com/@qolbulmuzaki/redesain-aplikasi-surplus-final-project-studi-independen-kampus-merdeka-di-greatedu-a3ef88787dff' },
    // { title: 'Medica Patient Dashboard', category: 'UI/UX', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', link: 'https://dribbble.com' },
    
    // Branding Projects
    { title: 'AMJD.Shoot Logo', category: 'Branding', img: 'https://i.pinimg.com/1200x/68/5e/ee/685eee57e1dacb49f9ed4c679090589e.jpg', link: 'https://pin.it/ThAVavKrH' },
    { title: 'OKPT Mascot', category: 'Branding', img: 'https://i.pinimg.com/736x/ea/d9/2c/ead92cbe9c8b376f3cfdcd8d6fdcf52d.jpg', link: 'https://pin.it/1rYsQxCd5' },
    { title: 'Anil Mascot', category: 'Branding', img: 'https://i.pinimg.com/736x/5b/2d/08/5b2d0843aa1955c899c839826d172d6a.jpg', link: 'https://pin.it/4zFlBBNBL' },
    { title: 'GreenEarth Guidelines', category: 'Branding', img: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=800&q=80', link: 'https://behance.net' },
    
    // Packaging Projects
    { title: 'Rice Bowl Die-cut Sleeve', category: 'Packaging', img: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=800&q=80', link: 'https://pinterest.com' },
    { title: 'Peak Roast Coffee Bags', category: 'Packaging', img: 'https://images.unsplash.com/photo-1606240724602-5b21f896eae8?auto=format&fit=crop&w=800&q=80', link: 'https://pinterest.com' },
    { title: 'Aura Cosmetics Labels', category: 'Packaging', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80', link: 'https://pinterest.com' },
    { title: 'NatureBites Snack Box', category: 'Packaging', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80', link: 'https://pinterest.com' },
    
    // Print Projects
    { title: 'SchoolTechId Marketing', category: 'Print', img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80', link: 'https://instagram.com' },
    { title: 'Luxury Villa Catalog', category: 'Print', img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80', link: 'https://instagram.com' },
    { title: 'UNNES Tech Seminar Poster', category: 'Print', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80', link: 'https://instagram.com' },
    { title: 'Summer Fest Brochure', category: 'Print', img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80', link: 'https://instagram.com' }
  ];

  const filteredPortfolio = filter === 'All' 
    ? [
        portfolioItems.find(item => item.category === 'UI/UX'),
        portfolioItems.find(item => item.category === 'Branding'),
        portfolioItems.find(item => item.category === 'Packaging'),
        portfolioItems.find(item => item.category === 'Print')
      ]
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-25%); }
          }
          .animate-marquee {
            animation: marquee 50s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="min-h-screen bg-[#F9F9FA] dark:bg-[#121212] text-gray-800 dark:text-gray-200 font-sans selection:bg-[#5E2CA5] selection:text-white overflow-x-hidden transition-colors duration-300">
        
        {/* HEADER / NAV */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* LEFT SIDE: Logo Only */}
            <div className="font-bold text-2xl tracking-tighter text-[#5E2CA5] dark:text-purple-400 cursor-pointer">
              <img src="image/vite.svg" alt="Qolbul Muzakilogo" className="w-8 h-8 inline-block mr-2" />
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
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2.5 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  aria-label="Toggle Dark Mode"
                >
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>

          </div>
        </nav>

        {/* 3.1 HERO SECTION */}
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

        {/* 3.2 TRUSTED BY / CLIENTS */}
        <section className="py-12 border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-[#121212] overflow-hidden relative z-10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 mb-8">
            <p className="text-center text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Trusted by & Collaborated With</p>
          </div>
          
          {/* Marquee Wrapper */}
          <div className="relative flex overflow-hidden group w-full bg-white dark:bg-[#121212] transition-colors duration-300">
            {/* Fading Edges */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white dark:from-[#121212] to-transparent z-10 pointer-events-none transition-colors duration-300"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white dark:from-[#121212] to-transparent z-10 pointer-events-none transition-colors duration-300"></div>

            {/* Marquee Content */}
            <div className="flex w-max animate-marquee opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-shrink-0 items-center justify-around gap-12 lg:gap-24 px-6 lg:px-12 w-max">
                  {/* <div className="flex items-center gap-2"><Hexagon size={24} className="text-blue-600 dark:text-blue-400"/><span className="text-xl font-bold font-serif text-gray-800 dark:text-gray-200 whitespace-nowrap">LJH Realty</span></div>
                  <div className="flex items-center gap-2"><div className="w-6 h-6 bg-green-500 dark:bg-green-400 rounded-full"></div><span className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white whitespace-nowrap">NeoBank</span></div>
                  <div className="flex items-center gap-2"><MonitorSmartphone size={24} className="text-indigo-500 dark:text-indigo-400"/><span className="text-xl font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap">SchoolTechId</span></div>
                  <span className="text-xl font-black uppercase tracking-widest text-gray-800 dark:text-gray-200 whitespace-nowrap">SMA N 11</span>
                  <div className="flex flex-col items-center leading-tight whitespace-nowrap">
                    <span className="text-sm font-bold text-yellow-600 dark:text-yellow-500 uppercase tracking-wider">1st Place</span>
                    <span className="text-lg font-bold text-gray-800 dark:text-gray-200">UNNES Poster</span>
                  </div> */}
                  <div className="flex items-center gap-2"><img src="image/Logo LJH.png" alt="LJH Realty Logo" className='max-h-10'/><span className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap">Semarang Kota</span></div>
                  <div className="flex items-center gap-2"><img src="image/Logo Platinum.png" alt="Platinum Logo" className='max-h-10'/></div>
                  <div className="flex items-center gap-2"><img src="image/Logo AMJD.png" alt="AMJD.SHOOT Logo" className='max-h-10'/><span className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap italic">AMJD.Shoot</span></div>
                  <div className="flex items-center gap-2"><img src="image/Logo GANGLIOFID.png" alt="GANGLIOFID Logo" className='max-h-6'/><span className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap"></span></div>
                  <div className="flex items-center gap-2"><img src="image/Logo CKJ.png" alt="CKJ MANAGEMENT Logo" className='max-h-10'/><span className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap">CKJ Management</span></div>
                  <div className="flex items-center gap-2"><img src="image/Logo PHOTO INSTAX SEMARANG.png" alt="PHOTO INSTAX SEMARANG Logo" className='max-h-10'/><span className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap">Photo Instax Semarang</span></div>
                  <div className="flex items-center gap-2"><img src="image/Logo PRASADA FUSHION.png" alt="PRASADA FUSHION Logo" className='max-h-14'/><span className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap"></span></div>
                  <div className="flex items-center gap-2"><img src="image/Logo MEGACODIFY.png" alt="MEGACODIFY Logo" className='max-h-8'/><span className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap"></span></div>
                  <div className="flex items-center gap-2"><img src="image/Logo SCHOOLTECHID.png" alt="SCHOOLTECHID Logo" className='max-h-12'/><span className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap">SchoolTech Indonesia</span></div>
                  <div className="flex items-center gap-2"><img src="image/Logo VIULA STUDIO.png" alt="VIULA STUDIO Logo" className='max-h-14'/><span className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap"></span></div>
                  <div className="flex items-center gap-2"><img src="image/Logo GUDHA PRANAHARA INDONESIA.png" alt="GUDHA PRANAHARA INDONESIA Logo" className='max-h-10'/><span className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap">Gudha Pranahara Indonesia</span></div>
                  <div className="flex items-center gap-2"><img src="image/Logo INAGO DESIGN.png" alt="INAGO DESIGN Logo" className='max-h-10'/><span className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap"></span></div>
                  <div className="flex items-center gap-2"><img src="image/Logo KOLAVIT.png" alt="KOLAVIT Logo" className='max-h-14'/><span className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap"></span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3.3 SERVICES SECTION */}
        <section id="services" className="py-24 px-6 lg:px-24 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Core Expertise</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Comprehensive design solutions tailored to elevate your business presence across all touchpoints.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <MonitorSmartphone size={32} strokeWidth={1.5} />, title: 'UI/UX Design', desc: 'App and website interfaces, user flows, and usability improvements that convert.' },
              { icon: <Hexagon size={32} strokeWidth={1.5} />, title: 'Branding & Identity', desc: 'Memorable logos, comprehensive brand guidelines, and unique character mascots.' },
              { icon: <Megaphone size={32} strokeWidth={1.5} />, title: 'Marketing Collateral', desc: 'Eye-catching posters, social media carousels, and high-converting digital banners.' },
              { icon: <Package size={32} strokeWidth={1.5} />, title: 'Packaging Design', desc: 'Physical product packaging, custom die-cut sleeves, and attractive labels.' }
            ].map((service, idx) => (
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

        {/* 3.4 PORTFOLIO GALLERY */}
        <section id="portfolio" className="py-24 px-6 lg:px-24 bg-white dark:bg-[#121212] relative z-10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Selected Works</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl">A curated selection of projects demonstrating versatility across digital and print mediums.</p>
              </div>
              
              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {['All', 'UI/UX', 'Branding', 'Packaging', 'Print'].map(f => (
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
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button 
                onClick={() => window.open('https://id.pinterest.com/', '_blank', 'noopener,noreferrer')}
                className="inline-flex items-center gap-2 text-[#5E2CA5] dark:text-purple-400 font-bold hover:text-[#4a2384] dark:hover:text-purple-300 transition-colors bg-transparent border-none cursor-pointer"
              >
                View Full Archive <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* 3.6 ABOUT ME & CAREER HISTORY */}
        <section id="about" className="py-24 px-6 lg:px-24 max-w-7xl mx-auto relative z-10">
          
          {/* Top Row: Bio & Experience parallel */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            
            {/* Left Column: Bio */}
            <div>
              <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/40 text-[#5E2CA5] dark:text-purple-300 font-bold rounded-lg mb-6 text-sm tracking-wide uppercase">
                Behind The Designs
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5E2CA5] to-indigo-500">Qolbul Muzaki</span>.
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                I blend a <span className="font-semibold text-gray-900 dark:text-white">system analyst's logical mindset</span> with a designer's creative eye. My goal is to bridge the gap between complex technical requirements and beautiful, intuitive aesthetics. Whether it's an app interface, a memorable mascot, or striking packaging, I design with purpose and precision.
              </p>
            </div>

            {/* Right Column: Career History Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                <Briefcase className="text-[#5E2CA5]" size={28} /> 
                Experience & Background
              </h3>
              
              <div className="space-y-8 border-l-2 border-purple-100 dark:border-purple-900/50 ml-3 pl-8 relative">
                
                {/* Experience 1 */}
                <div className="relative group">
                  <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#F9F9FA] dark:bg-[#121212] border-4 border-[#5E2CA5] group-hover:scale-125 transition-transform duration-300"></span>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#5E2CA5] dark:group-hover:text-purple-400 transition-colors">Graphic Designer</h4>
                  <p className="text-[#5E2CA5] dark:text-purple-400 font-semibold text-sm mb-2 mt-1">Real Estate Sector (LJH Realty) • Present</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Leading creative direction for property marketing, producing high-converting digital assets, brand identities, and compelling promotional collateral.
                  </p>
                </div>

                {/* Education */}
                <div className="relative group">
                  <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#F9F9FA] dark:bg-[#121212] border-4 border-gray-300 dark:border-gray-600 group-hover:border-[#5E2CA5] group-hover:scale-125 transition-all duration-300"></span>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap size={20} className="text-gray-400 dark:text-gray-500 group-hover:text-[#5E2CA5] transition-colors" />
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#5E2CA5] dark:group-hover:text-purple-400 transition-colors">Informatics & Computer Eng.</h4>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 font-semibold text-sm mb-2">Universitas Negeri Semarang (UNNES)</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Developed a strong foundation in software systems, human-computer interaction, and digital logic, directly informing my structured UI/UX process.
                  </p>
                </div>

                {/* Certifications */}
                <div className="relative group">
                  <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#F9F9FA] dark:bg-[#121212] border-4 border-gray-300 dark:border-gray-600 group-hover:border-[#5E2CA5] group-hover:scale-125 transition-all duration-300"></span>
                  <div className="flex items-center gap-2 mb-1">
                    <Award size={20} className="text-gray-400 dark:text-gray-500 group-hover:text-[#5E2CA5] transition-colors" />
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#5E2CA5] dark:group-hover:text-purple-400 transition-colors">Professional Certifications</h4>
                  </div>
                  <ul className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed list-disc list-inside mt-2 space-y-1">
                    <li>BNSP Certified System Analyst</li>
                    <li>Microsoft Office Specialist: Excel Associate</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Row: Design Process (Horizontal Layout) */}
          <div className="bg-white dark:bg-gray-900 p-8 sm:p-12 lg:p-16 rounded-[2.5rem] shadow-xl shadow-purple-900/5 dark:shadow-none border border-gray-100 dark:border-gray-800 transition-colors duration-300 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-transparent dark:from-purple-900/20 rounded-bl-full -z-10 opacity-50"></div>
            
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">The Design Process</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">A structured, system-analyst approach to transforming complex problems into elegant, user-centric solutions.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
              {/* Connecting Line (Desktop Only) */}
              <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-purple-100 dark:bg-gray-700 z-0"></div>
              
              {[
                { title: 'Discovery', desc: 'Analyzing requirements, constraints, and target audience.' },
                { title: 'Concept', desc: 'Wireframes, sketches, and establishing visual direction.' },
                { title: 'Refinement', desc: 'High-fidelity crafting with iterative feedback loops.' },
                { title: 'Delivery', desc: 'Final asset handover and structured deployment.' }
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center group cursor-default">
                  <div className="w-12 h-12 mb-6 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-[#5E2CA5] dark:text-purple-400 font-bold border-2 border-purple-100 dark:border-gray-700 group-hover:bg-[#5E2CA5] group-hover:text-white group-hover:border-[#5E2CA5] transition-all duration-300 shadow-sm group-hover:scale-110">
                    {idx + 1}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#5E2CA5] dark:group-hover:text-purple-400 transition-colors">{step.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm px-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3.7 CONTACT & FOOTER */}
        <section id="contact" className="bg-[#121212] text-white py-24 px-6 lg:px-24 mt-12 relative z-10">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-6 text-white">Let's build something great together.</h2>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                Whether you need a complete brand overhaul, a new app interface, or eye-catching packaging, I'm ready to help you stand out.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:zakiqolbulmuzaki@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#5E2CA5] transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Email Me</span>
                    <span className="font-semibold">zakiqolbulmuzaki@gmail.com</span>
                  </div>
                </a>
              </div>

              {/* Added Social Links */}
              <div className="mt-12 pt-10 border-t border-gray-800/60">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-[#5E2CA5] animate-pulse"></span>
                  <span className="text-sm font-bold text-gray-300 tracking-wider uppercase">Connect & Follow Me</span>
                </div>
                
                <div className="flex gap-4">
                  {[
                    {
                      name: 'LinkedIn',
                      link: 'https://linkedin.com/in/zakiqolbulmuzaki', // Sesuaikan link asli Anda di sini
                      icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    },
                    {
                      name: 'Instagram',
                      link: 'https://instagram.com/zakiqolbulmuzaki', // Sesuaikan link asli Anda di sini
                      icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    },
                    {
                      name: 'Pinterest',
                      link: 'https://pinterest.com/zakiqolbulmuzaki', // Sesuaikan link asli Anda di sini
                      icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z"/></svg>
                    },
                    {
                      name: 'Medium',
                      link: 'https://medium.com/@zakiqolbulmuzaki', // Sesuaikan link asli Anda di sini
                      icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                    }
                  ].map((platform) => (
                    <button 
                      key={platform.name} 
                      type="button"
                      onClick={() => window.open(platform.link, '_blank', 'noopener,noreferrer')}
                      title={platform.name}
                      className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-900/50 border border-gray-800 text-gray-400 hover:bg-[#5E2CA5] hover:text-white hover:border-[#5E2CA5] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_-3px_#5E2CA5] cursor-pointer"
                    >
                      {platform.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-gray-900 p-8 md:p-10 rounded-3xl border border-gray-800">
              <form className="space-y-6" onSubmit={handleSendMessage}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      className="w-full bg-gray-950 border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:border-[#5E2CA5] focus:ring-1 focus:ring-[#5E2CA5] transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      className="w-full bg-gray-950 border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:border-[#5E2CA5] focus:ring-1 focus:ring-[#5E2CA5] transition-all" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Service Needed</label>
                  <select 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-950 border border-gray-800 rounded-xl p-4 text-gray-300 focus:outline-none focus:border-[#5E2CA5] focus:ring-1 focus:ring-[#5E2CA5] transition-all appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Branding & Identity">Branding & Identity</option>
                    <option value="Packaging Design">Packaging Design</option>
                    <option value="Marketing Collateral">Marketing Collateral</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Project Details</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project timeline and goals..." 
                    rows="4" 
                    className="w-full bg-gray-950 border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:border-[#5E2CA5] focus:ring-1 focus:ring-[#5E2CA5] transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#5E2CA5] hover:bg-[#4a2384] transition-colors text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-900/50 flex justify-center items-center gap-2"
                >
                  Send Message <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="bg-[#0a0a0a] text-gray-400 py-12 text-center text-sm border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-bold text-white text-2xl tracking-tighter">Qolbul Muzaki</div>
            <p>&copy; 2026 Qolbul Muzaki All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Behance</a>
              <a href="#" className="hover:text-white transition-colors">Dribbble</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}