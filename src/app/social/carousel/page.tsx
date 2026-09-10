import { CarouselDownloadPanel } from "@/components/social/carousel-download-panel";
import { carouselSets } from "@/lib/social/carousel-slides";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "دانلود اسلاید اینستاگرام",
  robots: { index: false, follow: false },
};

export default function CarouselIndexPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 font-[family-name:var(--font-vazirmatn)]">
      <h1 className="text-2xl font-bold text-navy">اسلایدهای کاروسل اینستاگرام</h1>
      <p className="mt-3 text-muted">
        روی «دانلود PNG» بزنید — فایل ۱۰۸۰×۱۰۸۰ با فونت وزیرمتن و متن فارسی درست آماده
        می‌شود. بعد در اینستاگرام به‌عنوان کاروسل آپلود کنید. رایگان و با برند{" "}
        {siteConfig.name}.
      </p>

      <CarouselDownloadPanel sets={carouselSets} />
    </main>
  );
}
