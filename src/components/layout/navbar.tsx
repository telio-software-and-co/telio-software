"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { buttonClass } from "@/components/ui/button";
import { nav, site } from "@/lib/site";
import { cn, wrap } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 text-canvas transition-colors duration-200", scrolled || open ? "border-b border-white/10 bg-ink/90 backdrop-blur" : "border-b border-transparent")}>
      <div className={cn(wrap, "flex h-16 items-center justify-between")}>
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-canvas/75 transition-colors hover:text-brand">{l.label}</a>
          ))}
          <a href={site.projectFormUrl} target={site.projectFormUrl.startsWith("http") ? "_blank" : undefined} rel={site.projectFormUrl.startsWith("http") ? "noopener noreferrer" : undefined} className={buttonClass("lime", "px-4 py-2 text-sm")}>Discuss a project</a>
        </nav>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-button md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className={cn(wrap, "flex flex-col gap-1 pb-6 md:hidden")}>
          {nav.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-button py-3 text-lg text-canvas/90">{l.label}</a>
          ))}
          <a href={site.projectFormUrl} target={site.projectFormUrl.startsWith("http") ? "_blank" : undefined} rel={site.projectFormUrl.startsWith("http") ? "noopener noreferrer" : undefined} onClick={() => setOpen(false)} className={buttonClass("lime", "mt-2")}>Discuss a project</a>
        </nav>
      )}
    </header>
  );
}
