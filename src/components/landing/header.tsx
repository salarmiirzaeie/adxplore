import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { PanelLink } from "@/components/landing/panel-link";

const navLinks = [
  { href: "/#how-it-works", label: "نحوه کار" },
  { href: "/#download", label: "دانلود اپ" },
  { href: "/guides", label: "راهنماها" },
  { href: "/blog", label: "مجله" },
  { href: "/#faq", label: "سوالات" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-surface-elevated/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6">
        <Link href="/" aria-label="صفحه اصلی ادکسپلور">
          <Logo />
        </Link>

        <nav aria-label="ناوبری اصلی" className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-purple">
              {link.label}
            </Link>
          ))}
        </nav>

        <PanelLink className="px-3.5 py-2 sm:px-4 sm:py-2.5">ورود / ثبت نام</PanelLink>
      </div>
    </header>
  );
}
