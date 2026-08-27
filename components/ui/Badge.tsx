import { ReactNode } from "react";

type BadgeVariant =
  | "default"
  | "accent"
  | "brand"
  | "outline"
  | "success"
  | "warning"
  | "info"
  | "destructive";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const VARIANTS: Record<BadgeVariant, string> = {
  default: "border-border bg-surface-1 text-foreground",
  accent: "border-brand/40 bg-brand/12 text-brand-text dark:text-accent",
  brand: "border-brand/50 bg-brand-muted text-brand-foreground",
  outline: "border-border bg-transparent text-muted",
  success: "border-success/40 bg-success/12 text-success-text",
  warning: "border-warning/40 bg-warning/12 text-warning-text",
  info: "border-info/40 bg-info/12 text-info-text",
  destructive: "border-destructive/40 bg-destructive/12 text-destructive-text",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
