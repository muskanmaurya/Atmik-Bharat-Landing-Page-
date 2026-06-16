"use client";

import { motion } from "framer-motion";
import { partners } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";

export function PartnersSection() {
  return (
    <section className="section-padding overflow-hidden bg-[#f8f7f4] py-16">
      <div className="container-lg mb-12">
        <SectionHeading
          title="Strategic Alliances that Power Innovation"
          align="center"
        />
      </div>

      <Marquee speed={35}>
        {partners.map((partner) => (
          <motion.div
            key={partner}
            whileHover={{ y: -4 }}
            className="flex h-24 w-48 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border border-black/5 bg-white px-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xs font-bold text-primary">
              {partner.split(" ").map((w) => w[0]).join("").slice(0, 3)}
            </div>
            <span className="text-center text-xs font-medium text-black/50">{partner}</span>
          </motion.div>
        ))}
      </Marquee>
    </section>
  );
}
