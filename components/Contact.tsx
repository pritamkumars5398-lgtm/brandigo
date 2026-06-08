"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import MotionWrapper from "./ui/MotionWrapper";

const SocialFacebook = () => <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const SocialLinkedin = () => <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10V9h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
const SocialInstagram = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>;
const SocialYoutube = () => <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" /></svg>;

const offices = [
  { city: "Ahmedabad", label: "Head Office", address: "607, Iconic Shyamal, Shyamal Cross Roads, 132 Feet Ring Rd, Shyamal, Ahmedabad, Gujarat 380015" },
  { city: "Bangalore", label: "Branch Office", address: "Shanti Apartments, Behind Indian Bike Showroom, Bhaskaran Rd, Bengaluru, Karnataka 560042" }
];

const iBase: React.CSSProperties = { width: "100%", padding: "12px 16px", background: "#f9fafb", border: "1.5px solid #e5e7eb", borderRadius: "0", color: "#1a1a1a", fontSize: "14px", outline: "none", transition: "border-color 0.2s" };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" style={{ padding: "100px 0", background: "#ffffff", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(11,60,93,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="site-wrap">
        {/* Header */}
        <MotionWrapper variant="fadeUp" delay={0.2}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
              <span style={{ color: "#f58220", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Get In Touch</span>
              <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "14px" }}>
              Let&apos;s Build Something <span style={{ color: "#f58220" }}>Great Together</span>
            </h2>
            <p style={{ color: "#777", maxWidth: "460px", margin: "0 auto", lineHeight: 1.75 }}>Ready to elevate your brand? Contact us today for a free consultation.</p>
          </div>
        </MotionWrapper>

        <div style={{ display: "grid", gap: "40px", alignItems: "start" }} className="lg:grid-cols-2">
          {/* Form */}
          <MotionWrapper variant="fadeRight" delay={0.4}>
            <div style={{ padding: "40px 36px", border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "24px" }}>Send Us a Message</h3>
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gap: "16px" }} className="sm:grid-cols-2">
                  <div>
                    <label style={{ display: "block", color: "#555", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>Full Name</label>
                    <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required placeholder="Your name" style={iBase} onFocus={e => (e.target.style.borderColor = "#f58220")} onBlur={e => (e.target.style.borderColor = "#e5e7eb")} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#555", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>Email</label>
                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required placeholder="your@email.com" style={iBase} onFocus={e => (e.target.style.borderColor = "#f58220")} onBlur={e => (e.target.style.borderColor = "#e5e7eb")} />
                  </div>
                </div>
                <div style={{ display: "grid", gap: "16px" }} className="sm:grid-cols-2">
                  <div>
                    <label style={{ display: "block", color: "#555", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>Phone</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 00000 00000" style={iBase} onFocus={e => (e.target.style.borderColor = "#f58220")} onBlur={e => (e.target.style.borderColor = "#e5e7eb")} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#555", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>Service</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={{ ...iBase, color: form.service ? "#1a1a1a" : "#aaa" }}>
                      <option value="">Select service</option>
                      <option value="graphic">Graphic Designing</option>
                      <option value="digital">Digital Marketing</option>
                      <option value="web">Website Development</option>
                      <option value="seo">SEO</option>
                      <option value="photo">Photo &amp; Videography</option>
                      <option value="ads">Google Ads</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", color: "#555", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>Message</label>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required rows={4} placeholder="Tell us about your project..." style={{ ...iBase, resize: "none" }} onFocus={e => (e.target.style.borderColor = "#f58220")} onBlur={e => (e.target.style.borderColor = "#e5e7eb")} />
                </div>
                <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "15px", borderRadius: "0", border: "none", background: sent ? "#22c55e" : "#f58220", color: "#fff", fontWeight: 700, fontSize: "15px", cursor: "pointer", transition: "background 0.2s" }}>
                  {sent ? "Message Sent!" : <><span>Send Message</span><Send size={16} /></>}
                </button>
              </form>
            </div>
          </MotionWrapper>

          {/* Info */}
          <MotionWrapper variant="fadeLeft" delay={0.6}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "grid", gap: "12px" }} className="sm:grid-cols-2">
              {[{ icon: Phone, label: "Call Us", value: "+91 91049 63161", href: "tel:+919104963161" }, { icon: Mail, label: "Email Us", value: "info@brandingoindia.com", href: "mailto:info@brandingoindia.com" }].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px 20px", borderRadius: "0", border: "1px solid rgba(0,0,0,0.07)", background: "#fff", textDecoration: "none", transition: "border-color 0.2s" }} className="hover:border-[#f58220]/50">
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#fff5eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={17} style={{ color: "#f58220" }} />
                  </div>
                  <div>
                    <p style={{ color: "#aaa", fontSize: "11px", fontWeight: 600, marginBottom: "2px" }}>{label}</p>
                    <p style={{ color: "#1a1a1a", fontSize: "13px", fontWeight: 700 }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {offices.map(o => (
              <div key={o.city} style={{ padding: "20px 24px", borderRadius: "0", border: "1px solid rgba(0,0,0,0.07)", background: "#fff", transition: "border-color 0.2s" }} className="hover:border-[#f58220]/40">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <MapPin size={15} style={{ color: "#f58220" }} />
                  <span style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "14px" }}>{o.city}</span>
                  <span style={{ padding: "2px 10px", background: "#fff5eb", color: "#d66b10", fontSize: "11px", fontWeight: 700, borderRadius: "999px", border: "1px solid rgba(245,130,32,0.3)" }}>{o.label}</span>
                </div>
                <p style={{ color: "#888", fontSize: "13px", lineHeight: 1.6, paddingLeft: "23px" }}>{o.address}</p>
              </div>
            ))}

            <div>
              <p style={{ color: "#aaa", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Follow Us</p>
              <div style={{ display: "flex", gap: "10px" }}>
                {[SocialFacebook, SocialLinkedin, SocialInstagram, SocialYoutube].map((Icon, i) => (
                  <a key={i} href="#" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1.5px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#888", transition: "all 0.2s" }} className="hover:border-[#f58220] hover:text-[#f58220] hover:bg-[#fff5eb]">
                    <Icon />
                  </a>
                ))}
              </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
