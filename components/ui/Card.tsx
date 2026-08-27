import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className = "", hoverEffect = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface-1 p-6 shadow-sm transition-all duration-300 ${
        hoverEffect
          ? "hover:border-brand/60 hover:-translate-y-1 hover:shadow-lg"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
