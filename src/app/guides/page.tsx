import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { guidePages } from "@/lib/content/guides";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  title: "راهنماهای تبلیغات اینستاگرام و بازاریابی اینفلوئنسر",
  description:
    "راهنماهای تخصصی ادکسپلور: تبلیغات اینستاگرام، بازاریابی اینفلوئنسر، همکاری با بلاگر، قیمت تبلیغات و پلتفرم اینفلوئنسر ایران.",
  path: "/guides",
  keywords: [
    "راهنمای تبلیغات اینستاگرام",
    "راهنمای بازاریابی اینفلوئنسر",
    "همکاری با بلاگر",
  ],
});

export default function GuidesIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "خانه", path: "/" },
          { name: "راهنماها", path: "/guides" },
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          title: "راهنماهای ادکسپلور",
          description: "راهنماهای تخصصی تبلیغات اینستاگرام",
          path: "/guides",
        })}
      />

      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs
          items={[{ label: "خانه", href: "/" }, { label: "راهنماها" }]}
        />
        <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">
          راهنماهای تخصصی تبلیغات اینستاگرام
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          صفحات تخصصی ادکسپلور برای هر موضوع کلیدی در بازاریابی اینفلوئنسر و
          تبلیغات اینستاگرام در ایران.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {guidePages.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/guides/${guide.slug}`}
                className="card-elevated block rounded-2xl p-6"
              >
                <h2 className="text-lg font-bold text-navy">{guide.title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {guide.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
