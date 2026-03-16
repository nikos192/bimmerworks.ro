import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Bimmerworks | BMW Performance Tuning Specialists',
    template: '%s | Bimmerworks',
  },
  description:
    'Bimmerworks — BMW ECU tuning, coding, remote tunes, CarPlay installs and performance upgrades. Remote tunes available worldwide.',
  keywords: [
    'BMW tuning',
    'ECU remap',
    'BMW coding',
    'stage 1 tune',
    'stage 2 tune',
    'remote tune',
    'pops and bangs',
    'BMW performance',
    'Bimmerworks',
    'Romania BMW tuning',
  ],
  openGraph: {
    title: 'Bimmerworks | BMW Performance Tuning Specialists',
    description:
      "BMW ECU tuning, coding, remote tunes and more. Specialists in unlocking your BMW's true potential.",
    url: 'https://bimmerworks.ro',
    siteName: 'Bimmerworks',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bimmerworks | BMW Performance Tuning Specialists',
    description:
      'BMW ECU tuning, coding, remote tunes and more.',
  },
  metadataBase: new URL('https://bimmerworks.ro'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-white font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
