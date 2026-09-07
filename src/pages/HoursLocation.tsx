import { useState, useEffect } from 'react';
import {
  Clock,
  MapPin,
  Phone,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  FileText,
  Calendar,
  Building
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { COMPANY_INFO } from '../data/companyData';

export default function HoursLocation() {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(false);
  const [currentDayName, setCurrentDayName] = useState<string>('');

  useEffect(() => {
    // Determine open/closed status based on Bangladesh Time (UTC+6)
    const now = new Date();
    // Convert to Bangladesh time
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const bdTime = new Date(utc + 3600000 * 6);
    const day = bdTime.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
    const hours = bdTime.getHours(); // 0 to 23

    const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    setCurrentDayName(daysMap[day]);

    // Open Monday to Saturday (days 1 to 6) from 9:00 AM to 10:00 PM (hours 9 to 21, closing at 22:00)
    if (day !== 0 && hours >= 9 && hours < 22) {
      setIsOpenNow(true);
    } else {
      setIsOpenNow(false);
    }
  }, []);

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <PageHeader
        pageName="Hours & Location"
        title="Office Hours &amp; Location"
        subtitle="Visit Layout Architect in Khulna for face-to-face consultations, plan reviews, and KDA sanction coordination."
        badge="Visit & Connect"
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Grid: Hours on Left, Map & Address on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Business Hours Table & Status (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Live Status Badge */}
              <div
                className={`p-5 border-2 flex items-center justify-between ${
                  isOpenNow
                    ? 'bg-emerald-50/70 border-emerald-500 text-emerald-950'
                    : 'bg-zinc-100 border-zinc-300 text-zinc-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-3.5 h-3.5 rounded-full ${
                      isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'
                    }`}
                  ></span>
                  <div>
                    <span className="font-heading font-black text-base uppercase block">
                      {isOpenNow ? 'Office is Currently Open' : 'Office is Currently Closed'}
                    </span>
                    <span className="text-xs text-zinc-600">
                      {isOpenNow
                        ? 'Operating hours: 9:00 AM – 10:00 PM'
                        : 'Opens Monday–Saturday at 9:00 AM'}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
                  Today: {currentDayName || 'Mon–Sat'}
                </span>
              </div>

              {/* Structured Business Hours Table */}
              <div className="bg-white border-2 border-zinc-200 p-6 sm:p-8">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#E31E24]" />
                    <h2 className="font-serif-display font-medium text-2xl tracking-tight text-[#0D0D0D]">
                      Weekly Schedule
                    </h2>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase">
                    Khulna (GMT+6)
                  </span>
                </div>

                <div className="divide-y divide-zinc-100">
                  {COMPANY_INFO.schedule.map((item) => {
                    const isToday = item.day.toLowerCase() === currentDayName.toLowerCase();
                    return (
                      <div
                        key={item.day}
                        className={`py-3 px-3 flex items-center justify-between text-sm transition-colors ${
                          item.isClosed
                            ? 'bg-zinc-100/60 text-zinc-400'
                            : isToday
                            ? 'bg-red-50/50 font-bold text-[#0D0D0D]'
                            : 'hover:bg-zinc-50 text-zinc-800'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {isToday && (
                            <span className="w-2 h-2 rounded-full bg-[#E31E24]"></span>
                          )}
                          <span className={`font-semibold ${item.isClosed ? 'text-zinc-500' : ''}`}>
                            {item.day}
                          </span>
                          {isToday && (
                            <span className="text-[10px] px-1.5 py-0.5 bg-[#E31E24] text-white font-bold uppercase tracking-wider">
                              Today
                            </span>
                          )}
                        </div>

                        <div>
                          {item.isClosed ? (
                            <span className="inline-block px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-zinc-600 bg-zinc-200/70 border border-zinc-300">
                              Closed
                            </span>
                          ) : (
                            <span className="font-mono text-xs font-semibold text-zinc-700">
                              {item.hours}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200 text-xs text-zinc-500 leading-relaxed">
                  <p>
                    <strong className="text-zinc-800">Notice:</strong> Consultations during evening hours (7 PM – 10 PM) are available for working professionals and expatriates by prior call or walk-in.
                  </p>
                </div>
              </div>

              {/* Direct Telephone Access Card */}
              <div className="bg-[#0D0D0D] text-white p-6 sm:p-7 border-l-4 border-[#E31E24]">
                <span className="text-xs uppercase font-bold tracking-widest text-[#E31E24] block mb-1">
                  Direct Line &amp; Hotline
                </span>
                <p className="text-sm text-zinc-400 mb-3">
                  Have an urgent question or need on-site surveyor dispatch? Call our principal desk directly:
                </p>
                <a
                  id="hours-call-link"
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center gap-3 text-2xl font-black font-heading text-white hover:text-[#E31E24] transition-colors"
                >
                  <Phone className="w-6 h-6 text-[#E31E24]" />
                  <span>{COMPANY_INFO.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps & Location Details (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Location Card & Map Link */}
              <div className="bg-white border-2 border-zinc-200 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-zinc-200 gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#E31E24]" />
                      <h2 className="font-serif-display font-medium text-2xl tracking-tight text-[#0D0D0D]">
                        Firm Location &amp; Directions
                      </h2>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">
                      Khulna Development Authority (KDA) Jurisdiction Area
                    </p>
                  </div>

                  {/* Primary Map Direction CTA */}
                  <a
                    id="location-get-directions-btn"
                    href={COMPANY_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E31E24] hover:bg-[#C91419] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm text-center"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Map Display Frame */}
                <div className="relative border-2 border-zinc-200 bg-zinc-100 overflow-hidden mb-6 aspect-[16/9] sm:aspect-[2/1] flex items-center justify-center">
                  <iframe
                    title="Layout Architect Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117711.66014493397!2d89.47958117918512!3d22.845641042738747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0051a8d052d3a3%3A0x6b4ef8fa199cc874!2sKhulna!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                    className="w-full h-full border-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  {/* Floating Map Action Badge */}
                  <div className="absolute bottom-4 right-4 bg-[#0D0D0D]/90 text-white p-3 border border-white/20 shadow-lg text-xs backdrop-blur-xs flex items-center gap-3">
                    <div>
                      <span className="font-bold block uppercase font-heading">
                        Layout Architect
                      </span>
                      <span className="text-zinc-400 text-[11px]">
                        Khulna, Bangladesh
                      </span>
                    </div>
                    <a
                      href={COMPANY_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#E31E24] hover:bg-[#C91419] text-white font-bold text-[10px] uppercase tracking-wider"
                    >
                      Open App
                    </a>
                  </div>
                </div>

                {/* Location Context Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-[#FAFAFA] border border-zinc-200">
                    <span className="font-bold uppercase text-zinc-900 block mb-1">
                      Service Region
                    </span>
                    <p className="text-zinc-600 leading-relaxed">
                      Khulna City, Sonadanga, Mujgunni, Khalishpur, Daulatpur, Boyra, Rupsha, and surrounding regional districts.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FAFAFA] border border-zinc-200">
                    <span className="font-bold uppercase text-zinc-900 block mb-1">
                      Accessibility &amp; Parking
                    </span>
                    <p className="text-zinc-600 leading-relaxed">
                      Easily accessible by private vehicles, rickshaws, and public transit with dedicated client parking nearby.
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Bring to an Office Consultation */}
              <div className="bg-white border-2 border-zinc-200 p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-[#E31E24]" />
                  <h3 className="font-heading font-black text-lg uppercase tracking-tight text-[#0D0D0D]">
                    What to Bring to Your Consultation
                  </h3>
                </div>
                <p className="text-xs text-zinc-600 mb-4">
                  To fast-track your architectural review or KDA approval evaluation, we recommend bringing copies of the following documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                    <span>Registered Land Deed (দলিল) or Mutation (নামজারি)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                    <span>Mouza Map &amp; CS/SA/RS/BS Khatian numbers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                    <span>Approximate plot dimensions or rough sketch</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                    <span>Previous soil test or surveyor notes (if available)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
