import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { Metric, Tone } from "./types";

interface MetricCardProps {
  readonly metric: Metric;
}

/**
 * Resolve the tone of a trend.
 *
 * Direction alone is not meaning: "open stockouts up 3.5%" is a
 * regression while "fill rate up 2.4%" is an improvement. The tone is
 * therefore derived from the movement combined with `higherIsBetter`,
 * so the UI never implies "up = good".
 */
function resolveTrendTone(direction: Metric["trend"]["direction"], higherIsBetter: boolean): Tone {
  if (direction === "flat") return "neutral";
  const isImprovement = direction === "up" ? higherIsBetter : !higherIsBetter;
  return isImprovement ? "success" : "danger";
}

const TREND_ICON: Record<Metric["trend"]["direction"], LucideIcon> = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  flat: ArrowRight,
};

/* Tone → class map. Text uses the `-text` variants, which are lifted in
   dark theme because all four spec semantics fall to 1.6–2.6:1 against
   the #3F4F62 card surface. */
const TREND_CLASS: Record<Tone, string> = {
  neutral: "bg-surface-2 text-muted-strong",
  success: "bg-success/12 text-success-text",
  warning: "bg-warning/12 text-warning-text",
  info: "bg-info/12 text-info-text",
  danger: "bg-destructive/12 text-destructive-text",
};

export function MetricCard({ metric }: MetricCardProps): React.JSX.Element {
  const { label, value, caption, icon: Icon, trend } = metric;
  const tone = resolveTrendTone(trend.direction, trend.higherIsBetter);
  const TrendIcon = TREND_ICON[trend.direction];
  const signedChange = `${trend.direction === "down" ? "−" : "+"}${Math.abs(trend.value)}%`;

  return (
    <article className="rounded-xl border border-border bg-surface-1 p-5 shadow-sm transition-colors hover:border-border-hover">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-muted-strong">{label}</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground tabular-nums">
            {value}
          </p>
        </div>

        <span
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface-2 text-muted-strong"
          aria-hidden
        >
          <Icon className="h-[1.125rem] w-[1.125rem]" />
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums ${TREND_CLASS[tone]}`}
        >
          <TrendIcon className="h-3.5 w-3.5" aria-hidden />
          {signedChange}
        </span>
        <span className="text-xs text-muted-strong">{trend.label}</span>
      </div>

      <p className="mt-3 border-t border-border-subtle pt-3 text-xs text-muted-strong">
        {caption}
      </p>
    </article>
  );
}
