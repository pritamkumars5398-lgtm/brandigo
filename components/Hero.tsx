"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Sparkles, CheckCircle2 } from "lucide-react";
import { useTheme } from "./ThemeContext";

const words = ["Brands", "Identities", "Success", "Futures", "Legacy"];

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [wordIdx, setWordIdx] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80);
    return () => clearTimeout(t);
  }, []);

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

  const wordEnter = (i: number): React.CSSProperties => ({
    display: "inline-block",
    opacity: entered ? 1 : 0,
    transform: entered ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.12}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.12}s`,
  });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        backgroundColor: isDark ? "#06090e" : "#07273d",
        backgroundImage: `url('/hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Dark / Theme Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? "linear-gradient(135deg, rgba(6,9,14,0.95) 0%, rgba(8,12,20,0.88) 55%, rgba(6,9,14,0.82) 100%)"
            : "linear-gradient(135deg, rgba(11,60,93,0.95) 0%, rgba(7,39,61,0.88) 55%, rgba(0,69,99,0.82) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Subtle Dot Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          pointerEvents: "none",
          opacity: 0.5,
          zIndex: 2,
        }}
      />

      {/* Ambient Glow Blobs */}
      <div
        className="animate-blob"
        style={{
          position: "absolute",
          top: "-60px",
          right: "5%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,130,32,0.18) 0%, rgba(245,130,32,0.04) 50%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
          zIndex: 2,
        }}
      />
      <div
        className="animate-blob"
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-50px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
          animationDelay: "4s",
          zIndex: 2,
        }}
      />

      {/* Main Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          paddingTop: "100px",
          paddingBottom: "60px",
        }}
      >
        <div className="site-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: Hero Content & Stats */}
            <div className="lg:col-span-7 text-left">
              
              {/* Agency Tag Pill */}
              <div
                className="inline-flex items-center px-3.5 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-wider uppercase"
                style={{
                  background: isDark ? "rgba(245,130,32,0.12)" : "rgba(255,255,255,0.12)",
                  border: isDark ? "1px solid rgba(245,130,32,0.3)" : "1px solid rgba(255,255,255,0.25)",
                  color: "#f58220",
                  backdropFilter: "blur(8px)",
                }}
              >
                Creative Branding &amp; Design Studio
              </div>

              {/* Heading */}
              <h1
                style={{
                  fontSize: "clamp(2.3rem, 5.2vw, 4.2rem)",
                  fontWeight: 700,
                  lineHeight: 1.12,
                  marginBottom: "22px",
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                {["We", "are", "Helping", "\n", "to", "Build"].map((w, i) =>
                  w === "\n" ? (
                    <br key={`br-${i}`} />
                  ) : (
                    <span key={i} style={{ ...wordEnter(i), marginRight: "0.26em" }}>
                      {w}
                    </span>
                  )
                )}
                {/* Rotating Word */}
                <span style={{ ...wordEnter(6), color: "#f58220", position: "relative", display: "inline-block" }}>
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

              {/* Subtitle */}
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.85)",
                  fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                  lineHeight: 1.75,
                  marginBottom: "36px",
                  maxWidth: "560px",
                }}
              >
                Build Your Brand&apos;s Journey with Brandigo — your partner in
                Logo, Packaging, Brochure &amp; all things graphic design. We craft distinctive visual identities that captivate and convert.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Link
                  href="#about"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 34px",
                    background: "#f58220",
                    color: "#fff",
                    fontWeight: 700,
                    borderRadius: "999px",
                    fontSize: "15px",
                    transition: "all 0.25s ease",
                  }}
                  className="hover:bg-[#ff933c] hover:scale-[1.02] active:scale-[0.98]"
                >
                  Discover More <ArrowRight size={17} />
                </Link>

                <Link
                  href="#portfolio"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "13px 28px",
                    background: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontWeight: 600,
                    borderRadius: "999px",
                    fontSize: "15px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.25s ease",
                  }}
                  className="hover:bg-white/20 hover:border-white/40"
                >
                  View Work
                </Link>
              </div>

              {/* Stats Row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "16px",
                  maxWidth: "540px",
                  paddingTop: "20px",
                  borderTop: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {[
                  { value: "5000+", label: "Projects Completed" },
                  { value: "4200+", label: "Happy Clients" },
                  { value: "10+", label: "Years Experience" },
                ].map((s) => (
                  <div key={s.label} style={{ borderLeft: "2.5px solid #f58220", paddingLeft: "12px", minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "clamp(1.15rem, 2.5vw, 1.7rem)",
                        fontWeight: 800,
                        color: "#ffffff",
                        lineHeight: 1.1,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(11px, 1.5vw, 12px)",
                        color: "rgba(255,255,255,0.7)",
                        marginTop: "4px",
                        fontWeight: 500,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Visual with Blend Effect */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              {/* Radial backlight glow behind the visual */}
              <div
                style={{
                  position: "absolute",
                  width: "110%",
                  height: "110%",
                  background: "radial-gradient(circle at center, rgba(245,130,32,0.25) 0%, rgba(14,165,233,0.12) 45%, transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />

              {/* Main Image Container with Blend Mask */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "520px",
                  aspectRatio: "4 / 3.4",
                  zIndex: 1,
                }}
              >
                {/* Image element with blend mask */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "24px",
                    overflow: "hidden",
                    // Blend effect: radial fade around edges into the hero background
                    WebkitMaskImage: "radial-gradient(ellipse 92% 88% at 50% 50%, black 50%, rgba(0,0,0,0.7) 75%, transparent 100%)",
                    maskImage: "radial-gradient(ellipse 92% 88% at 50% 50%, black 50%, rgba(0,0,0,0.7) 75%, transparent 100%)",
                  }}
                >
                  <Image
                    src="/brandingo-hero.jpg"
                    alt="Brandingo Creative Branding Mockup"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 520px"
                    style={{
                      objectFit: "cover",
                      transform: "scale(1.02)",
                    }}
                  />
                  {/* Subtle edge vignette gradient overlay for extra smooth blend */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "radial-gradient(circle at center, transparent 40%, rgba(6,9,14,0.45) 85%, rgba(6,9,14,0.85) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
