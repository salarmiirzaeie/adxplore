import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ContentRenderer } from "@/components/blog/content-renderer";
import { RelatedPosts } from "@/components/blog/related-posts";
import {
  getAllBlogSlugs,
  getBlogPost,
} from "@/lib/content/blog/posts";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  JsonLd,
  articleJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo/json-ld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    imageAlt: post.title,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "خانه", path: "/" },
          { name: "مجله", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <Header />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs
          items={[
            { label: "خانه", href: "/" },
            { label: "مجله", href: "/blog" },
            { label: post.title },
          ]}
        />

        <header>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="rounded-full bg-purple/10 px-3 py-1 font-medium text-purple">
              {post.category}
            </span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("fa-IR")}
            </time>
            <span>{post.readingTime} دقیقه مطالعه</span>
          </div>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted">{post.description}</p>
        </header>

        <div className="mt-10">
          <ContentRenderer sections={post.sections} />
        </div>

        <aside className="mt-12 rounded-2xl border border-purple/20 bg-purple/5 p-6">
          <p className="font-bold text-navy">بیشتر بدانید</p>
          <p className="mt-2 text-sm text-muted">
            راهنماهای تخصصی ادکسپلور برای ساخت کمپین تبلیغات اینستاگرام و همکاری
            با بلاگر.
          </p>
          <Link
            href="/guides"
            className="btn-primary mt-4 inline-block rounded-xl px-5 py-2.5 text-sm font-bold"
          >
            مشاهده راهنماها
          </Link>
        </aside>

        <RelatedPosts currentSlug={post.slug} category={post.category} />
      </article>
      <Footer />
    </>
  );
}
