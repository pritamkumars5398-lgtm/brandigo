"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Career", href: "#career" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(255, 255, 255, 0.88)" : "transparent",
        boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.04)" : "none",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        transition: "background 0.3s ease, box-shadow 0.3s ease, border 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div className="site-wrap">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

          {/* Logo */}
          <Link href="#home">
            <Image
              src="/logo.png"
              alt="Brandingo India"
              width={75}
              height={52}
              style={{ height: "48px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#444",
                  position: "relative",
                  paddingBottom: "4px",
                  transition: "color 0.2s",
                }}
                className="group hover:text-[#f58220]"
              >
                {link.label}
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "2px",
                    width: 0,
                    background: "#f58220",
                    borderRadius: "2px",
                    transition: "width 0.25s ease",
                  }}
                  className="group-hover:w-full"
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="tel:+919104963161"
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#555",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              className="hover:text-[#f58220] transition-colors"
            >
              +91 91049 63161
            </Link>
            <Link
              href="/contact"
              style={{
                padding: "10px 24px",
                background: "#f58220",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "13px",
                borderRadius: "999px",
                transition: "background 0.2s, box-shadow 0.2s",
              }}
              className="hover:bg-[#ff933c] hover:shadow-md"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#333", padding: "8px", background: "none", border: "none", cursor: "pointer" }}
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
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
        className="lg:hidden"
      >
        <div style={{ padding: "12px 16px 20px" }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "12px 16px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#444",
                borderRadius: "8px",
                transition: "background 0.15s",
              }}
              className="hover:bg-[#fff5eb] hover:text-[#f58220]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              marginTop: "12px",
              textAlign: "center",
              padding: "14px",
              background: "#f58220",
              color: "#ffffff",
              fontWeight: 700,
              borderRadius: "999px",
              fontSize: "14px",
            }}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
