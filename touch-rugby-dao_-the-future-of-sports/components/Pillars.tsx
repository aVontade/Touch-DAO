
import React from 'react';

const Pillars: React.FC = () => {
  const pillars = [
    {
      title: "Transparency",
      desc: "Every financial transaction, every vote, every decision is recorded on a public digital ledger (the blockchain) that anyone can check anytime.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Community Ownership",
      desc: "Instead of venture capitalists or distant executives owning our sport, WE own it through digital tokens ($TOUCH tokens).",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      ),
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Merit-Based Governance",
      desc: "The more you contribute (play, create content, organize events), the more voting power you earn. Value creation matters.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 15h2"/><path d="M15 15h2"/><path d="M7 15h2"/><path d="M3 21h18"/><path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"/><path d="M21 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7"/><path d="M12 11h.01"/></svg>
      ),
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-tr ${pillar.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity blur-xl`}></div>
              <div className="glass p-10 rounded-3xl border border-slate-800 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-black/20`}>
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
