"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function MarketingCTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-yellow blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white blur-[100px]" />
      </div>

      <div className="container-lg relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
              Built It? Now Let&apos;s Market It!
            </h2>
            <p className="mt-4 text-lg text-white/80">
              From the team that understands your tech stack to the marketing experts who know your audience. Complete your digital success story with Appinventiv Digital.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-start lg:justify-end"
          >
            <Button
              href="#contact"
              className="!bg-white !text-primary hover:!bg-yellow hover:!text-black"
            >
              Complete Your Success Story
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
