"use client";

import { Fragment, useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

const stages = [
  { title: "Inputs", items: ["Files", "Forms", "APIs"] },
  { title: "Intelligence", items: ["Rules", "Automation"] },
  { title: "Outcomes", items: ["Insights", "Actions"] },
];

// Stages light up in sequence (~1.5s), then connectors keep a gentle flow.
export function Workflow() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) { setActive(stages.length); return; }
    const timers = [300, 800, 1300].map((ms, i) => setTimeout(() => setActive(i + 1), ms));
    return () => timers.forEach(clearTimeout);
  }, [reduce]);

  return (
    <figure className="w-full max-w-md rounded-card border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <div className="flex flex-col">
        {stages.map((s, i) => {
          const on = active > i;
          return (
            <Fragment key={s.title}>
              <div className={cn("rounded-[10px] border p-4 transition-colors duration-500", on ? "border-brand/60 bg-white/[0.04]" : "border-white/10")}>
                <div className="flex items-center gap-2 text-sm font-medium text-canvas">
                  <span aria-hidden className={cn("size-2 rounded-full transition-colors duration-500", on ? "bg-brand" : "bg-white/25")} />
                  {s.title}
                </div>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li key={it} className="rounded-md border border-white/15 px-2.5 py-1 text-sm text-canvas/80">{it}</li>
                  ))}
                </ul>
              </div>
              {i < stages.length - 1 && (
                <div aria-hidden className={cn("mx-auto h-9 w-0.5", active > i + 1 ? "flow-line" : "bg-white/15")} />
              )}
            </Fragment>
          );
        })}
      </div>
      <figcaption className="mt-5 text-sm text-canvas/60">From disconnected tools to connected operations</figcaption>
    </figure>
  );
}
