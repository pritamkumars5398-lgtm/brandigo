"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Scientific Logo", href: "/scientific-logo" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Career", href: "/career" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const textColor = isDark ? "#e2e8f0" : "#333";
  const phoneColor = isDark ? "#94a3b8" : "#555";
  const logoFilter = isDark ? "brightness(0) invert(1)" : "none";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: isDark ? "rgba(8, 9, 13, 0.94)" : "#ffffff",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: isDark ? "0 4px 30px rgba(0,0,0,0.6)" : "0 2px 20px rgba(0,0,0,0.08)",
        borderBottom: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)",
        transition: "background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div className="site-wrap">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          <Link href="/">
            <Image
              src="/brandingo-logo-v2.png"
              alt="Brandingo"
              width={180}
              height={40}
              style={{ height: "40px", width: "auto", objectFit: "contain", filter: logoFilter, transition: "filter 0.3s ease" }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 2xl:gap-7">
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
                  className="group hover:!text-[#f58220]"
                >
                  {link.label}
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "2px",
                      width: isActive ? "100%" : 0,
                      background: "#f58220",
                      borderRadius: "2px",
                      transition: "width 0.25s ease",
                    }}
                    className="group-hover:w-full"
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button (Desktop) */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to Light Theme" : "Switch to Black Theme"}
              title={isDark ? "Switch to Light Theme" : "Switch to Black Theme"}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                borderRadius: "999px",
                border: isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(0, 0, 0, 0.1)",
                background: isDark ? "rgba(255, 255, 255, 0.08)" : "#f4f4f5",
                color: isDark ? "#facc15" : "#4b5563",
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontSize: "12px",
                fontWeight: 600,
              }}
              className="hover:scale-105 active:scale-95"
            >
              {isDark ? (
                <>
                  <Sun size={15} className="text-[#facc15]" />
                  <span style={{ color: "#e2e8f0" }}>Light</span>
                </>
              ) : (
                <>
                  <Moon size={15} className="text-[#4b5563]" />
                  <span style={{ color: "#374151" }}>Dark</span>
                </>
              )}
            </button>

            <a
              href="https://wa.me/919979992804"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: phoneColor, transition: "color 0.3s" }}
              className="hover:!text-[#f58220]"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              +91 99799 92804
            </a>
            <Link
              href="/contact"
              style={{
                padding: "9px 22px",
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
            <Link
              href="/admin/login"
              style={{
                padding: "7px 18px",
                border: isDark ? "2px solid #f58220" : "2px solid #0b3c5d",
                color: isDark ? "#f58220" : "#0b3c5d",
                fontWeight: 700,
                fontSize: "13px",
                borderRadius: "999px",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
              className={isDark ? "hover:!bg-[#f58220] hover:!text-white" : "hover:bg-[#0b3c5d] hover:!text-white"}
            >
              Admin Login
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(0, 0, 0, 0.1)",
                background: isDark ? "rgba(255, 255, 255, 0.08)" : "#f4f4f5",
                color: isDark ? "#facc15" : "#4b5563",
                cursor: "pointer",
              }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: textColor, padding: "8px", background: "none", border: "none", cursor: "pointer", transition: "color 0.3s" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          maxHeight: mobileOpen ? "650px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          background: isDark ? "#0d0f15" : "#fff",
          borderTop: mobileOpen ? (isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)") : "none",
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
                style={{
                  display: "block",
                  padding: "12px 16px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: isActive ? "#f58220" : (isDark ? "#e2e8f0" : "#444"),
                  backgroundColor: isActive ? (isDark ? "rgba(245, 130, 32, 0.15)" : "#fff5eb") : "transparent",
                  borderRadius: "8px",
                  transition: "background 0.15s, color 0.15s",
                }}
                className={isDark ? "hover:bg-white/5 hover:text-[#f58220]" : "hover:bg-[#fff5eb] hover:text-[#f58220]"}
              >
                {link.label}
              </Link>
            );
          })}

          <button
            onClick={toggleTheme}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "8px",
              border: isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.08)",
              background: isDark ? "rgba(255, 255, 255, 0.05)" : "#f9fafb",
              color: isDark ? "#fff" : "#1a1a1a",
              cursor: "pointer",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          >
            <span>Theme Mode</span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: isDark ? "#facc15" : "#f58220" }}>
              {isDark ? <><Sun size={16} /> Light Theme</> : <><Moon size={16} /> Black Theme</>}
            </span>
          </button>

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{ display: "block", marginTop: "10px", textAlign: "center", padding: "13px", background: "#f58220", color: "#fff", fontWeight: 700, borderRadius: "999px", fontSize: "14px" }}
          >
            Get Quote
          </Link>
          <Link
            href="/admin/login"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              marginTop: "10px",
              textAlign: "center",
              padding: "13px",
              border: isDark ? "2px solid #f58220" : "2px solid #0b3c5d",
              color: isDark ? "#f58220" : "#0b3c5d",
              fontWeight: 700,
              borderRadius: "999px",
              fontSize: "14px",
              transition: "all 0.2s",
            }}
            className={isDark ? "hover:!bg-[#f58220] hover:!text-white" : "hover:bg-[#0b3c5d] hover:!text-white"}
          >
            Admin Login
          </Link>
        </div>
      </div>
    </header>
  );
}
