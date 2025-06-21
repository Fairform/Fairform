// app/lib/constants/index.ts
export const FEATURES = [
  {
    title: "Instant Policy Generation",
    description: "Create audit-ready documents in 8 seconds with AI",
    icon: "🚀"
  },
  {
    title: "Real-time Compliance Monitoring",
    description: "Automatic alerts when regulations change",
    icon: "🔔"
  },
  {
    title: "Multi-format Export",
    description: "Download as PDF, Word, or integrate via API",
    icon: "📤"
  },
  {
    title: "Audit-proof Documentation",
    description: "Embedded compliance metadata for auditors",
    icon: "🛡️"
  },
  {
    title: "Industry-specific Templates",
    description: "Pre-built for construction, health, retail and trades",
    icon: "📋"
  },
  {
    title: "No Technical Skills Needed",
    description: "Designed for business owners, not lawyers",
    icon: "👨‍💼"
  }
];

export const STATS = [
  { value: "8s", label: "Policy generation" },
  { value: "99.4%", label: "Regulation accuracy" },
  { value: "0", label: "Audit failures" },
  { value: "1,200+", label: "Businesses" }
];

export const PRICING_PLANS = [
  {
    tier: "Essential",
    price: "$290/mo",
    features: ["50 docs/month", "Basic templates", "Email alerts"],
    cta: "Start Basic"
  },
  {
    tier: "Professional",
    price: "$500/mo",
    features: ["Unlimited docs", "Full module access", "Priority support"],
    cta: "Get Started",
    featured: true
  },
  {
    tier: "Enterprise",
    price: "Custom",
    features: ["Dedicated CSM", "API integration", "Custom clauses"],
    cta: "Contact Sales"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Cut our compliance prep time from 2 weeks to 20 minutes. Essential for Australian businesses.",
    author: "Sarah K.",
    role: "Construction Manager",
    industry: "construction"
  },
  {
    quote: "Passed our first audit with zero findings. The policy metadata saved us during verification.",
    author: "Michael T.",
    role: "Healthcare Director",
    industry: "healthcare"
  },
  {
    quote: "Replaced our $15k/year legal retainer. The real-time regulation updates are priceless.",
    author: "James L.",
    role: "Retail Owner",
    industry: "retail"
  }
];

export const NAV_LINKS = [
  { name: "Product", href: "#product" },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources" }
];

export const INDUSTRY_REGULATIONS = {
  construction: [
    "Work Health and Safety Act 2011", 
    "Building Code 2016",
    "AS/NZS 4801:2001"
  ],
  healthcare: [
    "Privacy Act 1988", 
    "Therapeutic Goods Act 1989",
    "National Safety Standards"
  ],
  retail: [
    "Australian Consumer Law", 
    "Competition and Consumer Act",
    "Privacy Act 1988"
  ],
  trades: [
    "Electrical Safety Regulation", 
    "Plumbing Code of Australia",
    "HVAC Standards AS/NZS 5141"
  ]
};

export const FOOTER_LINKS = [
  { title: "Product", links: ["Features", "Industries", "Security"] },
  { title: "Company", links: ["About", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Compliance"] }
];

export const COMPLIANCE_DISCLAIMER = 
  "AI-generated documents require professional verification. Fairform is not a law firm.";
