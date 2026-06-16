"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/content";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="border-b border-white/10 bg-[#0f0f0f] px-4 py-2">
        <div className="container-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
          <a href="#" className="relative">
            <Image
              src="/assets/logo/no-bg-logo.png"
              alt="AtmikBharat Logo"
              width={140}
              height={32}
              className="h-13 w-auto"
              priority
              />
          </a>
          <h1 className="text-2xl font-display font-bold text-white">Atmik Bharat</h1>
          </div>
              
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-primary hover:bg-primary/20 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" />
              ) : (
                <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="2" />
              )}
            </svg>
          </button>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition-all hover:border-primary hover:bg-primary/10 md:flex"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3.5 2A1.5 1.5 0 002 3.5v9A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0012.5 2h-9z" />
            </svg>
            Contact Us
          </a>
        </div>
      </div>

      <nav className="hidden border-b border-white/5 md:block">
        <div className="container-lg flex items-center gap-8 py-4">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="group flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                  <svg width="10" height="7" viewBox="0 0 10 7" className="opacity-60">
                    <path d="M1 1l4 5 4-5" stroke="currentColor" fill="none" strokeWidth="1.5" />
                  </svg>
                </a>

                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full z-50 mt-2 w-72 rounded-2xl border border-white/10 bg-[#111] p-6 shadow-2xl"
                    >
                      <p className="mb-3 text-xs uppercase tracking-wider text-white/50">
                        Explore {item.label}
                      </p>
                      <ul className="space-y-2">
                        {["Overview", "Solutions", "Case Studies", "Resources"].map((link) => (
                          <li key={link}>
                            <a
                              href="#"
                              className="block rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                      {"featured" in item && item.featured && (
                        <div className="mt-4 rounded-xl bg-primary/10 p-4">
                          <p className="text-xs text-primary">Featured Insight</p>
                          <p className="mt-1 text-sm font-medium text-white">{item.featured}</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
          {/* <div className="ml-auto flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              Explore AtmikBharat Digital
            </a>
            <button className="text-white/60 transition-colors hover:text-white" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div> */}
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/10 bg-black md:hidden"
          >
            <ul className="container-lg space-y-1 py-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
