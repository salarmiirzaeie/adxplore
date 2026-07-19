import { LegalPage } from "@/components/legal/legal-page";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  title: "قوانین و مقررات",
  description:
    "قوانین استفاده از پلتفرم ادکسپلور برای برندها و بلاگرها: شرایط ثبت‌نام، همکاری تبلیغاتی و مسئولیت‌های طرفین.",
  path: "/terms",
  keywords: ["قوانین ادکسپلور", "شرایط استفاده"],
});

const sections = [
  {
    heading: "پذیرش شرایط",
    paragraphs: [
      "با ثبت‌نام یا استفاده از خدمات ادکسپلور، این قوانین را می‌پذیرید. اگر با بخشی از شرایط موافق نیستید، لطفاً از ثبت‌نام خودداری کنید.",
    ],
  },
  {
    heading: "خدمات پلتفرم",
    paragraphs: [
      "ادکسپلور پلتفرمی برای اتصال مستقیم برندها و بلاگرها در حوزه تبلیغات اینستاگرام است. خدمات فعلی در مرحله ثبت‌نام اولیه و راه‌اندازی ارائه می‌شود.",
    ],
  },
  {
    heading: "مسئولیت کاربران",
    list: [
      "ارائه اطلاعات صحیح هنگام ثبت‌نام",
      "رعایت قوانین جمهوری اسلامی ایران و مقررات تبلیغات",
      "عدم سوءاستفاده از پلتفرم یا ارسال اطلاعات گمراه‌کننده",
      "رعایت حقوق مالکیت معنوی در محتوای تبلیغاتی",
    ],
    paragraphs: [],
  },
  {
    heading: "محدودیت مسئولیت",
    paragraphs: [
      "ادکسپلور تلاش می‌کند زیرساخت پایدار و امن ارائه دهد، اما مسئولیت محتوای منتشرشده توسط کاربران بر عهده همان کاربران است.",
      "جزئیات قراردادهای مالی و اجرای کمپین پس از راه‌اندازی کامل سرویس، در توافق‌نامه‌های جداگانه مشخص می‌شود.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "خانه", path: "/" },
          { name: "قوانین", path: "/terms" },
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          title: "قوانین ادکسپلور",
          description: "شرایط استفاده از پلتفرم ادکسپلور",
          path: "/terms",
        })}
      />
      <LegalPage
        title="قوانین و مقررات"
        description="این صفحه شرایط استفاده از خدمات ادکسپلور را برای برندها و بلاگرها توضیح می‌دهد."
        breadcrumbLabel="قوانین"
        sections={sections}
      />
    </>
  );
}
