import { Rise } from "@/components/motion/rise";
import { problems } from "@/lib/site";
import { cn, wrap } from "@/lib/cn";

export function Problem() {
  return (
    <section className="py-24 sm:py-32">
      <div className={wrap}>
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Your tools shouldn’t slow your team down.</h2>
        <p className="mt-5 max-w-2xl text-lg text-muted">Disconnected spreadsheets, manual handoffs, and scattered information add up to hours of repetitive work every week. Here is what that looks like, and what changes.</p>
        <div className="mt-14 border-t border-line">
          {problems.map((p, i) => (
            <Rise key={p.before} delay={i * 0.08}>
              <div className="grid gap-4 border-b border-line py-8 md:grid-cols-2 md:gap-12">
                <div>
                  <p className="text-sm text-muted">Today</p>
                  <p className="mt-1.5 text-xl text-ink/80">{p.before}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">With Telio</p>
                  <p className="mt-1.5 text-xl font-medium">{p.after}</p>
                </div>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}
