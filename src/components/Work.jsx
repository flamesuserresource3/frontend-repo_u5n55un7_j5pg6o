import React from 'react';

const projects = [
  {
    title: 'Aether — Luxury Skincare',
    tags: ['E-commerce', '3D', 'Motion'],
    image:
      'https://images.unsplash.com/photo-1585386959984-a4155223168f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Nebula — AI Platform',
    tags: ['SaaS', 'Product', 'Dashboard'],
    image:
      'https://images.unsplash.com/photo-1551817958-20204c7a48df?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Lumen — Creative Studio',
    tags: ['Portfolio', 'Brand', 'Animation'],
    image:
      'https://images.unsplash.com/photo-1524088484081-9a72caeb2ce2?q=80&w=1600&auto=format&fit=crop',
  },
];

const Work = () => {
  return (
    <section id="work" className="w-full bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Selected work</h2>
          <p className="mt-4 text-white/70">A look at recent launches blending craft, code, and kinetic design.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60">{p.tags.join(' • ')}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
