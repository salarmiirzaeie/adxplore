import {
  blogPosts as staticPosts,
  getAllBlogSlugs as getStaticSlugs,
  getBlogPost as getStaticPost,
} from "@/lib/content/blog/posts";
import type { BlogPost } from "@/lib/content/types";
import { connectMongo } from "@/lib/db/mongodb";
import { BlogPostModel, type BlogPostDocument } from "@/lib/db/models/blog-post";

export { estimateReadingTime, slugify } from "@/lib/blog/utils";

function docToPost(doc: BlogPostDocument): BlogPost {
  return {
    slug: doc.slug,
    title: doc.title,
    description: doc.description,
    keywords: doc.keywords,
    category: doc.category,
    publishedAt: doc.publishedAt,
    updatedAt: doc.revisedAt,
    readingTime: doc.readingTime,
    sections: doc.sections.map((section) => ({
      heading: section.heading ?? undefined,
      paragraphs: section.paragraphs,
      list: section.list ?? undefined,
    })),
  };
}

function mergePosts(dbPosts: BlogPost[]) {
  const staticSlugs = new Set(staticPosts.map((post) => post.slug));
  const merged = [...staticPosts, ...dbPosts.filter((post) => !staticSlugs.has(post.slug))];

  return merged.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

async function getPublishedDbPosts() {
  try {
    await connectMongo();
    const docs = await BlogPostModel.find({ status: "published" }).lean<BlogPostDocument[]>();
    return docs.map(docToPost);
  } catch {
    return [];
  }
}

export async function getAllPublishedPosts() {
  const dbPosts = await getPublishedDbPosts();
  return mergePosts(dbPosts);
}

export async function getBlogPostBySlug(slug: string) {
  const staticPost = getStaticPost(slug);
  if (staticPost) return staticPost;

  try {
    await connectMongo();
    const doc = await BlogPostModel.findOne({ slug, status: "published" }).lean<BlogPostDocument>();
    return doc ? docToPost(doc) : null;
  } catch {
    return null;
  }
}

export async function getAllBlogSlugs() {
  const staticSlugs = getStaticSlugs();

  try {
    await connectMongo();
    const dbSlugs = await BlogPostModel.find({ status: "published" }).distinct("slug");
    const staticSet = new Set(staticSlugs);
    return [...staticSlugs, ...dbSlugs.filter((slug) => !staticSet.has(slug))];
  } catch {
    return staticSlugs;
  }
}

export async function getAllAdminBlogPosts() {
  try {
    await connectMongo();
    const docs = await BlogPostModel.find().sort({ createdAt: -1 }).lean<BlogPostDocument[]>();
    return docs.map(docToPost);
  } catch {
    return [];
  }
}
