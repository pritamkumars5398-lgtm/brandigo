"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ServiceMeta } from "@/lib/services-data";
import { workImages } from "@/lib/work-images";
import { useTheme } from "@/components/ThemeContext";

const A = "#f58220"; // accent orange

/* ── Shared hero ──────────────────────────────────────────────────── */
function ServiceHero({ service }: { service: ServiceMeta }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section style={{ position: "relative", height: "440px", display: "flex", alignItems: "flex-end", paddingBottom: "56px", overflow: "hidden" }}>
      <Image src={service.heroImage} alt={service.title} fill style={{ objectFit: "cover", objectPosition: "center 30%" }} priority unoptimized />
      <div style={{ position: "absolute", inset: 0, background: isDark ? "linear-gradient(135deg, rgba(8,11,18,0.94) 0%, rgba(14,20,32,0.90) 100%)" : "linear-gradient(135deg, rgba(11,60,93,0.88) 0%, rgba(245,130,32,0.82) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="site-wrap" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ display: "inline-block", padding: "5px 14px", background: "rgba(245,130,32,0.25)", border: "1px solid rgba(245,130,32,0.5)", borderRadius: "999px", color: "#fff", fontSize: "12px", fontWeight: 600, marginBottom: "14px" }}>
          Our Services
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: "12px" }}>
          {service.title}
        </h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: "540px", lineHeight: 1.6, marginBottom: "18px" }}>
          {service.tagline}
        </p>
        <nav style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }} className="hover:text-white">Home</Link>
          <ChevronRight size={12} style={{ color: "rgba(255,255,255,0.4)" }} />
          <Link href="/#services" style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }} className="hover:text-white">Services</Link>
          <ChevronRight size={12} style={{ color: "rgba(255,255,255,0.4)" }} />
          <span style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }}>{service.title}</span>
        </nav>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   1. GRAPHIC DESIGNING — grid cards + process timeline
══════════════════════════════════════════════════════════════════ */
function GraphicDesigning() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const offerings = [
    { img: "https://images.unsplash.com/photo-1626785774573-4b799315345d", title: "Logo Design", desc: "A professional, well-designed logo is the crucial first step in establishing your brand — it creates the first impression of your company and expresses its values all in one." },
    { img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740", title: "Stationery Design", desc: "Letterheads, envelopes, folders, business cards, invoices and more — well-executed stationery boosts your corporate identity and sets the tone from the very first touch." },
    { img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e", title: "Banner & Standee Design", desc: "One of the most popular ways to market today. Portable stands — fixed, X-style, expandable or retractable — work in any size for any placement and visibility." },
    { img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da", title: "Packaging & Label Design", desc: "The exterior wrap of your product and your first physical interaction with the public — packaging and labels that convey your brand's identity, quality and reputation." },
    { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0", title: "Menu Design", desc: "Menus that express your eatery's personality, help customers understand your concept and promote profitability — key to any restaurant's marketing plan." },
    { img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61", title: "Invitation Card Design", desc: "Beautifully crafted invitation cards for weddings, events and celebrations — designed to set the tone and make a memorable first impression." },
    { img: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b", title: "Tag Design", desc: "Custom tags that carry your brand — from price and care tags to gift and product tags — designed for clarity, character and a premium feel." },
    { img: "https://images.unsplash.com/photo-1542435503-956c469947f6", title: "Brochure Design", desc: "Brochures extend your customers' knowledge of your business — introducing your company and giving a snapshot of your products, services, features and contact information." },
  ];
  const steps = [
    { n: "01", title: "Discovery", desc: "We learn your brand, audience, and goals through an in-depth brief." },
    { n: "02", title: "Concept", desc: "Our designers develop 2–3 distinct creative directions for your review." },
    { n: "03", title: "Refinement", desc: "We refine the chosen concept based on your feedback — up to 3 revision rounds." },
    { n: "04", title: "Delivery", desc: "Final files delivered in all formats: print-ready, web, and social media sizes." },
  ];
  return (
    <>
      {/* Intro */}
      <section style={{ padding: "80px 0", background: isDark ? "#08090d" : "#fff", transition: "background 0.3s ease" }}>
        <div className="site-wrap">
          <div style={{ display: "grid", gap: "60px", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div style={{ width: "32px", height: "2px", background: A }} />
                <span style={{ color: A, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Creative Studio</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 800, color: isDark ? "#ffffff" : "#1a1a1a", marginBottom: "16px", lineHeight: 1.25 }}>
                Design that drives <span style={{ color: A }}>recognition</span> and results
              </h2>
              <p style={{ color: isDark ? "#94a3b8" : "#666", lineHeight: 1.8, marginBottom: "16px" }}>
                Great design is the foundation of every strong brand. Our team of senior graphic designers brings 10+ years of collective experience to every project — from brand-new identity systems to revitalising established brands.
              </p>
              <p style={{ color: isDark ? "#94a3b8" : "#666", lineHeight: 1.8, marginBottom: "28px" }}>
                We believe design should solve problems, not just look pretty. Every creative decision we make is intentional and aligned with your business objectives.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {["Brand Identity", "Logo Design", "Print", "Packaging", "Stationery", "Branding"].map(t => (
                  <span key={t} style={{ padding: "6px 14px", background: isDark ? "#12151c" : "#fff5eb", color: A, fontWeight: 600, fontSize: "12px", borderRadius: "999px", border: isDark ? `1px solid ${A}44` : `1px solid ${A}33` }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[{ v: "500+", l: "Projects Delivered" }, { v: "10+", l: "Years of Expertise" }, { v: "100%", l: "Client Satisfaction" }, { v: "48h", l: "Avg First Draft" }].map(s => (
                <div key={s.l} style={{ padding: "28px 20px", border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.07)", textAlign: "center", background: isDark ? "#12151c" : "#fafafa", transition: "background 0.3s ease" }}>
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: A }}>{s.v}</div>
                  <div style={{ color: isDark ? "#94a3b8" : "#888", fontSize: "13px", marginTop: "4px" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offerings grid */}
      <section style={{ padding: "80px 0", background: isDark ? "#0c0e14" : "#f8f9fb", transition: "background 0.3s ease" }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: isDark ? "#ffffff" : "#1a1a1a", textAlign: "center", marginBottom: "48px" }}>
            What We <span style={{ color: A }}>Design</span>
          </h2>
          <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map(o => (
              <div key={o.title} style={{ background: isDark ? "#12151c" : "#fff", border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.07)", overflow: "hidden", display: "flex", flexDirection: "column", transition: "border-color 0.2s, transform 0.2s, background 0.3s" }} className="card-hover group">
                <div style={{ position: "relative", width: "100%", height: "190px", overflow: "hidden" }}>
                  <Image src={`${o.img}?w=640&q=70`} alt={o.title} fill unoptimized sizes="(max-width: 640px) 100vw, 380px" style={{ objectFit: "cover", transition: "transform 0.5s ease" }} className="group-hover:scale-110" />
                </div>
                <div style={{ padding: "24px 26px 28px" }}>
                  <h3 style={{ fontWeight: 700, color: isDark ? "#ffffff" : "#1a1a1a", fontSize: "16px", marginBottom: "8px" }} className="group-hover:text-[#f58220]">{o.title}</h3>
                  <p style={{ color: isDark ? "#94a3b8" : "#888", fontSize: "13.5px", lineHeight: 1.7 }}>{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section style={{ padding: "80px 0", background: isDark ? "#08090d" : "#fff", transition: "background 0.3s ease" }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: isDark ? "#ffffff" : "#1a1a1a", textAlign: "center", marginBottom: "56px" }}>
            Our <span style={{ color: A }}>Design Process</span>
          </h2>
          <div style={{ display: "grid", gap: "0", position: "relative" }} className="sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.n} style={{ padding: "32px 24px", position: "relative", borderTop: `3px solid ${i === 0 ? A : (isDark ? "rgba(255,255,255,0.12)" : "#e5e7eb")}`, background: isDark ? "#12151c" : "#fff", borderRight: isDark ? "1px solid rgba(255,255,255,0.04)" : "none", borderBottom: isDark ? "1px solid rgba(255,255,255,0.04)" : "none", transition: "background 0.3s ease" }}>
                <div style={{ fontSize: "3rem", fontWeight: 900, color: i === 0 ? A : (isDark ? "rgba(255,255,255,0.18)" : "#e5e7eb"), lineHeight: 1, marginBottom: "12px" }}>{s.n}</div>
                <h3 style={{ fontWeight: 700, color: isDark ? "#ffffff" : "#1a1a1a", fontSize: "16px", marginBottom: "8px" }}>{s.title}</h3>
                <p style={{ color: isDark ? "#94a3b8" : "#888", fontSize: "13.5px", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   Shared standard layout — intro + offerings grid + process timeline.
   Used by Website Development, SEO and Digital Marketing.
══════════════════════════════════════════════════════════════════ */
interface Offering { img: string; title: string; desc: string }
interface Step { n: string; title: string; desc: string }
interface StandardContent {
  eyebrow: string;
  heading: React.ReactNode;
  intro: string[];
  tags: string[];
  stats: { v: string; l: string }[];
  offeringsTitle: React.ReactNode;
  offerings: Offering[];
  steps: Step[];
}

function StandardLayout({ eyebrow, heading, intro, tags, stats, offeringsTitle, offerings, steps }: StandardContent) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Intro */}
      <section style={{ padding: "80px 0", background: isDark ? "#08090d" : "#fff", transition: "background 0.3s ease" }}>
        <div className="site-wrap">
          <div style={{ display: "grid", gap: "60px", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div style={{ width: "32px", height: "2px", background: A }} />
                <span style={{ color: A, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>{eyebrow}</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 800, color: isDark ? "#ffffff" : "#1a1a1a", marginBottom: "16px", lineHeight: 1.25 }}>
                {heading}
              </h2>
              {intro.map((p, i) => (
                <p key={i} style={{ color: isDark ? "#94a3b8" : "#666", lineHeight: 1.8, marginBottom: i === intro.length - 1 ? "28px" : "16px" }}>{p}</p>
              ))}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {tags.map(t => (
                  <span key={t} style={{ padding: "6px 14px", background: isDark ? "#12151c" : "#fff5eb", color: A, fontWeight: 600, fontSize: "12px", borderRadius: "999px", border: isDark ? `1px solid ${A}44` : `1px solid ${A}33` }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {stats.map(s => (
                <div key={s.l} style={{ padding: "28px 20px", border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.07)", textAlign: "center", background: isDark ? "#12151c" : "#fafafa", transition: "background 0.3s ease" }}>
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: A }}>{s.v}</div>
                  <div style={{ color: isDark ? "#94a3b8" : "#888", fontSize: "13px", marginTop: "4px" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offerings grid */}
      <section style={{ padding: "80px 0", background: isDark ? "#0c0e14" : "#f8f9fb", transition: "background 0.3s ease" }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: isDark ? "#ffffff" : "#1a1a1a", textAlign: "center", marginBottom: "48px" }}>
            {offeringsTitle}
          </h2>
          <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map(o => (
              <div key={o.title} style={{ background: isDark ? "#12151c" : "#fff", border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.07)", overflow: "hidden", display: "flex", flexDirection: "column", transition: "border-color 0.2s, transform 0.2s, background 0.3s" }} className="card-hover group">
                <div style={{ position: "relative", width: "100%", height: "190px", overflow: "hidden" }}>
                  <Image src={`${o.img}?w=640&q=70`} alt={o.title} fill unoptimized sizes="(max-width: 640px) 100vw, 380px" style={{ objectFit: "cover", transition: "transform 0.5s ease" }} className="group-hover:scale-110" />
                </div>
                <div style={{ padding: "24px 26px 28px" }}>
                  <h3 style={{ fontWeight: 700, color: isDark ? "#ffffff" : "#1a1a1a", fontSize: "16px", marginBottom: "8px" }} className="group-hover:text-[#f58220]">{o.title}</h3>
                  <p style={{ color: isDark ? "#94a3b8" : "#888", fontSize: "13.5px", lineHeight: 1.7 }}>{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      {steps.length > 0 && (
      <section style={{ padding: "80px 0", background: isDark ? "#08090d" : "#fff", transition: "background 0.3s ease" }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: isDark ? "#ffffff" : "#1a1a1a", textAlign: "center", marginBottom: "56px" }}>
            Our <span style={{ color: A }}>Process</span>
          </h2>
          <div style={{ display: "grid", gap: "0", position: "relative" }} className="sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.n} style={{ padding: "32px 24px", position: "relative", borderTop: `3px solid ${i === 0 ? A : (isDark ? "rgba(255,255,255,0.12)" : "#e5e7eb")}`, background: isDark ? "#12151c" : "#fff", borderRight: isDark ? "1px solid rgba(255,255,255,0.04)" : "none", borderBottom: isDark ? "1px solid rgba(255,255,255,0.04)" : "none", transition: "background 0.3s ease" }}>
                <div style={{ fontSize: "3rem", fontWeight: 900, color: i === 0 ? A : (isDark ? "rgba(255,255,255,0.18)" : "#e5e7eb"), lineHeight: 1, marginBottom: "12px" }}>{s.n}</div>
                <h3 style={{ fontWeight: 700, color: isDark ? "#ffffff" : "#1a1a1a", fontSize: "16px", marginBottom: "8px" }}>{s.title}</h3>
                <p style={{ color: isDark ? "#94a3b8" : "#888", fontSize: "13.5px", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
    </>
  );
}

/* ── 2. WEBSITE DEVELOPMENT ───────────────────────────────────── */
function WebsiteDevelopment() {
  return (
    <StandardLayout
      eyebrow="Web Studio"
      heading={<>Websites that <span style={{ color: A }}>perform</span> as good as they look</>}
      intro={[
        "Your website is the digital home of your brand — often the very first interaction a customer has with you. At Brandingo we build fast, mobile-first, search-friendly websites that don't just look beautiful, they convert visitors into enquiries and sales.",
        "From a simple business website to a full-scale e-commerce store, every site we build is responsive across devices, optimised for speed, and structured for SEO from day one — so your brand is ready to grow online.",
      ]}
      tags={["Responsive Design", "E-Commerce", "Landing Pages", "WordPress", "Web Apps", "SEO-Ready"]}
      stats={[{ v: "200+", l: "Websites Launched" }, { v: "1.5s", l: "Avg Load Time" }, { v: "100%", l: "Mobile Responsive" }, { v: "24/7", l: "Support" }]}
      offeringsTitle={<>What We <span style={{ color: A }}>Build</span></>}
      offerings={[
        { img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8", title: "Business Websites", desc: "Professional, conversion-focused corporate and business websites that establish credibility and present your brand at its best." },
        { img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d", title: "E-Commerce Stores", desc: "Secure, easy-to-manage online stores with smooth checkout, payment gateways and inventory — built to sell around the clock." },
        { img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d", title: "Landing Pages", desc: "High-converting campaign and product landing pages engineered to capture leads and maximise your ad spend." },
        { img: "https://images.unsplash.com/photo-1547658719-da2b51169166", title: "WordPress & CMS", desc: "Flexible, content-managed websites you can update yourself — no code required, full control over your content." },
        { img: "https://images.unsplash.com/photo-1551434678-e076c223a692", title: "Web Applications", desc: "Custom web apps, dashboards and portals built with modern frameworks for speed, scalability and reliability." },
        { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", title: "Maintenance & Support", desc: "Ongoing updates, security, backups and performance tuning to keep your website fast, safe and always online." },
      ]}
      steps={[
        { n: "01", title: "Discovery", desc: "We map your goals, audience and content to plan the perfect site structure and user journey." },
        { n: "02", title: "Design", desc: "Pixel-perfect, on-brand UI mockups designed for clarity, conversion and a great experience." },
        { n: "03", title: "Development", desc: "Clean, responsive, SEO-friendly code — fast-loading and tested across every device and browser." },
        { n: "04", title: "Launch", desc: "We deploy, optimise and hand over — plus ongoing support to keep things running smoothly." },
      ]}
    />
  );
}

/* ── 3. SEARCH ENGINE OPTIMIZATION ────────────────────────────── */
function SearchEngineOptimization() {
  return (
    <StandardLayout
      eyebrow="Organic Growth"
      heading={<>Get found by customers <span style={{ color: A }}>searching</span> for you</>}
      intro={[
        "Showing up on the first page of Google is one of the most powerful ways to grow your brand. Our SEO specialists use proven, white-hat strategies to improve your rankings, drive qualified organic traffic and turn searches into customers.",
        "From technical audits and on-page optimisation to local SEO and content strategy, Brandingo builds a search foundation that delivers compounding, long-term results — not quick fixes that fade away.",
      ]}
      tags={["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO", "Link Building", "Analytics"]}
      stats={[{ v: "3x", l: "Avg Traffic Growth" }, { v: "Top 10", l: "Ranking Focus" }, { v: "100%", l: "White-Hat" }, { v: "30d", l: "First Reports" }]}
      offeringsTitle={<>How We Help You <span style={{ color: A }}>Rank</span></>}
      offerings={[
        { img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a", title: "Keyword Research", desc: "We find the high-intent keywords your customers actually search for, and build your strategy around them." },
        { img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2", title: "On-Page SEO", desc: "Optimised titles, meta tags, headings, content and internal links that tell search engines exactly what you offer." },
        { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", title: "Technical SEO", desc: "Site speed, mobile usability, crawlability, schema and Core Web Vitals — the technical groundwork rankings depend on." },
        { img: "https://images.unsplash.com/photo-1524055988636-436cfa46e59e", title: "Local SEO", desc: "Google Business Profile, local citations and reviews that put your business on the map for nearby customers." },
        { img: "https://images.unsplash.com/photo-1518770660439-4636190af475", title: "Link Building", desc: "Quality, relevant backlinks that build your domain authority and trust in the eyes of search engines." },
        { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", title: "Audit & Reporting", desc: "Transparent monthly reports on rankings, traffic and conversions — so you always know what's working." },
      ]}
      steps={[
        { n: "01", title: "Audit", desc: "A deep technical and content audit to uncover what's holding your rankings back." },
        { n: "02", title: "Strategy", desc: "A tailored keyword and content roadmap aligned to your business goals and audience." },
        { n: "03", title: "Optimize", desc: "On-page, technical and off-page work executed to steadily climb the rankings." },
        { n: "04", title: "Report", desc: "Clear, regular reporting on traffic, rankings and ROI — with continuous refinement." },
      ]}
    />
  );
}

/* ── 4. DIGITAL MARKETING ─────────────────────────────────────── */
function DigitalMarketing() {
  return (
    <StandardLayout
      eyebrow="Performance Marketing"
      heading={<>Reach the right audience at the <span style={{ color: A }}>right time</span></>}
      intro={[
        "Great marketing puts your brand in front of the people most likely to buy. Brandingo runs full-funnel digital campaigns across social, search and email — building awareness, driving engagement and delivering measurable growth.",
        "Every campaign is data-led: we test, track and optimise continuously so your budget works harder and every rupee is accountable to real business results.",
      ]}
      tags={["Social Media", "Google Ads", "Meta Ads", "Email", "Content", "Analytics"]}
      stats={[{ v: "5M+", l: "Reach Generated" }, { v: "4x", l: "Avg ROAS" }, { v: "10+", l: "Channels" }, { v: "Live", l: "Dashboards" }]}
      offeringsTitle={<>What We <span style={{ color: A }}>Manage</span></>}
      offerings={[
        { img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7", title: "Social Media Marketing", desc: "Strategy, content and community management across Instagram, Facebook and LinkedIn that grow a loyal audience." },
        { img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3", title: "Google Ads / PPC", desc: "Search, display and shopping campaigns that put you at the top of results and capture high-intent buyers." },
        { img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf", title: "Meta Ads", desc: "Precision-targeted Facebook and Instagram ad campaigns that reach the right people and drive conversions." },
        { img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2", title: "Email Marketing", desc: "Automated nurture flows and campaigns that keep your brand top-of-mind and turn subscribers into customers." },
        { img: "https://images.unsplash.com/photo-1542435503-956c469947f6", title: "Content Marketing", desc: "Blogs, creatives and video that educate, engage and build authority for your brand over time." },
        { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", title: "Analytics & Reporting", desc: "Clear dashboards tracking reach, leads, cost and ROI — so every decision is backed by data." },
      ]}
      steps={[
        { n: "01", title: "Research", desc: "We study your market, audience and competitors to find the biggest opportunities." },
        { n: "02", title: "Strategy", desc: "A channel and budget plan built around your goals, with clear targets and KPIs." },
        { n: "03", title: "Execute", desc: "We launch creatives and campaigns across the channels where your customers spend time." },
        { n: "04", title: "Optimize", desc: "Continuous testing and tuning to lower costs and scale what's driving results." },
      ]}
    />
  );
}

/* ══════════════════════════════════════════════════════════════════
   Design sub-services — each gets its own page, built from StandardLayout
   and showcasing Brandingo's real work (images in /public/Stationary Design).
══════════════════════════════════════════════════════════════════ */
const SD = "/Stationary Design";

const DESIGN_CONTENT: Record<string, StandardContent> = {
  "logo-design": {
    eyebrow: "Brand Identity",
    heading: <>A logo your customers <span style={{ color: A }}>remember</span></>,
    intro: [
      "A professional, well-designed logo is the crucial first step in establishing your brand — it creates the first impression of your company and expresses its values, all in one mark.",
      "At Brandingo we craft distinctive, versatile logos that work everywhere — from a tiny app icon to a giant hoarding — and come delivered in every format you'll ever need.",
    ],
    tags: ["Wordmark", "Lettermark", "Pictorial", "Abstract", "Mascot", "Combination"],
    stats: [{ v: "1000+", l: "Logos Designed" }, { v: "5", l: "Concepts to Start" }, { v: "∞", l: "Revisions" }, { v: "AI/CDR", l: "Source Files" }],
    offeringsTitle: <>Logos We&apos;ve <span style={{ color: A }}>Crafted</span></>,
    offerings: [
      { img: `${SD}/Logo/001.jpeg`, title: "Wordmark Logos", desc: "Clean, typography-led logos built around your brand name for instant recognition." },
      { img: `${SD}/Logo/002.jpeg`, title: "Pictorial Marks", desc: "A memorable symbol or icon that captures your brand in a single image." },
      { img: `${SD}/Logo/003.jpeg`, title: "Combination Marks", desc: "Symbol and name together — flexible identities that scale across every medium." },
      { img: `${SD}/Logo/0010.jpeg`, title: "Abstract Marks", desc: "Unique geometric forms that express your brand's personality and values." },
      { img: `${SD}/Logo/0011.jpeg`, title: "Mascot Logos", desc: "Characterful, friendly marks that give your brand a face people connect with." },
      { img: `${SD}/Logo/0012.jpeg`, title: "Lettermark Logos", desc: "Sharp monogram logos built from your initials — simple, classic and timeless." },
    ],
    steps: [
      { n: "01", title: "Discovery", desc: "We learn your brand, audience and goals through an in-depth brief." },
      { n: "02", title: "Concept", desc: "We present 5 distinct logo directions for your review." },
      { n: "03", title: "Refinement", desc: "We refine your chosen concept with unlimited revisions until it's perfect." },
      { n: "04", title: "Delivery", desc: "Final files in every format — print-ready, web, AI and CDR source." },
    ],
  },
  "stationery-design": {
    eyebrow: "Corporate Identity",
    heading: <>Stationery that sets the <span style={{ color: A }}>right tone</span></>,
    intro: [
      "Letterheads, envelopes, folders, business cards, invoices and more — well-executed stationery boosts your corporate identity and sets the tone from the very first touch.",
      "We design cohesive stationery suites that carry your brand consistently across every printed interaction with clients and partners.",
    ],
    tags: ["Business Cards", "Letterheads", "Envelopes", "Folders", "Invoices", "Bill Books"],
    stats: [{ v: "500+", l: "Suites Designed" }, { v: "100%", l: "Print-Ready" }, { v: "CMYK", l: "Colour Accurate" }, { v: "48h", l: "Avg First Draft" }],
    offeringsTitle: <>What We <span style={{ color: A }}>Design</span></>,
    offerings: [
      { img: `${SD}/Stationary Design/001.jpeg`, title: "Business Cards", desc: "Memorable, premium cards that make your first handshake count." },
      { img: `${SD}/Stationary Design/002.jpeg`, title: "Letterheads", desc: "Professional letterheads that bring authority to every communication." },
      { img: `${SD}/Stationary Design/004.jpeg`, title: "Envelopes & Folders", desc: "Branded envelopes and folders for a consistent, polished presentation." },
      { img: `${SD}/Stationary Design/005.jpeg`, title: "Invoices & Bill Books", desc: "Clean, on-brand billing documents that look as good as they function." },
      { img: `${SD}/Stationary Design/006.jpeg`, title: "Corporate Suites", desc: "Complete stationery sets that keep your identity consistent everywhere." },
      { img: `${SD}/Stationary Design/007.jpeg`, title: "Custom Print Items", desc: "Notepads, certificates and more — fully matched to your brand system." },
    ],
    steps: [
      { n: "01", title: "Brand Review", desc: "We align the stationery with your existing logo and brand guidelines." },
      { n: "02", title: "Design", desc: "We design each piece as a cohesive, professional suite." },
      { n: "03", title: "Refine", desc: "We perfect spacing, colour and layout with your feedback." },
      { n: "04", title: "Print-Ready", desc: "Delivered in CMYK, print-ready files with bleed and crop marks." },
    ],
  },
  "banner-standee-design": {
    eyebrow: "Display & Signage",
    heading: <>Displays that <span style={{ color: A }}>command attention</span></>,
    intro: [
      "Banners and standees are one of the most popular ways to market today. Portable stands — fixed, X-style, expandable or retractable — work in any size for any placement and visibility.",
      "We design bold, legible, high-impact display graphics that read clearly from across the room and pull your audience in at events, stores and exhibitions.",
    ],
    tags: ["Roll-up Standees", "X-Banners", "Flex Banners", "Backdrops", "Exhibition", "Hoardings"],
    stats: [{ v: "800+", l: "Banners Made" }, { v: "Any", l: "Size & Format" }, { v: "HD", l: "Print Quality" }, { v: "24h", l: "Fast Turnaround" }],
    offeringsTitle: <>Display Formats We <span style={{ color: A }}>Cover</span></>,
    offerings: [
      { img: `${SD}/banner design/Banner1.jpeg`, title: "Roll-up Standees", desc: "Portable retractable standees perfect for events, receptions and stores." },
      { img: `${SD}/banner design/Banner2.jpeg`, title: "X-Style Banners", desc: "Lightweight, easy-to-set-up X-banners for high-visibility placements." },
      { img: `${SD}/banner design/Banner3.jpeg`, title: "Flex Banners", desc: "Large-format flex prints for shopfronts, stages and outdoor promotion." },
      { img: `${SD}/banner design/Banner5.jpeg`, title: "Event Backdrops", desc: "Eye-catching backdrops and step-and-repeats that brand any space." },
      { img: `${SD}/banner design/Banner7.jpg`, title: "Exhibition Graphics", desc: "Booth and stall graphics designed to stand out on a crowded floor." },
      { img: `${SD}/banner design/Banner8.jpg`, title: "Hoardings", desc: "Bold outdoor hoarding designs built for impact at a distance." },
    ],
    steps: [
      { n: "01", title: "Brief", desc: "We capture the message, size and where the display will live." },
      { n: "02", title: "Design", desc: "We craft a bold, legible layout that works at a glance." },
      { n: "03", title: "Refine", desc: "We fine-tune the hierarchy and visuals with your feedback." },
      { n: "04", title: "Print-Ready", desc: "High-resolution files prepared exactly to your print specs." },
    ],
  },
  "packaging-label-design": {
    eyebrow: "Product Branding",
    heading: <>Packaging that <span style={{ color: A }}>wins the shelf</span></>,
    intro: [
      "Packaging is the exterior wrap of your product and your first physical interaction with the public — packaging and labels that convey your brand's identity, quality and reputation.",
      "We design appetising, compliant, shelf-ready packaging and labels that stand out next to the competition and make customers reach for your product.",
    ],
    tags: ["Product Boxes", "Labels", "Pouches", "Bottles", "Food Packaging", "Compliance"],
    stats: [{ v: "300+", l: "Products Branded" }, { v: "FSSAI", l: "Compliant Layouts" }, { v: "Dieline", l: "Print-Ready" }, { v: "3D", l: "Mockups" }],
    offeringsTitle: <>What We <span style={{ color: A }}>Package</span></>,
    offerings: [
      { img: `${SD}/packaging/10.jpeg`, title: "Product Boxes", desc: "Structural, eye-catching box designs built around your product and dieline." },
      { img: `${SD}/packaging/11.jpg`, title: "Labels & Stickers", desc: "Crisp, compliant labels that communicate quality at a glance." },
      { img: `${SD}/packaging/13.jpeg`, title: "Pouches & Wrappers", desc: "Flexible packaging designs optimised for snacks, spices and more." },
      { img: `${SD}/packaging/16.jpeg`, title: "Bottle & Jar Labels", desc: "Wrap-around labels designed to fit and flatter your containers." },
      { img: `${SD}/packaging/18.jpeg`, title: "Food Packaging", desc: "Appetising, FSSAI-compliant layouts for the food and beverage shelf." },
      { img: `${SD}/packaging/00e4f642-160b-48db-a900-9f6e46defb31.jpg`, title: "Retail Packaging", desc: "Premium retail packaging systems that build brand recall and trust." },
    ],
    steps: [
      { n: "01", title: "Discovery", desc: "We study your product, audience and the shelf it competes on." },
      { n: "02", title: "Concept", desc: "We design standout, on-brand packaging concepts." },
      { n: "03", title: "Compliance", desc: "We add all regulatory and nutritional information cleanly." },
      { n: "04", title: "Dieline", desc: "Print-ready artwork delivered on accurate dielines with mockups." },
    ],
  },
  "menu-design": {
    eyebrow: "Hospitality",
    heading: <>Menus that <span style={{ color: A }}>sell</span>, not just list</>,
    intro: [
      "Menus that express your eatery's personality, help customers understand your concept and promote profitability — a key part of any restaurant's marketing plan.",
      "We design beautiful, easy-to-read menus that guide diners toward your best dishes and reflect the experience your brand promises.",
    ],
    tags: ["Dine-in Menus", "Takeaway Menus", "Café Boards", "Digital Menus", "QR Menus", "Bar Menus"],
    stats: [{ v: "200+", l: "Menus Designed" }, { v: "Print+QR", l: "Formats" }, { v: "Appetising", l: "Food Styling" }, { v: "Fast", l: "Turnaround" }],
    offeringsTitle: <>Menus We <span style={{ color: A }}>Design</span></>,
    offerings: [
      { img: `${SD}/menu/006.jpeg`, title: "Dine-in Menus", desc: "Elegant, well-structured menus that elevate the dining experience." },
      { img: `${SD}/menu/007.jpeg`, title: "Café & Bar Menus", desc: "Characterful menus that match the vibe of your café or bar." },
      { img: `${SD}/menu/008.jpeg`, title: "Takeaway Menus", desc: "Clear, compact menus designed for delivery and takeaway orders." },
      { img: `${SD}/menu/009.jpeg`, title: "Menu Boards", desc: "High-visibility wall and counter boards for quick-service outlets." },
      { img: `${SD}/menu/5.jpeg`, title: "QR / Digital Menus", desc: "Mobile-friendly digital menus accessible via a simple scan." },
      { img: `${SD}/menu/22abc10e-7fe9-47e9-afde-66b23649dca5.jpg`, title: "Specials & Inserts", desc: "Seasonal specials and insert cards that drive higher-margin sales." },
    ],
    steps: [
      { n: "01", title: "Concept", desc: "We capture your cuisine, pricing strategy and brand personality." },
      { n: "02", title: "Layout", desc: "We structure the menu to highlight your most profitable dishes." },
      { n: "03", title: "Design", desc: "We add styling, imagery and polish that whets the appetite." },
      { n: "04", title: "Delivery", desc: "Print-ready and digital/QR-ready versions delivered together." },
    ],
  },
  "invitation-card-design": {
    eyebrow: "Events & Celebrations",
    heading: <>Invitations that set the <span style={{ color: A }}>tone</span></>,
    intro: [
      "Beautifully crafted invitation cards for weddings, events and celebrations — designed to set the tone and make a memorable first impression.",
      "From traditional to contemporary, we design invitations that feel personal, premium and perfectly matched to your occasion.",
    ],
    tags: ["Wedding", "Corporate", "Birthday", "Religious", "Digital", "E-Invites"],
    stats: [{ v: "400+", l: "Invites Designed" }, { v: "Print+Digital", l: "Formats" }, { v: "Premium", l: "Finishes" }, { v: "Custom", l: "Every Time" }],
    offeringsTitle: <>Invitations We <span style={{ color: A }}>Create</span></>,
    offerings: [
      { img: `${SD}/invtations/00b00e3b-0acd-4b3b-9af0-8c57be93ebbd.jpg`, title: "Wedding Invitations", desc: "Elegant, personal wedding suites that set the mood for the big day." },
      { img: `${SD}/invtations/06dd1cb4-20a9-4955-9c64-12960fb781cb.jpg`, title: "Corporate Invites", desc: "Polished invitations for launches, conferences and company events." },
      { img: `${SD}/invtations/17476ecc-0f75-4d03-b125-48839fee5cdc.jpg`, title: "Birthday & Party", desc: "Fun, vibrant cards that bring the energy of your celebration." },
      { img: `${SD}/invtations/1d1e40ae-ce91-4086-90a5-5b8b28b879e4.jpg`, title: "Religious Ceremonies", desc: "Thoughtful designs for poojas, housewarmings and traditional events." },
      { img: `${SD}/invtations/310ac3d1-96fa-479e-b791-74443b2e993d.jpg`, title: "Digital E-Invites", desc: "Shareable digital invitations ready for WhatsApp and social media." },
      { img: `${SD}/invtations/433087ee-31fc-4d76-8d10-a572809406a6.jpg`, title: "Premium Cards", desc: "Foil, emboss and special-finish cards for an unforgettable feel." },
    ],
    steps: [
      { n: "01", title: "Brief", desc: "We learn about your event, theme and personal preferences." },
      { n: "02", title: "Design", desc: "We craft a bespoke invitation concept around your occasion." },
      { n: "03", title: "Refine", desc: "We perfect the wording, colours and details with you." },
      { n: "04", title: "Delivery", desc: "Print-ready files plus a digital version to share online." },
    ],
  },
  "tag-design": {
    eyebrow: "Retail Details",
    heading: <>Tags that add a <span style={{ color: A }}>premium touch</span></>,
    intro: [
      "Custom tags that carry your brand — from price and care tags to gift and product tags — designed for clarity, character and a premium feel.",
      "The smallest details often leave the biggest impression. We design tags that complete your product's look and reinforce your brand at the point of purchase.",
    ],
    tags: ["Price Tags", "Care Labels", "Gift Tags", "Product Tags", "Hang Tags", "Swing Tags"],
    stats: [{ v: "Premium", l: "Finishes" }, { v: "Brand-Matched", l: "Every Tag" }, { v: "Die-cut", l: "Shapes" }, { v: "Print-Ready", l: "Files" }],
    offeringsTitle: <>Tags We <span style={{ color: A }}>Design</span></>,
    offerings: [
      { img: `${SD}/tag design/a05665c2-b65d-4329-8476-5212f02a5f1b.jpg`, title: "Product & Hang Tags", desc: "Branded swing tags that give apparel and products a premium finish." },
      { img: `${SD}/tag design/cf1415eb-6277-4e47-a503-e1c074aad145.jpg`, title: "Price & Care Tags", desc: "Clear, on-brand price and care tags that inform without clutter." },
      { img: `${SD}/tag design/WhatsApp Image 2026-04-09 at 12.03.20.jpeg`, title: "Gift & Custom Tags", desc: "Distinctive gift and custom-shaped tags for a thoughtful touch." },
    ],
    steps: [
      { n: "01", title: "Brief", desc: "We learn your product, materials and where the tag will live." },
      { n: "02", title: "Design", desc: "We design tags that match your brand and product perfectly." },
      { n: "03", title: "Refine", desc: "We adjust shape, size and finish with your feedback." },
      { n: "04", title: "Delivery", desc: "Die-cut, print-ready artwork delivered in every format." },
    ],
  },
  "brochure-design": {
    eyebrow: "Print Marketing",
    heading: <>Brochures that tell your <span style={{ color: A }}>story</span></>,
    intro: [
      "Brochures extend your customers' knowledge of your business — introducing your company and giving a snapshot of your products, services, features and contact information.",
      "We design clear, persuasive brochures and company profiles that guide the reader through your offering and leave a lasting, professional impression.",
    ],
    tags: ["Bi-fold", "Tri-fold", "Company Profile", "Catalogues", "Flyers", "Booklets"],
    stats: [{ v: "600+", l: "Brochures Designed" }, { v: "Any", l: "Fold & Format" }, { v: "Print-Ready", l: "Artwork" }, { v: "Copy+Design", l: "Support" }],
    offeringsTitle: <>Print Pieces We <span style={{ color: A }}>Produce</span></>,
    offerings: [
      { img: `${SD}/Brouchers & File/001.jpg`, title: "Bi-fold Brochures", desc: "Clean two-panel brochures perfect for a focused, single message." },
      { img: `${SD}/Brouchers & File/002.jpeg`, title: "Tri-fold Brochures", desc: "Classic three-panel brochures that organise your offering neatly." },
      { img: `${SD}/Brouchers & File/003.jpeg`, title: "Company Profiles", desc: "Premium profile booklets that present your business with authority." },
      { img: `${SD}/Brouchers & File/0011.jpeg`, title: "Product Catalogues", desc: "Multi-page catalogues that showcase your full range beautifully." },
      { img: `${SD}/Brouchers & File/0013.jpg`, title: "Flyers & Leaflets", desc: "Single-page promos designed to grab attention and drive action." },
      { img: `${SD}/Brouchers & File/0014.jpeg`, title: "Booklets & Folders", desc: "Bound booklets and presentation folders for a complete pitch." },
    ],
    steps: [
      { n: "01", title: "Content", desc: "We organise your message, sections and key selling points." },
      { n: "02", title: "Layout", desc: "We structure a clear reading flow across every panel or page." },
      { n: "03", title: "Design", desc: "We add imagery, colour and polish that reflects your brand." },
      { n: "04", title: "Print-Ready", desc: "Delivered with correct folds, bleed and crop marks for printing." },
    ],
  },
  "bag-design": {
    eyebrow: "Brand on the Move",
    heading: <>Bags that carry your <span style={{ color: A }}>brand everywhere</span></>,
    intro: [
      "Custom-designed bags that carry your brand wherever your customers go — a walking advertisement that keeps your identity visible long after the sale.",
      "From paper carry bags to cloth and premium retail bags, we design pieces that look great, feel premium and turn every customer into a brand ambassador.",
    ],
    tags: ["Paper Bags", "Carry Bags", "Cloth Bags", "Gift Bags", "Retail Bags", "Eco-Friendly"],
    stats: [{ v: "Custom", l: "Every Design" }, { v: "Premium", l: "Materials" }, { v: "Dieline", l: "Print-Ready" }, { v: "Eco", l: "Options" }],
    offeringsTitle: <>Bags We <span style={{ color: A }}>Design</span></>,
    offerings: [
      { img: `${SD}/Bag Design/0b62f83c-13c9-4788-8ae8-9ef59b9258a9.jpg`, title: "Paper Carry Bags", desc: "Branded paper bags that give every purchase a premium send-off." },
      { img: `${SD}/Bag Design/1d6d067c-920a-4729-bd44-f38e1b29370b.jpg`, title: "Retail Shopping Bags", desc: "Eye-catching retail bags that keep your brand on the street." },
      { img: `${SD}/Bag Design/2f385020-020d-49a7-88f5-7d63b11b91d0.jpg`, title: "Cloth & Tote Bags", desc: "Reusable cloth totes that pair sustainability with brand visibility." },
      { img: `${SD}/Bag Design/44cb8c43-f272-4e86-ab6a-6b6f000e4991.jpg`, title: "Gift Bags", desc: "Special-occasion gift bags designed for a memorable unboxing." },
      { img: `${SD}/Bag Design/4594d9ad-7ee4-4135-8cc3-4beb1a314009.jpg`, title: "Premium Bags", desc: "Luxe finishes and structures for high-end retail experiences." },
      { img: `${SD}/Bag Design/7d397ec4-01c4-416e-9a8a-8c96da387090.jpg`, title: "Eco-Friendly Bags", desc: "Sustainable, recyclable bag designs that customers feel good carrying." },
    ],
    steps: [
      { n: "01", title: "Brief", desc: "We learn your brand, materials and how the bag will be used." },
      { n: "02", title: "Design", desc: "We design a bag that's on-brand, practical and premium." },
      { n: "03", title: "Refine", desc: "We adjust size, handles and finish with your feedback." },
      { n: "04", title: "Dieline", desc: "Accurate, print-ready dielines delivered with mockups." },
    ],
  },
};

/* ── Route → Layout map ───────────────────────────────────────── */
const LAYOUTS: Record<string, React.FC> = {
  "graphic-designing":           GraphicDesigning,
  "website-development":         WebsiteDevelopment,
  "search-engine-optimization": SearchEngineOptimization,
  "digital-marketing":           DigitalMarketing,
  // Each design sub-service renders the shared StandardLayout with its own content.
  ...Object.fromEntries(
    Object.entries(DESIGN_CONTENT).map(([slug, content]) => [
      slug,
      function DesignServiceLayout() {
        // Design pages drop the process timeline — the full work gallery follows instead.
        return <StandardLayout {...content} steps={[]} />;
      },
    ])
  ),
};

/* ── Service slug → work folder (in lib/work-images manifest) ──── */
const SERVICE_FOLDER: Record<string, string> = {
  "logo-design": "Logo",
  "stationery-design": "Stationary Design",
  "banner-standee-design": "banner design",
  "packaging-label-design": "packaging",
  "menu-design": "menu",
  "invitation-card-design": "invtations",
  "tag-design": "tag design",
  "brochure-design": "Brouchers & File",
  "bag-design": "Bag Design",
};

/* ── Full work gallery — every image for this service ───────────── */
function WorkGallery({ title, images }: { title: string; images: string[] }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (!images.length) return null;
  return (
    // Continues the offerings section above so the work
    // sits under a single "{offeringsTitle}" heading — no duplicate heading here.
    <section style={{ padding: "0 0 80px", background: isDark ? "#0c0e14" : "#f8f9fb", transition: "background 0.3s ease" }}>
      <div className="site-wrap">
        <div style={{ columnGap: "18px" }} className="columns-1 sm:columns-2 lg:columns-3">
          {images.map((src, i) => (
            <div key={src} style={{ marginBottom: "18px", overflow: "hidden", background: "#0b0b0b", breakInside: "avoid" }} className="group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${title} design ${i + 1} by Brandingo`}
                loading="lazy"
                style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.5s ease" }}
                className="group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Page shell ───────────────────────────────────────────────── */
export default function ServicePageClient({ service }: { service: ServiceMeta }) {
  const Layout = LAYOUTS[service.slug];
  const galleryFolder = SERVICE_FOLDER[service.slug];
  const galleryImages = galleryFolder ? workImages[galleryFolder] ?? [] : [];
  return (
    <>
      <Navbar />
      <ServiceHero service={service} />
      {Layout ? <Layout /> : null}
      <WorkGallery title={service.title.replace(/ Design$/, "")} images={galleryImages} />
      <Footer />
    </>
  );
}
