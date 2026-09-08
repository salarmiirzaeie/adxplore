import { buildPageMetadata } from "@/lib/seo/metadata";
import { blogPosts } from "@/lib/content/blog/posts";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { EscrowValue } from "@/components/landing/escrow-value";
import { PanelCta } from "@/components/landing/panel-cta";
import { BlogPreview } from "@/components/landing/blog-preview";
import { SeoTopics } from "@/components/landing/seo-topics";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { faqItems } from "@/lib/content/faq";
import {
  JsonLd,
  faqJsonLd,
  organizationJsonLd,
  webApplicationJsonLd,
  webSiteJsonLd,
} from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  title: "پلتفرم امن و بی‌واسطه تبلیغات اینستاگرام",
  description:
    "ادکسپلور — پلتفرم امن و بی‌واسطه تبلیغات اینستاگرام. همکاری مستقیم صاحبان کسب‌وکار و بلاگرها، بدون ریسک پرداخت.",
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
      <JsonLd data={faqJsonLd(faqItems)} />

      <Header />
      <main id="main-content">
        <Hero />
        <HowItWorks />
        <EscrowValue />
        <PanelCta />
        <BlogPreview posts={blogPosts} />
        <Faq />
        <SeoTopics />
      </main>
      <Footer />
    </>
  );
}
