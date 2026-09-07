import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
  BadgeCheck,
  Compass,
  DraftingCompass,
  Sofa,
  Ruler,
  Layers,
  Stamp,
  HardHat,
  ClipboardCheck,
  Clock,
  ArrowUpRight,
  Calculator,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, WHY_CHOOSE_US, FEATURED_PROJECTS } from '../data/companyData';
import ProjectsAccordion from '../components/ProjectsAccordion';

// Service icon helper
const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Compass': return <Compass className="w-5 h-5" />;
    case 'DraftingCompass': return <DraftingCompass className="w-5 h-5" />;
    case 'Sofa': return <Sofa className="w-5 h-5" />;
    case 'Ruler': return <Ruler className="w-5 h-5" />;
    case 'Layers': return <Layers className="w-5 h-5" />;
    case 'Stamp': return <Stamp className="w-5 h-5" />;
    case 'HardHat': return <HardHat className="w-5 h-5" />;
    case 'ClipboardCheck': return <ClipboardCheck className="w-5 h-5" />;
    default: return <Building2 className="w-5 h-5" />;
  }
};

const getWhyIcon = (iconName: string) => {
  switch (iconName) {
    case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#E31E24]" />;
    case 'Building2': return <Building2 className="w-5 h-5 text-[#E31E24]" />;
    case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-[#E31E24]" />;
    default: return <BadgeCheck className="w-5 h-5 text-[#E31E24]" />;
  }
};

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'Residential' | 'Commercial' | 'Interior'>('all');
  
  // Interactive Project Estimator state
  const [plotSize, setPlotSize] = useState<string>('3.5 Katha (approx 2,520 sq.ft)');
  const [buildingType, setBuildingType] = useState<string>('Residential Duplex / Triplex');
  const [needsKDA, setNeedsKDA] = useState<boolean>(true);
  const [needsSoilTest, setNeedsSoilTest] = useState<boolean>(true);
  const [needsStructure, setNeedsStructure] = useState<boolean>(true);
  const [needsConstruction, setNeedsConstruction] = useState<boolean>(false);

  const filteredProjects = selectedFilter === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => {
        if (selectedFilter === 'Residential') return p.type.toLowerCase().includes('residential') || p.type.toLowerCase().includes('duplex');
        if (selectedFilter === 'Commercial') return p.type.toLowerCase().includes('commercial') || p.type.toLowerCase().includes('plaza');
        if (selectedFilter === 'Interior') return p.type.toLowerCase().includes('interior') || p.type.toLowerCase().includes('studio');
        return true;
      });

  return (
    <div className="bg-[#FAFAFA] text-[#0D0D0D] min-h-screen">
      {/* 1. HERO SECTION - Editorial Architectural Studio Style */}
      <section className="relative bg-[#FAFAFA] border-b border-zinc-200 overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
        {/* Subtle architectural grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Studio Location & Ref Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-zinc-200/80 text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#E31E24]"></span>
              <span>22°49&apos; N, 89°33&apos; E — KHULNA, BD</span>
            </div>
            <div className="flex items-center gap-4">
              <span>KDA SANCTION SPECIALISTS</span>
              <span className="text-zinc-300">|</span>
              <span className="text-zinc-800 font-semibold">BNBC 2020 STRUCTURAL RIGOR</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Headline & Story */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-zinc-200 text-xs font-semibold uppercase tracking-wider text-zinc-700 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#E31E24]"></span>
                  <span>Architecture • Engineering • Interiors</span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-display font-medium tracking-tight text-[#0D0D0D] leading-[1.06]">
                  Architecture <br />
                  <span className="italic font-editorial font-normal text-zinc-500">that inspires.</span> <br />
                  <span className="text-[#0D0D0D]">Spaces that last.</span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-600 font-sans max-w-xl leading-relaxed pt-2">
                  Layout Architect delivers integrated spatial and structural mastery in Khulna. 
                  From digital land surveying and soil testing to BNBC structural engineering, 
                  statutory <strong className="text-[#0D0D0D] font-semibold">KDA plan approvals</strong>, and turnkey construction.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  id="hero-call-now-btn"
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0D0D0D] hover:bg-[#E31E24] text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md group"
                >
                  <Phone className="w-4 h-4 text-[#E31E24] group-hover:text-white transition-colors" />
                  <span>Call Direct: {COMPANY_INFO.displayPhone}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </a>

                <Link
                  id="hero-services-btn"
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-zinc-100 text-[#0D0D0D] border border-zinc-300 text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  <span>Explore 8 Services</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600" />
                </Link>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-6 border-t border-zinc-200/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif-display font-bold text-[#E31E24]">100%</div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium mt-0.5">
                    KDA Sanction Record
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif-display font-bold text-[#0D0D0D]">8</div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium mt-0.5">
                    Integrated Disciplines
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif-display font-bold text-[#0D0D0D]">Mon–Sat</div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium mt-0.5">
                    9 AM – 10 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Right Architectural Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative group">
                {/* Architectural frame corner borders */}
                <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-[#E31E24] z-20"></div>
                <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#E31E24] z-20"></div>

                <div className="bg-white border border-zinc-200 p-3 shadow-xl relative overflow-hidden">
                  <div className="aspect-[4/5] sm:aspect-[4/4.5] overflow-hidden relative bg-zinc-900">
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                      alt="Layout Architect Featured Work"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Metadata overlays */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono tracking-wider text-white">
                      <span className="bg-black/70 backdrop-blur-sm px-2.5 py-1 border border-white/10 uppercase">
                        RESIDENTIAL • DUPLEX
                      </span>
                      <span className="bg-[#E31E24] text-white px-2 py-1 font-bold">
                        KDA APPROVED
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-[10px] uppercase font-mono tracking-widest text-[#E31E24] font-semibold">
                        FEATURED KHULNA PROJECT
                      </div>
                      <h3 className="text-xl font-serif-display font-bold text-white mt-0.5">
                        The Vertex Modern Residence
                      </h3>
                      <p className="text-xs text-zinc-300 mt-1 line-clamp-2">
                        Complete spatial blueprint, geotechnical soil analysis, BNBC seismic engineering, and fast-track KDA sanctioning.
                      </p>
                      
                      <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] text-zinc-300">
                        <span>Area: 4,200 sq.ft</span>
                        <Link
                          to="/services"
                          className="text-white hover:text-[#E31E24] font-semibold flex items-center gap-1 transition-colors"
                        >
                          <span>Explore Specs</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 8 SERVICES / DISCIPLINES OVERVIEW */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-0.5 bg-[#E31E24]"></span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#E31E24]">
                  Practice Capabilities
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif-display font-medium text-[#0D0D0D] tracking-tight">
                Our 8 Core Disciplines
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-xl">
                Every project is executed through a cohesive engineering workflow from raw boundary survey to final occupancy certification.
              </p>
            </div>

            <Link
              id="view-all-services-header-btn"
              to="/services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#0D0D0D] hover:text-[#E31E24] transition-colors border-b border-[#0D0D0D] hover:border-[#E31E24] pb-1 self-start md:self-end"
            >
              <span>View In-Depth Deliverables</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 8 Disciplines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="bg-[#FAFAFA] border border-zinc-200 hover:border-[#E31E24] transition-all duration-300 p-6 flex flex-col justify-between group hover:shadow-lg relative"
              >
                {/* Top accent tick */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#E31E24] transition-colors"></div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-white border border-zinc-200 group-hover:bg-[#0D0D0D] text-[#0D0D0D] group-hover:text-white flex items-center justify-center transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xs font-semibold text-zinc-400 group-hover:text-[#E31E24]">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block mb-1">
                    {service.category}
                  </span>

                  <h3 className="text-lg font-serif-display font-bold text-[#0D0D0D] group-hover:text-[#E31E24] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed mb-4 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200/80 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500 font-medium">
                    {service.highlight || 'Standard Service'}
                  </span>
                  <Link
                    to={`/services#${service.id}`}
                    className="w-7 h-7 rounded-full bg-white border border-zinc-200 group-hover:bg-[#E31E24] group-hover:border-[#E31E24] text-zinc-700 group-hover:text-white flex items-center justify-center transition-all duration-200"
                    aria-label={`View details for ${service.title}`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ARCHITECTURAL PLANNING & ESTIMATOR WIDGET */}
      <section className="py-20 bg-[#FAFAFA] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-zinc-200 p-8 sm:p-12 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left explanation */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#E31E24] text-xs font-semibold uppercase tracking-wider">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Khulna Project Planner</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#0D0D0D]">
                  Plan Your Construction &amp; KDA Clearance
                </h2>

                <p className="text-sm text-zinc-600 leading-relaxed">
                  Estimate the required engineering phases for your land plot in Khulna. Our principal architects coordinate all statutory paperwork and technical calculations.
                </p>

                <div className="pt-4 space-y-3 text-xs text-zinc-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Total Station boundary verification eliminates neighbor disputes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Soil borehole SPT reports prevent foundation subsidence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Official KDA plan vetting ensures zero municipal stop-work notices</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E31E24] hover:text-[#C91419]"
                  >
                    <span>Direct Hotline: {COMPANY_INFO.displayPhone}</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right interactive calculator form */}
              <div className="lg:col-span-7 bg-[#FAFAFA] border border-zinc-200 p-6 sm:p-8 space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2 font-semibold">
                    1. Plot Size in Khulna
                  </label>
                  <select
                    value={plotSize}
                    onChange={(e) => setPlotSize(e.target.value)}
                    className="w-full bg-white border border-zinc-300 px-4 py-2.5 text-sm font-sans text-[#0D0D0D] focus:outline-none focus:border-[#E31E24]"
                  >
                    <option value="2.0 Katha (approx 1,440 sq.ft)">2.0 Katha (approx 1,440 sq.ft)</option>
                    <option value="3.5 Katha (approx 2,520 sq.ft)">3.5 Katha (approx 2,520 sq.ft)</option>
                    <option value="5.0 Katha (approx 3,600 sq.ft)">5.0 Katha (approx 3,600 sq.ft)</option>
                    <option value="7.5+ Katha Commercial Plot">7.5+ Katha Commercial Plot</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2 font-semibold">
                    2. Planned Structure Type
                  </label>
                  <select
                    value={buildingType}
                    onChange={(e) => setBuildingType(e.target.value)}
                    className="w-full bg-white border border-zinc-300 px-4 py-2.5 text-sm font-sans text-[#0D0D0D] focus:outline-none focus:border-[#E31E24]"
                  >
                    <option value="Residential Duplex / Triplex">Modern Residential Duplex / Triplex</option>
                    <option value="Multi-Unit Residential Apartment (4-8 Story)">Multi-Unit Residential Apartment (4-8 Story)</option>
                    <option value="Commercial Plaza / Office Building">Commercial Plaza / Office Building</option>
                    <option value="Interior Refurbishment & Renovation">Interior Refurbishment & Renovation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2 font-semibold">
                    3. Required Disciplines
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    <label className="flex items-center gap-2 p-2.5 bg-white border border-zinc-200 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={needsKDA}
                        onChange={(e) => setNeedsKDA(e.target.checked)}
                        className="accent-[#E31E24] w-4 h-4"
                      />
                      <span className="font-medium text-zinc-800">KDA Plan Sanction Clearance</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 bg-white border border-zinc-200 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={needsSoilTest}
                        onChange={(e) => setNeedsSoilTest(e.target.checked)}
                        className="accent-[#E31E24] w-4 h-4"
                      />
                      <span className="font-medium text-zinc-800">Geotechnical Soil Test</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 bg-white border border-zinc-200 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={needsStructure}
                        onChange={(e) => setNeedsStructure(e.target.checked)}
                        className="accent-[#E31E24] w-4 h-4"
                      />
                      <span className="font-medium text-zinc-800">BNBC Structural Design</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 bg-white border border-zinc-200 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={needsConstruction}
                        onChange={(e) => setNeedsConstruction(e.target.checked)}
                        className="accent-[#E31E24] w-4 h-4"
                      />
                      <span className="font-medium text-zinc-800">Turnkey Construction Execution</span>
                    </label>
                  </div>
                </div>

                {/* Estimate summary output */}
                <div className="p-4 bg-zinc-900 text-white border border-zinc-800">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
                    <span>RECOMMENDED CONSULTATION SCOPE</span>
                    <span className="text-[#E31E24] font-bold">READY TO DRAFT</span>
                  </div>
                  <div className="text-sm font-serif-display font-medium text-white">
                    {buildingType} on {plotSize}
                  </div>
                  <div className="mt-2 text-xs text-zinc-300">
                    Includes: Full architectural schematics
                    {needsKDA && ', KDA municipal approval docket'}
                    {needsSoilTest && ', soil borehole test reports'}
                    {needsStructure && ', certified BNBC seismic calculation drawings'}
                    {needsConstruction && ', construction project management'}.
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-zinc-800 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#E31E24] hover:bg-[#C91419] text-white text-xs uppercase tracking-wider font-semibold transition-colors text-center"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Book Consultation With Principal</span>
                    </a>
                    <Link
                      to="/contact"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs uppercase tracking-wider font-semibold transition-colors text-center"
                    >
                      <span>Send Project Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE LAYOUT ADVANTAGE / WHY CHOOSE US */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-4 h-0.5 bg-[#E31E24]"></span>
              <span className="text-xs uppercase font-bold tracking-widest text-[#E31E24]">
                The Layout Advantage
              </span>
              <span className="w-4 h-0.5 bg-[#E31E24]"></span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-medium text-[#0D0D0D] tracking-tight">
              Why Discerning Clients Choose Layout Architect
            </h2>
            <p className="text-zinc-600 text-sm mt-2">
              We eliminate the fragmentation of managing separate surveyors, architects, approval expeditors, and civil contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFA] border border-zinc-200 p-8 relative hover:border-[#0D0D0D] transition-colors"
              >
                <div className="w-12 h-12 bg-white border border-zinc-200 text-[#E31E24] flex items-center justify-center mb-6 shadow-sm">
                  {getWhyIcon(item.icon)}
                </div>
                <h3 className="text-lg font-serif-display font-bold text-[#0D0D0D] mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROJECTS ACCORDION TRANSITION SECTION (Match Video Transition) */}
      <ProjectsAccordion initialActiveId="proj-1" showViewAllButton={true} />

      {/* 6. STATUTORY KDA APPROVAL BLUEPRINT */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#E31E24] text-xs font-semibold uppercase tracking-wider">
                <Stamp className="w-3.5 h-3.5" />
                <span>Statutory Compliance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#0D0D0D] tracking-tight leading-tight">
                How We Secure Your KDA Sanction Without Delays
              </h2>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Khulna Development Authority regulations require strict FAR (Floor Area Ratio) adherence, setback alignments, structural seismic calculations, and proper mouza ownership authentication. We manage every touchpoint.
              </p>
              
              <div className="space-y-3 pt-2 text-xs">
                <div className="p-4 bg-[#FAFAFA] border border-zinc-200">
                  <div className="font-semibold text-[#0D0D0D] mb-1">1. Mouza Map &amp; Boundary Precision</div>
                  <div className="text-zinc-600">Digital Total Station survey guarantees exact boundary demarcation before drawing submission.</div>
                </div>
                <div className="p-4 bg-[#FAFAFA] border border-zinc-200">
                  <div className="font-semibold text-[#0D0D0D] mb-1">2. BNBC 2020 Certified Calculations</div>
                  <div className="text-zinc-600">Engineering dockets signed by licensed structural engineers meeting all municipal seismic standards.</div>
                </div>
                <div className="p-4 bg-[#FAFAFA] border border-zinc-200">
                  <div className="font-semibold text-[#0D0D0D] mb-1">3. Direct Coordination with KDA Inspection Team</div>
                  <div className="text-zinc-600">Proactive liaison through on-site field visits to ensure speedy sanction letter issuance.</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/services#kda-plan-approval"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D0D0D] hover:bg-[#E31E24] text-white text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  <span>Read KDA Plan Approval Protocols</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Visual KDA Checklist Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#0D0D0D] text-white p-8 sm:p-10 border border-zinc-800 shadow-xl relative">
                <div className="text-xs font-mono tracking-widest text-[#E31E24] uppercase mb-2">
                  OFFICIAL CHECKLIST
                </div>
                <h3 className="text-2xl font-serif-display font-medium text-white mb-6">
                  Khulna Development Authority Sanction Deliverables
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-300">
                  <div className="p-3.5 bg-zinc-900 border border-zinc-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Architectural master plan, site layout, and elevation elevations</span>
                  </div>
                  <div className="p-3.5 bg-zinc-900 border border-zinc-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>BNBC structural design vetting &amp; seismic load analysis</span>
                  </div>
                  <div className="p-3.5 bg-zinc-900 border border-zinc-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Geotechnical soil bore report with safe bearing capacity (SBC)</span>
                  </div>
                  <div className="p-3.5 bg-zinc-900 border border-zinc-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Total Station boundary survey and digital contour verification</span>
                  </div>
                  <div className="p-3.5 bg-zinc-900 border border-zinc-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Fire safety, emergency egress, and road setback compliance</span>
                  </div>
                  <div className="p-3.5 bg-zinc-900 border border-zinc-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Official KDA submission form processing &amp; inspection follow-up</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400">
                    Have an urgent plot in Khulna awaiting building sanction?
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#E31E24] hover:bg-[#C91419] text-white text-xs uppercase tracking-widest font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {COMPANY_INFO.displayPhone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ACTION / CONTACT BANNER */}
      <section className="py-16 bg-[#0D0D0D] text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <span className="text-[#E31E24] text-xs font-mono tracking-widest uppercase block mb-1">
                DISCUSS YOUR PROJECT
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-medium tracking-tight">
                Ready to Bring Architectural Rigor to Your Land?
              </h2>
              <p className="text-zinc-400 text-sm mt-2 max-w-xl">
                Consult directly with our principal architects. Operating Monday to Saturday from 9:00 AM to 10:00 PM.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                id="cta-banner-call"
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] hover:bg-[#C91419] text-white font-semibold text-xs uppercase tracking-widest transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.displayPhone}</span>
              </a>

              <a
                id="cta-banner-directions"
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent hover:bg-white/10 text-white border border-zinc-700 hover:border-white font-semibold text-xs uppercase tracking-widest transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#E31E24]" />
                <span>View Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
