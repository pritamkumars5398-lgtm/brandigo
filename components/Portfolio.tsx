"use client";

import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import { projects } from "@/lib/projects-data";

const categories = ["All", "Real Estate", "FMCG", "Corporate", "Hospitality"];

// Cards fly in from different directions, then settle into the grid.
const cardEntrance = [
  "translate(-200px, 100px) rotate(-12deg) scale(0.8)",
  "translate(0, 240px) rotate(4deg) scale(0.78)",
  "translate(200px, 100px) rotate(12deg) scale(0.8)",
  "translate(-240px, -30px) rotate(-10deg) scale(0.8)",
  "translate(0, 260px) rotate(-4deg) scale(0.78)",
  "translate(240px, -30px) rotate(10deg) scale(0.8)",
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  // triggerOnce: false → re-animates each time the section scrolls into view
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: false });
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" ref={ref} style={{ padding: "100px 0", background: "#f9fafb" }}>
      <div className="site-wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
            <span style={{ color: "#f58220", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Our Work</span>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "14px" }}>
            A Look at Our <span style={{ color: "#f58220" }}>Projects</span>
          </h2>
          <p style={{ color: "#777", maxWidth: "480px", margin: "0 auto", lineHeight: 1.75 }}>
            Explore our portfolio of successful branding projects across industries.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "48px", opacity: inView ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{ padding: "8px 20px", borderRadius: "0", fontSize: "13px", fontWeight: 600, border: active === cat ? "none" : "1.5px solid #e5e7eb", background: active === cat ? "#f58220" : "#fff", color: active === cat ? "#fff" : "#555", cursor: "pointer", transition: "all 0.2s" }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Link key={project.id} href={`/projects/${project.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block", borderRadius: "0", overflow: "hidden", background: "#fff", border: "1px solid rgba(0,0,0,0.07)", opacity: inView ? 1 : 0, transform: inView ? "translate(0,0) rotate(0deg) scale(1)" : cardEntrance[i % cardEntrance.length], transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s, transform 1.1s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.12}s`, willChange: "transform, opacity" }} className="card-hover group">
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} className="group-hover:scale-110" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 60%)" }} />
                <div style={{ position: "absolute", top: "14px", left: "14px", padding: "4px 12px", background: "#f58220", color: "#fff", fontSize: "11px", fontWeight: 700, borderRadius: "999px" }}>{project.category}</div>
                <div style={{ position: "absolute", top: "14px", right: "14px", width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.2s" }} className="group-hover:opacity-100">
                  <ExternalLink size={14} style={{ color: "#333" }} />
                </div>
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px", transition: "color 0.2s" }} className="group-hover:text-[#f58220]">{project.title}</h3>
                <p style={{ color: "#888", fontSize: "13.5px", lineHeight: 1.65, marginBottom: "14px" }}>{project.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ padding: "4px 10px", fontSize: "11px", background: "#f3f4f6", color: "#666", borderRadius: "999px", fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", border: "2px solid #f58220", color: "#f58220", fontWeight: 700, borderRadius: "999px", fontSize: "14px", background: "transparent", cursor: "pointer", transition: "all 0.2s" }} className="hover:bg-[#f58220] hover:text-white group">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
