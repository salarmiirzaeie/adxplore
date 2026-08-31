import type { CarouselSlide } from "@/lib/social/carousel-slides";
import { siteConfig } from "@/lib/site";

type Props = {
  slide: CarouselSlide;
  index: number;
  total: number;
  id?: string;
  className?: string;
};

export function CarouselSlideFrame({ slide, index, total, id, className }: Props) {
  const headingSize =
    slide.heading.length > 24 ? 58 : slide.heading.length > 18 ? 64 : 72;

  return (
    <div
      id={id}
      dir="rtl"
      className={className}
      style={{
        width: 1080,
        height: 1080,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px 72px",
        background: "linear-gradient(145deg, #0B1120 0%, #1e1b4b 55%, #5B21B6 100%)",
        fontFamily: "var(--font-vazirmatn), Vazirmatn, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, direction: "ltr" }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(255,255,255,0.35)",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              border: "3px solid white",
            }}
          />
        </div>
        <div style={{ fontSize: 28, fontWeight: 700, color: "#E9D5FF" }}>{siteConfig.nameEn}</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: 28,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: headingSize,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.35,
            textAlign: "right",
          }}
        >
          {slide.heading}
        </div>
        {slide.sub ? (
          <div
            style={{
              fontSize: 38,
              fontWeight: 400,
              color: "#C4B5FD",
              lineHeight: 1.5,
              textAlign: "right",
            }}
          >
            {slide.sub}
          </div>
        ) : null}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          direction: "ltr",
        }}
      >
        <div style={{ fontSize: 24, color: "rgba(255,255,255,0.45)" }}>
          {index + 1} / {total}
        </div>
        <div style={{ fontSize: 26, color: "#A78BFA", fontWeight: 700 }}>adxplore.ir</div>
      </div>
    </div>
  );
}
