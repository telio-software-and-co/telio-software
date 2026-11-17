import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { site } from "@/lib/site";
import { cn, wrap } from "@/lib/cn";

export function Footer() {
  return (
    <footer className="bg-ink text-canvas">
      <div className={cn(wrap, "flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between")}>
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-canvas/60">Custom software, AI automation, and systems integration.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-canvas/75">
          <Link href="/#services" className="hover:text-brand">Services</Link>
          <Link href="/#contact" className="hover:text-brand">Contact</Link>
          <Link href="/privacy" className="hover:text-brand">Privacy</Link>
        </nav>
      </div>
      <div className={cn(wrap, "border-t border-white/10 py-6 text-sm text-canvas/50")}>
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
