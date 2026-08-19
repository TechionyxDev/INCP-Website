import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className = "", hoverEffect = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 ${
        hoverEffect
          ? "hover:border-scarlet hover:-translate-y-1 hover:shadow-xl hover:shadow-scarlet/5"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
