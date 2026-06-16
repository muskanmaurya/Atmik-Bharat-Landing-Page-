"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceSlide } from "@/data/content";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";


interface ServicesCarouselProps {
    slides: ServiceSlide[];
}

export const ServicesCarousel = ({ slides }: ServicesCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Auto-play slideshow logic
    useEffect(() => {
        if (!slides || slides.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % slides.length;
                scrollToActiveThumbnail(nextIndex);
                return nextIndex;
            });
        }, 4000); // Set to 4 seconds so users have time to read the description

        return () => clearInterval(interval);
    }, [currentIndex, slides]);

    // Helper to scroll thumbnails into view on smaller screens
    const scrollToActiveThumbnail = (index: number) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const child = container.children[index] as HTMLElement;
            if (child) {
                const scrollLeft = child.offsetLeft - container.offsetWidth / 2 + child.offsetWidth / 2;
                container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        }
    };

    const handleManualClick = (index: number) => {
        setCurrentIndex(index);
        scrollToActiveThumbnail(index);
    };

    if (!slides || slides.length === 0) return null;

    return (
        <section className="relative h-screen px-20 py-10 w-full overflow-hidden bg-black">

            <h1 className="relative left-20 p-2 font-display text-5xl z-10 leading-tight text-white">Engineering Excellence at Enterprise Scale</h1>

            {/* 1. Background Image Layer with Parallax cross-fade */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={slides[currentIndex].image}
                    src={slides[currentIndex].image}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
                    // ADD THIS LINE to debug missing images immediately:
                    onError={(e) => console.error(`Failed to load image at: ${slides[currentIndex].image}`)}
                />
            </AnimatePresence>

            {/* Add a beautiful gradient fallback just in case the image fails */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/20 z-0 pointer-events-none" />

            {/* 2. Foreground Content Layer */}
            <div className="absolute z-10 p-10 md:p-20 flex flex-col justify-center h-[calc(100%-150px)] max-w-4xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slides[currentIndex].title}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
                            {slides[currentIndex].title}
                        </h1>

                        <p className="mt-6 text-lg md:text-2xl text-white/80 font-light leading-relaxed drop-shadow-md max-w-2xl">
                            {slides[currentIndex].description}
                        </p>

                        <button className="mt-10 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all shadow-xl active:scale-95 flex items-center gap-2 w-fit">
                            Know More
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* 3. Bottom Slider Thumbnails Navigation (Scrollable for 12 items) */}
            <div className="absolute bottom-10 right-0 w-fit z-20 px-10">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 items-end"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hides scrollbar in Firefox/IE
                >
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            onClick={() => handleManualClick(i)}
                            className={`relative shrink-0 cursor-pointer overflow-hidden rounded-xl transition-all duration-300 origin-bottom ${currentIndex === i
                                ? "w-32 h-40 ring-2 ring-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                : "w-24 h-32 opacity-50 hover:opacity-100 hover:h-36"
                                }`}
                        >
                            <Image src={slide.image} alt={slide.title} width={100} height={100} className="w-full h-full object-cover" />
                            {/* Optional: Add a small title overlay on unselected thumbnails */}
                            {currentIndex !== i && (
                                <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                                    <span className="text-white text-[10px] font-semibold truncate w-full">{slide.title}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Global style to hide scrollbar for webkit browsers */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
        </section>
    );
};