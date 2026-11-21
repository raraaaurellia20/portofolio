import { ABOUT_DATA } from '../data/portfolioData';
import { ZineImage } from './ZineImage';

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="bg-[#EFECE6] rounded-xl p-6 sm:p-10 shadow-[0_4px_0_rgba(67,78,61,0.22),0_16px_32px_-8px_rgba(34,38,32,0.18)] border-2 border-[#434E3D] relative overflow-hidden">
        {/* Top Striped Awning Edge */}
        <div className="striped-header h-4 -mx-6 sm:-mx-10 -mt-6 sm:-mt-10 mb-8 border-b-2 border-[#434E3D]/35" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Editorial Text Card (Left) */}
          <div className="md:col-span-7 space-y-4">
            <div className="inline-block bg-[#434E3D] text-[#EFECE6] text-xs font-bold tracking-widest px-3 py-1 uppercase rounded-sm">
              {ABOUT_DATA.badge}
            </div>

            <h2 className="text-4xl sm:text-5xl font-display text-[#434E3D] tracking-tight uppercase leading-none">
              {ABOUT_DATA.title}
            </h2>

            {ABOUT_DATA.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[#222620] leading-relaxed text-sm sm:text-base font-medium"
              >
                {paragraph}
              </p>
            ))}

            {/* Clean Unboxed Metadata Tags separated with typographic dividers */}
            <div className="pt-4 border-t border-[#434E3D]/20 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-bold text-[#434E3D] uppercase tracking-wider">
              {ABOUT_DATA.tags.map((tag, idx) => (
                <span key={tag} className="inline-flex items-center gap-3">
                  <span>#{tag}</span>
                  {idx < ABOUT_DATA.tags.length - 1 && (
                    <span aria-hidden="true" className="text-[#8C9A84]">
                      /
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Polaroid Photo with Binder Clip (Right) */}
          <div className="md:col-span-5 flex justify-center pt-4 md:pt-0">
            <div className="polaroid-card p-3.5 pb-6 rounded-md max-w-[285px] w-full relative rotate-2 hover:rotate-0">
              <div className="binder-clip" aria-hidden="true" />
              <div className="overflow-hidden rounded-sm aspect-[4/5] bg-[#B2BEAB] border border-[#434E3D]/20">
                <ZineImage
                  src={ABOUT_DATA.polaroidUrl}
                  alt={ABOUT_DATA.polaroidAlt}
                  fallbackLabel="Azzahra Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center space-y-1">
                <p className="font-hand text-2xl font-bold text-[#434E3D] leading-tight">
                  {ABOUT_DATA.polaroidName}
                </p>
                <p className="text-[11px] font-mono uppercase text-[#222620]/70 tracking-wider">
                  {ABOUT_DATA.polaroidCaption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
