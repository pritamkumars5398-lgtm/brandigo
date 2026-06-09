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
        background: "linear-gradient(135deg, #f0f6fa 0%, #ffffff 50%, #e8f1f7 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Subtle dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(11,60,93,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          opacity: 0.6,
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
        }}
      />

      {/* Premium circular vectors in background (like reference image) */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: 0.22,
        }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="circleGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0b3c5d" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#f58220" stopOpacity="0.002" />
          </linearGradient>
          <linearGradient id="circleGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f58220" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0b3c5d" stopOpacity="0.002" />
          </linearGradient>
          <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0b3c5d" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#f58220" stopOpacity="0.05" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Concentric rings on bottom left */}
        <circle cx="150" cy="750" r="500" fill="none" stroke="url(#strokeGrad)" strokeWidth="1.5" />
        <circle cx="150" cy="750" r="350" fill="url(#circleGrad1)" stroke="url(#strokeGrad)" strokeWidth="1" />
        <circle cx="150" cy="750" r="220" fill="none" stroke="url(#strokeGrad)" strokeWidth="0.75" />
        
        {/* Large overlapping circle on right side background */}
        <circle cx="1200" cy="380" r="600" fill="none" stroke="url(#strokeGrad)" strokeWidth="1.5" />
        <circle cx="1200" cy="380" r="440" fill="url(#circleGrad2)" stroke="url(#strokeGrad)" strokeWidth="1" />
        <circle cx="1200" cy="380" r="280" fill="none" stroke="url(#strokeGrad)" strokeWidth="0.75" />

        {/* Floating background arcs */}
        <path d="M-100,250 Q250,120 600,320" fill="none" stroke="url(#strokeGrad)" strokeWidth="1.2" strokeDasharray="8,8" />
        <path d="M900,850 Q1150,650 1500,750" fill="none" stroke="url(#strokeGrad)" strokeWidth="1.2" />
      </svg>

      {/* Right-side decorative modern vector layout */}
      <div
        style={{
          position: "absolute",
          right: "3%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "560px",
          height: "580px",
          pointerEvents: "none",
        }}
        className="hidden lg:block"
      >
        {/* Yellow Star Top-Left */}
        <DoodleStar size={44} color="#f5d020" style={{ position: "absolute", left: "60px", top: "70px", opacity: 0.9 }} />

        {/* Orange Star Bottom-Left */}
        <DoodleStar size={40} color="#f58220" style={{ position: "absolute", left: "110px", top: "430px", opacity: 0.9 }} />

        {/* Blue Squiggle Left */}
        <SquiggleLoop width={120} height={80} color="#4d62e0" style={{ position: "absolute", left: "0px", top: "220px", opacity: 0.8 }} />

        {/* Sunburst Bottom-Right */}
        <SunburstSpokes size={96} color="#0b3c5d" style={{ position: "absolute", left: "320px", top: "480px", opacity: 0.85 }} className="animate-spin-slow" />

        {/* Capsule 1: Large Center-Left (Yellow) */}
        <div
          style={{
            position: "absolute",
            left: "130px",
            top: "110px",
            width: "210px",
            height: "360px",
            borderRadius: "110px",
            overflow: "hidden",
            border: "6px solid #ffffff",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
            background: "#f5d020",
          }}
          className="animate-float"
        >
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Creative Designer"
            fill
            sizes="210px"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Capsule 2: Top-Right (Purple) */}
        <div
          style={{
            position: "absolute",
            left: "360px",
            top: "20px",
            width: "160px",
            height: "260px",
            borderRadius: "80px",
            overflow: "hidden",
            border: "6px solid #ffffff",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
            background: "#7c3aed",
            animationDelay: "1.5s",
          }}
          className="animate-float"
        >
          <Image
            src="/marketing_developer.png"
            alt="Branding Expert"
            fill
            sizes="160px"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Capsule 3: Bottom-Right (Sky-Blue) */}
        <div
          style={{
            position: "absolute",
            left: "340px",
            top: "300px",
            width: "160px",
            height: "260px",
            borderRadius: "80px",
            overflow: "hidden",
            border: "6px solid #ffffff",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
            background: "#0ea5e9",
            animationDelay: "3s",
          }}
          className="animate-float"
        >
          <Image
            src="/videographer.png"
            alt="UI/UX Specialist"
            fill
            sizes="160px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Content */}
      <div
        style={{ position: "relative", zIndex: 10, width: "100%", paddingTop: "96px", paddingBottom: "60px" }}
      >
        <div className="site-wrap">
          <div style={{ maxWidth: "660px" }}>

            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(245,130,32,0.3)",
                background: "rgba(245,130,32,0.08)",
                marginBottom: "28px",
              }}
            >
              <Star size={14} style={{ color: "#f58220" }} fill="#f58220" />
              <span style={{ color: "#d66b10", fontSize: "13px", fontWeight: 600 }}>
                17+ Years of Excellence in Branding
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "24px",
                color: "#1a1a1a",
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

            <p style={{ color: "#666", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: "36px", maxWidth: "520px" }}>
              Build Your Brand&apos;s Journey with Brandingo — your partner in
              Graphic Design, Digital Marketing, Website Development &amp; more.
            </p>

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
              <Link
                href="#about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 32px",
                  border: "1.5px solid #d1d5db",
                  color: "#333",
                  fontWeight: 600,
                  borderRadius: "999px",
                  fontSize: "15px",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                className="hover:border-[#f58220] hover:bg-[#fff5eb]"
              >
                <Play size={15} fill="#333" /> Read More
              </Link>
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", flexWrap: "nowrap", justifyContent: "space-between", gap: "clamp(10px, 3vw, 24px)" }}>
  {[{ value: "10+", label: "Years Experience" },{ value: "40,000+", label: "Projects Completed" },{ value: "35,000+", label: "Happy Clients" }].map((s) => (
    <div key={s.label} style={{ borderLeft: "3px solid #f58220", paddingLeft: "clamp(8px, 2vw, 14px)", flex: "1 1 0", minWidth: 0 }}>
      <div style={{ fontSize: "clamp(1.3rem, 6vw, 2rem)", fontWeight: 800, color: "#1a1a1a", whiteSpace: "nowrap" }}>{s.value}</div>
      <div style={{ fontSize: "clamp(10px, 2.6vw, 12px)", color: "#888", marginTop: "2px", fontWeight: 500 }}>{s.label}</div>
    </div>
  ))}
</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          zIndex: 10,
        }}
      >
        <span style={{ color: "#aaa", fontSize: "10px", letterSpacing: "4px", fontWeight: 600 }}>SCROLL</span>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #f58220, transparent)" }} />
      </div>
    </section>
  );
}
