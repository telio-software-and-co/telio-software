import { Rise } from "@/components/motion/rise";
import { about, principles } from "@/lib/site";
import { cn, wrap } from "@/lib/cn";

export function About() {
  return (
    <section id="about" className="border-t border-line py-24 sm:py-32">
      <div className={cn(wrap, "grid gap-14 lg:grid-cols-[1fr_1.2fr]")}>
        <div>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{about.heading}</h2>
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-muted">
            {about.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
        <dl className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {principles.map((p, i) => (
            <Rise key={p.title} delay={i * 0.07} className="bg-white">
              <div className="h-full p-7">
                <dt className="font-display text-xl font-semibold">{p.title}</dt>
                <dd className="mt-2 text-muted">{p.text}</dd>
              </div>
            </Rise>
          ))}
        </dl>
      </div>
    </section>
  );
}
