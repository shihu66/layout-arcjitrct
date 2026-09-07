import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Hours & Location', path: '/hours-location' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-zinc-200/80 transition-all">
      {/* Top micro-bar */}
      <div className="bg-[#0D0D0D] text-white text-[11px] tracking-wider border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center font-sans">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-medium text-white">{COMPANY_INFO.hoursSummary}</span>
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">
              Khulna, Bangladesh • KDA Sanction Specialists
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              id="topbar-directions-link"
              href={COMPANY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#E31E24]" />
              <span>Office on Google Maps</span>
            </a>
            <a
              id="topbar-phone-link"
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-white font-semibold hover:text-[#E31E24] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E31E24]" />
              <span>{COMPANY_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            id="brand-logo-link"
            to="/"
            className="flex items-center gap-3.5 group focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Geometric architectural logo icon */}
            <div className="w-10 h-10 bg-[#0D0D0D] flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105">
              <div className="w-3.5 h-3.5 border border-white/60 absolute top-1.5 left-1.5"></div>
              <div className="w-3 h-3 bg-[#E31E24] absolute bottom-1.5 right-1.5"></div>
              <span className="text-white font-bold text-xs tracking-tighter relative z-10 font-heading">
                LA
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0D0D0D] font-heading leading-none flex items-center gap-1">
                <span>LAYOUT</span>
                <span className="text-[#E31E24] font-light">ARCHITECT</span>
              </span>
              <span className="text-[9px] tracking-[0.24em] uppercase font-medium text-zinc-500 mt-1">
                Architecture • Engineering • KDA Approvals
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-xs font-semibold tracking-wider uppercase transition-colors relative ${
                    isActive
                      ? 'text-[#E31E24]'
                      : 'text-[#0D0D0D] hover:text-[#E31E24]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#E31E24]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-call-btn"
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0D0D0D] hover:bg-[#E31E24] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-sm active:scale-[0.98] group"
            >
              <Phone className="w-3.5 h-3.5 text-[#E31E24] group-hover:text-white transition-colors" />
              <span>Call Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="mobile-quick-call"
              href={`tel:${COMPANY_INFO.phone}`}
              aria-label="Call Layout Architect"
              className="p-2.5 bg-[#E31E24] text-white"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#0D0D0D] hover:text-[#E31E24] focus:outline-none border border-zinc-300"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E4E4E7] shadow-xl px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              id={`mobile-nav-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 text-base font-bold uppercase tracking-wider transition-colors border-l-2 ${
                  isActive
                    ? 'border-[#E31E24] text-[#E31E24] bg-red-50/50'
                    : 'border-transparent text-[#0D0D0D] hover:bg-zinc-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-4 border-t border-zinc-200 flex flex-col gap-2.5">
            <a
              id="mobile-drawer-call-btn"
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#E31E24] text-white font-bold text-center uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              <span>Call +880 1711-433089</span>
            </a>
            <a
              id="mobile-drawer-maps-btn"
              href={COMPANY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 border border-[#0D0D0D] text-[#0D0D0D] font-bold text-center uppercase tracking-wider text-sm hover:bg-zinc-100"
            >
              <MapPin className="w-4 h-4 text-[#E31E24]" />
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="pt-2 text-center text-xs text-zinc-500">
            {COMPANY_INFO.hoursSummary}
          </div>
        </div>
      )}
    </header>
  );
}
