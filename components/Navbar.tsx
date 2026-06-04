"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "/"         },
  { label: "About",    href: "/about"    },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Career",   href: "/career"   },
  { label: "Blog",     href: "/blog"     },
  { label: "Contact",  href: "/contact"  },
];

/** Pages whose hero has a dark overlay → need white nav text when transparent */
const DARK_HERO_ROUTES = ["/contact", "/blog"];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isDarkHero = DARK_HERO_ROUTES.some(r => pathname.startsWith(r));

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    const id = requestAnimationFrame(handler);
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", handler);
    };
  }, []);

  // Transparent state text colours:
  //   dark-hero pages  → white text over dark gradient
  //   home / light pages → dark text over light hero
  const transparentText  = isDarkHero ? "#fff"                   : "#333";
  const transparentPhone = isDarkHero ? "rgba(255,255,255,0.85)" : "#555";

  const textColor  = scrolled ? "#333"  : transparentText;
  const phoneColor = scrolled ? "#555"  : transparentPhone;

  // Logo: invert to white only on dark-hero + not scrolled
  const logoFilter = (!scrolled && isDarkHero) ? "brightness(0) invert(1)" : "none";

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background:     scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow:      scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        borderBottom:   scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        transition: "background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div className="site-wrap">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

          {/* Logo */}
          <Link href="/">
            <Image
              src="/brandingo-logo-v2.png"
              alt="Brandingo India"
              width={180}
              height={40}
              style={{ height: "40px", width: "auto", objectFit: "contain", filter: logoFilter, transition: "filter 0.3s ease" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: isActive ? "#f58220" : textColor,
                  position: "relative",
                  paddingBottom: "4px",
                  transition: "color 0.3s",
                }}
                className="group hover:text-[#f58220]"
              >
                {link.label}
                <span
                  style={{
                    position: "absolute",
                    bottom: 0, left: 0,
                    height: "2px", width: isActive ? "100%" : 0,
                    background: "#f58220",
                    borderRadius: "2px",
                    transition: "width 0.25s ease",
                  }}
                  className="group-hover:w-full"
                />
              </Link>
            )})}
          </nav>

          {/* CTA row */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919104963161"
              style={{ fontSize: "13px", fontWeight: 600, color: phoneColor, transition: "color 0.3s" }}
              className="hover:text-[#f58220]"
            >
              +91 91049 63161
            </a>
            <Link
              href="/contact"
              style={{
                padding: "10px 24px",
                background: "#f58220",
                color: "#fff",
                fontWeight: 700,
                fontSize: "13px",
                borderRadius: "999px",
                transition: "background 0.2s",
                whiteSpace: "nowrap",
              }}
              className="hover:bg-[#ff933c]"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: textColor, padding: "8px", background: "none", border: "none", cursor: "pointer", transition: "color 0.3s" }}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          maxHeight: mobileOpen ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          background: "#fff",
          borderTop: mobileOpen ? "1px solid rgba(0,0,0,0.06)" : "none",
        }}
        className="lg:hidden"
      >
        <div style={{ padding: "12px 16px 20px" }}>
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{ display: "block", padding: "12px 16px", fontSize: "14px", fontWeight: 500, color: isActive ? "#f58220" : "#444", backgroundColor: isActive ? "#fff5eb" : "transparent", borderRadius: "8px", transition: "background 0.15s, color 0.15s" }}
              className="hover:bg-[#fff5eb] hover:text-[#f58220]"
            >
              {link.label}
            </Link>
          )})}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{ display: "block", marginTop: "12px", textAlign: "center", padding: "14px", background: "#f58220", color: "#fff", fontWeight: 700, borderRadius: "999px", fontSize: "14px" }}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
