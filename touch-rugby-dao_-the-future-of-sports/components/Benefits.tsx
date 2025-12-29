
import React, { useState } from 'react';

const Benefits: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const personas = [
    {
      role: "Players",
      icon: "🏃",
      benefits: [
        "Earn $TOUCH tokens for participating in leagues.",
        "Vote on rule changes and game evolution.",
        "Build a digital player card NFT that grows with achievements.",
        "Exclusive access to 'Touch Rugby League' game features."
      ]
    },
    {
      role: "Coaches",
      icon: "📋",
      benefits: [
        "Directly propose budgets to the DAO treasury.",
        "Automated rewards for hitting player growth targets.",
        "Free access to pro software and sensor technology.",
        "Global recognition through blockchain verified records."
      ]
    },
    {
      role: "Fans",
      icon: "📣",
      benefits: [
        "Invest in the sport by holding $TOUCH tokens.",
        "Design team logos and stadiums as NFTs.",
        "Vote on tournament locations and jersey designs.",
        "VIP behind-the-scenes content and meet-and-greets."
      ]
    }
  ];

  return (
    <section id="benefits" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Benefits for <span className="text-blue-500">Everyone</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The DAO doesn't just benefit the people at the top. It's designed to reward every single participant in the ecosystem.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {personas.map((p, idx) => (
            <button
              key={p.role}
              onClick={() => setActiveTab(idx)}
              className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${activeTab === idx ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            >
              <span>{p.icon}</span> {p.role}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="glass rounded-[2.5rem] p-10 md:p-16 border border-slate-800 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-8 italic">As a <span className="text-gradient">{personas[activeTab].role}</span></h3>
                <ul className="space-y-6">
                  {personas[activeTab].benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">✓</div>
                      <p className="text-lg text-slate-300">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600/20 blur-[100px]"></div>
                <img 
                  src={`https://picsum.photos/seed/${personas[activeTab].role}/600/600`} 
                  alt={personas[activeTab].role}
                  className="relative w-full aspect-square object-cover rounded-3xl shadow-2xl border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
