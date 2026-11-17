import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn, wrap } from "@/lib/cn";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className={cn(wrap, "grid gap-12 lg:grid-cols-[1fr_1.1fr]")}>
        <div>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Have a workflow that needs a better solution?</h2>
          <p className="mt-5 max-w-md text-lg text-muted">Tell us what slows your team down. We reply within two working days, with a clear view of whether and how we can help.</p>
          <p className="mt-8 text-sm text-muted">Share the details of your workflow and we will get back to you.</p>
        </div>
        <div className="self-start rounded-card border border-line bg-white p-8">
          <h3 className="font-display text-2xl font-semibold">Tell us about your project</h3>
          <p className="mt-2 text-muted">Answer a few questions so we can understand what you need and how we can help.</p>
          <ButtonLink href={site.projectFormUrl} variant="ink" external={site.projectFormUrl.startsWith("http")} className="mt-6">
            Discuss a project
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
