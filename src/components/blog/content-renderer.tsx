import Link from "next/link";
import type { ContentSection } from "@/lib/content/types";

export function ContentRenderer({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="prose-content space-y-8">
      {sections.map((section, i) => (
        <div key={i}>
          {section.heading && (
            <h2 className="mb-4 text-xl font-bold text-navy sm:text-2xl">
              {section.heading}
            </h2>
          )}
          {section.paragraphs.map((p, j) => (
            <p key={j} className="mb-4 text-base leading-8 text-muted">
              {p}
            </p>
          ))}
          {section.list && (
            <ul className="mb-4 space-y-2">
              {section.list.map((item, k) => (
                <li
                  key={k}
                  className="flex gap-3 text-base leading-8 text-muted"
                >
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {section.links && section.links.length > 0 && (
            <ul className="mt-4 space-y-2 rounded-2xl border border-purple/15 bg-purple/5 p-4">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-purple hover:underline"
                  >
                    {link.label} ←
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
