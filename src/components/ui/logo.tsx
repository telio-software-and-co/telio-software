import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

// The site's navbar and footer sit on dark surfaces, so the default is the lime wordmark.
// Use tone="black" on light backgrounds.
export function Logo({ className, tone = "lime" }: { className?: string; tone?: "lime" | "black" }) {
  return (
    <Link href="/" aria-label="Telio Software & Co. home" className={cn("inline-flex items-center", className)}>
      <Image
        src={`/brand/telio-logo-${tone}.png`}
        alt="Telio Software & Co."
        width={900}
        height={298}
        priority
        className="h-11 w-auto"
      />
    </Link>
  );
}
