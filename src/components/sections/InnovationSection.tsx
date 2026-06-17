"use client";

import { useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { innovationsData } from "@/data/content";
import { cn } from "@/lib/cn";

export function InnovationsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle Swipe Gestures
  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && activeIndex < innovationsData.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (info.offset.x > swipeThreshold && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <section id="innovations" className="relative py-14  lg:py-22 bg-blue-950 overflow-hidden flex flex-col items-center select-none">
      
      {/* Background Glows for Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 z-10 text-center mb-16">
        <h2 className="text-4xl font-display md:text-5xl font-bold text-white tracking-tight mb-6">
          Innovations Engineered by Atmik Bharat
        </h2>
        <p className="text-blue-200 max-w-2xl mx-auto text-lg leading-relaxed">
          From flagship SaaS platforms to WhatsApp-native automation systems, we build practical digital products for next-generation real-world workflows.
        </p>
      </div>

      {/* 3D Coverflow Interactive Area */}
      <div className="relative  w-full h-[500px] flex justify-center items-center perspective-1000">
        {innovationsData.map((item, index) => {
          // Calculate distance from the active center card
          const offset = index - activeIndex;
          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 2; // Only render cards close to center for performance

          if (!isVisible) return null;

          return (
            <motion.div
              key={item.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={{
                // Move cards left/right based on offset
                x: offset * (typeof window !== "undefined" && window.innerWidth < 768 ? 160 : 300),
                // Scale down side cards to create 3D depth
                scale: 1 - Math.abs(offset) * 0.15,
                // Layering: center card is on top
                zIndex: 10 - Math.abs(offset),
                // Fade out cards as they get further away
                opacity: 1 - Math.abs(offset) * 0.3,
                // Slight 3D rotation based on position
                rotateY: offset * -15,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className={cn(
                "absolute w-[320px]  md:w-[500px] h-[580px] rounded-3xl p-8 flex flex-col justify-between cursor-grab active:cursor-grabbing backdrop-blur-xl transition-colors duration-300",
                isCenter 
                  ? "bg-blue-900 border border-blue-400/50 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.3)]" 
                  : "bg-blue-950 border border-blue-900/50 shadow-xl"
              )}
            >
              <div>
                <span className={cn(
                  "inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-6",
                  item.tier === "flagship" ? "bg-blue-500/20 text-blue-300 border border-blue-400/30" : "bg-blue-950 text-blue-400 border border-blue-800"
                )}>
                  {item.label}
                </span>

                <h3 className={cn(
                  "font-display font-bold text-white tracking-tight mb-4",
                  isCenter ? "text-3xl" : "text-2xl"
                )}>
                  {item.title}
                </h3>

                <p className="text-blue-100/80 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
                <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg mt-4" />
              </div>

              {/* Card Footer Button */}
              <div className="mt-8">
                <button 
                  className={cn(
                    "w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2",
                    isCenter ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-blue-900/50 text-blue-300"
                  )}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.tier === "experimental" ? "Review Concept" : "Explore Platform"}
                  </a>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
                  
            </motion.div>
          );
        })}
      </div>

      {/* Carousel Navigation Dots */}
      <div className="flex gap-3 mt-15 z-10">
        {innovationsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              activeIndex === index ? "w-8 bg-blue-400" : "w-2 bg-blue-800 hover:bg-blue-600"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}