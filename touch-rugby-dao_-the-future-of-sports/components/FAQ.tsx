
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Is this just crypto speculation?",
      a: "No. This is about community ownership. Tokens represent real influence, voting power, and access. While they may gain value as the sport grows, their primary purpose is governance, not trading."
    },
    {
      q: "What if big investors take over?",
      a: "We use Quadratic Voting (10 tokens = sqrt(10) votes). This prevents 'whales' from dominating the decisions and ensures the grassroot community maintains control."
    },
    {
      q: "I'm not tech-savvy – can I still participate?",
      a: "Absolutely! We're building simple voting apps that feel like clicking 'like' on social media and phone-based wallets with no complicated setups. Traditional alternatives will also exist."
    },
    {
      q: "What about existing national organizations?",
      a: "We are building alongside them, not against them. National associations can become DAO members to access better funding, global talent, and reduced admin burden. It's an upgrade for them too."
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center italic">Addressing <span className="text-blue-500">Concerns</span></h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all">
              <h3 className="text-xl font-bold mb-4 flex gap-3 italic">
                <span className="text-blue-500">Q:</span> {faq.q}
              </h3>
              <p className="text-slate-400 leading-relaxed pl-8 border-l border-slate-800">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
