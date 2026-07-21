import { siteConfig } from "@/lib/site";
import { HeroPhoneMock } from "@/components/landing/hero-phone-mock";

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

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-10">
        <div className="text-center lg:text-right">
          <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-purple-soft backdrop-blur-sm">
            <span
              className="h-1.5 w-1.5 rounded-full bg-purple shadow-[0_0_8px_#7C3AED]"
              aria-hidden
            />
            پلتفرم DIY تبلیغات اینستاگرام · بدون واسطه
          </p>

          <h1
            id="hero-heading"
            className="text-[1.75rem] font-extrabold leading-[1.35] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
          >
            <span className="text-gradient">{siteConfig.name}</span>
            <span className="mx-2 text-white/30" aria-hidden>
              |
            </span>
            {siteConfig.tagline}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300/90 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
            {siteConfig.description}
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3 lg:justify-start">
            {[
              { label: "کارمزد آژانس", value: "۰٪" },
              { label: "پرداخت", value: "امن (اسکرو)" },
              { label: "تمرکز", value: "اینستاگرام" },
            ].map((item) => (
              <li key={item.label} className="card-dark rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3">
                <span className="block text-[10px] font-medium text-slate-400 sm:text-[11px]">
                  {item.label}
                </span>
                <span className="text-sm font-bold text-white">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroPhoneMock />
        </div>
      </div>
    </section>
  );
}
