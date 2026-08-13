import { ServiceCategory, FeaturedProject, ProcessStep, InsightArticle, StatItem } from '../types';

export const STATS_DATA: StatItem[] = [
  { value: "15+", label: "Years Experience", description: "Master craft leadership in London prime postcodes" },
  { value: "320+", label: "Master Builds Completed", description: "Complex structural extensions & prime renovations" },
  { value: "98%", label: "Client Satisfaction", description: "Verified independently across high-net-worth clients" },
  { value: "100%", label: "Insured", description: "Comprehensive structural & public liability coverage" }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "structural-new-builds",
    number: "01",
    title: "Structural & New Builds",
    shortOverview: "Heavy structural engineering, concrete foundation pouring, and bespoke master building.",
    iconName: "Building2",
    items: [
      "Home building",
      "General construction",
      "Home addition construction",
      "Accessory building construction",
      "Foundation pouring",
      "Concrete pouring"
    ],
    detailedDescription: "Uncompromising structural contracting for complex London plots. We execute deep foundation piling, heavy-gauge steel frame erections, reinforced concrete pourings, and multi-storey additions with millimetre tolerances.",
    typicalDuration: "12 – 24 Months",
    keyStandards: ["NHBC 10-Year Warranty", "Structural Engineer Sign-off", "Building Control Approved"]
  },
  {
    id: "exterior-envelope",
    number: "02",
    title: "Exterior & Envelope",
    shortOverview: "High-performance building envelope weatherproofing, structural masonry, and roof installations.",
    iconName: "ShieldCheck",
    items: [
      "Exterior structural repairs",
      "Waterproofing",
      "Roof installation",
      "Roof repair",
      "Exterior painting"
    ],
    detailedDescription: "Protecting structural longevity against atmospheric wear. Our envelope team executes sub-grade tanking, leadwork roofing, slate and zinc panel installations, and lime mortar repointing for heritage and modern facades.",
    typicalDuration: "4 – 12 Weeks",
    keyStandards: ["NFRC Certified Roofing", "Delta Membrane Waterproofing", "Grade I/II Listed Facade Compliance"]
  },
  {
    id: "complete-renovations",
    number: "03",
    title: "Complete Renovations",
    shortOverview: "Turnkey luxury transformations, structural reconfigurations, and deep subterranean conversions.",
    iconName: "Sparkles",
    items: [
      "Home renovations",
      "Kitchen remodelling",
      "Bathroom remodelling",
      "Basement remodelling"
    ],
    detailedDescription: "Whole-house structural reimagining. We strip down to load-bearing frameworks, install steel RSJs, execute subterranean excavation under existing London foundations, and deliver seamless open-plan living spaces.",
    typicalDuration: "6 – 16 Months",
    keyStandards: ["Party Wall Act Compliance", "Structural Engineer Inspection", "BREEAM Residential Standard"]
  },
  {
    id: "interiors-finishes",
    number: "04",
    title: "Interiors & Finishes",
    shortOverview: "Architectural joinery, custom stone masonry, bespoke floor fitting, and pristine surfaces.",
    iconName: "Layers",
    items: [
      "Interior decorating",
      "Carpentry services",
      "Flooring",
      "Floor fitting",
      "Flooring repair",
      "Drywall installation",
      "Drywall repair",
      "Tile work installation",
      "Tile work replacement"
    ],
    detailedDescription: "Precision internal master craft where engineering meets tactile luxury. High-spec acoustic plasterboard installation, chevron timber floor alignment over underfloor heating, and book-matched marble tile fitting.",
    typicalDuration: "6 – 20 Weeks",
    keyStandards: ["Acoustic Performance Rating", "Guild of Master Craftsmen", "Laser Level Tolerances ±1mm"]
  },
  {
    id: "me-maintenance",
    number: "05",
    title: "M&E and Maintenance",
    shortOverview: "Mechanical, electrical, plumbing infrastructure, and ongoing asset management.",
    iconName: "Wrench",
    items: [
      "Plumbing services",
      "Plumbing fixture installation",
      "A/C services",
      "Fan installation",
      "Fan repair",
      "General repairs",
      "Installation"
    ],
    detailedDescription: "Sub-surface mechanical and electrical nerve centers. Heat recovery ventilation (MVHR), high-flow unvented hot water cylinders, concealed ducted air conditioning, and full plant room installations.",
    typicalDuration: "2 – 8 Weeks",
    keyStandards: ["Gas Safe Registered", "NICEIC Approved Contractor", "WRAP Energy Efficiency Compliance"]
  }
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "kensington-extension",
    title: "The Kensington Structural Extension",
    location: "Kensington, London W8",
    category: "Structural Extension",
    year: "2025",
    area: "480 sq m",
    layoutType: "large",
    imageUrl: "/src/assets/images/kensington_extension_1786616602763.jpg",
    summary: "A triple-aspect rear glass extension featuring a 12-tonne cantilevered steel framework and subterranean lightwell.",
    fullDescription: "This flagship project involved underpinning an existing Victorian townhouse in Kensington to allow for a dramatic 4.5-metre tall glass and structural steel rear extension. By removing three internal load-bearing brick masonry walls and substituting them with ultra-slim structural steel box frames, we created a column-free garden gallery space with seamless underfloor heating and recessed pocket glazing.",
    structuralHighlight: "12-tonne cantilevered structural steel portal frame with 8m clear glass span.",
    duration: "14 Months",
    valueRange: "£2.4M – £2.8M",
    engineeringSpecs: [
      "Heavy steel RSJ portal frame supporting 4 storeys of historic brickwork above",
      "Underpinning to 3.8m depth using continuous concrete pin sequence",
      "Triple-glazed structural glass box with solar control coating",
      "Integrated MVHR air filtration and radiant floor heat matrix"
    ],
    clientQuote: {
      text: "Infinity London Builders executed an engineering masterpiece. Their attention to structural tolerances and site cleanliness in central Kensington was unparalleled.",
      author: "Lord H. Sterling",
      role: "Property Owner"
    }
  },
  {
    id: "mayfair-commercial",
    title: "Mayfair Commercial Fit-Out",
    location: "Mayfair, London W1J",
    category: "Commercial Fit-Out",
    year: "2025",
    area: "620 sq m",
    layoutType: "square",
    imageUrl: "/src/assets/images/mayfair_commercial_1786616614606.jpg",
    summary: "A high-spec commercial headquarters build incorporating acoustic steel partitions and structural mezzanine floors.",
    fullDescription: "Transforming a historic Mayfair office interior into a state-of-the-art private equity firm headquarters. The scope encompassed total structural demolition of existing modern additions, structural floor reinforcement to house heavy fireproof vault systems, custom brass and bronze architectural joinery, and concealed VRF climate control systems.",
    structuralHighlight: "Floor load capacity upgraded to 7.5 kN/sq m via structural floor beams.",
    duration: "8 Months",
    valueRange: "£1.8M – £2.1M",
    engineeringSpecs: [
      "Acoustic isolation rating of RW 56dB between executive suites",
      "Precision structural steel mezzanine staircase installation",
      "Concealed linear displacement air conditioning ductwork",
      "Bespoke Italian walnut panelling with concealed structural access doors"
    ],
    clientQuote: {
      text: "On time, impeccably managed, and built to military structural standards. The finest main contractor in London.",
      author: "Julian Vance",
      role: "Managing Director, Mayfair Capital Partners"
    }
  },
  {
    id: "belgravia-basement",
    title: "Belgravia Deep Basement Conversion",
    location: "Belgravia, London SW1X",
    category: "Subterranean Build",
    year: "2024",
    area: "350 sq m",
    layoutType: "square",
    imageUrl: "/src/assets/images/belgravia_basement_1786616625155.jpg",
    summary: "A double-depth subterranean concrete basement build with sunken garden courtyard and subterranean pool vault.",
    fullDescription: "Constructed directly beneath a Grade II listed Georgian property in Belgravia. Our heavy civil engineering team sunk continuous secant pile walls and poured a waterproof concrete box foundation to a depth of 7.2 metres, housing a subterranean wellness spa, gym, and private cinema without disturbing neighboring foundations.",
    structuralHighlight: "Double-depth 7.2m subterranean excavation beneath Grade II listed structure.",
    duration: "18 Months",
    valueRange: "£3.6M – £4.2M",
    engineeringSpecs: [
      "Continuous secant piled retaining wall with reinforced concrete ring beam",
      "Dual Delta cavity drain membrane system with twin auto-backup sump pumps",
      "Structural floor slabs poured with watertight C35/45 concrete mix",
      "Hydraulic subterranean glass roof skylight retracting at the push of a button"
    ],
    clientQuote: {
      text: "Excavating 7 metres beneath our listed Belgravia home was daunting, but Infinity's engineering transparency gave us total peace of mind.",
      author: "Evelyn & Marcus Thorne",
      role: "Belgravia Estate Owners"
    }
  },
  {
    id: "chelsea-residential",
    title: "Chelsea Premium Residential Build",
    location: "Chelsea, London SW3",
    category: "Residential Rebuild",
    year: "2024",
    area: "520 sq m",
    layoutType: "tall",
    imageUrl: "/src/assets/images/chelsea_residential_1786616639607.jpg",
    summary: "Complete structural rebuild and rear brick-and-glass elevation overhaul for a 5-storey Chelsea residence.",
    fullDescription: "A comprehensive rebuild retaining only the historic front facade. The entire internal structure was removed and replaced with a modern steel and concrete skeletal frame. The rear features hand-picked handmade Belgian bricks paired with ultra-slim dark bronze structural window systems.",
    structuralHighlight: "Retained heritage front facade with complete internal steel framework replacement.",
    duration: "16 Months",
    valueRange: "£3.2M – £3.8M",
    engineeringSpecs: [
      "Temporary facade retention steel tower erected during internal demolition",
      "Internal steel column matrix supporting concrete floor decks",
      "Handmade brick masonry with flush lime mortar pointing",
      "Bespoke solid oak stair structure cantilevered off structural core"
    ],
    clientQuote: {
      text: "The structural build quality is supreme. Every line is plumb, every junction is flush, and the project was handed over cleanly.",
      author: "Sir Richard Pemberton",
      role: "Homeowner"
    }
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    subtitle: "Feasibility & Engineering Audit",
    description: "Initial site inspection, structural viability assessment, and client briefing. We analyze site constraints, ground conditions, and structural access routes.",
    duration: "1 – 2 Weeks",
    deliverables: ["Initial Structural Viability Report", "Preliminary Budgeting & Cost Plan", "Site Constraints & Logistics Map"],
    qualityGate: "Director-level site approval"
  },
  {
    number: "02",
    title: "Pre-Construction",
    subtitle: "Logistics & Regulatory Approval",
    description: "Finalizing structural calculations with chartered engineers, discharging party wall awards, coordinating London borough highways permits, and procuring long-lead materials.",
    duration: "4 – 8 Weeks",
    deliverables: ["Comprehensive Bill of Quantities", "Party Wall Agreement Sign-off", "Construction Management Plan (CMP)"],
    qualityGate: "Full Building Control & Party Wall Award verification"
  },
  {
    number: "03",
    title: "Structural Build",
    subtitle: "Groundworks & Framework",
    description: "Underpinning, piling, concrete pouring, heavy steel frame erection, and roof envelope construction. The core structural skeleton takes shape under strict safety controls.",
    duration: "16 – 32 Weeks",
    deliverables: ["Waterproof Envelope Sign-off", "Structural Steel Inspection Certificate", "Building Control Interim Approvals"],
    qualityGate: "Chartered Structural Engineer site inspection & sign-off"
  },
  {
    number: "04",
    title: "Internal Fit-Out",
    subtitle: "M&E Infrastructure & Craft",
    description: "First & second fix mechanical and electrical systems, plastering, high-spec joinery, floor fitting, tiling, and bespoke architectural finishes.",
    duration: "12 – 24 Weeks",
    deliverables: ["M&E Pressure & Air Testing Reports", "Acoustic & Thermal Compliance Logs", "Snagging Audit & Resolution Schedule"],
    qualityGate: "100% Zero-Snag Master Craft Inspection"
  },
  {
    number: "05",
    title: "Handover & Beyond",
    subtitle: "Commissioning & Aftercare",
    description: "Final client walkthrough, deep cleaning, building control final certification, handover of O&M digital manuals, and 24/7 client aftercare guarantee.",
    duration: "Ongoing Guarantee",
    deliverables: ["Final Building Control Completion Certificate", "NHBC 10-Year Warranty Documentation", "Digital O&M Operations Manual"],
    qualityGate: "Client formal handover sign-off & 10-year warranty activation"
  }
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: "basement-regulations-london",
    date: "AUG 2026",
    category: "STRUCTURAL ENGINEERING",
    title: "Navigating London Basement Construction & Sub-Structure Regulations",
    readTime: "5 min read",
    imageUrl: "/src/assets/images/belgravia_basement_1786616625155.jpg",
    summary: "Essential guidance on continuous secant piling, party wall notices, and lightwell permissions for subterranean builds in Westminster and Kensington & Chelsea.",
    content: [
      "Subterranean construction in prime London boroughs requires an uncompromising approach to geotechnical risk management and structural engineering. Local planning authorities in Westminster, Kensington & Chelsea, and Camden enforce stringent Subterranean Development Policies.",
      "The primary structural challenge lies in ensuring zero movement in neighboring party walls. Employing continuous secant piled retaining walls with reinforced concrete ring beams allows for deep excavation while preventing settlement in adjacent historic brickwork.",
      "At Infinity London Builders, our pre-construction phase incorporates 3D ground radar scanning and continuous vibration monitoring throughout the excavation cycle, safeguarding both your investment and surrounding heritage assets."
    ],
    author: {
      name: "Marcus Vance, CEng",
      role: "Head of Structural Engineering"
    }
  },
  {
    id: "sustainable-heavy-steel",
    date: "JUL 2026",
    category: "PREMIUM MATERIALS",
    title: "Selecting Sustainable Heavy-Gauge Steel & High-Thermal Materials for Extensions",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/hero_luxury_extension_1786616587617.jpg",
    summary: "How low-carbon recycled European steel sections and triple-glazed vacuum thermal glass create carbon-neutral residential extensions.",
    content: [
      "Modern luxury structural extensions no longer force a compromise between massive open glass spans and energy efficiency. Recent breakthroughs in structural vacuum glazing provide U-values below 0.6 W/m²K, rivaling solid insulated masonry walls.",
      "Pairing these glass units with UK-fabricated 100% recycled structural steel portal frames enables cantilevered designs that maintain structural stability under extreme thermal load shifts.",
      "In this guide, we outline the exact material specifications and structural calculations required to achieve BREEAM 'Outstanding' ratings on London residential extensions."
    ],
    author: {
      name: "David Sterling",
      role: "Director of Construction Operations"
    }
  },
  {
    id: "cantilevered-glass-foundations",
    date: "JUN 2026",
    category: "MASTER ENGINEERING",
    title: "The Structural Precision of Cantilevered Glass and Steel Foundations in Historic Terraces",
    readTime: "6 min read",
    imageUrl: "/src/assets/images/kensington_extension_1786616602763.jpg",
    summary: "Integrating structural glass fins and hidden steel shoe beams to achieve seamless column-free living in Victorian and Georgian homes.",
    content: [
      "Inserting modern light-filled living spaces into narrow Victorian terraced footprints demands clever structural weight redistribution. Removing traditional rear outriggers creates huge load transfers onto slender side party walls.",
      "By engineering hidden steel shoe beams tied into deeper spread footings or micro-piles, structural engineers can support up to 6 storeys of masonry above without requiring visible interior columns.",
      "The resulting open span creates a pure architectural volume where indoor and garden environments blend continuously, framed by minimalist bronze anodized structural profiles."
    ],
    author: {
      name: "Eleanor Hayes, RIBA Cons",
      role: "Senior Project Architect & Liaison"
    }
  }
];
