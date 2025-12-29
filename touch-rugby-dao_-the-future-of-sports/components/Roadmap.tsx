
import React from 'react';

const Roadmap: React.FC = () => {
  const phases = [
    {
      year: "2026",
      phase: "Phase 1: Foundation",
      items: [
        "Release Technical Whitepaper v1.0",
        "Launch $TOUCH token & Governance",
        "Start 'Touch Rugby League' game development",
        "Onboard first 10,000 community members",
        "Establish transparency dashboard"
      ],
      color: "blue"
    },
    {
      year: "2027",
      phase: "Phase 2: Growth",
      items: [
        "Launch game beta & wearable sensors",
        "First major community-led votes",
        "Expand to 50,000 members globally",
        "Secure first pro-DAO sponsor partnership"
      ],
      color: "purple"
    },
    {
      year: "2028",
      phase: "Phase 3: Maturity",
      items: [
        "Full game launch & wearable integration",
        "Olympic demonstration event",
        "100,000+ active community participants",
        "Self-sustaining ecosystem economy"
      ],
      color: "amber"
    }
  ];

  return (
    <section id="roadmap" className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Our <span className="text-blue-500">Journey</span> Together</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            This is more than a pitch. It's a structured path to global dominance and community empowerment.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for mobile, horizontal-ish layout for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-800 -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {phases.map((p, idx) => (
              <div key={idx} className="group">
                <div className="glass p-8 rounded-3xl border border-slate-800 h-full relative group-hover:border-blue-500/50 transition-all">
                  <div className={`text-4xl font-black mb-4 opacity-20 group-hover:opacity-100 transition-opacity text-${p.color}-500 italic`}>
                    {p.year}
                  </div>
                  <h3 className="text-xl font-bold mb-6">{p.phase}</h3>
                  <ul className="space-y-4">
                    {p.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-400 group-hover:text-slate-200 transition-colors">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${p.color}-500 flex-shrink-0`}></div>
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Connector Dot */}
                  <div className="hidden lg:block absolute -top-10 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
