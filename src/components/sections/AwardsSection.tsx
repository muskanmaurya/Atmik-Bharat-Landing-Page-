"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { awards } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AwardsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleAwards = showAll ? awards : awards.slice(0, 6);

  return (
    <section className="section-padding bg-[#f8f7f4]">
      <div className="container-lg">
        <SectionHeading
          title="Proven Expertise. Globally Accredited."
          align="center"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleAwards.map((award, index) => (
            <motion.div
              key={award}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex items-start gap-4 rounded-2xl bg-white p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow/20 transition-transform duration-300 group-hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-yellow">
                  <path d="M10 1l2.5 5h5.5l-4.5 3.5 1.5 5.5L10 13l-5 2 1.5-5.5L2 6h5.5z" />
                </svg>
              </div>
              <p className="text-sm font-medium leading-relaxed text-black/80">{award}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-full border border-black/10 bg-white px-8 py-3 text-sm font-semibold text-black transition-all hover:border-primary hover:text-primary"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
