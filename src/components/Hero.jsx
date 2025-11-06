import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">{/* 3D Scene */}
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft radial glow overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          Modern websites for bold brands
        </span>
        <h1 className="font-display bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-5xl font-semibold text-transparent sm:text-6xl md:text-7xl">
          We design immersive, interactive web experiences
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-lg text-white/70">
          A creative studio crafting premium, high-performance websites with motion, personality, and purpose.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:opacity-90">
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            See Our Work
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/20">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
