
import React from 'react';

const Tokenomics: React.FC = () => {
  const utilities = [
    { title: "Voting Power", desc: "1 token = 1 vote. Your voice scales with your stake.", icon: "🗳️" },
    { title: "Access", desc: "Unlock premium content, VIP events, and beta tools.", icon: "🔑" },
    { title: "Rewards", desc: "Earn tokens for coaching, playing, or content creation.", icon: "💎" },
    { title: "Ownership", desc: "A share in the overall success of the ecosystem.", icon: "🏢" },
  ];

  return (
    <section className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">The <span className="text-gradient">$TOUCH</span> Token</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Think of the $TOUCH token as your digital membership card, your voting ballot, and your ownership certificate all in one.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {utilities.map((u) => (
                <div key={u.title} className="glass p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all">
                  <div className="text-3xl mb-3">{u.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{u.title}</h4>
                  <p className="text-slate-400 text-sm">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[120px] group-hover:bg-blue-600/20 transition-all"></div>
            <div className="relative w-full aspect-square rounded-full border border-slate-800 p-12 flex items-center justify-center animate-pulse">
              <div className="w-full h-full rounded-full border-2 border-dashed border-blue-500/20 absolute animate-[spin_20s_linear_infinite]"></div>
              <div className="w-48 h-48 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-600/50">
                <span className="text-7xl font-black italic text-white drop-shadow-lg">T</span>
              </div>
              
              <div className="absolute top-10 left-10 p-4 glass rounded-2xl border border-white/10 text-xs font-bold whitespace-nowrap">
                PROPOSAL #12: OLYMPIC BID
              </div>
              <div className="absolute bottom-20 right-0 p-4 glass rounded-2xl border border-white/10 text-xs font-bold whitespace-nowrap">
                REWARD: +50 $TOUCH
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
