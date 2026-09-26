import { siteConfig } from "@/lib/site";
import { MarketplaceBoard } from "@/components/landing/marketplace-board";
import { PanelLink } from "@/components/landing/panel-link";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-brand-hero bg-brand-mesh relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-18"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-purple/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-purple-deep/30 blur-[80px] animate-pulse-glow"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
        <div className="text-center lg:text-right">
          <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-purple-soft backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_#34D399]" aria-hidden />
            همکاری مستقیم در اینستاگرام، بدون آژانس
          </p>

          <h1
            id="hero-heading"
            className="text-[1.85rem] font-extrabold leading-[1.45] tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.4]"
          >
            برند تبلیغ می‌گیرد و اینفلوئنسر از همان همکاری{" "}
            <span className="text-gradient">درآمد دارد</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-slate-300 sm:text-base lg:mx-0 lg:text-lg">
            کسب‌وکارها در {siteConfig.name} کمپین می‌سازند و تبلیغ اینستاگرام می‌گیرند. اینفلوئنسرها همان کمپین را می‌بینند، پیشنهاد می‌دهند و بعد از انتشار، درآمدشان را دریافت می‌کنند.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <PanelLink>برند هستم</PanelLink>
            <PanelLink variant="outline">اینفلوئنسر هستم</PanelLink>
          </div>

          <p className="mt-4 text-xs leading-6 text-slate-400">
            ثبت‌نام رایگان است. در پنل نوع حساب را انتخاب می‌کنید و با شماره موبایل وارد می‌شوید.
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3 lg:justify-start">
            {[
              { label: "برند", value: "کمپین و تبلیغ" },
              { label: "اینفلوئنسر", value: "پیشنهاد و درآمد" },
              { label: "پرداخت", value: "امن تا انتشار" },
            ].map((item) => (
              <li key={item.label} className="card-dark rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3">
                <span className="block text-[10px] font-medium text-slate-400 sm:text-[11px]">{item.label}</span>
                <span className="text-sm font-bold text-white">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <MarketplaceBoard />
        </div>
      </div>
    </section>
  );
}
