import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Bimmerworks.ro',
  description: 'Terms and conditions for Bimmerworks.ro remote BMW coding and programming services.',
};

const sections = [
  {
    number: '1',
    title: 'Service Description',
    content: (
      <>
        <p className="text-gray-300 text-sm leading-relaxed mb-3">
          BIMMERWORKS.RO provides remote BMW coding and programming services, including but not limited to:
        </p>
        <ul className="space-y-2">
          {[
            'Software modifications and feature activations',
            'Diagnostic troubleshooting and clearing fault codes',
            'Retrofit coding and programming',
            'Performance enhancements and customizations',
            'Appointment-based technical support',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
              <span className="text-accent mt-0.5">▸</span> {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: '2',
    title: 'Customer Equipment Requirements',
    content: (
      <>
        <p className="text-gray-300 text-sm leading-relaxed mb-3">
          The customer is solely responsible for providing:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            'Compatible BMW diagnostic interface (wired ENET to OBD cable)',
            'Computer running Windows 10/11 with administrative privileges',
            'Stable, high-speed internet connection',
            'BMW vehicle with functioning OBD port and compatible software version',
            'Fully charged vehicle battery or active connection to battery charger/tender',
            'Ability to follow technical instructions',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
              <span className="text-accent mt-0.5">▸</span> {item}
            </li>
          ))}
        </ul>
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-4 py-3">
          <p className="text-yellow-400 text-sm font-semibold">
            ⚠️ Important: No refunds will be provided if services cannot be completed due to the customer&apos;s inability to provide compatible equipment, adequate internet connection, or follow instructions.
          </p>
        </div>
      </>
    ),
  },
  {
    number: '3',
    title: 'Payment Terms',
    content: (
      <ul className="space-y-2">
        {[
          'Payment in full is required before any work is performed',
          'Accepted payment methods: Credit/Debit Card, PayPal, Revolut',
          'All prices are in US Dollars (USD)',
          'Prices are subject to change without notice',
          'No chargebacks permitted after service delivery',
          'Additional services discovered or requested during a session will require separate payment',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
            <span className="text-accent mt-0.5">▸</span> {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: '4',
    title: 'Refund Policy',
    content: (
      <>
        <p className="text-sm font-semibold text-green-400 mb-2">Refunds ARE provided for:</p>
        <ul className="space-y-2 mb-5">
          {[
            'Service cannot be completed due to provider\'s technical issues (pro-rated refund for services not performed)',
            'Provider unable to deliver promised service features (partial or full refund at discretion)',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
              <span className="text-green-400 mt-0.5">✓</span> {item}
            </li>
          ))}
        </ul>
        <p className="text-sm font-semibold text-red-400 mb-2">Refunds are NOT provided for:</p>
        <ul className="space-y-2">
          {[
            'Incompatible or missing diagnostic equipment',
            'Inadequate internet connection or connection drops',
            "Customer's inability to follow technical instructions",
            'Vehicle hardware limitations or incompatibilities',
            'Cancellations at any time — cancellations made 24+ hours before the original appointment are eligible for rescheduling; cancellations under 24 hours may be eligible for rescheduling at provider\'s sole discretion',
            'Services successfully completed as described',
            'Customer changes mind after coding has begun',
            'Customer misses scheduled appointment time (an opportunity to reschedule may be offered at provider discretion)',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
              <span className="text-red-400 mt-0.5">✕</span> {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: '5',
    title: 'Service Limitations',
    content: (
      <ul className="space-y-2">
        {[
          'Customer must provide accurate VIN and vehicle information',
          'Services may void vehicle warranty — customer assumes this risk',
          'Not all features are available for all models/years',
          'Provider is not responsible for pre-existing vehicle issues',
          'Right to refuse service if vehicle condition poses safety risks',
          'Some modifications may be reversible, others permanent',
          'Certain features may require additional hardware installation by the customer',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
            <span className="text-accent mt-0.5">▸</span> {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: '6',
    title: 'Liability Disclaimer',
    content: (
      <>
        <p className="text-gray-300 text-sm leading-relaxed mb-3">
          SERVICES ARE PROVIDED &ldquo;AS-IS&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. IN NO EVENT SHALL BIMMERWORKS.RO BE LIABLE FOR:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            'Any indirect, consequential, incidental, or punitive damages',
            'Loss of data, profits, or vehicle functionality',
            'Damages exceeding the amount paid for services',
            'Issues arising from customer modifications after service',
            'Compatibility issues with future vehicle updates',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
              <span className="text-accent mt-0.5">▸</span> {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-400 text-sm leading-relaxed">
          Customer acknowledges that vehicle modifications carry inherent risks and assumes full responsibility for requesting and authorising such modifications.
        </p>
      </>
    ),
  },
  {
    number: '7',
    title: 'Intellectual Property',
    content: (
      <ul className="space-y-2">
        {[
          'All software tools and coding files remain property of their respective owners',
          'No transfer of ownership rights in any software or tools',
          'Customer receives a licence to use modifications on their vehicle only',
          'Redistribution or resale of coding files is strictly prohibited',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
            <span className="text-accent mt-0.5">▸</span> {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: '8',
    title: 'Data Privacy',
    content: (
      <ul className="space-y-2">
        {[
          'Vehicle diagnostic data may be temporarily accessed during service',
          'Customer information is kept confidential and secure',
          'No sharing with third parties except as required by law',
          'Customer may request deletion of personal data at any time',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
            <span className="text-accent mt-0.5">▸</span> {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: '9',
    title: 'Dispute Resolution',
    content: (
      <ul className="space-y-2">
        {[
          'Disputes shall be resolved through binding arbitration',
          'Customer waives right to jury trial and class action lawsuits',
          'Each party bears their own legal costs',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
            <span className="text-accent mt-0.5">▸</span> {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: '10',
    title: 'Modifications to Terms',
    content: (
      <ul className="space-y-2">
        {[
          'We reserve the right to update these terms at any time',
          'Changes are effective immediately upon posting to the website',
          'Continued use of our services constitutes acceptance of new terms',
          'Customer is responsible for reviewing terms periodically',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
            <span className="text-accent mt-0.5">▸</span> {item}
          </li>
        ))}
      </ul>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section
        className="pt-32 pb-16 px-4 text-center carbon-texture"
        style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d1a33 100%)' }}
      >
        <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">Legal</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
          Terms &amp; <span className="text-accent">Conditions</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          Please read these terms carefully before using our services.
        </p>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.number} className="bg-card-bg border border-card-border rounded-xl p-6 sm:p-8">
                <h2 className="text-white font-bold text-lg sm:text-xl mb-4 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-xs font-black flex-shrink-0">
                    {section.number}
                  </span>
                  {section.title}
                </h2>
                {section.content}
              </div>
            ))}

            {/* Contact */}
            <div className="bg-card-bg border border-card-border rounded-xl p-6 sm:p-8">
              <h2 className="text-white font-bold text-lg sm:text-xl mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-xs font-black flex-shrink-0">
                  11
                </span>
                Contact Information
              </h2>
              <p className="text-gray-400 text-sm mb-3">
                For questions about these terms or our services, please contact:
              </p>
              <a href="mailto:bimmerworks.ro@gmail.com" className="text-accent hover:underline text-sm font-medium">
                bimmerworks.ro@gmail.com
              </a>
            </div>
          </div>

          {/* Acceptance notice */}
          <div className="mt-8 bg-accent/5 border border-accent/20 rounded-xl p-6 text-center">
            <p className="text-gray-300 text-sm leading-relaxed">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact"
              className="inline-block bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105">
              Book a Session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
