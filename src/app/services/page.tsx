import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

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

export default function ServicesPage() {
  return <ServicesClient />;
}
