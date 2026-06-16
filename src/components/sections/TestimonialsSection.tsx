"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-[#f8f7f4]">
      <div className="container-lg">
        <SectionHeading
          title="Words From Our Clients"
          align="center"
        />

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white p-8 md:p-12"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className="mb-6 text-primary/30"
              >
                <path
                  d="M14 28h8v12H6V28c0-6 4-10 8-14V8h8v10c-4 2-6 5-8 10zm20 0h8v12H26V28c0-6 4-10 8-14V8h8v10c-4 2-6 5-8 10z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-lg leading-relaxed text-black/80 md:text-xl">
                {testimonials[active].quote}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {testimonials[active].name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-black">{testimonials[active].name}</p>
                  <p className="text-sm text-black/50">{testimonials[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white transition-all hover:border-primary hover:bg-primary hover:text-white"
              aria-label="Previous testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-primary" : "w-2 bg-black/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white transition-all hover:border-primary hover:bg-primary hover:text-white"
              aria-label="Next testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button href="#testimonials">View All Client Testimonials</Button>
        </div>
      </div>
    </section>
  );
}
