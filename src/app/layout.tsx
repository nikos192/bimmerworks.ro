import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Bimmerworks | BMW Performance Tuning Specialists',
    template: '%s | Bimmerworks.ro',
  },
  description:
    'BMW ECU tuning, coding, remote tunes worldwide. Packages from $190. Remote sessions take 20 minutes — no workshop visit required.',
  openGraph: {
    title: 'Bimmerworks | BMW Performance Tuning Specialists',
    description:
      "Unlock your BMW's true potential — ECU remaps, gearbox tunes, pops & bangs, coding and more. Remote worldwide.",
    url: 'https://bimmerworks.ro',
    siteName: 'Bimmerworks.ro',
    images: [
      {
        url: 'https://bimmerworks.ro/profile-pic.jpg',
        width: 1080,
        height: 1080,
        alt: 'Bimmerworks — BMW Performance Tuning',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bimmerworks | BMW Performance Tuning',
    description: 'BMW ECU tuning, coding & remote tunes worldwide. Packages from $190.',
    images: ['https://bimmerworks.ro/profile-pic.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
