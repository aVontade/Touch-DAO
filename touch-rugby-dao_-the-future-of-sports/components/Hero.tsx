
import React from 'react';

interface HeroProps {
  onOpenAI: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAI }) => {
  return (
    <section className="pt-32 pb-20 px-4 md:pt-48 md:pb-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Future of Sports Governance
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 italic">
            OWN THE <span className="text-gradient">GAME</span>,<br /> 
            SHAPE THE <span className="text-gradient">FUTURE</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Welcome to the first community-owned, community-governed Olympic sport. Join the revolution that's fixing governance and empowering players globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#what-is-dao" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20 text-center">
              Get Started
            </a>
            <button 
              onClick={onOpenAI}
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 rounded-xl font-bold text-lg border border-slate-700 transition-all flex items-center justify-center gap-2 group"
            >
              Ask AI Consultant
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="text-center">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-xs uppercase tracking-widest font-semibold">Members</div>
            </div>
            <div className="h-8 w-px bg-slate-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">$2M</div>
              <div className="text-xs uppercase tracking-widest font-semibold">Treasury</div>
            </div>
            <div className="h-8 w-px bg-slate-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">14</div>
              <div className="text-xs uppercase tracking-widest font-semibold">Languages</div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-1000"></div>
          <div className="relative glass rounded-[2rem] p-4 border border-slate-800 overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/rugby/800/600" 
              alt="Touch Rugby Action" 
              className="w-full h-auto rounded-2xl object-cover aspect-video"
            />
            <div className="absolute top-8 left-8 p-4 glass rounded-xl border border-white/10 shadow-lg animate-bounce">
              <div className="flex items-center gap-2 text-sm font-bold text-blue-400">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                LIVE VOTE: Rule Change #42
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
