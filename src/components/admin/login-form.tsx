"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(result.error ?? "ورود ناموفق بود.");
        return;
      }

      router.push(next);
      router.refresh();
    } catch {
      setError("اتصال برقرار نشد.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="admin-email" className="mb-2 block text-sm font-semibold text-navy">
          ایمیل
        </label>
        <input
          id="admin-email"
          type="email"
          required
          autoComplete="email"
          disabled={loading}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="input-brand"
          dir="ltr"
        />
      </div>

      <div>
        <label htmlFor="admin-password" className="mb-2 block text-sm font-semibold text-navy">
          رمز عبور
        </label>
        <input
          id="admin-password"
          type="password"
          required
          autoComplete="current-password"
          disabled={loading}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="input-brand"
          dir="ltr"
        />
      </div>

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
        {loading ? "در حال ورود..." : "ورود به پنل"}
      </button>
    </form>
  );
}
