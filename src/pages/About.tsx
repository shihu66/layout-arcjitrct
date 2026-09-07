import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle2, Award, Compass, ShieldCheck, ArrowRight, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { COMPANY_INFO, PROCESS_STEPS } from '../data/companyData';

export default function About() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <PageHeader
        pageName="About Us"
        title="About Layout Architect"
        subtitle="A multidisciplinary architecture, structural engineering, and interior design practice built on precision, regulatory clearance, and construction excellence."
        badge="Firm Overview & Mission"
      />

      {/* 1. FIRM STORY & MISSION */}
      <section className="py-16 sm:py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#E31E24]"></span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#E31E24]">
                  Our Story &amp; Purpose
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#0D0D0D] tracking-tight leading-tight">
                Architectural Clarity Engineered For Structural Permanence
              </h2>

              <p className="text-zinc-700 text-base leading-relaxed">
                <strong>Layout Architect</strong> was founded with a clear directive: to bring cohesive, uncompromising professionalism to the architectural and civil construction sector in Khulna and southwestern Bangladesh. 
              </p>

              <p className="text-zinc-600 text-base leading-relaxed">
                Too often, landowners and developers suffer from fragmented execution—hiring a surveyor who doesn't consult with the structural engineer, an architect whose drawings conflict with Khulna Development Authority (KDA) building setbacks, and contractors who cut corners on foundation reinforcement.
              </p>

              <p className="text-zinc-600 text-base leading-relaxed">
                At Layout Architect, we unite all these disciplines under one roof. Our layout methodology ensures every square foot is optimized for natural airflow and light, strictly compliant with Bangladesh National Building Code (BNBC) seismic standards, and pre-vetted for effortless KDA plan approval.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border-l-2 border-[#E31E24] pl-4 py-1">
                  <h4 className="font-heading font-bold text-sm uppercase text-[#0D0D0D]">Our Mission</h4>
                  <p className="text-xs text-zinc-500 mt-1">
                    To deliver aesthetically superior, structurally resilient, and fully authorized building solutions on time and within budget.
                  </p>
                </div>
                <div className="border-l-2 border-[#0D0D0D] pl-4 py-1">
                  <h4 className="font-heading font-bold text-sm uppercase text-[#0D0D0D]">Our Vision</h4>
                  <p className="text-xs text-zinc-500 mt-1">
                    To set the regional benchmark for architectural ingenuity, transparent engineering, and seamless KDA municipal sanctioning.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Architectural Image / Card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] bg-zinc-900 overflow-hidden border-2 border-[#0D0D0D] relative">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
                    alt="Architectural drafting and engineering"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0D0D0D]/90 border border-white/15">
                    <span className="text-[#E31E24] text-[10px] font-bold uppercase tracking-widest block mb-1">
                      Professional Practice
                    </span>
                    <p className="text-white font-heading font-bold text-sm uppercase">
                      Full-Service Architecture, Engineering &amp; Interior Design
                    </p>
                    <p className="text-zinc-400 text-xs mt-1">
                      Operating in Khulna with dedicated on-site engineering teams.
                    </p>
                  </div>
                </div>
                {/* Accent red geometric block */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#E31E24] -z-10 hidden sm:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT SETS US APART */}
      <section className="py-20 bg-[#FAFAFA] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#E31E24]"></span>
              <span className="text-xs uppercase font-bold tracking-widest text-[#E31E24]">
                Competitive Differentiation
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#0D0D0D] tracking-tight">
              What Sets Layout Architect Apart
            </h2>
            <p className="text-zinc-600 text-base mt-2">
              We eliminate the friction points of building projects through integrated expertise and institutional KDA experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Differentiator 1 */}
            <div className="bg-white border-2 border-zinc-200 p-8 hover:border-[#E31E24] transition-colors relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-red-50 text-[#E31E24] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading uppercase text-[#0D0D0D] mb-3">
                  Deep KDA Approval Expertise
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Securing building sanction from the Khulna Development Authority (KDA) requires comprehensive compliance with setback rules, Floor Area Ratios (FAR), road widths, and fire safety provisions. We handle the paperwork, drawings, and liaison from start to finish.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center text-xs font-bold uppercase text-[#E31E24]">
                <span>100% Regulatory Track Record</span>
              </div>
            </div>

            {/* Differentiator 2 */}
            <div className="bg-white border-2 border-zinc-200 p-8 hover:border-[#E31E24] transition-colors relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-zinc-100 text-[#0D0D0D] flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading uppercase text-[#0D0D0D] mb-3">
                  All Disciplines Under One Roof
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  No need to recruit separate land surveyors, geotechnical testing labs, structural engineers, architects, and interior fitout teams. We unify all 8 core services so your design vision aligns seamlessly with your structural load calculations.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center text-xs font-bold uppercase text-zinc-900">
                <span>Zero Inter-Vendor Conflict</span>
              </div>
            </div>

            {/* Differentiator 3 */}
            <div className="bg-white border-2 border-zinc-200 p-8 hover:border-[#E31E24] transition-colors relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-red-50 text-[#E31E24] flex items-center justify-center mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading uppercase text-[#0D0D0D] mb-3">
                  BNBC Structural Rigor
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Every foundation and framing plan is scientifically analyzed against regional seismic zone coefficients, wind pressure, and soil bearing capacity reports to ensure high longevity and uncompromised life safety.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center text-xs font-bold uppercase text-[#E31E24]">
                <span>Tested Safety &amp; Durability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS OVERVIEW */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#E31E24] text-xs font-bold uppercase tracking-widest block mb-2">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#0D0D0D] tracking-tight">
              4-Stage Delivery Process
            </h2>
            <p className="text-zinc-600 text-sm mt-2">
              From raw topography measurements to final sanction and turnkey build execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFA] border border-zinc-200 p-7 relative flex flex-col justify-between hover:border-[#0D0D0D] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-black font-heading text-[#E31E24]">
                      {step.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-zinc-300"></span>
                  </div>
                  <h3 className="text-lg font-bold font-heading uppercase text-[#0D0D0D] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-zinc-200 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E31E24]" />
                  <span>Phase {idx + 1} Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER AT BOTTOM: "Ready to build your vision? Call us" */}
      <section className="py-16 bg-[#0D0D0D] text-white border-b-4 border-[#E31E24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-widest text-[#E31E24] font-bold">
                <Clock className="w-4 h-4" />
                <span>Mon–Sat 9 AM – 10 PM</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-heading uppercase tracking-tight text-white">
                Ready to build your vision? Call us
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
                Consult with our registered architects and senior civil engineers today to review your land, plans, or KDA clearance requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                id="about-cta-call"
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] hover:bg-[#C91419] text-white font-bold text-sm uppercase tracking-wider transition-colors text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.displayPhone}</span>
              </a>

              <a
                id="about-cta-directions"
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/40 hover:border-white text-white font-bold text-sm uppercase tracking-wider transition-colors text-center"
              >
                <MapPin className="w-4 h-4 text-[#E31E24]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
