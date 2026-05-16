import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'Semarang Kota', img: 'image/Logo LJH.png', label: 'LJH Realty Logo', class: 'max-h-10' },
    { name: '', img: 'image/Logo Platinum.png', label: 'Platinum Logo', class: 'max-h-10' },
    { name: 'AMJD.Shoot', img: 'image/Logo AMJD.png', label: 'AMJD.SHOOT Logo', class: 'max-h-10 italic' },
    { name: '', img: 'image/Logo GANGLIOFID.png', label: 'GANGLIOFID Logo', class: 'max-h-6' },
    { name: 'CKJ Management', img: 'image/Logo CKJ.png', label: 'CKJ MANAGEMENT Logo', class: 'max-h-10' },
    { name: 'Photo Instax Semarang', img: 'image/Logo PHOTO INSTAX SEMARANG.png', label: 'PHOTO INSTAX SEMARANG Logo', class: 'max-h-10' },
    { name: '', img: 'image/Logo PRASADA FUSHION.png', label: 'PRASADA FUSHION Logo', class: 'max-h-14' },
    { name: '', img: 'image/Logo MEGACODIFY.png', label: 'MEGACODIFY Logo', class: 'max-h-8' },
    { name: 'SchoolTech Indonesia', img: 'image/Logo SCHOOLTECHID.png', label: 'SCHOOLTECHID Logo', class: 'max-h-12' },
    { name: '', img: 'image/Logo VIULA STUDIO.png', label: 'VIULA STUDIO Logo', class: 'max-h-14' },
    { name: 'Gudha Pranahara Indonesia', img: 'image/Logo GUDHA PRANAHARA INDONESIA.png', label: 'GUDHA PRANAHARA INDONESIA Logo', class: 'max-h-10' },
    { name: '', img: 'image/Logo INAGO DESIGN.png', label: 'INAGO DESIGN Logo', class: 'max-h-10' },
    { name: '', img: 'image/Logo KOLAVIT.png', label: 'KOLAVIT Logo', class: 'max-h-14' },
  ];

  return (
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
              {clients.map((client, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <img src={client.img} alt={client.label} className={client.class} />
                  {client.name && (
                    <span className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap">
                      {client.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
