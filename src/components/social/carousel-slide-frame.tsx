import { LogoMark } from "@/components/brand/logo";
import { brand, siteConfig } from "@/lib/site";
import type { CarouselSlide } from "@/lib/social/carousel-slides";

type Props = {
  slide: CarouselSlide;
  index: number;
  total: number;
  id?: string;
  className?: string;
};

function headingSize(heading: string) {
  if (heading.length > 28) return 52;
  if (heading.length > 20) return 60;
  if (heading.length > 12) return 72;
  return 88;
}

export function CarouselSlideFrame({ slide, index, total, id, className }: Props) {
  const isCover = index === 0;
  const isCta = index === total - 1;
  const sub = slide.sub ?? (isCover ? siteConfig.tagline : undefined);

  return (
    <div
      id={id}
      dir="rtl"
      className={className}
      style={{
        width: 1080,
        height: 1080,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px 64px",
        background: brand.gradients.hero,
        fontFamily: "var(--font-vazirmatn), Vazirmatn, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -220,
          right: -160,
          width: 640,
          height: 640,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.5) 0%, transparent 68%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -180,
          left: -140,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(52,211,153,0.16) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 280,
          left: -80,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(91,33,182,0.35) 0%, transparent 70%)",
        }}
      />

      <LogoMark
        solid
        style={{
          position: "absolute",
          left: -60,
          bottom: -80,
          width: 420,
          height: 420,
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            flexShrink: 0,
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 12px 32px rgba(124,58,237,0.45)",
          }}
        >
          <LogoMark solid style={{ width: 72, height: 72, display: "block" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: "white",
              lineHeight: 1,
            }}
          >
            {siteConfig.name}
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: brand.colors.purpleMuted,
            }}
          >
            AdXplore
          </span>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: isCover ? "center" : "center",
          gap: 28,
          paddingTop: 24,
          paddingBottom: 24,
        }}
      >
        <div
          style={{
            width: 72,
            height: 5,
            borderRadius: 99,
            background: `linear-gradient(90deg, ${brand.colors.accent}, ${brand.colors.purple})`,
            alignSelf: "flex-start",
          }}
        />

        <div
          style={{
            fontSize: headingSize(slide.heading),
            fontWeight: 800,
            color: "white",
            lineHeight: 1.35,
            textAlign: "right",
            maxWidth: 920,
          }}
        >
          {slide.heading}
        </div>

        {sub ? (
          isCta ? (
            <div
              style={{
                alignSelf: "flex-start",
                marginTop: 8,
                padding: "18px 36px",
                borderRadius: 999,
                background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 50%, #5B21B6 100%)",
                color: "white",
                fontSize: 32,
                fontWeight: 800,
                letterSpacing: "0.04em",
                boxShadow: "0 12px 36px rgba(124,58,237,0.4)",
              }}
            >
              {sub}
            </div>
          ) : (
            <div
              style={{
                fontSize: 36,
                fontWeight: 500,
                color: brand.colors.purpleSoft,
                lineHeight: 1.55,
                textAlign: "right",
                maxWidth: 860,
              }}
            >
              {sub}
            </div>
          )
        ) : null}
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {Array.from({ length: total }, (_, i) => (
            <span
              key={i}
              style={{
                width: i === index ? 32 : 10,
                height: 10,
                borderRadius: 99,
                background: i === index ? brand.colors.purpleMuted : "rgba(255,255,255,0.22)",
              }}
            />
          ))}
        </div>
        <div
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          adxplore.ir
        </div>
      </div>
    </div>
  );
}
