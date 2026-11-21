import { Code2, Cloud, PenTool, Video } from 'lucide-react';
import { FOCUS_NICHES, VALUE_PROPS } from '../data/portfolioData';
import { ZineImage } from './ZineImage';

function renderNicheIcon(iconName: 'code' | 'cloud' | 'design' | 'video') {
  const iconProps = { className: 'w-6 h-6 text-[#434E3D]', 'aria-hidden': true as const };
  switch (iconName) {
    case 'code':
      return <Code2 {...iconProps} />;
    case 'cloud':
      return <Cloud {...iconProps} />;
    case 'design':
      return <PenTool {...iconProps} />;
    case 'video':
      return <Video {...iconProps} />;
  }
}

export function FocusAndValuesSection() {
  return (
    <>
      {/* Focus Areas */}
      <section id="niches" className="scroll-mt-24">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-display text-[#EFECE6] uppercase tracking-tight">
            FOCUS AREAS
          </h2>
          <p className="font-hand text-2xl text-[#F9F8F5]/95 mt-1">
            ✦ What I specialize in &amp; ship consistently ✦
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FOCUS_NICHES.map((niche) => (
            <div
              key={niche.id}
              className="bg-[#F9F8F5] p-6 rounded-lg border-2 border-[#434E3D] shadow-[0_3px_0_rgba(67,78,61,0.22)] text-center flex flex-col items-center justify-between hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-md bg-[#EFECE6] border-2 border-[#434E3D]/30 flex items-center justify-center mb-4">
                  {renderNicheIcon(niche.iconName)}
                </div>
                <h3 className="font-display text-xl text-[#434E3D] uppercase tracking-wide leading-tight">
                  {niche.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#222620]/80 mt-2.5 font-medium leading-relaxed">
                  {niche.description}
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-[#B2BEAB]/60 w-full text-[11px] uppercase font-mono tracking-widest text-[#434E3D]/80 font-bold">
                {niche.stackLabel}
              </span>
            </div>
          ))}
        </div>

        {/* Ticker Tape Strip */}
        <div className="bg-[#434E3D] text-[#EFECE6] mt-10 py-3 px-4 rounded-md border-2 border-[#222620]/20 overflow-x-auto text-center whitespace-nowrap shadow-inner">
          <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase">
            UGC · CODE · TECH DOCS · REELS · DEV ADVOCACY · WEB APPS · SYSTEMS DESIGN · IT PLN
          </span>
        </div>
      </section>

      {/* Why Work With Me? */}
      <section className="scroll-mt-24">
        <div className="bg-[#434E3D] text-[#EFECE6] p-7 sm:p-12 rounded-xl border-2 border-[#222620]/30 shadow-2xl relative">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-display uppercase tracking-tight">
              WHY WORK WITH ME?
            </h2>
            <p className="font-hand text-2xl text-[#B2BEAB] mt-1">
              Bridging technical precision with creative visual storytelling
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {VALUE_PROPS.map((prop) => (
              <div
                key={prop.id}
                className="bg-[#8C9A84]/20 border border-[#B2BEAB]/30 p-5 rounded-lg text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[#EFECE6]/50 shrink-0 bg-[#222620]/20">
                  <ZineImage
                    src={prop.imageUrl}
                    alt={prop.imageAlt}
                    fallbackLabel={prop.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-lg tracking-wide uppercase text-[#EFECE6] leading-snug">
                  {prop.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#EFECE6]/85 mt-2.5 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
