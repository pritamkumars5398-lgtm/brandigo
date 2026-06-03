"use client";

import { useInView } from "react-intersection-observer";
import { Target, Lightbulb, Globe, Zap, Award } from "lucide-react";

const reasons = [
  { icon: Lightbulb, title: "Seasoned Experts in Graphic Design",  description: "Our team comprises highly experienced professionals who bring decades of collective expertise in visual communications." },
  { icon: Target,    title: "Result-Driven Approach",               description: "Every campaign, design, and strategy is crafted with measurable results in mind — your growth is our success metric." },
  { icon: Globe,     title: "Global Vision, Local Expertise",        description: "We think globally and act locally, combining world-class practices with deep understanding of regional markets." },
  { icon: Zap,       title: "End-to-End Brand Solutions",           description: "From conception to execution, we handle every aspect of your brand journey under one roof." },
];

const skills = [
  { label: "Strategic Thinking",      value: 92 },
  { label: "Analytical Skills",        value: 88 },
  { label: "SEO Knowledge",            value: 85 },
  { label: "Social Media Management",  value: 90 },
];

const awards = [
  { year: "2023", title: "Digital Campaign of the Year Award" },
  { year: "2022", title: "Social Media Innovation Award" },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="why" ref={ref} style={{ padding: "100px 0", background: "#ffffff", position: "relative", overflow: "hidden" }}>
      {/* Decorative */}
      <div style={{ position: "absolute", bottom: "-100px", left: "-100px", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle, rgba(11,60,93,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="site-wrap">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
            <span style={{ color: "#f58220", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Why Choose Us</span>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "14px" }}>
            Commitment, Quality, <span style={{ color: "#f58220" }}>&amp; Results</span>
          </h2>
          <p style={{ color: "#777", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
            We don&apos;t just build brands — we build legacies. Here&apos;s why leading businesses choose Brandingo.
          </p>
        </div>

        <div style={{ display: "grid", gap: "60px", alignItems: "start" }} className="lg:grid-cols-2">

          {/* Left: Reason cards */}
          <div style={{ display: "grid", gap: "16px" }} className="sm:grid-cols-2">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                style={{
                  padding: "28px 24px",
                  borderRadius: "0",
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)", opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
                }}
                className="card-hover"
              >
                <div style={{ width: "48px", height: "48px", borderRadius: "0", background: "#fff5eb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <r.icon size={22} style={{ color: "#f58220" }} />
                </div>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>{r.title}</h3>
                <p style={{ color: "#888", fontSize: "13px", lineHeight: 1.65 }}>{r.description}</p>
              </div>
            ))}
          </div>

          {/* Right: Skills + Awards */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
            }}
          >
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "28px" }}>Our Core Competencies</h3>

            {/* Skill bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "44px" }}>
              {skills.map((skill, i) => (
                <div key={skill.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ color: "#444", fontSize: "14px", fontWeight: 500 }}>{skill.label}</span>
                    <span style={{ color: "#f58220", fontSize: "14px", fontWeight: 700 }}>{skill.value}%</span>
                  </div>
                  <div style={{ height: "8px", background: "#f3f4f6", borderRadius: "999px", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        borderRadius: "999px",
                        background: "linear-gradient(90deg, #f58220, #ff933c)",
                        width: inView ? `${skill.value}%` : "0%",
                        transition: `width 1.2s ease ${0.5 + i * 0.15}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Award size={18} style={{ color: "#f58220" }} /> Awards &amp; Recognition
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {awards.map((award) => (
                  <div key={award.title} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 20px", borderRadius: "0", border: "1px solid rgba(245,130,32,0.25)", background: "#fff5eb" }}>
                    <span style={{ fontSize: "1.2rem", fontWeight: 900, color: "#f58220", minWidth: "fit-content" }}>{award.year}</span>
                    <div style={{ width: "1px", height: "32px", background: "rgba(245,130,32,0.3)" }} />
                    <p style={{ color: "#555", fontSize: "13.5px", fontWeight: 500 }}>{award.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
