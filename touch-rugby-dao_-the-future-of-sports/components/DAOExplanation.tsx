
import React from 'react';

const DAOExplanation: React.FC = () => {
  return (
    <section id="what-is-dao" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">What Exactly is a <span className="text-blue-500">DAO</span>?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Forget boardrooms and closed doors. A DAO (Decentralized Autonomous Organization) is like your local sports club, but evolved for the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-3xl border border-red-500/20 group hover:border-red-500/40 transition-all">
            <div className="text-red-500 mb-4 font-bold tracking-tighter text-sm uppercase">Traditional Sports Org</div>
            <h3 className="text-2xl font-bold mb-4">The Monarchy Model</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">✕</div>
                Few people at the top make all decisions.
              </li>
              <li className="flex gap-3 text-slate-400">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">✕</div>
                Opaque financial records and audits.
              </li>
              <li className="flex gap-3 text-slate-400">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">✕</div>
                Owned by distant executives or VCs.
              </li>
            </ul>
          </div>

          <div className="glass p-8 rounded-3xl border border-green-500/20 group hover:border-green-500/40 transition-all">
            <div className="text-green-500 mb-4 font-bold tracking-tighter text-sm uppercase">The DAO Model</div>
            <h3 className="text-2xl font-bold mb-4">The Digital Democracy</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-300">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">✓</div>
                Every member has a voice and a vote.
              </li>
              <li className="flex gap-3 text-slate-300">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">✓</div>
                100% transparent: See exactly where every dollar goes.
              </li>
              <li className="flex gap-3 text-slate-300">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">✓</div>
                Owned by YOU - the players, coaches, and fans.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DAOExplanation;
