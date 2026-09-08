import { PanelLink } from "@/components/landing/panel-link";
import { siteConfig } from "@/lib/site";

const audiences = [
  {
    title: "برند هستم",
    description: "کمپین بسازید، بلاگر دعوت کنید و با پرداخت امن همکاری را اجرا کنید.",
  },
  {
    title: "اینفلوئنسر هستم",
    description: "کمپین‌ها را ببینید، پیشنهاد بدهید و بعد از تایید، مبلغ را در کیف پول دریافت کنید.",
  },
] as const;

export function PanelCta() {
  return (
    <section
      aria-labelledby="panel-cta-heading"
      className="border-t border-border bg-surface-elevated px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="card-elevated overflow-hidden rounded-3xl">
          <div className="bg-brand-hero bg-brand-mesh relative px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 top-8 h-48 w-48 rounded-full bg-purple/25 blur-[80px]"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div>
                <p className="label-brand text-purple-muted">پنل ادکسپلور</p>
                <h2 id="panel-cta-heading" className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                  همین حالا وارد پنل شوید
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  پنل برند و اینفلوئنسر روی{" "}
                  <span dir="ltr" className="font-semibold text-white">
                    {siteConfig.links.app.replace(/^https?:\/\//, "")}
                  </span>{" "}
                  فعال است. ورود با شماره موبایل، رایگان.
                </p>
                <div className="mt-8">
                  <PanelLink>ورود / ثبت نام</PanelLink>
                </div>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {audiences.map((item) => (
                  <li key={item.title}>
                    <a
                      href={siteConfig.links.app}
                      rel="noopener noreferrer"
                      className="card-dark block rounded-2xl p-5 transition hover:border-purple/40"
                    >
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{item.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
