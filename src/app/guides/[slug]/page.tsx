import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ContentRenderer } from "@/components/blog/content-renderer";
import {
  getAllGuideSlugs,
  getGuide,
} from "@/lib/content/guides";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/lib/seo/json-ld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return buildPageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    keywords: guide.keywords,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: guide.title,
          description: guide.description,
          path: `/guides/${guide.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "خانه", path: "/" },
          { name: "راهنماها", path: "/guides" },
          { name: guide.title, path: `/guides/${guide.slug}` },
        ])}
      />

      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs
          items={[
            { label: "خانه", href: "/" },
            { label: "راهنماها", href: "/guides" },
            { label: guide.title },
          ]}
        />

        <h1 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
          {guide.h1}
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">{guide.intro}</p>

        <div className="mt-10">
          <ContentRenderer sections={guide.sections} />
        </div>

        <aside className="mt-12 rounded-2xl border border-purple/20 bg-surface p-8 text-center">
          <p className="text-lg font-bold text-navy">{guide.cta}</p>
          <Link
            href="/guides"
            className="btn-primary mt-5 inline-block rounded-xl px-6 py-3 text-sm font-bold"
          >
            مشاهده همه راهنماها
          </Link>
        </aside>
      </main>
      <Footer />
    </>
  );
}
