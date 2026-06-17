"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectors } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="sectors" className="section-padding bg-[#f8f7f4] py-20">
      <div className="container mx-auto px-4 lg:px-8">
{/* 
        <SectionHeading
          title="Market Segment Focus"
          subtitle="Chosen by Innovators to Build Smarter Futures across diverse industry landscapes."
        /> */}
        <h2 className="text-5xl md:text-6xl text-center font-bold text-slate-950 mb-6 tracking-tight">
            Market Segment Focus
          </h2>
          <p className="text-xl text-gray-900 text-center max-w-2xl mx-auto leading-relaxed">
            Chosen by Innovators to Build Smarter Futures across diverse industry landscapes.
          </p>

        <div className="grid gap-8 lg:grid-cols-12 mt-12">

          {/* LEFT COLUMN: Vertical Tabs */}
          <div className="space-y-3 lg:col-span-4">
            {sectors.map((sector, index) => (
              <motion.button
                key={sector.tag}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-full rounded-2xl border p-6 text-left transition-all duration-500 relative overflow-hidden",
                  activeIndex === index
                    ? "border-blue-600 bg-white shadow-xl"
                    : "border-transparent bg-white/60 hover:bg-white hover:shadow-md"
                )}
                whileHover={{ x: activeIndex === index ? 0 : 4 }}
              >
                {/* Active Indicator Line */}
                {activeIndex === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600" />
                )}

                <span className="text-sm font-bold tracking-widest text-blue-600/70">
                  {sector.tag}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-slate-900 md:text-2xl leading-tight">
                  {sector.title.split("\n").map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
              </motion.button>
            ))}
          </div>

          {/* RIGHT COLUMN: Active Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col h-full rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 md:p-12 shadow-2xl"
              >
                {/* Sector Header */}
                <div className="mb-10">
                  <div className="mb-6 h-1 w-16 rounded-full bg-blue-600" />
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {sectors[activeIndex].title.replace("\n", " ")}
                  </h4>
                  <p className="text-lg leading-relaxed text-slate-300">
                    {sectors[activeIndex].description}
                  </p>
                </div>

                {/* Sub-Sectors Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                  {sectors[activeIndex].subSectors.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 group"
                    >
                      <h5 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h5>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {item.description.replace(/<[^>]*>/g, '')} Cleans citations for UI
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Indicators */}
                <div className="mt-12 grid grid-cols-4 gap-2">
                  {sectors.map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "h-1 rounded-full transition-all duration-500",
                        i === activeIndex ? "bg-blue-600" : "bg-white/20"
                      )}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}