import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { siteConfig } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { JsonLd, breadcrumbJsonLd, organizationJsonLd, webPageJsonLd } from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  title: "درباره ادکسپلور",
  description:
    "ادکسپلور پلتفرم DIY تبلیغات اینستاگرام و بازاریابی اینفلوئنسر در ایران است. بدون آژانس، مستقیم با بلاگر همکاری کنید.",
  path: "/about",
  keywords: ["درباره ادکسپلور", "پلتفرم اینفلوئنسر ایران"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "خانه", path: "/" },
          { name: "درباره ما", path: "/about" },
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          title: "درباره ادکسپلور",
          description: siteConfig.description,
          path: "/about",
        })}
      />

      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs items={[{ label: "خانه", href: "/" }, { label: "درباره ما" }]} />
        <h1 className="mt-6 text-3xl font-extrabold text-navy sm:text-4xl">درباره {siteConfig.name}</h1>
        <p className="mt-4 text-lg leading-8 text-muted">{siteConfig.description}</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-muted">
          <section>
            <h2 className="text-xl font-bold text-navy">ماموریت ما</h2>
            <p className="mt-3">
              ادکسپلور با هدف حذف واسطه‌های پرهزینه در تبلیغات اینستاگرام ساخته شده است. ما به برندهای
              ایرانی کمک می‌کنیم مستقیماً با بلاگرهای مناسب همکاری کنند، کمپین را مدیریت کنند و با
              پرداخت امن اجرا کنند.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy">چرا ادکسپلور؟</h2>
            <ul className="mt-3 list-disc space-y-2 pr-5">
              <li>دسترسی مستقیم به بلاگر بدون آژانس</li>
              <li>شفافیت در قیمت و آمار</li>
              <li>پرداخت امن (Escrow) برای اطمینان طرفین</li>
              <li>تمرکز بر بازار ایران و نیازهای برندهای محلی</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy">تماس</h2>
            <p className="mt-3">
              ایمیل:{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-purple">
                {siteConfig.contact.email}
              </a>
            </p>
            <p className="mt-2">
              <a
                href={siteConfig.links.app}
                rel="noopener noreferrer"
                className="btn-primary mt-4 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold"
              >
                ورود به پنل
              </a>
            </p>
            <p className="mt-4">
              <Link href="/guides" className="font-semibold text-purple hover:underline">
                مشاهده راهنماها
              </Link>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
