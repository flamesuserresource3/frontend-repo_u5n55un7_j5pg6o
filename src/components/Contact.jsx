import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // No backend provided yet; simulate success for demo purposes
      await new Promise((res) => setTimeout(res, 800));
      setStatus('Thanks! We\'ll get back to you shortly.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Start a project</h2>
          <p className="mt-4 text-white/70">Tell us about your goals. We\'ll come back with a clear plan and timeline.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0 placeholder:text-white/40 focus:border-white/20"
              placeholder="Your name"
              name="name"
              value={form.name}
              onChange={onChange}
              required
            />
            <input
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0 placeholder:text-white/40 focus:border-white/20"
              placeholder="Email address"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>
          <textarea
            className="min-h-[140px] w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0 placeholder:text-white/40 focus:border-white/20"
            placeholder="Tell us about your project..."
            name="message"
            value={form.message}
            onChange={onChange}
            required
          />
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/60">We typically reply within one business day.</p>
            <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-black transition hover:opacity-90">
              <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Send message
            </button>
          </div>
          {status && <p className="text-center text-sm text-white/70">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
