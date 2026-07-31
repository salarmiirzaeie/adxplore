export type ContentSection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
  links?: { href: string; label: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  sections: ContentSection[];
};

export type GuidePage = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  sections: ContentSection[];
  cta: string;
};
