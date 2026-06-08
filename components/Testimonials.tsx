"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import MotionWrapper from "./ui/MotionWrapper";

const testimonials = [
  { name: "Vijaysinh Kheradiya", role: "Vaishnawi Maritime Pvt. Ltd.", image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg", text: "Working with Brandingo has been a truly rewarding experience. Under the leadership of Bhavesh Sakariya, the team consistently delivers creative, impactful, and result-driven branding solutions.", rating: 5 },
  { name: "Mr. Mukesh Rajani", role: "Owner, Rajani Group", image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg", text: "Brandingo truly understands what branding means in today's competitive world. Their creative solutions and strategic approach have helped us achieve remarkable brand elevation.", rating: 5 },
  { name: "Mr. Jolin Tilva", role: "General Manager, Ganga Pipes", image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg", text: "The team at Brandingo brought a fresh perspective to our brand. Their attention to detail and ability to translate our vision into reality exceeded our expectations.", rating: 5 },
  { name: "Mr. Vishal", role: "Director, Deepsy Food", image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg", text: "Brandingo transformed our food brand with outstanding packaging design and digital marketing strategy. The results were immediate and impressive. Highly recommended!", rating: 5 },
  { name: "Mr. Chetan Kothiya", role: "Director", image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg", text: "Professional, creative, and results-oriented — that's Brandingo in three words. Their comprehensive branding solutions have made a significant impact on our business growth.", rating: 5 },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(i => (i + 1) % testimonials.length);
  const getVisible = () => {
    const p = (current - 1 + testimonials.length) % testimonials.length;
    const n = (current + 1) % testimonials.length;
    return [p, current, n];
  };

  return (
    <section id="testimonials" style={{ padding: "100px 0", background: "#f9fafb", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "10%", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(11,60,93,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="site-wrap">
        <MotionWrapper variant="fadeUp" delay={0.2}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
              <span style={{ color: "#f58220", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Client Reviews</span>
              <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "14px" }}>
              What Our <span style={{ color: "#f58220" }}>Clients Say</span>
            </h2>
            <p style={{ color: "#777", maxWidth: "480px", margin: "0 auto", lineHeight: 1.75 }}>
              Hear from businesses we&apos;ve helped transform through powerful branding.
            </p>
          </div>
        </MotionWrapper>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {getVisible().map((idx, pos) => {
            const t = testimonials[idx];
            const isCenter = pos === 1;
            return (
              <MotionWrapper key={`${idx}-${pos}`} variant="fadeUp" delay={0.4 + pos * 0.1}>
                <div style={{ padding: "32px 28px", borderRadius: "0", border: isCenter ? "2px solid rgba(245,130,32,0.4)" : "1px solid rgba(0,0,0,0.07)", background: isCenter ? "#fff" : "#fcfcfc", transform: isCenter ? "scale(1.03)" : "scale(1)", opacity: isCenter ? 1 : 0.65, transition: "all 0.3s ease" }}>
                  <Quote size={28} style={{ color: isCenter ? "#f58220" : "#ddd", marginBottom: "16px", transform: "scaleX(-1)" }} />
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.75, marginBottom: "20px" }}>&ldquo;{t.text}&rdquo;</p>
                  <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
                    {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={13} style={{ color: "#f58220" }} fill="#f58220" />)}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.image} alt={t.name} style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover", border: isCenter ? "2px solid #f58220" : "2px solid #eee" }} />
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a1a" }}>{t.name}</p>
                      <p style={{ fontSize: "12px", color: "#f58220", fontWeight: 500 }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>

        {/* Mobile: single card */}
        <MotionWrapper variant="fadeUp" delay={0.4}>
          <div className="md:hidden">
            <div style={{ padding: "32px 24px", borderRadius: "0", border: "2px solid rgba(245,130,32,0.3)", background: "#fff" }}>
              <Quote size={26} style={{ color: "#f58220", marginBottom: "14px", transform: "scaleX(-1)" }} />
              <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.75, marginBottom: "20px" }}>&ldquo;{testimonials[current].text}&rdquo;</p>
              <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
                {Array.from({ length: testimonials[current].rating }).map((_, i) => <Star key={i} size={13} style={{ color: "#f58220" }} fill="#f58220" />)}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={testimonials[current].image} alt={testimonials[current].name} style={{ width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover", border: "2px solid #f58220" }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a1a" }}>{testimonials[current].name}</p>
                  <p style={{ fontSize: "12px", color: "#f58220" }}>{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "36px" }}>
          <button onClick={prev} style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1.5px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#888", transition: "all 0.2s" }} className="hover:border-[#f58220] hover:text-[#f58220]">
            <ChevronLeft size={18} />
          </button>
          <div style={{ display: "flex", gap: "8px" }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{ borderRadius: "999px", border: "none", cursor: "pointer", transition: "all 0.3s", width: i === current ? "24px" : "8px", height: "8px", background: i === current ? "#f58220" : "#d1d5db" }} />
            ))}
          </div>
          <button onClick={next} style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1.5px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#888", transition: "all 0.2s" }} className="hover:border-[#f58220] hover:text-[#f58220]">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
