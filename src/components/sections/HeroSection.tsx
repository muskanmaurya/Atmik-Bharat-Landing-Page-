"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ASSETS } from "@/data/content";
import { Button } from "@/components/ui/Button";


const awards = [
  "Awarded - 'Highest Impact' at AI Impact Summit 2026",
  "Milestone - Launch of Vertex Suite by Atmik Bharat Industries",
  "Showcase - AI Solutions at India AI Impact Expo 2026",
  "Exhibition -	Featured at Startup Mahakumbh 2025",
];

const achievementLogos = [
  "/assets/achievementslogo/AI.png",
  "/assets/achievementslogo/Vertex-Suite-lOGO.png",
  "/assets/achievementslogo/expo.jpg",
  "/assets/achievementslogo/Startup-Mahakumbh-2025-Logo.jpg",
];

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => { });
    }
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-[120px]">
      <div className="absolute inset-0 top-[67px] z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover object-center"
          poster={ASSETS.heroPoster}
          playsInline
          muted
          autoPlay
          loop
          preload="auto"
        >
          <source src="/assets/herobg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      <div className="container-lg relative z-10 w-full pb-24">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0.25, 0, 1] }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/70"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Digital Engineering services
            </motion.span>

            <h1 className="font-display text-4xl font-medium leading-[1.1] text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Transforming Businesses Through{" "}
              <span className="text-primary">AI, Data & Digital Innovation</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              We build everything from apps and websites to AI chatbots and automation end-to-end IT solutions that empower SMEs, MSMEs, startups, and governments to grow smarter and faster
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8"
            >
              <Button href="#contact">Schedule Consultation</Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex animate-marquee-left gap-4" style={{ animationDuration: "20s" }}>
            {[...awards, ...awards].map((award, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm"
              >
                <div className="relative flex-shrink-0 h-16 w-16">
                  <Image
                    src={achievementLogos[i % achievementLogos.length]}
                    alt={award}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="whitespace-nowrap text-lg font-medium text-white/80">{award}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
      </motion.div>
    </section>
  );
}
