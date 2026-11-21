import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, Mail, X } from 'lucide-react';
import { CONTACT_INFO, SERVICE_PACKAGES, ServicePackage } from '../data/portfolioData';

interface BookingModalProps {
  isOpen: boolean;
  selectedPackage: ServicePackage | null;
  initialSubject?: string;
  onClose: () => void;
}

export function BookingModal({
  isOpen,
  selectedPackage,
  initialSubject,
  onClose,
}: BookingModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [packageId, setPackageId] = useState<string>(
    selectedPackage?.id || SERVICE_PACKAGES[1].id
  );
  const [timeline, setTimeline] = useState('Within 2 weeks');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedPackage) {
      setPackageId(selectedPackage.id);
    }
  }, [selectedPackage]);

  useEffect(() => {
    if (initialSubject) {
      setNotes(`Interested in a build similar to: ${initialSubject}\n`);
    }
  }, [initialSubject]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const chosenPkg = SERVICE_PACKAGES.find((p) => p.id === packageId) || SERVICE_PACKAGES[1];

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter your name and a valid email address.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setErrorMessage('');
    onClose();
  };

  const mailtoHref = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
    `[${chosenPkg.name}] Project Inquiry from ${name || 'Client'}`
  )}&body=${encodeURIComponent(
    `Hi Azzahra,\n\nName: ${name}\nPackage: ${chosenPkg.name} (${chosenPkg.price}${chosenPkg.unit})\nTimeline: ${timeline}\n\nProject Brief:\n${notes}`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#222620]/70 backdrop-blur-xs"
      onClick={handleResetAndClose}
    >
      <div
        className="bg-[#EFECE6] border-2 border-[#434E3D] rounded-xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-[0_8px_0_#434E3D,0_24px_48px_rgba(0,0,0,0.35)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="striped-header h-4 border-b-2 border-[#434E3D]/35" />

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <span className="inline-block bg-[#434E3D] text-[#EFECE6] text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm mb-2">
                Collaboration Brief
              </span>
              <h2
                id="booking-modal-title"
                className="font-display text-3xl sm:text-4xl text-[#434E3D] uppercase tracking-tight leading-none"
              >
                BOOK A CALL / INQUIRE
              </h2>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              aria-label="Close booking dialog"
              className="w-9 h-9 rounded-md bg-[#F9F8F5] border-2 border-[#434E3D] text-[#434E3D] hover:bg-[#434E3D] hover:text-[#EFECE6] flex items-center justify-center shrink-0 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="bg-[#F9F8F5] border-2 border-[#434E3D] rounded-lg p-6 space-y-5">
              <div className="flex items-center gap-3 text-[#434E3D]">
                <CheckCircle2 className="w-7 h-7 shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-2xl uppercase leading-none">
                    Brief Ticket Prepared
                  </h3>
                  <p className="text-xs font-mono text-[#222620]/70 mt-1">
                    Ready for {chosenPkg.name} ({chosenPkg.price} {chosenPkg.unit})
                  </p>
                </div>
              </div>

              <div className="ticket-divider pt-4 text-xs sm:text-sm text-[#222620] space-y-2">
                <p>
                  <strong className="font-mono uppercase text-[11px] text-[#434E3D] mr-2">
                    From:
                  </strong>
                  {name} ({email})
                </p>
                <p>
                  <strong className="font-mono uppercase text-[11px] text-[#434E3D] mr-2">
                    Timeline:
                  </strong>
                  {timeline}
                </p>
                {notes && (
                  <p className="bg-[#EFECE6] p-3 rounded border border-[#434E3D]/25 text-xs leading-relaxed">
                    {notes}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={mailtoHref}
                  className="zine-btn-primary flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-xs font-bold uppercase tracking-wider"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Open in Email App</span>
                </a>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="zine-btn-secondary py-2.5 px-4 rounded-md text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div
                  role="alert"
                  className="bg-[#ffdad6] border border-[#93000a] text-[#93000a] text-xs font-semibold px-3.5 py-2.5 rounded"
                >
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="inquiry-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#434E3D] mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Raka Mahendra"
                    className="w-full bg-[#F9F8F5] border-[1.5px] border-[#434E3D] rounded px-3 py-2.5 text-sm text-[#222620] placeholder:text-[#222620]/40 focus:outline-none focus:ring-3 focus:ring-[#B2BEAB]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#434E3D] mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-[#F9F8F5] border-[1.5px] border-[#434E3D] rounded px-3 py-2.5 text-sm text-[#222620] placeholder:text-[#222620]/40 focus:outline-none focus:ring-3 focus:ring-[#B2BEAB]"
                  />
                </div>
              </div>

              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#434E3D] mb-1.5">
                  Collaboration Tier
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {SERVICE_PACKAGES.map((pkg) => {
                    const isSelected = packageId === pkg.id;
                    return (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setPackageId(pkg.id)}
                        className={`p-3 rounded text-left border-2 transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#434E3D] text-[#EFECE6] border-[#222620]'
                            : 'bg-[#F9F8F5] text-[#434E3D] border-[#434E3D]/35 hover:border-[#434E3D]'
                        }`}
                      >
                        <span className="block font-display text-sm uppercase leading-tight">
                          {pkg.name}
                        </span>
                        <span
                          className={`block font-mono text-xs mt-1 tabular-nums ${
                            isSelected ? 'text-[#B2BEAB]' : 'text-[#222620]/70'
                          }`}
                        >
                          {pkg.price} {pkg.unit}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="inquiry-timeline"
                  className="block text-xs font-bold uppercase tracking-wider text-[#434E3D] mb-1.5"
                >
                  Target Timeline
                </label>
                <select
                  id="inquiry-timeline"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-[#F9F8F5] border-[1.5px] border-[#434E3D] rounded px-3 py-2.5 text-sm text-[#222620] focus:outline-none focus:ring-3 focus:ring-[#B2BEAB]"
                >
                  <option value="Immediately (This Week)">Immediately (This Week)</option>
                  <option value="Within 2 weeks">Within 2 weeks</option>
                  <option value="Next Month">Next Month</option>
                  <option value="Internship / Long-term">Internship / Long-term</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="inquiry-notes"
                  className="block text-xs font-bold uppercase tracking-wider text-[#434E3D] mb-1.5"
                >
                  Project Goals or Questions
                </label>
                <textarea
                  id="inquiry-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share your scope, product link, or preferred call times..."
                  className="w-full bg-[#F9F8F5] border-[1.5px] border-[#434E3D] rounded px-3 py-2.5 text-sm text-[#222620] placeholder:text-[#222620]/40 focus:outline-none focus:ring-3 focus:ring-[#B2BEAB]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="zine-btn-secondary px-4 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="zine-btn-primary px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Generate Inquiry Ticket
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
