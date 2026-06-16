"use client";
import { coreTechnologies } from "@/data/content";
import { HexagonCard } from "@/components/layout/HexagonCard";

export function TechStackSection() {
  return (
    <section className="relative p-20 bg-black overflow-hidden">
      {/* Background Decorative Gradient mapping to your neon image reference */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            The Engine Behind the Innovation
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We leverage enterprise-grade frameworks, robust cloud infrastructure, and advanced AI ecosystems to build systems that scale infinitely.
          </p>
        </div>

        {/* 
          The Honeycomb Grid 
          Flex layout with negative margins to interlock the hexagons
        */}
        <div className="flex flex-wrap justify-center max-w-5xl mx-auto perspective-1000">
          {/* We map through the array and apply a negative top/bottom margin to interlock them visually */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-x-4 md:gap-y-[-40px] px-4">
             {coreTechnologies.map((tech, index) => (
                <div 
                  key={tech.id} 
                  // The mathematical margin trick to interlock hexagons on larger screens
                  className="md:odd:mt-14 md:even:-mt-4 transition-all"
                >
                  <HexagonCard tech={tech} />
                </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}