import { LegalPage } from "@/components/legal/legal-page";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  title: "حریم خصوصی",
  description:
    "سیاست حریم خصوصی ادکسپلور درباره استفاده از وب‌سایت، کوکی‌ها و ارتباط با پشتیبانی.",
  path: "/privacy",
  keywords: ["حریم خصوصی ادکسپلور", "سیاست حفظ حریم خصوصی"],
});

const sections = [
  {
    heading: "چه اطلاعاتی جمع‌آوری می‌کنیم؟",
    paragraphs: [
      "اگر از طریق ایمیل، تلفن یا شبکه‌های اجتماعی با ما تماس بگیرید، فقط اطلاعات ارتباطی که خودتان ارسال می‌کنید دریافت می‌شود.",
      "برای استفاده از پنل ادکسپلور (app.adxplore.ir) شماره موبایل، نقش حساب (برند یا اینفلوئنسر) و اطلاعات پروفایلی که خودتان وارد می‌کنید جمع‌آوری می‌شود تا ورود، اجرای کمپین و پشتیبانی ممکن باشد.",
    ],
  },
  {
    heading: "چگونه از اطلاعات استفاده می‌کنیم؟",
    list: [
      "پاسخ به پیام‌ها و درخواست‌های پشتیبانی",
      "ارائه خدمات پنل (ورود، کمپین، همکاری و پرداخت امن)",
      "بهبود محتوای راهنماها و مجله",
      "رعایت الزامات قانونی در صورت نیاز",
    ],
    paragraphs: [],
  },
  {
    heading: "کوکی‌ها و تحلیل",
    paragraphs: [
      "ممکن است از ابزارهای استاندارد تحلیلی یا تأیید مالکیت دامنه (مثل Google Search Console) استفاده کنیم. این ابزارها برای بهبود تجربه و اندازه‌گیری بازدید سایت به‌کار می‌روند.",
    ],
  },
  {
    heading: "حقوق شما",
    paragraphs: [
      "می‌توانید درخواست مشاهده یا حذف اطلاعات ارتباطی خود را از طریق ایمیل پشتیبانی ارسال کنید.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "خانه", path: "/" },
          { name: "حریم خصوصی", path: "/privacy" },
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          title: "حریم خصوصی ادکسپلور",
          description: "سیاست حریم خصوصی پلتفرم ادکسپلور",
          path: "/privacy",
        })}
      />
      <LegalPage
        title="حریم خصوصی"
        description="در ادکسپلور حفظ حریم خصوصی کاربران اولویت دارد. این صفحه توضیح می‌دهد چه داده‌هایی ممکن است جمع‌آوری شود و چگونه استفاده می‌شود."
        breadcrumbLabel="حریم خصوصی"
        sections={sections}
      />
    </>
  );
}
