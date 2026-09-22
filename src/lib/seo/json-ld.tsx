import { siteConfig } from "@/lib/site";
import type { BlogPost } from "@/lib/content/types";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.nameEn,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    sameAs: [siteConfig.links.instagram, siteConfig.links.telegram],
    areaServed: { "@type": "Country", name: "Iran" },
    knowsAbout: [
      "تبلیغات اینستاگرام",
      "بازاریابی اینفلوئنسر",
      "Influencer Marketing",
      "Instagram Advertising",
    ],
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.nameEn,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "fa-IR",
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
}

export function webApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    alternateName: siteConfig.nameEn,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IRR",
      description: "راهنماها و مقالات رایگان تبلیغات اینستاگرام",
    },
    description: siteConfig.description,
    inLanguage: "fa-IR",
    url: siteConfig.url,
    featureList: [
      "جستجو و فیلتر بلاگر",
      "مدیریت کمپین",
      "پرداخت امن (Escrow)",
      "چت مستقیم با بلاگر",
    ],
  };
}

export function mobileApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: `${siteConfig.name} | پلتفرم تبلیغات اینستاگرام`,
    alternateName: siteConfig.nameEn,
    operatingSystem: "Android",
    applicationCategory: "BusinessApplication",
    softwareVersion: siteConfig.android.version,
    fileSize: "2MB",
    inLanguage: "fa-IR",
    description:
      "اپلیکیشن اندروید ادکسپلور برای همکاری مستقیم برند و بلاگر: کشف اینفلوئنسر، دعوت به کمپین، چت و پرداخت امن.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IRR",
    },
    installUrl: [siteConfig.links.bazaar, siteConfig.links.myket],
    downloadUrl: siteConfig.links.bazaar,
    url: `${siteConfig.url}/#download`,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
}

export function faqJsonLd(
  items: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(
  items: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${siteConfig.url}/opengraph-image`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.svg` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    inLanguage: "fa-IR",
    keywords: post.keywords.join(", "),
    articleSection: post.category,
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${siteConfig.url}${path}`,
    inLanguage: "fa-IR",
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
