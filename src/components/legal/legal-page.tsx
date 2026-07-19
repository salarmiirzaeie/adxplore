import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";

type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

type LegalPageProps = {
  title: string;
  description: string;
  breadcrumbLabel: string;
  sections: LegalSection[];
};

export function LegalPage({ title, description, breadcrumbLabel, sections }: LegalPageProps) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs
          items={[
            { label: "خانه", href: "/" },
            { label: breadcrumbLabel },
          ]}
        />
        <h1 className="mt-6 text-3xl font-extrabold text-navy sm:text-4xl">{title}</h1>
        <p className="mt-4 text-lg leading-8 text-muted">{description}</p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-navy">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.list && (
                <ul className="mt-3 list-disc space-y-2 pr-5 text-sm leading-7 text-muted">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted">
          سوالی دارید؟{" "}
          <Link href="mailto:hello@adxplore.ir" className="font-semibold text-purple hover:underline">
            hello@adxplore.ir
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
