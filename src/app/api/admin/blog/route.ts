import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/require-admin";
import { estimateReadingTime } from "@/lib/blog/utils";
import { connectMongo } from "@/lib/db/mongodb";
import { BlogPostModel } from "@/lib/db/models/blog-post";
import type { ContentSection } from "@/lib/content/types";

function parseSections(input: unknown): ContentSection[] | null {
  if (!Array.isArray(input)) return null;

  const sections: ContentSection[] = [];

  for (const item of input) {
    if (!item || typeof item !== "object") return null;

    const section = item as Record<string, unknown>;
    const heading = typeof section.heading === "string" ? section.heading.trim() : undefined;
    const paragraphs = Array.isArray(section.paragraphs)
      ? section.paragraphs.map((p) => String(p).trim()).filter(Boolean)
      : [];
    const list = Array.isArray(section.list)
      ? section.list.map((p) => String(p).trim()).filter(Boolean)
      : undefined;

    if (!heading && paragraphs.length === 0 && (!list || list.length === 0)) {
      continue;
    }

    sections.push({
      heading: heading || undefined,
      paragraphs,
      list: list && list.length > 0 ? list : undefined,
    });
  }

  return sections.length > 0 ? sections : null;
}

export async function GET() {
  const auth = await requireAdmin();
  if (!auth.authorized) return auth.response;

  try {
    await connectMongo();
    const posts = await BlogPostModel.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Admin blog list error:", error);
    return NextResponse.json({ error: "خطای سرور." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const auth = await requireAdmin();
  if (!auth.authorized) return auth.response;

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const slug = typeof body.slug === "string" ? body.slug.trim() : "";
    const title = typeof body.title === "string" ? body.title.trim() : "";
    const description = typeof body.description === "string" ? body.description.trim() : "";
    const category = typeof body.category === "string" ? body.category.trim() : "";
    const keywords = Array.isArray(body.keywords)
      ? body.keywords.map((k) => String(k).trim()).filter(Boolean)
      : typeof body.keywords === "string"
        ? body.keywords.split(",").map((k) => k.trim()).filter(Boolean)
        : [];
    const sections = parseSections(body.sections);
    const readingTime =
      typeof body.readingTime === "number" && body.readingTime > 0
        ? body.readingTime
        : sections
          ? estimateReadingTime(sections)
          : 0;

    if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      return NextResponse.json({ error: "اسلاگ معتبر انگلیسی وارد کنید." }, { status: 400 });
    }
    if (!title) return NextResponse.json({ error: "عنوان الزامی است." }, { status: 400 });
    if (!description) return NextResponse.json({ error: "توضیح کوتاه الزامی است." }, { status: 400 });
    if (!category) return NextResponse.json({ error: "دسته‌بندی الزامی است." }, { status: 400 });
    if (!sections) return NextResponse.json({ error: "حداقل یک بخش محتوا لازم است." }, { status: 400 });

    const now = new Date().toISOString().slice(0, 10);

    await connectMongo();
    await BlogPostModel.create({
      slug,
      title,
      description,
      keywords,
      category,
      publishedAt: now,
      revisedAt: now,
      readingTime,
      sections,
      status: "published",
    });

    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);
    revalidatePath("/");
    revalidatePath("/feed.xml");
    revalidatePath("/sitemap.xml");

    return NextResponse.json({ success: true, slug });
  } catch (error) {
    if (
      error instanceof Error &&
      "code" in error &&
      (error as { code?: number }).code === 11000
    ) {
      return NextResponse.json({ error: "این اسلاگ قبلاً استفاده شده است." }, { status: 409 });
    }

    console.error("Admin blog create error:", error);
    return NextResponse.json({ error: "خطای سرور." }, { status: 500 });
  }
}
