"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const services = [
  { img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=640&q=70", title: "Website Development", href: "/services/website-development", desc: "Fast, responsive and SEO-ready websites — from business sites and landing pages to full e-commerce stores — built to turn visitors into customers." },
  { img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=640&q=70", title: "Search Engine Optimization", href: "/services/search-engine-optimization", desc: "Data-driven SEO that lifts your rankings, drives qualified organic traffic and keeps your brand on the first page where customers are searching." },
  { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=70", title: "Digital Marketing", href: "/services/digital-marketing", desc: "Full-funnel digital marketing across social, search, content and email — building awareness, engagement and measurable, accountable growth." },
  { img: "/Stationary Design/Logo/001.jpeg", title: "Logo Design", href: "/services/logo-design", desc: "A professional, well-designed logo is the crucial first step in establishing your brand — it creates the first impression of your company and expresses its values all in one." },
  { img: "/Stationary Design/Stationary Design/002.jpeg", title: "Stationery Design", href: "/services/stationery-design", desc: "Letterheads, envelopes, folders, business cards, invoices and more — well-executed stationery boosts your corporate identity and sets the tone from the very first touch." },
  { img: "/Stationary Design/banner design/Banner2.jpeg", title: "Banner & Standee Design", href: "/services/banner-standee-design", desc: "One of the most popular ways to market today. Portable stands — fixed, X-style, expandable or retractable — work in any size for any placement and visibility." },
  { img: "/Stationary Design/packaging/11.jpg", title: "Packaging & Label Design", href: "/services/packaging-label-design", desc: "The exterior wrap of your product and your first physical interaction with the public — packaging and labels that convey your brand's identity, quality and reputation." },
  { img: "/Stationary Design/menu/007.jpeg", title: "Menu Design", href: "/services/menu-design", desc: "Menus that express your eatery's personality, help customers understand your concept and promote profitability — key to any restaurant's marketing plan." },
  { img: "/Stationary Design/invtations/00b00e3b-0acd-4b3b-9af0-8c57be93ebbd.jpg", title: "Invitation Card Design", href: "/services/invitation-card-design", desc: "Beautifully crafted invitation cards for weddings, events and celebrations — designed to set the tone and make a memorable first impression." },
  { img: "/Stationary Design/tag design/a05665c2-b65d-4329-8476-5212f02a5f1b.jpg", title: "Tag Design", href: "/services/tag-design", desc: "Custom tags that carry your brand — from price and care tags to gift and product tags — designed for clarity, character and a premium feel." },
  { img: "/Stationary Design/Brouchers & File/002.jpeg", title: "Brochure Design", href: "/services/brochure-design", desc: "Brochures extend your customers' knowledge of your business — introducing your company and giving a snapshot of your products, services, features and contact information." },
  { img: "/Stationary Design/Bag Design/8b2908ab-45cc-4945-aa89-3eca9f541d5e.jpg", title: "Bag Design", href: "/services/bag-design", desc: "Custom-designed bags that carry your brand wherever your customers go — a walking billboard that keeps your identity visible long after the sale." },
];

export default function AllServices() {
  const { ref, inView } = useInView({ threshold: 0.04, triggerOnce: true });

  return (
    <section ref={ref} style={{ padding: "100px 0", background: "#ffffff", position: "relative", overflow: "hidden" }}>
      <div className="site-wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
            <span style={{ color: "#f58220", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>What We Do</span>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "14px" }}>
            Our <span style={{ color: "#f58220" }}>Services</span>
          </h2>
          <p style={{ color: "#777", maxWidth: "560px", margin: "0 auto", lineHeight: 1.75 }}>
            Comprehensive branding, web and marketing solutions tailored to bring your brand to life — pick what your business needs.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${(i % 3) * 0.08 + Math.floor(i / 3) * 0.06}s, transform 0.6s ease ${(i % 3) * 0.08 + Math.floor(i / 3) * 0.06}s`,
              }}
              className="card-hover group"
            >
              <div style={{ position: "relative", width: "100%", height: "190px", overflow: "hidden" }}>
                <Image src={s.img} alt={s.title} fill sizes="(max-width: 640px) 100vw, 380px" style={{ objectFit: "cover", transition: "transform 0.5s ease" }} className="group-hover:scale-110" />
              </div>
              <div style={{ padding: "24px 26px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "16px", marginBottom: "8px" }} className="group-hover:text-[#f58220]">{s.title}</h3>
                <p style={{ color: "#888", fontSize: "13.5px", lineHeight: 1.7, flex: 1, marginBottom: "18px" }}>{s.desc}</p>
                <Link
                  href={s.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "9px 20px",
                    background: "#f58220",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "13px",
                    borderRadius: "999px",
                    transition: "background 0.2s",
                    alignSelf: "flex-start",
                    textDecoration: "none",
                  }}
                  className="hover:bg-[#ff933c]"
                >
                  Explore <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
