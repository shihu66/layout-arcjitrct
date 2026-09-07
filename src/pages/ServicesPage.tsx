import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  DraftingCompass,
  Sofa,
  Ruler,
  Layers,
  Stamp,
  HardHat,
  ClipboardCheck,
  Building2,
  Phone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { COMPANY_INFO, SERVICES, ServiceItem } from '../data/companyData';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const categories = ['All', 'Design', 'Engineering', 'Approvals', 'Construction'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-7 h-7" />;
      case 'DraftingCompass': return <DraftingCompass className="w-7 h-7" />;
      case 'Sofa': return <Sofa className="w-7 h-7" />;
      case 'Ruler': return <Ruler className="w-7 h-7" />;
      case 'Layers': return <Layers className="w-7 h-7" />;
      case 'Stamp': return <Stamp className="w-7 h-7" />;
      case 'HardHat': return <HardHat className="w-7 h-7" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-7 h-7" />;
      default: return <Building2 className="w-7 h-7" />;
    }
  };

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <PageHeader
        pageName="Services"
        title="Comprehensive Architecture &amp; Engineering Services"
        subtitle="From preliminary digital soil investigation to full KDA regulatory approvals and turnkey construction supervision."
        badge="8 Core Practice Disciplines"
      />

      {/* Filter Tabs */}
      <section className="bg-white border-b border-zinc-200 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-widest text-zinc-500">
                Filter By Discipline:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`filter-category-${cat.toLowerCase()}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                    selectedCategory === cat
                      ? 'bg-[#0D0D0D] text-white border-[#0D0D0D]'
                      : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:bg-zinc-100 hover:text-[#0D0D0D]'
                  }`}
                >
                  {cat} {cat === 'All' ? `(${SERVICES.length})` : ''}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Detailed Deliverables */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border-2 border-zinc-200 hover:border-[#E31E24] transition-all p-8 relative flex flex-col justify-between group scroll-mt-28"
              >
                {/* Red accent ribbon if highlight exists */}
                {service.highlight && (
                  <div className="absolute top-0 right-0 bg-[#E31E24] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    {service.highlight}
                  </div>
                )}

                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-zinc-100 group-hover:bg-red-50 text-[#0D0D0D] group-hover:text-[#E31E24] flex items-center justify-center transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-400 group-hover:text-[#E31E24]">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#E31E24] block mb-1">
                    {service.category} Discipline
                  </span>

                  <h3 className="text-2xl font-serif-display font-bold text-[#0D0D0D] mb-3 group-hover:text-[#E31E24] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-zinc-700 text-sm font-medium leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <p className="text-zinc-500 text-xs leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Deliverables List */}
                  <div className="bg-[#FAFAFA] border border-zinc-200 p-4 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 block mb-2">
                      Key Deliverables &amp; Scope:
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-600">
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E31E24] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-zinc-500 font-mono">
                    BNBC &amp; KDA Compliant
                  </span>
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D0D0D] group-hover:bg-[#E31E24] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Inquire About This</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Clarification on KDA & Process */}
      <section className="py-16 bg-white border-t border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#E31E24] text-xs font-bold uppercase tracking-widest block mb-2">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-[#0D0D0D]">
              Frequently Asked Project Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What documents are required to initiate KDA plan approval?",
                a: "To initiate sanction with Khulna Development Authority (KDA), you will generally need your registered land deed (দলিল), updated land tax receipt (দাখিলা), mouza survey map, digital topography layout, and our signed architectural and BNBC structural drawings.",
              },
              {
                q: "Why is a soil test mandatory before structural design?",
                a: "Khulna's soil conditions vary significantly across areas. A geotechnical borehole investigation confirms the Safe Bearing Capacity (SBC) and water table level, which dictates whether your building requires shallow strip footings, isolated pads, or deep cast-in-situ piling.",
              },
              {
                q: "Can I commission only the structural design or only the architectural plans?",
                a: "Yes. While we excel at providing turnkey, full-spectrum architectural packages, we regularly provide standalone structural engineering, digital survey, soil testing, or KDA approval consulting based on your project requirements.",
              },
              {
                q: "What are your business hours for project consultations?",
                a: "Our office operates Monday through Saturday from 9:00 AM to 10:00 PM. We are closed on Sundays. You can reach our principal architects directly at +880 1711-433089.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border border-zinc-200 bg-[#FAFAFA] p-5 cursor-pointer hover:border-zinc-400 transition-colors"
                onClick={() => toggleAccordion(`faq-${idx}`)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-base text-[#0D0D0D] uppercase flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#E31E24]" />
                    {item.q}
                  </h4>
                  <span className="text-xs font-bold text-zinc-400 font-mono">
                    {activeAccordion === `faq-${idx}` ? '−' : '+'}
                  </span>
                </div>
                {activeAccordion === `faq-${idx}` && (
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed border-t border-zinc-200 pt-3">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA AT BOTTOM TO CONTACT FOR CONSULTATION */}
      <section className="py-16 bg-[#0D0D0D] text-white border-t-4 border-[#E31E24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[#E31E24] text-xs font-bold uppercase tracking-widest block mb-1">
                Consultation Request
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading uppercase tracking-tight text-white">
                Book a Technical Consultation
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
                Bring your plot dimensions or land documents to our office, or call our hotline for an immediate initial consultation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                id="services-contact-btn"
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] hover:bg-[#C91419] text-white font-bold text-sm uppercase tracking-wider transition-colors text-center"
              >
                <span>Send Inquiry Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                id="services-call-btn"
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/40 hover:border-white text-white font-bold text-sm uppercase tracking-wider transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-[#E31E24]" />
                <span>Call {COMPANY_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
