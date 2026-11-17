import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { site } from "@/lib/site";
import { cn, wrap } from "@/lib/cn";

export const metadata: Metadata = { title: "Privacy notice", robots: { index: true } };

export default function Privacy() {
  return (
    <>
      <div className="bg-ink"><Navbar /><div className="h-16" /></div>
      <main id="main" className={cn(wrap, "max-w-3xl py-20")}>
        <h1 className="font-display text-4xl font-semibold tracking-tight">Privacy policy</h1>
        <div className="mt-8 space-y-6 leading-relaxed text-ink/85">
          <p><strong>Effective date:</strong> 17 November 2026</p>
          <p>Telio Software and Co. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy. This policy explains how we handle information when you visit this website or submit a project enquiry.</p>
          <h2 className="font-display text-2xl font-semibold text-ink">Information you provide</h2>
          <p>When you use our project enquiry form, you submit information such as your name, email address, company details, and information about your project. The form is hosted by Google, which may process information in accordance with its own privacy policy and terms.</p>
          <h2 className="font-display text-2xl font-semibold text-ink">How we use information</h2>
          <p>We use enquiry information to respond to you, understand your requirements, assess whether we can help, and communicate about potential services. We do not sell your personal information or use it for unrelated marketing.</p>
          <h2 className="font-display text-2xl font-semibold text-ink">Sharing and retention</h2>
          <p>We may access information submitted through the form and share it with service providers only when needed to operate the enquiry process or provide requested services. We keep information only for as long as reasonably necessary for these purposes or as required by law.</p>
          <h2 className="font-display text-2xl font-semibold text-ink">Website technology</h2>
          <p>This website may use essential technologies required to deliver pages and security features. We do not knowingly use this site to collect sensitive personal information.</p>
          <h2 className="font-display text-2xl font-semibold text-ink">Your choices</h2>
          <p>Depending on applicable law, you may have rights to request access to, correction of, or deletion of personal information we hold about you. To make a request, {site.contactEmail ? <>contact us at <a className="underline underline-offset-4" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</> : "use the project enquiry form."}</p>
          <h2 className="font-display text-2xl font-semibold text-ink">Changes to this policy</h2>
          <p>We may update this policy when our practices or legal obligations change. The updated version will be posted on this page with a revised effective date.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
