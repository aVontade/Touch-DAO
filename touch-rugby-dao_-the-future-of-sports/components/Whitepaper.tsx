
import React from 'react';

const Whitepaper: React.FC = () => {
  return (
    <section id="whitepaper" className="py-24 px-4 bg-slate-950 border-t border-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6">
            Technical Specification v1.0
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 italic">THE <span className="text-gradient">WHITEPAPER</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive architectural blueprint for the world's first decentralized sport.
          </p>
        </div>

        <div className="glass rounded-[3rem] border border-slate-800 p-8 md:p-16 space-y-16">
          {/* Section 1: Abstract */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3 italic">
              <span className="text-blue-500">01.</span> Abstract
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              The Touch Rugby DAO (TR-DAO) implements a decentralized governance framework designed to solve the systemic inefficiencies of traditional sport federations. By utilizing Quadratic Voting, transparent treasury management via multi-sig execution, and a meritocratic reward system, TR-DAO aligns the incentives of players, coaches, and investors to foster global growth and Olympic inclusion.
            </p>
          </div>

          {/* Section 2: Governance Logic */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3 italic">
              <span className="text-purple-500">02.</span> Governance Mechanism
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-blue-400 mb-3">Quadratic Voting (QV)</h4>
                <p className="text-sm text-slate-400">
                  To prevent plutocracy (rule by the wealthy), voting power is calculated as the square root of the number of tokens held. 
                  <br/><br/>
                  <code className="bg-black/50 p-2 rounded block mt-2 text-blue-300 font-mono">Power = sqrt(Tokens)</code>
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-purple-400 mb-3">Proposal Lifecycle</h4>
                <ol className="text-sm text-slate-400 space-y-2 list-decimal list-inside">
                  <li>Submission (Min 1,000 $TOUCH)</li>
                  <li>Community Discussion (7 Days)</li>
                  <li>Snapshot Vote (Signal)</li>
                  <li>On-chain Tally (Binding)</li>
                  <li>Automatic Treasury Execution</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Section 3: Tokenomics */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3 italic">
              <span className="text-amber-500">03.</span> Tokenomics & Supply
            </h3>
            <div className="overflow-hidden rounded-2xl border border-slate-800">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-900 text-slate-300 uppercase font-bold text-xs tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Allocation</th>
                    <th className="px-6 py-4">Percentage</th>
                    <th className="px-6 py-4">Vesting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-400">
                  <tr>
                    <td className="px-6 py-4 text-white font-medium">Ecosystem Rewards</td>
                    <td className="px-6 py-4">40%</td>
                    <td className="px-6 py-4">Emissions over 10 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-white font-medium">Community Treasury</td>
                    <td className="px-6 py-4">20%</td>
                    <td className="px-6 py-4">DAO Controlled</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-white font-medium">Public Sale/Liquidity</td>
                    <td className="px-6 py-4">20%</td>
                    <td className="px-6 py-4">Unlocked at TGE</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-white font-medium">Team & Advisors</td>
                    <td className="px-6 py-4">20%</td>
                    <td className="px-6 py-4">2 Year Cliff, 4 Year Linear</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Technology Stack */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3 italic">
              <span className="text-cyan-500">04.</span> Technical Architecture
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-4 glass rounded-xl border border-slate-800 text-center">
                <div className="text-cyan-400 font-mono text-xs mb-2">NETWORK</div>
                <div className="font-bold text-white">Layer 2 (Base/Poly)</div>
              </div>
              <div className="p-4 glass rounded-xl border border-slate-800 text-center">
                <div className="text-cyan-400 font-mono text-xs mb-2">STANDARD</div>
                <div className="font-bold text-white">ERC-20 & ERC-1155</div>
              </div>
              <div className="p-4 glass rounded-xl border border-slate-800 text-center">
                <div className="text-cyan-400 font-mono text-xs mb-2">TREASURY</div>
                <div className="font-bold text-white">Gnosis Safe Multi-sig</div>
              </div>
            </div>
            <p className="mt-8 text-slate-400 text-sm leading-relaxed border-l-2 border-slate-800 pl-6 italic">
              "Every match result is verified by a network of Proof-of-Participation (PoP) Oracles, ensuring that token rewards are strictly tied to actual athletic contribution and community growth, rather than sybil-based gaming of the system."
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-4 glass border border-slate-700 hover:bg-slate-800 rounded-2xl font-bold transition-all flex items-center gap-3 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            DOWNLOAD FULL PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default Whitepaper;
