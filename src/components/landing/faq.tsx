import { faqItems } from "@/lib/content/faq";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-border bg-surface-elevated px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="label-brand">پشتیبانی</p>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl"
          >
            سوالات پرتکرار
          </h2>
          <p className="mt-4 text-lg text-muted">
            پاسخ سوالاتی که قبل از شروع معمولاً مطرح می‌شود.
          </p>
        </div>

        <dl className="mt-12 space-y-3">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="card-elevated rounded-2xl p-6"
            >
              <dt className="text-base font-bold text-navy">{item.question}</dt>
              <dd className="mt-3 text-sm leading-7 text-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
