import Link from "next/link";
import { guidePages } from "@/lib/content/guides";

const links = guidePages.map((g) => ({
  href: `/guides/${g.slug}`,
  label: g.title.split("—")[0].trim(),
}));

export function SeoTopics() {
  return (
    <section
      aria-labelledby="topics-heading"
      className="border-t border-border bg-surface-elevated px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="topics-heading" className="sr-only">
          موضوعات تبلیغات اینستاگرام
        </h2>
        <p className="text-center text-sm font-semibold text-muted">
          راهنمای تخصصی ادکسپلور درباره{" "}
          <Link href="/guides/tabligat-instagram" className="text-purple hover:underline">
            تبلیغات اینستاگرام
          </Link>
          ،{" "}
          <Link href="/guides/gheymat-tabligat-instagram" className="text-purple hover:underline">
            قیمت تبلیغات اینستاگرام
          </Link>
          ،{" "}
          <Link
            href="/blog/hazine-tabligat-instagram-bar-asas-follower"
            className="text-purple hover:underline"
          >
            هزینه تبلیغات در اینستاگرام بر اساس فالوور
          </Link>
          ،{" "}
          <Link href="/guides/bazaryabi-influencer" className="text-purple hover:underline">
            بازاریابی اینفلوئنسر
          </Link>
          {" "}و{" "}
          <Link href="/guides/hamkari-ba-blogger" className="text-purple hover:underline">
            همکاری با بلاگر
          </Link>
        </p>

        <nav
          aria-label="راهنماهای تخصصی"
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-navy transition hover:border-purple/40 hover:bg-purple/5 hover:text-purple"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/blog/hazine-tabligat-instagram-bar-asas-follower"
            className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-navy transition hover:border-purple/40 hover:bg-purple/5 hover:text-purple"
          >
            هزینه بر اساس فالوور
          </Link>
          <Link
            href="/blog/tarefe-post-story-reels-instagram-1405"
            className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-navy transition hover:border-purple/40 hover:bg-purple/5 hover:text-purple"
          >
            تعرفه پست و ریلز
          </Link>
          <Link
            href="/blog/tabligat-instagram-foroshgah"
            className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-navy transition hover:border-purple/40 hover:bg-purple/5 hover:text-purple"
          >
            تبلیغات برای فروشگاه
          </Link>
          <Link
            href="/blog/reels-tabligat-instagram"
            className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-navy transition hover:border-purple/40 hover:bg-purple/5 hover:text-purple"
          >
            تبلیغات ریلز
          </Link>
        </nav>
      </div>
    </section>
  );
}
