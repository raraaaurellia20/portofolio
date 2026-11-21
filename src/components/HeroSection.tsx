import { ArrowUpRight, Calendar } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';
import { ZineImage } from './ZineImage';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section id="hero" className="relative pt-4 sm:pt-8 pb-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Postage Stamp Portrait Frame (Left Column) */}
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
          <div className="relative group">
            <div className="postage-frame p-3 sm:p-4 rounded-md -rotate-1 group-hover:rotate-0 transition-transform duration-300">
              <div className="overflow-hidden rounded-sm border border-[#B2BEAB]/35 aspect-[4/5] w-[260px] sm:w-[320px] bg-[#434E3D]">
                <ZineImage
                  src={HERO_DATA.portraitUrl}
                  alt={HERO_DATA.portraitAlt}
                  fallbackLabel="Azzahra Aurellia Portrait"
                  className="w-full h-full object-cover bg-[#d29696] grayscale contrast-125 brightness-95 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-1 text-[#EFECE6]/80 text-[11px] font-mono tracking-widest uppercase">
                <span>{HERO_DATA.stampMetaLeft}</span>
                <span>{HERO_DATA.stampMetaRight}</span>
              </div>
            </div>

            {/* Washi Tape Accent */}
            <div className="washi-tape absolute -top-4 -right-3 px-4 py-1 font-hand text-[#222620] font-bold text-lg rotate-6">
              {HERO_DATA.tapeNote}
            </div>
          </div>
        </div>

        {/* Hero Headline & Value Pitch (Right Column) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-1 lg:order-2">
          <p className="text-[#263221] font-bold text-xs tracking-widest uppercase mb-3">
            {HERO_DATA.kicker}
          </p>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[7.25rem] font-display text-[#EFECE6] leading-[0.9] tracking-tight uppercase drop-shadow-sm [text-wrap:balance]">
            {HERO_DATA.headlineTop}
            <br />
            {HERO_DATA.headlineBottom}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#F9F8F5]/95 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {HERO_DATA.pitch}
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center lg:justify-start">
            <a
              href="#results"
              className="zine-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap shrink-0"
            >
              <span>View My Work</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={onOpenBooking}
              className="zine-btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Book a Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
