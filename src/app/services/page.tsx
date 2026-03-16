import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import PayPalButton from '@/components/PayPalButton';

export const metadata: Metadata = {
  title: 'Services | Bimmerworks',
  description:
    'BMW ECU stage tunes, gearbox tunes, pops & bangs, OPF delete, remote tunes, BMW coding, CarPlay installs, remote start, and welcome light animations.',
  openGraph: {
    title: 'Services | Bimmerworks',
    description:
      'Full range of BMW performance upgrades and coding services — remote tunes available worldwide.',
    url: 'https://bimmerworks.ro/services',
  },
};

// TODO: Replace with your real PayPal client ID before going live
const PAYPAL_CLIENT_ID = 'YOUR_PAYPAL_CLIENT_ID_HERE';

const services = [
  {
    title: 'ECU Stage Tunes (Stage 1, 2, 3)',
    price: 'Contact for Pricing',
    description:
      'Unlock hidden power from your engine with a custom ECU remap tailored to your setup and fuel.',
    icon: '⚡',
  },
  {
    title: 'Gearbox Tunes',
    price: 'Contact for Pricing',
    description:
      'Sharper shifts, improved throttle response and better launch control for automatic and DCT gearboxes.',
    icon: '⚙️',
  },
  {
    title: 'Pops & Bangs / Burbles',
    price: 'Contact for Pricing',
    description:
      'Add that signature exhaust note with custom overrun maps — from subtle crackles to aggressive pops.',
    icon: '💥',
  },
  {
    title: 'OPF/GPF Delete Tune',
    price: 'Contact for Pricing',
    description:
      'Remove particulate filter restrictions with a dedicated ECU delete tune for improved flow and sound.',
    icon: '🔥',
  },
  {
    title: 'Remote Tunes (Worldwide)',
    price: 'Contact for Pricing',
    description:
      "Can't visit us? Get a full custom tune delivered remotely. Available worldwide via OBD port and our tuning process.",
    icon: '🌍',
  },
  {
    title: 'BMW Coding',
    price: 'Contact for Pricing',
    description:
      'Unlock hidden features, customise comfort settings, and enable options your BMW came with but never activated.',
    icon: '💻',
  },
  {
    title: 'Apple CarPlay / Android Auto',
    price: 'Contact for Pricing',
    description:
      'Add full wireless or wired CarPlay and Android Auto to compatible BMW models.',
    icon: '📱',
  },
  {
    title: 'Remote Start',
    price: 'Contact for Pricing',
    description:
      'Start your BMW from your phone with our remote start coding and hardware install service.',
    icon: '🔑',
  },
  {
    title: 'Welcome Light Animations',
    price: 'Contact for Pricing',
    description:
      'Custom puddle lights, laser projections, and ambient light sequences for a unique personalised touch.',
    icon: '✨',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section
        className="pt-32 pb-16 px-4 text-center carbon-texture"
        style={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, #0d1a33 100%)',
        }}
      >
        <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
          Full Service Menu
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
          What We <span className="text-accent">Do</span>
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
          Performance upgrades for your BMW — from stage tunes to custom coding.
        </p>
      </section>

      {/* ── SERVICE CARDS GRID ── */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
                showButton={true}
                buttonText="Get a Quote"
                buttonHref="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PAYPAL SECTION ── */}
      <section className="py-20 px-4 bg-section-bg">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-card-bg border border-card-border rounded-2xl p-10">
            <div className="text-4xl mb-4">💳</div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Pay for Remote Tunes Online
            </h2>
            <p className="text-muted mb-2">Secure checkout via PayPal</p>
            <p className="text-gray-400 text-sm mb-8">
              Remote tune payment — contact us first to confirm your package before paying.
            </p>
            <PayPalButton clientId={PAYPAL_CLIENT_ID} />
            <p className="text-muted text-xs mt-6">
              {/* TODO: Swap PAYPAL_CLIENT_ID in services/page.tsx to go live */}
              Swap <code className="text-accent">PAYPAL_CLIENT_ID</code> in{' '}
              <code className="text-accent">services/page.tsx</code> to go live.
            </p>
          </div>
        </div>
      </section>

      {/* ── REMOTE CTA ── */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Not sure which service you need?
          </h3>
          <p className="text-muted mb-8 text-lg">
            Drop us a message and we&apos;ll help you find the right upgrade for your BMW.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 accent-glow hover:scale-105 text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
