"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("exitModalShown")) {
        setIsOpen(true);
        sessionStorage.setItem("exitModalShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="grid max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black lg:grid-cols-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden p-8 lg:col-span-3">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white"
              >
                ×
              </button>
              <h2 className="font-display text-2xl font-medium text-white md:text-3xl">
                Ready to Build Your Next Digital Product?
              </h2>
              <p className="mt-4 text-white/60">
                Collaborate with a globally recognized, award-winning engineering team.
              </p>
              <div className="mt-6 flex gap-3">
                {["Award 1", "Award 2", "Award 3", "Award 4"].map((a) => (
                  <div
                    key={a}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow/20 text-xs text-yellow"
                  >
                    ★
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-y-auto p-8 lg:col-span-2">
              <p className="mb-4 text-sm text-white/60">
                Share a few details about your idea, and our team will come back with technical insights.
              </p>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-primary"
                />
                <input
                  type="tel"
                  placeholder="Contact Number *"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-primary"
                />
                <textarea
                  placeholder="Describe your project"
                  rows={3}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-primary"
                />
                <p className="text-xs text-white/40">
                  Fast 2-minute response, fully <strong className="text-white/60">NDA-protected.</strong>
                </p>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-white hover:bg-primary-hover"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
