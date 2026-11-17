import { Rise } from "@/components/motion/rise";
import { steps } from "@/lib/site";
import { cn, wrap } from "@/lib/cn";

export function Process() {
  return (
    <section id="process" className="bg-charcoal py-24 text-canvas sm:py-32">
      <div className={wrap}>
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">From complex problems to working systems.</h2>
        <p className="mt-5 max-w-2xl text-lg text-canvas/65">Four stages, each with a clear deliverable. People review the work at every milestone, and nothing ships without validation.</p>
        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.title}>
              <Rise delay={i * 0.08}>
                <div className="border-t-2 border-brand pt-5">
                  <span className="font-display text-sm text-brand">Step {i + 1}</span>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-canvas/70">{s.text}</p>
                  <p className="mt-4 text-sm text-canvas/90"><span className="text-canvas/50">You get: </span>{s.output}</p>
                </div>
              </Rise>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
