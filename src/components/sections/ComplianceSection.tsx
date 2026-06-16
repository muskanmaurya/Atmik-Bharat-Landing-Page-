"use client";

import { motion } from "framer-motion";
import { complianceCategories } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ComplianceSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-lg">
        <SectionHeading
          eyebrow="Compliance Driven"
          title="Building With Compliance and Risk in Mind"
          subtitle="At Appinventiv, we integrate compliance into every layer of our engineering process, ensuring your enterprise can navigate complex regulations while maintaining both security and high performance."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {complianceCategories.map((category, index) => (
            <motion.div
              key={category.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-black/5 bg-[#f8f7f4] p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <span className="font-condensed text-4xl font-medium text-primary/30">
                [ {category.number} ]
              </span>
              <h3 className="mt-2 font-display text-lg font-medium text-black">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-black/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
