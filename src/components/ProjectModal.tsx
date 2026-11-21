import { useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ZineImage } from './ZineImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireSimilar: (projectTitle: string) => void;
}

export function ProjectModal({ project, onClose, onInquireSimilar }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#222620]/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-[#EFECE6] border-2 border-[#434E3D] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_8px_0_#434E3D,0_24px_48px_rgba(0,0,0,0.35)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Striped Header */}
        <div className="striped-header h-4 border-b-2 border-[#434E3D]/35 sticky top-0 z-20" />

        <div className="p-6 sm:p-8 space-y-6">
          {/* Header Row */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase text-[#434E3D] font-bold">
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
                <span aria-hidden="true">·</span>
                <span>{project.role}</span>
              </div>
              <h2
                id="project-modal-title"
                className="font-display text-3xl sm:text-4xl text-[#434E3D] uppercase tracking-tight mt-1.5"
              >
                {project.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="w-9 h-9 rounded-md bg-[#F9F8F5] border-2 border-[#434E3D] text-[#434E3D] hover:bg-[#434E3D] hover:text-[#EFECE6] flex items-center justify-center shrink-0 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Visual Preview */}
          <div className="bg-[#F9F8F5] p-3 rounded-lg border-2 border-[#434E3D]/35">
            <div className="overflow-hidden rounded-sm aspect-[16/9] bg-[#B2BEAB]/40">
              <ZineImage
                src={project.imageUrl}
                alt={project.imageAlt}
                fallbackLabel={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#434E3D] font-bold">
              <div className="flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="bg-[#EFECE6] border border-[#434E3D]/30 px-2.5 py-1 rounded-sm tabular-nums"
                  >
                    {metric}
                  </span>
                ))}
              </div>
              <span className="text-[#222620]/70 uppercase">Case Study Sheet</span>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#F9F8F5] p-5 rounded-lg border border-[#434E3D]/30">
              <h3 className="font-display text-lg text-[#434E3D] uppercase tracking-wide mb-2">
                The Challenge
              </h3>
              <p className="text-xs sm:text-sm text-[#222620]/85 leading-relaxed font-medium">
                {project.challenge}
              </p>
            </div>
            <div className="bg-[#F9F8F5] p-5 rounded-lg border border-[#434E3D]/30">
              <h3 className="font-display text-lg text-[#434E3D] uppercase tracking-wide mb-2">
                Engineering Solution
              </h3>
              <p className="text-xs sm:text-sm text-[#222620]/85 leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables & Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
            <div className="md:col-span-7">
              <h3 className="font-display text-lg text-[#434E3D] uppercase tracking-wide mb-2.5">
                Key Deliverables
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#222620] font-medium">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#434E3D] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-5">
              <h3 className="font-display text-lg text-[#434E3D] uppercase tracking-wide mb-2.5">
                Stack Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs font-bold text-[#434E3D] bg-[#F9F8F5] border border-[#434E3D]/40 px-2.5 py-1 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="pt-5 border-t-2 border-dashed border-[#434E3D]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-hand text-xl text-[#434E3D] font-bold">
              Need something similar for your team or campus?
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="zine-btn-secondary flex-1 sm:flex-initial px-4 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => onInquireSimilar(project.title)}
                className="zine-btn-primary flex-1 sm:flex-initial px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap"
              >
                Inquire About Similar Build
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
