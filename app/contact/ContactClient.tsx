"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Send, ChevronRight } from "lucide-react";

const branches = [
  { label: "Main Branch", city: "Rajkot", address: "Office No. 1104, Wings Business Bay, Nr ITC Fortune Hotel, 150 ft. Ring Road, Mavdi, Rajkot – 360004, Gujarat.", phone: "+91 9104963161" },
  { label: "Jamnagar Branch", city: "Jamnagar", address: "Royal Empire, F.F.-2, Nr Avadh Honda Showroom, Ranjit Sagar Road, Jamnagar – 361005, Gujarat.", phone: "+91 93133 72525" },
  { label: "Ahmedabad Branch", city: "Ahmedabad", address: "Office 1102, Shivam Trade Center (STC), Beside One World West, Bopal Approach, Nr S.P. Ring Road, Bopal, Ahmedabad 380058.", phone: "+91 95864 99001" },
];

const SocialFacebook = () => <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const SocialLinkedin = () => <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10V9h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
const SocialInstagram = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>;
const SocialYoutube = () => <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" /></svg>;

const iBase: React.CSSProperties = { width: "100%", padding: "13px 16px", background: "#f9fafb", border: "1.5px solid #e5e7eb", borderRadius: "0", fontSize: "14px", color: "#1a1a1a", outline: "none", transition: "border-color 0.2s" };

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); setForm({ name: "", email: "", phone: "", message: "" }); setTimeout(() => setSent(false), 3500); };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{ position: "relative", height: "420px", display: "flex", alignItems: "flex-end", paddingBottom: "56px", overflow: "hidden" }}>
        <Image src="https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg" alt="Contact" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority unoptimized />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(11,60,93,0.85) 0%, rgba(245,130,32,0.85) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="site-wrap" style={{ position: "relative", zIndex: 10 }}>
          <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.6rem)", fontWeight: 900, color: "#fff", marginBottom: "12px", lineHeight: 1.1 }}>
            <span style={{ color: "#f58220" }}>C</span>ontac<span style={{ color: "#f58220" }}>t</span>
          </h1>
          <nav style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500 }} className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} style={{ color: "rgba(255,255,255,0.45)" }} />
            <span style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }}>Contact</span>
          </nav>
        </div>
      </section>

      {/* INFO CARDS */}
      <section style={{ background: "#f8f9fb", padding: "72px 0" }}>
        <div className="site-wrap">
          <div style={{ display: "grid", gap: "20px", marginBottom: "20px" }} className="sm:grid-cols-2">
            {[{ icon: Phone, label: "Phone", value: "+91 91049 63161", href: "tel:+919104963161" }, { icon: Mail, label: "Email", value: "info@brandingoindia.com", href: "mailto:info@brandingoindia.com" }].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "36px 24px", background: "#fff", border: "1px solid rgba(0,0,0,0.07)", textDecoration: "none", transition: "border-color 0.2s", textAlign: "center" }} className="hover:border-[#f58220]/50 card-hover">
                <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#fff5eb", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon size={22} style={{ color: "#f58220" }} /></div>
                <div>
                  <p style={{ color: "#aaa", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>{label}</p>
                  <p style={{ color: "#1a1a1a", fontSize: "15px", fontWeight: 700 }}>{value}</p>
                </div>
              </a>
            ))}
          </div>
          <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2 lg:grid-cols-3">
            {branches.map(b => (
              <div key={b.city} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "36px 24px", background: "#fff", border: "1px solid rgba(0,0,0,0.07)", textAlign: "center", transition: "border-color 0.2s" }} className="hover:border-[#f58220]/50 card-hover">
                <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#fff5eb", display: "flex", alignItems: "center", justifyContent: "center" }}><MapPin size={22} style={{ color: "#f58220" }} /></div>
                <p style={{ fontWeight: 800, color: "#1a1a1a", fontSize: "15px" }}>{b.label}</p>
                <p style={{ color: "#777", fontSize: "13px", lineHeight: 1.7 }}>{b.address}</p>
                <p style={{ color: "#f58220", fontWeight: 700, fontSize: "13px" }}>Contact No : {b.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="site-wrap">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span style={{ color: "#f58220", fontSize: "11px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase" }}>CONTACT</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "#1a1a1a", marginTop: "10px" }}>Reach Out for Expert Advice</h2>
          </div>
          <div style={{ display: "grid", gap: "60px", alignItems: "center" }} className="lg:grid-cols-2">

            {/* Illustration side */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
              <div style={{ width: "100%", maxWidth: "420px", background: "linear-gradient(135deg,#fff5eb 0%,#fefefe 100%)", border: "2px solid rgba(245,130,32,0.2)", padding: "40px 32px", textAlign: "center", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg,#f58220,#ff933c,#f58220)" }} />
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#f58220", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="36" height="36"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44a2 2 0 0 1 1.95-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#1a1a1a", marginBottom: "8px" }}>Contact Us Now!</h3>
                <p style={{ color: "#777", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>Have questions about branding, design, or marketing? We&apos;re here to help.</p>
                <div style={{ display: "inline-block", padding: "10px 28px", background: "#f58220", color: "#fff", fontWeight: 800, borderRadius: "999px", fontSize: "14px" }}>Questions?</div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", marginTop: "24px" }}>
                  {["Graphic Design", "Digital Marketing", "Website Dev", "SEO", "Branding"].map(tag => (
                    <span key={tag} style={{ padding: "5px 12px", background: "#fff", border: "1px solid rgba(245,130,32,0.3)", borderRadius: "999px", fontSize: "12px", color: "#555", fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "#aaa", fontSize: "11px", letterSpacing: "3px", fontWeight: 700, textTransform: "uppercase", marginBottom: "12px" }}>Follow Us</p>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                  {[SocialFacebook, SocialLinkedin, SocialInstagram, SocialYoutube].map((Icon, i) => (
                    <a key={i} href="#" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1.5px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#888", transition: "all 0.2s" }} className="hover:border-[#f58220] hover:text-[#f58220]"><Icon /></a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form side */}
            <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", padding: "44px 40px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg,#f58220,#ff933c,#f58220)" }} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "6px" }}>Feel Free to Ask !</h3>
              <p style={{ color: "#aaa", fontSize: "13px", marginBottom: "28px" }}>We typically respond within 24 hours.</p>
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div><label style={{ display: "block", color: "#555", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>Name :</label><input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required placeholder="Name" style={iBase} onFocus={e => (e.target.style.borderColor = "#f58220")} onBlur={e => (e.target.style.borderColor = "#e5e7eb")} /></div>
                <div><label style={{
                  color: "#555", fontSize: "13px", fontWeight: 600, marginBottom: "6px"
                }}>Email :</label><input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required placeholder="Email" style={iBase} onFocus={e => (e.target.style.borderColor = "#f58220")} onBlur={e => (e.target.style.borderColor = "#e5e7eb")} /></div>
                <div><label style={{ display: "block", color: "#555", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>Contact No :</label><input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Contact Number" style={iBase} onFocus={e => (e.target.style.borderColor = "#f58220")} onBlur={e => (e.target.style.borderColor = "#e5e7eb")} /></div>
                <div><label style={{ display: "block", color: "#555", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>Message :</label><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required rows={4} placeholder="Message" style={{ ...iBase, resize: "none" }} onFocus={e => (e.target.style.borderColor = "#f58220")} onBlur={e => (e.target.style.borderColor = "#e5e7eb")} /></div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", border: "1.5px solid #e5e7eb", background: "#f9fafb" }}>
                  <input type="checkbox" id="robot" style={{ width: "18px", height: "18px", accentColor: "#f58220", cursor: "pointer" }} />
                  <label htmlFor="robot" style={{ color: "#555", fontSize: "13px", cursor: "pointer", flex: 1 }}>I&apos;m not a robot</label>
                </div>
                <button type="submit" style={{ width: "100%", padding: "15px", background: sent ? "#22c55e" : "#f58220", color: "#fff", border: "none", fontWeight: 800, fontSize: "15px", letterSpacing: "1px", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", transition: "background 0.2s" }}>
                  {sent ? "Message Sent!" : <><span>SEND</span><Send size={16} /></>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={{ background: "#f8f9fb" }}>
        <div className="site-wrap">
          <div style={{ overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)" }}>
            <iframe title="Brandingo Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.674988085254!2d70.7725!3d22.2775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd10be3c4e5b34!2sJK%20Branding%20(India)%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="420" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
      <div style={{ height: "72px", background: "#f8f9fb" }} />
      <Footer />
    </>
  );
}
