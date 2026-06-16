"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.4, 0.25, 0, 1] }}
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-4 inline-block text-sm font-semibold uppercase tracking-widest",
            dark ? "text-yellow" : "text-primary"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-medium leading-tight md:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-black"
        )}
      >
        {title.split("\n").map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            dark ? "text-white/70" : "text-black/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
