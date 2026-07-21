import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/#how-it-works", label: "نحوه کار" },
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

        <nav
          aria-label="ناوبری اصلی"
          className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-purple"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="btn-primary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold"
          aria-label={`تماس با ${siteConfig.contact.phoneDisplay}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className="shrink-0"
          >
            <path
              d="M6.6 10.8c1.7 3.3 3.9 5.4 7.2 7.1l2.4-2.4c.3-.3.8-.4 1.2-.2 1.3.4 2.7.7 4.1.7.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10.1 22.2 1.8 13.9 1.8 3.7c0-.7.5-1.2 1.2-1.2H7c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.8.7 4.1.1.4 0 .9-.3 1.2l-2 2.8z"
              fill="currentColor"
            />
          </svg>
          تماس
        </a>
      </div>
    </header>
  );
}
