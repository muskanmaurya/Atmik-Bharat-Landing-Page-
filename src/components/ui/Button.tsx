"use client";

import { cn } from "@/lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "line";
  children: React.ReactNode;
  href?: string;
}

export function Button({
  variant = "primary",
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
    variant === "primary" &&
      "bg-primary text-white hover:bg-primary-hover",
    variant === "outline" &&
      "border border-white/30 text-white hover:border-primary hover:bg-primary/10",
    variant === "line" &&
      "border-b border-primary bg-transparent px-0 pb-1 text-primary rounded-none hover:text-primary-hover",
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
      )}
      {variant === "primary" && (
        <svg
          className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {content}
    </button>
  );
}
