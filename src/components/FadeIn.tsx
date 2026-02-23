"use client";

import { useInView } from "@/hooks/useInView";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

export function FadeIn({ children, className = "" }: FadeInProps) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(6px)",
        transition: "opacity 400ms ease, transform 400ms ease",
      }}
    >
      {children}
    </div>
  );
}
