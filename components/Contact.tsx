"use client";

import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Send } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "", company_hp: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const iBase: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: isDark ? "#0e1118" : "#f9fafb",
    border: isDark ? "1.5px solid rgba(255,255,255,0.12)" : "1.5px solid #e5e7eb",
    borderRadius: "0",
    color: isDark ? "#ffffff" : "#1a1a1a",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

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
      setForm({ name: "", email: "", phone: "", service: "", message: "", company_hp: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" ref={ref} style={{ padding: "100px 0", background: isDark ? "#08090d" : "#ffffff", position: "relative", overflow: "hidden", transition: "background-color 0.3s ease" }}>
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "360px", height: "360px", borderRadius: "50%", background: isDark ? "radial-gradient(circle, rgba(245,130,32,0.08) 0%, transparent 70%)" : "radial-gradient(circle, rgba(11,60,93,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="site-wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
            <span style={{ color: "#f58220", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Get In Touch</span>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: isDark ? "#ffffff" : "#1a1a1a", marginBottom: "14px" }}>
            Let&apos;s Build Something <span style={{ color: "#f58220" }}>Great Together</span>
          </h2>
          <p style={{ color: isDark ? "#94a3b8" : "#777", maxWidth: "460px", margin: "0 auto", lineHeight: 1.75 }}>Ready to elevate your brand? Contact us today for a free consultation.</p>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* Form */}
          <div style={{ width: "100%", maxWidth: "680px", padding: "40px 36px", border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.07)", background: isDark ? "#12151c" : "#fff", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)", transition: "opacity 1.3s ease 0.1s, transform 1.5s cubic-bezier(0.16,1,0.3,1) 0.1s" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: isDark ? "#ffffff" : "#1a1a1a", marginBottom: "24px", textAlign: "center" }}>Send Us a Message</h3>
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gap: "16px" }} className="sm:grid-cols-2">
                <div>
                  <label style={{ display: "block", color: isDark ? "#cbd5e1" : "#555", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>Full Name</label>
                  <input suppressHydrationWarning type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required placeholder="Your name" style={iBase} onFocus={e => (e.target.style.borderColor = "#f58220")} onBlur={e => (e.target.style.borderColor = isDark ? "rgba(255,255,255,0.12)" : "#e5e7eb")} />
                </div>
                <div>
                  <label style={{ display: "block", color: isDark ? "#cbd5e1" : "#555", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>Email</label>
                  <input suppressHydrationWarning type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required placeholder="your@email.com" style={iBase} onFocus={e => (e.target.style.borderColor = "#f58220")} onBlur={e => (e.target.style.borderColor = isDark ? "rgba(255,255,255,0.12)" : "#e5e7eb")} />
                </div>
              </div>
              <div style={{ display: "grid", gap: "16px" }} className="sm:grid-cols-2">
                <div>
                  <label style={{ display: "block", color: isDark ? "#cbd5e1" : "#555", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>Phone *</label>
                  <input suppressHydrationWarning type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value.replace(/[^0-9]/g, "").slice(0, 10) })} required maxLength={10} placeholder="Contact Number" style={iBase} onFocus={e => (e.target.style.borderColor = "#f58220")} onBlur={e => (e.target.style.borderColor = isDark ? "rgba(255,255,255,0.12)" : "#e5e7eb")} />
                </div>
                <div>
                  <label style={{ display: "block", color: isDark ? "#cbd5e1" : "#555", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>Service</label>
                  <select suppressHydrationWarning value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={{ ...iBase, color: form.service ? (isDark ? "#ffffff" : "#1a1a1a") : (isDark ? "#64748b" : "#aaa") }}>
                    <option value="" style={{ background: isDark ? "#12151c" : "#fff", color: isDark ? "#94a3b8" : "#888" }}>Select service</option>
                    <option value="logo" style={{ background: isDark ? "#12151c" : "#fff", color: isDark ? "#fff" : "#1a1a1a" }}>Logo Design</option>
                    <option value="stationery" style={{ background: isDark ? "#12151c" : "#fff", color: isDark ? "#fff" : "#1a1a1a" }}>Stationery Design</option>
                    <option value="banner" style={{ background: isDark ? "#12151c" : "#fff", color: isDark ? "#fff" : "#1a1a1a" }}>Banner &amp; Standee Design</option>
                    <option value="packaging" style={{ background: isDark ? "#12151c" : "#fff", color: isDark ? "#fff" : "#1a1a1a" }}>Packaging &amp; Label Design</option>
                    <option value="menu" style={{ background: isDark ? "#12151c" : "#fff", color: isDark ? "#fff" : "#1a1a1a" }}>Menu Design</option>
                    <option value="invitation" style={{ background: isDark ? "#12151c" : "#fff", color: isDark ? "#fff" : "#1a1a1a" }}>Invitation Card Design</option>
                    <option value="tag" style={{ background: isDark ? "#12151c" : "#fff", color: isDark ? "#fff" : "#1a1a1a" }}>Tag Design</option>
                    <option value="brochure" style={{ background: isDark ? "#12151c" : "#fff", color: isDark ? "#fff" : "#1a1a1a" }}>Brochure Design</option>
                    <option value="other" style={{ background: isDark ? "#12151c" : "#fff", color: isDark ? "#fff" : "#1a1a1a" }}>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={{ display: "block", color: isDark ? "#cbd5e1" : "#555", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>Message</label>
                <textarea suppressHydrationWarning value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required rows={4} placeholder="Tell us about your project..." style={{ ...iBase, resize: "none" }} onFocus={e => (e.target.style.borderColor = "#f58220")} onBlur={e => (e.target.style.borderColor = isDark ? "rgba(255,255,255,0.12)" : "#e5e7eb")} />
              </div>
              {/* Honeypot — hidden from users, catches bots */}
              <input suppressHydrationWarning type="text" name="company_hp" tabIndex={-1} autoComplete="off" value={form.company_hp} onChange={e => setForm({ ...form, company_hp: e.target.value })} style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} aria-hidden="true" />
              <button suppressHydrationWarning type="submit" disabled={sending} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "15px", borderRadius: "0", border: "none", background: sent ? "#22c55e" : "#f58220", color: "#fff", fontWeight: 700, fontSize: "15px", cursor: sending ? "wait" : "pointer", opacity: sending ? 0.7 : 1, transition: "background 0.2s" }}>
                {sent ? "Message Sent!" : sending ? "Sending..." : <><span>Send Message</span><Send size={16} /></>}
              </button>
              {error && <p style={{ color: "#dc2626", fontSize: "13px", textAlign: "center" }}>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
