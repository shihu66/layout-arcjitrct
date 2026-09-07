import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ProjectsAccordion from '../components/ProjectsAccordion';
import { FEATURED_PROJECTS } from '../data/companyData';

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Residential', 'Commercial', 'Healthcare', 'Interior'];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Residential') return p.type.toLowerCase().includes('residential') || p.type.toLowerCase().includes('villa') || p.type.toLowerCase().includes('apartment');
    if (selectedFilter === 'Commercial') return p.type.toLowerCase().includes('commercial') || p.type.toLowerCase().includes('showroom');
    if (selectedFilter === 'Healthcare') return p.type.toLowerCase().includes('healthcare') || p.type.toLowerCase().includes('hospital');
    if (selectedFilter === 'Interior') return p.type.toLowerCase().includes('interior');
    return true;
  });

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <PageHeader
        pageName="Projects"
        badge="Architectural Monograph"
        title="Completed Projects Portfolio"
        subtitle="Explore our executed residential, healthcare, and commercial architecture projects across Khulna and Bangladesh."
      />

      {/* Featured Expandable Accordion Transition Section */}
      <ProjectsAccordion
        initialActiveId="proj-1"
        showViewAllButton={false}
        className="border-b border-zinc-800"
      />

      {/* Filterable Catalog Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-zinc-200">
          <div>
            <span className="text-[#E31E24] text-xs font-mono font-semibold uppercase tracking-widest block mb-1">
              Archival Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-[#0D0D0D]">
              All Architectural &amp; Interior Works
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  selectedFilter === cat
                    ? 'bg-[#0D0D0D] text-white shadow-md'
                    : 'bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Preview */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-white flex items-center gap-1.5 border border-white/10">
                  <MapPin className="w-3 h-3 text-[#E31E24]" />
                  <span>{project.location}</span>
                </div>
                <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold text-white flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{project.status}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#E31E24] uppercase tracking-wider block mb-1">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-serif-display font-bold text-[#0D0D0D] group-hover:text-[#E31E24] transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-600 mt-2 line-clamp-2 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500">{project.area}</span>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-[#0D0D0D] group-hover:text-[#E31E24] transition-colors"
                  >
                    <span>View Monograph</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
