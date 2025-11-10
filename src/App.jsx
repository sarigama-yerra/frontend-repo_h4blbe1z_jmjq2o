import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import WhyKavachAI from './components/WhyKavachAI';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight"><span className="text-[#0066FF]">Kavach</span>AI</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#about" className="hover:text-[#0066FF]">About</a>
            <a href="#features" className="hover:text-[#0066FF]">Features</a>
            <a href="#contact" className="hover:text-[#0066FF]">Contact</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-[#0066FF] hover:bg-[#0556d6] transition-colors text-white font-semibold px-4 py-2">Request a Demo</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Features />
        <WhyKavachAI />
        <Contact />
      </main>
    </div>
  );
}

export default App;
