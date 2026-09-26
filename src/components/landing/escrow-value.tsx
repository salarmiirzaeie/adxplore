import { PanelLink } from "@/components/landing/panel-link";

const valuePoints = [
  {
    title: "پرداخت امن (اسکرو)",
    description:
      "مبلغ تا انتشار پست و تأیید برند پیش ادکسپلور می‌ماند. بعد از تأیید، به اینفلوئنسر پرداخت می‌شود.",
  },
  {
    title: "بدون کارمزد آژانس",
    description: "بودجه برند صرف خود همکاری می‌شود و اینفلوئنسر همان مبلغی را می‌گیرد که روی آن توافق شده است.",
  },
  {
    title: "انتخاب بلاگر",
    description: "قبل از دعوت، نرخ تعامل، حوزه فعالیت و سابقه همکاری بلاگر را می‌بینید.",
  },
  {
    title: "درآمد شفاف",
    description: "قبل از قبول همکاری، بریف و شرایط را می‌بینید و بعد از تأیید، پول به کیف پولتان واریز می‌شود.",
  },
] as const;

export function EscrowValue() {
  return (
    <section
      id="security"
      aria-labelledby="security-heading"
      className="bg-brand-hero bg-brand-mesh relative overflow-hidden px-4 py-20 sm:px-6"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="label-brand text-purple-muted">امنیت و شفافیت</p>
            <h2 id="security-heading" className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              پرداخت امن، برای برند و اینفلوئنسر
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              مبلغ کمپین تا وقتی پست منتشر شود و برند آن را تأیید کند، پیش ادکسپلور می‌ماند. برند مطمئن است تبلیغ
              انجام شده و اینفلوئنسر مطمئن است دستمزدش پرداخت می‌شود.
            </p>

            <div className="card-dark mt-8 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-xl text-accent"
                >
                  ✓
                </span>
                <div>
                  <p className="text-lg font-bold text-white">۰٪ کارمزد آژانس</p>
                  <p className="mt-1 text-sm leading-7 text-slate-400">
                    پولی که توافق کرده‌اید بین برند و اینفلوئنسر جابه‌جا می‌شود. کارمزد آژانس و هزینه پنهانی در کار نیست.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <PanelLink>ورود / ثبت نام</PanelLink>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {valuePoints.map((point, i) => (
              <li key={point.title} className="card-dark rounded-2xl p-5 transition hover:border-purple/30">
                <span
                  aria-hidden
                  className="btn-primary inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold"
                >
                  {i + 1}
                </span>
                <h3 className="mt-3 font-bold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{point.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
