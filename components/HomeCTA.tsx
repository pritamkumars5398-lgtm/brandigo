"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function HomeCTA() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section 
      ref={ref} 
      style={{ 
        background: isDark 
          ? "linear-gradient(135deg, #0d121c 0%, #06080d 100%)" 
          : "linear-gradient(135deg, #0b3c5d 0%, #062438 100%)", 
        borderTop: isDark ? "1px solid rgba(255,255,255,0.06)" : "none",
        borderBottom: isDark ? "1px solid rgba(255,255,255,0.06)" : "none",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s ease",
      }}
    >
      <div 
        className="site-wrap flex flex-col md:flex-row items-center gap-10 md:gap-0 px-6 py-12 md:py-16"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          position: "relative",
          zIndex: 2
        }}
      >
        {/* Left Text Content */}
        <div style={{ flex: "1" }} className="text-center md:text-left">
          <h2 
            style={{ 
              color: "#fff", 
              fontSize: "clamp(2rem, 4vw, 3.2rem)", 
              fontWeight: 800, 
              lineHeight: 1.1,
              marginBottom: "16px",
              letterSpacing: "-0.02em"
            }}
          >
            Ready to Build Your <span style={{ background: "linear-gradient(90deg, #f58220 20%, #ffaa5e 80%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Brand</span>?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.6, maxWidth: "550px", marginBottom: "32px", fontWeight: 400 }} className="mx-auto md:mx-0">
            Partner with us to create a powerful, memorable brand identity that resonates with your target audience and drives growth.
          </p>
          
          <Link 
            href="/contact" 
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#f58220",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "15px",
              transition: "all 0.3s ease",
            }}
            className="hover:-translate-y-1 group"
          >
            Get Started Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right Image/Mascot */}
        <div style={{ flex: "0.8", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="rocket-container" style={{ position: "relative", width: "100%", maxWidth: "260px", aspectRatio: "1/1", display: "flex", justifyContent: "center", alignItems: "center" }}>
            
            {/* Engine Fire Glow */}
            <div className="rocket-glow" style={{
              position: "absolute",
              bottom: "12%",
              left: "12%",
              width: "110px",
              height: "110px",
              background: "radial-gradient(circle, rgba(245,130,32,0.35) 0%, rgba(245,130,32,0) 70%)",
              borderRadius: "50%",
              filter: "blur(10px)",
              pointerEvents: "none",
              zIndex: 1,
            }} />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Rocket/3D/rocket_3d.png" 
              alt="Brand Launch 3D" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.4))",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                zIndex: 2,
              }}
              className="rocket-img"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="bg-circle-1" style={{ position: "absolute", top: "-30%", right: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(245,130,32,0.08) 0%, rgba(255,255,255,0) 70%)", borderRadius: "50%", pointerEvents: "none", zIndex: 1 }} />
      <div className="bg-circle-2" style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 70%)", borderRadius: "50%", pointerEvents: "none", zIndex: 1 }} />
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatRocket {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(3deg);
          }
        }
        @keyframes flicker {
          0%, 100% { opacity: 0.5; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes floatBgCircle {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 15px); }
        }
        .rocket-container {
          animation: floatRocket 3.8s ease-in-out infinite;
        }
        .rocket-glow {
          animation: flicker 0.15s ease-in-out infinite alternate;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .rocket-img {
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .rocket-container:hover .rocket-img {
          transform: translateY(-28px) scale(1.16) rotate(8deg);
          filter: drop-shadow(0 30px 50px rgba(245, 130, 32, 0.6)) !important;
        }
        .rocket-container:hover .rocket-glow {
          transform: translate(-12px, 15px) scale(1.4);
          background: radial-gradient(circle, rgba(245,130,32,0.7) 0%, rgba(245,130,32,0) 70%) !important;
        }
        .bg-circle-1 {
          animation: floatBgCircle 10s ease-in-out infinite;
        }
        .bg-circle-2 {
          animation: floatBgCircle 15s ease-in-out infinite alternate;
        }
      `}} />
    </section>
  );
}
