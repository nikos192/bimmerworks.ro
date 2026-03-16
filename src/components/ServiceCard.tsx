import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  price?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonHref?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  price,
  showButton = true,
  buttonText = 'Get a Quote',
  buttonHref = '/contact',
}: ServiceCardProps) {
  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-6 flex flex-col hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 group">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      {price && (
        <p className="text-accent text-sm font-semibold mb-3">{price}</p>
      )}
      <p className="text-muted text-sm leading-relaxed flex-1">{description}</p>
      {showButton && (
        <div className="mt-5">
          <Link
            href={buttonHref}
            className="inline-block border border-accent/50 hover:border-accent text-accent hover:bg-accent hover:text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200"
          >
            {buttonText}
          </Link>
        </div>
      )}
    </div>
  );
}
