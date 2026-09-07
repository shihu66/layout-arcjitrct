import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const serviceFromQuery = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: serviceFromQuery || 'Architectural Design',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (serviceFromQuery) {
      setFormData((prev) => ({ ...prev, service: serviceFromQuery }));
    }
  }, [serviceFromQuery]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Architectural Design',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <PageHeader
        pageName="Contact"
        title="Get In Touch With Our Firm"
        subtitle="Request a design consultation, structural review, land survey, or KDA plan approval guidance."
        badge="Direct Office &amp; Engineering Desk"
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Information, Hotline & Quick Info (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[#E31E24] text-xs font-bold uppercase tracking-widest block mb-1">
                  Connect Directly
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-[#0D0D0D] tracking-tight">
                  Reach Our Architects &amp; Engineers
                </h2>
                <p className="text-zinc-600 text-sm mt-2 leading-relaxed">
                  Whether you are planning a residential duplex, a multi-story commercial plaza, or require fast KDA plan sanctions, we are ready to assist.
                </p>
              </div>

              {/* Call Now Hero Card */}
              <div className="bg-[#0D0D0D] text-white p-7 border-l-4 border-[#E31E24] shadow-md">
                <span className="text-xs uppercase font-bold tracking-widest text-[#E31E24] block mb-2">
                  Direct Phone / Hotlines
                </span>
                <p className="text-xs text-zinc-400 mb-4">
                  Speak directly with our senior consulting team for immediate inquiries:
                </p>
                <div className="space-y-3">
                  <a
                    id="contact-tel-primary"
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center gap-3 text-2xl font-black font-heading text-white hover:text-[#E31E24] transition-colors"
                  >
                    <Phone className="w-6 h-6 text-[#E31E24]" />
                    <span>{COMPANY_INFO.displayPhone}</span>
                  </a>

                  <a
                    id="contact-call-now-button"
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#E31E24] hover:bg-[#C91419] text-white text-xs uppercase font-bold tracking-wider transition-colors text-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now (+880 1711-433089)</span>
                  </a>
                </div>
              </div>

              {/* Business Hours Quick Reference */}
              <div className="bg-white border-2 border-zinc-200 p-6">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-200">
                  <Clock className="w-5 h-5 text-[#E31E24]" />
                  <h3 className="font-heading font-black text-lg uppercase text-[#0D0D0D]">
                    Business Hours Reference
                  </h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 bg-zinc-50 border border-zinc-200">
                    <span className="font-bold text-zinc-900">Monday – Saturday</span>
                    <span className="font-mono text-emerald-600 font-bold">9:00 AM – 10:00 PM</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-zinc-100 border border-zinc-300">
                    <span className="font-medium text-zinc-600">Sunday</span>
                    <span className="font-bold text-[#E31E24] uppercase tracking-wider">Closed</span>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-500 mt-4 leading-relaxed">
                  Direct phone lines remain accessible during working hours for emergency site queries and urgent regulatory deadlines.
                </p>
              </div>

              {/* Map & Direction Quick Action */}
              <div className="bg-white border-2 border-zinc-200 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[#E31E24]" />
                  <h3 className="font-heading font-black text-lg uppercase text-[#0D0D0D]">
                    Visit Our Office
                  </h3>
                </div>
                <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
                  Located in Khulna, Bangladesh. Conveniently situated for clients across all KDA residential and commercial zones.
                </p>

                <a
                  id="contact-map-link-btn"
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 border-2 border-[#0D0D0D] hover:bg-[#0D0D0D] text-[#0D0D0D] hover:text-white text-xs uppercase font-bold tracking-wider transition-all text-center"
                >
                  <MapPin className="w-4 h-4 text-[#E31E24]" />
                  <span>Open Directions on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Consultation & Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white border-2 border-zinc-200 p-8 sm:p-10 shadow-xs relative">
                {/* Structural corner marks */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#E31E24]"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E31E24]"></div>

                <div className="mb-8">
                  <span className="text-[#E31E24] text-xs font-bold uppercase tracking-widest block mb-1">
                    Direct Inquiry Form
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif-display font-medium text-[#0D0D0D]">
                    Send a Project Inquiry
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm mt-1">
                    Fill out your project details below. Our team will review your requirements and reach back promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-emerald-50 border-2 border-emerald-500 p-8 text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h4 className="text-2xl font-black font-heading uppercase text-emerald-950">
                      Inquiry Received Successfully!
                    </h4>

                    <p className="text-sm text-emerald-900 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="underline">{formData.name}</strong>. We have logged your request regarding <strong>{formData.service}</strong>. Our lead consultant will contact you at <strong>{formData.phone}</strong>.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="w-full sm:w-auto px-6 py-3 bg-[#E31E24] hover:bg-[#C91419] text-white text-xs font-bold uppercase tracking-wider"
                      >
                        Call Us Directly Now
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="w-full sm:w-auto px-6 py-3 border border-zinc-400 hover:bg-white text-zinc-800 text-xs font-bold uppercase tracking-wider"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold uppercase tracking-wider text-[#0D0D0D] mb-2"
                        >
                          Your Name <span className="text-[#E31E24]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Md. Tariqul Islam"
                          className="w-full px-4 py-3 bg-[#FAFAFA] border border-zinc-300 focus:border-[#E31E24] focus:outline-none text-sm text-[#0D0D0D] transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wider text-[#0D0D0D] mb-2"
                        >
                          Contact Phone <span className="text-[#E31E24]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 017XXXXXXXX"
                          className="w-full px-4 py-3 bg-[#FAFAFA] border border-zinc-300 focus:border-[#E31E24] focus:outline-none text-sm text-[#0D0D0D] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider text-[#0D0D0D] mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 bg-[#FAFAFA] border border-zinc-300 focus:border-[#E31E24] focus:outline-none text-sm text-[#0D0D0D] transition-colors"
                        />
                      </div>

                      {/* Service Selection */}
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs font-bold uppercase tracking-wider text-[#0D0D0D] mb-2"
                        >
                          Service Needed <span className="text-[#E31E24]">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#FAFAFA] border border-zinc-300 focus:border-[#E31E24] focus:outline-none text-sm text-[#0D0D0D] transition-colors font-medium"
                        >
                          {SERVICES.map((srv) => (
                            <option key={srv.id} value={srv.title}>
                              {srv.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider text-[#0D0D0D] mb-2"
                      >
                        Project Details / Land Location / Inquiries <span className="text-[#E31E24]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your plot size, location in Khulna, planned building stories, KDA approval stage, or specific architectural requirements..."
                        className="w-full px-4 py-3 bg-[#FAFAFA] border border-zinc-300 focus:border-[#E31E24] focus:outline-none text-sm text-[#0D0D0D] transition-colors resize-y"
                      ></textarea>
                    </div>

                    {/* Submit button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        id="contact-submit-btn"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#E31E24] hover:bg-[#C91419] text-white text-sm uppercase font-bold tracking-wider transition-colors shadow-sm disabled:opacity-70 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Dispatching Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Project Inquiry</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="pt-4 border-t border-zinc-200 flex items-center gap-2 text-xs text-zinc-500">
                      <ShieldCheck className="w-4 h-4 text-zinc-400" />
                      <span>Your personal information is kept strictly confidential for firm consultation only.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
