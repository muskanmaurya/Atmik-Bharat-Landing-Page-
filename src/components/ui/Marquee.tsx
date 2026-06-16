"use client";

import { cn } from "@/lib/cn";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  speed = 30,
  direction = "left",
  className,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max gap-8",
          pauseOnHover && "hover:[animation-play-state:paused]",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
