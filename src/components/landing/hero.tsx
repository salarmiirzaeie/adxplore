import { siteConfig } from "@/lib/site";
import { RegistrationForm } from "@/components/landing/registration-form";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-brand-hero bg-brand-mesh relative overflow-hidden px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-purple/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-purple-deep/30 blur-[80px] animate-pulse-glow"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-purple-soft backdrop-blur-sm">
            <span
              className="h-1.5 w-1.5 rounded-full bg-purple shadow-[0_0_8px_#7C3AED]"
              aria-hidden
            />
            پلتفرم DIY تبلیغات اینستاگرام · بدون واسطه
          </p>

          <h1
            id="hero-heading"
            className="text-3xl font-extrabold leading-[1.35] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
          >
            <span className="text-gradient">{siteConfig.name}</span>
            <span className="mx-2 text-white/30" aria-hidden>
              |
            </span>
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300/90 sm:text-lg">
            {siteConfig.description}
          </p>

          <ul className="mt-10 flex flex-wrap gap-3">
            {[
              { label: "کارمزد آژانس", value: "۰٪" },
              { label: "پرداخت", value: "امن (اسکرو)" },
              { label: "تمرکز", value: "اینستاگرام" },
            ].map((item) => (
              <li key={item.label} className="card-dark rounded-xl px-4 py-3">
                <span className="block text-[11px] font-medium text-slate-400">
                  {item.label}
                </span>
                <span className="text-sm font-bold text-white">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <RegistrationForm id="register" />
      </div>
    </section>
  );
}
