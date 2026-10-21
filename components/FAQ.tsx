"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Plus } from "lucide-react";
import { useTheme } from "./ThemeContext";

const faqs = [
  {
    q: "When does my project start?",
    a: "Work on your project starts soon after we get your logo request along with the advance payment.",
  },
  {
    q: "How many concepts do you offer?",
    a: "We offer you with 3 or 6 initial design concepts depending on the package that you choose.",
  },
  {
    q: "What file formats are supplied by you?",
    a: "For your convenience, we provide the designs in the following file formats: PNG JPG PDF AI or CDR.",
  },
  {
    q: "Do you provide a vector format for logo?",
    a: "Yes, we do provide EPS / .AI/.CDR files which are all vector files.",
  },
  {
    q: "How do you deliver logo design files to your client?",
    a: "We communicate via mail. We will send you the files via mail or send you a link to download the files if the file size is too big. We also use Drop box or wetransfer.com in such cases to send heavy files.",
  },
  {
    q: "Do you provide money back guarantee?",
    a: "No. Our services are not available with a money guarantee. However, we always assure that the needs and expectations of our clients are always fulfilled. We tirelessly work on your designing till the time you are satisfied with the results.",
  },
  {
    q: "What are the other design services that you offer?",
    a: "We have vast experience in designing different types of stationery which include brochures, business cards, flyers, banners, posters, signage, billboard and more. Our designers first understand the goals and objectives of your business then produce designs that perfectly meet your business requirements.",
  },
  {
    q: "Do you provide printing services?",
    a: "No. We provide the print ready files which can be printed by any local printers.",
  },
  {
    q: "I have some more questions which I cannot find here. How do I get those answers?",
    a: "You can ask your question anytime by filling in the “Your requirement” field in the form in ‘’Contact Us‘’ page. We will get back to you with our answers.",
  },
  {
    q: "Can I speak directly with the designers?",
    a: "Absolutely, we completely understand that you want to convey opinions, & vision behind the logo. We are top logo design agency which follows a transparent process, which makes it easy for you to directly connect with our logo designers & get what you want.",
  },
  {
    q: "How many logo revisions do you make?",
    a: 'Brand purpose is related to what the brand is selling or providing. While Both mission and vision statements are combined into one comprehensive "mission statement" to define the organization\'s reason for existing. (Note: It looks like whoever built their website accidentally pasted the wrong answer for this specific question!)',
  },
  {
    q: "Do you provide support once the logo design process is complete.",
    a: "Absolutely, we pride ourselves as a leading logo design agency. We value your opinions & provide you the service even after the logo design process is complete.",
  },
];

export default function FAQ() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [open, setOpen] = useState<number | null>(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="faq" ref={ref} style={{ padding: "54px 0", background: isDark ? "#0c0e14" : "#f9fafb", position: "relative", overflow: "hidden", scrollMarginTop: "90px", transition: "background-color 0.3s ease" }}>
      <div className="site-wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "36px", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
            <span style={{ color: "#f58220", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>FAQ</span>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: isDark ? "#ffffff" : "#1a1a1a", marginBottom: "14px" }}>
            Frequently Asked <span style={{ color: "#f58220" }}>Questions</span>
          </h2>
          <p style={{ color: isDark ? "#94a3b8" : "#777", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
            Everything you need to know before starting your brand&apos;s journey with us.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ maxWidth: "780px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "14px" }}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                style={{
                  border: isOpen
                    ? "1px solid rgba(245,130,32,0.6)"
                    : (isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)"),
                  background: isDark ? "#12151c" : "#fff",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s, border-color 0.25s ease`,
                }}
              >
                <button
                  suppressHydrationWarning
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <span style={{ fontSize: "15px", fontWeight: 700, color: isOpen ? "#f58220" : (isDark ? "#ffffff" : "#1a1a1a"), lineHeight: 1.4 }}>{item.q}</span>
                  <Plus
                    size={20}
                    style={{ color: isOpen ? "#f58220" : (isDark ? "#64748b" : "#999"), flexShrink: 0, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s ease, color 0.2s ease" }}
                  />
                </button>
                <div style={{ maxHeight: isOpen ? "260px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <p style={{ padding: "0 24px 22px", color: isDark ? "#94a3b8" : "#666", fontSize: "14px", lineHeight: 1.75 }}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
