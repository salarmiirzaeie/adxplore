import type { BlogPost } from "@/lib/content/types";
import Link from "next/link";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="card-elevated group rounded-2xl p-6">
      <div className="flex items-center gap-3 text-xs text-muted">
        <span className="rounded-full bg-purple/10 px-2.5 py-1 font-medium text-purple">
          {post.category}
        </span>
        <span>{post.readingTime} دقیقه مطالعه</span>
      </div>
      <h2 className="mt-4 text-lg font-bold text-navy transition group-hover:text-purple">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="mt-2 text-sm leading-7 text-muted">{post.description}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-flex text-sm font-semibold text-purple transition hover:text-purple-deep"
      >
        ادامه مطلب ←
      </Link>
    </article>
  );
}
