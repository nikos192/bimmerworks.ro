'use client';

import { useState } from 'react';
import Link from 'next/link';

type CategoryId = 'all' | 'performance' | 'enhancements' | 'retrofits' | 'oem';

interface Service {
  id: string;
  name: string;
  description: string;
  tags: string[];
  price: string;
  category: Exclude<CategoryId, 'all'>;
  highlights: string[];
}

const services: Service[] = [
  // ── PERFORMANCE ──
  {
    id: 'pops-bangs',
    name: 'Pops & Bangs Tune',
    description: 'Signature exhaust crackle and pop on overrun. Active on Sport & Sport+ modes — no ECU unlock required.',
    tags: ['G Series', 'B46 · B48 · B58', 'N63 · S68'],
    price: '$300 USD',
    category: 'performance',
    highlights: ['+25 hp · +80 Nm', 'Active on Sport & Sport+ modes', 'No ECU unlock required', 'No warranty void · No dealer flag'],
  },
  {
    id: 'gpf-delete',
    name: 'GPF / OPF Delete Tune',
    description: 'Remove particulate filter software restrictions for improved exhaust flow and sound. Works on locked ECUs, any production date.',
    tags: ['G Series', 'F8x', 'Any Production Date'],
    price: '$200 USD',
    category: 'performance',
    highlights: ['ECU can be locked', 'Any production date', 'All OEM software', 'No warranty void'],
  },
  {
    id: 'gearbox-f',
    name: 'Gearbox Tune — F Series',
    description: 'Stage 2/3 gearbox remap for F series. Sharper shifts with raised torque limits and gear display in D mode.',
    tags: ['F Series', 'Automatic'],
    price: '$190 USD',
    category: 'performance',
    highlights: ['Gear display in D mode', 'Faster & smoother shifts', 'Optimised shift points', 'Raised torque limits'],
  },
  {
    id: 'gearbox-g',
    name: 'Gearbox Tune — G Series',
    description: 'Full 8HP remap. Reduced shift times, raised shift points, and launch control on supported models.',
    tags: ['G Series', '8HP Automatic'],
    price: '$280 USD',
    category: 'performance',
    highlights: ['Shift time reduced 50%', 'Higher modified shift points', 'Gear display in D / S / M', 'Launch control (select 8HP models)', 'Calibrated uphill/downhill strategy'],
  },
  {
    id: 'xm-red-label',
    name: 'XM Red Label Tune',
    description: 'OEM Red Label calibration — 750 hp, 1,000 Nm, with full gearbox, steering and suspension coding.',
    tags: ['BMW XM · G09', '2022–2026', 'All Regions'],
    price: '$400 USD',
    category: 'performance',
    highlights: ['750 hp · 1,000 Nm', 'Engine tune + full Red Label calibration', 'Gearbox / Steering / Traction / Suspension', 'No dealer flag · All regions compatible'],
  },
  {
    id: 'cs-tune',
    name: 'M3 / M4 CS Tune Pack',
    description: 'CS DME flash for 530 hp plus full CS-spec coding across transmission, differential and chassis systems.',
    tags: ['G80 · G82 · G83', '2021–2026 AT'],
    price: '$400 USD',
    category: 'performance',
    highlights: ['530 hp / 650 Nm (from stock 510 hp)', 'CS DME flash + full CS coding', 'Transmission · Differential · Steering · Traction · Suspension', 'Anti-Dazzle (US) · ASD · Start/Stop disable (EU)'],
  },
  // ── ENHANCEMENTS ──
  {
    id: 'bmw-coding',
    name: 'BMW Coding',
    description: 'Activate hidden features, customise comfort settings, disable Start/Stop, enable video in motion, and more.',
    tags: ['F Series', 'G Series', 'Most Models'],
    price: 'From $80 USD',
    category: 'enhancements',
    highlights: ['61+ G-series coding options available', 'Fully reversible — 100% OEM software', 'Remote session, 10–15 minutes', 'Worldwide service'],
  },
  {
    id: 'welcome-lights',
    name: 'Welcome Light Animations',
    description: 'Custom puddle lights, laser projections and ambient light sequences. Personalise your BMW inside and out.',
    tags: ['Select G Series', 'Select F Series'],
    price: 'Contact for Pricing',
    category: 'enhancements',
    highlights: ['Custom puddle light patterns', 'Laser projections', 'Ambient light sequences'],
  },
  {
    id: 'interior-lighting',
    name: 'Interior Lighting Colors',
    description: 'Expand your ambient interior lighting palette beyond factory defaults with new custom colour options.',
    tags: ['G Series'],
    price: 'Contact for Pricing',
    category: 'enhancements',
    highlights: ['Expanded colour palette', 'New ambient colours unlocked', 'OEM coding — no hardware required'],
  },
  {
    id: 'antidazzle',
    name: 'Anti-Dazzle Headlights',
    description: 'Enable the anti-dazzle headlight function via coding for improved night driving visibility.',
    tags: ['G Series', 'Select Models'],
    price: 'Contact for Pricing',
    category: 'enhancements',
    highlights: ['Coding activation only', 'OEM feature unlock', 'No hardware required'],
  },
  {
    id: 'amber-delete',
    name: 'Amber Side Marker Delete',
    description: 'Remove amber side marker lighting for a cleaner, all-white DRL appearance on US-spec models.',
    tags: ['Most US Models'],
    price: 'Contact for Pricing',
    category: 'enhancements',
    highlights: ['Software-only coding', 'No warranty impact', 'Clean all-white DRL look'],
  },
  {
    id: 'tpms-delete',
    name: 'TPMS Delete',
    description: 'Disable TPMS warnings for track use or when running wheels without TPMS sensors fitted.',
    tags: ['F Series', 'G Series'],
    price: 'Contact for Pricing',
    category: 'enhancements',
    highlights: ['Software coding only', 'Fully reversible', 'Track & track-day use'],
  },
  {
    id: 'edc-delete',
    name: 'EDC Delete',
    description: 'Removes EDC fault lights after coilover conversion — required when replacing factory electronic dampers.',
    tags: ['F Series', 'G Series'],
    price: 'Contact for Pricing',
    category: 'enhancements',
    highlights: ['Eliminates EDC fault lights', 'Required for coilover swaps', 'Coding only — no hardware'],
  },
  // ── RETROFITS ──
  {
    id: 'carplay',
    name: 'Apple CarPlay / Android Auto',
    description: 'Add full wireless or wired CarPlay and Android Auto to compatible BMW models.',
    tags: ['Select F Series', 'Select G Series'],
    price: 'Contact for Pricing',
    category: 'retrofits',
    highlights: ['Wireless & wired options', 'Android Auto supported', 'Contact us for model compatibility'],
  },
  {
    id: 'remote-start',
    name: 'Remote Start',
    description: 'Start your BMW remotely from your phone. Coding and hardware install — contact us with your model for compatibility.',
    tags: ['Select Models'],
    price: 'Contact for Pricing',
    category: 'retrofits',
    highlights: ['Phone app control', 'Coding + hardware installation', 'Contact us for model compatibility'],
  },
  {
    id: 'race-seats',
    name: 'Race Seats / Seat Delete',
    description: 'Coding for aftermarket seat installs and seat delete — removes airbag and seat occupancy fault codes.',
    tags: ['F Series', 'G Series'],
    price: 'Contact for Pricing',
    category: 'retrofits',
    highlights: ['Airbag fault code removal', 'Seat occupancy coding', 'Required for track builds'],
  },
  // ── OEM SERVICES ──
  {
    id: 'nav-region',
    name: 'Navigation Region Change',
    description: 'Remote region change for BMW iDrive 7 & 8 — fixes navigation locked to wrong region on imported vehicles.',
    tags: ['iDrive 7', 'iDrive 8', 'ROW · ASIA'],
    price: '$220 USD',
    category: 'oem',
    highlights: ['Full map & nav region change', 'Latest navigation maps included', 'ROW and ASIA region conversions', 'Ideal for imported BMWs'],
  },
  {
    id: 'remote-tunes',
    name: 'Remote Tunes (Worldwide)',
    description: 'Performance and software tunes delivered fully remotely — no workshop visit, no shipping required.',
    tags: ['F Series', 'G Series', 'Worldwide'],
    price: 'From $190 USD',
    category: 'oem',
    highlights: ['100% remote delivery', 'All OEM software', 'Same-day turnaround', 'Worldwide service'],
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

// ── ICONS ──

function IconGrid() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function IconNodes() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  );
}

function IconWrench() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconChevron({ open }: { open: boolean }) {
  return (
    <svg
      className="w-3.5 h-3.5 ml-auto shrink-0 transition-transform duration-200"
      style={{ transform: open ? 'rotate(180deg)' : 'none' }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ── SERVICE CARD ──

function ServiceCard({ service }: { service: Service }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#0d1117] border border-white/10 rounded-2xl p-5 flex flex-col hover:border-accent/30 transition-colors duration-200 h-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-white font-bold text-base leading-tight">{service.name}</h3>
        <span className="shrink-0 text-xs text-emerald-400 border border-emerald-400/30 bg-emerald-400/5 rounded-full px-2.5 py-0.5 font-medium whitespace-nowrap">
          Available
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-3">{service.description}</p>

      {/* Compatibility tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {service.tags.map((tag) => (
          <span key={tag} className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>

      {/* Price */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-gray-500 text-sm font-medium">Price:</span>
        <span className="text-accent font-bold text-sm">{service.price}</span>
      </div>

      {/* Buttons — pushed to bottom */}
      <div className="flex flex-col gap-2 mt-auto">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200"
        >
          <IconEye />
          <span>{expanded ? 'Hide Details' : 'View Details'}</span>
          <IconChevron open={expanded} />
        </button>
        <Link
          href="/contact"
          className="w-full flex items-center justify-center border border-accent/40 text-accent hover:bg-accent hover:text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200"
        >
          Get a Quote
        </Link>
      </div>

      {/* Expanded details */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <ul className="space-y-1.5">
            {service.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="text-accent shrink-0 mt-0.5 text-xs">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ── TABS CONFIG ──

const categoryCounts: Record<CategoryId, number> = {
  all: services.length,
  performance: services.filter((s) => s.category === 'performance').length,
  enhancements: services.filter((s) => s.category === 'enhancements').length,
  retrofits: services.filter((s) => s.category === 'retrofits').length,
  oem: services.filter((s) => s.category === 'oem').length,
};

const tabDefs: { id: CategoryId; label: string; Icon: () => JSX.Element }[] = [
  { id: 'all', label: 'All Services', Icon: IconGrid },
  { id: 'performance', label: 'Performance', Icon: IconChart },
  { id: 'enhancements', label: 'Enhancements', Icon: IconNodes },
  { id: 'retrofits', label: 'Retrofits', Icon: IconWrench },
  { id: 'oem', label: 'OEM Services', Icon: IconDocument },
];

// ── MAIN EXPORT ──

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState<CategoryId>('all');
  const filtered = activeTab === 'all' ? services : services.filter((s) => s.category === activeTab);

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
            <span key={b} className="text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full px-3 py-1">
              ✓ {b}
            </span>
          ))}
        </div>
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-5 py-2 text-accent text-sm font-semibold">
          <span>🌍</span> Packages from $190 — no workshop visit required
        </div>
      </section>

      {/* ── FILTER TABS + CARDS ── */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">

          {/* Tab bar — 2-col grid on mobile, flex row on sm+ */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 mb-10">
            {tabDefs.map(({ id, label, Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border sm:shrink-0 sm:whitespace-nowrap ${
                    id === 'all' ? 'col-span-2 sm:col-span-1' : ''
                  } ${
                    isActive
                      ? 'bg-accent text-white border-accent shadow-lg'
                      : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  <Icon />
                  <span>{label}</span>
                  <span
                    className={`text-xs rounded-full px-1.5 py-0.5 font-medium ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-500'
                    }`}
                  >
                    {categoryCounts[id]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── G-SERIES CODING OPTIONS ── */}
      <section className="py-20 px-4 bg-section-bg">
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
      <section className="py-12 px-4 bg-background border-y border-white/5">
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
      <section className="py-20 px-4 bg-section-bg">
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
            <Link href="/faq" className="text-accent hover:underline">
              Visit our FAQ page →
            </Link>
          </p>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to book?</h3>
          <p className="text-muted mb-8 text-lg">Message us on WhatsApp or send a message — we reply same day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/40757226101"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 text-lg"
              style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-block border border-accent text-accent hover:bg-accent hover:text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 text-lg"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
