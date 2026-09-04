import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { siteConfig } from "@/lib/site";
import { guidePages } from "@/lib/content/guides";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-ink px-4 py-14 text-slate-400 sm:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-purple/40 to-transparent"
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Logo showEnglish theme="light" />
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="font-bold text-white">دسترسی سریع</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: siteConfig.links.app, label: "ورود به پنل", external: true },
                { href: "/#how-it-works", label: "نحوه کار" },
                { href: "/guides", label: "راهنماها" },
                { href: "/blog", label: "مجله" },
                { href: "/#faq", label: "سوالات پرتکرار" },
                { href: `tel:${siteConfig.contact.phone}`, label: "تماس" },
              ].map((link) => (
                <li key={link.href}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      rel="noopener noreferrer"
                      className="transition hover:text-purple-muted"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="transition hover:text-purple-muted">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold text-white">راهنماهای تخصصی</p>
            <ul className="mt-4 space-y-2 text-sm">
              {guidePages.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="transition hover:text-purple-muted"
                  >
                    {guide.title.split("—")[0].trim()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-t border-white/5 pt-8 sm:grid-cols-2">
          <div>
            <p className="font-bold text-white">ارتباط با ما</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="transition hover:text-purple-muted"
                  dir="ltr"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition hover:text-purple-muted"
                  dir="ltr"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="transition hover:text-purple-muted"
                >
                  اینستاگرام
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.telegram}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="transition hover:text-purple-muted"
                >
                  تلگرام
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="font-bold text-white">پنل محصول</p>
            <a
              href={siteConfig.links.app}
              rel="noopener noreferrer"
              className="mt-3 inline-block transition hover:text-purple-muted"
              dir="ltr"
            >
              app.adxplore.ir
            </a>
            <p className="mt-6 font-bold text-white">فید RSS</p>
            <Link href="/feed.xml" className="mt-3 inline-block transition hover:text-purple-muted">
              /feed.xml
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name} ({siteConfig.nameEn}). تمامی حقوق محفوظ است.
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Link href="/about" className="transition hover:text-white">
              درباره ما
            </Link>
            <span aria-hidden>·</span>
            <Link href="/privacy" className="transition hover:text-white">
              حریم خصوصی
            </Link>
            <span aria-hidden>·</span>
            <Link href="/terms" className="transition hover:text-white">
              قوانین
            </Link>
            <span aria-hidden>·</span>
            <a
              href={siteConfig.links.app}
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              ورود به پنل
            </a>
            <span aria-hidden>·</span>
            <Link href="/" className="transition hover:text-white">
              adxplore.ir
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
