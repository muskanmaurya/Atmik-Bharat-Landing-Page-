"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { industries } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function IndustriesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="industries" className="section-padding bg-white">
      <div className="container-lg">
        <SectionHeading title="Solving Complex Challenges Across Every Major Sector" />

        <div className="flex flex-wrap gap-2">
          {industries.map((industry, index) => (
            <button
              key={industry.name}
              onClick={() => setActive(index)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                active === index
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-[#f8f7f4] text-black/60 hover:bg-black/5 hover:text-black"
              )}
            >
              {industry.name}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 rounded-3xl bg-[#f8f7f4] p-8 md:p-12"
        >
          <h3 className="font-display text-2xl font-medium text-black md:text-3xl">
            {industries[active].name}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/70">
            {industries[active].description}
          </p>
          <div className="mt-6">
            <Button href="#industries" variant="line">
              Know More
            </Button>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <Button href="#industries">Check All Industries</Button>
        </div>
      </div>
    </section>
  );
}
