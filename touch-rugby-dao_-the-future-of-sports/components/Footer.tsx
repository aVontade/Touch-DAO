
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-4 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div id="register" className="glass rounded-[3rem] p-12 md:p-20 border border-blue-500/20 mb-20 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-blue-600/10 blur-[120px]"></div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic relative z-10 leading-tight">
            The whistle is about to blow.<br />
            <span className="text-gradient">Will you answer the call?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-10 py-5 bg-white text-black hover:bg-slate-200 rounded-2xl font-black text-xl transition-all transform hover:scale-105 shadow-2xl">
              REGISTER INTEREST
            </button>
            <button className="px-10 py-5 glass border border-slate-700 hover:bg-slate-800 rounded-2xl font-bold text-xl transition-all">
              JOIN DISCORD
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-20 text-slate-400">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center font-black italic">T</div>
              <span className="text-xl font-bold">TOUCH RUGBY DAO</span>
            </div>
            <p className="max-w-xs leading-relaxed">
              Transforming Touch Rugby into a global community-owned superpower through decentralization and transparency.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Governance</a></li>
              <li><a href="#whitepaper" className="hover:text-blue-400 transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Brand Assets</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>community@touchrugbydao.global</li>
              <li>@TouchRugbyDAO</li>
              <li>Telegram Channel</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-slate-900 text-sm text-slate-500">
          <p>© 2025 Touch Rugby Community Transition Team. Built for the community, by the community.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Governance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
