import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "@/components/admin/login-form";
import { Logo } from "@/components/brand/logo";

export const metadata: Metadata = {
  title: "ورود به پنل",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-border bg-white p-8 shadow-sm">
        <div className="mb-8 flex justify-center">
          <Logo variant="icon" className="h-12 w-12" />
        </div>
        <h1 className="text-center text-2xl font-extrabold text-navy">ورود به پنل مدیریت</h1>
        <p className="mt-2 text-center text-sm text-muted">فقط برای مدیران ادکسپلور</p>
        <div className="mt-8">
          <Suspense fallback={<p className="text-center text-sm text-muted">در حال بارگذاری...</p>}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
