import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageSeoOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  imageAlt?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
  imageAlt,
}: PageSeoOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const allKeywords = [...new Set([...siteConfig.keywords, ...keywords])];

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: path,
      languages: { "fa-IR": path },
    },
    openGraph: {
      type: type === "article" ? "article" : "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.nameEn,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: imageAlt ?? `${siteConfig.name} — ${title}`,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path}`;
}
