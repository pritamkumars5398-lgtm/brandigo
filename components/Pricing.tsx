"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";

const plans = ["Basic Bliss Package", "Premium Prestige Package", "Ultimate Elegance Package"];

const rows: { label: string; values: string[]; price?: boolean; highlight?: boolean }[] = [
  { label: "INR", values: ["₹1,999", "₹4,999", "₹9,999"], price: true },
  { label: "Logo Design Samples/Concept", values: ["5", "5", "5"], highlight: true },
  { label: "Design Revisions/Changes Option in the Sample", values: ["Unlimited", "Unlimited", "Unlimited"] },
  { label: "Designers Working on Your Project", values: ["1", "2", "2"], highlight: true },
  { label: "Mode of Communication", values: ["Whatsapp / Messenger", "Whatsapp / Messenger", "Whatsapp / Messenger"] },
  { label: "Logo Design Duration", values: ["3-4 Working Days", "5-7 Working Days", "5-7 Working Days"] },
  { label: "Logo Design Sample Format", values: ["JPG", "JPG", "JPG"] },
  { label: "Logo Source File", values: ["CDR, PDF, PNG, JPG, AI", "CDR, PDF, PNG, JPG, AI", "CDR, PDF, PNG, JPG, AI"], highlight: true },
  { label: "Free Logo Animation Video", values: ["2", "3", "5"] },
  { label: "Stationery Design (Business Card, Letterhead & Envelope) (2 Sample Of Each)", values: ["No", "Yes", "Yes"] },
  { label: "Festival Post", values: ["No", "20 QTY", "50 QTY"] },
  { label: "Customize Business Promotional Post", values: ["No", "10 QTY", "15 QTY"] },
  { label: "Company Profile (Brochure) Design", values: ["No", "No", "04 Pages"] },
  { label: "Payment Options - 100% Advance", values: ["Yes", "Yes", "Yes"] },
];

export default function Pricing() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const cell: React.CSSProperties = {
    padding: "13px 18px",
    borderBottom: "1px solid #eee",
    fontSize: "13px",
    color: "#555",
    textAlign: "center",
    verticalAlign: "middle",
  };
  const labelCell: React.CSSProperties = {
    ...cell,
    textAlign: "left",
    fontWeight: 700,
    color: "#333",
    fontSize: "13px",
  };

  return (
    <section
      id="pricing"
      ref={ref}
      style={{
        padding: "100px 0",
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
        scrollMarginTop: "90px",
      }}
    >
      <div className="site-wrap">
        <div
          style={{
            textAlign: "center",
            marginBottom: "56px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
            <span style={{ color: "#f58220", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
              Pricing
            </span>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "14px" }}>
            We <span style={{ color: "#f58220" }}>Help You</span>
          </h2>
          <p style={{ color: "#777", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
            Transparent logo design packages - pick the one that fits your brand&apos;s journey.
          </p>
        </div>

        <div
          className="pricing-table-wrap"
          style={{
            overflowX: "auto",
            border: "1px solid #eee",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "780px" }}>
            <thead>
              <tr>
                <th style={{ padding: "26px 18px", background: "#0b3c5d", color: "#fff", fontSize: "16px", fontWeight: 800, textAlign: "center", width: "31%" }}>
                  Features
                </th>
                {plans.map((p, i) => (
                  <th
                    key={p}
                    style={{
                      padding: "26px 18px",
                      background: "#0b3c5d",
                      color: "#fff",
                      fontSize: "17px",
                      fontWeight: 800,
                      textAlign: "center",
                      lineHeight: 1.3,
                      borderLeft: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {p}
                    {i === 1 && (
                      <span style={{ display: "block", marginTop: "6px", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#f58220" }}>
                        ★ MOST POPULAR
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={row.label}
                  style={{
                    background: ri % 2 === 0 ? "#fafafa" : "#fff",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(18px)",
                    transition: `opacity 0.5s ease ${0.22 + ri * 0.05}s, transform 0.6s ease ${0.22 + ri * 0.05}s`,
                  }}
                >
                  <td style={labelCell}>{row.label}</td>
                  {row.values.map((v, ci) => (
                    <td
                      key={ci}
                      style={{
                        ...cell,
                        ...(row.price ? { fontSize: "1.4rem", fontWeight: 800, color: "#1a1a1a" } : {}),
                        ...(v === "Yes" ? { color: "#16a34a", fontWeight: 700 } : {}),
                        ...(v === "No" ? { color: "#bbb", fontWeight: 600 } : {}),
                        ...(row.highlight ? { color: "#f58220", fontWeight: 800 } : {}),
                        background: ci === 1 ? "rgba(11,60,93,0.03)" : "transparent",
                      }}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
              <tr
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(18px)",
                  transition: `opacity 0.5s ease ${0.22 + rows.length * 0.05}s, transform 0.6s ease ${0.22 + rows.length * 0.05}s`,
                }}
              >
                <td style={{ ...cell, borderBottom: "none" }} />
                {plans.map((p, i) => (
                  <td
                    key={p}
                    style={{
                      padding: "20px 18px",
                      borderBottom: "none",
                      textAlign: "center",
                      background: i === 1 ? "rgba(11,60,93,0.03)" : "transparent",
                    }}
                  >
                    <Link
                      href={`/order?package=${i === 0 ? "basic" : i === 1 ? "premium" : "ultimate"}`}
                      style={{
                        display: "block",
                        padding: "14px 10px",
                        background: "#f58220",
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: "13px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        textAlign: "center",
                        transition: "background 0.2s",
                      }}
                      className="hover:bg-[#ff933c]"
                    >
                      Order Now
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className="pricing-cards"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          {plans.map((plan, ci) => {
            const popular = ci === 1;
            return (
              <div
                key={plan}
                style={{
                  border: popular ? "2px solid #0b3c5d" : "1px solid #eee",
                  overflow: "hidden",
                  background: "#fff",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.55s ease ${0.18 + ci * 0.12}s, transform 0.65s ease ${0.18 + ci * 0.12}s`,
                }}
              >
                <div style={{ padding: "22px 18px", background: "#0b3c5d", color: "#fff", textAlign: "center" }}>
                  <div style={{ fontSize: "17px", fontWeight: 800, lineHeight: 1.3 }}>{plan}</div>
                  {popular && (
                    <span style={{ display: "block", marginTop: "6px", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#f58220" }}>
                      ★ MOST POPULAR
                    </span>
                  )}
                </div>
                <div>
                  {rows.map((row, ri) => {
                    const v = row.values[ci];
                    return (
                      <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "12px 16px", borderBottom: "1px solid #eee", background: ri % 2 === 0 ? "#fafafa" : "#fff" }}>
                        <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#333", textAlign: "left" }}>{row.label}</span>
                        <span
                          style={{
                            fontSize: row.price ? "1.4rem" : "13px",
                            fontWeight: row.price ? 800 : (row.highlight ? 800 : 600),
                            color: row.price ? "#1a1a1a" : v === "Yes" ? "#16a34a" : v === "No" ? "#bbb" : (row.highlight ? "#f58220" : "#555"),
                            textAlign: "right",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                          }}
                        >
                          {v}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div style={{ padding: "18px 16px" }}>
                  <Link
                    href={`/order?package=${ci === 0 ? "basic" : ci === 1 ? "premium" : "ultimate"}`}
                    style={{
                      display: "block",
                      padding: "14px 10px",
                      background: "#f58220",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "13px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      textAlign: "center",
                      transition: "background 0.2s",
                    }}
                    className="hover:bg-[#ff933c]"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
