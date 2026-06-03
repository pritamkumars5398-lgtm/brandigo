"use client";

import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const categories = ["All","Real Estate","FMCG","Corporate","Hospitality"];
const projects = [
  { id:1, title:"Gokul Haridwar",    category:"Real Estate", description:"Your Gateway to Serene Living. A premium real estate project nestled amidst nature's embrace.", image:"https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg",        tags:["Branding","Print","Digital"] },
  { id:2, title:"The Park",          category:"Real Estate", description:"Premier real estate project offering luxury living in a serene environment with world-class amenities.", image:"https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg", tags:["Branding","Marketing","Website"] },
  { id:3, title:"Rajani Group",      category:"Corporate",   description:"Complete brand overhaul and digital presence for one of the region's leading business groups.", image:"https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg", tags:["Identity","Strategy","SEO"] },
  { id:4, title:"Ganga Pipes",       category:"Corporate",   description:"Comprehensive branding and marketing strategy for a leading pipe manufacturing company.", image:"https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg",        tags:["Branding","Print","Digital"] },
  { id:5, title:"Deepsy Food",       category:"FMCG",        description:"Brand identity, packaging design, and digital marketing for a fast-growing food brand.", image:"https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg", tags:["Packaging","Marketing","Social"] },
  { id:6, title:"Vaishnawi Maritime",category:"Corporate",   description:"Professional branding and marketing collateral for a maritime services company.", image:"https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg", tags:["Identity","Print","Website"] },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" ref={ref} style={{ padding:"100px 0", background:"#f9fafb" }}>
      <div className="site-wrap">
        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:"48px", opacity:inView?1:0, transform:inView?"translateY(0)":"translateY(24px)", transition:"opacity 0.6s ease, transform 0.6s ease" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"10px", marginBottom:"14px" }}>
            <div style={{ width:"32px", height:"2px", background:"#f58220" }} />
            <span style={{ color:"#f58220", fontSize:"12px", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase" }}>Our Work</span>
            <div style={{ width:"32px", height:"2px", background:"#f58220" }} />
          </div>
          <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, color:"#1a1a1a", marginBottom:"14px" }}>
            A Look at Our <span style={{ color:"#f58220" }}>Projects</span>
          </h2>
          <p style={{ color:"#777", maxWidth:"480px", margin:"0 auto", lineHeight:1.75 }}>
            Explore our portfolio of successful branding projects across industries.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"10px", marginBottom:"48px", opacity:inView?1:0, transition:"opacity 0.6s ease 0.2s" }}>
          {categories.map(cat=>(
            <button key={cat} onClick={()=>setActive(cat)} style={{ padding:"8px 20px", borderRadius:"0", fontSize:"13px", fontWeight:600, border: active===cat ? "none" : "1.5px solid #e5e7eb", background: active===cat ? "#f58220" : "#fff", color: active===cat ? "#fff" : "#555", cursor:"pointer", transition:"all 0.2s" }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display:"grid", gap:"20px" }} className="sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project,i)=>(
            <div key={project.id} style={{ borderRadius:"0", overflow:"hidden", background:"#fff", border:"1px solid rgba(0,0,0,0.07)", opacity:inView?1:0, transform:inView?"translateY(0)":"translateY(24px)", transition:`opacity 0.5s ease ${i*0.1}s, transform 0.5s ease ${i*0.1}s` }} className="card-hover group">
              <div style={{ position:"relative", height:"200px", overflow:"hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={project.title} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.5s ease" }} className="group-hover:scale-110" />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.5), transparent 60%)" }} />
                <div style={{ position:"absolute", top:"14px", left:"14px", padding:"4px 12px", background:"#f58220", color:"#fff", fontSize:"11px", fontWeight:700, borderRadius:"999px" }}>{project.category}</div>
                <div style={{ position:"absolute", top:"14px", right:"14px", width:"34px", height:"34px", borderRadius:"50%", background:"rgba(255,255,255,0.9)", display:"flex", alignItems:"center", justifyContent:"center", opacity:0, transition:"opacity 0.2s" }} className="group-hover:opacity-100">
                  <ExternalLink size={14} style={{ color:"#333" }} />
                </div>
              </div>
              <div style={{ padding:"24px" }}>
                <h3 style={{ fontSize:"16px", fontWeight:700, color:"#1a1a1a", marginBottom:"8px", transition:"color 0.2s" }} className="group-hover:text-[#f58220]">{project.title}</h3>
                <p style={{ color:"#888", fontSize:"13.5px", lineHeight:1.65, marginBottom:"14px" }}>{project.description}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
                  {project.tags.map(tag=>(
                    <span key={tag} style={{ padding:"4px 10px", fontSize:"11px", background:"#f3f4f6", color:"#666", borderRadius:"999px", fontWeight:500 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign:"center", marginTop:"48px" }}>
          <button style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"14px 32px", border:"2px solid #f58220", color: "#f58220", fontWeight:700, borderRadius:"0", fontSize:"14px", background:"transparent", cursor:"pointer", transition:"all 0.2s" }} className="hover:bg-[#f58220] hover:text-white">
            View All Projects <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
