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

/* Tinted badges pair a low-alpha fill of the spec colour with the
   contrast-safe `-text` variant, so the label clears 4.5:1 in both
   themes while the wash keeps the original hue. */
const VARIANTS: Record<BadgeVariant, string> = {
  default: "border-border bg-surface-1 text-foreground",
  accent: "border-brand-solid/40 bg-brand-solid/12 text-brand-text",
  brand: "border-brand-solid bg-brand-solid text-brand-foreground",
  outline: "border-border bg-transparent text-muted-strong",
  success: "border-success/40 bg-success/12 text-success-text",
  warning: "border-warning/40 bg-warning/12 text-warning-text",
  info: "border-info/40 bg-info/12 text-info-text",
  destructive: "border-destructive/40 bg-destructive/12 text-destructive-text",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border px-3 py-1 text-xs font-medium tracking-wide ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
