"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ChevronRight, ArrowUpRight, X, ZoomIn, ArrowUp } from "lucide-react";

import { portfolioItems, portfolioCategories } from "@/lib/portfolio-data";

const A = "#f58220"; // accent orange
const NAVY = "#0b3c5d"; // brand navy

/* ── Hero band ────────────────────────────────────────────────── */
function PortfolioHero() {
  return (
    <section style={{ position: "relative", padding: "120px 0 72px", overflow: "hidden", background: NAVY }}>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, rgba(11,60,93,0.96) 0%, rgba(245,130,32,0.85) 100%)` }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="site-wrap" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        <div style={{ display: "inline-block", padding: "5px 14px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "999px", color: "#fff", fontSize: "12px", fontWeight: 600, marginBottom: "16px" }}>
          Our Portfolio
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: "14px" }}>
          Work That Makes Brands Say <span style={{ color: "#fff", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)", textUnderlineOffset: "6px" }}>WoW</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 18px", lineHeight: 1.65 }}>
          A showcase of logos, packaging, print and social creatives we&apos;ve designed for businesses across India.
        </p>
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px" }} className="hover:text-white">Home</Link>
          <ChevronRight size={12} style={{ color: "rgba(255,255,255,0.45)" }} />
          <span style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }}>Portfolio</span>
        </nav>
      </div>
    </section>
  );
}

/* ── Brandingo story band ─────────────────────────────────────── */
function BrandStory() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <section ref={ref} style={{ background: "#fff", padding: "72px 0 8px" }}>
      <div className="site-wrap" style={{ maxWidth: "880px", textAlign: "center", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "32px", height: "2px", background: A }} />
          <span style={{ color: A, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Est. 2016</span>
          <div style={{ width: "32px", height: "2px", background: A }} />
        </div>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
          A decade of turning emerging businesses into <span style={{ color: A }}>unforgettable brands</span>
        </h2>
        <p style={{ color: "#666", lineHeight: 1.85, marginBottom: "16px", fontSize: "15.5px" }}>
          Established in 2016, Brandingo was built on a foundation of over a decade of expertise in Designing, Printing and Brand Development. Founded by the Patel &amp; Sharma brothers, we bring a unique blend of global vision and local expertise to help transform emerging businesses into unforgettable brands.
        </p>
        <p style={{ color: "#666", lineHeight: 1.85, fontSize: "15.5px" }}>
          Our objective is simple yet powerful: to make every customer feel <strong style={{ color: "#1a1a1a" }}>&ldquo;WoW.&rdquo;</strong> By blending strategic thinking with flawless creative execution, we deliver result-driven branding solutions that truly resonate with your audience and elevate your market presence.
        </p>
      </div>
    </section>
  );
}

/* ── Gallery ──────────────────────────────────────────────────── */
const PAGE_SIZE = 24; // images rendered per batch — keeps the masonry grid fast

export default function PortfolioGallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [showTop, setShowTop] = useState(false);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const { ref, inView } = useInView({ threshold: 0.02, triggerOnce: true });
  const filtered = active === "All" ? portfolioItems : portfolioItems.filter(p => p.category === active);
  const shown = filtered.slice(0, visible);

  // Reset the visible window whenever the category filter changes.
  const selectCategory = (cat: string) => {
    setActive(cat);
    setVisible(PAGE_SIZE);
  };

  // Show the scroll-to-top button once the user has scrolled down a bit.
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the lightbox on Escape + lock body scroll while it's open.
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <PortfolioHero />
      <BrandStory />

      <section ref={ref} style={{ padding: "48px 0 100px", background: "#ffffff" }}>
        <div className="site-wrap">
          {/* Filter tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "44px" }}>
            {portfolioCategories.map(cat => (
              <button
                key={cat}
                onClick={() => selectCategory(cat)}
                style={{
                  padding: "9px 20px",
                  fontSize: "13px",
                  fontWeight: 600,
                  border: active === cat ? "none" : "1.5px solid #e5e7eb",
                  background: active === cat ? A : "#fff",
                  color: active === cat ? "#fff" : "#555",
                  cursor: "pointer",
                  borderRadius: "999px",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div
            style={{
              columnGap: "18px",
              opacity: inView ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}
            className="columns-1 sm:columns-2 lg:columns-3"
          >
            {shown.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item.image)}
                className="portfolio-card group"
                style={{
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${(i % 9) * 0.04}s`,
                }}
                aria-label={`View ${item.category} design`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={`${item.category} design by Brandingo`}
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="portfolio-overlay" />
                
                {/* Accent Action Circle */}
                <div className="portfolio-zoom-icon">
                  <ZoomIn size={18} style={{ color: "#fff" }} />
                </div>
                
                {/* Floating Tag */}
                <div className="portfolio-tag">
                  <span>{item.category}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Load more */}
          {visible < filtered.length && (
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <button
                onClick={() => setVisible(v => v + PAGE_SIZE)}
                style={{ padding: "13px 32px", background: "#fff", color: NAVY, fontWeight: 700, fontSize: "14px", border: `1.5px solid ${NAVY}`, borderRadius: "999px", cursor: "pointer", transition: "all 0.2s" }}
              >
                Load More ({filtered.length - visible} more)
              </button>
            </div>
          )}

          {/* Bottom CTA */}
          <div style={{ textAlign: "center", marginTop: "64px" }}>
            <p style={{ color: "#777", fontSize: "15px", marginBottom: "20px" }}>
              Like what you see? Let&apos;s create something remarkable for your brand.
            </p>
            <Link
              href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 34px", background: A, color: "#fff", fontWeight: 700, borderRadius: "999px", fontSize: "14px", transition: "background 0.2s" }}
              className="hover:bg-[#ff933c]"
            >
              Start Your Project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(8,20,30,0.92)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px", cursor: "zoom-out", animation: "fadeIn 0.2s ease" }}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            style={{ position: "absolute", top: "24px", right: "24px", width: "44px", height: "44px", borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
          >
            <X size={22} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox}
            alt="Brandingo portfolio work"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "100%", maxHeight: "88vh", objectFit: "contain", boxShadow: "0 20px 60px rgba(0,0,0,0.5)", cursor: "default" }}
          />
        </div>
      )}

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        style={{
          position: "fixed",
          right: "24px",
          bottom: "24px",
          zIndex: 60,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: A,
          color: "#fff",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(245,130,32,0.4)",
          opacity: showTop ? 1 : 0,
          transform: showTop ? "translateY(0)" : "translateY(16px)",
          pointerEvents: showTop ? "auto" : "none",
          transition: "opacity 0.3s ease, transform 0.3s ease, background 0.2s ease",
        }}
        className="hover:bg-[#ff933c]"
      >
        <ArrowUp size={22} />
      </button>

      <style dangerouslySetInnerHTML={{__html: `
        .portfolio-card {
          display: block;
          width: 100%;
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 16px;
          padding: 0;
          cursor: zoom-in;
          break-inside: avoid;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.015);
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s;
        }
        .portfolio-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.06);
          border-color: rgba(245, 130, 32, 0.25);
        }
        .portfolio-card img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .portfolio-card:hover img {
          transform: scale(1.04);
        }
        .portfolio-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(11, 60, 93, 0) 30%, rgba(11, 60, 93, 0.75) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 10;
        }
        .portfolio-card:hover .portfolio-overlay {
          opacity: 1;
        }
        .portfolio-zoom-icon {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f58220;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.6);
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 20;
          box-shadow: 0 4px 10px rgba(245, 130, 32, 0.3);
        }
        .portfolio-card:hover .portfolio-zoom-icon {
          opacity: 1;
          transform: scale(1);
        }
        .portfolio-tag {
          position: absolute;
          left: 18px;
          bottom: 18px;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 20;
        }
        .portfolio-card:hover .portfolio-tag {
          opacity: 1;
          transform: translateY(0);
        }
        .portfolio-tag span {
          display: inline-block;
          padding: 6px 14px;
          background: #f58220;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          border-radius: 999px;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 10px rgba(245, 130, 32, 0.25);
        }
      `}} />
    </>
  );
}
