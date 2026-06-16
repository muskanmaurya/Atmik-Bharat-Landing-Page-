"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { TechItem } from "@/data/content";

export function HexagonCard({ tech }: { tech: TechItem }) {
  const [isHovered, setIsHovered] = useState(false);

  // Framer Motion values for 3D tilt calculation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Add spring physics for smooth, premium feeling movement
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Map mouse position to rotation degrees (tilt intensity)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate mouse position relative to the center of the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative flex items-center justify-center cursor-pointer select-none"
      style={{
        width: "160px",
        height: "185px",
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      // Float animation when not hovered
      animate={!isHovered ? { y: [0, -10, 0] } : { y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* 
        The Hexagon Shape 
        Using Tailwind's arbitrary values for a perfect clip-path
      */}
      <div 
        className="absolute inset-5 bg-[#111111] transition-all duration-300 z-10 flex flex-col items-center justify-center gap-3 border border-white/5"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          // The dynamic glowing shadow based on the tech's brand color
          boxShadow: isHovered ? `0 0 10px ${tech.color}40 inset` : "none",
        }}
      >
        <motion.img
          src={tech.logo}
          alt={tech.name}
          className="w-20 h-14 object-contain filter grayscale transition-all duration-300"
          style={{
            transform: "translateZ(30px)", // Pops the logo off the surface in 3D
            filter: isHovered ? `drop-shadow(0 0 10px ${tech.color}) grayscale(0%)` : "grayscale(100%) opacity(0.5)",
          }}
        />
        <motion.span 
          className="text-xs font-bold text-white tracking-wider uppercase text-center w-full px-2"
          style={{ transform: "translateZ(20px)" }} // Pops the text slightly less than the logo
        >
          {tech.name}
        </motion.span>
      </div>

      {/* The Background Glow Element (Behind the Hexagon) */}
      <motion.div
        className="absolute inset-0 blur-2xl z-0 transition-opacity duration-300 rounded-full"
        style={{
          backgroundColor: tech.color,
          opacity: isHovered ? 0.4 : 0,
          transform: "translateZ(-20px) scale(0.9)",
        }}
      />
    </motion.div>
  );
}