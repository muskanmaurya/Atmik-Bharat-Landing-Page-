"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function ConsultCTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/20 to-transparent" />
      </div>

      <div className="container-lg relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-yellow">
              Consult our expert for growth roadmap
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
              You&apos;ve seen how we helped Americana, Sonny&apos;s, and Adidas reclaim their market edge.
            </h2>
            <p className="mt-6 text-lg text-white/60">
              From 90% faster reporting to 4x operational improvements, our engineering goes beyond code to deliver measurable ROI.
            </p>
            <div className="mt-8">
              <Button href="#contact">Consult our Experts for Growth Roadmap</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-video overflow-hidden rounded-3xl border border-white/10"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 to-black">
              <button className="group flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-primary hover:scale-110">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="ml-1 transition-transform group-hover:scale-110"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              WATCH REEL
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
