import { PanelLink } from "@/components/landing/panel-link";

const steps = [
  {
    step: "۱",
    title: "ساخت کمپین",
    description:
      "هدف، بودجه، زمان‌بندی و بریف کمپین را تعریف کنید. همه‌چیز در یک داشبورد شفاف و آماده اجرا.",
  },
  {
    step: "۲",
    title: "اینوایت اینفلوئنسرها",
    description:
      "بلاگرهای مناسب را از دایرکتوری پیدا کنید و مستقیماً به کمپین دعوت کنید — بدون واسطه آژانس.",
  },
  {
    step: "۳",
    title: "چت و مذاکره",
    description:
      "با بلاگر گفتگو کنید، سناریو را نهایی کنید و شرایط همکاری را مستقیم و شفاف توافق کنید.",
  },
  {
    step: "۴",
    title: "پرداخت امن و آزادسازی",
    description:
      "وجه در حساب امانی (Escrow) نگه داشته می‌شود و پس از انتشار و تایید شما، به بلاگر آزاد می‌شود.",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="bg-brand-section border-t border-border px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-brand">فرایند همکاری</p>
          <h2
            id="how-heading"
            className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl"
          >
            چگونه کار می‌کند؟
          </h2>
          <p className="mt-4 text-lg text-muted">
            چهار قدم ساده از ساخت کمپین تا پرداخت امن — مستقیم، شفاف و بدون واسطه.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div
            aria-hidden
            className="absolute top-12 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-l from-transparent via-purple/30 to-transparent xl:block"
          />

          {steps.map((item) => (
            <li key={item.step} className="card-elevated relative rounded-2xl p-7">
              <span
                aria-hidden
                className="btn-primary inline-flex h-11 w-11 items-center justify-center rounded-xl text-sm font-extrabold"
              >
                {item.step}
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <PanelLink>ورود به پنل و شروع همکاری</PanelLink>
        </div>
      </div>
    </section>
  );
}
