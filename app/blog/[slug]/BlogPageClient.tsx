"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, Tag, Share2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { BlogPost } from "@/lib/blog-data";
import { posts } from "@/lib/blog-data";

const A = "#f58220"; // accent orange

export default function BlogPageClient({ post }: { post: BlogPost }) {
  // Get 3 recent posts excluding the current one
  const recentPosts = posts.filter(p => p.slug !== post.slug).slice(0, 3);

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank");
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, "_blank");
  };

  const shareOnLinkedin = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, "_blank");
  };

  return (
    <>
      <Navbar />

      {/* ── HERO HEADER ──────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "460px", display: "flex", alignItems: "flex-end", paddingBottom: "56px", overflow: "hidden" }}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
          unoptimized
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(11,60,93,0.88) 0%, rgba(245,130,32,0.82) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="site-wrap" style={{ position: "relative", zIndex: 10 }}>
          <span style={{ display: "inline-block", padding: "5px 14px", background: A, color: "#fff", fontSize: "11px", fontWeight: 700, borderRadius: "999px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
            {post.category}
          </span>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", fontWeight: 900, color: "#fff", marginBottom: "20px", lineHeight: 1.2, maxWidth: "900px" }}>
            {post.title}
          </h1>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px", marginBottom: "24px", color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Calendar size={14} style={{ color: A }} /> {post.date}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Clock size={14} style={{ color: A }} /> {post.readTime}
            </span>
          </div>

          <nav style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500 }} className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={13} style={{ color: "rgba(255,255,255,0.45)" }} />
            <Link href="/blog" style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500 }} className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight size={13} style={{ color: "rgba(255,255,255,0.45)" }} />
            <span style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }} className="truncate max-w-[200px] sm:max-w-none">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* ── ARTICLE CONTAINER ───────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="site-wrap">
          <div style={{ display: "grid", gap: "48px" }} className="lg:grid-cols-[2.4fr_1fr]">

            {/* Left Column: Article Body */}
            <article>
              <div style={{ borderBottom: "1px solid rgba(0,0,0,0.07)", paddingBottom: "40px", marginBottom: "40px" }}>
                {post.content.map((paragraph, index) => (
                  <p
                    key={index}
                    style={{
                      color: "#333",
                      fontSize: "16px",
                      lineHeight: "1.85",
                      marginBottom: "24px",
                      textAlign: "justify",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}

                {/* Highlight Quote Block */}
                <div style={{ margin: "40px 0", padding: "28px 32px", borderLeft: `4px solid ${A}`, background: "#f8f9fb", position: "relative" }}>
                  <p style={{ fontSize: "17px", fontWeight: 600, color: "#1a1a1a", fontStyle: "italic", lineHeight: 1.6, marginBottom: "8px" }}>
                    "A brand is no longer what we tell the consumer it is — it is what consumers tell each other it is."
                  </p>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#777", textTransform: "uppercase", letterSpacing: "1px" }}>
                    — Brandingo Editorial Insights
                  </span>
                </div>
              </div>

              {/* Share block */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", background: "#f8f9fb", padding: "20px 24px", border: "1px solid rgba(0,0,0,0.07)" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 700, fontSize: "14px", color: "#1a1a1a" }}>
                  <Share2 size={16} style={{ color: A }} /> Share This Article
                </span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={shareOnFacebook} style={{ padding: "8px 16px", fontSize: "12px", fontWeight: 600, border: "1.5px solid #e5e7eb", background: "#fff", cursor: "pointer", transition: "all 0.2s" }} className="hover:border-[#f58220]/60 hover:text-[#f58220]">
                    Facebook
                  </button>
                  <button onClick={shareOnTwitter} style={{ padding: "8px 16px", fontSize: "12px", fontWeight: 600, border: "1.5px solid #e5e7eb", background: "#fff", cursor: "pointer", transition: "all 0.2s" }} className="hover:border-[#f58220]/60 hover:text-[#f58220]">
                    Twitter
                  </button>
                  <button onClick={shareOnLinkedin} style={{ padding: "8px 16px", fontSize: "12px", fontWeight: 600, border: "1.5px solid #e5e7eb", background: "#fff", cursor: "pointer", transition: "all 0.2s" }} className="hover:border-[#f58220]/60 hover:text-[#f58220]">
                    LinkedIn
                  </button>
                </div>
              </div>
            </article>

            {/* Right Column: Sidebar */}
            <aside style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

              {/* Author Widget */}
              <div style={{ padding: "32px", border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}>
                <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#1a1a1a", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Author
                </h4>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fff5eb", border: `1px solid ${A}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>
                    ✍️
                  </div>
                  <div>
                    <h5 style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a1a" }}>Brandingo Editorial</h5>
                    <p style={{ fontSize: "12px", color: "#888" }}>Senior Brand Strategist</p>
                  </div>
                </div>
                <p style={{ color: "#777", fontSize: "13px", lineHeight: 1.6 }}>
                  Our team brings decades of experience in creative strategy, digital communication, and visual system designs.
                </p>
              </div>

              {/* Recent Posts Widget */}
              <div style={{ padding: "32px", border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}>
                <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#1a1a1a", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Recent Articles
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {recentPosts.map(p => (
                    <Link
                      key={p.id}
                      href={`/blog/${p.slug}`}
                      style={{ display: "flex", gap: "12px", textDecoration: "none" }}
                      className="group"
                    >
                      <div style={{ position: "relative", width: "70px", height: "70px", flexShrink: 0, overflow: "hidden" }}>
                        <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} unoptimized />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <span style={{ fontSize: "11px", fontWeight: 700, color: A, textTransform: "uppercase", marginBottom: "4px" }}>
                          {p.category}
                        </span>
                        <h5 style={{ fontSize: "13.5px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.3, transition: "color 0.2s" }} className="hover:text-[#f58220] line-clamp-2">
                          {p.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Categories Widget */}
              <div style={{ padding: "32px", border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}>
                <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#1a1a1a", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Categories
                </h4>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px", padding: 0, margin: 0, listStyle: "none" }}>
                  {["Branding", "Logo Design", "Packaging", "Print Design", "Menu Design"].map(c => (
                    <li key={c}>
                      <Link
                        href="/blog"
                        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13.5px", color: "#555", textDecoration: "none", transition: "color 0.2s" }}
                        className="hover:text-[#f58220]"
                      >
                        <span>{c}</span>
                        <span style={{ fontSize: "11px", color: "#bbb", background: "#f8f9fb", padding: "2px 8px" }}>View</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
