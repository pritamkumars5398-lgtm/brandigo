"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";

const words = ["Brands", "Identities", "Success", "Futures", "Legacy"];

const DoodleStar = ({ size = 48, color = "#f58220", style = {} }: { size?: number; color?: string; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" style={{ transform: "rotate(15deg)", ...style }}>
    <path d="M50 15 L50 85 M15 50 L85 50 M25 25 L75 75 M75 25 L25 75" />
  </svg>
);

const SquiggleLoop = ({ width = 110, height = 70, color = "#4d62e0", style = {} }: { width?: number; height?: number; color?: string; style?: React.CSSProperties }) => (
  <svg width={width} height={height} viewBox="0 0 120 80" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M10,40 C30,10 50,70 70,25 C85,-5 100,20 110,45 C115,55 105,75 90,75 C70,75 65,50 80,40 C95,30 110,60 115,65" />
  </svg>
);

const SunburstSpokes = ({ size = 90, color = "#0b3c5d", style = {}, className = "" }: { size?: number; color?: string; style?: React.CSSProperties; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" style={style} className={className}>
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 360) / 12;
      return (
        <line
          key={i}
          x1="50"
          y1="50"
          x2="50"
          y2="15"
          transform={`rotate(${angle} 50 50)`}
        />
      );
    })}
  </svg>
);

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // One-time entrance: content slides in from the left on mount.
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80);
    return () => clearTimeout(t);
  }, []);
  // Per-word entrance: each word eases up + fades in, staggered one after another.
  const wordEnter = (i: number): React.CSSProperties => ({
    display: "inline-block",
    opacity: entered ? 1 : 0,
    transform: entered ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.13}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.13}s`,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % words.length);
        setFadeIn(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        background: "#07273d", // Fallback color
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay to ensure contrast */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65))",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Subtle dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(11,60,93,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          opacity: 0.6,
          zIndex: 2,
        }}
      />

      {/* Gold blob decorations */}
      <div
        className="animate-blob"
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(11,60,93,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      <div
        className="animate-blob"
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-60px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,130,32,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          animationDelay: "4s",
          zIndex: 2,
        }}
      />

      {/* Background is now banner.png */}

      {/* Content */}
      <div
        style={{ position: "relative", zIndex: 10, width: "100%", paddingTop: "96px", paddingBottom: "60px" }}
      >
        <div className="site-wrap">
          <div style={{ maxWidth: "660px" }}>


            {/* Heading */}
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                marginBottom: "24px",
                color: "#ffffff",
              }}
            >
              {["We", "are", "Helping", "\n", "to", "Build"].map((w, i) =>
                w === "\n" ? (
                  <br key={`br-${i}`} />
                ) : (
                  <span key={i} style={{ ...wordEnter(i), marginRight: "0.28em" }}>
                    {w}
                  </span>
                )
              )}
              {/* Rotating word — entrance reveal on outer span, swap-fade on inner */}
              <span style={{ ...wordEnter(6), color: "#f58220" }}>
                <span
                  style={{
                    display: "inline-block",
                    opacity: fadeIn ? 1 : 0,
                    transform: fadeIn ? "translateY(0)" : "translateY(10px)",
                    transition: "opacity 350ms ease, transform 350ms ease",
                  }}
                >
                  {words[wordIdx]}
                </span>
              </span>
            </h1>

            <p style={{ color: "#e5e5e5", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: "36px", maxWidth: "520px" }}>
              Build Your Brand&apos;s Journey with Barndingo — your partner in
              Logo, Packaging, Brochure &amp; all things graphic design.
            </p>

            {/* Mobile-only hero visual removed */}

            {/* CTA buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "56px" }}>
              <Link
                href="#about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 32px",
                  background: "#f58220",
                  color: "#fff",
                  fontWeight: 700,
                  borderRadius: "999px",
                  fontSize: "15px", transition: "background 0.2s",
                }}
                className="hover:bg-[#ff933c]"
              >
                Discover More <ArrowRight size={17} />
              </Link>

            </div>

            {/* Stats row */}
            <div
              style={{ display: "grid", gap: "12px", maxWidth: "560px" }}
              className="grid-cols-3"
            >
              {[{ value: "40,000+", label: "Projects Completed" }, { value: "35,000+", label: "Happy Clients" }, { value: "10+", label: "Years Experience" }].map((s) => (
                <div key={s.label} style={{ borderLeft: "2px solid #f58220", paddingLeft: "10px", minWidth: 0 }}>
                  <div style={{ fontSize: "clamp(1rem, 3vw, 1.55rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.1, whiteSpace: "nowrap" }}>{s.value}</div>
                  <div style={{ fontSize: "clamp(10px, 2vw, 11px)", color: "#cbd5e1", marginTop: "3px", fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
