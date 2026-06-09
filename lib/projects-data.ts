export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  client: string;
  year: string;
  challenge: string;
  solution: string;
  scope: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "gokul-haridwar",
    title: "Gokul Haridwar",
    category: "Real Estate",
    description: "Your Gateway to Serene Living. A premium real estate project nestled amidst nature's embrace.",
    image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg",
    tags: ["Branding", "Logo", "Print"],
    client: "Gokul Developers",
    year: "2024",
    challenge: "Gokul Haridwar was launching a premium residential project in a highly saturated suburban market. They needed to establish a unique positioning that emphasized peace, nature, and community living, rather than just selling brick-and-mortar apartments. The brand collateral had to resonate with upper-middle-class families looking for a peaceful lifestyle upgrade.",
    solution: "We designed a comprehensive brand identity that captured the essence of serene living. This included a natural, grounded colour palette, custom logo marks depicting nature and architecture, premium brochures with gold embossing, and physical site-branding elements like banners, standees and entrance signage. Every touchpoint — from the logo to the sales brochure — was crafted to convey calm, premium living.",
    scope: [
      "Brand Identity & Logo Design",
      "Premium Sales Brochure Design",
      "Banner & Standee Design",
      "Stationery & Print Collateral",
      "Launch Invitation Card Design"
    ],
    gallery: [
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg",
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg",
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg"
    ]
  },
  {
    id: 2,
    slug: "the-park",
    title: "The Park",
    category: "Real Estate",
    description: "Premier real estate project offering luxury living in a serene environment with world-class amenities.",
    image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg",
    tags: ["Branding", "Luxury", "Print"],
    client: "Park Infra Group",
    year: "2024",
    challenge: "The Park required an upscale, premium brand presentation for a high-rise luxury apartment project. The client wanted to attract high-net-worth individuals (HNIs) and NRI buyers. The print collateral had to reflect world-class sophistication, highlighting premium amenities like rooftop pools, gymnasiums, and smart home automation.",
    solution: "We developed a minimalist, luxury-focused brand system. Using an elegant black-and-gold visual theme, we designed premium sales brochures, polished 3D-layout presentation decks, and curated VIP launch invitation cards. Every piece of print collateral reinforced an exclusive, high-end feel.",
    scope: [
      "Luxury Brand Guidelines",
      "Premium Brochure Design",
      "3D Renderings Presentation Design",
      "VIP Invitation Card Design",
      "Print Collateral & Stationery"
    ],
    gallery: [
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg",
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg",
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg"
    ]
  },
  {
    id: 3,
    slug: "rajani-group",
    title: "Rajani Group",
    category: "Corporate",
    description: "Complete brand overhaul and unified print identity for one of the region's leading business groups.",
    image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg",
    tags: ["Identity", "Branding", "Print"],
    client: "Rajani Group of Companies",
    year: "2023",
    challenge: "Rajani Group is a multi-sector conglomerate with businesses in manufacturing, packaging, and logistics. Over decades, their individual company brands had developed separately, leading to a fragmented corporate identity. They needed a unified brand architecture that presented them as a cohesive, powerful industrial leader, alongside a refreshed suite of corporate print collateral.",
    solution: "We created a unified corporate branding strategy under a single master brand architecture. We designed a clean, modern corporate monogram and implemented strict brand guidelines across all subsidiaries. We rolled out cohesive stationery, brochures and corporate profiles that presented the group as one powerful industrial leader.",
    scope: [
      "Corporate Identity Restructuring",
      "Master Brand Guidelines",
      "Corporate Brochure Design",
      "Business Stationery Design",
      "B2B Print Collateral"
    ],
    gallery: [
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg",
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg",
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg"
    ]
  },
  {
    id: 4,
    slug: "ganga-pipes",
    title: "Ganga Pipes",
    category: "Corporate",
    description: "Comprehensive branding, packaging and print collateral for a leading pipe manufacturing company.",
    image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg",
    tags: ["Branding", "Print", "Packaging"],
    client: "Ganga PVC Pipes Pvt. Ltd.",
    year: "2024",
    challenge: "Ganga Pipes needed to strengthen their dealer and distributor network across western India. In the manufacturing sector, sales are heavily dependent on dealer loyalty and brand recall in retail shops. The challenge was to create high brand visibility inside retail hardware stores and design promotional catalogs that made product technical specifications easy for dealers to understand.",
    solution: "We initiated a dealer-focused branding campaign. We designed custom retail shop boards, visual point-of-sale displays, and simplified catalog folders that categorized industrial, agricultural, and domestic pipes. We also created dealer motivation packages and printed corporate profile booklets detailing their state-of-the-art manufacturing facility.",
    scope: [
      "Dealers Point-of-Sale Branding",
      "Product Catalog & Brochure Design",
      "Retail Shop Front Boards Design",
      "Packaging & Label Design",
      "Dealer Loyalty Event Collaterals"
    ],
    gallery: [
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg",
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg",
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg"
    ]
  },
  {
    id: 5,
    slug: "deepsy-food",
    title: "Deepsy Food",
    category: "FMCG",
    description: "Brand identity, packaging and label design for a fast-growing food brand.",
    image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg",
    tags: ["Packaging", "Label", "Branding"],
    client: "Deepsy Food Products",
    year: "2024",
    challenge: "Deepsy Food was launching a new range of packaged snacks and spices. In FMCG, packaging is the first point of interaction with the customer, and shelf-impact is everything. The client needed modern, appetizing, and compliant packaging layouts that stood out in local grocery stores.",
    solution: "We created vibrant, illustrative packaging systems for their entire snack and spice catalog, using high-impact colours and custom food illustrations that suggested quality and taste. We ensured all nutritional and regulatory information complied with FSSAI rules. We extended the identity across labels, tags and point-of-sale print material for a consistent shelf presence.",
    scope: [
      "Product Packaging & Label Design",
      "Vibrant Logo & Brand Identity",
      "FSSAI Regulatory Compliance Layout",
      "Product Tag & Sticker Design",
      "Point-of-Sale Print Material"
    ],
    gallery: [
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg",
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg",
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg"
    ]
  },
  {
    id: 6,
    slug: "vaishnawi-maritime",
    title: "Vaishnawi Maritime",
    category: "Corporate",
    description: "Professional branding and print collateral for a maritime services company.",
    image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg",
    tags: ["Identity", "Print", "Corporate"],
    client: "Vaishnawi Maritime Services",
    year: "2023",
    challenge: "Vaishnawi Maritime required highly professional B2B marketing collateral and a polished corporate brand identity to pitch their logistics, cargo handling, and port services to international shipping corporations. The branding needed to convey extreme reliability, safety, compliance, and global reach.",
    solution: "We designed a corporate brand identity using deep ocean blues and whites. We developed high-quality print corporate profiles (pitch decks) highlighting their fleet size, safety certifications, and track record, along with full office stationery and exhibition graphics.",
    scope: [
      "B2B Corporate Identity",
      "Corporate Pitch Profile Design",
      "Corporate Brochure Design",
      "Office Stationery & Collateral",
      "Banner & Standee Design"
    ],
    gallery: [
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg",
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg",
      "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg"
    ]
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
