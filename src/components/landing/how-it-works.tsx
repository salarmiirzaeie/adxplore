import { PanelLink } from "@/components/landing/panel-link";

const steps = [
  {
    step: "۱",
    side: "کار برند",
    title: "ساخت کمپین",
    description:
      "برند هدف، بودجه، زمان‌بندی و بریف را مشخص می‌کند. اینفلوئنسرهای مرتبط همان کمپین را در پنل می‌بینند.",
  },
  {
    step: "۲",
    side: "دعوت یا پیشنهاد",
    title: "شروع همکاری",
    description:
      "برند می‌تواند بلاگر را دعوت کند. اینفلوئنسر هم می‌تواند خودش پیشنهاد همکاری بفرستد. واسطه‌ای در کار نیست.",
  },
  {
    step: "۳",
    side: "گفتگوی دو طرف",
    title: "توافق روی جزئیات",
    description: "نوع محتوا، زمان انتشار و مبلغ، در گفتگوی همان کمپین قطعی می‌شود.",
  },
  {
    step: "۴",
    side: "پرداخت امن",
    title: "انتشار و واریز درآمد",
    description:
      "اینفلوئنسر محتوا را منتشر می‌کند، برند آن را تأیید می‌کند و مبلغ از حساب امانی به کیف پول اینفلوئنسر واریز می‌شود.",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="cv-auto bg-brand-section border-t border-border px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-brand">نحوه همکاری</p>
          <h2 id="how-heading" className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            از ساخت کمپین تا دریافت پول
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            برند کمپین را می‌سازد و اینفلوئنسر آن را انجام می‌دهد. مبلغ تا زمان انتشار و تأیید، پیش ادکسپلور می‌ماند.
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
              <p className="mt-5 text-[11px] font-bold text-purple">{item.side}</p>
              <h3 className="mt-1 text-xl font-bold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <PanelLink>ورود / ثبت نام و شروع همکاری</PanelLink>
        </div>
      </div>
    </section>
  );
}
