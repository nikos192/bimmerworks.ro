import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Bimmerworks | BMW Performance Tuning Specialists',
  description:
    'BMW coding, gearbox tunes, remote tunes worldwide. Packages from $190. Done remotely in 20 minutes — no workshop visit required.',
  openGraph: {
    title: 'Bimmerworks | BMW Performance Tuning Specialists',
    description:
      "Unlock your BMW's true potential with Bimmerworks — specialists in BMW coding and remote tunes worldwide.",
    url: 'https://bimmerworks.ro',
  },
};

const trustCards = [
  {
    title: 'BMW Specialists',
    desc: 'We work exclusively on BMW — every tool, every process, every tune is built around the brand.',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    title: 'Remote Tunes Worldwide',
    desc: 'No matter where you are, we can tune your BMW remotely via OBD connection. Global reach, local precision.',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
  {
    title: 'MRC Performance Partner',
    desc: 'Proud partners of MRC Performance — proven tuning files trusted across Europe.',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    title: 'Results-Driven',
    desc: 'We measure success in dyno numbers and smiling drivers. Every tune is optimised for real-world performance.',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
];

const previewServices = [
  {
    title: 'BMW Coding',
    description: 'Unlock hidden features, disable Start/Stop, enable video in motion, custom comfort settings and more.',
    price: 'From ~$80',
    icon: '💻',
  },
  {
    title: 'Gearbox Tune — G series',
    description: 'Raised torque limits, 50% faster shifts, launch control on select 8HP boxes.',
    price: 'From $280',
    icon: '⚙️',
  },
  {
    title: 'Pops & Bangs Tune',
    description: 'Custom overrun map for B46/B48/B58/N63/S68 G series. +25hp +80Nm included.',
    price: 'From $300',
    icon: '💥',
  },
];

const testimonials = [
  {
    quote: "Booked the G series gearbox tune remotely from the UK. Took 25 minutes and the difference in shift speed is night and day. Highly recommend.",
    name: "Alex M.",
    car: "BMW M340i G20",
  },
  {
    quote: "CS tune pack on my G82 M4 — 530hp confirmed on the dyno. Seamless remote process, professional throughout.",
    name: "Mihai R.",
    car: "BMW M4 G82",
  },
  {
    quote: "Pops and bangs tune done remotely in under 30 minutes. Sounds absolutely mental on sport+. Zero issues at the dealer afterwards.",
    name: "Dan K.",
    car: "BMW 340i G20",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center carbon-texture overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #0d1a33 50%, #0a0a0a 100%)' }}
      >
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.12) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto w-full">
          <p className="text-accent uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            BMW Performance Tuning
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 sm:mb-8 leading-tight">
            Your BMW.<br />
            <span className="text-accent">Unlocked.</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-xl max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            BMW coding &amp; remote tunes — done from home, worldwide, from <span className="text-white font-semibold">$190</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link href="/services"
              className="inline-block bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 accent-glow hover:scale-105 text-base sm:text-lg text-center">
              View Services
            </Link>
            <Link href="/contact"
              className="inline-block border border-white/20 hover:border-accent text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/5 text-base sm:text-lg text-center">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/30">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 sm:py-24 px-4 bg-section-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Performance tuning, <span className="text-accent">done right.</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
            Bimmerworks is a BMW-only operation offering gearbox remaps, pops &amp; bangs maps, OPF/GPF delete tunes, and full BMW coding. Can&apos;t visit us? No problem — remote tunes are available worldwide. We also install Apple CarPlay, Android Auto, remote start, and welcome light animations.
          </p>
          <p className="text-muted text-sm sm:text-base md:text-lg">Every car is different. Every tune is custom.</p>
        </div>
      </section>

      {/* ── WHY BIMMERWORKS ── */}
      <section className="py-16 sm:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
            Why <span className="text-accent">Bimmerworks</span>?
          </h2>
          <p className="text-muted text-center mb-10 sm:mb-16 text-base sm:text-lg">Four reasons drivers trust us with their BMW.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trustCards.map((card) => (
              <div key={card.title}
                className="bg-card-bg border border-card-border rounded-xl p-5 sm:p-6 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
                <div className="text-accent mb-3 sm:mb-4">{card.svg}</div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 sm:py-24 px-4 bg-section-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
            What Drivers <span className="text-accent">Say</span>
          </h2>
          <p className="text-muted text-center mb-10 sm:mb-16 text-base sm:text-lg">Real customers. Real BMWs. Real results.</p>
          {/* TODO: Replace with real verified customer reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((t) => (
              <div key={t.name}
                className="bg-card-bg border border-card-border rounded-xl p-5 sm:p-6 hover:border-accent/20 transition-all duration-300">
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#0066FF">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3 sm:mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-muted text-xs">{t.car}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM CTA ── */}
      <section className="py-16 sm:py-24 px-4"
        style={{
          background: 'linear-gradient(135deg, #050d1f 0%, #0a1628 50%, #050d1f 100%)',
          borderTop: '1px solid rgba(0,102,255,0.2)',
          borderBottom: '1px solid rgba(0,102,255,0.2)',
        }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-5 sm:mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center"
              style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">All Our Work Is On Instagram</h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed px-2">
            Every build, every dyno result, every before and after — live on our Instagram. See real tunes on real BMWs.
          </p>
          <a href="https://www.instagram.com/bimmerworks.ro/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 text-white font-bold px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg transition-all duration-200 hover:scale-105"
            style={{
              background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
              boxShadow: '0 4px 24px rgba(220,39,67,0.35)',
            }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="flex-shrink-0">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <span>See Our Work on Instagram</span>
          </a>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-16 sm:py-24 px-4 bg-section-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
            What We <span className="text-accent">Do</span>
          </h2>
          <p className="text-muted text-center mb-10 sm:mb-16 text-base sm:text-lg">A taste of what Bimmerworks offers.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {previewServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
                showButton={false}
              />
            ))}
          </div>
          <div className="text-center">
            <Link href="/services"
              className="inline-block border border-accent text-accent hover:bg-accent hover:text-white font-bold px-6 sm:px-8 py-4 rounded-lg transition-all duration-200 text-base sm:text-lg">
              See All Services & Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
