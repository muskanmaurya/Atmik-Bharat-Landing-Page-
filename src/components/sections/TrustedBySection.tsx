"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";

const supportedIcons = [
  "/assets/supported/iitd.webp",
  "/assets/supported/meta.png",
  "/assets/supported/ngis_logo.webp",
  "/assets/supported/nit.webp",
  "/assets/supported/rubi.webp",
  "/assets/supported/sfc.webp",
];

const clientIcons = [
  "/assets/clients/cggovt.webp",
  "/assets/clients/deloitte.webp",
  "/assets/clients/Divy%20Solar%20Power.webp",
  "/assets/clients/halsca.webp",
  "/assets/clients/kpmg.webp",
  "/assets/clients/phasal.webp",
  "/assets/clients/Raipur-Logo.webp",
  "/assets/clients/Salesforce.png",
];

const icons = [...supportedIcons, ...clientIcons];

function nameFromPath(path: string) {
  const parts = path.split("/");
  const file = parts[parts.length - 1];
  const name = file.replace(/\.[^/.]+$/, "");
  return decodeURIComponent(name).replace(/[-_]/g, " ");
}

export function TrustedBySection() {
  return (
    <section className="section-padding overflow-hidden bg-blue-900 py-16">
      <div className="container-lg mb-12">
        <SectionHeading title="Trusted by Industry Leaders and Government Pioneers" align="center" />
      </div>

      <Marquee speed={25} className="mb-8">
        {icons.map((src, idx) => (
          <motion.div
            key={src + idx}
            whileHover={{ scale: 1.03 }}
            className="flex h-36 w-1/19 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border border-black/5 bg-[#f8f7f4] px-4 py-3"
          >
            <div className="flex items-center justify-center rounded-lg bg-white p-2">
              <Image src={src} alt={nameFromPath(src)} width={80} height={80} className="object-contain" />
            </div>
            <span className="text-center text-xs font-semibold text-black/70">{nameFromPath(src)}</span>
          </motion.div>
        ))}
      </Marquee>

      <Marquee speed={30} direction="right">
        {icons.map((src, idx) => (
          <motion.div
            key={`rev-${src}-${idx}`}
            whileHover={{ scale: 1.03 }}
            className="flex h-36 w-1/19 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border border-black/5 bg-[#f8f7f4] px-4 py-3"
          >
            <div className="flex items-center justify-center rounded-lg bg-white p-2">
              <Image src={src} alt={nameFromPath(src)} width={80} height={80} className="object-contain" />
            </div>
            <span className="text-center text-xs font-semibold text-black/70">{nameFromPath(src)}</span>
          </motion.div>
        ))}
      </Marquee>
    </section>
  );
}
