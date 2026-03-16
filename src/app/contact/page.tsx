'use client';

import { useState } from 'react';

// TODO: Add business address here

const WHATSAPP_NUMBER = '40757226101';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

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
    'Pops & Bangs Tune — G series ($300)',
    'GPF / OPF Delete Tune — Gxx / F8x ($200)',
    'Gearbox Tune Stage 2/3 — F series ($190)',
    'Gearbox Tune Stage 2/3 — G series ($280)',
    'XM Red Label Tune — G09 ($400)',
    'M3 / M4 CS Tune Pack — G80 / G82 ($400)',
    'Navigation Region Change — iDrive 7/8 ($220)',
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
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Remote tunes available worldwide — reach us on WhatsApp for the fastest response.
        </p>
        {/* WhatsApp CTA — hero level */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105"
          style={{
            background: '#25D366',
            boxShadow: '0 4px 24px rgba(37,211,102,0.35)',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Message Us on WhatsApp
        </a>
      </section>

      {/* ── QUICK CONTACT STRIP ── */}
      <section className="py-8 px-4 bg-section-bg border-b border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-sm">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium">
            <span style={{ color: '#25D366' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            +40 757 226 101
          </a>
          <span className="hidden sm:block text-white/20">|</span>
          <a href="mailto:bimmerworks.ro@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium">
            <span className="text-accent">✉</span> bimmerworks.ro@gmail.com
          </a>
          <span className="hidden sm:block text-white/20">|</span>
          <a href="https://www.instagram.com/bimmerworks.ro/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium">
            <span style={{ color: '#dc2743' }}>▣</span> @bimmerworks.ro
          </a>
        </div>
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
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange}
                    placeholder="Your full name" className={inputClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange}
                    placeholder="your@email.com" className={inputClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Phone <span className="text-muted text-xs">(optional)</span>
                  </label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+40 7xx xxx xxx" className={inputClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Your Car <span className="text-accent">*</span>
                  </label>
                  <input type="text" name="car" required value={form.car} onChange={handleChange}
                    placeholder="e.g. BMW M3 G80 2022" className={inputClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Service <span className="text-accent">*</span>
                  </label>
                  <select name="service" required value={form.service} onChange={handleChange}
                    className={inputClass + ' cursor-pointer'}>
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

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="Tell us about your car, goals, and any mods already done..."
                    className={inputClass + ' resize-none'} />
                </div>

                <button type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-lg transition-all duration-200 accent-glow hover:scale-[1.02] text-lg mt-2">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* ── SIDE INFO ── */}
          <div className="space-y-6">

            {/* WhatsApp — PRIMARY */}
            <div
              className="rounded-xl p-6"
              style={{ background: 'linear-gradient(135deg, #0a2010, #0a0a0a)', border: '1px solid rgba(37,211,102,0.3)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <h3 className="font-bold text-lg">WhatsApp — Fastest Response</h3>
              </div>
              <p className="text-muted text-sm mb-4">
                Message us directly — we reply fast. Best way to get a quick quote or ask questions about your BMW.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold px-5 py-3 rounded-lg text-sm transition-all duration-200 hover:scale-105 w-full justify-center"
                style={{ background: '#25D366', boxShadow: '0 2px 16px rgba(37,211,102,0.25)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +40 757 226 101
              </a>
            </div>

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
                {['ENET Cable (OBD2 to Ethernet)', 'Windows PC or macOS', 'AnyDesk (free — anydesk.com)', 'Stable internet connection'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-accent">▸</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted text-xs mt-4">Sessions typically take 10–20 minutes.</p>
            </div>

            {/* Email + Instagram */}
            <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
              <div>
                <p className="text-xs text-muted uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:bimmerworks.ro@gmail.com"
                  className="text-accent hover:text-white transition-colors text-sm font-medium">
                  bimmerworks.ro@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-widest mb-1">Instagram DMs</p>
                <a href="https://www.instagram.com/bimmerworks.ro/" target="_blank" rel="noopener noreferrer"
                  className="text-accent hover:text-white transition-colors text-sm font-medium">
                  @bimmerworks.ro
                </a>
              </div>
              {/* TODO: Add business address */}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
