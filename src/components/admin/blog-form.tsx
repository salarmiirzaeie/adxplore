"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { slugify } from "@/lib/blog/utils";

type SectionDraft = {
  heading: string;
  paragraphs: string;
  list: string;
};

const emptySection = (): SectionDraft => ({
  heading: "",
  paragraphs: "",
  list: "",
});

export function BlogForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("راهنما");
  const [keywords, setKeywords] = useState("");
  const [sections, setSections] = useState<SectionDraft[]>([emptySection()]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateSection(index: number, field: keyof SectionDraft, value: string) {
    setSections((current) =>
      current.map((section, i) => (i === index ? { ...section, [field]: value } : section)),
    );
  }

  function addSection() {
    setSections((current) => [...current, emptySection()]);
  }

  function removeSection(index: number) {
    setSections((current) => current.filter((_, i) => i !== index));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      slug: slug.trim(),
      title: title.trim(),
      description: description.trim(),
      category: category.trim(),
      keywords: keywords.split(",").map((item) => item.trim()).filter(Boolean),
      sections: sections.map((section) => ({
        heading: section.heading.trim() || undefined,
        paragraphs: section.paragraphs
          .split("\n")
          .map((item) => item.trim())
          .filter(Boolean),
        list: section.list
          .split("\n")
          .map((item) => item.trim())
          .filter(Boolean),
      })),
    };

    try {
      const response = await fetch("/api/admin/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string; slug?: string };

      if (!response.ok) {
        setError(result.error ?? "ذخیره ناموفق بود.");
        return;
      }

      router.push("/admin/blog");
      router.refresh();
    } catch {
      setError("اتصال برقرار نشد.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="blog-title" className="mb-2 block text-sm font-semibold text-navy">
            عنوان
          </label>
          <input
            id="blog-title"
            required
            disabled={loading}
            value={title}
            onChange={(event) => {
              const value = event.target.value;
              setTitle(value);
              if (!slug) setSlug(slugify(value));
            }}
            className="input-brand"
          />
        </div>

        <div>
          <label htmlFor="blog-slug" className="mb-2 block text-sm font-semibold text-navy">
            اسلاگ (انگلیسی)
          </label>
          <input
            id="blog-slug"
            required
            disabled={loading}
            value={slug}
            onChange={(event) => setSlug(slugify(event.target.value))}
            className="input-brand"
            dir="ltr"
            placeholder="my-new-post"
          />
        </div>

        <div>
          <label htmlFor="blog-category" className="mb-2 block text-sm font-semibold text-navy">
            دسته‌بندی
          </label>
          <input
            id="blog-category"
            required
            disabled={loading}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="input-brand"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="blog-description" className="mb-2 block text-sm font-semibold text-navy">
            توضیح کوتاه (SEO)
          </label>
          <textarea
            id="blog-description"
            required
            disabled={loading}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={3}
            className="input-brand min-h-24 resize-y"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="blog-keywords" className="mb-2 block text-sm font-semibold text-navy">
            کلمات کلیدی (با ویرگول جدا کنید)
          </label>
          <input
            id="blog-keywords"
            disabled={loading}
            value={keywords}
            onChange={(event) => setKeywords(event.target.value)}
            className="input-brand"
            placeholder="تبلیغات اینستاگرام, بازاریابی اینفلوئنسر"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-navy">بخش‌های محتوا</h2>
          <button
            type="button"
            onClick={addSection}
            disabled={loading}
            className="rounded-xl border border-border px-4 py-2 text-sm font-semibold text-navy hover:bg-surface"
          >
            + بخش جدید
          </button>
        </div>

        {sections.map((section, index) => (
          <div key={index} className="rounded-2xl border border-border bg-surface p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-bold text-navy">بخش {index + 1}</p>
              {sections.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSection(index)}
                  disabled={loading}
                  className="text-sm text-red-600"
                >
                  حذف
                </button>
              )}
            </div>

            <div className="space-y-3">
              <input
                disabled={loading}
                value={section.heading}
                onChange={(event) => updateSection(index, "heading", event.target.value)}
                placeholder="عنوان بخش (اختیاری)"
                className="input-brand"
              />
              <textarea
                disabled={loading}
                value={section.paragraphs}
                onChange={(event) => updateSection(index, "paragraphs", event.target.value)}
                placeholder="هر پاراگراف در یک خط جدا"
                rows={4}
                className="input-brand min-h-28 resize-y"
              />
              <textarea
                disabled={loading}
                value={section.list}
                onChange={(event) => updateSection(index, "list", event.target.value)}
                placeholder="لیست (هر مورد در یک خط جدا — اختیاری)"
                rows={3}
                className="input-brand min-h-20 resize-y"
              />
            </div>
          </div>
        ))}
      </div>

      {error && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary rounded-xl px-6 py-3.5 text-base font-bold disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "در حال انتشار..." : "انتشار مقاله"}
      </button>
    </form>
  );
}
