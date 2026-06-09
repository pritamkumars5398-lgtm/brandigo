"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Calendar, Clock, Tag, ArrowRight, Search } from "lucide-react";

import { posts } from "@/lib/blog-data";

const categories = ["All", "Branding", "Logo Design", "Packaging", "Print Design", "Menu Design", "Stationery", "Banner & Standee", "Invitation Cards"];

const accent = "#f58220";

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = posts[0];
  const rest = filtered.filter(p => !p.featured || activeCategory !== "All" || search !== "");
  const showFeatured = activeCategory === "All" && search === "";

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "420px", display: "flex", alignItems: "flex-end", paddingBottom: "56px", overflow: "hidden" }}>
        <Image
          src="https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg"
          alt="Blog"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
          unoptimized
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(11,60,93,0.85) 0%, rgba(245,130,32,0.85) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="site-wrap" style={{ position: "relative", zIndex: 10 }}>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 900, color: "#fff", marginBottom: "12px", lineHeight: 1.1 }}>
            <span style={{ color: accent }}>B</span>lo<span style={{ color: accent }}>g</span>
          </h1>
          <nav style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500 }} className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={13} style={{ color: "rgba(255,255,255,0.45)" }} />
            <span style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }}>Blog</span>
          </nav>
        </div>
      </section>

      {/* ── SEARCH + FILTERS ────────────────────────────────────────── */}
      <section style={{ background: "#f8f9fb", padding: "40px 0", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="site-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "space-between" }}>

            {/* Search */}
            <div style={{ position: "relative", flex: "1", minWidth: "220px", maxWidth: "360px" }}>
              <Search size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#aaa" }} />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ width: "100%", padding: "11px 16px 11px 40px", border: "1.5px solid #e5e7eb", background: "#fff", borderRadius: "0", fontSize: "14px", color: "#1a1a1a", outline: "none", transition: "border-color 0.2s" }}
                onFocus={e => (e.target.style.borderColor = accent)}
                onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>

            {/* Category filters */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "7px 16px",
                    fontSize: "12px",
                    fontWeight: 600,
                    border: activeCategory === cat ? "none" : "1.5px solid #e5e7eb",
                    background: activeCategory === cat ? accent : "#fff",
                    color: activeCategory === cat ? "#fff" : "#555",
                    borderRadius: "999px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED POST ───────────────────────────────────────────── */}
      {showFeatured && (
        <section style={{ background: "#fff", padding: "64px 0 0" }}>
          <div className="site-wrap">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <div style={{ width: "32px", height: "2px", background: accent }} />
              <span style={{ color: accent, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Featured Post</span>
            </div>

            <div style={{ display: "grid", gap: "0", alignItems: "stretch", border: "1px solid rgba(0,0,0,0.08)" }} className="lg:grid-cols-2">
              {/* Image */}
              <div style={{ position: "relative", minHeight: "360px", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image}
                  alt={featured.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", display: "block" }}
                  className="hover:scale-105"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.3), transparent)" }} />
                <span style={{ position: "absolute", top: "20px", left: "20px", padding: "5px 14px", background: accent, color: "#fff", fontSize: "11px", fontWeight: 700, borderRadius: "999px" }}>
                  {featured.category}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#aaa", fontSize: "12px" }}>
                    <Calendar size={13} /> {featured.date}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#aaa", fontSize: "12px" }}>
                    <Clock size={13} /> {featured.readTime}
                  </span>
                </div>

                <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.3, marginBottom: "16px" }}>
                  {featured.title}
                </h2>
                <p style={{ color: "#666", lineHeight: 1.75, marginBottom: "28px", fontSize: "15px" }}>
                  {featured.excerpt}
                </p>

                <Link
                  href={`/blog/${featured.slug}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 28px", background: accent, color: "#fff", fontWeight: 700, fontSize: "14px", borderRadius: "0", transition: "background 0.2s", alignSelf: "flex-start" }}
                  className="hover:opacity-90"
                >
                  Read Article <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── BLOG GRID ───────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: showFeatured ? "56px 0 80px" : "64px 0 80px" }}>
        <div className="site-wrap">
          {!showFeatured && (
            <p style={{ color: "#888", fontSize: "13px", marginBottom: "32px" }}>
              {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
              {activeCategory !== "All" ? ` in "${activeCategory}"` : ""}
              {search ? ` for "${search}"` : ""}
            </p>
          )}

          {showFeatured && (
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}>
              <div style={{ width: "32px", height: "2px", background: accent }} />
              <span style={{ color: accent, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Latest Articles</span>
            </div>
          )}

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ fontSize: "2rem" }}>🔍</p>
              <p style={{ color: "#888", marginTop: "12px", fontSize: "15px" }}>No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gap: "28px" }} className="sm:grid-cols-2 lg:grid-cols-3">
              {(showFeatured ? rest : filtered).map((post, i) => (
                <article
                  key={post.id}
                  style={{
                    border: "1px solid rgba(0,0,0,0.08)",
                    background: "#fff",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, border-color 0.3s ease",
                    opacity: 1,
                    animationDelay: `${i * 0.05}s`,
                  }}
                  className="card-hover group"
                >
                  {/* Thumbnail */}
                  <div style={{ position: "relative", height: "210px", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                      className="group-hover:scale-105"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)" }} />

                    {/* Category badge */}
                    <span style={{ position: "absolute", top: "14px", left: "14px", padding: "4px 12px", background: accent, color: "#fff", fontSize: "10px", fontWeight: 700, borderRadius: "999px", letterSpacing: "0.5px" }}>
                      {post.category}
                    </span>

                    {/* Read time bottom */}
                    <span style={{ position: "absolute", bottom: "12px", right: "14px", color: "rgba(255,255,255,0.9)", fontSize: "11px", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>

                  {/* Body */}
                  <div style={{ padding: "24px 24px 28px" }}>
                    {/* Date */}
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#bbb", fontSize: "12px", marginBottom: "10px" }}>
                      <Calendar size={12} />
                      {post.date}
                    </div>

                    {/* Title */}
                    <h3
                      style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.45, marginBottom: "10px", transition: "color 0.2s" }}
                      className="group-hover:text-[#f58220]"
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p style={{ color: "#888", fontSize: "13.5px", lineHeight: 1.7, marginBottom: "20px", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#bbb", fontSize: "12px" }}>
                        <Tag size={12} /> {post.category}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: accent, fontSize: "13px", fontWeight: 700, transition: "gap 0.2s" }}
                        className="hover:gap-2"
                      >
                        Read More <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {filtered.length > 0 && (
            <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "56px" }}>
              {[1, 2, 3].map(n => (
                <button
                  key={n}
                  style={{
                    width: "40px",
                    height: "40px",
                    border: n === 1 ? "none" : "1.5px solid #e5e7eb",
                    background: n === 1 ? accent : "#fff",
                    color: n === 1 ? "#fff" : "#555",
                    fontWeight: 600,
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    borderRadius: "0",
                  }}
                >
                  {n}
                </button>
              ))}
              <button style={{ padding: "0 16px", height: "40px", border: "1.5px solid #e5e7eb", background: "#fff", color: "#555", fontWeight: 600, fontSize: "13px", cursor: "pointer", transition: "all 0.2s", borderRadius: "0", display: "flex", alignItems: "center", gap: "5px" }}>
                Next <ArrowRight size={13} />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
