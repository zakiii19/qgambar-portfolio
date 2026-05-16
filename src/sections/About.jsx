import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
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
          
           <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <Briefcase className="text-[#5E2CA5]" size={28} /> 
            Background
          </h3>
          
          <div className="space-y-8 ml-3 pl-8 relative">
          
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

        {/* Right Column: Career History Timeline */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <Briefcase className="text-[#5E2CA5]" size={28} /> 
            Experience
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

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
