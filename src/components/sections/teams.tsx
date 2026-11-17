import { teams } from "@/lib/site";
import { cn, wrap } from "@/lib/cn";

// The one lime moment on the page; the angular notch echoes the logo geometry.
export function Teams() {
  return (
    <section className="py-24 sm:py-32">
      <div className={wrap}>
        <div className="bg-brand p-8 text-ink [clip-path:polygon(0_0,calc(100%-3rem)_0,100%_3rem,100%_100%,0_100%)] sm:p-14">
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Built for the teams that run your business.</h2>
          <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {teams.map((t) => (
              <div key={t.title} className="border-t-2 border-ink pt-4">
                <dt className="font-display text-xl font-semibold">{t.title}</dt>
                <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink/80">{t.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
