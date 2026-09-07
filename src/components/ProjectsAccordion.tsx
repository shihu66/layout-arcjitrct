import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowUpRight, ArrowRight } from 'lucide-react';
import { FEATURED_PROJECTS, Project } from '../data/companyData';

interface ProjectsAccordionProps {
  initialActiveId?: string;
  className?: string;
  showViewAllButton?: boolean;
}

export default function ProjectsAccordion({
  initialActiveId = FEATURED_PROJECTS[0]?.id || 'proj-1',
  className = '',
  showViewAllButton = true,
}: ProjectsAccordionProps) {
  const [activeId, setActiveId] = useState<string>(initialActiveId);
  const projects: Project[] = FEATURED_PROJECTS;

  return (
    <section className={`bg-[#0E1411] text-white py-16 sm:py-24 relative overflow-hidden ${className}`}>
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-white tracking-tight">
              Projects we have completed
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-xl font-sans">
              Explore our curated portfolio of residential villas, healthcare complexes, luxury apartments, and commercial interiors.
            </p>
          </div>
          
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
            <span>5 SELECTED MONOGRAPHS</span>
          </div>
        </div>

        {/* Expandable Sliding Accordion */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 h-[620px] md:h-[500px] lg:h-[560px] w-full">
          {projects.map((project) => {
            const isActive = activeId === project.id;

            return (
              <motion.div
                key={project.id}
                layout
                transition={{
                  type: 'spring',
                  stiffness: 240,
                  damping: 26,
                  mass: 0.85,
                }}
                className={`relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer select-none transition-shadow ${
                  isActive
                    ? 'flex-[3.8] shadow-2xl ring-1 ring-white/20'
                    : 'flex-[0.9] hover:flex-[1.1] ring-1 ring-white/5 opacity-85 hover:opacity-100'
                }`}
                onMouseEnter={() => setActiveId(project.id)}
                onClick={() => setActiveId(project.id)}
              >
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                    isActive
                      ? 'scale-105 brightness-90 filter-none'
                      : 'scale-100 brightness-[0.45] saturate-75 hover:brightness-[0.6]'
                  }`}
                />

                {/* Overlays */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? 'bg-gradient-to-t from-black/90 via-black/35 to-black/20'
                      : 'bg-black/30'
                  }`}
                />

                {/* EXPANDED CONTENT VIEW */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key={`active-${project.id}`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white z-20 pointer-events-auto"
                    >
                      {/* Location Tag */}
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-300 font-sans mb-3">
                        <MapPin className="w-4 h-4 text-white/90 shrink-0" />
                        <span className="font-normal tracking-wide drop-shadow-sm">
                          {project.location}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-bold text-white tracking-tight leading-snug mb-5 max-w-2xl drop-shadow-md">
                        {project.title}
                      </h3>

                      {/* Explore Project CTA Pill Button */}
                      <div>
                        <Link
                          to={`/projects/${project.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white hover:bg-zinc-100 text-[#0D0D0D] rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-xl group hover:scale-[1.03] active:scale-[0.98]"
                        >
                          <span>Explore Project</span>
                          <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* COLLAPSED VIEW: VERTICAL TITLE TEXT (As seen in the video) */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      key={`collapsed-${project.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 flex items-end justify-center pb-6 sm:pb-8 pointer-events-none z-10"
                    >
                      <div className="px-2 py-3 flex items-center justify-center">
                        <span
                          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                          className="text-white/95 text-sm sm:text-base lg:text-lg font-serif-display font-medium tracking-wide whitespace-nowrap drop-shadow select-none block"
                        >
                          {project.shortTitle || project.title}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects Pill Button */}
        {showViewAllButton && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <Link
              id="view-all-projects-pill"
              to="/projects"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white hover:bg-zinc-100 text-[#0D0D0D] rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
            >
              <span>View All Projects</span>
              <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
