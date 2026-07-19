import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { PostCard } from "@/components/blog/post-card";
import { getAllPublishedPosts } from "@/lib/blog/repository";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  title: "مجله تبلیغات اینستاگرام و بازاریابی اینفلوئنسر",
  description:
    "مقالات تخصصی ادکسپلور درباره تبلیغات اینستاگرام، بازاریابی اینفلوئنسر، انتخاب بلاگر، قیمت‌گذاری و اجرای کمپین در ایران.",
  path: "/blog",
  keywords: [
    "مقالات تبلیغات اینستاگرام",
    "بلاگ اینفلوئنسر مارکتینگ",
    "راهنمای تبلیغات اینستاگرام",
  ],
});

export default async function BlogIndexPage() {
  const blogPosts = await getAllPublishedPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "خانه", path: "/" },
          { name: "مجله", path: "/blog" },
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          title: "مجله ادکسپلور",
          description: "مقالات تخصصی تبلیغات اینستاگرام",
          path: "/blog",
        })}
      />

      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs
          items={[{ label: "خانه", href: "/" }, { label: "مجله" }]}
        />
        <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">
          مجله ادکسپلور — تبلیغات اینستاگرام و بازاریابی اینفلوئنسر
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          راهنماهای تخصصی برای برندها و بلاگرها: از انتخاب اینفلوئنسر تا اجرای
          کمپین و پرداخت امن.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
