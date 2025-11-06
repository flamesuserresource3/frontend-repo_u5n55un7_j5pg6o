import React from 'react';
import { MousePointerClick, Palette, Component, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    title: 'Discover',
    desc: 'We align on goals, audience, and brand to set the creative direction.',
  },
  {
    icon: Palette,
    title: 'Design',
    desc: 'High-fidelity visuals, micro-interactions, and motion-first concepts.',
  },
  {
    icon: Component,
    title: 'Develop',
    desc: 'Modern stacks, headless architecture, and scalable components.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    desc: 'Performance tuning, QA, and a smooth go-live with ongoing support.',
  },
];

const Process = () => {
  return (
    <section id="process" className="relative w-full bg-gradient-to-b from-zinc-950 to-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(244,114,182,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Our process</h2>
          <p className="mt-4 text-white/70">Collaborative, transparent, and engineered for outcomes.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <s.icon className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
