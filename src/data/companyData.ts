export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Design' | 'Engineering' | 'Approvals' | 'Construction';
  deliverables: string[];
  iconName: string;
  highlight?: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  niche: string;
  phone: string;
  displayPhone: string;
  mapsUrl: string;
  locationArea: string;
  hoursSummary: string;
  schedule: {
    day: string;
    hours: string;
    isClosed?: boolean;
  }[];
}

export const COMPANY_INFO: BusinessInfo = {
  name: "Layout Architect",
  tagline: "Architecture, Engineering & Interior Design Firm",
  niche: "Full-Service Architectural Planning, KDA Plan Approvals, Structural Engineering & Turnkey Construction",
  phone: "+8801711433089",
  displayPhone: "+880 1711-433089",
  mapsUrl: "https://maps.app.goo.gl/SKdRTVwUG1JichHT7",
  locationArea: "Khulna, Bangladesh (Serving KDA Jurisdiction & Surrounding Regions)",
  hoursSummary: "Mon–Sat: 9 AM–10 PM | Sun: Closed",
  schedule: [
    { day: "Monday", hours: "9:00 AM – 10:00 PM" },
    { day: "Tuesday", hours: "9:00 AM – 10:00 PM" },
    { day: "Wednesday", hours: "9:00 AM – 10:00 PM" },
    { day: "Thursday", hours: "9:00 AM – 10:00 PM" },
    { day: "Friday", hours: "9:00 AM – 10:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 10:00 PM" },
    { day: "Sunday", hours: "Closed", isClosed: true },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "architectural-design",
    title: "Architectural Design",
    shortDesc: "Bespoke residential, commercial, and institutional concepts that harmonize aesthetics, functional space, and environmental context.",
    fullDesc: "Complete architectural blueprints, 2D floor plans, 3D exterior elevations, spatial zoning, and building information modeling tailored to client vision and zoning regulations.",
    category: "Design",
    deliverables: ["Comprehensive Floor Plans", "3D Photorealistic Elevations", "Landscape & Spatial Layouts", "Working & Sectional Drawings"],
    iconName: "Compass",
    highlight: "Core Specialty",
  },
  {
    id: "structural-design",
    title: "Structural Design",
    shortDesc: "Earthquake-resilient, BNBC-compliant structural engineering ensuring maximum structural safety and material efficiency.",
    fullDesc: "Rigorous load calculations, foundation design, reinforced concrete and steel detailing using advanced finite element analysis to guarantee longevity and safety.",
    category: "Engineering",
    deliverables: ["Seismic & Wind Load Analysis", "Foundation & Column Detailing", "Reinforced Concrete Specifications", "BNBC Compliance Certification"],
    iconName: "DraftingCompass",
    highlight: "BNBC Certified",
  },
  {
    id: "interior-design",
    title: "Interior Design",
    shortDesc: "Sophisticated interior spaces combining custom joinery, ambient illumination, ergonomics, and material elegance.",
    fullDesc: "Transforming raw spaces into refined residential sanctuaries, modern corporate workspaces, and retail environments with detailed ceiling, lighting, and finishes plans.",
    category: "Design",
    deliverables: ["Custom Furniture & Joinery Detailing", "Lighting & Acoustic Schemes", "Material & Finish Palettes", "3D Walkthrough Renders"],
    iconName: "Sofa",
  },
  {
    id: "surveyor",
    title: "Surveyor",
    shortDesc: "High-precision digital land surveying, boundary demarcation, and topographic elevation profiling.",
    fullDesc: "Accurate Total Station and digital topography surveys vital for boundary authentication, setback determination, and dispute-free construction groundwork.",
    category: "Engineering",
    deliverables: ["Digital Total Station Surveys", "Contour & Topographic Maps", "Cadastral / Mouza Plot Demarcation", "Boundary Verification Reports"],
    iconName: "Ruler",
  },
  {
    id: "soil-test",
    title: "Soil Test",
    shortDesc: "Geotechnical soil bore tests and laboratory investigation for scientific foundation engineering.",
    fullDesc: "Standard Penetration Tests (SPT), deep bore hole sampling, and comprehensive geotechnical laboratory soil reports determining safe bearing capacity for your foundation.",
    category: "Engineering",
    deliverables: ["Field Borehole SPT Testing", "Laboratory Shear & Moisture Analysis", "Safe Bearing Capacity (SBC) Curve", "Foundation Depth Recommendation"],
    iconName: "Layers",
  },
  {
    id: "kda-plan-approval",
    title: "KDA Plan Approval",
    shortDesc: "End-to-end statutory permit clearance and building plan sanctioning from Khulna Development Authority (KDA).",
    fullDesc: "Navigating complex municipal bylaws, FAR rules, setbacks, fire safety guidelines, and legal vetting for hassle-free official approvals directly through KDA.",
    category: "Approvals",
    deliverables: ["KDA Form & Drawing Preparation", "FAR & Setback Optimization", "Liaison & Inspection Coordination", "Authorized Sanction Letter"],
    iconName: "Stamp",
    highlight: "100% Success Rate",
  },
  {
    id: "construction",
    title: "Construction",
    shortDesc: "Turnkey building construction, civil engineering execution, and rigorous on-site quality supervision.",
    fullDesc: "End-to-end execution of structural and architectural builds with top-tier raw materials, disciplined project management, and strict timeline adherence.",
    category: "Construction",
    deliverables: ["Turnkey Civil Construction", "Material Quality Quality Control (QA/QC)", "Site Supervision & Safety", "Milestone-Based Scheduling"],
    iconName: "HardHat",
  },
  {
    id: "consulting",
    title: "Consulting",
    shortDesc: "Expert technical advisory on real estate feasibility, structural health audits, cost estimation, and renovation.",
    fullDesc: "Strategic advisory for landowners, developers, and homeowners on land potential, cost-benefit analysis, regulatory feasibility, and building retrofits.",
    category: "Approvals",
    deliverables: ["Project Feasibility Reports", "Cost Estimation & BOQ Preparation", "Structural Health Audits", "Renovation & Retrofitting Advice"],
    iconName: "ClipboardCheck",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "KDA Approval Mastery",
    desc: "Unmatched expertise in navigating Khulna Development Authority (KDA) building rules, FAR regulations, and municipal clearance protocols without delays.",
    icon: "ShieldCheck",
  },
  {
    title: "Full-Service Under One Roof",
    desc: "From initial soil testing and digital land survey to architecture, structural engineering, KDA approval, and turnkey construction — zero fragmentation.",
    icon: "Building2",
  },
  {
    title: "Engineering Precision",
    desc: "Strict adherence to the Bangladesh National Building Code (BNBC) with advanced seismic calculations, high-grade structural detailing, and material efficiency.",
    icon: "CheckCircle2",
  },
  {
    title: "Transparent & Accountable",
    desc: "Dedicated project milestones, clear cost estimations, disciplined timeline tracking, and accessible senior consultants ready to answer your call.",
    icon: "BadgeCheck",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Site Survey & Geotechnical Testing",
    desc: "Precise digital land surveying and soil testing to establish exact boundary coordinates and soil bearing capacity.",
  },
  {
    step: "02",
    title: "Architectural & Structural Drafting",
    desc: "Creating functional, elegant 2D/3D layouts and BNBC-compliant structural engineering drawings tailored to your lifestyle.",
  },
  {
    step: "03",
    title: "KDA Plan Approval & Sanction",
    desc: "Submitting vetted blueprints to Khulna Development Authority (KDA) and coordinating end-to-end regulatory approvals.",
  },
  {
    step: "04",
    title: "Construction & Interior Execution",
    desc: "Executing civil construction or overseeing meticulous site supervision and interior finishing down to the last millimeter.",
  },
];

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  location: string;
  type: string;
  status: 'Completed' | 'In Progress';
  area: string;
  commencementDate: string;
  priceRange: string;
  image: string;
  gallery: string[];
  specs: string;
  desc: string;
  highlights: string[];
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "proj-1",
    slug: "twenty-7-showroom",
    title: "Twenty 7 Showroom Interior Design & Development",
    shortTitle: "Twenty 7 Showroom",
    location: "Khulna",
    type: "Commercial Interior & Development",
    status: "Completed",
    area: "3,500 Sq. Ft.",
    commencementDate: "12, January, 2025",
    priceRange: "25-35 Lac BDT",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: "3,500 sq.ft • Commercial Showroom",
    desc: "A high-concept commercial showroom featuring monolithic reception counters, acoustically treated acoustic ceiling baffles, linear architectural lighting, and open circulation.",
    highlights: [
      "Custom Reception Counter with LED Cove Details",
      "Directional Architectural Luminaire Arrays",
      "Acoustically Tested Conference & Demonstration Zones",
      "Durable High-Traffic Terrazzo Floor Finishes"
    ]
  },
  {
    id: "proj-2",
    slug: "bariras-flat-interior",
    title: "Barira's Flat Interior Design",
    shortTitle: "Barira's Flat Interior",
    location: "Bangladesh · Khulna",
    type: "Residential Interior",
    status: "Completed",
    area: "2,450 Sq. Ft.",
    commencementDate: "18, March, 2025",
    priceRange: "18-24 Lac BDT",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: "2,450 sq.ft • Luxury Apartment",
    desc: "A contemporary residential interior prioritizing serene natural textures, custom slatted wall paneling, discreet storage integration, and soft diffused ambient lighting.",
    highlights: [
      "Concealed Smart Storage Architecture",
      "Warm Oak Fluted Wall Accents & Dining Partition",
      "Designer False Ceiling with Dual Layer Lighting",
      "Bespoke Master Suite Wardrobes with Integrated Vanities"
    ]
  },
  {
    id: "proj-3",
    slug: "shahab-uddin-villa",
    title: "Shahab Uddin Villa",
    shortTitle: "Shahab Uddin Villa",
    location: "Bangladesh · Mymensingh",
    type: "Residential Duplex Villa",
    status: "Completed",
    area: "4,800 Sq. Ft.",
    commencementDate: "02, November, 2024",
    priceRange: "65-80 Lac BDT",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: "4,800 sq.ft • BNBC Compliant Duplex",
    desc: "An architectural statement villa combining exposed brick motifs, cantilevered concrete overhangs for monsoon shade, and double-height family lounges centered around an open courtyard.",
    highlights: [
      "Climate-Responsive Cantilevered Shading Louvers",
      "Central Double-Height Skylit Living Pavilion",
      "Earthquake-Resistant BNBC Reinforced Concrete Frame",
      "Private Landscaped Terrace Gardens"
    ]
  },
  {
    id: "proj-4",
    slug: "setara-general-hospital",
    title: "Setara General Hospital",
    shortTitle: "Setara General Hospital",
    location: "Bangladesh · Khulna",
    type: "Healthcare / Hospital",
    status: "Completed",
    area: "18,500 Sq. Ft.",
    commencementDate: "14, August, 2024",
    priceRange: "2.8-3.5 Crore BDT",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: "18,500 sq.ft • 6-Story Hospital",
    desc: "A multidisciplinary medical center designed with strict hygienic circulation zoning, emergency trauma bay access, heavy diagnostic equipment floor loading, and full KDA sanction.",
    highlights: [
      "Emergency Ambulance Drive-Through & Fast Triage Bay",
      "Vibration-Isolated Diagnostic Imaging Wings",
      "Medical Gas & HVAC Central Shaft Integration",
      "Expedited KDA Commercial Sanction & Fire Safety Clearance"
    ]
  },
  {
    id: "proj-5",
    slug: "kolpolok-2-residential",
    title: "Kolpolok-2 Residential",
    shortTitle: "Kolpolok-2 Residential",
    location: "Bangladesh · Chittagong",
    type: "Apartment",
    status: "Completed",
    area: "2,000 Sq. Ft.",
    commencementDate: "05, May, 2025",
    priceRange: "15-20 Lac BDT",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: "2,000 sq.ft • Luxury Residence",
    desc: "Refined apartment living emphasizing balance and symmetry. Custom coffered ceilings, layered mood lighting, bespoke cabinetry, and tailored spatial efficiency for modern urban lifestyle.",
    highlights: [
      "Coffered Architectural Ceilings with Hidden Warm Glow",
      "Integrated Media Wall with Marble Backsplash",
      "Modular Chef's Kitchen with Quartz Worktops",
      "Harmonious Neutral Palette with Brass & Walnut Details"
    ]
  }
];
