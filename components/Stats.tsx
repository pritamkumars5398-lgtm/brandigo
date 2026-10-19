"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Briefcase, Users, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: 10, suffix: "+", label: "Years of Experience" },
  { icon: Briefcase, value: 5000, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 4200, suffix: "+", label: "Happy Clients" }
];

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="stats"
      ref={ref}
      style={{ padding: "56px 0", background: "#ffffff", position: "relative", overflow: "hidden" }}
    >
      {/* Top gold stripe */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #f58220, transparent)" }} />

      <div className="site-wrap">
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                borderRadius: "0",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)", opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                position: "relative",
                overflow: "hidden",
              }}
              className="card-hover px-2 py-3 sm:p-5"
            >
              {/* Bottom gold accent */}
              <div
                style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "40px", height: "3px", background: "#f58220", borderRadius: "2px 2px 0 0" }}
                className="hidden sm:block"
              />

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0",
                  background: "#fff5eb",
                }}
                className="w-8 h-8 mb-2 sm:w-12 sm:h-12 sm:mb-4"
              >
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#f58220" }} />
              </div>

              <div style={{ fontWeight: 800, color: "#1a1a1a", lineHeight: 1 }} className="text-[1.1rem] sm:text-[1.9rem] lg:text-[2.5rem]">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} delay={i * 0.2} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p style={{ color: "#888", fontWeight: 500 }} className="text-[9px] sm:text-[12px] mt-1 sm:mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
