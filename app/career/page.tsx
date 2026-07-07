import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Careers | Brandingo",
  description:
    "Join Brandingo and build your career in design, marketing, and web development with a team of creative professionals.",
  alternates: {
    canonical: "https://jkbrandingindia.com/career",
  },
};

export default function CareerPage() {
  return (
    <main>
      <Navbar />
      <PageHero bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80" />
      <div
        style={{
          paddingTop: "80px",
          paddingBottom: "100px",
          minHeight: "40vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f9fafb",
        }}
      >
        <div className="site-wrap" style={{ textAlign: "center", maxWidth: "800px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
            <span
              style={{
                color: "#f58220",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Join Our Team
            </span>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#1a1a1a",
              marginBottom: "24px",
            }}
          >
            Shape the Future of <span style={{ color: "#f58220" }}>Branding</span>
          </h1>
          <p style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "40px" }}>
            We are always looking for passionate, creative, and driven individuals to join our
            growing team. If you live and breathe design, digital marketing, or web development,
            we would love to hear from you.
          </p>
          <div
            style={{
              padding: "40px",
              background: "#fff",
              borderRadius: "12px",
              border: "1px solid rgba(0,0,0,0.07)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px" }}>
              Currently No Open Positions
            </h3>
            <p style={{ color: "#777", marginBottom: "24px" }}>
              However, we are always open to meeting talented people. Feel free to send your resume
              and portfolio to us.
            </p>
            <Link
              href="mailto:career@brandingo.in"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                background: "#f58220",
                color: "#fff",
                fontWeight: 700,
                borderRadius: "999px",
                fontSize: "14px",
                transition: "background 0.2s",
              }}
              className="hover:bg-[#ff933c]"
            >
              Email Your Resume <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
