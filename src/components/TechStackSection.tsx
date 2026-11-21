import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, ProjectItem, TECH_STACK, TechStackItem } from '../data/portfolioData';

interface TechStackSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function TechStackSection({ onSelectProject }: TechStackSectionProps) {
  const [selectedStack, setSelectedStack] = useState<TechStackItem>(TECH_STACK[0]);

  const relatedProjects = PROJECTS.filter((project) =>
    selectedStack.relatedProjectIds.includes(project.id)
  );

  return (
    <section className="scroll-mt-24">
      <div className="bg-[#EFECE6] rounded-xl p-6 sm:p-8 border-2 border-[#434E3D] shadow-[0_4px_0_rgba(67,78,61,0.2)]">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 border-b-2 border-[#434E3D]/20 pb-4">
          <h2 className="text-3xl sm:text-4xl font-display text-[#434E3D] uppercase tracking-tight">
            CORE TECH STACK &amp; TOOLS
          </h2>
          <span className="font-hand text-xl sm:text-2xl text-[#434E3D] font-bold">
            Tested in Production &amp; Classrooms
          </span>
        </div>

        {/* Interactive Sticky Note Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {TECH_STACK.map((item) => {
            const isSelected = selectedStack.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedStack(item)}
                aria-pressed={isSelected}
                className={`p-3.5 rounded-md text-center transition-all cursor-pointer border-2 ${
                  isSelected
                    ? 'bg-[#434E3D] text-[#EFECE6] border-[#222620] shadow-[0_3px_0_#222620] -translate-y-0.5'
                    : 'bg-[#F9F8F5] text-[#434E3D] border-[#434E3D]/30 hover:border-[#434E3D] shadow-sm'
                }`}
              >
                <span className="block font-mono text-xs font-bold leading-snug">
                  {item.name}
                </span>
                <span
                  className={`block text-[11px] mt-1 font-medium ${
                    isSelected ? 'text-[#B2BEAB]' : 'text-[#222620]/70'
                  }`}
                >
                  {item.role}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Stack Detail Strip */}
        <div className="mt-5 pt-4 border-t border-dashed border-[#434E3D]/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-[#222620]">
            <span className="font-mono font-bold text-[#434E3D] uppercase mr-2">
              {selectedStack.name}:
            </span>
            <span className="font-medium text-[#222620]/85">{selectedStack.usageNote}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <span className="text-[11px] font-mono uppercase text-[#222620]/65">
              Used in:
            </span>
            {relatedProjects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => onSelectProject(project)}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#434E3D] bg-[#F9F8F5] hover:bg-[#434E3D] hover:text-[#EFECE6] border border-[#434E3D]/50 px-2.5 py-1 rounded-sm transition-colors cursor-pointer"
              >
                <span>{project.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
