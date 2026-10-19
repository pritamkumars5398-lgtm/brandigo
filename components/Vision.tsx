"use client";

import { useInView } from "react-intersection-observer";
import { Eye, Target, Heart } from "lucide-react";
import { useTheme } from "./ThemeContext";

const pillars = [
  { icon: Eye, title: "Our Vision", text: "To be a global leader in the branding industry, recognized for our creativity, strategic thinking, and commitment to excellence." },
  { icon: Target, title: "Our Mission", text: "To deliver innovative, result-driven branding solutions that transform businesses into iconic brands, making every customer feel WoW." },
  { icon: Heart, title: "Our Values", text: "Creativity, Integrity, Excellence, and a Client-First approach form the cornerstone of everything we do at Brandingo." },
];

export default function Vision() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 0",
        background: isDark ? "#0d0f15" : "#f0f6fa",
        overflow: "hidden",
        borderTop: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(11,60,93,0.1)",
        borderBottom: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(11,60,93,0.1)",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div className="site-wrap">
        <div style={{ display: "grid", gap: "32px" }} className="md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              style={{
                textAlign: "center",
                padding: "40px 28px",
                borderRadius: "0",
                background: isDark ? "#12151c" : "#fff",
                border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(11,60,93,0.1)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s, background 0.3s ease`,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: isDark ? "rgba(245,130,32,0.12)" : "#fff5eb",
                  border: "2px solid rgba(245,130,32,0.3)",
                  marginBottom: "20px",
                }}
              >
                <p.icon size={26} style={{ color: "#f58220" }} />
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: isDark ? "#ffffff" : "#1a1a1a", marginBottom: "12px" }}>{p.title}</h3>
              <p style={{ color: isDark ? "#94a3b8" : "#777", fontSize: "14px", lineHeight: 1.75, maxWidth: "280px", margin: "0 auto" }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
