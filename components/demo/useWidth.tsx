"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

const WidthCtx = createContext<number>(960);

/** Width of the demo's content surface — layouts inside the frame respond to
 *  the frame, not the viewport (the app is embedded, so media queries lie). */
export function useAppWidth() {
  return useContext(WidthCtx);
}

export function useMeasuredWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(960);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    setWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  return { ref, width };
}

export const WidthProvider = WidthCtx.Provider;

export const cols = (n: number) => ({ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` });
