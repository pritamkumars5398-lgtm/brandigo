"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// A 6-item highlight of our design services (full list lives on /services).
const services = [
  { img: "/Stationary Design/Logo/00001.jpeg", title: "Logo Design", href: "/services/logo-design", description: "A professional logo is the first step in establishing your brand — a memorable first impression that captures your company's values." },
  { img: "/Stationary Design/Stationary Design/001.jpeg", title: "Stationery Design", href: "/services/stationery-design", description: "Letterheads, business cards, envelopes and more — cohesive stationery that strengthens your corporate identity." },
  { img: "/Stationary Design/banner design/Banner1.jpeg", title: "Banner & Standee Design", href: "/services/banner-standee-design", description: "Portable, high-impact stands — fixed, X-style, expandable or retractable — that work at any size for any placement." },
  { img: "/Stationary Design/packaging/10.jpeg", title: "Packaging & Label Design", href: "/services/packaging-label-design", description: "Standout packaging and labels — your first physical touchpoint — that convey your brand's identity and quality." },
  { img: "/Stationary Design/menu/006.jpeg", title: "Menu Design", href: "/services/menu-design", description: "Menus that express your eatery's personality, help customers grasp your concept and drive profitability." },
  { img: "/Stationary Design/Brouchers & File/001.jpg", title: "Brochure Design", href: "/services/brochure-design", description: "Introduce your company and showcase your products, services and key features in a beautifully designed brochure." },
  { img: "/Stationary Design/Bag Design/7d397ec4-01c4-416e-9a8a-8c96da387090.jpg", title: "Bag Design", href: "/services/bag-design", description: "Custom-designed bags that carry your brand wherever your customers go — a walking advertisement for your business." },
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
  "translate(0, 260px) rotate(4deg) scale(0.7)",
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
          {services.slice(0, 6).map((service, i) => (
            <Link
              key={service.title}
              href={service.href}
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
                <Image src={service.img} alt={service.title} fill sizes="(max-width: 640px) 100vw, 380px" style={{ objectFit: "cover", transition: "transform 0.5s ease" }} className="group-hover:scale-110" />
              </div>

              <div style={{ padding: "26px 28px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px", transition: "color 0.2s" }} className="group-hover:text-[#f58220]">
                  {service.title}
                </h3>
                <p style={{ color: "#888", fontSize: "13.5px", lineHeight: 1.7, marginBottom: "18px", flex: 1 }}>
                  {service.description}
                </p>

                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "9px 20px", background: "#f58220", color: "#fff", fontWeight: 700, fontSize: "13px", borderRadius: "999px", alignSelf: "flex-start", transition: "background 0.2s" }} className="group-hover:bg-[#ff933c]">
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
              padding: "14px 32px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "14px",
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
            }}
            className="border-2 border-[#f58220] bg-white text-[#f58220] hover:bg-[#f58220] hover:text-white"
          >
            View All Services <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            style={{
              padding: "14px 32px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "14px",
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
            }}
            className="border-2 border-[#f58220] bg-[#f58220] text-white hover:bg-white hover:text-[#f58220]"
          >
            Get a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
