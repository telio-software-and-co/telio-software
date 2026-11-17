import { Rise } from "@/components/motion/rise";
import { services } from "@/lib/site";
import { cn, wrap } from "@/lib/cn";

export function Services() {
  return (
    <section id="services" className="bg-brand-soft/60 py-24 sm:py-32">
      <div className={wrap}>
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">What we build</h2>
        <p className="mt-5 max-w-2xl text-lg text-muted">Six areas where we help teams replace manual work with reliable software.</p>
        {/* One shared grid with 1px dividers instead of six separate cards. */}
        <ul className="mt-14 grid gap-px overflow-hidden rounded-card border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.title} className="bg-canvas">
              <Rise delay={(i % 3) * 0.07} className="h-full">
                <div className="group h-full p-7 transition-colors duration-200 hover:bg-brand sm:p-8">
                  <s.icon aria-hidden className="size-7" strokeWidth={1.75} />
                  <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted transition-colors duration-200 group-hover:text-ink/80">{s.text}</p>
                </div>
              </Rise>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
