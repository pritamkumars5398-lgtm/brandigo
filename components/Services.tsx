"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// A 6-item highlight of our design services (full list lives on /services).
const services = [
  { img: "https://images.unsplash.com/photo-1626785774573-4b799315345d", title: "Logo Design", description: "A professional logo is the first step in establishing your brand — a memorable first impression that captures your company's values." },
  { img: "https://images.unsplash.com/photo-1542435503-956c469947f6", title: "Brochure Design", description: "Introduce your company and showcase your products, services and key features in a beautifully designed brochure." },
  { img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740", title: "Stationery Design", description: "Letterheads, business cards, envelopes and more — cohesive stationery that strengthens your corporate identity." },
  { img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113", title: "Social Media Poster", description: "Scroll-stopping, on-brand posters that help you reach and engage your audience across every social network." },
  { img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da", title: "Packaging Design", description: "Standout product packaging — your first physical touchpoint — that conveys your brand's identity and quality." },
  { img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5", title: "UI/UX Design", description: "Intuitive, delightful interfaces — UI for how it looks, UX for how it feels — that make digital products a joy to use." },
];

// Each card flies in from a different spot, then settles into the grid.
// Pattern per 3-col row: left column ← from left, middle ↑ from below,
// right column → from right — each with a little tilt + scale.
const cardEntrance = [
  "translate(-220px, 120px) rotate(-14deg) scale(0.75)",
  "translate(0, 260px) rotate(4deg) scale(0.7)",
  "translate(220px, 120px) rotate(14deg) scale(0.75)",
  "translate(-260px, -40px) rotate(-12deg) scale(0.75)",
  "translate(0, 300px) rotate(-4deg) scale(0.7)",
  "translate(260px, -40px) rotate(12deg) scale(0.75)",
  "translate(-220px, 140px) rotate(-14deg) scale(0.75)",
];

export default function Services() {
  // triggerOnce: false → re-animates every time the section scrolls into view
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: false });

  return (
    <section id="services" ref={ref} style={{ padding: "100px 0", background: "#ffffff", position: "relative", overflow: "hidden" }}>
      {/* Background watermark */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "240px", fontWeight: 900, color: "rgba(0,0,0,0.015)", whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none", letterSpacing: "-0.05em" }}>
        SERVICES
      </div>

      <div className="site-wrap">

        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "64px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
            <span style={{ color: "#f58220", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>What We Do</span>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "14px" }}>
            Our <span style={{ color: "#f58220" }}>Services</span>
          </h2>
          <p style={{ color: "#777", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
            Comprehensive branding and marketing solutions tailored to elevate your business.
          </p>
        </div>
        {/* sdfsf */}
        {/* Grid */}
        <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Link
              key={service.title}
              href="/services"
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "0",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)", position: "relative",
                overflow: "hidden",
                opacity: inView ? 1 : 0,
                transform: inView ? "translate(0,0) rotate(0deg) scale(1)" : cardEntrance[i % cardEntrance.length],
                transition: `opacity 1.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.2}s, transform 2s cubic-bezier(0.34,1.4,0.5,1) ${i * 0.2}s`,
                willChange: "transform, opacity",
                textDecoration: "none",
              }}
              className="card-hover group"
            >
              {/* Hover top-border accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#f58220", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.3s ease", zIndex: 2 }} className="group-hover:scale-x-100" />

              {/* Image */}
              <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
                <Image src={`${service.img}?w=640&q=70`} alt={service.title} fill unoptimized sizes="(max-width: 640px) 100vw, 380px" style={{ objectFit: "cover", transition: "transform 0.5s ease" }} className="group-hover:scale-110" />
              </div>

              <div style={{ padding: "26px 28px 28px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px", transition: "color 0.2s" }} className="group-hover:text-[#f58220]">
                  {service.title}
                </h3>
                <p style={{ color: "#888", fontSize: "13.5px", lineHeight: 1.7, marginBottom: "18px" }}>
                  {service.description}
                </p>

                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#f58220", fontSize: "13px", fontWeight: 600, opacity: 0, transition: "opacity 0.2s" }} className="group-hover:opacity-100">
                  Read More <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "52px", display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              background: "#f58220",
              color: "#fff",
              fontWeight: 700,
              borderRadius: "999px",
              fontSize: "14px",
              transition: "background 0.2s",
            }}
            className="hover:bg-[#ff933c]"
          >
            View All Services <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              border: "2px solid #f58220",
              fontWeight: 700,
              borderRadius: "999px",
              fontSize: "14px",
              transition: "background 0.2s, color 0.2s",
            }}
            className="text-[#f58220] hover:bg-[#f58220] hover:text-white group"
          >
            Get a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
