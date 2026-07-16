"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, CircleCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Project } from "@/lib/projects-data";

const A = "#f58220"; // accent orange

export default function ProjectPageClient({ project }: { project: Project }) {
  return (
    <>
      <Navbar />

      {/* ── HERO HEADER ──────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "460px", display: "flex", alignItems: "flex-end", paddingBottom: "56px", overflow: "hidden" }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
          unoptimized
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(11,60,93,0.9) 0%, rgba(245,130,32,0.8) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="site-wrap" style={{ position: "relative", zIndex: 10 }}>
          <span style={{ display: "inline-block", padding: "5px 14px", background: A, color: "#fff", fontSize: "11px", fontWeight: 700, borderRadius: "999px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
            {project.category}
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 900, color: "#fff", marginBottom: "20px", lineHeight: 1.1 }}>
            {project.title}
          </h1>

          <nav style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500 }} className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={13} style={{ color: "rgba(255,255,255,0.45)" }} />
            <Link href="/projects" style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500 }} className="hover:text-white transition-colors">
              Projects
            </Link>
            <ChevronRight size={13} style={{ color: "rgba(255,255,255,0.45)" }} />
            <span style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }}>{project.title}</span>
          </nav>
        </div>
      </section>

      {/* ── PROJECT METADATA BAR ────────────────────────────────────── */}
      <section style={{ background: "#f8f9fb", borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "32px 0" }}>
        <div className="site-wrap">
          <div style={{ display: "grid", gap: "24px" }} className="grid-cols-2 md:grid-cols-4">
            <div>
              <span style={{ color: "#888", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "4px" }}>Client</span>
              <span style={{ color: "#1a1a1a", fontSize: "15px", fontWeight: 700 }}>{project.client}</span>
            </div>
            <div>
              <span style={{ color: "#888", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "4px" }}>Category</span>
              <span style={{ color: "#1a1a1a", fontSize: "15px", fontWeight: 700 }}>{project.category}</span>
            </div>
            <div>
              <span style={{ color: "#888", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "4px" }}>Year Completed</span>
              <span style={{ color: "#1a1a1a", fontSize: "15px", fontWeight: 700 }}>{project.year}</span>
            </div>
            <div>
              <span style={{ color: "#888", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "4px" }}>Service Focus</span>
              <span style={{ color: "#1a1a1a", fontSize: "15px", fontWeight: 700 }}>{project.tags.join(" • ")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY DETAILS ───────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="site-wrap">
          <div style={{ display: "grid", gap: "64px" }} className="lg:grid-cols-[1.8fr_1fr]">

            {/* Left Column: Challenge & Solution */}
            <div>
              <div style={{ marginBottom: "48px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <div style={{ width: "32px", height: "2px", background: A }} />
                  <span style={{ color: A, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>The Challenge</span>
                </div>
                <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "18px" }}>
                  What the Client Needed
                </h2>
                <p style={{ color: "#555", fontSize: "15.5px", lineHeight: "1.8", textAlign: "justify" }}>
                  {project.challenge}
                </p>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <div style={{ width: "32px", height: "2px", background: A }} />
                  <span style={{ color: A, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Our Solution</span>
                </div>
                <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "18px" }}>
                  How We Crafted Success
                </h2>
                <p style={{ color: "#555", fontSize: "15.5px", lineHeight: "1.8", textAlign: "justify" }}>
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Right Column: Scope of Work checklist */}
            <aside>
              <div style={{ padding: "40px 32px", border: "1px solid rgba(0,0,0,0.07)", background: "#fafafa" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "24px", paddingBottom: "12px", borderBottom: "2px solid #e5e7eb" }}>
                  Scope of Work
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "18px", padding: 0, margin: 0, listStyle: "none" }}>
                  {project.scope.map((item, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <CircleCheck size={18} style={{ color: A, flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ color: "#333", fontSize: "14.5px", fontWeight: 600, lineHeight: 1.4 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── SHOWCASE GALLERY ─────────────────────────────────────────── */}
      <section style={{ background: "#f8f9fb", padding: "80px 0", borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <div className="site-wrap">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{ width: "32px", height: "2px", background: A }} />
              <span style={{ color: A, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Showcase</span>
              <div style={{ width: "32px", height: "2px", background: A }} />
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1a1a1a" }}>
              Visual Deliverables
            </h2>
          </div>

          <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                style={{
                  position: "relative",
                  height: "260px",
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "#fff",
                  overflow: "hidden",
                }}
                className="group"
              >
                <Image
                  src={img}
                  alt={`${project.title} gallery image ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                  className="group-hover:scale-105"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ───────────────────────────────────────────── */}
      <section style={{ background: "#1a1a1a", padding: "80px 0", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="site-wrap" style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#fff", marginBottom: "14px" }}>
            Inspired by this <span style={{ color: A }}>Case Study</span>?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", marginBottom: "36px", maxWidth: "540px", margin: "0 auto 36px", lineHeight: 1.7 }}>
            Let us design a unified strategy and striking branding system that positions your company for market dominance.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 36px",
                background: A,
                color: "#fff",
                fontWeight: 700,
                borderRadius: "999px",
                fontSize: "14px",
                transition: "background 0.2s",
              }}
              className="hover:bg-[#ff933c]"
            >
              Get a Free Consultation <ArrowRight size={16} />
            </Link>
            <Link
              href="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 36px",
                border: "2px solid rgba(255,255,255,0.2)",
                color: "#fff",
                fontWeight: 700,
                borderRadius: "999px",
                fontSize: "14px",
                background: "transparent",
                transition: "all 0.2s",
              }}
              className="hover:border-white"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
