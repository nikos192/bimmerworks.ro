import type { Metadata } from 'next';
import Link from 'next/link';
import PayPalButton from '@/components/PayPalButton';

export const metadata: Metadata = {
  title: 'Services | Bimmerworks',
  description:
    'BMW ECU stage tunes, gearbox tunes, pops & bangs, OPF/GPF delete, CS tune packs, XM Red Label tunes, BMW coding, CarPlay installs and more. All services done remotely.',
  openGraph: {
    title: 'Services | Bimmerworks',
    description:
      'Full range of BMW performance upgrades — all done remotely worldwide. Real prices, real results.',
    url: 'https://bimmerworks.ro/services',
  },
};

// TODO: Replace with your real PayPal client ID before going live
const PAYPAL_CLIENT_ID = 'YOUR_PAYPAL_CLIENT_ID_HERE';

// ─── What you need for all remote services ───────────────────────────────────
const requirements = [
  'ENET Cable (OBD2 to Ethernet)',
  'Windows PC or macOS',
  'AnyDesk (free remote access app)',
  'Stable internet connection',
];

// ─── Services with confirmed pricing ─────────────────────────────────────────
const pricedServices = [
  {
    icon: '💥',
    tag: 'G series',
    title: 'Pops & Bangs Tune',
    subtitle: 'B46 / B48 / B58 / N63 / S68 — 20i · 30i · 40i · 50i G series',
    price: '$300 USD',
    highlights: ['+25 hp · +80 Nm', 'Active on Sport & Sport+ modes', 'No ECU unlock required', 'No warranty void · No dealer flag'],
    description:
      'Custom modification of OEM software that adds a signature exhaust crackle and pop on overrun. All OEM software — no risk, no unlock, no flags.',
  },
  {
    icon: '🔥',
    tag: 'Gxx / F8x',
    title: 'GPF / OPF Delete Tune',
    subtitle: 'BMW Gxx and F8x series — any production date',
    price: '$200 USD',
    highlights: ['ECU can be locked', 'Any production date', 'All OEM software', 'No warranty void'],
    description:
      'Remove particulate filter software restrictions to unlock improved exhaust flow and sound. Works on locked ECUs, any production date — no restrictions.',
  },
  {
    icon: '⚙️',
    tag: 'F series',
    title: 'Gearbox Tune — Stage 2 / 3',
    subtitle: 'F series automatic gearboxes',
    price: '$190 USD',
    highlights: ['Gear display in D mode', 'Faster & smoother shifts', 'Optimised shift points', 'Raised torque limits'],
    description:
      'Stage 2/3 gearbox remap for F series BMWs. Sharper, faster shifts with raised torque limits and a proper gear display in D mode.',
  },
  {
    icon: '⚙️',
    tag: 'G series',
    title: 'Gearbox Tune — Stage 2 / 3',
    subtitle: 'G series 8HP automatic gearboxes',
    price: '$280 USD',
    highlights: ['Shift time reduced 50%', 'Higher modified shift points', 'Gear display in D / S / M', 'Launch control (select 8HP models)', 'Calibrated uphill / downhill strategy'],
    description:
      'Full 8HP gearbox remap for G series. Reduced shift times, higher shift points, launch control on supported boxes, and optimised warmup behaviour. Requires 8HP Flasher tool.',
  },
  {
    icon: '🚀',
    tag: 'BMW XM · G09',
    title: 'XM Red Label Tune',
    subtitle: 'BMW XM G09 — 2022 to 2026, all regions',
    price: '$400 USD',
    highlights: ['750 hp · 1,000 Nm', 'Engine tune + full Red Label calibration', 'Gearbox / Steering / Traction / Suspension', 'No dealer flag · All regions compatible'],
    description:
      'OEM calibration straight from the BMW XM G09 Red Label version. Engine tune to 750 hp and 1,000 Nm, plus the full Red Label gearbox, steering, traction and suspension calibration. No modifications, no flags.',
  },
  {
    icon: '🏁',
    tag: 'G80 · G82 · G83',
    title: 'M3 / M4 CS Tune Pack',
    subtitle: 'BMW G80 G81 G82 G83 — 2021 to 2026 (AT)',
    price: '$400 USD',
    highlights: ['530 hp / 650 Nm (from stock 510 hp)', 'CS DME flash + full CS coding', 'Transmission · Differential · Steering · Traction · Suspension', 'Anti-Dazzle (US) · ASD · Start/Stop disable (EU)'],
    description:
      'The full CS software package — CS DME flash for 530 hp, plus CS-spec coding across transmission, differential, steering, traction control and suspension. Pick only what you want; each item is optional.',
  },
  {
    icon: '🗺️',
    tag: 'iDrive 7 & 8',
    title: 'Navigation Region Change',
    subtitle: 'BMW MGU iDrive 7 / 8 — LIVE / JOY Maps (MGU18 / MGU21)',
    price: '$220 USD',
    highlights: ['Full map & nav region change', 'Latest navigation maps included', 'ROW and ASIA region conversions', 'Ideal for imported BMWs'],
    description:
      'Professional remote region change for BMW iDrive 7 and 8 navigation systems. Fixes BMW vehicles imported from other regions where navigation is locked to the wrong map.',
  },
];

// ─── Services — contact for pricing ──────────────────────────────────────────
const contactServices = [
  {
    icon: '⚡',
    title: 'ECU Stage Tunes (Stage 1 · 2 · 3)',
    description:
      'Custom ECU remaps for a wide range of BMW engines. Stage 1 on stock hardware, Stage 2 with hardware mods, Stage 3 for full build support. Contact us with your model and setup.',
  },
  {
    icon: '💻',
    title: 'BMW Coding',
    description:
      'Activate hidden features, customise comfort settings, disable Start/Stop, enable video in motion, and more — all via remote coding session.',
  },
  {
    icon: '📱',
    title: 'Apple CarPlay / Android Auto',
    description:
      'Add full wireless or wired CarPlay and Android Auto to compatible BMW models. No hardware modification required on most fitments.',
  },
  {
    icon: '🔑',
    title: 'Remote Start',
    description:
      'Start your BMW remotely from your phone. Coding and hardware install service — contact us with your model for compatibility.',
  },
  {
    icon: '✨',
    title: 'Welcome Light Animations',
    description:
      'Custom puddle lights, laser projections and ambient light sequences. Personalise your BMW inside and out.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section
        className="pt-32 pb-16 px-4 text-center carbon-texture"
        style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d1a33 100%)' }}
      >
        <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
          Full Service Menu
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
          What We <span className="text-accent">Do</span>
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Performance upgrades for your BMW — from stage tunes to custom coding.
          Every service is delivered <strong className="text-white">100% remotely</strong>, worldwide.
        </p>
        {/* Remote badge */}
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-5 py-2 text-accent text-sm font-semibold">
          <span>🌍</span> All services done remotely — no workshop visit required
        </div>
      </section>

      {/* ── WHAT YOU NEED ── */}
      <section className="py-12 px-4 bg-section-bg border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-muted text-sm uppercase tracking-widest mb-6 font-semibold">
            What you&apos;ll need for any remote service
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {requirements.map((req) => (
              <div
                key={req}
                className="flex items-center gap-2 bg-card-bg border border-card-border rounded-lg px-4 py-2 text-sm text-gray-300"
              >
                <span className="text-accent">✓</span> {req}
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-xs mt-4">
            Process takes roughly 20 minutes. Purchase → we email you a booking link → our technician connects remotely.
          </p>
        </div>
      </section>

      {/* ── PRICED SERVICE PACKAGES ── */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
            Packages with <span className="text-accent">Fixed Pricing</span>
          </h2>
          <p className="text-muted text-center mb-12">Purchase online or get in touch to book.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricedServices.map((svc) => (
              <div
                key={svc.title}
                className="bg-card-bg border border-card-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{svc.icon}</span>
                    <div>
                      <span className="text-xs text-accent font-semibold uppercase tracking-widest block mb-0.5">
                        {svc.tag}
                      </span>
                      <h3 className="text-white font-bold text-lg leading-tight">{svc.title}</h3>
                    </div>
                  </div>
                  <div className="text-accent font-black text-xl whitespace-nowrap">{svc.price}</div>
                </div>

                <p className="text-xs text-muted mb-3">{svc.subtitle}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{svc.description}</p>

                {/* Highlights */}
                <ul className="space-y-1 mb-6">
                  {svc.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-accent text-xs">▸</span> {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center bg-accent hover:bg-accent-hover text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] accent-glow text-sm"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAYPAL PAYMENT ── */}
      <section className="py-20 px-4 bg-section-bg">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-card-bg border border-card-border rounded-2xl p-10">
            <div className="text-4xl mb-4">💳</div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Pay Online — Secure Checkout</h2>
            <p className="text-muted mb-2">Secure checkout via PayPal</p>
            <p className="text-gray-400 text-sm mb-8">
              Contact us first to confirm your package, then pay securely online before your booking slot.
            </p>
            <PayPalButton clientId={PAYPAL_CLIENT_ID} />
            <p className="text-muted text-xs mt-6">
              {/* TODO: Swap PAYPAL_CLIENT_ID constant at the top of this file to go live */}
              Swap <code className="text-accent">PAYPAL_CLIENT_ID</code> in{' '}
              <code className="text-accent">services/page.tsx</code> to activate live payments.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT FOR PRICING SERVICES ── */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
            More <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted text-center mb-12">Contact us for a quote tailored to your BMW.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactServices.map((svc) => (
              <div
                key={svc.title}
                className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="text-3xl mb-3">{svc.icon}</div>
                <h3 className="text-white font-bold text-base mb-2">{svc.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{svc.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-gray-500 text-sm">Contact for Pricing</span>
                  <Link
                    href="/contact"
                    className="text-accent hover:text-white font-semibold text-sm transition-colors"
                  >
                    Get a Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 px-4 bg-section-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Not sure which service fits?</h3>
          <p className="text-muted mb-8 text-lg">
            Drop us a message with your car details and we&apos;ll point you in the right direction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 accent-glow hover:scale-105 text-lg"
            >
              Get In Touch
            </Link>
            <a
              href="https://www.instagram.com/bimmerworks.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/20 hover:border-accent text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/5 text-lg"
            >
              DM on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
