import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-button px-5 py-3 text-[0.9375rem] font-semibold transition-colors duration-200";
const variants = {
  lime: "bg-brand text-ink hover:bg-brand-hover",
  ink: "bg-ink text-canvas hover:bg-charcoal",
  ghostDark: "border border-white/25 text-canvas hover:border-brand hover:text-brand",
  ghostLight: "border border-ink/25 text-ink hover:border-ink",
} as const;

export const buttonClass = (v: keyof typeof variants, extra?: string) => cn(base, variants[v], extra);

export function ButtonLink({
  href, variant, children, external, className,
}: { href: string; variant: keyof typeof variants; children: React.ReactNode; external?: boolean; className?: string }) {
  const content = (
    <>
      {children}
      <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass(variant, className)}>{content}</a>
  ) : (
    <Link href={href} className={buttonClass(variant, className)}>{content}</Link>
  );
}
