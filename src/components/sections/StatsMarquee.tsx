"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { stats } from "@/data/content";

export function StatsMarquee() {
  return (
    <section className="section-padding overflow-hidden bg-blue-950 py-16">
      <div className="overflow-hidden">
        <h2 className="text-4xl font-display text-center md:text-5xl font-bold text-white tracking-tight mb-6">
          Metrics of Excellence
        </h2>
        <p className="pb-8 text-center text-blue-200 max-w-2xl mx-auto text-lg leading-relaxed">
          Decades of combined experience translated into measurable ROI, robust architectures, and uncompromising client satisfaction.        </p>
        <div
          className="flex w-max gap-4 animate-marquee-left hover:[animation-play-state:paused]"
          style={{ animationDuration: "60s" }}
        >
          {[...stats, ...stats].map((stat, index) => (
            <motion.div
              key={`${stat.number}-${index}`}
              className="flex w-[340px] shrink-0 flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 md:w-[400px]"
              whileHover={{ scale: 1.02, borderColor: "rgba(26, 105, 253, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="flex items-center gap-6">
                  <span className="font-condensed text-5xl font-medium text-white md:text-6xl">
                    {stat.number}
                  </span>
                  <h3 className="text-sm font-semibold uppercase leading-tight text-white">
                    {stat.title.split("\n").map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {stat.description}
                </p>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl">
                <Image
                  src={stat.image}
                  alt={stat.title}
                  width={400}
                  height={200}
                  className="h-32 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
