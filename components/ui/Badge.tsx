import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "crimson" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variantStyles = {
    default: "border-[var(--border)] bg-[var(--card)] text-[var(--text)]",
    accent: "border-scarlet/30 bg-scarlet/10 text-scarlet",
    crimson: "border-crimson/40 bg-crimson/20 text-white",
    outline: "border-[var(--border)] bg-transparent text-silver",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
}
