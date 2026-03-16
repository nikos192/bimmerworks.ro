import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Bimmerworks | BMW Performance Tuning Specialists',
  description:
    'BMW ECU tuning, coding, remote tunes, CarPlay installs and performance upgrades. Remote tunes available worldwide.',
  openGraph: {
    title: 'Bimmerworks | BMW Performance Tuning Specialists',
    description:
      "Unlock your BMW's true potential with Bimmerworks — specialists in ECU tuning, BMW coding and remote tunes worldwide.",
    url: 'https://bimmerworks.ro',
  },
};

const trustCards = [
  {
    icon: '🔧',
    title: 'BMW Specialists',
    desc: 'We work exclusively on BMW — every tool, every process, every tune is built around the brand.',
  },
  {
    icon: '🌍',
    title: 'Remote Tunes Worldwide',
    desc: 'No matter where you are, we can tune your BMW remotely via OBD connection. Global reach, local precision.',
  },
  {
    icon: '🏆',
    title: 'MRC Performance Partner',
    desc: 'Proud partners of MRC Performance — proven tuning files trusted across Europe.',
  },
  {
    icon: '📈',
    title: 'Results-Driven',
    desc: 'We measure success in dyno numbers and smiling drivers. Every tune is optimised for real-world performance.',
  },
];

const previewServices = [
  {
    title: 'ECU Stage Tunes',
    description:
      'Stage 1, 2 and 3 remaps tailored to your setup. Unlock power that was always there.',
    icon: '⚡',
  },
  {
    title: 'BMW Coding',
    description:
      'Activate hidden features, customise comfort settings and enable options your BMW shipped with.',
    icon: '💻',
  },
  {
    title: 'Remote Tunes',
    description:
      'Full custom ECU tune delivered remotely — available worldwide via your OBD port.',
    icon: '🌐',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center carbon-texture overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #0d1a33 50%, #0a0a0a 100%)',
        }}
      >
        {/* Blue accent glow blob */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(0,102,255,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-6 animate-fade-in">
            BMW Performance Tuning
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 animate-fade-in-up">
            Your BMW.
            <br />
            <span className="text-accent">Unlocked.</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
            ECU remaps, BMW coding, remote tunes worldwide. We extract every last horsepower — then refine it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link
              href="/services"
              className="inline-block bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 accent-glow hover:scale-105 text-lg"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white/20 hover:border-accent text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/5 text-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/30">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 px-4 bg-section-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Performance tuning, <span className="text-accent">done right.</span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8">
            Bimmerworks is a BMW-only tuning operation offering ECU stage tunes, gearbox remaps, pops &amp; bangs maps, OPF/GPF delete tunes, and full BMW coding. Can&apos;t visit us? No problem — remote tunes are available worldwide. We also install Apple CarPlay, Android Auto, remote start, and welcome light animations.
          </p>
          <p className="text-muted text-base sm:text-lg">
            Every car is different. Every tune is custom.
          </p>
        </div>
      </section>

      {/* ── WHY BIMMERWORKS ── */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Why <span className="text-accent">Bimmerworks</span>?
          </h2>
          <p className="text-muted text-center mb-16 text-lg">Four reasons drivers trust us with their BMW.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCards.map((card) => (
              <div
                key={card.title}
                className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM CTA ── */}
      <section
        className="py-24 px-4"
        style={{
          background: 'linear-gradient(135deg, #050d1f 0%, #0a1628 50%, #050d1f 100%)',
          borderTop: '1px solid rgba(0,102,255,0.2)',
          borderBottom: '1px solid rgba(0,102,255,0.2)',
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Instagram icon */}
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            All Our Work Is On Instagram
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed">
            Every build, every dyno result, every before and after — live on our Instagram. See real tunes on real BMWs.
          </p>
          <a
            href="https://www.instagram.com/bimmerworks.ro/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:scale-105"
            style={{
              background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
              boxShadow: '0 4px 24px rgba(220,39,67,0.35)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            See Our Work on Instagram @bimmerworks.ro
          </a>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-24 px-4 bg-section-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            What We <span className="text-accent">Do</span>
          </h2>
          <p className="text-muted text-center mb-16 text-lg">A taste of what Bimmerworks offers.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {previewServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                showButton={false}
              />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="inline-block border border-accent text-accent hover:bg-accent hover:text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 text-lg"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
