import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
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
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

  const sizeClasses = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-7 text-base font-semibold",
  }[size];

  /* The primary action is achromatic by design (near-black on light,
     near-white on dark) so the blue and purple accents never compete
     with the CTA. `brand-solid` carries that inversion per theme. */
  const variantClasses = {
    primary:
      "bg-brand-solid hover:bg-brand-solid-hover text-brand-foreground shadow-brand active:scale-[0.98]",
    secondary:
      "bg-surface-1 text-foreground border border-border hover:bg-surface-2 hover:border-border-hover active:scale-[0.98]",
    outline:
      "bg-transparent text-foreground border border-border hover:border-brand-solid hover:text-brand-text active:scale-[0.98]",
    ghost:
      "bg-transparent text-muted-strong hover:bg-surface-2 hover:text-foreground active:scale-[0.98]",
    destructive:
      "bg-destructive hover:bg-destructive/90 text-brand-foreground active:scale-[0.98]",
  }[variant];

  return (
    <button className={`${base} ${sizeClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
