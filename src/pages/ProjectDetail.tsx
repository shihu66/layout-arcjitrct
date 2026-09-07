import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Maximize2, 
  Calendar, 
  Banknote, 
  ArrowLeft, 
  ArrowRight,
  ChevronRight, 
  Share2, 
  PhoneCall,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/companyData';
import PageHeader from '../components/PageHeader';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const projectIndex = FEATURED_PROJECTS.findIndex((p) => p.slug === slug);
  const project = FEATURED_PROJECTS[projectIndex] || FEATURED_PROJECTS[0];

  const nextProject = FEATURED_PROJECTS[(projectIndex + 1) % FEATURED_PROJECTS.length];
  const prevProject = FEATURED_PROJECTS[(projectIndex - 1 + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold font-serif-display">Project Not Found</h2>
        <Link to="/projects" className="mt-4 inline-block text-[#E31E24] hover:underline">
          Return to Projects Gallery
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: `Explore ${project.title} by Layout Architect Khulna`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Project link copied to clipboard!');
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Top Breadcrumb & Metadata Header (exact match to video frame 00:04) */}
      <section className="bg-[#0D0D0D] text-white pt-12 pb-14 border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-25 pointer-events-none" />
        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#E31E24]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <Link to="/projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <span className="text-[#E31E24] truncate max-w-xs">{project.shortTitle || project.title}</span>
          </nav>

          {/* Location pill */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 mb-3">
            <MapPin className="w-4 h-4 text-[#E31E24]" />
            <span className="capitalize tracking-wide">{project.location}</span>
          </div>

          {/* Large Project Title */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-display font-medium text-white tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
                {project.desc}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-white transition-colors border border-zinc-700"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#E31E24] hover:bg-[#c9181d] text-xs font-semibold text-white tracking-wider uppercase transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Inquire</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Column Project Metrics Bar (exact match to video frame 00:04) */}
      <section className="bg-white border-b border-zinc-200 shadow-sm sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200">
            {/* Status */}
            <div className="pt-2 sm:pt-0 sm:px-4 first:pl-0 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  Status
                </span>
                <span className="text-sm font-semibold text-zinc-900">
                  {project.status}
                </span>
              </div>
            </div>

            {/* Project Type */}
            <div className="pt-2 sm:pt-0 sm:px-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-700 flex items-center justify-center shrink-0 border border-zinc-200">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  Project Type
                </span>
                <span className="text-sm font-semibold text-zinc-900 truncate max-w-[140px] block">
                  {project.type}
                </span>
              </div>
            </div>

            {/* Project Area */}
            <div className="pt-2 sm:pt-0 sm:px-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-700 flex items-center justify-center shrink-0 border border-zinc-200">
                <Maximize2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  Project Area
                </span>
                <span className="text-sm font-semibold text-zinc-900">
                  {project.area}
                </span>
              </div>
            </div>

            {/* Commencement Date */}
            <div className="pt-2 sm:pt-0 sm:px-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-700 flex items-center justify-center shrink-0 border border-zinc-200">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  Commencement Date
                </span>
                <span className="text-sm font-semibold text-zinc-900">
                  {project.commencementDate}
                </span>
              </div>
            </div>

            {/* Price Range */}
            <div className="pt-2 sm:pt-0 sm:px-4 last:pr-0 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                <Banknote className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  Price Range
                </span>
                <span className="text-sm font-semibold text-zinc-900">
                  {project.priceRange}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Visuals & Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Primary Hero Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 border border-zinc-200">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-[400px] sm:h-[550px] lg:h-[650px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
            <span className="text-xs font-mono tracking-widest uppercase bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
              Primary Elevation / Perspective
            </span>
            <span className="text-xs font-mono text-zinc-300">
              Layout Architect Khulna Archive
            </span>
          </div>
        </div>

        {/* Narrative & Specifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 mb-16">
          {/* Left 2 Cols: Architectural Narrative & Highlights */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
              <h2 className="text-2xl font-serif-display font-medium text-[#0D0D0D] mb-4">
                Architectural Concept &amp; Engineering Execution
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed mb-6">
                {project.desc} Designed and executed under rigorous adherence to Bangladesh National Building Code (BNBC), local municipal zoning guidelines, and sustainable architectural ventilation principles.
              </p>

              <h3 className="text-sm font-mono uppercase tracking-widest text-[#E31E24] mb-4 font-semibold">
                Key Architectural Highlights &amp; Scope
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs sm:text-sm text-zinc-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[#E31E24] text-xs font-mono font-semibold uppercase tracking-widest">
                    Monograph Gallery
                  </span>
                  <h3 className="text-2xl font-serif-display font-medium text-[#0D0D0D]">
                    Interior Views &amp; Perspective Angles
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  {project.gallery.length} Plates
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm"
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} angle ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-white">
                      Plate 0{idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Col: Consultation & Firm Credentials Box */}
          <div className="space-y-6">
            {/* Consultation Card */}
            <div className="bg-[#0D0D0D] text-white p-7 rounded-2xl border border-zinc-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E31E24]/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-mono text-[#E31E24] uppercase tracking-widest font-semibold block mb-2">
                Project Consultation
              </span>
              <h3 className="text-2xl font-serif-display font-medium text-white mb-3">
                Plan a Similar Project in Khulna
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                Connect directly with our Chief Architect and Structural Engineer for preliminary site evaluation, budgeting, and KDA sanction timelines.
              </p>

              <div className="space-y-3 mb-6 font-mono text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E31E24]" />
                  <span>KDA Approval Coordination Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#E31E24]" />
                  <span>BNBC Structural Certification</span>
                </div>
              </div>

              <Link
                to={`/contact?subject=${encodeURIComponent(`Inquiry for ${project.title}`)}`}
                className="w-full block text-center py-3.5 px-4 bg-[#E31E24] hover:bg-[#c9181d] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95"
              >
                Book Engineering Consultation
              </Link>
              
              <a
                href="tel:+8801711433089"
                className="w-full block text-center mt-3 py-3 px-4 bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 text-xs font-mono rounded-xl transition-colors border border-zinc-700"
              >
                Hotline: +880 1711-433089
              </a>
            </div>

            {/* Quick Specs summary */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-3.5 text-xs font-mono">
              <div className="flex justify-between border-b border-zinc-100 pb-2">
                <span className="text-zinc-500">PROJECT ID</span>
                <span className="font-semibold text-zinc-900">{project.id.toUpperCase()}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 pb-2">
                <span className="text-zinc-500">LOCATION</span>
                <span className="font-semibold text-zinc-900">{project.location}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 pb-2">
                <span className="text-zinc-500">ESTIMATED RANGE</span>
                <span className="font-semibold text-zinc-900">{project.priceRange}</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-zinc-500">REGULATORY STATUS</span>
                <span className="font-semibold text-emerald-600">Vetted &amp; Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Next / Previous Project Pagination Bar */}
        <div className="border-t border-zinc-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-zinc-600 hover:text-[#0D0D0D] transition-colors p-3 rounded-xl hover:bg-zinc-100"
          >
            <ArrowLeft className="w-4 h-4 text-[#E31E24]" />
            <div>
              <span className="text-[10px] text-zinc-400 block">Previous Monograph</span>
              <span className="font-serif-display font-medium text-sm text-zinc-900">{prevProject.shortTitle || prevProject.title}</span>
            </div>
          </Link>

          <Link
            to="/projects"
            className="px-5 py-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-mono font-medium transition-colors"
          >
            All Projects Portfolio
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="flex items-center gap-3 text-right text-xs font-mono uppercase tracking-wider text-zinc-600 hover:text-[#0D0D0D] transition-colors p-3 rounded-xl hover:bg-zinc-100"
          >
            <div>
              <span className="text-[10px] text-zinc-400 block">Next Monograph</span>
              <span className="font-serif-display font-medium text-sm text-zinc-900">{nextProject.shortTitle || nextProject.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#E31E24]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
