import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const SocialFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const SocialLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
);
const SocialInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const SocialYoutube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
);

const quickLinks = [
  { label: "Home", href: "/" }, { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" }, { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" }, { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" }, { label: "Privacy Policy", href: "/privacy" },
];

const serviceLinks = [
  { label: "Graphic Designing", href: "/services/graphic-designing" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "Search Engine Optimization", href: "/services/search-engine-optimization" },
  { label: "Hoarding & Kiosk", href: "/services/hoarding-kiosk" },
  { label: "Exhibition Stall", href: "/services/exhibition-stall" },
  { label: "Photo & Videography", href: "/services/photo-videography" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Magazine, Radio & Cinema Ads", href: "/services/magazine-radio-cinema-ads" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#fff" }}>

      {/* CTA Banner */}
      <div style={{ background: "#f58220", position: "relative", overflow: "hidden" }}>
        {/* Diagonal stripe pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(0,0,0,0.04) 30px, rgba(0,0,0,0.04) 31px)", pointerEvents: "none" }} />
        <div className="site-wrap" style={{ position: "relative", zIndex: 1, padding: "48px 24px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, color: "#000", marginBottom: "6px" }}>
              Ready to Build Your Brand?
            </h3>
            <p style={{ color: "rgba(0,0,0,0.6)", fontWeight: 500, fontSize: "15px" }}>
              Get in touch with our experts for a free consultation today.
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              background: "#000",
              color: "#fff",
              fontWeight: 700,
              fontSize: "14px",
              borderRadius: "999px",
              transition: "background 0.2s",
              whiteSpace: "nowrap",
            }}
            className="hover:bg-[#222] sm:self-auto"
          >
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer body */}
      <div style={{ background: "#1a1a1a" }}>
        <div className="site-wrap" style={{ padding: "64px 24px" }}>
          <div style={{ display: "grid", gap: "40px" }} className="md:grid-cols-2 lg:grid-cols-4">

            {/* Col 1 */}
            <div>
              <Image src="/logo.png?v=2" alt="Brandingo" width={140} height={45} style={{ height: "40px", width: "auto", objectFit: "contain", marginBottom: "16px", filter: "brightness(0) invert(1)" }} />
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: 1.75, marginBottom: "20px" }}>
                Brandingo India Pvt. Ltd. — 17+ years of expertise in branding, designing, and marketing. Making every customer feel WoW.
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                {[SocialFacebook, SocialLinkedin, SocialInstagram, SocialYoutube].map((Icon, i) => (
                  <a key={i} href="#" style={{ width: "34px", height: "34px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.4)", transition: "all 0.2s" }} className="hover:border-[#f58220]/60 hover:text-[#f58220]">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>Quick Links</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px", transition: "color 0.2s" }} className="hover:text-[#f58220] group">
                      <ArrowRight size={11} style={{ opacity: 0, transition: "opacity 0.2s, transform 0.2s" }} className="group-hover:opacity-100 group-hover:translate-x-0.5" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>Our Services</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {serviceLinks.map((s) => (
                  <li key={s.label}>
                    <Link href={s.href} style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px", transition: "color 0.2s" }} className="hover:text-[#f58220] group">
                      <ArrowRight size={11} style={{ opacity: 0, transition: "opacity 0.2s" }} className="group-hover:opacity-100" />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>Contact Us</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "10px" }}>
                  <MapPin size={14} style={{ color: "#f58220", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: 1.65 }}>
                    Office No. 1104, Wings Business Bay, Nr ITC Fortune Hotel, 150 ft. Ring Road, Rajkot
                  </span>
                </li>
                <li>
                  <a href="tel:+919104963161" style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.4)", fontSize: "13px", transition: "color 0.2s" }} className="hover:text-[#f58220]">
                    <Phone size={14} style={{ color: "#f58220" }} /> +91 91049 63161
                  </a>
                </li>
                <li>
                  <a href="mailto:info@brandingoindia.com" style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.4)", fontSize: "13px", transition: "color 0.2s" }} className="hover:text-[#f58220]">
                    <Mail size={14} style={{ color: "#f58220" }} /> info@brandingoindia.com
                  </a>
                </li>
              </ul>
              <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>Also In</p>
                {["Jamnagar", "Ahmedabad"].map((c) => (
                  <div key={c} style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.35)", fontSize: "13px", marginBottom: "6px" }}>
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#f58220", flexShrink: 0 }} /> {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="site-wrap" style={{ padding: "18px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
            <p style={{ color: "rgba(255,255,255,0.22)", fontSize: "12px" }}>
              Copyright 2024 © All Right Reserved Design by{" "}
              <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>Brandingo (India) Pvt. Ltd.</span>
            </p>
            <p style={{ color: "rgba(255,255,255,0.22)", fontSize: "12px" }}>
              Powered by <span style={{ color: "#f58220", fontWeight: 600 }}>Brandingo (India) Pvt. Ltd.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
