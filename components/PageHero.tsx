"use client";

import React, { useState, useEffect } from "react";

const ANIMATED_WORDS = [
  "Graphic Designing",
  "Social Media Marketing",
  "Web Development",
  "Packaging Design",
  "Printing",
];

interface PageHeroProps {
  title?: string;
  bgImage?: string;
}

export default function PageHero({ title = "", bgImage }: PageHeroProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(65);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const i = loopNum % ANIMATED_WORDS.length;
      const fullText = ANIMATED_WORDS[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(25); // backSpeed
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(65); // typeSpeed
      }

      if (!isDeleting && text === fullText) {
        // Pause at the end of the word before deleting
        setTypingSpeed(1500);
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300); // pause before typing next word
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const defaultBgClass = "bg-[linear-gradient(rgba(11,60,93,0.88),rgba(0,69,99,0.85)),url('/heroforpagesmobile.png')] md:bg-[linear-gradient(rgba(11,60,93,0.88),rgba(0,69,99,0.85)),url('/heroforpagestablet.png')] lg:bg-[linear-gradient(rgba(11,60,93,0.88),rgba(0,69,99,0.85)),url('/heroforpages.png')]";

  return (
    <section
      className={`${!bgImage ? defaultBgClass : ""} bg-center bg-cover bg-no-repeat`}
      style={{
        backgroundImage: bgImage ? `linear-gradient(rgba(11,60,93,0.88),rgba(0,69,99,0.85)), url('${bgImage}')` : undefined,
        minHeight: "67vh",
        paddingTop: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Decorative subtle grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="site-wrap" style={{ position: "relative", zIndex: 10 }}>
        {title && (
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: "16px",
              lineHeight: 1.1,
              textShadow: "0 4px 12px rgba(0,0,0,0.3)"
            }}
          >
            {title}
          </h1>
        )}

        {/* Animated Words Section (Typewriter Effect) */}
        <div style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: "rgba(255,255,255,0.85)", fontWeight: 500, letterSpacing: "1px", minHeight: "36px" }}>
          <span>We specialize in </span>
          <span
            style={{
              color: "#f58220",
              fontWeight: 700,
            }}
          >
            {text}
          </span>
          {/* Optional cursor, keeping it blank/transparent like godigitalgosocial by not rendering one, or using a subtle bar */}
          <span className="animate-pulse" style={{ color: "#f58220", opacity: text.length === 0 && !isDeleting ? 1 : 0.7 }}>|</span>
        </div>
      </div>
    </section>
  );
}
