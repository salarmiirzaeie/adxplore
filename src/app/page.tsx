import { buildPageMetadata } from "@/lib/seo/metadata";
import { blogPosts } from "@/lib/content/blog/posts";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { EscrowValue } from "@/components/landing/escrow-value";
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
  title: "پلتفرم هوشمند و بی‌واسطه تبلیغات اینستاگرام",
  description:
    "ادکسپلور — پلتفرم DIY تبلیغات اینستاگرام و بازاریابی اینفلوئنسر در ایران. بدون آژانس، مستقیماً با بلاگر همکاری کنید، کمپین بسازید و با پرداخت امن اجرا کنید.",
  path: "/",
  keywords: [
    "پلتفرم تبلیغات اینستاگرام ایران",
    "بهترین پلتفرم اینفلوئنسر",
    "تبلیغات اینستاگرام بدون واسطه",
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
        <BlogPreview posts={blogPosts} />
        <Faq />
        <SeoTopics />
      </main>
      <Footer />
    </>
  );
}
