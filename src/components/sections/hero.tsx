import type { CSSProperties } from "react";
import { Workflow } from "@/components/motion/workflow";
import { ButtonLink } from "@/components/ui/button";
import { cn, wrap } from "@/lib/cn";
import { site } from "@/lib/site";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section className="bg-ink pb-20 pt-32 text-canvas sm:pb-28 sm:pt-40">
      <div className={cn(wrap, "grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]")}>
        <div>
          <p className="rise text-sm text-canvas/60" style={d(0)}>Custom software, AI automation, and systems integration</p>
          <h1 className="mt-5 font-display text-[2.5rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.5rem]">
            <span className="rise block" style={d(80)}>Software built around</span>
            <span className="rise block text-brand" style={d(180)}>your business.</span>
            <span className="rise block" style={d(280)}>Not the other way around.</span>
          </h1>
          <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-canvas/75" style={d(420)}>
            We design and engineer custom software, intelligent workflows, and seamless integrations that simplify operations, connect your existing tools, and eliminate repetitive work.
          </p>
          <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={d(520)}>
            <ButtonLink href={site.projectFormUrl} variant="lime" external={site.projectFormUrl.startsWith("http")}>Discuss your project</ButtonLink>
            <ButtonLink href="#services" variant="ghostDark">Explore our services</ButtonLink>
          </div>
          <p className="rise mt-8 text-sm text-canvas/55" style={d(600)}>Practical engineering. Clear milestones. Software built to last.</p>
        </div>
        <div className="rise lg:justify-self-end" style={d(350)}>
          <Workflow />
        </div>
      </div>
    </section>
  );
}
