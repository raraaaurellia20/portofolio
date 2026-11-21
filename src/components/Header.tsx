import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Focus', href: '#niches' },
  { label: 'Projects', href: '#results' },
  { label: 'Services', href: '#packages' },
  { label: 'Reviews', href: '#testimonials' },
];

export function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#8C9A84]/95 backdrop-blur-md border-b border-[#434E3D]/25">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EFECE6]"
        >
          <span className="w-8 h-8 rounded bg-[#434E3D] text-[#EFECE6] flex items-center justify-center font-display text-base tracking-wider group-hover:bg-[#EFECE6] group-hover:text-[#434E3D] transition-colors">
            AA
          </span>
          <span className="font-display tracking-tight text-xl text-[#EFECE6]">
            AZZAHRA.DEV
          </span>
        </a>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-xs font-bold tracking-widest text-[#EFECE6] uppercase"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#434E3D] hover:text-[#434E3D] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EFECE6]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenBooking}
            className="zine-btn-primary px-4 py-2 rounded text-xs font-bold tracking-wider uppercase whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EFECE6]"
          >
            Book a Call
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden w-10 h-10 rounded bg-[#EFECE6] border-2 border-[#434E3D] text-[#434E3D] flex items-center justify-center cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#EFECE6] border-t-2 border-[#434E3D] px-6 py-4 flex flex-col gap-3"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold tracking-wider uppercase text-[#434E3D] py-1.5 border-b border-[#B2BEAB]/60 last:border-none"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold tracking-wider uppercase text-[#434E3D] py-1.5"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
