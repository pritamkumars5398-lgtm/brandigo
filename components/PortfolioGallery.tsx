"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ChevronRight, ArrowUpRight, X, ZoomIn, ArrowUp, Play, LayoutGrid } from "lucide-react";
import { useTheme } from "./ThemeContext";

import { portfolioItems, portfolioCategories, type PortfolioItem } from "@/lib/portfolio-data";

const A = "#f58220"; // accent orange
const NAVY = "#0b3c5d"; // brand navy

/* ── Individual Card Component ────────────────────────────────── */
function PortfolioCard({
  item,
  isDark,
  onClick,
}: {
  item: PortfolioItem;
  isDark: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="portfolio-card group"
      style={{
        background: isDark ? "#12151c" : "#ffffff",
        border: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.05)",
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
  );
}

// Helper to ensure each column has enough items to create a smooth, seamless infinite loop
function prepareColumnItems(items: PortfolioItem[], minLength = 6): PortfolioItem[] {
  if (!items || items.length === 0) return [];
  let res = [...items];
  while (res.length < minLength) {
    res = [...res, ...items];
  }
  return res;
}

/* ── Gallery ──────────────────────────────────────────────────── */
const PAGE_SIZE = 24;

export default function PortfolioGallery() {
  const [active, setActive] = useState("All");
  const [viewMode, setViewMode] = useState<"marquee" | "grid">("marquee");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [showTop, setShowTop] = useState(false);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const { ref, inView } = useInView({ threshold: 0.02, triggerOnce: true });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const filtered = useMemo(() => {
    return active === "All" ? portfolioItems : portfolioItems.filter(p => p.category === active);
  }, [active]);

  const shown = useMemo(() => {
    return filtered.slice(0, visible);
  }, [filtered, visible]);

  // Split filtered items into 3 columns for desktop marquee
  const col0Items = useMemo(() => {
    const raw = filtered.filter((_, i) => i % 3 === 0);
    return prepareColumnItems(raw.length > 0 ? raw : filtered, 8);
  }, [filtered]);

  const col1Items = useMemo(() => {
    const raw = filtered.filter((_, i) => i % 3 === 1);
    return prepareColumnItems(raw.length > 0 ? raw : filtered, 8);
  }, [filtered]);

  const col2Items = useMemo(() => {
    const raw = filtered.filter((_, i) => i % 3 === 2);
    return prepareColumnItems(raw.length > 0 ? raw : filtered, 8);
  }, [filtered]);

  // Reset visible window when category changes
  const selectCategory = (cat: string) => {
    setActive(cat);
    setVisible(PAGE_SIZE);
  };

  // Show scroll-to-top button
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lightbox key handler
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <section ref={ref} style={{ padding: "40px 0 64px", background: isDark ? "#08090d" : "#ffffff", transition: "background-color 0.3s ease", position: "relative" }}>
        <div className="site-wrap">

          {/* Clean Top Header */}
          <div style={{ textAlign: "center", marginBottom: "26px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <div style={{ width: "28px", height: "2px", background: A }} />
              <span style={{ color: A, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Our Portfolio</span>
              <div style={{ width: "28px", height: "2px", background: A }} />
            </div>
            <h1 style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 900, color: isDark ? "#ffffff" : "#1a1a1a", lineHeight: 1.2 }}>
              Work That Makes Brands Say <span style={{ color: A }}>WoW</span>
            </h1>
          </div>

          {/* Filter Tabs & View Mode Switcher */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
            
            {/* View Mode Toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "4px", background: isDark ? "#12151c" : "#f1f5f9", borderRadius: "999px", border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #e2e8f0" }}>
              <button
                onClick={() => setViewMode("marquee")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "7px 16px",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  borderRadius: "999px",
                  border: "none",
                  background: viewMode === "marquee" ? A : "transparent",
                  color: viewMode === "marquee" ? "#fff" : (isDark ? "#94a3b8" : "#64748b"),
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <Play size={13} fill={viewMode === "marquee" ? "#fff" : "none"} /> Auto-Scroll Showcase (Up &amp; Down)
              </button>

              <button
                onClick={() => setViewMode("grid")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "7px 16px",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  borderRadius: "999px",
                  border: "none",
                  background: viewMode === "grid" ? A : "transparent",
                  color: viewMode === "grid" ? "#fff" : (isDark ? "#94a3b8" : "#64748b"),
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <LayoutGrid size={13} /> Grid View
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", maxWidth: "980px" }}>
              {portfolioCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => selectCategory(cat)}
                  style={{
                    padding: "7px 16px",
                    fontSize: "12.5px",
                    fontWeight: 600,
                    border: active === cat ? "none" : (isDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid #e5e7eb"),
                    background: active === cat ? A : (isDark ? "#12151c" : "#fff"),
                    color: active === cat ? "#fff" : (isDark ? "#cbd5e1" : "#555"),
                    cursor: "pointer",
                    borderRadius: "999px",
                    transition: "all 0.2s",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Hover tip for Auto-Scroll mode */}
            {viewMode === "marquee" && (
              <span style={{ fontSize: "12px", color: isDark ? "#64748b" : "#94a3b8", display: "flex", alignItems: "center", gap: "6px" }}>
                💡 Hover on any card to pause movement &amp; click to zoom
              </span>
            )}
          </div>

          {/* VIEW MODE 1: AUTO-SCROLLING VERTICAL MARQUEE (UP & DOWN COLUMNS) */}
          {viewMode === "marquee" ? (
            <div
              className="portfolio-marquee-container"
              style={{
                position: "relative",
                height: "760px",
                overflow: "hidden",
                borderRadius: "20px",
                border: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)",
                background: isDark ? "#090b10" : "#fafbfc",
                opacity: inView ? 1 : 0,
                transition: "opacity 0.6s ease",
              }}
            >
              {/* 3 Columns: Col 1 moves UP ⬆️, Col 2 moves DOWN ⬇️, Col 3 moves UP ⬆️ */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full px-4">
                
                {/* Column 1: Moves UP ⬆️ */}
                <div className="marquee-col overflow-hidden h-full">
                  <div className="marquee-track marquee-track-up-1">
                    {[...col0Items, ...col0Items].map((item, i) => (
                      <PortfolioCard
                        key={`${item.id}-c0-${i}`}
                        item={item}
                        isDark={isDark}
                        onClick={() => setLightbox(item.image)}
                      />
                    ))}
                  </div>
                </div>

                {/* Column 2: Moves DOWN ⬇️ */}
                <div className="marquee-col overflow-hidden h-full hidden md:block">
                  <div className="marquee-track marquee-track-down-2">
                    {[...col1Items, ...col1Items].map((item, i) => (
                      <PortfolioCard
                        key={`${item.id}-c1-${i}`}
                        item={item}
                        isDark={isDark}
                        onClick={() => setLightbox(item.image)}
                      />
                    ))}
                  </div>
                </div>

                {/* Column 3: Moves UP ⬆️ */}
                <div className="marquee-col overflow-hidden h-full hidden lg:block">
                  <div className="marquee-track marquee-track-up-3">
                    {[...col2Items, ...col2Items].map((item, i) => (
                      <PortfolioCard
                        key={`${item.id}-c2-${i}`}
                        item={item}
                        isDark={isDark}
                        onClick={() => setLightbox(item.image)}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ) : (
            /* VIEW MODE 2: CLASSIC MASONRY GRID */
            <>
              <div
                style={{
                  columnGap: "18px",
                  opacity: inView ? 1 : 0,
                  transition: "opacity 0.6s ease",
                }}
                className="columns-1 sm:columns-2 lg:columns-3"
              >
                {shown.map((item, i) => (
                  <div
                    key={item.id}
                    style={{
                      transform: inView ? "translateY(0)" : "translateY(24px)",
                      transitionDelay: `${(i % 9) * 0.04}s`,
                      marginBottom: "18px",
                    }}
                  >
                    <PortfolioCard
                      item={item}
                      isDark={isDark}
                      onClick={() => setLightbox(item.image)}
                    />
                  </div>
                ))}
              </div>

              {/* Load more in grid view */}
              {visible < filtered.length && (
                <div style={{ textAlign: "center", marginTop: "36px" }}>
                  <button
                    onClick={() => setVisible(v => v + PAGE_SIZE)}
                    style={{ padding: "12px 30px", background: isDark ? "#12151c" : "#fff", color: A, fontWeight: 700, fontSize: "14px", border: `1.5px solid ${A}`, borderRadius: "999px", cursor: "pointer", transition: "all 0.2s" }}
                    className="hover:bg-[#f58220] hover:!text-white"
                  >
                    Load More ({filtered.length - visible} more)
                  </button>
                </div>
              )}
            </>
          )}

          {/* Bottom CTA */}
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <p style={{ color: isDark ? "#94a3b8" : "#777", fontSize: "15px", marginBottom: "16px" }}>
              Like what you see? Let&apos;s create something remarkable for your brand.
            </p>
            <Link
              href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 32px", background: A, color: "#fff", fontWeight: 700, borderRadius: "999px", fontSize: "14px", transition: "background 0.2s" }}
              className="hover:bg-[#ff933c]"
            >
              Start Your Project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
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
          opacity: showTop ? 1 : 0,
          transform: showTop ? "translateY(0)" : "translateY(16px)",
          pointerEvents: showTop ? "auto" : "none",
          transition: "opacity 0.3s ease, transform 0.3s ease, background 0.2s ease",
        }}
        className="hover:bg-[#ff933c]"
      >
        <ArrowUp size={22} />
      </button>

      {/* Keyframe & Component Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeScrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes marqueeScrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .marquee-track {
          display: flex;
          flex-direction: column;
          gap: 18px;
          will-change: transform;
        }

        /* Continuous linear vertical animation speeds (gentle, leisurely pace) */
        .marquee-track-up-1 {
          animation: marqueeScrollUp 120s linear infinite;
        }

        .marquee-track-down-2 {
          animation: marqueeScrollDown 130s linear infinite;
        }

        .marquee-track-up-3 {
          animation: marqueeScrollUp 115s linear infinite;
        }

        /* Hover pauses the column track smoothly */
        .marquee-col:hover .marquee-track,
        .portfolio-card:hover {
          animation-play-state: paused !important;
        }

        .portfolio-card {
          display: block;
          width: 100%;
          position: relative;
          overflow: hidden;
          background: #ffffff;
          border-radius: 16px;
          padding: 0;
          cursor: zoom-in;
          break-inside: avoid;
          box-shadow: none;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
        }
        .portfolio-card:hover {
          transform: translateY(-4px) scale(1.015);
          box-shadow: none;
          border-color: rgba(245, 130, 32, 0.45) !important;
        }
        .portfolio-card img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .portfolio-card:hover img {
          transform: scale(1.03);
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
          top: 14px;
          right: 14px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #f58220;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.6);
          transition: opacity 0.25s ease, transform 0.25s ease;
          z-index: 20;
        }
        .portfolio-card:hover .portfolio-zoom-icon {
          opacity: 1;
          transform: scale(1);
        }
        .portfolio-tag {
          position: absolute;
          left: 14px;
          bottom: 14px;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          z-index: 20;
        }
        .portfolio-card:hover .portfolio-tag {
          opacity: 1;
          transform: translateY(0);
        }
        .portfolio-tag span {
          display: inline-block;
          padding: 5px 12px;
          background: #f58220;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          border-radius: 999px;
          letter-spacing: 0.5px;
        }
      `}} />
    </>
  );
}
