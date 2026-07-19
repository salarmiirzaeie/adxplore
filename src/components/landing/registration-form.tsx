"use client";

import { FormEvent, useState } from "react";

export type RegistrationRole = "brand" | "influencer";

type RegistrationFormProps = {
  defaultRole?: RegistrationRole;
  id?: string;
};

export function RegistrationForm({
  defaultRole = "brand",
  id = "registration",
}: RegistrationFormProps) {
  const [role, setRole] = useState<RegistrationRole>(defaultRole);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload: Record<string, string> = {
      role,
      phone: String(formData.get("phone") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
    };

    if (role === "brand") {
      payload.brandName = String(formData.get("brandName") ?? "").trim();
      payload.niche = String(formData.get("niche") ?? "").trim();
    } else {
      payload.instagram = String(formData.get("instagram") ?? "").trim();
      payload.followers = String(formData.get("followers") ?? "").trim();
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(result.error ?? "خطایی رخ داد. لطفاً دوباره تلاش کنید.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("اتصال برقرار نشد. اتصال اینترنت را بررسی کنید.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="card-glass animate-fade-slide-in rounded-3xl p-8 text-center"
      >
        <div
          aria-hidden
          className="btn-primary mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
        >
          ✓
        </div>
        <p className="text-lg font-bold text-navy">ثبت‌نام اولیه شما انجام شد!</p>
        <p className="mt-2 text-sm leading-7 text-muted">
          تیم ادکسپلور به‌زودی برای فعال‌سازی حساب با شما تماس می‌گیرد.
        </p>
      </div>
    );
  }

  return (
    <div id={id} className="card-glass rounded-3xl p-6 sm:p-8">
      <div className="relative mb-6 grid grid-cols-2 gap-1 rounded-2xl bg-surface p-1.5">
        <div
          aria-hidden
          className={`absolute inset-y-1.5 w-[calc(50%-6px)] rounded-xl shadow-md transition-all duration-300 ease-out ${
            role === "brand" ? "btn-navy" : "btn-primary"
          }`}
          style={{
            transform:
              role === "brand"
                ? "translateX(0)"
                : "translateX(calc(-100% - 12px))",
            right: 0,
          }}
        />
        <button
          type="button"
          onClick={() => setRole("brand")}
          disabled={loading}
          className={`relative z-10 rounded-xl px-3 py-3 text-sm font-bold transition-colors duration-300 sm:text-[0.9rem] ${
            role === "brand" ? "text-white" : "text-muted hover:text-navy"
          }`}
        >
          ثبت‌نام به عنوان برند
        </button>
        <button
          type="button"
          onClick={() => setRole("influencer")}
          disabled={loading}
          className={`relative z-10 rounded-xl px-3 py-3 text-sm font-bold transition-colors duration-300 sm:text-[0.9rem] ${
            role === "influencer" ? "text-white" : "text-muted hover:text-navy"
          }`}
        >
          ثبت‌نام به عنوان بلاگر
        </button>
      </div>

      <form key={role} onSubmit={handleSubmit} className="animate-fade-slide-in space-y-4">
        {/* Honeypot — hidden from users, catches bots */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="pointer-events-none absolute h-0 w-0 opacity-0"
        />

        {role === "brand" ? (
          <>
            <div>
              <label htmlFor="brand-name" className="mb-2 block text-sm font-semibold text-navy">
                نام برند
              </label>
              <input
                id="brand-name"
                name="brandName"
                type="text"
                required
                disabled={loading}
                placeholder="مثال: برند زیبایی آرتین"
                className="input-brand"
              />
            </div>
            <div>
              <label htmlFor="niche" className="mb-2 block text-sm font-semibold text-navy">
                حوزه فعالیت (نیچ)
              </label>
              <input
                id="niche"
                name="niche"
                type="text"
                required
                disabled={loading}
                placeholder="مثال: زیبایی، فشن، فود، تکنولوژی"
                className="input-brand"
              />
            </div>
            <div>
              <label htmlFor="brand-phone" className="mb-2 block text-sm font-semibold text-navy">
                شماره تماس
              </label>
              <input
                id="brand-phone"
                name="phone"
                type="tel"
                required
                disabled={loading}
                dir="ltr"
                placeholder="0912 345 6789"
                className="input-brand text-left"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="instagram" className="mb-2 block text-sm font-semibold text-navy">
                آیدی اینستاگرام
              </label>
              <input
                id="instagram"
                name="instagram"
                type="text"
                required
                disabled={loading}
                dir="ltr"
                placeholder="@username"
                className="input-brand text-left"
              />
            </div>
            <div>
              <label htmlFor="followers" className="mb-2 block text-sm font-semibold text-navy">
                تعداد فالوور
              </label>
              <input
                id="followers"
                name="followers"
                type="number"
                required
                disabled={loading}
                min={0}
                dir="ltr"
                placeholder="25000"
                className="input-brand text-left"
              />
            </div>
            <div>
              <label
                htmlFor="influencer-phone"
                className="mb-2 block text-sm font-semibold text-navy"
              >
                شماره تماس
              </label>
              <input
                id="influencer-phone"
                name="phone"
                type="tel"
                required
                disabled={loading}
                dir="ltr"
                placeholder="0912 345 6789"
                className="input-brand text-left"
              />
            </div>
          </>
        )}

        {error && (
          <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full rounded-xl py-3.5 text-base font-bold disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "در حال ارسال..." : role === "brand" ? "ثبت‌نام برند" : "ثبت‌نام بلاگر"}
        </button>

        <p className="text-center text-xs leading-6 text-muted">
          ثبت‌نام اولیه رایگان است · بدون کارمزد پنهان آژانس
          <br />
          با ثبت‌نام،{" "}
          <a href="/privacy" className="font-semibold text-purple hover:underline">
            سیاست حریم خصوصی
          </a>{" "}
          و{" "}
          <a href="/terms" className="font-semibold text-purple hover:underline">
            قوانین
          </a>{" "}
          را می‌پذیرید.
        </p>
      </form>
    </div>
  );
}
