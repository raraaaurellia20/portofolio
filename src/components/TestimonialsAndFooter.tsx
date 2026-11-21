import { useState } from 'react';
import { ArrowUp, Check, Copy, Mail } from 'lucide-react';
import { CONTACT_INFO, TESTIMONIALS } from '../data/portfolioData';
import { ZineImage } from './ZineImage';

interface TestimonialsAndFooterProps {
  onOpenBooking: () => void;
}

export function TestimonialsAndFooter({ onOpenBooking }: TestimonialsAndFooterProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      window.location.href = `mailto:${CONTACT_INFO.email}`;
    }
  };

  return (
    <>
      {/* Testimonials Section */}
      <section id="testimonials" className="scroll-mt-24">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-display text-[#EFECE6] uppercase tracking-tight">
            TESTIMONIALS
          </h2>
          <p className="font-hand text-2xl text-[#F9F8F5]/95 mt-1">
            What peers, project leads &amp; collaborators say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((review) => (
            <article
              key={review.id}
              className="polaroid-card p-5 sm:p-6 rounded-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#434E3D] shrink-0 bg-[#B2BEAB]/40">
                    <ZineImage
                      src={review.avatarUrl}
                      alt={`${review.name} portrait`}
                      fallbackLabel={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm text-[#434E3D] truncate">
                      {review.name}
                    </h3>
                    <p className="text-[11px] text-[#222620]/70 font-mono uppercase leading-snug">
                      {review.role}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-[#222620] leading-relaxed italic">
                  {review.quote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Let's Connect / Footer Section */}
      <section id="contact" className="scroll-mt-24 pt-4">
        <div className="bg-[#EFECE6] rounded-xl p-7 sm:p-12 shadow-[0_4px_0_rgba(67,78,61,0.25),0_16px_32px_-8px_rgba(34,38,32,0.2)] border-2 border-[#434E3D]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Call to Action Left */}
            <div className="md:col-span-7 lg:col-span-8">
              <div className="washi-tape inline-block px-3.5 py-1 text-sm font-hand text-[#434E3D] font-bold mb-3 -rotate-1">
                Open for Internships &amp; Projects ✦
              </div>
              <h2 className="text-5xl sm:text-6xl font-display text-[#434E3D] uppercase tracking-tight leading-[0.95]">
                LET&apos;S CONNECT
              </h2>
              <p className="text-[#222620] text-sm sm:text-base font-medium mt-3 max-w-lg leading-relaxed">
                Ready to create technical solutions and digital content that resonates? Let’s talk
                about your next web project, internship, or speaking session.
              </p>

              <div className="mt-6 flex flex-wrap gap-3.5 items-center">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="zine-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-bold tracking-wider uppercase cursor-pointer whitespace-nowrap"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Send Project Inquiry</span>
                </button>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="zine-btn-secondary inline-flex items-center gap-2 px-5 py-3 rounded-md text-xs font-bold tracking-wider uppercase whitespace-nowrap"
                >
                  <span>Direct Mailto</span>
                </a>
              </div>
            </div>

            {/* Contact Info Card Right */}
            <div className="md:col-span-5 lg:col-span-4 bg-[#F9F8F5] p-6 rounded-lg border-2 border-[#434E3D]/35 text-xs text-[#222620] space-y-4">
              <div>
                <span className="block font-mono uppercase text-[10px] text-[#222620]/65 mb-1">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-bold text-[#434E3D] hover:underline truncate"
                  >
                    {CONTACT_INFO.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-sm bg-[#EFECE6] hover:bg-[#434E3D] hover:text-[#EFECE6] text-[#434E3D] border border-[#434E3D]/40 text-[10px] font-bold uppercase transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <span className="block font-mono uppercase text-[10px] text-[#222620]/65 mb-1">
                  Location
                </span>
                <span className="font-bold">{CONTACT_INFO.location}</span>
              </div>

              <div>
                <span className="block font-mono uppercase text-[10px] text-[#222620]/65 mb-1">
                  Social Profiles
                </span>
                <div className="flex flex-wrap items-center gap-2 font-bold text-[#434E3D]">
                  {CONTACT_INFO.socials.map((social, idx) => (
                    <span key={social.label} className="inline-flex items-center gap-2">
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {social.label}
                      </a>
                      {idx < CONTACT_INFO.socials.length - 1 && (
                        <span aria-hidden="true" className="text-[#8C9A84]">
                          •
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className="mt-10 pt-6 border-t border-[#434E3D]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#222620]/75 gap-4">
            <p>© 2026 Azzahra Aurellia Putri. All rights reserved.</p>
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 font-bold text-[#434E3D] hover:underline uppercase text-[11px] tracking-wider"
            >
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to top</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
