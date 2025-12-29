
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DAOExplanation from './components/DAOExplanation';
import Pillars from './components/Pillars';
import ProblemSolver from './components/ProblemSolver';
import Benefits from './components/Benefits';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import ContributionTracker from './components/ContributionTracker';
import Whitepaper from './components/Whitepaper';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [showAI, setShowAI] = useState(false);

  return (
    <div className="min-h-screen relative selection:bg-blue-500/30">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-purple-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero onOpenAI={() => setShowAI(true)} />
        <DAOExplanation />
        <Pillars />
        <ProblemSolver />
        <Benefits />
        <Tokenomics />
        <ContributionTracker />
        <Roadmap />
        <Whitepaper />
        <FAQ />
      </main>

      <Footer />

      {/* Floating AI Consultant */}
      <AIConsultant isOpen={showAI} onClose={() => setShowAI(false)} />
    </div>
  );
};

export default App;
