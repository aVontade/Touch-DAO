
import React from 'react';

const ProblemSolver: React.FC = () => {
  const problems = [
    {
      id: "01",
      title: "Governance Failures",
      fail: "National associations miss deadlines, lack transparency, fail audits.",
      solve: "Automated compliance through smart contracts. Funds only release when KPIs are met. Real-time auditing for all."
    },
    {
      id: "02",
      title: "Missing Marketing Skills",
      fail: "Volunteer boards lack commercial expertise and reach.",
      solve: "Global talent pool. Recruit the world's best marketers & commercial experts, paying them fairly with value-growing tokens."
    },
    {
      id: "03",
      title: "Lack of Innovation Funding",
      fail: "Traditional sponsorship is slow and limited.",
      solve: "Community treasury. We pool resources and decide together how to fund tech like wearable sensors and Olympic bids."
    }
  ];

  return (
    <section id="solutions" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Solving <span className="text-red-500">Decades</span> of Failures</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Traditional sports structures are breaking. The DAO provides the missing pieces to finally take Touch Rugby global.
          </p>
        </div>

        <div className="space-y-12">
          {problems.map((p) => (
            <div key={p.id} className="relative overflow-hidden group">
              <div className="absolute top-0 left-0 text-9xl font-black opacity-5 text-slate-500 leading-none -translate-x-8 -translate-y-8 select-none">{p.id}</div>
              <div className="relative glass rounded-3xl border border-slate-800 p-8 md:p-12">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                  <div className="md:col-span-5">
                    <h3 className="text-3xl font-bold mb-6 text-gradient italic">{p.title}</h3>
                    <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/20 mb-4">
                      <p className="text-sm text-red-500 uppercase tracking-widest font-bold mb-2">Old Way</p>
                      <p className="text-slate-400">{p.fail}</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 hidden md:flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m9 18 6-6-6-6"/></svg>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="p-8 bg-blue-500/10 rounded-2xl border border-blue-500/30">
                      <p className="text-sm text-blue-400 uppercase tracking-widest font-bold mb-2">DAO Solution</p>
                      <p className="text-lg text-white font-medium leading-relaxed">{p.solve}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolver;
