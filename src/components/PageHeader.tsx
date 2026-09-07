import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  pageName: string;
  title: string;
  subtitle: string;
  badge?: string;
}

export default function PageHeader({ pageName, title, subtitle, badge }: PageHeaderProps) {
  return (
    <div className="relative bg-[#0D0D0D] text-white py-16 sm:py-20 border-b border-zinc-800 overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>

      {/* Red vertical accent bar */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#E31E24]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-4">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-[#E31E24]" />
          <span className="text-white font-semibold">{pageName}</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            {badge && (
              <span className="inline-block px-2.5 py-1 bg-white/10 border border-white/20 text-[#E31E24] text-[10px] font-mono font-semibold uppercase tracking-widest mb-3">
                {badge}
              </span>
            )}
            <h1 className="text-3xl sm:text-5xl font-serif-display font-medium tracking-tight text-white leading-tight">
              {title}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-end text-right border-l border-zinc-800 pl-6 text-xs font-mono">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500">
              COORDINATES
            </span>
            <span className="text-zinc-300 font-medium">
              22°49&apos; N, 89°33&apos; E
            </span>
            <span className="text-[#E31E24] mt-1 font-semibold">
              +880 1711-433089
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
