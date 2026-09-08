import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "صفحه پیدا نشد",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <p className="text-sm font-bold text-purple">۴۰۴</p>
        <h1 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">صفحه پیدا نشد</h1>
        <p className="mt-4 max-w-lg text-muted">صفحه‌ای که دنبال آن بودید وجود ندارد یا منتقل شده است.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={siteConfig.links.app}
            rel="noopener noreferrer"
            className="btn-primary rounded-xl px-5 py-2.5 text-sm font-bold"
          >
            ورود / ثبت نام
          </a>
          <Link href="/" className="btn-navy rounded-xl px-5 py-2.5 text-sm font-bold">
            بازگشت به خانه
          </Link>
          <Link href="/blog" className="rounded-xl border border-border px-5 py-2.5 text-sm font-bold text-navy">
            مجله
          </Link>
        </div>
        <p className="mt-8 text-xs text-muted">{siteConfig.name} — adxplore.ir</p>
      </main>
      <Footer />
    </>
  );
}
