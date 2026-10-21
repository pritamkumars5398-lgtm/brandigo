"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sun,
  Moon,
  Compass,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Layers,
  Flame,
  Droplets,
  Wind,
  Mountain,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Star,
  Check,
  Zap,
  Play,
} from "lucide-react";
import { useTheme } from "@/components/ThemeContext";

// Zodiac Signs Data
interface ZodiacProfile {
  id: string;
  name: string;
  sanskrit: string;
  symbol: string;
  dates: string;
  element: "Fire" | "Earth" | "Air" | "Water";
  rulingPlanet: string;
  colors: { name: string; hex: string }[];
  shapes: string[];
  direction: string;
  avoid: string;
  growthMantra: string;
  archetype: string;
  description: string;
}

const ZODIAC_SIGNS: ZodiacProfile[] = [
  {
    id: "aries",
    name: "Aries",
    sanskrit: "Mesha",
    symbol: "♈",
    dates: "Mar 21 - Apr 19",
    element: "Fire",
    rulingPlanet: "Mars (Mangal)",
    colors: [
      { name: "Crimson Red", hex: "#DC2626" },
      { name: "Radiant Orange", hex: "#F97316" },
      { name: "Golden Amber", hex: "#F59E0B" },
    ],
    shapes: ["Sharp Upward Triangles", "Aggressive Forward Angles", "Dynamic Chevron Lines"],
    direction: "South & East (Agni & Surya Kona)",
    avoid: "Dull Greys, Black tones, downward droop curves, broken line segments",
    growthMantra: "Unstoppable Market Leadership & First-Mover Dominance",
    archetype: "The Pioneer & Trailblazer",
    description: "Aries logos require decisive energetic velocity, bold sharp ascents, and high-contrast red-gold accents to command respect and fast decision-making.",
  },
  {
    id: "taurus",
    name: "Taurus",
    sanskrit: "Vrishabha",
    symbol: "♉",
    dates: "Apr 20 - May 20",
    element: "Earth",
    rulingPlanet: "Venus (Shukra)",
    colors: [
      { name: "Emerald Green", hex: "#059669" },
      { name: "Royal Forest", hex: "#065F46" },
      { name: "Powder Pink", hex: "#F472B6" },
      { name: "Cream Ivory", hex: "#FDF4DC" },
    ],
    shapes: ["Grounded Squares", "Harmonious Rectangles", "Soft Luxury Oval Contours"],
    direction: "South-East (Shukra) & North-West",
    avoid: "Overly jagged spikes, fiery neon crimson, unstable chaotic curves",
    growthMantra: "Generational Wealth Accumulation & Aesthetic Luxury",
    archetype: "The Wealth Custodian & Luxury Artisan",
    description: "Taurus brand marks benefit from solid geometric symmetry, grounding earth tones, and luxurious Venusian curves that project immovable stability.",
  },
  {
    id: "gemini",
    name: "Gemini",
    sanskrit: "Mithuna",
    symbol: "♊",
    dates: "May 21 - Jun 20",
    element: "Air",
    rulingPlanet: "Mercury (Budha)",
    colors: [
      { name: "Vibrant Lime", hex: "#84CC16" },
      { name: "Electric Cyan", hex: "#06B6D4" },
      { name: "Solar Yellow", hex: "#FBBF24" },
    ],
    shapes: ["Dual Parallel Curves", "Hexagonal Interlinks", "Dynamic Infinity Loops"],
    direction: "North (Kubera / Mercury Prosperity)",
    avoid: "Heavy solid blocks, dark maroon, cluttered dark textures",
    growthMantra: "Rapid Viral Communication & Omnichannel Network Expansion",
    archetype: "The Master Communicator & Connector",
    description: "Gemini logos demand airiness, dual harmonious elements, and Mercury-tuned greens to unlock effortless high-volume customer conversion loops.",
  },
  {
    id: "cancer",
    name: "Cancer",
    sanskrit: "Karka",
    symbol: "♋",
    dates: "Jun 21 - Jul 22",
    element: "Water",
    rulingPlanet: "Moon (Chandra)",
    colors: [
      { name: "Pearl White", hex: "#F8FAFC" },
      { name: "Shimmer Silver", hex: "#CBD5E1" },
      { name: "Aquatic Teal", hex: "#0D9488" },
    ],
    shapes: ["Concentric Rings", "Fluid Wave Formations", "Crescent Curves"],
    direction: "North-West (Chandra Corner) & North",
    avoid: "Sharp aggressive points, dark pitch black, blazing fiery spikes",
    growthMantra: "Unshakable Brand Loyalty & Deep Emotional Customer Connection",
    archetype: "The Empathetic Healer & Nurturer",
    description: "Cancer brand identities thrive on fluid lunar waves, silver-pearl sheen, and cyclical geometries that evoke profound trust and family-like retention.",
  },
  {
    id: "leo",
    name: "Leo",
    sanskrit: "Simha",
    symbol: "♌",
    dates: "Jul 23 - Aug 22",
    element: "Fire",
    rulingPlanet: "Sun (Surya)",
    colors: [
      { name: "Imperial Gold", hex: "#EAB308" },
      { name: "Royal Saffron", hex: "#EA580C" },
      { name: "Deep Ruby", hex: "#BE123C" },
    ],
    shapes: ["Radiating Sunburst Rays", "Crowned Sovereign Crests", "Central Focal Spirals"],
    direction: "East (Surya / Universal Power Direction)",
    avoid: "Dull washed-out pastels, fragmented scattered lines, cold ice blues",
    growthMantra: "Sovereign Industry Authority & High-Ticket Prestige",
    archetype: "The King & Visionary Commander",
    description: "Leo brand marks need centralized solar dominance, radiating authority lines, and radiant royal metallics to command supreme market trust.",
  },
  {
    id: "virgo",
    name: "Virgo",
    sanskrit: "Kanya",
    symbol: "♍",
    dates: "Aug 23 - Sep 22",
    element: "Earth",
    rulingPlanet: "Mercury (Budha)",
    colors: [
      { name: "Olive Earth", hex: "#65A30D" },
      { name: "Deep Sage", hex: "#047857" },
      { name: "Classic Navy", hex: "#1E3A8A" },
    ],
    shapes: ["Golden Ratio Grids", "Mathematical Precision Nodes", "Symmetrical Polygons"],
    direction: "North (Budha / Commerce Direction)",
    avoid: "Chaotic messy gradients, irregular asymmetric blobs, fiery neon red",
    growthMantra: "Flawless Analytical Precision & Enterprise Scalability",
    archetype: "The Master Craftsman & Analyst",
    description: "Virgo identities excel with mathematical grid precision, clean structural kerning, and grounding Mercury earth tones that reflect zero-defect excellence.",
  },
  {
    id: "libra",
    name: "Libra",
    sanskrit: "Tula",
    symbol: "♎",
    dates: "Sep 23 - Oct 22",
    element: "Air",
    rulingPlanet: "Venus (Shukra)",
    colors: [
      { name: "Champagne Gold", hex: "#FCD34D" },
      { name: "Pastel Lavender", hex: "#C084FC" },
      { name: "Soft Sky Azure", hex: "#38BDF8" },
    ],
    shapes: ["Perfect Bilateral Symmetry", "Equilateral Balances", "Harmonious Serif Curves"],
    direction: "West & North-West",
    avoid: "Imbalanced lopsided weights, coarse thick brutalist borders, muddy browns",
    growthMantra: "Effortless Partnership Harmony & High-Converting Aesthetics",
    archetype: "The Diplomat & Harmonizer",
    description: "Libra requires immaculate visual weight balance, graceful Venusian proportions, and airy champagne hues that establish instant relationship harmony.",
  },
  {
    id: "scorpio",
    name: "Scorpio",
    sanskrit: "Vrishchika",
    symbol: "♏",
    dates: "Oct 23 - Nov 21",
    element: "Water",
    rulingPlanet: "Mars / Ketu",
    colors: [
      { name: "Midnight Maroon", hex: "#881337" },
      { name: "Obsidian Black", hex: "#0F172A" },
      { name: "Deep Garnet", hex: "#991B1B" },
    ],
    shapes: ["Sharp Chevron Stingers", "Polygonal Facets", "Enigmatic Shield Geometry"],
    direction: "South (Mars / Protective Shield)",
    avoid: "Flimsy whimsical curves, child-like bubble shapes, pastel peach",
    growthMantra: "Monopolistic Market Power & Transformational Resilience",
    archetype: "The Strategic Transformer",
    description: "Scorpio demands bold protective shields, intense dark richness, and high-potency Martian contours that instill awe, exclusivity, and profound resilience.",
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    sanskrit: "Dhanu",
    symbol: "♐",
    dates: "Nov 22 - Dec 21",
    element: "Fire",
    rulingPlanet: "Jupiter (Guru / Brihaspati)",
    colors: [
      { name: "Regal Purple", hex: "#7E22CE" },
      { name: "Royal Indigo", hex: "#4338CA" },
      { name: "Turmeric Gold", hex: "#F59E0B" },
    ],
    shapes: ["Upward Aiming Arrows", "Expansive Horizon Arcs", "Dynamic Diagonals"],
    direction: "North-East (Ishanya / Guru Cosmic Direction)",
    avoid: "Constrictive boxes, flat downward lines, gloomy dark charcoals",
    growthMantra: "Limitless Global Expansion & Higher Purpose Legacy",
    archetype: "The Philosopher & Global Explorer",
    description: "Sagittarius brand logos leverage Jupiter's 45-degree upward trajectory arrows and royal purple/gold frequencies to drive overseas and national expansion.",
  },
  {
    id: "capricorn",
    name: "Capricorn",
    sanskrit: "Makara",
    symbol: "♑",
    dates: "Dec 22 - Jan 19",
    element: "Earth",
    rulingPlanet: "Saturn (Shani)",
    colors: [
      { name: "Slate Charcoal", hex: "#334155" },
      { name: "Midnight Steel", hex: "#1E293B" },
      { name: "Deep Bronze", hex: "#78350F" },
    ],
    shapes: ["Solid Pyramidal Fortress", "Hexagonal Blocks", "Heavy Monumental Monograms"],
    direction: "West (Shani Direction / Long-Term Endurance)",
    avoid: "Flimsy thin hairlines, childish playful pastels, chaotic asymmetrical arcs",
    growthMantra: "Unshakable Institutional Durability & Decade-Long Dominance",
    archetype: "The Master Architect & Institutional Ruler",
    description: "Capricorn logos must anchor on solid structural foundations, Shani steel/bronze tones, and architectural stability that signal permanent corporate stature.",
  },
  {
    id: "aquarius",
    name: "Aquarius",
    sanskrit: "Kumbha",
    symbol: "♒",
    dates: "Jan 20 - Feb 18",
    element: "Air",
    rulingPlanet: "Saturn / Rahu",
    colors: [
      { name: "Electric Cyan", hex: "#06B6D4" },
      { name: "Deep Cobalt", hex: "#1D4ED8" },
      { name: "Luminescent Violet", hex: "#8B5CF6" },
    ],
    shapes: ["Oscillating Wave Lines", "Futuristic Intersecting Nodes", "Quantum Circuit Rings"],
    direction: "West & North-West",
    avoid: "Stuffy vintage filigree, heavy brown mud tones, static lifeless squares",
    growthMantra: "Disruptive Technological Innovation & Mass Community Resonance",
    archetype: "The Futuristic Visionary & Disruptor",
    description: "Aquarius brand marks utilize quantum waves, futuristic electrical blue-violet frequencies, and inventive geometry that attracts tech capital and community loyalty.",
  },
  {
    id: "pisces",
    name: "Pisces",
    sanskrit: "Meena",
    symbol: "♓",
    dates: "Feb 19 - Mar 20",
    element: "Water",
    rulingPlanet: "Jupiter (Guru)",
    colors: [
      { name: "Aquamarine Blue", hex: "#38BDF8" },
      { name: "Seafoam Emerald", hex: "#10B981" },
      { name: "Soft Golden Glow", hex: "#FBBF24" },
    ],
    shapes: ["Dual Interlocking Spirals", "Harmonic Golden Ripples", "Infinity Water Loops"],
    direction: "North-East (Ishanya / Divine Gateway)",
    avoid: "Harsh brutalist boxes, aggressive bloody crimsons, sharp piercing thorns",
    growthMantra: "Transcendent Global Empathy & Intuitive Customer Magnetism",
    archetype: "The Creative Dreamer & Intuitive Mystic",
    description: "Pisces logos require fluid dual spiral curves, seafoam Jupiter glow, and seamless sacred harmonics that captivate high-net-worth intuition-driven clientele.",
  },
];

// Planetary Conflicts Diagnostic Data
const PLANETARY_CONFLICTS = [
  {
    title: "Mercury Conflict",
    subtitle: "Weak Sales & Marketing Bleed",
    planet: "Mercury (Budha)",
    symptom:
      "High ad spend with near-zero conversions. Sales pitches encounter hesitation. Communication bottlenecks plague client communication.",
    remedy:
      "Inject Mercury-aligned green spectrums (#059669) and open dual-flow geometry to restore verbal and digital commercial traction.",
    icon: Wind,
    badgeColor: "#10B981",
  },
  {
    title: "Saturn Block",
    subtitle: "Severe Growth & Payment Delays",
    planet: "Saturn (Shani)",
    symptom:
      "Extreme delays in closing contracts, client payments stuck for months, structural friction across vendor channels and expansion hurdles.",
    remedy:
      "Stabilize horizontal base planes and implement 6-sided hexagonal geometry to harmonize Saturn's test of discipline into long-term wealth.",
    icon: Mountain,
    badgeColor: "#64748B",
  },
  {
    title: "Mars Imbalance",
    subtitle: "High Employee Turnover & Friction",
    planet: "Mars (Mangal)",
    symptom:
      "Workplace arguments, frequent resignation of key talent, sudden regulatory friction, and aggressive disputes with business partners.",
    remedy:
      "Dampen over-aggressive sharp 90° blades with rounded transition fillets and soothing cooling undertones to foster team synergy.",
    icon: Flame,
    badgeColor: "#EF4444",
  },
  {
    title: "Lunar Drain",
    subtitle: "Volatile Cash Flows & Revenue Leaks",
    planet: "Moon (Chandra)",
    symptom:
      "Unpredictable revenue swings — months of huge cash inflows followed by sudden, inexplicable cash leaks and working capital stress.",
    remedy:
      "Introduce cyclical closed water loops and silver-pearl stabilizing balances to secure smooth, perpetual cash flow liquidity.",
    icon: Droplets,
    badgeColor: "#06B6D4",
  },
  {
    title: "Venus Barrier",
    subtitle: "Zero Brand Loyalty & Poor Retention",
    planet: "Venus (Shukra)",
    symptom:
      "Clients shop solely on cheap price, never become brand advocates, and jump ship at the slightest discount from competitors.",
    remedy:
      "Incorporate the Golden Ratio (1:1.618) and luxury Venusian curvature to activate subconscious aesthetic desire and premium pricing power.",
    icon: Sparkles,
    badgeColor: "#EC4899",
  },
  {
    title: "Solar Block",
    subtitle: "Underappreciated Founder & Zero Authority",
    planet: "Sun (Surya)",
    symptom:
      "The founder works tirelessly but receives no industry prestige. The brand is perceived as a commodity and is easily overshadowed.",
    remedy:
      "Align core visual focal points to the East cardinal axis and infuse radiant amber/gold frequencies to command instant executive reverence.",
    icon: Sun,
    badgeColor: "#F59E0B",
  },
];

// Diagnostic Methodology Steps
const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Founder Chart & Astrological Discovery",
    desc: "We analyze the primary founder's birth chart (Kundli), Date of Birth, Moon Sign (Rashi), and planetary dasha cycles alongside incorporation dates.",
  },
  {
    step: "02",
    title: "Geometric Grid & Sacred Ratio Audit",
    desc: "Deconstructing your existing or proposed brand mark using Golden Ratio (Phi), sacred Fibonacci sequences, and Vedic Yantra angular alignments.",
  },
  {
    step: "03",
    title: "Color Frequency & Planetary Wavelength Mapping",
    desc: "Formulating primary, secondary, and accent Pantone shades corresponding to your supportive planetary spectrums while omitting antagonistic wavelengths.",
  },
  {
    step: "04",
    title: "Typography & Vastu Directional Optimization",
    desc: "Customizing typographic kerning, line-weight balance, and ascending directional strokes to project unwavering security and forward momentum.",
  },
  {
    step: "05",
    title: "Diagnostic Remediation & Cosmic Alignment Plan",
    desc: "Developing a comprehensive Brand Alignment Blueprint that highlights energetic bottlenecks, directional placement guides, and stationery rules.",
  },
  {
    step: "06",
    title: "Strategic Design Hand-off & High-Res Vector Kit",
    desc: "Delivering complete vector master assets (AI, EPS, SVG, PDF), brand book with Vastu placement guidelines for offices, signages, and digital media.",
  },
];

// Pricing Packages for Scientific Logo
const PACKAGES = [
  {
    name: "Silver Plan",
    badge: "Essential Alignment",
    price: "Standard",
    desc: "Ideal for solo entrepreneurs and emerging startups looking to harmonize their initial brand mark.",
    features: [
      { text: "Scientific & Astrology Logo Design (2 Concepts)", included: true },
      { text: "Telephonic Consultation with Astrologer", included: true },
      { text: "Zodiac Element & Color Frequency Guide", included: true },
      { text: "High-Resolution Vector Assets (AI, EPS, PNG)", included: true },
      { text: "Business Card Stationery Alignment", included: false },
      { text: "Office Signboard Vastu Direction Guide", included: false },
      { text: "In-Person Astrological Deep-Dive Session", included: false },
    ],
    popular: false,
    ctaText: "Select Silver Plan",
  },
  {
    name: "Gold Plan",
    badge: "★ MOST POPULAR",
    price: "Growth Tier",
    desc: "Our most chosen solution for established businesses seeking powerful market traction and growth.",
    features: [
      { text: "Scientific & Astrology Logo Design (3 Concepts)", included: true },
      { text: "Comprehensive Video Consultation with Astrologer", included: true },
      { text: "Zodiac, Vastu & Numerology Alignment Report", included: true },
      { text: "Premium Business Card Design (Vastu Aligned)", included: true },
      { text: "Social Media Identity & Display Kit", included: true },
      { text: "Letterhead & Envelope Design", included: false },
      { text: "Office Signboard Vastu Direction Guide", included: false },
    ],
    popular: true,
    ctaText: "Select Gold Plan",
  },
  {
    name: "Diamond Plan",
    badge: "Executive Suite",
    price: "Corporate Suite",
    desc: "Full corporate identity alignment for expanding brands requiring multi-asset harmony and deep remedies.",
    features: [
      { text: "Scientific & Astrology Logo Design (4 Concepts)", included: true },
      { text: "In-Depth 1-on-1 Astrologer & Designer Session", included: true },
      { text: "Full Corporate Stationery (Card, Letterhead, Envelope)", included: true },
      { text: "Founder Signature & Business Card Numerology", included: true },
      { text: "Office Entrance & Signboard Vastu Blueprint", included: true },
      { text: "Complete Brand Guidelines Manual (PDF)", included: true },
      { text: "Physical Meet & Multi-Founder Chart Harmony", included: false },
    ],
    popular: false,
    ctaText: "Select Diamond Plan",
  },
  {
    name: "Platinum Plan",
    badge: "Enterprise Master",
    price: "Custom Enterprise",
    desc: "The ultimate cosmic brand transformation with multi-founder alignment and physical consultation.",
    features: [
      { text: "Unlimited Scientific Logo Concept Revisions", included: true },
      { text: "Multi-Founder Kundli & Chart Harmonization", included: true },
      { text: "Full Corporate Identity & Packaging Alignment", included: true },
      { text: "Physical / Offline In-Person Strategy Session", included: true },
      { text: "Sign Board, Bill Book & Uniform Directional Rules", included: true },
      { text: "Office Space Vastu Remediation & Gem Recommendations", included: true },
      { text: "Lifetime Vector Master Archive & Dedicated Support", included: true },
    ],
    popular: false,
    ctaText: "Select Platinum Plan",
  },
];

// FAQs
const FAQS = [
  {
    q: "How does a Scientific Logo differ from a standard graphic design logo?",
    a: "Standard logos focus purely on aesthetics and surface appeal. A Scientific Logo combines fine modern graphic design with Vedic Astrology, Vastu Shastra, Sacred Geometry (Golden Ratio), and planetary color vibrations. We analyze the founder's birth chart, ruling elements, and industry sector to ensure the logo acts as an energetic conduit for trust, stability, and commercial success.",
  },
  {
    q: "What details do I need to provide for a Scientific Logo alignment?",
    a: "We require: (1) Founder's Date, Exact Time, and Place of Birth, (2) Business Name & Industry Sector, (3) Key target market and business goals, and (4) If existing, your current brand assets. For companies with multiple partners, we analyze chart compatibility to find universal harmonic elements.",
  },
  {
    q: "Can you optimize our existing company logo without a complete redesign?",
    a: "Yes! Many enterprise clients come to us with established brand equity that they cannot discard. Our Diagnostic Grid Audit pinpoints subtle geometric angular adjustments, line-weight balances, and color wavelength refinements that preserve brand recognition while eliminating planetary friction.",
  },
  {
    q: "How does Vastu Shastra apply to 2D digital logos and stationery?",
    a: "Vastu is the science of directional energy and elemental balance (Fire, Earth, Air, Water, Space). In visual design, direction is represented through geometric orientation — ascending angles, balance between horizontal (stability) and vertical (growth), and placement of visual weight on stationery and signages relative to cardinal compass directions.",
  },
  {
    q: "How long does the scientific logo creation process take?",
    a: "Typically 5 to 8 business days. The process includes deep astrological chart calculation, sacred geometry grid construction, multiple bespoke design iterations, and a personalized consultative walkthrough with our team.",
  },
];

export default function ScientificLogoClient() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [selectedZodiac, setSelectedZodiac] = useState<ZodiacProfile>(ZODIAC_SIGNS[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const cardBg = isDark ? "#0c1018" : "#ffffff";
  const borderCol = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)";
  const headingCol = isDark ? "#ffffff" : "#0f172a";
  const textCol = isDark ? "rgba(255, 255, 255, 0.75)" : "#475569";
  const sectionBg = isDark ? "#06090f" : "#f8fafc";

  const whatsappBaseUrl = "https://wa.me/919979992804?text=";

  return (
    <div style={{ backgroundColor: isDark ? "#06090e" : "#ffffff", color: headingCol, transition: "background 0.3s ease" }}>
      
      {/* =========================================================================
          HERO SECTION: Vedic Astro-Vastu & Sacred Geometry Brand Engineering
      ========================================================================= */}
      <section
        style={{
          position: "relative",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: "100px",
          paddingBottom: "45px",
          backgroundColor: "#060b13",
        }}
      >
        {/* Full-bleed 3D Vedic Sage Background Artwork with Seamless Blend */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/scientific-hero-sage.jpg')",
            backgroundPosition: "right center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        />

        {/* Seamless Horizontal Blend Overlay: solid dark on left for text, softly blending into the 3D artwork */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #060b13 0%, #060b13 36%, rgba(6,11,19,0.92) 48%, rgba(6,11,19,0.55) 64%, transparent 82%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Top Navbar Soft Blend */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100px",
            background: "linear-gradient(to bottom, #060b13 0%, rgba(6,11,19,0.8) 50%, transparent 100%)",
            zIndex: 3,
            pointerEvents: "none",
          }}
        />

        {/* Bottom Section Soft Blend */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to top, #060b13 0%, rgba(6,11,19,0.7) 40%, transparent 100%)",
            zIndex: 3,
            pointerEvents: "none",
          }}
        />

        {/* Warm Golden Ambient Glow behind content */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "6%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,130,32,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* MAIN HERO CONTENT (Left Column) */}
        <div className="site-wrap relative z-10" style={{ maxWidth: "1280px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 xl:col-span-7 text-left">
              
              {/* Eyebrow: Glowing Om Symbol & Vedic Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "24px", height: "1px", background: "linear-gradient(to left, #f58220, transparent)" }} />
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      border: "1.5px solid rgba(245, 130, 32, 0.7)",
                      background: "radial-gradient(circle, rgba(245, 130, 32, 0.25) 0%, rgba(6, 11, 19, 0.95) 75%)",
                      boxShadow: "0 0 16px rgba(245, 130, 32, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#f58220",
                      fontSize: "18px",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    ॐ
                  </div>
                  <div style={{ width: "16px", height: "1px", background: "#f58220" }} />
                </div>

                <span
                  style={{
                    color: "#f58220",
                    fontSize: "11.5px",
                    fontWeight: 700,
                    letterSpacing: "2.2px",
                    textTransform: "uppercase",
                    textShadow: "0 0 12px rgba(245, 130, 32, 0.3)",
                  }}
                >
                  Vedic Astro-Vastu &amp; Sacred Geometry Brand Engineering
                </span>
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                  fontWeight: 700,
                  lineHeight: 1.14,
                  color: "#ffffff",
                  marginBottom: "18px",
                  letterSpacing: "-0.015em",
                }}
              >
                Align Your Brand Identity with{" "}
                <span
                  style={{
                    color: "#f58220",
                    textShadow: "0 0 20px rgba(245, 130, 32, 0.3)",
                  }}
                >
                  Sacred Geometry
                </span>{" "}
                &amp;{" "}
                <span
                  style={{
                    color: "#38bdf8",
                    textShadow: "0 0 20px rgba(56, 189, 248, 0.35)",
                  }}
                >
                  Planetary Energies
                </span>
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: "clamp(0.92rem, 1.25vw, 1.05rem)",
                  color: "rgba(255, 255, 255, 0.78)",
                  lineHeight: 1.74,
                  maxWidth: "540px",
                  marginBottom: "28px",
                }}
              >
                Every design element possesses an energetic wavelength. We align your corporate
                logo, signature pattern, and name vibrations to match your zodiac ruler, planetary
                elements, and cosmic wealth frequencies for sustainable business growth.
              </p>

              {/* 4 Feature Badges in Row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "20px 28px",
                  marginBottom: "32px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }}
              >
                {/* 1. Vedic Astrology */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ filter: "drop-shadow(0 0 8px rgba(245, 130, 32, 0.45))", flexShrink: 0 }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f58220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" strokeDasharray="2 2" />
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.3 }}>
                    Vedic<br />Astrology
                  </span>
                </div>

                {/* 2. Sacred Geometry */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ filter: "drop-shadow(0 0 8px rgba(245, 130, 32, 0.45))", flexShrink: 0 }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f58220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                      <line x1="12" y1="22" x2="12" y2="15.5" />
                      <polyline points="22 8.5 12 15.5 2 8.5" />
                      <line x1="12" y1="2" x2="12" y2="8.5" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.3 }}>
                    Sacred<br />Geometry
                  </span>
                </div>

                {/* 3. Planetary Energies */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ filter: "drop-shadow(0 0 8px rgba(245, 130, 32, 0.45))", flexShrink: 0 }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f58220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
                      <circle cx="12" cy="12" r="5.5" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.3 }}>
                    Planetary<br />Energies
                  </span>
                </div>

                {/* 4. Brand Engineering */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ filter: "drop-shadow(0 0 8px rgba(245, 130, 32, 0.45))", flexShrink: 0 }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f58220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3c-1.5 2-3 4.5-3 7a3 3 0 0 0 6 0c0-2.5-1.5-5-3-7z" />
                      <path d="M6 9c-2 1.5-4 3.5-4 5.5a4 4 0 0 0 7 2.5c-.5-2.5-1.5-5-3-8z" />
                      <path d="M18 9c2 1.5 4 3.5 4 5.5a4 4 0 0 1-7 2.5c.5-2.5 1.5-5 3-8z" />
                      <path d="M3 18c3-1 6-1 9 0 3-1 6-1 9 0" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.3 }}>
                    Brand<br />Engineering
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "22px" }}>
                {/* Primary Button */}
                <a
                  href="#calculator"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "16px 36px",
                    background: "#f58220",
                    color: "#ffffff",
                    fontWeight: 700,
                    borderRadius: "999px",
                    fontSize: "15px",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                  className="hover:bg-[#ff933c] hover:scale-105 active:scale-95"
                >
                  Get Your Brand Aligned <ArrowRight size={18} />
                </a>

                {/* Contact Us Button */}
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "15px 32px",
                    background: "rgba(255, 255, 255, 0.08)",
                    color: "#ffffff",
                    fontWeight: 600,
                    borderRadius: "999px",
                    fontSize: "15px",
                    border: "1.5px solid rgba(245, 130, 32, 0.7)",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.25s ease",
                    textDecoration: "none",
                  }}
                  className="hover:bg-[#f58220] hover:border-[#f58220] hover:scale-105 active:scale-95 group"
                >
                  <MessageCircle size={18} className="text-[#f58220] group-hover:text-white transition-colors" />
                  <span>Contact Us</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          COSMIC PILLARS & VASTU WISDOM BANNER
      ========================================================================= */}
      <section
        style={{
          backgroundColor: isDark ? "#060b13" : "#07273d",
          padding: "20px 0 35px 0",
          borderBottom: `1px solid ${borderCol}`,
          position: "relative",
          zIndex: 10,
        }}
      >
        <div className="site-wrap" style={{ maxWidth: "1200px" }}>
          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left" style={{ marginBottom: "32px" }}>
            {[
              {
                icon: Sun,
                title: "Solar Energy & Brand Authority",
                desc: "Aligning visual geometry with Sun frequencies to command market trust, leadership, and executive prestige.",
                accent: "#f58220",
              },
              {
                icon: Moon,
                title: "Lunar Flow & Customer Magnetism",
                desc: "Optimizing color frequencies to match moon cycles, enhancing customer empathy, brand recall, and repeat sales.",
                accent: "#38bdf8",
              },
              {
                icon: Compass,
                title: "Directional Vastu & Sacred Shapes",
                desc: "Balancing vertical, horizontal, and radial curves to channel cosmological energies, clearing cash-flow bottlenecks.",
                accent: "#10b981",
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: "rgba(10, 15, 25, 0.75)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "18px",
                    padding: "24px",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                    transition: "transform 0.25s ease, border-color 0.25s ease",
                  }}
                  className="hover:-translate-y-1.5 hover:border-[#f58220]/50"
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: `rgba(${idx === 0 ? "245,130,32" : idx === 1 ? "56,189,248" : "16,185,129"}, 0.15)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                      color: p.accent,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Vastu Wisdom Quote Banner */}
          <div
            style={{
              background: "rgba(0, 0, 0, 0.45)",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              borderRight: "1px solid rgba(255, 255, 255, 0.08)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              borderLeft: "4px solid #f58220",
              borderRadius: "14px",
              padding: "18px 24px",
              maxWidth: "840px",
              margin: "0 auto",
              textAlign: "left",
              position: "relative",
              zIndex: 5,
            }}
          >
            <p style={{ fontStyle: "italic", color: "rgba(255,255,255,0.85)", fontSize: "14.5px", lineHeight: 1.7 }}>
              &ldquo;When a logo violates Vastu rules or contains colors that conflict with the founder&apos;s birth
              chart, it creates cosmic static — leading to unstable sales, friction, and expansion resistance.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHAT WE DO: Blend of Creative Design & Cosmic Engineering
      ========================================================================= */}
      <section style={{ padding: "48px 0", backgroundColor: sectionBg, borderBottom: `1px solid ${borderCol}` }}>
        <div className="site-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#f58220",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                <div style={{ width: "24px", height: "2px", background: "#f58220" }} />
                Cosmic Brand Architecture
              </div>
              
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 800,
                  color: headingCol,
                  lineHeight: 1.2,
                  marginBottom: "20px",
                }}
              >
                Bridging Modern Aesthetics with{" "}
                <span style={{ color: "#f58220" }}>Vedic Astronomy</span>
              </h2>

              <p style={{ color: textCol, fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}>
                At <strong>Brandingo</strong>, we blend world-class graphic craftsmanship with authentic scientific logo
                principles, Vedic astrology, and Vastu Shastra. Whether you&apos;re launching a new corporate venture,
                optimizing an existing logo, or aligning your brand palette with your zodiac elements, we ensure your mark
                is not just visually captivating — but mathematically and astronomically tuned to attract prosperity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Zodiac Element Balancing",
                  "Golden Ratio Grid Precision",
                  "Vastu Cardinal Direction Tuning",
                  "Planetary Pantone Color Coding",
                  "Founder Kundli Harmonization",
                  "Negative Angle Elimination",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-[#f58220] shrink-0" />
                    <span style={{ fontSize: "14px", fontWeight: 600, color: headingCol }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  {
                    title: "Custom Logo Design",
                    desc: "Bespoke logos tailored to your scientific niche, astrological ruler, and commercial scaling goals.",
                    badge: "Bespoke",
                  },
                  {
                    title: "Research & Identity Kits",
                    desc: "Structured typography, geometry, and corporate stationery for labs, institutions, and enterprises.",
                    badge: "Institutional",
                  },
                  {
                    title: "Science Startup Suites",
                    desc: "Full brand architectures for biotech, pharma, fintech, and tech firms in the science sector.",
                    badge: "High-Growth",
                  },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: cardBg,
                      border: `1px solid ${borderCol}`,
                      borderRadius: "20px",
                      padding: "28px 20px",
                      boxShadow: isDark ? "0 10px 30px rgba(0,0,0,0.4)" : "0 8px 24px rgba(0,0,0,0.05)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "4px 10px",
                          borderRadius: "999px",
                          fontSize: "11px",
                          fontWeight: 700,
                          backgroundColor: "rgba(245,130,32,0.12)",
                          color: "#f58220",
                          marginBottom: "16px",
                        }}
                      >
                        {s.badge}
                      </span>
                      <h3 style={{ fontSize: "17px", fontWeight: 700, color: headingCol, marginBottom: "10px" }}>
                        {s.title}
                      </h3>
                      <p style={{ fontSize: "13px", color: textCol, lineHeight: 1.6 }}>{s.desc}</p>
                    </div>

                    <a
                      href={`${whatsappBaseUrl}${encodeURIComponent(`Hi, I'm interested in ${s.title} for my brand.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginTop: "20px",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#f58220",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                      className="hover:underline"
                    >
                      Learn More <ArrowRight size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE ZODIAC BRAND ALIGNMENT CALCULATOR
      ========================================================================= */}
      <section id="calculator" style={{ padding: "48px 0 24px 0", position: "relative" }}>
        <div className="site-wrap">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#f58220",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              <div style={{ width: "24px", height: "2px", background: "#f58220" }} />
              Interactive Diagnostic Tool
              <div style={{ width: "24px", height: "2px", background: "#f58220" }} />
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                fontWeight: 800,
                color: headingCol,
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              Zodiac Brand <span style={{ color: "#f58220" }}>Alignment Calculator</span>
            </h2>
            <p style={{ color: textCol, fontSize: "16px", lineHeight: 1.7 }}>
              Select your Zodiac Sign (Rashi) to discover the ideal planetary elements, color wavelengths, and sacred
              geometries scientifically tuned for your business logo.
            </p>
          </div>

          {/* Zodiac Pills Horizontal Scroll / Grid */}
          <div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2.5 mb-10"
            style={{ maxWidth: "1200px", margin: "0 auto 36px auto" }}
          >
            {ZODIAC_SIGNS.map((z) => {
              const isSelected = selectedZodiac.id === z.id;
              return (
                <button
                  key={z.id}
                  onClick={() => setSelectedZodiac(z)}
                  style={{
                    backgroundColor: isSelected
                      ? "#f58220"
                      : isDark
                      ? "#111622"
                      : "#ffffff",
                    color: isSelected ? "#ffffff" : headingCol,
                    border: isSelected
                      ? "1px solid #f58220"
                      : `1px solid ${borderCol}`,
                    borderRadius: "14px",
                    padding: "12px 6px",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                    transition: "all 0.2s ease",
                  }}
                  className="hover:scale-105 active:scale-95"
                >
                  <span style={{ fontSize: "20px", lineHeight: 1 }}>{z.symbol}</span>
                  <span style={{ fontSize: "12px", fontWeight: 700 }}>{z.name}</span>
                  <span
                    style={{
                      fontSize: "10px",
                      opacity: isSelected ? 0.9 : 0.6,
                      fontFamily: "monospace",
                    }}
                  >
                    {z.sanskrit}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Zodiac Card */}
          <div
            style={{
              backgroundColor: cardBg,
              border: `2px solid ${isDark ? "rgba(245,130,32,0.3)" : "rgba(245,130,32,0.4)"}`,
              borderRadius: "28px",
              padding: "40px",
              boxShadow: isDark
                ? "0 20px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)"
                : "0 15px 40px rgba(0,0,0,0.08)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Ambient Background Aura */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "400px",
                height: "400px",
                background: `radial-gradient(circle, ${selectedZodiac.colors[0].hex}22 0%, transparent 70%)`,
                filter: "blur(50px)",
                pointerEvents: "none",
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              
              {/* Left Profile Overview */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "20px",
                      backgroundColor: "rgba(245,130,32,0.15)",
                      border: "1px solid rgba(245,130,32,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "36px",
                    }}
                  >
                    {selectedZodiac.symbol}
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", color: "#f58220", fontWeight: 700, textTransform: "uppercase" }}>
                      {selectedZodiac.sanskrit} • {selectedZodiac.dates}
                    </div>
                    <h3 style={{ fontSize: "28px", fontWeight: 800, color: headingCol, lineHeight: 1.1 }}>
                      {selectedZodiac.name} Alignment Profile
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span
                    style={{
                      padding: "6px 14px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 700,
                      backgroundColor: isDark ? "#171e2e" : "#f1f5f9",
                      color: headingCol,
                      border: `1px solid ${borderCol}`,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Flame size={14} className="text-[#f58220]" /> Element: {selectedZodiac.element}
                  </span>
                  <span
                    style={{
                      padding: "6px 14px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 700,
                      backgroundColor: isDark ? "#171e2e" : "#f1f5f9",
                      color: headingCol,
                      border: `1px solid ${borderCol}`,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Sun size={14} className="text-[#38bdf8]" /> Ruler: {selectedZodiac.rulingPlanet}
                  </span>
                  <span
                    style={{
                      padding: "6px 14px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 700,
                      backgroundColor: isDark ? "#171e2e" : "#f1f5f9",
                      color: headingCol,
                      border: `1px solid ${borderCol}`,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Compass size={14} className="text-[#10b981]" /> Cardinal Vastu: {selectedZodiac.direction}
                  </span>
                </div>

                <p style={{ color: textCol, fontSize: "15px", lineHeight: 1.7, marginBottom: "20px" }}>
                  {selectedZodiac.description}
                </p>

                <div
                  style={{
                    backgroundColor: isDark ? "#090d15" : "#f8fafc",
                    borderLeft: "3px solid #f58220",
                    padding: "14px 18px",
                    borderRadius: "10px",
                    marginBottom: "24px",
                  }}
                >
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#f58220", textTransform: "uppercase" }}>
                    Archetype &amp; Growth Mantra
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: headingCol, marginTop: "4px" }}>
                    {selectedZodiac.archetype}: &ldquo;{selectedZodiac.growthMantra}&rdquo;
                  </div>
                </div>

                <a
                  href={`${whatsappBaseUrl}${encodeURIComponent(
                    `Hello Brandingo, I checked the Zodiac Calculator for ${selectedZodiac.name} (${selectedZodiac.sanskrit}). I want to align my brand logo according to these parameters.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 28px",
                    backgroundColor: "#f58220",
                    color: "#ffffff",
                    fontWeight: 700,
                    borderRadius: "999px",
                    fontSize: "14px",
                    transition: "all 0.2s ease",
                  }}
                  className="hover:bg-[#ff933c]"
                >
                  Get {selectedZodiac.name}-Aligned Logo <ArrowRight size={16} />
                </a>
              </div>

              {/* Right Technical Specifications */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Power Colors */}
                <div
                  style={{
                    backgroundColor: isDark ? "#111624" : "#f8fafc",
                    border: `1px solid ${borderCol}`,
                    borderRadius: "18px",
                    padding: "20px",
                  }}
                >
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#f58220", textTransform: "uppercase", marginBottom: "12px" }}>
                    ★ Planetary Power Colors
                  </div>
                  <div className="space-y-3">
                    {selectedZodiac.colors.map((c, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "10px",
                            backgroundColor: c.hex,
                            border: isDark ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(0,0,0,0.08)",
                          }}
                        />
                        <div>
                          <div style={{ fontSize: "14px", fontWeight: 700, color: headingCol }}>{c.name}</div>
                          <div style={{ fontSize: "12px", fontFamily: "monospace", color: textCol }}>{c.hex}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Auspicious Shapes */}
                <div
                  style={{
                    backgroundColor: isDark ? "#111624" : "#f8fafc",
                    border: `1px solid ${borderCol}`,
                    borderRadius: "18px",
                    padding: "20px",
                  }}
                >
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#38bdf8", textTransform: "uppercase", marginBottom: "12px" }}>
                    ★ Sacred Shapes &amp; Geometry
                  </div>
                  <div className="space-y-2.5">
                    {selectedZodiac.shapes.map((s, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check size={16} className="text-[#38bdf8] shrink-0 mt-0.5" />
                        <span style={{ fontSize: "13.5px", color: headingCol, fontWeight: 500 }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cardinal Vastu Direction */}
                <div
                  style={{
                    backgroundColor: isDark ? "#111624" : "#f8fafc",
                    border: `1px solid ${borderCol}`,
                    borderRadius: "18px",
                    padding: "20px",
                  }}
                >
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#10b981", textTransform: "uppercase", marginBottom: "8px" }}>
                    ★ Auspicious Direction
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: headingCol, marginBottom: "6px" }}>
                    {selectedZodiac.direction}
                  </div>
                  <p style={{ fontSize: "12.5px", color: textCol, lineHeight: 1.5 }}>
                    Position your primary corporate signage, entrance reception logo, and founder desks towards these
                    auspicious cardinal coordinates to amplify energetic intake.
                  </p>
                </div>

                {/* Elements to Strictly Avoid */}
                <div
                  style={{
                    backgroundColor: isDark ? "#171216" : "#fef2f2",
                    border: "1px solid rgba(239,68,68,0.25)",
                    borderRadius: "18px",
                    padding: "20px",
                  }}
                >
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#ef4444", textTransform: "uppercase", marginBottom: "8px" }}>
                    ⚠️ Elements to Avoid
                  </div>
                  <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#ef4444", marginBottom: "6px" }}>
                    Cosmic Static Triggers:
                  </div>
                  <p style={{ fontSize: "12.5px", color: isDark ? "rgba(255,255,255,0.7)" : "#7f1d1d", lineHeight: 1.5 }}>
                    {selectedZodiac.avoid}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          PLANETARY IMBALANCES & BUSINESS SYMPTOMS (DIAGNOSTIC MATRIX)
      ========================================================================= */}
      <section style={{ padding: "24px 0 48px 0", backgroundColor: sectionBg, borderTop: `1px solid ${borderCol}`, borderBottom: `1px solid ${borderCol}` }}>
        <div className="site-wrap">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#f58220",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              <div style={{ width: "24px", height: "2px", background: "#f58220" }} />
              Planetary Diagnostics
              <div style={{ width: "24px", height: "2px", background: "#f58220" }} />
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                color: headingCol,
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              Recognize the <span style={{ color: "#f58220" }}>Planetary Friction</span> in Your Business
            </h2>
            <p style={{ color: textCol, fontSize: "16px", lineHeight: 1.7 }}>
              When a company logo contains shapes or hues conflicting with universal principles, specific symptoms
              manifest in your balance sheet and team synergy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLANETARY_CONFLICTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: cardBg,
                    border: `1px solid ${borderCol}`,
                    borderRadius: "22px",
                    padding: "28px",
                    boxShadow: isDark ? "0 10px 30px rgba(0,0,0,0.3)" : "0 6px 20px rgba(0,0,0,0.04)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.25s ease, border-color 0.25s ease",
                  }}
                  className="hover:-translate-y-1.5 hover:border-[#f58220]/50"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "12px",
                          backgroundColor: `${item.badgeColor}18`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: item.badgeColor,
                        }}
                      >
                        <Icon size={22} />
                      </div>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "4px 10px",
                          borderRadius: "999px",
                          backgroundColor: `${item.badgeColor}18`,
                          color: item.badgeColor,
                        }}
                      >
                        {item.planet}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "19px", fontWeight: 800, color: headingCol, marginBottom: "4px" }}>
                      {item.title}
                    </h3>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#f58220", marginBottom: "14px" }}>
                      {item.subtitle}
                    </div>

                    <div style={{ marginBottom: "14px" }}>
                      <div style={{ fontSize: "11px", fontWeight: 700, color: "#ef4444", textTransform: "uppercase", marginBottom: "4px" }}>
                        ⚠️ Manifested Symptom:
                      </div>
                      <p style={{ fontSize: "13.5px", color: textCol, lineHeight: 1.6 }}>{item.symptom}</p>
                    </div>
                  </div>

                  <div
                    style={{
                      paddingTop: "14px",
                      borderTop: `1px dashed ${borderCol}`,
                      marginTop: "14px",
                    }}
                  >
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#10b981", textTransform: "uppercase", marginBottom: "4px" }}>
                      ✨ Scientific Remedy:
                    </div>
                    <p style={{ fontSize: "12.5px", color: textCol, lineHeight: 1.55 }}>{item.remedy}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          OUR 6-STEP SCIENTIFIC METHODOLOGY
      ========================================================================= */}
      <section style={{ padding: "48px 0" }}>
        <div className="site-wrap">
          
          <div className="text-center max-w-2xl mx-auto mb-9">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#f58220",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              <div style={{ width: "24px", height: "2px", background: "#f58220" }} />
              Engineering Process
              <div style={{ width: "24px", height: "2px", background: "#f58220" }} />
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                color: headingCol,
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              Our 6-Step <span style={{ color: "#f58220" }}>Scientific Methodology</span>
            </h2>
            <p style={{ color: textCol, fontSize: "16px", lineHeight: 1.7 }}>
              From deep birth chart geometry calculation to Pantone wavelength formulation and vector master execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {METHODOLOGY_STEPS.map((m, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${borderCol}`,
                  borderRadius: "22px",
                  padding: "32px 26px",
                  position: "relative",
                  boxShadow: isDark ? "0 10px 30px rgba(0,0,0,0.3)" : "0 8px 25px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: 900,
                    color: isDark ? "rgba(245,130,32,0.25)" : "rgba(245,130,32,0.3)",
                    lineHeight: 1,
                    marginBottom: "16px",
                    fontFamily: "monospace",
                  }}
                >
                  {m.step}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: headingCol, marginBottom: "10px" }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: "13.5px", color: textCol, lineHeight: 1.65 }}>{m.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SCIENTIFIC LOGO PACKAGES (PRICING TABLE)
      ========================================================================= */}
      <section style={{ padding: "48px 0", backgroundColor: sectionBg, borderTop: `1px solid ${borderCol}`, borderBottom: `1px solid ${borderCol}` }}>
        <div className="site-wrap">
          
          <div className="text-center max-w-2xl mx-auto mb-9">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#f58220",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              <div style={{ width: "24px", height: "2px", background: "#f58220" }} />
              Tailored Investment Packages
              <div style={{ width: "24px", height: "2px", background: "#f58220" }} />
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                color: headingCol,
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              Scientific Logo <span style={{ color: "#f58220" }}>Packages</span>
            </h2>
            <p style={{ color: textCol, fontSize: "16px", lineHeight: 1.7 }}>
              Clear deliverables, direct astrologer sessions, and comprehensive geometry manuals tailored to your scaling phase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: cardBg,
                  border: pkg.popular
                    ? "2px solid #f58220"
                    : `1px solid ${borderCol}`,
                  borderRadius: "24px",
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  boxShadow: pkg.popular
                    ? "0 15px 40px rgba(245,130,32,0.25)"
                    : isDark
                    ? "0 8px 24px rgba(0,0,0,0.3)"
                    : "0 6px 20px rgba(0,0,0,0.05)",
                }}
              >
                {pkg.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-13px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#f58220",
                      color: "#ffffff",
                      fontSize: "11px",
                      fontWeight: 800,
                      padding: "4px 14px",
                      borderRadius: "999px",
                      letterSpacing: "1px",
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: "21px", fontWeight: 800, color: headingCol, marginBottom: "6px" }}>
                    {pkg.name}
                  </h3>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#f58220", marginBottom: "12px" }}>
                    {pkg.badge}
                  </div>
                  <p style={{ fontSize: "13px", color: textCol, lineHeight: 1.6, marginBottom: "24px" }}>
                    {pkg.desc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((f, fi) => (
                      <div key={fi} className="flex items-start gap-2.5">
                        {f.included ? (
                          <CheckCircle2 size={16} className="text-[#10b981] shrink-0 mt-0.5" />
                        ) : (
                          <XCircle size={16} className="text-gray-400 shrink-0 mt-0.5 opacity-40" />
                        )}
                        <span
                          style={{
                            fontSize: "12.5px",
                            color: f.included ? headingCol : isDark ? "rgba(255,255,255,0.3)" : "#94a3b8",
                            lineHeight: 1.45,
                          }}
                        >
                          {f.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`${whatsappBaseUrl}${encodeURIComponent(
                    `Hi Brandingo, I'm interested in the ${pkg.name} for Scientific & Astrology Logo Design.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "13px 20px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 700,
                    backgroundColor: pkg.popular ? "#f58220" : isDark ? "rgba(255,255,255,0.08)" : "#f1f5f9",
                    color: pkg.popular ? "#ffffff" : headingCol,
                    border: pkg.popular ? "none" : `1px solid ${borderCol}`,
                    transition: "all 0.2s ease",
                    textAlign: "center",
                  }}
                  className="hover:scale-[1.02] active:scale-[0.98]"
                >
                  {pkg.ctaText} <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", fontSize: "12px", color: textCol, marginTop: "24px" }}>
            ✨ Note: Astrological calculations, custom remedies, and vector assets are delivered after full project confirmation.
          </p>

        </div>
      </section>

      {/* =========================================================================
          FOUNDER EXPERIENCES / TESTIMONIALS
      ========================================================================= */}
      <section style={{ padding: "48px 0" }}>
        <div className="site-wrap">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#f58220",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              <div style={{ width: "24px", height: "2px", background: "#f58220" }} />
              Real Transformations
              <div style={{ width: "24px", height: "2px", background: "#f58220" }} />
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                color: headingCol,
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              Founder <span style={{ color: "#f58220" }}>Experiences</span>
            </h2>
            <p style={{ color: textCol, fontSize: "16px", lineHeight: 1.7 }}>
              Real results from entrepreneurs whose brands unlocked rapid growth through scientific alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "“We optimized our brand logo curves to Mars elements and aligned typography angles. The team synergy and client confidence noticed remarkable positive shifts within 90 days.”",
                author: "Rajesh Patel",
                role: "Founder, Apex Engineering",
                stars: 5,
              },
              {
                quote:
                  "“The planetary color coding suggestions from Brandingo were outstanding. Our marketing conversions increased by 42% and client retention metrics feel incredibly steady now.”",
                author: "Siddharth Mehta",
                role: "Managing Director, Solis FinTech",
                stars: 5,
              },
              {
                quote:
                  "“Excellent cosmic diagnostic. Synthesizing sacred shapes with logo numerology eliminated our severe cash-flow friction and stabilized our vendor relationships.”",
                author: "Ananya Sharma",
                role: "Founder, Zephyr Health",
                stars: 5,
              },
            ].map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${borderCol}`,
                  borderRadius: "22px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: isDark ? "0 10px 30px rgba(0,0,0,0.3)" : "0 8px 24px rgba(0,0,0,0.05)",
                }}
              >
                <div>
                  <div className="flex gap-1 mb-4 text-[#f58220]">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} size={16} fill="#f58220" />
                    ))}
                  </div>
                  <p style={{ fontSize: "14.5px", color: headingCol, lineHeight: 1.75, fontStyle: "italic", marginBottom: "20px" }}>
                    {t.quote}
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: headingCol }}>{t.author}</div>
                  <div style={{ fontSize: "12px", color: textCol }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION SECTION
      ========================================================================= */}
      <section style={{ padding: "48px 0", backgroundColor: sectionBg, borderTop: `1px solid ${borderCol}` }}>
        <div className="site-wrap" style={{ maxWidth: "880px" }}>
          
          <div className="text-center mb-8">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#f58220",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              <div style={{ width: "24px", height: "2px", background: "#f58220" }} />
              Got Questions?
              <div style={{ width: "24px", height: "2px", background: "#f58220" }} />
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                color: headingCol,
                lineHeight: 1.2,
                marginBottom: "14px",
              }}
            >
              Frequently Asked <span style={{ color: "#f58220" }}>Questions</span>
            </h2>
            <p style={{ color: textCol, fontSize: "15.5px" }}>
              Everything you need to know about Scientific Logo Design and Astrological Geometry.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: cardBg,
                    border: `1px solid ${isOpen ? "#f58220" : borderCol}`,
                    borderRadius: "16px",
                    overflow: "hidden",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textAlign: "left",
                      gap: "16px",
                      cursor: "pointer",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <span style={{ fontSize: "16px", fontWeight: 700, color: headingCol }}>{faq.q}</span>
                    <span style={{ color: "#f58220" }}>{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: "0 24px 22px 24px", color: textCol, fontSize: "14.5px", lineHeight: 1.75 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          FINAL HIGH-CONVERSION CTA BANNER
      ========================================================================= */}
      <section
        style={{
          padding: "54px 0",
          backgroundColor: isDark ? "#060a12" : "#07273d",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at center, rgba(245,130,32,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="site-wrap relative z-10" style={{ maxWidth: "760px" }}>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 text-xs font-bold tracking-wider uppercase"
            style={{
              background: "rgba(245,130,32,0.2)",
              border: "1px solid rgba(245,130,32,0.4)",
              color: "#f58220",
            }}
          >
            <Sparkles size={14} /> Start Your Cosmic Brand Alignment
          </div>

          <h2
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "20px",
            }}
          >
            Ready to Align Your Brand with{" "}
            <span style={{ color: "#f58220" }}>Science &amp; Astrology?</span>
          </h2>

          <p
            style={{
              fontSize: "16.5px",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.8,
              marginBottom: "36px",
            }}
          >
            Complete our assessment consultation. We analyze your birth chart parameters, business sector, brand
            personality, and partner synergies to design a high-growth, high-prosperity logo identity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`${whatsappBaseUrl}${encodeURIComponent(
                "Hello Brandingo! I want to book a Scientific Logo & Astro-Vastu alignment consultation for my brand."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 38px",
                backgroundColor: "#f58220",
                color: "#ffffff",
                fontWeight: 700,
                borderRadius: "999px",
                fontSize: "16px",
                transition: "all 0.2s ease",
              }}
              className="hover:bg-[#ff933c] hover:scale-105"
            >
              <MessageCircle size={20} /> Book Scientific Consultation
            </a>

            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "15px 32px",
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "#ffffff",
                fontWeight: 600,
                borderRadius: "999px",
                fontSize: "16px",
                border: "1px solid rgba(255,255,255,0.25)",
                backdropFilter: "blur(8px)",
                transition: "all 0.2s ease",
              }}
              className="hover:bg-white/20 hover:border-white/40"
            >
              Fill Contact Form <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
