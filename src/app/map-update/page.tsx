import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BMW Map Update via USB — Step-by-Step Guide',
  description:
    'How to update your BMW navigation maps via USB. Step-by-step guide covering USB preparation, map file extraction, FSC activation, and in-car installation.',
};

const steps = [
  {
    number: 1,
    title: 'Prepare USB Drive',
    icon: '💾',
    instructions: [
      'Use a USB drive with at least 32 GB or 64 GB of free space.',
      'Format the drive to exFAT or FAT32 — do not use NTFS.',
      'The drive must be completely empty before copying any files.',
      'Use a USB 3.0 drive for faster transfer speeds.',
    ],
    warning: null,
  },
  {
    number: 2,
    title: 'Extract Map Files',
    icon: '📦',
    instructions: [
      'Download the map archive via the provided Torrent or Mega link.',
      'Extract the archive using WinRAR or 7-Zip.',
      'Copy all extracted files directly to the root of the USB drive.',
      'Do NOT place the files inside any folder — they must be at the root level.',
    ],
    warning: 'Files placed inside a subfolder will not be detected by the iDrive system.',
  },
  {
    number: 3,
    title: 'Add FSC Activation File',
    icon: '🔑',
    instructions: [
      'At the root of the USB drive, create a new folder named exactly: FSC',
      'Place your FSC activation file (.fsc) inside this folder.',
      'The folder structure should be: USB root → /FSC/ → yourfile.fsc',
      'Do not rename the FSC file.',
    ],
    warning: null,
  },
  {
    number: 4,
    title: 'Install in Car',
    icon: '🚗',
    instructions: [
      'Start the engine or switch the ignition to position 2 (accessories on).',
      'Insert the prepared USB drive into the USB port in your car.',
      'Wait for the iDrive system to detect the USB and display a notification.',
      'If no prompt appears within 60 seconds, navigate to: Settings → System → Software update.',
    ],
    warning: null,
  },
  {
    number: 5,
    title: 'Confirm & Run the Update',
    icon: '✅',
    instructions: [
      'Select "Update Map" when prompted on the iDrive screen.',
      'If asked, confirm the FSC activation file.',
      'Allow the installation to complete — this takes 30 to 90 minutes.',
      'Do not turn off the engine or remove the USB during the update.',
    ],
    warning: 'Interrupting the update process can corrupt map data and may require a dealer visit to resolve.',
  },
];

const requirements = [
  { label: 'USB Drive', value: '32 GB or 64 GB — exFAT or FAT32' },
  { label: 'BMW Map Files', value: 'Provided via Torrent or Mega' },
  { label: 'FSC File', value: 'Activation file for your VIN' },
  { label: 'PC', value: 'Windows — for extraction and file transfer' },
];

export default function MapUpdatePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-white">
      {/* Header */}
      <section className="py-16 px-4 text-center border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Navigation Guide
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">BMW Map Update via USB</h1>
          <p className="text-muted text-base leading-relaxed">
            Follow these five steps to update your BMW navigation maps at home using a USB drive.
            No dealer visit required.
          </p>
        </div>
      </section>

      {/* Requirements bar */}
      <section className="py-6 px-4 bg-[var(--section-bg)] border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4 text-center">
            What You Need
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {requirements.map((req) => (
              <div
                key={req.label}
                className="bg-[var(--card-bg)] border border-white/5 rounded-xl p-4 text-center"
              >
                <p className="text-accent text-xs font-semibold uppercase tracking-wide mb-1">
                  {req.label}
                </p>
                <p className="text-white text-sm">{req.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[var(--card-bg)] border border-white/5 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{step.icon}</span>
                    <h2 className="text-white font-semibold text-lg">{step.title}</h2>
                  </div>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-0">
                {step.instructions.map((instruction, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent/60" />
                    <span className="text-muted text-sm leading-relaxed">{instruction}</span>
                  </li>
                ))}
              </ul>

              {step.warning && (
                <div className="mt-5 flex items-start gap-3 bg-yellow-500/5 border border-yellow-500/20 rounded-xl px-4 py-3">
                  <span className="text-yellow-400 text-sm mt-0.5">⚠️</span>
                  <p className="text-yellow-200/80 text-xs leading-relaxed">{step.warning}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Warning footer */}
      <section className="py-8 px-4 bg-[var(--section-bg)] border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="bg-red-500/5 border border-red-500/15 rounded-2xl p-6">
            <p className="text-red-400 font-semibold text-sm mb-3">Important Reminders</p>
            <ul className="flex flex-col gap-2">
              {[
                'Do not remove the USB drive at any point during the update.',
                'Keep the engine running or ensure the vehicle is on a charger to avoid battery drain.',
                'Use the correct map version for your iDrive generation — installing the wrong version can cause issues.',
                'If the update fails, do not attempt to restart it until you contact us for guidance.',
              ].map((reminder, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400/60" />
                  <span className="text-red-200/70 text-sm leading-relaxed">{reminder}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Back to services */}
      <section className="py-10 px-4 text-center">
        <p className="text-muted text-sm mb-4">
          Need an FSC file or map package for your vehicle?
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent/40 text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
        >
          ← Back to Services
        </Link>
      </section>
    </main>
  );
}
