"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, CheckCircle2, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ServiceMeta } from "@/lib/services-data";

const A = "#f58220"; // accent orange

/* ── Shared hero ──────────────────────────────────────────────────── */
function ServiceHero({ service }: { service: ServiceMeta }) {
  return (
    <section style={{ position: "relative", height: "440px", display: "flex", alignItems: "flex-end", paddingBottom: "56px", overflow: "hidden" }}>
      <Image src={service.heroImage} alt={service.title} fill style={{ objectFit: "cover", objectPosition: "center 30%" }} priority unoptimized />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(11,60,93,0.88) 0%, rgba(245,130,32,0.82) 100%)" }} />
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

/* ── Shared CTA ───────────────────────────────────────────────────── */
function ServiceCTA() {
  return (
    <section style={{ background: A, padding: "64px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg,transparent,transparent 30px,rgba(0,0,0,0.04) 30px,rgba(0,0,0,0.04) 31px)" }} />
      <div className="site-wrap" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 900, color: "#000", marginBottom: "12px" }}>
          Ready to Get Started?
        </h2>
        <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "16px", marginBottom: "28px", maxWidth: "480px", margin: "0 auto 28px" }}>
          Let&apos;s discuss your project and create something extraordinary together.
        </p>
        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 36px", background: "#000", color: "#fff", fontWeight: 700, borderRadius: "999px", fontSize: "15px", transition: "background 0.2s" }} className="hover:bg-[#1a1a1a]">
          Get a Free Quote <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   1. GRAPHIC DESIGNING — grid cards + process timeline
══════════════════════════════════════════════════════════════════ */
function GraphicDesigning() {
  const offerings = [
    { img: "https://images.unsplash.com/photo-1626785774573-4b799315345d", title: "Logo Design", desc: "A professional, well-designed logo is the crucial first step in establishing your brand — it creates the first impression of your company and expresses its values all in one." },
    { img: "https://images.unsplash.com/photo-1542435503-956c469947f6", title: "Brochure Design", desc: "Brochures extend your customers' knowledge of your business — introducing your company and giving a snapshot of your products, services, features and contact information." },
    { img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740", title: "Stationery Design", desc: "Letterheads, envelopes, folders, business cards, invoices and more — well-executed stationery boosts your corporate identity and sets the tone from the very first touch." },
    { img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e", title: "Banner & Standee Design", desc: "One of the most popular ways to market today. Portable stands — fixed, X-style, expandable or retractable — work in any size for any placement and visibility." },
    { img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113", title: "Social Media Poster", desc: "Eye-catching posters that help you reach your audience and stay consistent across every major social network — planned, scheduled and on-brand." },
    { img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61", title: "Pamphlet Design", desc: "Advertising or informational leaflets and booklets, written simply for the layman — perfect for spreading your message clearly and affordably." },
    { img: "https://images.unsplash.com/photo-1455390582262-044cdead277a", title: "Quotes Design", desc: "Design sets you apart and evokes the right emotion in your audience. A great quote inspires — thoughtful graphic design amplifies your marketing efforts." },
    { img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da", title: "Packaging Design", desc: "The exterior wrap of your product and your first physical interaction with the public — conveying your brand's identity, quality and reputation." },
    { img: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a", title: "Nameplate Design", desc: "Nameplates that support your brand, showcase your logo and relay key information — effective design centred on clear communication." },
    { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0", title: "Menu Design", desc: "Menus that express your eatery's personality, help customers understand your concept and promote profitability — key to any restaurant's marketing plan." },
    { img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5", title: "UI/UX Design", desc: "UI design shapes how interfaces look; UX design shapes how the whole experience feels — together they make digital products intuitive and delightful." },
    { img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb", title: "Vector Design", desc: "Artwork built from points, lines and curves that stays crisp at any size — ideal for logos, line art, 3D-like renders and animation." },
    { img: "https://images.unsplash.com/photo-1561070791-2526d30994b5", title: "Digital Painting", desc: "Digital artwork that emulates traditional painting — oils, acrylics, watercolours and ink — created with full creative freedom." },
    { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4", title: "Signature Logo", desc: "A structured relationship between logotype, brand mark and tagline — the core brand elements, laid out with rules in your style guide." },
    { img: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b", title: "Sticker Design", desc: "Versatile, multipurpose stickers with unique typography that expresses your brand's character and creates the right feeling." },
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
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="site-wrap">
          <div style={{ display: "grid", gap: "60px", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div style={{ width: "32px", height: "2px", background: A }} />
                <span style={{ color: A, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Creative Studio</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "16px", lineHeight: 1.25 }}>
                Design that drives <span style={{ color: A }}>recognition</span> and results
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "16px" }}>
                Great design is the foundation of every strong brand. Our team of senior graphic designers brings 17+ years of collective experience to every project — from brand-new identity systems to revitalising established brands.
              </p>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "28px" }}>
                We believe design should solve problems, not just look pretty. Every creative decision we make is intentional and aligned with your business objectives.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {["Brand Identity", "Logo Design", "Social Media", "Print", "Packaging", "UI/UX"].map(t => (
                  <span key={t} style={{ padding: "6px 14px", background: "#fff5eb", color: A, fontWeight: 600, fontSize: "12px", borderRadius: "999px", border: `1px solid ${A}33` }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[{ v: "500+", l: "Projects Delivered" }, { v: "17+", l: "Years of Expertise" }, { v: "100%", l: "Client Satisfaction" }, { v: "48h", l: "Avg First Draft" }].map(s => (
                <div key={s.l} style={{ padding: "28px 20px", border: "1px solid rgba(0,0,0,0.07)", textAlign: "center", background: "#fafafa" }}>
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: A }}>{s.v}</div>
                  <div style={{ color: "#888", fontSize: "13px", marginTop: "4px" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offerings grid */}
      <section style={{ padding: "80px 0", background: "#f8f9fb" }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: "#1a1a1a", textAlign: "center", marginBottom: "48px" }}>
            What We <span style={{ color: A }}>Design</span>
          </h2>
          <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map(o => (
              <div key={o.title} style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", overflow: "hidden", display: "flex", flexDirection: "column", transition: "border-color 0.2s, transform 0.2s" }} className="card-hover group">
                <div style={{ position: "relative", width: "100%", height: "190px", overflow: "hidden" }}>
                  <Image src={`${o.img}?w=640&q=70`} alt={o.title} fill unoptimized sizes="(max-width: 640px) 100vw, 380px" style={{ objectFit: "cover", transition: "transform 0.5s ease" }} className="group-hover:scale-110" />
                </div>
                <div style={{ padding: "24px 26px 28px" }}>
                  <h3 style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "16px", marginBottom: "8px" }} className="group-hover:text-[#f58220]">{o.title}</h3>
                  <p style={{ color: "#888", fontSize: "13.5px", lineHeight: 1.7 }}>{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: "#1a1a1a", textAlign: "center", marginBottom: "56px" }}>
            Our <span style={{ color: A }}>Design Process</span>
          </h2>
          <div style={{ display: "grid", gap: "0", position: "relative" }} className="sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.n} style={{ padding: "32px 24px", position: "relative", borderTop: `3px solid ${i === 0 ? A : "#e5e7eb"}`, background: "#fff" }}>
                <div style={{ fontSize: "3rem", fontWeight: 900, color: i === 0 ? A : "#e5e7eb", lineHeight: 1, marginBottom: "12px" }}>{s.n}</div>
                <h3 style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "16px", marginBottom: "8px" }}>{s.title}</h3>
                <p style={{ color: "#888", fontSize: "13.5px", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   2. DIGITAL MARKETING — stats strip + channel cards + case study
══════════════════════════════════════════════════════════════════ */
function DigitalMarketing() {
  const channels = [
    { icon: "📘", title: "Social Media Marketing", desc: "Facebook, Instagram, LinkedIn — we grow your following and convert fans into customers." },
    { icon: "📧", title: "Email Marketing", desc: "Personalised email campaigns with high open rates that nurture leads through the funnel." },
    { icon: "✍️", title: "Content Marketing", desc: "Blog posts, articles, and thought-leadership content that builds authority and drives SEO." },
    { icon: "🎯", title: "Paid Social Ads", desc: "Laser-targeted Meta and LinkedIn ads that reach your ideal customer profile." },
    { icon: "📹", title: "Video Marketing", desc: "Short-form reels, explainer videos, and product demos that drive engagement." },
    { icon: "🤝", title: "Influencer Marketing", desc: "Strategic influencer partnerships that amplify your brand message authentically." },
  ];
  return (
    <>
      {/* Stats strip */}
      <section style={{ background: "#1a1a1a", padding: "32px 0" }}>
        <div className="site-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "24px" }}>
            {[{ v: "3.2x", l: "Average ROAS" }, { v: "68%", l: "Avg Engagement Lift" }, { v: "200+", l: "Campaigns Run" }, { v: "15+", l: "Industries Served" }].map(s => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: A }}>{s.v}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginTop: "4px" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="site-wrap">
          <div style={{ display: "grid", gap: "60px", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div style={{ width: "32px", height: "2px", background: A }} />
                <span style={{ color: A, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Growth Engine</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "16px", lineHeight: 1.25 }}>
                Marketing that <span style={{ color: A }}>grows</span> your business
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "16px" }}>
                Digital marketing is no longer optional — it&apos;s the primary growth engine for modern businesses. Our data-driven approach ensures every rupee you spend works harder.
              </p>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "28px" }}>
                We don&apos;t just run campaigns. We build strategies. From audience research to creative production to performance analysis, we manage your entire digital marketing ecosystem.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Strategy-first approach tailored to your goals", "Full-funnel campaigns from awareness to conversion", "Real-time reporting & transparent analytics", "Dedicated account manager for your brand"].map(i => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={16} style={{ color: A, flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ color: "#555", fontSize: "14px" }}>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "#f8f9fb", padding: "36px", border: "1px solid rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontWeight: 700, color: "#1a1a1a", marginBottom: "20px", fontSize: "17px" }}>Our Approach</h3>
              {["Audit & Research", "Strategy Development", "Content Creation", "Campaign Launch", "Optimise & Scale"].map((step, i) => (
                <div key={step} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 0", borderBottom: i < 4 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: A, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                  <span style={{ color: "#444", fontWeight: 500, fontSize: "14px" }}>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section style={{ padding: "80px 0", background: "#f8f9fb" }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: "#1a1a1a", textAlign: "center", marginBottom: "48px" }}>
            Digital Marketing <span style={{ color: A }}>Channels</span>
          </h2>
          <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2 lg:grid-cols-3">
            {channels.map(c => (
              <div key={c.title} style={{ padding: "28px", background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }} className="card-hover">
                <div style={{ fontSize: "2rem", marginBottom: "14px" }}>{c.icon}</div>
                <h3 style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "15px", marginBottom: "8px" }}>{c.title}</h3>
                <p style={{ color: "#888", fontSize: "13.5px", lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   3. WEBSITE DEVELOPMENT — feature showcase + tech stack + timeline
══════════════════════════════════════════════════════════════════ */
function WebsiteDevelopment() {
  const features = [
    { icon: "⚡", title: "Lightning Fast", desc: "Optimised for Core Web Vitals — every site we build scores 90+ on PageSpeed." },
    { icon: "📱", title: "Mobile First", desc: "Pixel-perfect on every device: mobile, tablet, and desktop." },
    { icon: "🔒", title: "Secure & Reliable", desc: "SSL, regular backups, and 99.9% uptime guaranteed." },
    { icon: "🎨", title: "Custom Design", desc: "No templates. Every layout is purpose-built for your brand." },
    { icon: "🔍", title: "SEO Ready", desc: "Clean code, semantic HTML, and structured data baked in from day one." },
    { icon: "⚙️", title: "Easy to Manage", desc: "User-friendly CMS so your team can update content without technical help." },
  ];
  const stack = ["React", "Next.js", "WordPress", "Node.js", "Shopify", "Webflow", "Figma", "Tailwind"];
  const types = [
    { t: "Business Websites", d: "Professional 5–15 page sites that showcase your services and build credibility.", p: "From ₹25,000" },
    { t: "E-Commerce Stores", d: "Full-featured online shops with payment gateway, inventory, and order management.", p: "From ₹60,000" },
    { t: "Landing Pages", d: "High-converting single-page campaigns for product launches and lead generation.", p: "From ₹12,000" },
    { t: "Web Applications", d: "Custom portals, dashboards, and SaaS products built to your exact specifications.", p: "Custom Quote" },
  ];
  return (
    <>
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="site-wrap">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", justifyContent: "center" }}>
            <div style={{ width: "32px", height: "2px", background: A }} />
            <span style={{ color: A, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Full-Stack Development</span>
            <div style={{ width: "32px", height: "2px", background: A }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 800, color: "#1a1a1a", textAlign: "center", marginBottom: "16px" }}>
            Websites built for <span style={{ color: A }}>performance</span>
          </h2>
          <p style={{ color: "#666", textAlign: "center", maxWidth: "600px", margin: "0 auto 56px", lineHeight: 1.75 }}>
            Your website is your hardest-working salesperson — available 24/7. We build websites that don&apos;t just look great, they convert visitors into customers.
          </p>
          <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2 lg:grid-cols-3">
            {features.map(f => (
              <div key={f.title} style={{ padding: "32px 28px", border: "1px solid rgba(0,0,0,0.07)", background: "#fafafa" }} className="card-hover">
                <div style={{ fontSize: "2.2rem", marginBottom: "16px" }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "16px", marginBottom: "8px" }}>{f.title}</h3>
                <p style={{ color: "#888", fontSize: "13.5px", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website types */}
      <section style={{ padding: "80px 0", background: "#f8f9fb" }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: "#1a1a1a", textAlign: "center", marginBottom: "48px" }}>
            Types of <span style={{ color: A }}>Websites</span> We Build
          </h2>
          <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2">
            {types.map((t, i) => (
              <div key={t.t} style={{ padding: "36px 32px", background: i % 2 === 0 ? "#fff" : "#fff5eb", border: `1px solid ${i % 2 === 0 ? "rgba(0,0,0,0.07)" : `${A}33`}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <h3 style={{ fontWeight: 800, color: "#1a1a1a", fontSize: "17px" }}>{t.t}</h3>
                  <span style={{ color: A, fontWeight: 700, fontSize: "13px", whiteSpace: "nowrap", marginLeft: "12px" }}>{t.p}</span>
                </div>
                <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.7 }}>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section style={{ padding: "60px 0", background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="site-wrap">
          <p style={{ textAlign: "center", color: "#aaa", fontSize: "12px", letterSpacing: "3px", fontWeight: 600, textTransform: "uppercase", marginBottom: "28px" }}>Technologies We Use</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {stack.map(s => (
              <span key={s} style={{ padding: "10px 22px", border: "1.5px solid #e5e7eb", fontWeight: 600, color: "#444", fontSize: "13px", borderRadius: "0", transition: "border-color 0.2s, color 0.2s" }} className="hover:border-[#f58220] hover:text-[#f58220]">{s}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   4. SEO — 4-pillar cards + checklist + FAQ accordion
══════════════════════════════════════════════════════════════════ */
function SEO() {
  const pillars = [
    { icon: "🔑", title: "Keyword Research", desc: "We identify the exact search terms your customers use and build your strategy around them." },
    { icon: "📝", title: "On-Page SEO", desc: "Optimised title tags, meta descriptions, headings, and content structure on every page." },
    { icon: "🔗", title: "Link Building", desc: "High-quality backlinks from authoritative domains that boost your domain authority." },
    { icon: "⚙️", title: "Technical SEO", desc: "Site speed, crawlability, schema markup, and Core Web Vitals — we fix it all." },
  ];
  const faqs = [
    { q: "How long before I see SEO results?", a: "SEO is a long-term strategy. Most clients see meaningful improvement in 3–6 months, with significant gains at 6–12 months." },
    { q: "Do you guarantee #1 rankings?", a: "No legitimate SEO agency can guarantee #1 rankings. We guarantee ethical, proven strategies that consistently improve your visibility." },
    { q: "Will my rankings drop if I stop SEO?", a: "Potentially, yes. SEO requires ongoing maintenance. We offer affordable monthly retainers to sustain and grow your rankings." },
    { q: "Do you handle local SEO?", a: "Absolutely. Google Business Profile optimisation, local citations, and location-specific content are core parts of our offering." },
  ];
  return (
    <>
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="site-wrap">
          <div style={{ display: "grid", gap: "60px", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div style={{ width: "32px", height: "2px", background: A }} />
                <span style={{ color: A, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Organic Growth</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "16px", lineHeight: 1.25 }}>
                Rank higher. <span style={{ color: A }}>Get found.</span> Grow faster.
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "28px" }}>
                91% of online experiences start with a search engine. If your business isn&apos;t showing up on page 1 of Google, you&apos;re invisible to the majority of your potential customers. Our SEO services change that.
              </p>
              <div style={{ background: "#f8f9fb", padding: "28px", border: `2px solid ${A}33` }}>
                <p style={{ fontWeight: 700, color: "#1a1a1a", marginBottom: "16px", fontSize: "15px" }}>✅ Our SEO Checklist</p>
                {["Comprehensive keyword audit", "Competitor gap analysis", "On-page optimisation", "Technical health fixes", "Content strategy & creation", "Monthly rank tracking reports"].map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: A, flexShrink: 0 }} />
                    <span style={{ color: "#555", fontSize: "14px" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
                {[{ v: "↑ 214%", l: "Avg Organic Traffic Increase" }, { v: "↑ 68%", l: "Avg Keyword Rankings Improved" }, { v: "3.8x", l: "Average Lead Quality Uplift" }, { v: "6mo", l: "Avg Time to First-Page Results" }].map(s => (
                  <div key={s.l} style={{ padding: "24px 18px", background: "#f8f9fb", border: "1px solid rgba(0,0,0,0.06)", textAlign: "center" }}>
                    <div style={{ fontSize: "1.6rem", fontWeight: 900, color: A }}>{s.v}</div>
                    <div style={{ color: "#888", fontSize: "12px", marginTop: "4px", lineHeight: 1.4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ padding: "80px 0", background: "#f8f9fb" }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: "#1a1a1a", textAlign: "center", marginBottom: "48px" }}>
            The 4 Pillars of Our <span style={{ color: A }}>SEO Strategy</span>
          </h2>
          <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div key={p.title} style={{ padding: "32px 24px", background: "#fff", borderTop: `4px solid ${i === 0 ? A : "#e5e7eb"}`, border: "1px solid rgba(0,0,0,0.06)", borderTopWidth: "4px", borderTopColor: i < 2 ? A : "#e5e7eb" }}>
                <div style={{ fontSize: "2rem", marginBottom: "14px" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "15px", marginBottom: "8px" }}>{p.title}</h3>
                <p style={{ color: "#888", fontSize: "13.5px", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="site-wrap" style={{ maxWidth: "760px" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: "#1a1a1a", textAlign: "center", marginBottom: "48px" }}>
            Frequently Asked <span style={{ color: A }}>Questions</span>
          </h2>
          {faqs.map((faq, i) => (
            <div key={faq.q} style={{ borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "24px 0" }}>
              <h3 style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "15px", marginBottom: "10px" }}>{faq.q}</h3>
              <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.75 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   5. HOARDING & KIOSK — 2-col types + specs + why OOH
══════════════════════════════════════════════════════════════════ */
function HoardingKiosk() {
  const types = [
    { icon: "🏙️", title: "Highway Hoardings", desc: "Large-format billboards on high-traffic highways with maximum brand exposure — seen by thousands daily." },
    { icon: "🏢", title: "Building Wraps", desc: "Full-building vinyl wraps that turn skyscrapers into giant brand statements." },
    { icon: "🛒", title: "Retail Kiosks", desc: "Freestanding in-mall and high-street kiosks that engage shoppers at the point of decision." },
    { icon: "🚌", title: "Transit Advertising", desc: "Bus shelters, metro stations, and vehicle wraps that travel with your audience." },
    { icon: "💡", title: "LED Displays", desc: "Dynamic digital hoardings with animated content that captures attention 24/7." },
    { icon: "🎪", title: "Event Signage", desc: "Event-specific branding: stage backdrops, directional signage, and sponsor boards." },
  ];
  return (
    <>
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="site-wrap">
          <div style={{ display: "grid", gap: "60px", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div style={{ width: "32px", height: "2px", background: A }} />
                <span style={{ color: A, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Out-of-Home Advertising</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "16px", lineHeight: 1.25 }}>
                Dominate the <span style={{ color: A }}>physical world</span>
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "16px" }}>
                In an age of screen fatigue, outdoor advertising cuts through the digital noise. A well-placed hoarding or kiosk in the right location reaches thousands of potential customers every single day.
              </p>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "28px" }}>
                We handle everything — creative design, material sourcing, printing, and on-site installation — so you can focus on your business while your brand speaks to the world.
              </p>
              {["Site selection & traffic analysis", "High-resolution large-format printing", "Weatherproof materials for long life", "Professional installation crew", "Maintenance & replacement services"].map(i => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <CheckCircle2 size={15} style={{ color: A, flexShrink: 0 }} />
                  <span style={{ color: "#555", fontSize: "14px" }}>{i}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "#1a1a1a", padding: "40px", color: "#fff" }}>
              <h3 style={{ fontWeight: 800, fontSize: "18px", marginBottom: "24px", color: A }}>Why Out-of-Home Works</h3>
              {[{ v: "72%", l: "of consumers notice roadside billboards" }, { v: "58%", l: "learn about events from OOH ads" }, { v: "4x", l: "better brand recall than digital alone" }, { v: "24/7", l: "exposure — never sleeps, never buffering" }].map(s => (
                <div key={s.l} style={{ display: "flex", gap: "16px", marginBottom: "20px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.5rem", fontWeight: 900, color: A, minWidth: "56px" }}>{s.v}</span>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.5 }}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#f8f9fb" }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: "#1a1a1a", textAlign: "center", marginBottom: "48px" }}>
            Our <span style={{ color: A }}>Advertising Formats</span>
          </h2>
          <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2 lg:grid-cols-3">
            {types.map(t => (
              <div key={t.title} style={{ padding: "28px", background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }} className="card-hover">
                <div style={{ fontSize: "2rem", marginBottom: "14px" }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "15px", marginBottom: "8px" }}>{t.title}</h3>
                <p style={{ color: "#888", fontSize: "13.5px", lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   6. EXHIBITION STALL — stall types + what's included + testimonial
══════════════════════════════════════════════════════════════════ */
function ExhibitionStall() {
  const stallTypes = [
    { title: "Inline Stall", size: "3×3m to 6×3m", desc: "Space-efficient stalls for first-time exhibitors or smaller budgets — big impact in a compact footprint.", color: "#fff5eb" },
    { title: "Island Stall", size: "6×6m and above", desc: "Open on all four sides, creating a 360° brand experience that draws visitors from across the hall.", color: "#f8f9fb" },
    { title: "Peninsula Stall", size: "6×9m", desc: "Open on three sides with a strong anchor wall — ideal for product showcases and live demonstrations.", color: "#fff5eb" },
    { title: "Two-Storey Stall", size: "Custom", desc: "Double-deck structures that maximise floor space with a mezzanine level for VIP meetings.", color: "#f8f9fb" },
  ];
  const included = ["Concept design & 3D renders", "Material procurement & fabrication", "On-site installation & dismantling", "Branded signage, lighting & AV", "Storage areas & meeting zones", "Post-event logistics support"];
  return (
    <>
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="site-wrap">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", justifyContent: "center" }}>
            <div style={{ width: "32px", height: "2px", background: A }} />
            <span style={{ color: A, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Exhibition Excellence</span>
            <div style={{ width: "32px", height: "2px", background: A }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 800, color: "#1a1a1a", textAlign: "center", marginBottom: "16px" }}>
            Stalls that stop <span style={{ color: A }}>traffic</span>
          </h2>
          <p style={{ color: "#666", textAlign: "center", maxWidth: "600px", margin: "0 auto 56px", lineHeight: 1.75 }}>
            At exhibitions, your stall is your brand. In a hall of hundreds of competitors, your stall must immediately communicate who you are, what you offer, and why visitors should stop. We make that happen.
          </p>

          <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2">
            {stallTypes.map(s => (
              <div key={s.title} style={{ padding: "32px", background: s.color, border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                  <h3 style={{ fontWeight: 800, color: "#1a1a1a", fontSize: "17px" }}>{s.title}</h3>
                  <span style={{ padding: "4px 12px", background: A, color: "#fff", fontSize: "11px", fontWeight: 700, borderRadius: "999px", whiteSpace: "nowrap", marginLeft: "12px" }}>{s.size}</span>
                </div>
                <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#1a1a1a" }}>
        <div className="site-wrap">
          <div style={{ display: "grid", gap: "60px", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: "#fff", marginBottom: "24px" }}>
                Everything <span style={{ color: A }}>included</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: "28px", fontSize: "15px" }}>
                We are a one-stop-shop for exhibition requirements. From the first design sketch to the final screw on day one — we&apos;ve got it covered.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {included.map(i => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <CheckCircle2 size={15} style={{ color: A, flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>{i}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: "40px", background: A }}>
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>⭐</div>
              <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#000", lineHeight: 1.7, marginBottom: "20px" }}>
                &ldquo;JK Branding designed our stall for the Rajkot Trade Fair. We had the busiest stall in our section — visitors kept commenting on the design. The leads we generated paid for the stall 10x over.&rdquo;
              </p>
              <div>
                <p style={{ fontWeight: 800, color: "#000", fontSize: "14px" }}>Mukesh Rajani</p>
                <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "12px" }}>Owner, Rajani Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   7. PHOTO & VIDEOGRAPHY — split packages + equipment + gallery grid
══════════════════════════════════════════════════════════════════ */
function PhotoVideography() {
  const photoServices = ["Product Photography", "Corporate Headshots", "Event Coverage", "Architectural & Interior", "Food Photography", "Industrial Photography"];
  const videoServices = ["Brand Films", "Product Demos", "Event Highlight Reels", "Social Media Reels", "Corporate Documentaries", "Training Videos"];
  const equipment = ["Sony A7 IV Full-Frame Camera", "DJI Ronin Gimbal Stabiliser", "Professional LED Lighting Kit", "DJI Mavic 3 Drone", "Adobe Premiere Pro Editing", "Rode Wireless Microphones"];
  return (
    <>
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="site-wrap">
          <p style={{ color: "#666", textAlign: "center", maxWidth: "600px", margin: "0 auto 56px", lineHeight: 1.75, fontSize: "16px" }}>
            In a visual-first world, the quality of your imagery directly impacts how your brand is perceived. We create professional, story-driven visuals that make an emotional connection with your audience.
          </p>
          <div style={{ display: "grid", gap: "0", border: "1px solid rgba(0,0,0,0.08)" }} className="lg:grid-cols-2">
            {/* Photography */}
            <div style={{ padding: "48px 40px", borderRight: "1px solid rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>📸</div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "12px" }}>Photography</h2>
              <p style={{ color: "#666", lineHeight: 1.7, marginBottom: "24px", fontSize: "14px" }}>
                Every image tells a story. Our photographers capture your brand with precision, creativity, and an eye for detail that sets your visual content apart.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {photoServices.map(s => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: A, flexShrink: 0 }} />
                    <span style={{ color: "#555", fontSize: "14px" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Videography */}
            <div style={{ padding: "48px 40px", background: "#f8f9fb" }}>
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🎬</div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "12px" }}>Videography</h2>
              <p style={{ color: "#666", lineHeight: 1.7, marginBottom: "24px", fontSize: "14px" }}>
                Video is the most powerful storytelling medium. We create cinematic films that move audiences, drive engagement, and communicate your brand message memorably.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {videoServices.map(s => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: A, flexShrink: 0 }} />
                    <span style={{ color: "#555", fontSize: "14px" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 0", background: "#1a1a1a" }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,1.8rem)", fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: "36px" }}>
            Professional <span style={{ color: A }}>Equipment</span>
          </h2>
          <div style={{ display: "grid", gap: "12px" }} className="sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map(e => (
              <div key={e} style={{ padding: "18px 20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: A, flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13.5px" }}>{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   8. GOOGLE ADS — campaign types + dashboard preview + ROI guide
══════════════════════════════════════════════════════════════════ */
function GoogleAds() {
  const campaignTypes = [
    { icon: "🔍", title: "Search Ads", desc: "Text ads shown on Google search results pages — reach customers actively searching for your products." },
    { icon: "🖼️", title: "Display Ads", desc: "Visual banner ads across 2M+ websites in the Google Display Network for maximum reach." },
    { icon: "🛒", title: "Shopping Ads", desc: "Product listings with images and prices shown to shoppers actively browsing e-commerce." },
    { icon: "📺", title: "YouTube Ads", desc: "Video ads on YouTube — bumper, skippable, and non-skippable formats to build brand awareness." },
    { icon: "📱", title: "App Campaigns", desc: "Drive app installs and engagement across Google Search, Play, YouTube, and Discover." },
    { icon: "🎯", title: "Remarketing", desc: "Re-engage visitors who didn&apos;t convert — bring them back with targeted follow-up ads." },
  ];
  return (
    <>
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="site-wrap">
          <div style={{ display: "grid", gap: "60px", alignItems: "start" }} className="lg:grid-cols-2">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div style={{ width: "32px", height: "2px", background: A }} />
                <span style={{ color: A, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Pay-Per-Click</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "16px", lineHeight: 1.25 }}>
                Ads that pay <span style={{ color: A }}>for themselves</span>
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "16px" }}>
                Google processes 8.5 billion searches per day. Your ideal customer is searching for you right now — Google Ads ensures your brand appears at the exact moment they&apos;re ready to buy.
              </p>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "28px" }}>
                Our certified Google Ads specialists manage campaigns across all formats — Search, Display, Shopping, and YouTube — optimising relentlessly for the best cost-per-acquisition.
              </p>
              {["Google Partner Certified team", "Transparent budget management", "Weekly performance reports", "No long-term contracts", "Setup + ongoing management included"].map(i => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <CheckCircle2 size={15} style={{ color: A, flexShrink: 0 }} />
                  <span style={{ color: "#555", fontSize: "14px" }}>{i}</span>
                </div>
              ))}
            </div>

            {/* Dashboard mockup */}
            <div style={{ background: "#f8f9fb", padding: "28px", border: "1px solid rgba(0,0,0,0.08)" }}>
              <p style={{ color: "#aaa", fontSize: "11px", letterSpacing: "2px", fontWeight: 700, textTransform: "uppercase", marginBottom: "16px" }}>Campaign Performance</p>
              {[{ label: "Impressions", v: "124,830", change: "+18%", pos: true }, { label: "Clicks", v: "6,241", change: "+23%", pos: true }, { label: "Click-Through Rate", v: "5.0%", change: "+0.8%", pos: true }, { label: "Cost Per Click", v: "₹12.40", change: "−₹2.10", pos: true }, { label: "Conversions", v: "312", change: "+41%", pos: true }, { label: "Return on Ad Spend", v: "4.8x", change: "+0.9x", pos: true }].map(m => (
                <div key={m.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <span style={{ color: "#666", fontSize: "13px" }}>{m.label}</span>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "14px" }}>{m.v}</span>
                    <span style={{ color: "#22c55e", fontSize: "11px", marginLeft: "8px", fontWeight: 600 }}>{m.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#f8f9fb" }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: "#1a1a1a", textAlign: "center", marginBottom: "48px" }}>
            Campaign <span style={{ color: A }}>Types</span> We Manage
          </h2>
          <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2 lg:grid-cols-3">
            {campaignTypes.map(c => (
              <div key={c.title} style={{ padding: "28px", background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }} className="card-hover">
                <div style={{ fontSize: "2rem", marginBottom: "14px" }}>{c.icon}</div>
                <h3 style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "15px", marginBottom: "8px" }}>{c.title}</h3>
                <p style={{ color: "#888", fontSize: "13.5px", lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   9. MAGAZINE, RADIO & CINEMA ADS — channels breakdown + reach
══════════════════════════════════════════════════════════════════ */
function TraditionalMedia() {
  const mediaTypes = [
    {
      icon: "📰",
      title: "Magazine Advertising",
      colour: "#fff5eb",
      points: ["Full-page, half-page, and quarter-page formats", "Regional and national titles across Gujarat", "Premium placement in high-readership publications", "Long shelf life — magazines are read repeatedly"],
    },
    {
      icon: "📻",
      title: "Radio Advertising",
      colour: "#f8f9fb",
      points: ["30 and 60-second spots on FM stations", "Peak-hour placement for maximum listenership", "Jingle creation and voice-over production", "Covers Rajkot, Jamnagar, Ahmedabad and beyond"],
    },
    {
      icon: "🎬",
      title: "Cinema Advertising",
      colour: "#fff5eb",
      points: ["Pre-roll ads before blockbuster films", "Captive, undistracted audience of thousands", "High production value TV-quality commercials", "Available in multiplex and single-screen formats"],
    },
  ];
  return (
    <>
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="site-wrap">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", justifyContent: "center" }}>
            <div style={{ width: "32px", height: "2px", background: A }} />
            <span style={{ color: A, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Mass Media</span>
            <div style={{ width: "32px", height: "2px", background: A }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 800, color: "#1a1a1a", textAlign: "center", marginBottom: "16px" }}>
            Traditional media still <span style={{ color: A }}>dominates</span>
          </h2>
          <p style={{ color: "#666", textAlign: "center", maxWidth: "620px", margin: "0 auto 56px", lineHeight: 1.75 }}>
            Digital ads are everywhere — which is exactly why traditional media stands out. A full-page magazine spread, a catchy radio jingle, or a cinema ad before a packed screening delivers unmatched brand impact and credibility.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {mediaTypes.map((m, i) => (
              <div key={m.title} style={{ display: "grid", gap: "0", border: "1px solid rgba(0,0,0,0.07)" }} className={i % 2 === 0 ? "lg:grid-cols-[2fr_3fr]" : "lg:grid-cols-[3fr_2fr]"}>
                <div style={{ padding: "48px 40px", background: m.colour, display: "flex", flexDirection: "column", justifyContent: "center", order: i % 2 === 0 ? 0 : 1 }}>
                  <div style={{ fontSize: "3rem", marginBottom: "12px" }}>{m.icon}</div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1a1a1a" }}>{m.title}</h3>
                </div>
                <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center", order: i % 2 === 0 ? 1 : 0 }}>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {m.points.map(p => (
                      <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: A, flexShrink: 0, marginTop: "7px" }} />
                        <span style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 0", background: "#f8f9fb" }}>
        <div className="site-wrap">
          <h3 style={{ textAlign: "center", fontWeight: 700, color: "#1a1a1a", fontSize: "1.1rem", marginBottom: "36px" }}>Why Combine Traditional + Digital?</h3>
          <div style={{ display: "grid", gap: "16px", maxWidth: "800px", margin: "0 auto" }} className="sm:grid-cols-3">
            {[{ v: "3x", l: "More brand recall when digital is paired with OOH or radio" }, { v: "89%", l: "Of consumers trust traditional media more than digital ads" }, { v: "2x", l: "Higher conversion rate with an integrated multi-channel approach" }].map(s => (
              <div key={s.l} style={{ padding: "28px 20px", background: "#fff", border: `2px solid ${A}33`, textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: A, marginBottom: "8px" }}>{s.v}</div>
                <p style={{ color: "#666", fontSize: "13px", lineHeight: 1.6 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Route → Layout map ───────────────────────────────────────── */
const LAYOUTS: Record<string, React.FC> = {
  "graphic-designing":           GraphicDesigning,
  "digital-marketing":           DigitalMarketing,
  "website-development":         WebsiteDevelopment,
  "search-engine-optimization":  SEO,
  "hoarding-kiosk":              HoardingKiosk,
  "exhibition-stall":            ExhibitionStall,
  "photo-videography":           PhotoVideography,
  "google-ads":                  GoogleAds,
  "magazine-radio-cinema-ads":   TraditionalMedia,
};

/* ── Page shell ───────────────────────────────────────────────── */
export default function ServicePageClient({ service }: { service: ServiceMeta }) {
  const Layout = LAYOUTS[service.slug];
  return (
    <>
      <Navbar />
      <ServiceHero service={service} />
      {Layout ? <Layout /> : null}
      <ServiceCTA />
      <Footer />
    </>
  );
}
