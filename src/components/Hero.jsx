import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[88vh] overflow-hidden bg-[#0B1220]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-[#0B1220]/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24 grid md:grid-cols-12 gap-8 text-white">
        <div className="md:col-span-7">
          <span className="inline-flex items-center text-xs tracking-widest uppercase bg-white/10 border border-white/20 backdrop-blur px-3 py-1 rounded-full">KavachAI</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Automating Hospital Workflows with AI Precision
          </h1>
          <p className="mt-5 text-white/80 text-lg md:text-xl max-w-2xl">
            Streamline admin tasks, accelerate claim approvals, and enhance hospital efficiency with KavachAI.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#0066FF] hover:bg-[#0556d6] transition-colors text-white font-semibold px-6 py-3 shadow-lg shadow-blue-500/25"
            >
              Request a Demo
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 hover:bg-white/10 transition-colors text-white font-semibold px-6 py-3"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
