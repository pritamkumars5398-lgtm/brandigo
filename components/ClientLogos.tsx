"use client";

import { motion } from "framer-motion";

const logos = [
  { src: "https://granth.in/wp-content/uploads/2025/06/IDFC.svg", alt: "IDFC FIRST Bank" },
  { src: "https://granth.in/wp-content/uploads/2025/08/Granth-Main-Clients-Logo.zip-2.svg", alt: "Welspun" },
  { src: "https://granth.in/wp-content/uploads/2025/08/adani.svg", alt: "Adani" },
  { src: "https://granth.in/wp-content/uploads/2025/06/Fleet-1.svg", alt: "Fleet Management" },
  { src: "https://granth.in/wp-content/uploads/2025/04/SAGILITY-1.webp", alt: "Sagility" },
  { src: "https://granth.in/wp-content/uploads/2025/06/uplers.svg", alt: "Uplers" },
  { src: "https://granth.in/wp-content/uploads/2025/08/Granth-Main-Clients-Logo.zip-7.svg", alt: "Volkswagen" },
  { src: "https://granth.in/wp-content/uploads/2025/08/hyfun-2.svg", alt: "Hyfun" },
  { src: "https://granth.in/wp-content/uploads/2025/08/Corona-150x90-1.svg", alt: "Corona" },
  { src: "https://granth.in/wp-content/uploads/2025/08/Granth-Main-Clients-Logo.zip-10.svg", alt: "Rasna" },
  { src: "https://granth.in/wp-content/uploads/2025/08/Granth-Main-Clients-Logo.zip-11.svg", alt: "ShareChat" },
  { src: "https://granth.in/wp-content/uploads/2025/08/two-brothers-1-1.svg", alt: "Two Brothers" },
  { src: "https://granth.in/wp-content/uploads/2025/08/Granth-Main-Clients-Logo.zip-13.svg", alt: "Mygate" },
  { src: "https://granth.in/wp-content/uploads/2025/08/Granth-Main-Clients-Logo.zip-14.svg", alt: "Sahaj" },
];

const track = [...logos, ...logos, ...logos];

export default function ClientLogos() {
  return (
    <section
      style={{
        background: "#f8f8f8",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        padding: "40px 0",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          textAlign: "center",
          color: "#aaa",
          fontSize: "11px",
          letterSpacing: "5px",
          textTransform: "uppercase",
          marginBottom: "28px",
          fontWeight: 600,
        }}
      >
        Trusted By Leading Brands
      </p>

      <div style={{ overflow: "hidden", position: "relative" }}>
        {/* Fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(to right, #f8f8f8, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(to left, #f8f8f8, transparent)", zIndex: 2, pointerEvents: "none" }} />

        <motion.div
          style={{ display: "flex", gap: "80px", width: "max-content", alignItems: "center", paddingRight: "80px" }}
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                height: "45px",
                width: "140px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.3s ease",
              }}
              className="hover:scale-110 cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ maxHeight: "38px", maxWidth: "120px", objectFit: "contain" }}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
