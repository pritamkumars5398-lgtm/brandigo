"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const branches = [
  { label: "Head Office", city: "Ahmedabad", address: "607, Iconic Shyamal, Shyamal Cross Roads, 132 Feet Ring Rd, Shyamal, Ahmedabad, Gujarat 380015", phone: "+91 99799 92804", mapUrl: "https://maps.app.goo.gl/QHnofgohkDA459Hj9" },
  { label: "Banglore Branch", city: "Bengaluru", address: "Shanti Apartments, Behind Indian Bike Showroom, Bhaskaran Rd,  Bengaluru, Karnataka 560042", mapUrl: "https://maps.google.com/?q=Shanti+Apartments,+Behind+Indian+Bike+Showroom,+Bhaskaran+Rd,++Bengaluru,+Karnataka+560042" },
];

const SocialFacebook = () => <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const SocialLinkedin = () => <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10V9h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
const SocialInstagram = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>;
const SocialYoutube = () => <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" /></svg>;

const socialLinks = [
  { Icon: SocialFacebook, href: "https://www.facebook.com/brandingo.logomaker" },
  { Icon: SocialLinkedin, href: "https://www.linkedin.com/company/brandingoindia/" },
  { Icon: SocialInstagram, href: "https://www.instagram.com/logoworld.brandingo" },
  { Icon: SocialYoutube, href: "https://www.youtube.com/@BRANDINGO-Designer" }
];

const iBase: React.CSSProperties = { width: "100%", padding: "13px 16px", background: "#f9fafb", border: "1.5px solid #e5e7eb", borderRadius: "0", fontSize: "14px", color: "#1a1a1a", outline: "none", transition: "border-color 0.2s" };

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", company: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const cleanedPhone = form.phone.replace(/[^0-9]/g, "");
    if (!cleanedPhone) {
      setError("Please enter your phone number.");
      return;
    }
    if (cleanedPhone.length !== 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "", company: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Navbar />

      <PageHero bgImage="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=2000&q=80" />

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
                  {["Logo Design", "Stationery", "Packaging", "Menu Design", "Branding"].map(tag => (
                    <span key={tag} style={{ padding: "5px 12px", background: "#fff", border: "1px solid rgba(245,130,32,0.3)", borderRadius: "999px", fontSize: "12px", color: "#555", fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "#aaa", fontSize: "11px", letterSpacing: "3px", fontWeight: 700, textTransform: "uppercase", marginBottom: "12px" }}>Follow Us</p>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                  {socialLinks.map(({ Icon, href }, i) => (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1.5px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#888", transition: "all 0.2s" }} className="hover:border-[#f58220] hover:text-[#f58220]"><Icon /></a>
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
                <div><label style={{ display: "block", color: "#555", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>Contact No * :</label><input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value.replace(/[^0-9]/g, "").slice(0, 10) })} required maxLength={10} placeholder="Contact Number" style={iBase} onFocus={e => (e.target.style.borderColor = "#f58220")} onBlur={e => (e.target.style.borderColor = "#e5e7eb")} /></div>
                <div><label style={{ display: "block", color: "#555", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>Message :</label><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required rows={4} placeholder="Message" style={{ ...iBase, resize: "none" }} onFocus={e => (e.target.style.borderColor = "#f58220")} onBlur={e => (e.target.style.borderColor = "#e5e7eb")} /></div>
                
                {/* Honeypot — hidden from users, catches bots */}
                <input type="text" name="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} aria-hidden="true" />
                <button type="submit" disabled={sending} style={{ width: "100%", padding: "15px", background: sent ? "#22c55e" : "#f58220", color: "#fff", border: "none", fontWeight: 800, fontSize: "15px", letterSpacing: "1px", textTransform: "uppercase", cursor: sending ? "wait" : "pointer", opacity: sending ? 0.7 : 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", transition: "background 0.2s" }}>
                  {sent ? "Message Sent!" : sending ? "SENDING..." : <><span>SEND</span><Send size={16} /></>}
                </button>
                {error && <p style={{ color: "#dc2626", fontSize: "13px", textAlign: "center" }}>{error}</p>}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section style={{ background: "#f8f9fb", padding: "72px 0" }}>
        <div className="site-wrap">
          <div style={{ display: "grid", gap: "20px", marginBottom: "20px" }} className="sm:grid-cols-2">
            {[{ icon: Phone, label: "Phone", value: "+91 99799 92804", href: "tel:+919979992804" }, { icon: Mail, label: "Email", value: "sales@brandingo.in", href: "mailto:Sales@brandingo.in" }].map(({ icon: Icon, label, value, href }) => (
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
              <a key={b.city} href={b.mapUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "36px 24px", background: "#fff", border: "1px solid rgba(0,0,0,0.07)", textAlign: "center", transition: "border-color 0.2s", textDecoration: "none" }} className="hover:border-[#f58220]/50 card-hover">
                <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#fff5eb", display: "flex", alignItems: "center", justifyContent: "center" }}><MapPin size={22} style={{ color: "#f58220" }} /></div>
                <p style={{ fontWeight: 800, color: "#1a1a1a", fontSize: "15px" }}>{b.label}</p>
                <p style={{ color: "#777", fontSize: "13px", lineHeight: 1.7 }}>{b.address}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={{ background: "#f8f9fb" }}>
        <div className="site-wrap">
          <div style={{ overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)" }}>
            <iframe title="Brandingo Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0465223067807!2d72.5284149!3d23.0149495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d19d6627024bd35%3A0x1ae76a3e511005b9!2sBRANDINGO!5e0!3m2!1sen!2sin!4v1719310000000!5m2!1sen!2sin" width="100%" height="420" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
      <div style={{ height: "72px", background: "#f8f9fb" }} />
      <Footer />
    </>
  );
}
