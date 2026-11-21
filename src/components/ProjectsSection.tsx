import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ZineImage } from './ZineImage';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES = ['All', 'Full-Stack App', 'Platform & Docs', 'Web App / PWA'] as const;

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="results" className="scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-4xl sm:text-5xl font-display text-[#EFECE6] uppercase tracking-tight">
            RESULTS &amp; WORKS
          </h2>
          <p className="font-hand text-2xl text-[#F9F8F5]/95 mt-1">
            Curated showcase of high-impact platforms &amp; campaigns
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Interactive Category Filter Buttons */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#434E3D] rounded-md border border-[#222620]/30"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#EFECE6] text-[#434E3D]'
                      : 'text-[#EFECE6]/80 hover:text-[#EFECE6] hover:bg-[#8C9A84]/25'
                  }`}
                >
                  {category === 'All' ? 'All Works' : category}
                </button>
              );
            })}
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-[#434E3D] bg-[#EFECE6] border border-[#434E3D] px-3.5 py-2 rounded-md font-bold whitespace-nowrap shrink-0">
            2024 — 2026 Archive
          </span>
        </div>
      </div>

      {/* Polaroid Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="polaroid-card p-4 sm:p-5 rounded-lg flex flex-col justify-between"
          >
            <div>
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="block w-full text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#434E3D]"
                aria-label={`Inspect case study for ${project.title}`}
              >
                <div className="relative overflow-hidden rounded-sm aspect-[16/10] bg-[#B2BEAB]/40 mb-4 border border-[#434E3D]/30">
                  <ZineImage
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fallbackLabel={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-[#434E3D] text-[#EFECE6] text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-2xl text-[#434E3D] uppercase tracking-tight leading-tight group-hover:underline">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-[#434E3D] shrink-0 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </div>
              </button>

              <p className="text-xs sm:text-[13px] text-[#222620]/85 mt-2 font-medium leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#434E3D]/20 flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-[#434E3D] tabular-nums">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="bg-[#B2BEAB]/35 border border-[#434E3D]/20 px-2.5 py-1 rounded-sm whitespace-nowrap"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="w-full py-2 px-3 rounded-sm bg-[#EFECE6] hover:bg-[#434E3D] text-[#434E3D] hover:text-[#EFECE6] border border-[#434E3D] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Inspect Case Study
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
