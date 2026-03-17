import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BMW Tuning Services & Pricing',
  description:
    'BMW gearbox tunes, pops & bangs, OPF/GPF delete, CS tune packs, XM Red Label tunes, BMW coding, CarPlay installs and more. All done remotely — packages from $190.',
  openGraph: {
    title: 'BMW Tuning Services & Pricing | Bimmerworks.ro',
    description: 'Full range of BMW performance upgrades — all done remotely worldwide. Real prices, real results.',
    url: 'https://bimmerworks.ro/services',
  },
};

const pricedServices = [
  {
    icon: '💥',
    tag: 'G series',
    title: 'Pops & Bangs Tune',
    subtitle: 'B46 / B48 / B58 / N63 / S68 — 20i · 30i · 40i · 50i G series',
    price: '$300 USD',
    highlights: ['+25 hp · +80 Nm', 'Active on Sport & Sport+ modes', 'No ECU unlock required', 'No warranty void · No dealer flag'],
    description: 'Custom modification of OEM software that adds a signature exhaust crackle and pop on overrun. All OEM software — no risk, no unlock, no flags.',
  },
  {
    icon: '🔥',
    tag: 'Gxx / F8x',
    title: 'GPF / OPF Delete Tune',
    subtitle: 'BMW Gxx and F8x series — any production date',
    price: '$200 USD',
    highlights: ['ECU can be locked', 'Any production date', 'All OEM software', 'No warranty void'],
    description: 'Remove particulate filter software restrictions to unlock improved exhaust flow and sound. Works on locked ECUs, any production date — no restrictions.',
  },
  {
    icon: '⚙️',
    tag: 'F series',
    title: 'Gearbox Tune — Stage 2 / 3',
    subtitle: 'F series automatic gearboxes',
    price: '$190 USD',
    highlights: ['Gear display in D mode', 'Faster & smoother shifts', 'Optimised shift points', 'Raised torque limits'],
    description: 'Stage 2/3 gearbox remap for F series BMWs. Sharper, faster shifts with raised torque limits and a proper gear display in D mode.',
  },
  {
    icon: '⚙️',
    tag: 'G series',
    title: 'Gearbox Tune — Stage 2 / 3',
    subtitle: 'G series 8HP automatic gearboxes',
    price: '$280 USD',
    highlights: ['Shift time reduced 50%', 'Higher modified shift points', 'Gear display in D / S / M', 'Launch control (select 8HP models)', 'Calibrated uphill / downhill strategy'],
    description: 'Full 8HP gearbox remap for G series. Reduced shift times, higher shift points, launch control on supported boxes, and optimised warmup behaviour. Requires 8HP Flasher tool.',
  },
  {
    icon: '🚀',
    tag: 'BMW XM · G09',
    title: 'XM Red Label Tune',
    subtitle: 'BMW XM G09 — 2022 to 2026, all regions',
    price: '$400 USD',
    highlights: ['750 hp · 1,000 Nm', 'Engine tune + full Red Label calibration', 'Gearbox / Steering / Traction / Suspension', 'No dealer flag · All regions compatible'],
    description: 'OEM calibration straight from the BMW XM G09 Red Label version. Engine tune to 750 hp and 1,000 Nm, plus the full Red Label gearbox, steering, traction and suspension calibration.',
  },
  {
    icon: '🏁',
    tag: 'G80 · G82 · G83',
    title: 'M3 / M4 CS Tune Pack',
    subtitle: 'BMW G80 G81 G82 G83 — 2021 to 2026 (AT)',
    price: '$400 USD',
    highlights: ['530 hp / 650 Nm (from stock 510 hp)', 'CS DME flash + full CS coding', 'Transmission · Differential · Steering · Traction · Suspension', 'Anti-Dazzle (US) · ASD · Start/Stop disable (EU)'],
    description: 'The full CS software package — CS DME flash for 530 hp, plus CS-spec coding across transmission, differential, steering, traction control and suspension.',
  },
  {
    icon: '🗺️',
    tag: 'iDrive 7 & 8',
    title: 'Navigation Region Change',
    subtitle: 'BMW MGU iDrive 7 / 8 — LIVE / JOY Maps (MGU18 / MGU21)',
    price: '$220 USD',
    highlights: ['Full map & nav region change', 'Latest navigation maps included', 'ROW and ASIA region conversions', 'Ideal for imported BMWs'],
    description: 'Professional remote region change for BMW iDrive 7 and 8 navigation systems. Fixes BMW vehicles imported from other regions where navigation is locked to the wrong map.',
  },
];

const contactServices = [
  {
    icon: '💻',
    title: 'BMW Coding',
    priceRange: 'From ~$80',
    description: 'Activate hidden features, customise comfort settings, disable Start/Stop, enable video in motion, and more — all via remote coding session.',
  },
  {
    icon: '📱',
    title: 'Apple CarPlay / Android Auto',
    priceRange: 'Contact for Pricing',
    description: 'Add full wireless or wired CarPlay and Android Auto to compatible BMW models.',
  },
  {
    icon: '🔑',
    title: 'Remote Start',
    priceRange: 'Contact for Pricing',
    description: 'Start your BMW remotely from your phone. Coding and hardware install — contact us with your model for compatibility.',
  },
  {
    icon: '✨',
    title: 'Welcome Light Animations',
    priceRange: 'Contact for Pricing',
    description: 'Custom puddle lights, laser projections and ambient light sequences. Personalise your BMW inside and out.',
  },
];

const gSeriesCodingOptions = [
  'Ambient lights new colours',
  'Turn off Horn on Secure Feature when Locking with Engine Running',
  'Comfort +',
  'Sport +',
  'EcoPro +',
  'Fold mirrors with warning lights on',
  'Instrument cluster: M Performance / M Power / Alpina',
  'Increase refresh rate',
  'Motorsport M logo display',
  'Auto Start/Stop Memory',
  'Sunroof automatic close after 6 hours',
  'Sunroof automatic close when sensor detects water/rain',
  'M Dynamic DSC Mode',
  'Tyre temperature and pressure display in Instrument Cluster',
  'Bowers & Wilkins Signature Audio sound 3D',
  'M logo display iDrive boot',
  'Macro Trailer camera zoom',
  'Sport Individual — adjustment dampers',
  'Voice commands: activate cruise control, open windows, change temperature',
  'Sailing mode in Eco Pro',
  'Air Condition setting for cooler air summer time',
  'Disable Legal disclaimer',
  'Start car in Eco Pro or Sport Driving Mode',
  'Turn off Lights on the Off / 0 Position',
  'Enable Windows to Close when Doors are Open',
  'Change Sport Theme from Red to Grey',
  'Fuel suggestion stop',
  'Automatic time setup online',
  'Daytime running lights option in iDrive',
  'Turn off completely daytime running lights',
  '5-times turn signal flash 1 touch press',
  'Enable After blow climate — after engine off can press auto button for 40 seconds air blow',
  'Tailgate / boot close 1 touch',
  'Tailgate warning sounds open / close',
  'Enable Traffic Light assist',
  'Enable Automatic Lane change assistant',
  'Enable Speed limit assistant',
  'Enable Emergency Lane formation',
  'Enable Narrow road warning',
  'Enable driver attention camera option disable',
  'Enable rear DRL option',
  'Valet trunk close option',
  'Control Exhaust Valves from iDrive',
  'Enable Shift lights M Performance style',
  'Reverse angle mirror fix passenger side from 90° to 45°',
  'Disable seatbelt warning',
  'Enable auto steering wheel heating',
  'Enable instrument cluster dimming fix daytime (common issue from window tints)',
  'M logo display on display keys',
  'Enable Anti-Dazzle headlights',
  'Brake force flash display flickering',
  'Disable Active Sound Design (Artificial Engine Sound)',
  'Enable Remember A/C Compressor Off Mode',
  'Change default driving mode: EcoPro, Adaptive, Comfort, Sport, Sport+',
  'Activate Warning Sounds when putting gearbox in R',
  'Change fuel alarm when left 8 / 12 / 13 litres / gallons',
  'Change dashboard highlight — more visible 50%',
  'When press P button doors automatic unlocking',
  'Change Warning Chimes / PDC Sounds to BMW / Mini / Rolls Royce / BMW I',
  'Change Default Distance on Adaptive Cruise Control',
  'Setting the GONG sound when saving the seat position',
];

const faqs = [
  {
    q: 'How long does a coding session take?',
    a: 'Most coding sessions take 10–15 minutes, depending on the number of services requested. More complex modifications may require additional time.',
  },
  {
    q: 'How can I check availability before booking?',
    a: 'DM us on WhatsApp to set up an appointment with Bimmerworks.ro. We reply same day.',
  },
  {
    q: 'What equipment do I need?',
    a: "You'll need a Windows PC, an ENET OBD cable, and a stable internet connection. See the 'What You'll Need' section above for full requirements.",
  },
  {
    q: 'Is remote coding safe for my vehicle?',
    a: 'Yes. Our technicians use real-time vehicle monitoring and safety checks throughout every session. We use BMW OEM coding methods and create backups before making any changes.',
  },
  {
    q: 'Does coding void my warranty?',
    a: 'All coding and software applied by Bimmerworks.ro is 100% OEM, applied using BMW OEM factory software. Coding does not void your warranty, and all changes are fully reversible.',
  },
  {
    q: 'Do you offer support after the coding session?',
    a: "Yes. We provide ongoing support for all our coding services. If you experience any issues, reach out via WhatsApp or email and we'll assist you.",
  },
  {
    q: 'Where are you located?',
    a: 'We are based in Romania and all coding services are performed remotely from Romania — available worldwide.',
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
        <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">Full Service Menu</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
          What We <span className="text-accent">Do</span>
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Performance upgrades for your BMW — from gearbox tunes to full BMW coding.
          Every service is delivered <strong className="text-white">100% remotely</strong>, worldwide.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {['No warranty void', 'No dealer flag', 'All OEM software', 'Remote worldwide', 'Done in 20 min'].map((b) => (
            <span key={b} className="text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full px-3 py-1">✓ {b}</span>
          ))}
        </div>
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-5 py-2 text-accent text-sm font-semibold">
          <span>🌍</span> Packages from $190 — no workshop visit required
        </div>
      </section>

      {/* ── PRICED SERVICE PACKAGES ── */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
            Packages with <span className="text-accent">Fixed Pricing</span>
          </h2>
          <p className="text-muted text-center mb-12">Get in touch to book your session.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricedServices.map((svc) => (
              <div key={svc.title}
                className="bg-card-bg border border-card-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{svc.icon}</span>
                    <div>
                      <span className="text-xs text-accent font-semibold uppercase tracking-widest block mb-0.5">{svc.tag}</span>
                      <h3 className="text-white font-bold text-lg leading-tight">{svc.title}</h3>
                    </div>
                  </div>
                  <div className="text-accent font-black text-xl whitespace-nowrap">{svc.price}</div>
                </div>
                <p className="text-xs text-muted mb-3">{svc.subtitle}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{svc.description}</p>
                <ul className="space-y-1 mb-6">
                  {svc.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-accent text-xs">▸</span> {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link href="/contact"
                    className="inline-block w-full text-center bg-accent hover:bg-accent-hover text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] accent-glow text-sm">
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MORE SERVICES ── */}
      <section className="py-20 px-4 bg-section-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
            More <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted text-center mb-12">Get in touch for a quote tailored to your BMW.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactServices.map((svc) => (
              <div key={svc.title}
                className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="text-3xl mb-3">{svc.icon}</div>
                <h3 className="text-white font-bold text-base mb-1">{svc.title}</h3>
                <p className="text-accent text-sm font-semibold mb-2">{svc.priceRange}</p>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{svc.description}</p>
                <div className="pt-4 border-t border-white/5 mt-auto">
                  <Link href="/contact" className="text-accent hover:text-white font-semibold text-sm transition-colors">
                    Get a Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── G-SERIES CODING OPTIONS ── */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold text-center mb-3">BMW Coding</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
            G-Series Coding <span className="text-accent">Options</span>
          </h2>
          <p className="text-muted text-center mb-10 max-w-xl mx-auto">
            61 available coding options for BMW G-series vehicles — all done remotely, all fully reversible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {gSeriesCodingOptions.map((option, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-card-bg border border-card-border rounded-lg px-4 py-3 hover:border-accent/30 transition-colors duration-200"
              >
                <span className="text-accent font-bold text-xs mt-0.5 shrink-0 w-5 text-right">{i + 1}.</span>
                <span className="text-gray-300 text-sm leading-snug">{option}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-muted text-sm mb-4">Don&apos;t see what you&apos;re looking for? Ask us — we code more than what&apos;s listed.</p>
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] accent-glow"
            >
              Book a Coding Session
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU NEED ── */}
      <section className="py-12 px-4 bg-section-bg border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-muted text-sm uppercase tracking-widest mb-6 font-semibold">
            What you&apos;ll need for any remote service
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['ENET Cable (OBD2 to Ethernet)', 'Windows PC or macOS', 'AnyDesk (free remote access)', 'Stable internet connection'].map((req) => (
              <div key={req} className="flex items-center gap-2 bg-card-bg border border-card-border rounded-lg px-4 py-2 text-sm text-gray-300">
                <span className="text-accent">✓</span> {req}
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-xs mt-4">
            Sessions take roughly 10–15 minutes. Contact us → we confirm your booking slot → our technician connects remotely.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-muted text-center mb-12">Everything you need to know before booking.</p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-card-bg border border-card-border rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-sm mt-8">
            More questions?{' '}
            <Link href="/faq" className="text-accent hover:underline">Visit our FAQ page →</Link>
          </p>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 px-4 bg-section-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to book?</h3>
          <p className="text-muted mb-8 text-lg">Message us on WhatsApp or send a message — we reply same day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/40757226101" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 text-lg"
              style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <Link href="/contact"
              className="inline-block border border-accent text-accent hover:bg-accent hover:text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 text-lg">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
