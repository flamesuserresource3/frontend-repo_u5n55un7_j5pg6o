import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Process from './components/Process';
import Contact from './components/Contact';
import { Menu } from 'lucide-react';

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/30 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="font-semibold tracking-tight">Nova Studio</a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#services" className="text-sm text-white/80 hover:text-white">Services</a>
          <a href="#work" className="text-sm text-white/80 hover:text-white">Work</a>
          <a href="#process" className="text-sm text-white/80 hover:text-white">Process</a>
          <a href="#contact" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90">Start a project</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>
      {open && (
        <div className="mx-auto max-w-7xl px-6 pb-4 md:hidden">
          <div className="grid gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-white">
            <a href="#services" className="text-sm" onClick={() => setOpen(false)}>Services</a>
            <a href="#work" className="text-sm" onClick={() => setOpen(false)}>Work</a>
            <a href="#process" className="text-sm" onClick={() => setOpen(false)}>Process</a>
            <a href="#contact" className="text-sm" onClick={() => setOpen(false)}>Start a project</a>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="w-full bg-black py-10 text-white">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
      <p className="text-sm text-white/60">© {new Date().getFullYear()} Nova Studio. All rights reserved.</p>
      <div className="flex items-center gap-4 text-sm text-white/70">
        <a href="#services" className="hover:text-white">Services</a>
        <a href="#work" className="hover:text-white">Work</a>
        <a href="#process" className="hover:text-white">Process</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black font-sans">
      <Nav />
      <Hero />
      <Services />
      <Work />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
