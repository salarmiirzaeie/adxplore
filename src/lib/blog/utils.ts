export function estimateReadingTime(sections: { paragraphs: string[]; list?: string[] }[]) {
  const text = sections
    .flatMap((section) => [...section.paragraphs, ...(section.list ?? [])])
    .join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 180));
}

export function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^\w\u0600-\u06FF\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
