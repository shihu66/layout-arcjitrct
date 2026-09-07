import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] text-white border-t-4 border-[#E31E24]">
      {/* Pre-footer Callout */}
      <div className="border-b border-white/10 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[#E31E24] text-xs font-bold tracking-[0.25em] uppercase block mb-1">
              Start Your Project Today
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-white">
              Planning a building in Khulna or need KDA plan clearance?
            </h3>
            <p className="text-zinc-400 text-sm mt-1 max-w-xl">
              Connect with our principal architects and licensed engineers for an immediate consultation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              id="footer-cta-call"
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E31E24] hover:bg-[#C91419] text-white font-bold text-sm uppercase tracking-wider transition-colors w-full sm:w-auto text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call +880 1711-433089</span>
            </a>
            <a
              id="footer-cta-directions"
              href={COMPANY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 hover:border-white text-white font-bold text-sm uppercase tracking-wider transition-colors w-full sm:w-auto text-center"
            >
              <MapPin className="w-4 h-4 text-[#E31E24]" />
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand & Firm Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white text-[#0D0D0D] flex items-center justify-center font-heading font-black text-sm">
                <span className="text-[#E31E24]">L</span>A
              </div>
              <span className="text-xl font-bold font-heading tracking-tight text-white">
                LAYOUT <span className="text-[#E31E24]">ARCHITECT</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Professional Architecture, Engineering & Interior Design Firm based in Khulna. Delivering full-spectrum building plans, structural integrity, and statutory KDA approvals under one roof.
            </p>
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#E31E24]" />
                <span>BNBC Code & KDA Regulatory Compliant</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold font-heading tracking-widest uppercase text-white mb-5 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#E31E24]"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-[#E31E24] transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-zinc-400 hover:text-[#E31E24] transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">›</span> Projects Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-[#E31E24] transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">›</span> About Firm
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-400 hover:text-[#E31E24] transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">›</span> Services (8 Core)
                </Link>
              </li>
              <li>
                <Link to="/hours-location" className="text-zinc-400 hover:text-[#E31E24] transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">›</span> Hours & Location
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-[#E31E24] transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">›</span> Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Firm Services */}
          <div>
            <h4 className="text-sm font-bold font-heading tracking-widest uppercase text-white mb-5 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#E31E24]"></span>
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services#${srv.id}`}
                    className="hover:text-white transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span className="group-hover:text-[#E31E24] transition-colors">{srv.title}</span>
                    {srv.highlight && (
                      <span className="text-[10px] px-1.5 py-0.2 bg-[#E31E24]/20 text-[#E31E24] border border-[#E31E24]/30">
                        {srv.highlight}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Business Hours & Contact */}
          <div>
            <h4 className="text-sm font-bold font-heading tracking-widest uppercase text-white mb-5 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#E31E24]"></span>
              Business Hours & Info
            </h4>

            {/* Structured Hours Card */}
            <div className="bg-[#141414] border border-white/10 p-3.5 mb-4 text-xs space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                <span className="text-zinc-300 font-medium">Monday – Saturday</span>
                <span className="text-emerald-400 font-semibold">9 AM – 10 PM</span>
              </div>
              <div className="flex items-center justify-between pt-0.5">
                <span className="text-zinc-400">Sunday</span>
                <span className="text-[#E31E24] font-semibold bg-red-950/40 px-2 py-0.5 border border-red-900/40">
                  Closed
                </span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E31E24] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-zinc-500 text-[10px] uppercase tracking-wider">Direct Hotline</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-white font-bold hover:text-[#E31E24] text-sm transition-colors"
                  >
                    {COMPANY_INFO.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E31E24] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-zinc-500 text-[10px] uppercase tracking-wider">Location</span>
                  <a
                    href={COMPANY_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>Khulna, Bangladesh</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Identity */}
        <div className="pt-10 mt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {currentYear} Layout Architect. All rights reserved.</p>
          <div className="flex items-center gap-6 text-zinc-400">
            <span>Khulna Development Authority (KDA) Plan Approval Specialist</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-zinc-500">Architecture • Engineering • Interiors</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
