"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";

const words = ["Brands", "Identities", "Success", "Futures", "Legacy"];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

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

      {/* Right-side decorative image */}
      <div
        style={{ position: "absolute", right: "4%", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
        className="hidden xl:block"
      >
        <div style={{ position: "relative", width: "460px", height: "460px" }}>
          {/* Shadow ring */}
          <div
            style={{
              position: "absolute",
              inset: "20px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(11,60,93,0.12) 0%, transparent 70%)",
            }}
          />
          <Image
            src="/logo.png"
            alt="Brandingo"
            fill
            className="object-contain animate-float"
            style={{ opacity: 0.9 }}
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
              We are Helping
              <br />
              to Build{" "}
              <span
                style={{
                  color: "#f58220",
                  display: "inline-block",
                  opacity: fadeIn ? 1 : 0,
                  transform: fadeIn ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 350ms ease, transform 350ms ease",
                }}
              >
                {words[wordIdx]}
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
            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
              {[
                { value: "17+", label: "Years Experience" },
                { value: "500+", label: "Projects Done" },
                { value: "200+", label: "Happy Clients" },
                { value: "10+", label: "Awards Won" },
              ].map((s) => (
                <div key={s.label} style={{ borderLeft: "3px solid #f58220", paddingLeft: "14px" }}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "#1a1a1a" }}>{s.value}</div>
                  <div style={{ fontSize: "12px", color: "#888", marginTop: "2px", fontWeight: 500 }}>{s.label}</div>
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
