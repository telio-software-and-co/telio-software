"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";
import { cn, wrap } from "@/lib/cn";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-brand-soft/60 py-24 sm:py-32">
      <div className={cn(wrap, "grid gap-12 lg:grid-cols-[1fr_1.6fr]")}>
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Questions we hear often</h2>
        <div className="border-t border-ink/15">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-ink/15">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-medium"
                  >
                    {f.q}
                    <Plus aria-hidden className={cn("size-5 shrink-0 transition-transform duration-250", isOpen && "rotate-45")} />
                  </button>
                </h3>
                {/* Height animates via grid-template-rows (no layout-property animation). */}
                <div id={`faq-${i}`} role="region" className={cn("grid transition-[grid-template-rows] duration-250 motion-reduce:transition-none", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden"><p className="pb-6 text-muted">{f.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
