'use client';

import { useState } from 'react';

// TODO: Add business address here
// TODO: Add business email here

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    car: '',
    service: '',
    message: '',
  });

  const services = [
    // Priced packages
    'Pops & Bangs Tune — G series ($300)',
    'GPF / OPF Delete Tune — Gxx / F8x ($200)',
    'Gearbox Tune Stage 2/3 — F series ($190)',
    'Gearbox Tune Stage 2/3 — G series ($280)',
    'XM Red Label Tune — G09 ($400)',
    'M3 / M4 CS Tune Pack — G80 / G82 ($400)',
    'Navigation Region Change — iDrive 7/8 ($220)',
    // Contact for pricing
    'ECU Stage Tunes (Stage 1, 2, 3)',
    'BMW Coding',
    'Apple CarPlay / Android Auto',
    'Remote Start',
    'Welcome Light Animations',
    'Other / Not Sure',
  ];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Wire up form submission — send to email or CRM
    setSubmitted(true);
  }

  const inputClass =
    'w-full bg-card-bg border border-card-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent transition-colors duration-200';

  return (
    <>
      {/* ── HEADER ── */}
      <section
        className="pt-32 pb-16 px-4 text-center carbon-texture"
        style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d1a33 100%)' }}
      >
        <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
          Get In Touch
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
          Book Your <span className="text-accent">Tune</span>
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
          Remote tunes available worldwide — tell us about your BMW and we&apos;ll take it from there.
        </p>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── CONTACT FORM ── */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>

            {submitted ? (
              <div className="bg-card-bg border border-accent/40 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Message Received!</h3>
                <p className="text-muted">
                  Thanks for getting in touch. We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>

                {/* Phone (optional) */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Phone <span className="text-muted text-xs">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+40 7xx xxx xxx"
                    className={inputClass}
                  />
                </div>

                {/* Car */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Your Car <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="car"
                    required
                    value={form.car}
                    onChange={handleChange}
                    placeholder="e.g. BMW M3 G80 2022"
                    className={inputClass}
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Service <span className="text-accent">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass + ' cursor-pointer'}
                  >
                    <option value="" disabled>Select a service</option>
                    <optgroup label="── Fixed Price Packages ──">
                      {services.slice(0, 7).map((s) => (
                        <option key={s} value={s} className="bg-card-bg">{s}</option>
                      ))}
                    </optgroup>
                    <optgroup label="── Contact for Pricing ──">
                      {services.slice(7).map((s) => (
                        <option key={s} value={s} className="bg-card-bg">{s}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your car, goals, and any mods already done..."
                    className={inputClass + ' resize-none'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-lg transition-all duration-200 accent-glow hover:scale-[1.02] text-lg mt-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* ── SIDE INFO ── */}
          <div className="space-y-8">

            {/* Remote tunes note */}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="text-2xl mb-3">🌍</div>
              <h3 className="font-bold text-lg mb-2">Remote Tunes Available Worldwide</h3>
              <p className="text-muted text-sm leading-relaxed">
                You don&apos;t need to be local. Our remote tune process works with any BMW via a compatible OBD interface and AnyDesk. We&apos;ll guide you through every step.
              </p>
            </div>

            {/* What you need */}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="text-2xl mb-3">🛠️</div>
              <h3 className="font-bold text-lg mb-3">What You&apos;ll Need</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {[
                  'ENET Cable (OBD2 to Ethernet)',
                  'Windows PC or macOS',
                  'AnyDesk (free — anydesk.com)',
                  'Stable internet connection',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-accent">▸</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted text-xs mt-4">Sessions typically take 10–20 minutes.</p>
            </div>

            {/* Business info */}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="text-2xl mb-3">📍</div>
              <h3 className="font-bold text-lg mb-2">Find Us</h3>
              {/* TODO: Add business address */}
              <p className="text-muted text-sm mb-3">Address coming soon.</p>
              {/* TODO: Add business email */}
              <p className="text-muted text-sm">Email coming soon.</p>
            </div>

            {/* Prefer to DM */}
            <div
              className="rounded-xl p-6"
              style={{
                background: 'linear-gradient(135deg, #0d1a33, #0a0a0a)',
                border: '1px solid rgba(0,102,255,0.3)',
              }}
            >
              <h3 className="font-bold text-lg mb-2">Prefer to DM?</h3>
              <p className="text-muted text-sm mb-5">
                Slide into our Instagram DMs — we reply fast and love seeing what you&apos;re working with.
              </p>
              <a
                href="https://www.instagram.com/bimmerworks.ro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold px-5 py-3 rounded-lg text-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                DM @bimmerworks.ro on Instagram
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
