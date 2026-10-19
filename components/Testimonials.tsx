"use client";

import { useInView } from "react-intersection-observer";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { useTheme } from "./ThemeContext";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  { name: "Firdous Ansari", role: "Client", image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg", text: "Was a bit hesitant to pay & get a logo designed online but then this team helped me till i was completely satisfied..very enthusiastic,hardworking and excellent with their work!! Thanks once again for delivering it within the time given..Great Work!!", rating: 5 },
  { name: "Victor Everystus", role: "Client", image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg", text: "Prayerful Wishes! I feel so fortunate to have a job at ‘Logo Makers’ that I thoroughly enjoy, and I wanted to let you know that you’re a big part of my Name Logo. Your enthusiasm and support make it a pleasure to come to work forth coming days. I just thought you should know that you’re doing a great job. Thank you!", rating: 5 },
  { name: "Iti Fatehpuria", role: "Client", image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg", text: "Found this page in random instagram search without much expectations. But it was Superb experience, Amazing service with very reasonable price. Mr Sameer Patel, the designer was very patient, understood my requirements and designed the logo perfectly. I Strongly recommend", rating: 5 },
  { name: "Emine Narxoz", role: "Client", image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg", text: "It was a great pleasure to work with this team who are very friendly, efficient and fast in delivering your requirement. Thank you for making the logo and a wonderful video for our cricket team. Hopefully we will have more collaborations in the future!", rating: 5 },
  { name: "Cheenti Enterprise", role: "Client", image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg", text: "Response was too fast. While the logo has changed frequently, they prepared wonderful logo within the day. Thank you for your quick response.", rating: 5 },
];

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        padding: "100px 0",
        backgroundColor: isDark ? "#05070c" : "#0b3c5d",
        backgroundImage: isDark
          ? "linear-gradient(rgba(5,7,12,0.96), rgba(8,11,18,0.97)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80')"
          : "linear-gradient(rgba(11,60,93,0.92), rgba(0,69,99,0.95)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
        overflow: "hidden",
        transition: "background-color 0.3s ease, background-image 0.3s ease",
      }}
    >
      
      <div className="site-wrap" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ textAlign: "center", marginBottom: "50px", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
            <span style={{ color: "#f58220", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Client Reviews</span>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "#fff", marginBottom: "14px" }}>
            What Our <span style={{ color: "#f58220" }}>Clients Say</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.75 }}>
            Hear from businesses we&apos;ve helped transform through powerful branding.
          </p>
        </div>

        <div className={inView ? "testimonials-container visible" : "testimonials-container"} style={{ position: "relative", paddingBottom: "60px" }}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            loop={true}
            onSwiper={setSwiperInstance}
            className="pb-4"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} style={{ height: "auto" }}>
                <div className="testimonial-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                    <div style={{ display: "flex", gap: "3px" }}>
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={16} style={{ color: "#f58220" }} fill="#f58220" />
                      ))}
                    </div>
                    <Quote size={36} className="quote-icon" style={{ color: "rgba(245,130,32,0.15)", transform: "scaleX(-1)", marginTop: "-6px" }} />
                  </div>
                  <p style={{ color: isDark ? "#cbd5e1" : "#4b5563", fontSize: "14.5px", lineHeight: 1.8, marginBottom: "24px", flexGrow: 1, fontWeight: 400 }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", borderTop: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #f3f4f6", paddingTop: "20px" }}>
                    <div className="avatar-initials" style={{ 
                      width: "48px", 
                      height: "48px", 
                      borderRadius: "50%", 
                      background: isDark ? "linear-gradient(135deg, rgba(245,130,32,0.2) 0%, rgba(245,130,32,0.1) 100%)" : "linear-gradient(135deg, #fff5eb 0%, #ffe4cc 100%)", 
                      color: "#f58220", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      fontWeight: 800, 
                      fontSize: "15px", 
                      boxShadow: "0 4px 12px rgba(245,130,32,0.15)",
                      flexShrink: 0 
                    }}>
                      {t.name.split(" ").map(w => w.charAt(0)).slice(0, 2).join("").toUpperCase()}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "15px", color: isDark ? "#ffffff" : "#1f2937", marginBottom: "2px" }}>{t.name}</p>
                      <p style={{ fontSize: "12px", color: "#f58220", fontWeight: 700, letterSpacing: "0.5px", textTransform: "uppercase" }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", position: "absolute", bottom: "0", left: "0", right: "0", zIndex: 10 }}>
            <button 
              onClick={() => swiperInstance?.slidePrev()} 
              style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", transition: "all 0.3s" }} 
              className="hover:bg-[#f58220] hover:border-[#f58220]"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="custom-pagination" style={{ display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }} />
            
            <button 
              onClick={() => swiperInstance?.slideNext()} 
              style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", transition: "all 0.3s" }} 
              className="hover:bg-[#f58220] hover:border-[#f58220]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .testimonials-container {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.2s;
        }
        .testimonials-container.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .testimonial-card {
          height: 100%;
          padding: 38px 30px;
          border-radius: 16px;
          background: ${isDark ? "#12151c" : "#ffffff"};
          border: ${isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.04)"};
          box-shadow: ${isDark ? "0 10px 30px rgba(0, 0, 0, 0.5)" : "0 10px 30px rgba(0, 0, 0, 0.04)"};
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #f58220, #ff9e42);
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(245, 130, 32, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02);
          border-color: rgba(245, 130, 32, 0.2);
        }
        .testimonial-card:hover::before {
          opacity: 1;
        }
        .testimonial-card .quote-icon {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .testimonial-card:hover .quote-icon {
          transform: scale(1.15) rotate(12deg) scaleX(-1);
          color: rgba(245, 130, 32, 0.3) !important;
        }
        .testimonial-card .avatar-initials {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .testimonial-card:hover .avatar-initials {
          transform: scale(1.06);
          box-shadow: 0 6px 16px rgba(245, 130, 32, 0.2);
        }
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.3);
          opacity: 1;
          border-radius: 999px;
          transition: all 0.3s ease;
          margin: 0 !important;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 24px;
          background: #f58220;
        }
      `}} />
    </section>
  );
}
