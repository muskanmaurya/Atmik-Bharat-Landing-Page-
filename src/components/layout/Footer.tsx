"use client";

import Image from "next/image";
import { footerLinks, locations } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa'


export function Footer() {
  return (
    <footer className="bg-black pt-16 text-white">
      <div className="container-lg">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/logo/no-bg-logo.png"
                alt="Appinventiv Logo"
                width={160}
                height={36}
                className="mb-4 h-10 w-auto"
              />
              <h1 className="text-2xl font-display pb-3 text-white font-bold">Atmik Bharat</h1>
            </div>
            <p className="max-w-sm text-sm text-white/50">
              Digital product consulting, development, and engineering company.
            </p>
            <div className="mt-6 flex gap-4">
              <div className="flex items-center gap-3 mt-4">
                <a href="#" aria-label="twitter" className="p-2 rounded-full border border-white/10 hover:bg-white/5">
                  {/* <FaTwitter className="w-5 h-5 text-slate-200" /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" color="white" fill="currentColor">
                    <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="facebook" className="p-2 rounded-full border border-white/10 hover:bg-white/5">
                  <FaFacebook className="w-5 h-5 text-slate-200" />
                </a>
                <a href="#" aria-label="instagram" className="p-2 rounded-full border border-white/10 hover:bg-white/5">
                  <FaInstagram className="w-5 h-5 text-slate-200" />
                </a>
                <a href="#" aria-label="linkedin" className="p-2 rounded-full border border-white/10 hover:bg-white/5">
                  <FaLinkedin className="w-5 h-5 text-slate-200" />
                </a>
                <a href="#" aria-label="youtube" className="p-2 rounded-full border border-white/10 hover:bg-white/5">
                  <FaYoutube className="w-5 h-5 text-slate-200" />
                </a>
                <a href="#" aria-label="github" className="p-2 rounded-full border border-white/10 hover:bg-white/5">
                  <FaGithub className="w-5 h-5 text-slate-200" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.slice(0, 3).map((loc) => (
              <div key={loc.address}>
                <h4 className="mb-2 text-sm font-semibold">{loc.Office}</h4>
                <p className="text-xs leading-relaxed text-white/40">{loc.address}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold capitalize">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-white/40 transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              Copyright ©2026-2027 Appinventiv All Rights Reserved.
            </p>
            <div className="flex gap-4 text-xs text-white/30">
              <a href="#" className="hover:text-white">Sitemap</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Statutory Legal Information</a>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
        <Button href="#contact-form">Get In Touch</Button>
      </div>
    </footer>
  );
}
