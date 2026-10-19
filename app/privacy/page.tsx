import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Brandingo",
  description:
    "Read our privacy policy to understand how Brandingo collects, uses, and safeguards your personal data.",
};

const A = "#f58220";

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-page" style={{ background: "#ffffff" }}>
      <Navbar />
      <section
        style={{
          position: "relative",
          height: "360px",
          display: "flex",
          alignItems: "flex-end",
          paddingBottom: "56px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(11,60,93,0.85) 0%, rgba(245,130,32,0.85) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="site-wrap" style={{ position: "relative", zIndex: 10 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 14px",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              borderRadius: "999px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            <ShieldCheck size={12} style={{ color: A }} /> Legal & Compliance
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: "12px",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", marginBottom: "20px" }}>
            Last Updated: June 4, 2026
          </p>

          <nav style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Link
              href="/"
              style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500 }}
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={13} style={{ color: "rgba(255,255,255,0.45)" }} />
            <span style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }}>Privacy Policy</span>
          </nav>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div className="site-wrap" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "16px" }}>
              1. Introduction
            </h2>
            <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
              Welcome to Brandingo. We are committed to protecting your personal data and respecting your privacy. This Privacy Policy describes how we collect, store, share, and protect your information when you visit our website, use our services, or contact us.
            </p>
            <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.8" }}>
              By accessing our website or using our services, you consent to the data practices described in this policy. If you do not agree with the terms outlined here, please discontinue use of our site and services.
            </p>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "16px" }}>
              2. Information We Collect
            </h2>
            <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
              We collect information to provide better services and improve your experience. The types of personal data we collect include:
            </p>
            <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", color: "#444", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px" }}>
              <li><strong>Contact Information:</strong> Your name, email address, phone number, and physical office address when you fill out contact or quote forms.</li>
              <li><strong>Usage Details:</strong> Information about your visits to our site, including IP addresses, browser types, page interactions, referring URLs, and location data via Google Analytics.</li>
              <li><strong>Inquiry Content:</strong> Project details, marketing goals, design preferences, and attachments uploaded through inquiry channels.</li>
            </ul>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "16px" }}>
              3. How We Use Your Information
            </h2>
            <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
              Brandingo uses your data for the following purposes:
            </p>
            <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", color: "#444", fontSize: "15px", lineHeight: "1.7" }}>
              <li>To answer your requests, schedule consultation calls, and prepare custom project quotes.</li>
              <li>To deliver branding, web design, printing, and digital marketing services as agreed upon in B2B service contracts.</li>
              <li>To maintain and improve website performance, usability, and speed.</li>
              <li>To send you administrative updates, newsletters, and promotional marketing materials (which you can opt-out of at any time).</li>
            </ul>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "16px" }}>
              4. Data Security & Storage
            </h2>
            <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
              We employ strict technical and organizational security measures to protect your personal information from unauthorized access, modification, disclosure, or destruction. This includes standard SSL encryption, secure hosting environments, and access controls for our internal teams.
            </p>
            <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.8" }}>
              However, please note that no method of transmission over the internet or storage method is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.
            </p>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "16px" }}>
              5. Third-Party Disclosures
            </h2>
            <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
              We do not sell, trade, or rent your personal identification information to others. We may share information with trusted third-party service providers who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
            </p>
            <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.8" }}>
              We may also release information when its release is appropriate to comply with federal or local laws, enforce our site policies, or protect ours or others' rights, property, or safety.
            </p>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "16px" }}>
              6. Your Legal Rights & Choices
            </h2>
            <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
              Depending on your location, you may have specific data protection rights, including:
            </p>
            <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", color: "#444", fontSize: "15px", lineHeight: "1.7" }}>
              <li>The right to access, update, or delete the personal information we hold about you.</li>
              <li>The right to object to our processing of your personal data.</li>
              <li>The right to request data portability.</li>
              <li>The right to withdraw consent at any time where we relied on your consent to process your data.</li>
            </ul>
          </div>

          <div className="privacy-box" style={{ padding: "32px", border: "1.5px solid #e5e7eb", background: "#f8f9fb" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "12px" }}>
              7. Contact Our Compliance Officer
            </h3>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.7", marginBottom: "18px" }}>
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with our brand, please reach out to us at:
            </p>
            <div style={{ fontSize: "14px", color: "#333", display: "flex", flexDirection: "column", gap: "4px" }}>
              <strong>Brandingo</strong>
              <span>607, Iconic Shyamal, Shyamal Cross Roads, 132 Feet Ring Rd, Shyamal,</span>
              <span>Ahmedabad, Gujarat 380015, India.</span>
              <span>Email: <a href="mailto:sales@brandingo.in" style={{ color: A, fontWeight: 600, textDecoration: "none" }}>sales@brandingo.in</a></span>
              <span>Phone: <a href="tel:+919875084098" style={{ color: A, fontWeight: 600, textDecoration: "none" }}>+91 99799 92804</a></span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
