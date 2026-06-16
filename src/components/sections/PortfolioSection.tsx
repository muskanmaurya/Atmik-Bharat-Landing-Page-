"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { motion } from "framer-motion";
import { portfolioItems } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(Draggable);

export function PortfolioSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [showDrag, setShowDrag] = useState(false);

  useEffect(() => {
    if (!listRef.current || !sliderRef.current) return;

    const list = listRef.current;
    const totalWidth = list.scrollWidth - sliderRef.current.offsetWidth;

    const draggable = Draggable.create(list, {
      type: "x",
      bounds: { minX: -totalWidth, maxX: 0 },
      inertia: true,
      onDragStart: () => setIsDragging(true),
      onDragEnd: () => setIsDragging(false),
      cursor: "grab",
      activeCursor: "grabbing",
    });

    return () => {
      draggable[0]?.kill();
    };
  }, []);

  return (
    <section id="portfolio" className="section-padding overflow-hidden bg-[#f8f7f4]">
      <div className="container-lg mb-12">
        <SectionHeading title="Innovation, Engineered by Appinventiv" />
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {portfolioItems.map((item) => (
              <span
                key={item.client}
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-black/60"
              >
                {item.client}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="relative cursor-grab overflow-hidden"
        onMouseEnter={() => setShowDrag(true)}
        onMouseLeave={() => setShowDrag(false)}
        onMouseMove={(e) => {
          const rect = sliderRef.current?.getBoundingClientRect();
          if (rect) {
            setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          }
        }}
      >
        {showDrag && !isDragging && (
          <motion.div
            className="pointer-events-none absolute z-20 rounded-full bg-black px-4 py-2 text-sm font-medium text-white"
            style={{ left: mousePos.x, top: mousePos.y, transform: "translate(-50%, -50%)" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            DRAG
          </motion.div>
        )}

        <div ref={listRef} className="flex gap-6 px-[max(1rem,calc((100vw-1600px)/2+1rem))]">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.client}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-[380px] shrink-0 rounded-3xl bg-white p-8 shadow-lg transition-shadow duration-500 hover:shadow-2xl md:w-[420px]"
            >
              <div
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white"
                style={{ backgroundColor: item.color }}
              >
                {item.client.charAt(0)}
              </div>
              <h3 className="font-display text-2xl font-medium text-black">{item.client}</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60">{item.description}</p>

              {item.stats && (
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {item.stats.map((stat) => (
                    <div key={stat.value} className="rounded-2xl bg-[#f8f7f4] p-4">
                      <span className="font-condensed text-3xl font-medium text-primary">
                        {stat.value}
                      </span>
                      <p className="mt-1 text-xs leading-tight text-black/50">
                        {stat.label.split("\n").map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {item.features && (
                <ul className="mt-6 space-y-2">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-black/60"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6">
                <Button href="#portfolio" variant="line">
                  View Success Story
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
