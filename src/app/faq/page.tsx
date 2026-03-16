import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Bimmerworks.ro',
  description: 'Frequently asked questions about Bimmerworks remote BMW coding and tuning services.',
};

const faqs = [
  {
    q: 'How long does a coding session take?',
    a: 'Most coding sessions take 10–15 minutes, depending on the number of services requested. More complex modifications may require additional time.',
  },
  {
    q: 'How can I check availability before booking?',
    a: 'DM us on WhatsApp to set up an appointment with Bimmerworks.ro. We reply same day.',
    whatsapp: true,
  },
  {
    q: 'What equipment do I need?',
    a: "You'll need a Windows PC, an ENET OBD cable, and a stable internet connection. Check the Services page for full requirements.",
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
    a: 'Yes. We provide ongoing support for all our coding services. If you experience any issues, reach out via WhatsApp or email and we\'ll assist you.',
  },
  {
    q: 'Where are you located?',
    a: 'We are based in Romania and all coding services are performed remotely from Romania — available worldwide.',
  },
];

export default function FAQPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section
        className="pt-32 pb-16 px-4 text-center carbon-texture"
        style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d1a33 100%)' }}
      >
        <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">Got Questions?</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
          Frequently Asked <span className="text-accent">Questions</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
          Everything you need to know before booking a remote session.
        </p>
      </section>

      {/* ── FAQ LIST ── */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card-bg border border-card-border rounded-xl p-6">
              <h2 className="text-white font-semibold text-base sm:text-lg mb-3">{faq.q}</h2>
              <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              {faq.whatsapp && (
                <a
                  href="https://wa.me/40757226101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 hover:opacity-90"
                  style={{ background: '#25D366' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Message us on WhatsApp
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-muted mb-6">Still have a question? We reply same day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/40757226101" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
              style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <Link href="/contact"
              className="inline-block border border-accent text-accent hover:bg-accent hover:text-white font-bold px-8 py-4 rounded-lg transition-all duration-200">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
