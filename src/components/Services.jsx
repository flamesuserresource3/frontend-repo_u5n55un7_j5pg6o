import React from 'react';
import { Code2, Sparkles, Layers, Gauge } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Brand & Visual Systems',
    desc: 'Design systems, art direction, and brand assets built for digital-first experiences.',
  },
  {
    icon: Layers,
    title: 'Web Design & Prototyping',
    desc: 'Premium UI/UX with interactive prototypes and motion-first storytelling.',
  },
  {
    icon: Code2,
    title: 'Modern Web Development',
    desc: 'React, Next.js, and headless CMS — fast, accessible, and SEO-ready.',
  },
  {
    icon: Gauge,
    title: 'Performance & Optimization',
    desc: 'Core Web Vitals, accessibility, and scalability baked into every build.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-gradient-to-b from-black via-black to-zinc-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">What we do</h2>
          <p className="mt-4 text-white/70">A full-stack studio combining design, engineering, and motion to ship standout websites.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform hover:-translate-y-1">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-2xl" />
              <s.icon className="h-6 w-6 text-fuchsia-300" />
              <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
