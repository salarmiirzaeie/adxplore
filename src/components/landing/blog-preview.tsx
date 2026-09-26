import Link from "next/link";
import type { BlogPost } from "@/lib/content/types";
import { PostCard } from "@/components/blog/post-card";

export function BlogPreview({ posts }: { posts: BlogPost[] }) {
  const latest = posts.slice(0, 3);

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="border-t border-border bg-surface px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="label-brand">مجله ادکسپلور</p>
            <h2
              id="blog-heading"
              className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl"
            >
              راهنمای تبلیغات اینستاگرام و بازاریابی اینفلوئنسر
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              مقاله‌هایی درباره تبلیغات اینستاگرام، انتخاب بلاگر، قیمت همکاری و
              اجرای کمپین برای برند و اینفلوئنسر.
            </p>
          </div>
          <Link
            href="/blog"
            className="btn-primary shrink-0 rounded-xl px-5 py-2.5 text-sm font-bold"
          >
            همه مقالات
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
