import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

const ContactForm = () => {
  const { formData, handleChange, handleSendMessage } = useContactForm({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const socialLinks = [
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/qolbulmuzaki',
      icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    },
    {
      name: 'Instagram',
      link: 'https://instagram.com/qgambar_',
      icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    },
    {
      name: 'Pinterest',
      link: 'https://id.pinterest.com/qolbulmu_',
      icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z"/></svg>
    },
    {
      name: 'Medium',
      link: 'https://medium.com/@qolbulmuzaki',
      icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
    }
  ];

  return (
    <section id="contact" className="bg-[#121212] text-white py-24 px-6 lg:px-24 mt-12 relative z-10">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-bold mb-6 text-white">Let's build something great together.</h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            Whether you need a complete brand overhaul, a new app interface, or eye-catching packaging, I'm ready to help you stand out.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:qolbulmuzaki@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#5E2CA5] transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <span className="block text-sm text-gray-500">Email Me</span>
                <span className="font-semibold">qolbulmuzaki@gmail.com</span>
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
              {socialLinks.map((platform) => (
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
  );
};

export default ContactForm;
