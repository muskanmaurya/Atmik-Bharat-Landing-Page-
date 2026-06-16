"use client";

import { motion } from "framer-motion";
import { inventivAIPillars } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function InventivAISection() {
  return (
    <section id="inventiv-ai" className="section-padding relative overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-yellow/10 blur-[120px]" />
      </div>

      <div className="container-lg relative z-10">
        <SectionHeading
          eyebrow="InventivAI"
          title="Building AI Ecosystem That Align With Your Organization"
          subtitle="InventivAI is our dedicated center of excellence, to help enterprises navigate the AI revolution. From custom LLMs to automated workflows, we move your business beyond the hype into practical, revenue-generating AI implementation."
          dark
        />

        <div className="grid gap-6 md:grid-cols-3">
          {inventivAIPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-white/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 transition-transform duration-500 group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-medium text-white">{pillar.title}</h3>
              <ul className="mt-4 space-y-2">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <Button href="#contact">Book Your AI Advisory Session</Button>
          <Button href="#inventiv-ai" variant="outline">
            Discover InventivAI
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
