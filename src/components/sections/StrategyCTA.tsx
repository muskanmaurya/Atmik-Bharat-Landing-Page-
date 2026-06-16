"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function StrategyCTA() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px]" />
      </div>

      <div className="container-lg relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-widest text-white/50"
        >
          Discuss your Digital Transformation strategy
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-4 max-w-3xl font-display text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl"
        >
          Enterprise technology succeeds when architecture, intelligence, and execution align.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/60"
        >
          Connect with Appinventiv&apos;s consulting and engineering teams to build systems that can last, scale responsibly, and stand up to real-world complexity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <Button href="#contact-form">Discuss Your Technology Strategy</Button>
        </motion.div>
      </div>
    </section>
  );
}
