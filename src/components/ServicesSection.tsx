import { Check } from 'lucide-react';
import { SERVICE_PACKAGES, ServicePackage } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectPackage: (pkg: ServicePackage) => void;
}

export function ServicesSection({ onSelectPackage }: ServicesSectionProps) {
  return (
    <section id="packages" className="scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-display text-[#EFECE6] uppercase tracking-tight">
          SERVICES &amp; PACKAGES
        </h2>
        <p className="font-hand text-2xl text-[#F9F8F5]/95 mt-1">
          ✦ Tailored collaboration offerings for brands and teams ✦
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch pt-2">
        {SERVICE_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-[#F9F8F5] rounded-xl p-6 sm:p-8 flex flex-col justify-between relative transition-transform ${
              pkg.featured
                ? 'border-2 border-[#434E3D] shadow-[0_6px_0_#434E3D,0_20px_32px_-8px_rgba(34,38,32,0.3)] md:scale-[1.03] z-10'
                : 'border-2 border-[#434E3D]/40 shadow-[0_3px_0_rgba(67,78,61,0.2)]'
            }`}
          >
            {pkg.featured && <div className="binder-clip" aria-hidden="true" />}

            <div>
              {pkg.badge ? (
                <div className="inline-block bg-[#434E3D] text-[#EFECE6] text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider mb-2">
                  {pkg.badge}
                </div>
              ) : (
                <span className="block text-xs font-mono uppercase tracking-widest text-[#434E3D] font-bold">
                  {pkg.tierLabel}
                </span>
              )}

              <h3 className="font-display text-2xl sm:text-3xl text-[#434E3D] uppercase mt-1 leading-tight">
                {pkg.name}
              </h3>

              <p className="font-display text-4xl text-[#222620] mt-3 tabular-nums">
                {pkg.price}{' '}
                <span className="text-xs font-sans font-semibold text-[#222620]/70">
                  {pkg.unit}
                </span>
              </p>

              <ul className="mt-6 space-y-3 text-xs sm:text-[13px] text-[#222620]/85 font-medium">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className="w-4 h-4 text-[#434E3D] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onSelectPackage(pkg)}
              className="zine-btn-primary mt-8 w-full py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider whitespace-nowrap cursor-pointer"
            >
              {pkg.ctaLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
