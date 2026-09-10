"use client";

import { toPng } from "html-to-image";
import { useCallback, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { CarouselSlideFrame } from "@/components/social/carousel-slide-frame";
import type { CarouselSet } from "@/lib/social/carousel-slides";

type Props = {
  sets: CarouselSet[];
};

function slideId(slug: string, index: number) {
  return `carousel-slide-${slug}-${index + 1}`;
}

function ScaledSlidePreview({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => setScale(el.clientWidth / 1080);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative aspect-square w-full overflow-hidden bg-navy" dir="ltr">
      <div
        className="pointer-events-none absolute left-0 top-0 origin-top-left"
        aria-hidden
        style={{
          width: 1080,
          height: 1080,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function CarouselDownloadPanel({ sets }: Props) {
  const [busy, setBusy] = useState<string | null>(null);

  const exportSlide = useCallback(async (slug: string, index: number, filename: string) => {
    const node = document.getElementById(slideId(slug, index));
    if (!node) return;

    if (document.fonts?.ready) {
      await document.fonts.ready;
    }

    const dataUrl = await toPng(node, {
      width: 1080,
      height: 1080,
      pixelRatio: 2,
      cacheBust: true,
    });
    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();
  }, []);

  const downloadSlide = useCallback(
    async (slug: string, index: number, filename: string) => {
      setBusy(filename);
      try {
        await exportSlide(slug, index, filename);
      } finally {
        setBusy(null);
      }
    },
    [exportSlide],
  );

  const downloadSet = useCallback(
    async (set: CarouselSet) => {
      setBusy(set.slug);
      try {
        for (let i = 0; i < set.slides.length; i++) {
          await exportSlide(set.slug, i, `${set.slug}-${i + 1}.png`);
          await new Promise((r) => setTimeout(r, 400));
        }
      } finally {
        setBusy(null);
      }
    },
    [exportSlide],
  );

  return (
    <>
      {sets.map((set) => (
        <section key={set.slug} className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-navy">{set.title}</h2>
            <button
              type="button"
              disabled={busy !== null}
              onClick={() => downloadSet(set)}
              className="rounded-lg bg-purple px-4 py-2 text-sm font-bold text-white transition hover:bg-purple-deep disabled:opacity-60"
            >
              {busy?.startsWith(set.slug) ? "در حال دانلود…" : "دانلود همه ۵ اسلاید"}
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {set.slides.map((slide, i) => (
              <figure key={slide.heading} className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <ScaledSlidePreview>
                  <CarouselSlideFrame slide={slide} index={i} total={set.slides.length} />
                </ScaledSlidePreview>
                <figcaption className="flex items-center justify-between gap-2 px-2 py-2">
                  <span className="text-xs text-muted">اسلاید {i + 1}</span>
                  <button
                    type="button"
                    disabled={busy !== null}
                    onClick={() => downloadSlide(set.slug, i, `${set.slug}-${i + 1}.png`)}
                    className="text-xs font-bold text-purple hover:underline disabled:opacity-60"
                  >
                    دانلود PNG
                  </button>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}

      {/* Off-screen full-size frames for PNG export */}
      <div className="pointer-events-none fixed left-[-9999px] top-0" aria-hidden>
        {sets.flatMap((set) =>
          set.slides.map((slide, i) => (
            <CarouselSlideFrame
              key={slideId(set.slug, i)}
              id={slideId(set.slug, i)}
              slide={slide}
              index={i}
              total={set.slides.length}
            />
          )),
        )}
      </div>
    </>
  );
}
