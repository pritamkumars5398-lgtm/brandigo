"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export type AnimationVariant = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleIn";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function MotionWrapper({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Premium ease-out curve
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
