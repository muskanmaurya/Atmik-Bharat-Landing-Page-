"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { expertise } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function ExpertiseSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-black">
      <div className="container-lg">
        <SectionHeading
          title="Deep Technical Expertise, Supporting Modern Systems"
          dark
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-2 lg:col-span-1">
            {expertise.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActive(index)}
                className={cn(
                  "w-full rounded-2xl px-5 py-4 text-left text-sm font-medium transition-all duration-300",
                  active === index
                    ? "bg-primary text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                {item.title}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 lg:col-span-2"
          >
            <h3 className="font-display text-2xl font-medium text-white">
              {expertise[active].title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              {expertise[active].description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {["Cybersecurity", "IoT", "AR/VR", "Blockchain", "Data Science"].map((tech) => (
                <div
                  key={tech}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
