"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const highlights = [
  "17+ Years of Experience in Designing, Printing & Brand Development",
  "Founded by Sakariya Brothers — Saral & Bhavesh",
  "Objective: Make Every Customer Feel WoW",
  "Global Vision with Local Expertise",
  "Creative, Strategic & Result-Driven Solutions",
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="about" ref={ref} style={{ padding:"100px 0", background:"#f9fafb", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"-120px", right:"-120px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle, rgba(11,60,93,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div className="site-wrap">
        <div style={{ display:"grid", gap:"64px", alignItems:"center" }} className="lg:grid-cols-2">

          {/* Image */}
          <div style={{ opacity:inView?1:0, transform:inView?"translateX(0)":"translateX(-40px)", transition:"opacity 0.7s ease, transform 0.7s ease" }}>
            <div style={{ position:"relative" }}>
              <div style={{ position:"absolute", top:"-12px", left:"-12px", right:"12px", bottom:"12px", borderRadius:"0", border:"2px solid rgba(245,130,32,0.3)" }} />
              <div style={{ borderRadius:"0", overflow:"hidden", background:"#fff", border:"1px solid rgba(0,0,0,0.07)", position:"relative", width:"100%", height:"380px" }}>
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                  alt="The Brandingo team collaborating"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  style={{ objectFit:"cover" }}
                />
              </div>
              <div style={{ position:"absolute", bottom:"-20px", right:"-20px", background:"#f58220", borderRadius:"0", padding:"18px 22px", textAlign:"center" }}>
                <div style={{ fontSize:"2rem", fontWeight:900, color:"#fff", lineHeight:1 }}>17+</div>
                <div style={{ fontSize:"11px", fontWeight:700, color:"#fff", textTransform:"uppercase", letterSpacing:"0.05em", marginTop:"2px" }}>Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ opacity:inView?1:0, transform:inView?"translateX(0)":"translateX(40px)", transition:"opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"16px" }}>
              <div style={{ width:"32px", height:"2px", background:"#f58220" }} />
              <span style={{ color:"#f58220", fontSize:"12px", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase" }}>Who We Are</span>
            </div>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, color:"#1a1a1a", lineHeight:1.2, marginBottom:"20px" }}>
              Crafting Your Vision, <span style={{ color:"#f58220" }}>Building Your Success</span>
            </h2>
            <p style={{ color:"#555", fontSize:"1rem", lineHeight:1.8, marginBottom:"16px" }}>
              Brandingo India Pvt. Ltd. was established by the Sakariya Brothers — Saral and Bhavesh. With 17+ years of expertise in Designing, Printing, and Brand Development, we transform businesses into unforgettable brands.
            </p>
            <p style={{ color:"#777", lineHeight:1.8, marginBottom:"28px", fontSize:"0.95rem" }}>
              Our objective is simple yet powerful: make every customer feel WoW. We blend strategic thinking with creative execution to deliver branding solutions that truly resonate with your audience.
            </p>
            <ul style={{ display:"flex", flexDirection:"column", gap:"10px", marginBottom:"36px" }}>
              {highlights.map(item=>(
                <li key={item} style={{ display:"flex", alignItems:"flex-start", gap:"10px" }}>
                  <CheckCircle2 size={17} style={{ color:"#f58220", flexShrink:0, marginTop:"2px" }} />
                  <span style={{ color:"#555", fontSize:"14px", lineHeight:1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ display:"flex", gap:"16px", flexWrap:"wrap" }}>
              <Link href="/about" style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"14px 30px", background:"#f58220", color:"#fff", fontWeight:700, borderRadius:"999px", fontSize:"14px", transition:"background 0.2s" }} className="hover:bg-[#ff933c]">
                View More <ArrowRight size={16} />
              </Link>
              <Link href="/services" style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"14px 30px", background:"transparent", color:"#1a1a1a", border:"1px solid #ddd", fontWeight:700, borderRadius:"999px", fontSize:"14px", transition:"background 0.2s, border-color 0.2s" }} className="hover:border-[#f58220] hover:text-[#f58220]">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Industry Insights */}
        <div style={{ marginTop:"80px", padding:"48px 40px", borderRadius:"0", background:"#fff", border:"1px solid rgba(0,0,0,0.07)", textAlign:"center", position:"relative", overflow:"hidden", opacity:inView?1:0, transition:"opacity 0.6s ease 0.5s" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:"3px", background:"linear-gradient(90deg, transparent, #f58220 50%, transparent)" }} />
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"10px", marginBottom:"12px" }}>
            <div style={{ width:"24px", height:"2px", background:"#f58220" }} />
            <span style={{ color:"#f58220", fontSize:"11px", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase" }}>Industry Insights &amp; Trends</span>
            <div style={{ width:"24px", height:"2px", background:"#f58220" }} />
          </div>
          <h3 style={{ fontSize:"1.5rem", fontWeight:700, color:"#1a1a1a", marginBottom:"12px" }}>Staying Ahead in the Branding Landscape</h3>
          <p style={{ color:"#777", maxWidth:"600px", margin:"0 auto", lineHeight:1.75, fontSize:"0.95rem" }}>
            We continuously monitor industry trends and leverage the latest technologies to ensure your brand stays relevant, competitive, and ahead of the curve.
          </p>
        </div>
      </div>
    </section>
  );
}
