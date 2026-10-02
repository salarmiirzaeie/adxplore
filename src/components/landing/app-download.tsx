import Image from "next/image";
import { LogoMark } from "@/components/brand/logo";
import { siteConfig } from "@/lib/site";

const specs = [
  { label: "نسخه", value: siteConfig.android.versionLabel },
  { label: "حجم", value: siteConfig.android.sizeLabel },
  { label: "دسته‌بندی", value: siteConfig.android.categoryLabel },
  { label: "بروزرسانی", value: siteConfig.android.updatedLabel },
] as const;

const highlights = [
  {
    title: "برای برند",
    description: "کمپین بسازید، بلاگر مناسب را پیدا کنید و مستقیم به او دعوت بفرستید.",
  },
  {
    title: "برای اینفلوئنسر",
    description: "کمپین‌ها را ببینید، پیشنهاد بدهید و بعد از انتشار دستمزدتان را بگیرید.",
  },
  {
    title: "گفتگو در همان برنامه",
    description: "جزئیات محتوا و هماهنگی را برند و اینفلوئنسر در خود اپ پیش می‌برند.",
  },
  {
    title: "پرداخت امن",
    description: "پول تا تأیید برند پیش ادکسپلور می‌ماند و بعد از انتشار به اینفلوئنسر واریز می‌شود.",
  },
] as const;

const stores = [
  {
    name: "کافه‌بازار",
    href: siteConfig.links.bazaar,
    src: "/bazaar-download.png",
    alt: "دریافت از بازار",
  },
  {
    name: "مایکت",
    href: siteConfig.links.myket,
    src: "/myket-download.png",
    alt: "دریافت از مایکت",
  },
] as const;

export function AppDownload() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="cv-auto scroll-mt-24 border-t border-border bg-surface px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col items-center justify-between gap-8 p-6 sm:p-10 lg:flex-row lg:gap-12">
            <div className="w-full flex-1 text-center lg:text-right">
              <p className="label-brand">اپلیکیشن اندروید</p>
              <h2 id="download-heading" className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
                ادکسپلور را روی گوشی نصب کنید
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-muted sm:text-lg lg:mx-0">
                اپلیکیشن اندروید ادکسپلور را می‌توانید از کافه‌بازار و مایکت دریافت کنید.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
                {stores.map((store) => (
                  <a
                    key={store.name}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`دانلود ${siteConfig.name} از ${store.name}`}
                    className="inline-flex transition hover:opacity-90"
                  >
                    <Image
                      src={store.src}
                      alt={store.alt}
                      width={294}
                      height={88}
                      className="h-auto w-[min(100%,180px)] sm:w-[200px]"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full max-w-sm shrink-0 rounded-2xl border border-border bg-surface p-5">
              <div className="flex items-center gap-3">
                <LogoMark className="h-11 w-11 shrink-0" />
                <div className="text-right">
                  <p className="font-extrabold text-navy">{siteConfig.name}</p>
                  <p className="mt-0.5 text-sm text-muted">اندروید · رایگان</p>
                </div>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-3">
                {specs.map((item) => (
                  <div key={item.label}>
                    <dt className="text-[11px] font-medium text-muted">{item.label}</dt>
                    <dd className="mt-0.5 text-sm font-bold text-navy">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-muted" dir="ltr">
                {siteConfig.android.packageId}
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <li key={item.title} className="rounded-2xl border border-border bg-white p-5">
              <h3 className="font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
