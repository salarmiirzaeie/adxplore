import { PanelLink } from "@/components/landing/panel-link";

const audiences = [
  {
    id: "for-brands",
    kicker: "اگر برند هستید",
    title: "کمپین بسازید و تبلیغ بگیرید",
    lede: "لازم نیست کار را به آژانس بسپارید. خودتان کمپین را تعریف می‌کنید، بلاگر مناسب را پیدا می‌کنید و بعد از انتشار، نتیجه را تأیید می‌کنید.",
    points: [
      "هدف، بودجه، زمان‌بندی و بریف کمپین را مشخص کنید.",
      "بلاگر را دعوت کنید، یا پیشنهادهایی را که برایتان می‌آید بررسی کنید.",
      "وقتی پست منتشر شد آن را تأیید کنید تا مبلغ به بلاگر پرداخت شود.",
    ],
    cta: "ورود برندها",
    variant: "primary" as const,
    tone: "light" as const,
  },
  {
    id: "for-influencers",
    kicker: "اگر اینفلوئنسر هستید",
    title: "با تبلیغ، درآمد داشته باشید",
    lede: "کمپین‌های باز را می‌بینید. اگر به حوزه پیج‌تان بخورد پیشنهاد می‌دهید، محتوا را منتشر می‌کنید و دستمزدتان را می‌گیرید.",
    points: [
      "کمپین‌ها را بر اساس حوزه فعالیت و نوع محتوا ببینید.",
      "دعوت برند را بپذیرید، یا خودتان پیشنهاد همکاری بفرستید.",
      "بعد از انتشار و تأیید برند، مبلغ به کیف پولتان واریز می‌شود.",
    ],
    cta: "ورود اینفلوئنسرها",
    variant: "ghost" as const,
    tone: "dark" as const,
  },
] as const;

export function Audiences() {
  return (
    <section aria-labelledby="audiences-heading" className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-brand">برای هر دو طرف</p>
          <h2 id="audiences-heading" className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            ادکسپلور برای برند و اینفلوئنسر
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            کسب‌وکارها برای تبلیغ می‌آیند و اینفلوئنسرها برای همکاری و درآمد. هر دو یک کمپین را می‌بینند و پول تا پایان کار پیش ادکسپلور می‌ماند.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {audiences.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className={
                item.tone === "dark"
                  ? "bg-brand-hero relative scroll-mt-24 overflow-hidden rounded-3xl p-7 sm:p-9"
                  : "card-elevated scroll-mt-24 rounded-3xl p-7 sm:p-9"
              }
            >
              <p className={item.tone === "dark" ? "label-brand text-purple-muted" : "label-brand"}>{item.kicker}</p>
              <h3 className={`mt-3 text-2xl font-extrabold sm:text-3xl ${item.tone === "dark" ? "text-white" : "text-navy"}`}>
                {item.title}
              </h3>
              <p className={`mt-3 text-sm leading-7 sm:text-base sm:leading-8 ${item.tone === "dark" ? "text-slate-300" : "text-muted"}`}>
                {item.lede}
              </p>
              <ul className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className={`flex gap-3 text-sm leading-7 ${item.tone === "dark" ? "text-slate-200" : "text-navy"}`}
                  >
                    <span
                      aria-hidden
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${item.tone === "dark" ? "bg-accent" : "bg-purple"}`}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PanelLink variant={item.variant}>{item.cta}</PanelLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
