import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scarlet/60 disabled:pointer-events-none disabled:opacity-50";

  const sizeClasses = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-7 text-base font-semibold",
  }[size];

  const variantClasses = {
    primary:
      "bg-scarlet hover:bg-crimson text-white shadow-lg shadow-scarlet/20 active:scale-[0.98]",
    secondary:
      "bg-[var(--card)] text-[var(--text)] border border-[var(--border)] hover:border-scarlet hover:text-scarlet active:scale-[0.98]",
    outline:
      "bg-transparent text-[var(--text)] border border-[var(--border)] hover:border-scarlet hover:text-scarlet active:scale-[0.98]",
    ghost:
      "bg-transparent text-[var(--text-muted)] hover:text-scarlet active:scale-[0.98]",
  }[variant];

  return (
    <button className={`${base} ${sizeClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
