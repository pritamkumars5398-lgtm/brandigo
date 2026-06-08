"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MotionWrapper from "./ui/MotionWrapper";

const services = [
  { icon: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Service-1.png", title: "Graphic Designing", description: "Stunning visual content that brings your brand to life — logos, brochures, social media creatives, and more.", href: "/services/graphic-designing" },
  { icon: "https://jkbrandingindia.com/wp-content/uploads/2024/10/social-media.png", title: "Digital Marketing", description: "Cost-effective brand awareness campaigns that connect you with your target audience across all digital platforms.", href: "/services/digital-marketing" },
  { icon: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Service-3.png", title: "Website Development", description: "Responsive, user-centric websites that make lasting impressions and drive business growth.", href: "/services/website-development" },
  { icon: "https://jkbrandingindia.com/wp-content/uploads/2024/10/vector.png", title: "Search Engine Optimization", description: "Improve your website's visibility on Google, Bing and other search engines through proven SEO strategies.", href: "/services/search-engine-optimization" },
  { icon: "https://jkbrandingindia.com/wp-content/uploads/2025/01/camera.png", title: "Photo & Videography", description: "Transforming moments into timeless memories through stunning photography and cinematic videography.", href: "/services/photo-videography" },
  { icon: "https://jkbrandingindia.com/wp-content/uploads/2024/10/adwords.png", title: "Google Ads", description: "Targeted online advertising to acquire new customers and maximize your return on investment.", href: "/services/google-ads" },
  { icon: "https://jkbrandingindia.com/wp-content/uploads/2024/10/meta_ads.png", title: "META Ads", description: "Targeted social media advertising on Meta platforms to reach your audience.", href: "/services/meta-ads" }
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 0", background: "#ffffff", position: "relative", overflow: "hidden" }}>
      {/* Background watermark */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "240px", fontWeight: 900, color: "rgba(0,0,0,0.015)", whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none", letterSpacing: "-0.05em" }}>
        SERVICES
      </div>

      <div className="site-wrap">

        {/* Header */}
        <MotionWrapper variant="fadeUp" delay={0.2}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "64px",
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
        </MotionWrapper>
        {/* Grid */}
        <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <MotionWrapper key={service.title} variant="fadeUp" delay={0.2 + (i * 0.1)}>
              <Link
                href={service.href}
                style={{
                  display: "block",
                  padding: "32px 28px",
                  borderRadius: "0",
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)", position: "relative",
                  overflow: "hidden",
                  textDecoration: "none",
                }}
                className="card-hover group"
              >
                {/* Hover top-border accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#f58220", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.3s ease" }} className="group-hover:scale-x-100" />

                {/* Icon */}
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "0",
                    background: "#fff5eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    position: "relative",
                    transition: "background 0.3s",
                  }}
                  className="group-hover:bg-[#f58220]"
                >
                  <Image src={service.icon} alt={service.title} fill className="object-contain p-3" unoptimized />
                </div>

                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px", transition: "color 0.2s" }} className="group-hover:text-[#f58220]">
                  {service.title}
                </h3>
                <p style={{ color: "#888", fontSize: "13.5px", lineHeight: 1.7, marginBottom: "18px" }}>
                  {service.description}
                </p>

                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#f58220", fontSize: "13px", fontWeight: 600, opacity: 0, transition: "opacity 0.2s" }} className="group-hover:opacity-100">
                  Read More <ArrowRight size={13} />
                </span>
              </Link>
            </MotionWrapper>
          ))}
        </div>

        {/* CTA */}
        <MotionWrapper variant="fadeUp" delay={0.6}>
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
                color: "#f58220",
                fontWeight: 700,
                borderRadius: "999px",
                fontSize: "14px",
                transition: "background 0.2s, color 0.2s",
              }}
              className="hover:bg-[#f58220] hover:text-white group"
            >
              Get a Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
