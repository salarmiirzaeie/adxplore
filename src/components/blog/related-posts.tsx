import Link from "next/link";
import { PostCard } from "@/components/blog/post-card";
import { getAllPublishedPosts } from "@/lib/blog/repository";

type RelatedPostsProps = {
  currentSlug: string;
  category: string;
};

export async function RelatedPosts({ currentSlug, category }: RelatedPostsProps) {
  const posts = await getAllPublishedPosts();
  const sameCategory = posts.filter((post) => post.slug !== currentSlug && post.category === category);
  const others = posts.filter((post) => post.slug !== currentSlug && post.category !== category);
  const related = [...sameCategory, ...others].slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-14 border-t border-border pt-10">
      <h2 className="text-xl font-extrabold text-navy">مقالات مرتبط</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
