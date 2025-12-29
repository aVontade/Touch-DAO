
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'What is DAO?', href: '#what-is-dao' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center font-black text-xl text-white italic">T</div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">TOUCH RUGBY <span className="text-blue-500">DAO</span></span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#register" className="px-5 py-2 rounded-full text-sm font-semibold bg-white text-black hover:bg-slate-200 transition-all shadow-lg shadow-white/10 text-center">
            Join DAO
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
