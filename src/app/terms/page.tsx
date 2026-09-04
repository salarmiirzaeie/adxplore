import { LegalPage } from "@/components/legal/legal-page";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  title: "قوانین و مقررات",
  description:
    "قوانین استفاده از وب‌سایت ادکسپلور: محتوا، مالکیت معنوی و مسئولیت‌های کاربران.",
  path: "/terms",
  keywords: ["قوانین ادکسپلور", "شرایط استفاده"],
});

const sections = [
  {
    heading: "پذیرش شرایط",
    paragraphs: [
      "با استفاده از وب‌سایت ادکسپلور، این قوانین را می‌پذیرید. اگر با بخشی از شرایط موافق نیستید، لطفاً از سایت استفاده نکنید.",
    ],
  },
  {
    heading: "خدمات فعلی",
    paragraphs: [
      "ادکسپلور شامل وب‌سایت محتوایی adxplore.ir و پنل محصول در app.adxplore.ir است. برندها و اینفلوئنسرها می‌توانند با شماره موبایل وارد پنل شوند، کمپین بسازند یا پیشنهاد همکاری ثبت کنند.",
      "شرایط کامل استفاده از پنل در app.adxplore.ir/terms منتشر شده است.",
    ],
  },
  {
    heading: "محتوا و مالکیت معنوی",
    list: [
      "محتوای مجله و راهنماها متعلق به ادکسپلور است",
      "بازنشر بدون ذکر منبع مجاز نیست",
      "کاربران باید در استفاده از محتوا قوانین جمهوری اسلامی ایران را رعایت کنند",
    ],
    paragraphs: [],
  },
  {
    heading: "محدودیت مسئولیت",
    paragraphs: [
      "راهنماها جنبه آموزشی دارند و جایگزین مشاوره تخصصی کسب‌وکار نیستند. ادکسپلور تلاش می‌کند محتوا دقیق باشد، اما تضمینی برای نتایج کمپین‌های تبلیغاتی ارائه نمی‌دهد.",
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
          description: "شرایط استفاده از وب‌سایت ادکسپلور",
          path: "/terms",
        })}
      />
      <LegalPage
        title="قوانین و مقررات"
        description="این صفحه شرایط استفاده از وب‌سایت و محتوای ادکسپلور را توضیح می‌دهد."
        breadcrumbLabel="قوانین"
        sections={sections}
      />
    </>
  );
}
