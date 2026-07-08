"use client";

import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", company: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Show modal immediately on mount if not shown in current session
    const hasShown = sessionStorage.getItem("enquiry_popup_shown");
    if (!hasShown) {
      // Small timeout for better loading experience
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("enquiry_popup_shown", "true");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setIsOpen(false);
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
      setForm({ name: "", email: "", phone: "", message: "", company: "" });
      setTimeout(() => {
        setIsOpen(false);
        setSent(false);
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your message.");
    } finally {
      setSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 99999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      background: "rgba(11, 60, 93, 0.4)",
      backdropFilter: "blur(8px)",
      animation: "fadeIn 0.3s ease-out forwards",
    }}>
      <div style={{
        position: "relative",
        width: "100%",
        maxWidth: "460px",
        background: "#ffffff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        border: "1px solid rgba(0,0,0,0.05)",
        animation: "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}>
        {/* Top Accent line */}
        <div style={{ height: "5px", background: "linear-gradient(90deg, #f58220, #ff9e42)" }} />

        {/* Close Button */}
        <button 
          onClick={close} 
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "#f3f4f6",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#6b7280",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#e5e7eb";
            e.currentTarget.style.color = "#111827";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#f3f4f6";
            e.currentTarget.style.color = "#6b7280";
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ padding: "32px 32px 10px", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", marginBottom: "8px" }}>Enquire Now</h3>
          <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.5 }}>
            Please fill out the form below. Our team will get back to you shortly.
          </p>
        </div>

        {/* Modal Form */}
        <div style={{ padding: "10px 32px 32px" }}>
          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ display: "block", color: "#4b5563", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>Name *</label>
              <input 
                type="text" 
                value={form.name} 
                onChange={e => setForm({ ...form, name: e.target.value })} 
                required 
                placeholder="Your Name" 
                style={{ width: "100%", padding: "12px 16px", background: "#f9fafb", border: "1.5px solid #e5e7eb", borderRadius: "8px", fontSize: "14px", color: "#111827", outline: "none", transition: "border-color 0.2s" }} 
                onFocus={e => (e.target.style.borderColor = "#f58220")} 
                onBlur={e => (e.target.style.borderColor = "#e5e7eb")} 
              />
            </div>
            <div>
              <label style={{ display: "block", color: "#4b5563", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>Email *</label>
              <input 
                type="email" 
                value={form.email} 
                onChange={e => setForm({ ...form, email: e.target.value })} 
                required 
                placeholder="Your Email" 
                style={{ width: "100%", padding: "12px 16px", background: "#f9fafb", border: "1.5px solid #e5e7eb", borderRadius: "8px", fontSize: "14px", color: "#111827", outline: "none", transition: "border-color 0.2s" }} 
                onFocus={e => (e.target.style.borderColor = "#f58220")} 
                onBlur={e => (e.target.style.borderColor = "#e5e7eb")} 
              />
            </div>
            <div>
              <label style={{ display: "block", color: "#4b5563", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>Contact No *</label>
              <input 
                type="tel" 
                value={form.phone} 
                onChange={e => setForm({ ...form, phone: e.target.value.replace(/[^0-9]/g, "").slice(0, 10) })} 
                required
                maxLength={10}
                placeholder="Contact Number" 
                style={{ width: "100%", padding: "12px 16px", background: "#f9fafb", border: "1.5px solid #e5e7eb", borderRadius: "8px", fontSize: "14px", color: "#111827", outline: "none", transition: "border-color 0.2s" }} 
                onFocus={e => (e.target.style.borderColor = "#f58220")} 
                onBlur={e => (e.target.style.borderColor = "#e5e7eb")} 
              />
            </div>
            <div>
              <label style={{ display: "block", color: "#4b5563", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>Requirement *</label>
              <textarea 
                value={form.message} 
                onChange={e => setForm({ ...form, message: e.target.value })} 
                required 
                rows={3} 
                placeholder="Tell us about your brand/requirements..." 
                style={{ width: "100%", padding: "12px 16px", background: "#f9fafb", border: "1.5px solid #e5e7eb", borderRadius: "8px", fontSize: "14px", color: "#111827", outline: "none", resize: "none", transition: "border-color 0.2s" }} 
                onFocus={e => (e.target.style.borderColor = "#f58220")} 
                onBlur={e => (e.target.style.borderColor = "#e5e7eb")} 
              />
            </div>
            
            {/* Honeypot */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} aria-hidden="true" />

            <button 
              type="submit" 
              disabled={sending} 
              style={{ 
                width: "100%", 
                padding: "14px", 
                background: sent ? "#22c55e" : "#f58220", 
                color: "#fff", 
                border: "none", 
                borderRadius: "8px",
                fontWeight: 800, 
                fontSize: "14px", 
                letterSpacing: "0.5px", 
                textTransform: "uppercase", 
                cursor: sending ? "wait" : "pointer", 
                opacity: sending ? 0.7 : 1, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: "8px", 
                transition: "background 0.2s" 
              }}
            >
              {sent ? "Message Sent!" : sending ? "SENDING..." : <><span>Submit Enquiry</span><Send size={15} /></>}
            </button>
            {error && <p style={{ color: "#dc2626", fontSize: "13px", textAlign: "center", margin: 0 }}>{error}</p>}
          </form>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}} />
    </div>
  );
}
