import { buildPageMetadata } from "@/lib/seo/metadata";
import { blogPosts } from "@/lib/content/blog/posts";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Audiences } from "@/components/landing/audiences";
import { HowItWorks } from "@/components/landing/how-it-works";
import { EscrowValue } from "@/components/landing/escrow-value";
import { AppDownload } from "@/components/landing/app-download";
import { BlogPreview } from "@/components/landing/blog-preview";
import { SeoTopics } from "@/components/landing/seo-topics";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { faqItems } from "@/lib/content/faq";
import {
  JsonLd,
  faqJsonLd,
  organizationJsonLd,
  mobileApplicationJsonLd,
  webApplicationJsonLd,
  webSiteJsonLd,
} from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  title: "پلتفرم تبلیغات اینستاگرام برای برند و اینفلوئنسر",
  description:
    "ادکسپلور پلتفرم همکاری مستقیم برند و اینفلوئنسر در اینستاگرام است. کسب‌وکار کمپین می‌سازد و تبلیغ می‌گیرد؛ اینفلوئنسر پیشنهاد می‌دهد، منتشر می‌کند و درآمدش را می‌گیرد.",
  path: "/",
  keywords: [
    "پلتفرم امن تبلیغات اینستاگرام",
    "تبلیغات اینستاگرام بی‌واسطه",
    "پرداخت اسکرو اینفلوئنسر",
    "همکاری برند و بلاگر",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={webSiteJsonLd()} />
      <JsonLd data={webApplicationJsonLd()} />
      <JsonLd data={mobileApplicationJsonLd()} />
      <JsonLd data={faqJsonLd(faqItems)} />

      <Header />
      <main id="main-content">
        <Hero />
        <Audiences />
        <HowItWorks />
        <EscrowValue />
        <AppDownload />
        <BlogPreview posts={blogPosts} />
        <Faq />
        <SeoTopics />
      </main>
      <Footer />
    </>
  );
}
