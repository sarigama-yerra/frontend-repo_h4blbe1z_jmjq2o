import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[88vh] overflow-hidden bg-[#0B1220]">
      {/* 3D background (full cover) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Readability overlays (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0B1220] via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1220]/80" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#0066FF]/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24 grid md:grid-cols-12 gap-8 text-white">
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="inline-flex items-center text-xs tracking-widest uppercase bg-white/10 border border-white/20 backdrop-blur px-3 py-1 rounded-full"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            KavachAI
          </motion.span>

          <motion.h1
            className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Hospital Management Software,
            <span className="text-[#66A3FF]"> powered by AI</span>
          </motion.h1>

          <motion.p
            className="mt-5 text-white/80 text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Streamline admissions, automate claims, reduce denials, and orchestrate end-to-end hospital workflows with
            secure, compliant automation.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.45 },
              },
            }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#0066FF] hover:bg-[#0556d6] transition-colors text-white font-semibold px-6 py-3 shadow-lg shadow-blue-500/25"
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45 }}
            >
              Request a Demo
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 hover:bg-white/10 transition-colors text-white font-semibold px-6 py-3"
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45, delay: 0.06 }}
            >
              Book a Call
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right-side highlight card with subtle animation */}
        <motion.div
          className="hidden md:flex md:col-span-5 items-end"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ml-auto w-full max-w-sm rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/70">Live System Health</p>
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg bg-white/5 p-3">
                <p className="text-2xl font-bold">99.9%</p>
                <p className="text-xs text-white/60">Uptime</p>
              </div>
              <div className="rounded-lg bg-white/5 p-3">
                <p className="text-2xl font-bold">-45%</p>
                <p className="text-xs text-white/60">Denials</p>
              </div>
              <div className="rounded-lg bg-white/5 p-3">
                <p className="text-2xl font-bold">3x</p>
                <p className="text-xs text-white/60">Faster TAT</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
