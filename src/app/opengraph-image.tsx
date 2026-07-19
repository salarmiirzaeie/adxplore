import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "72px",
          background: "linear-gradient(145deg, #0B1120 0%, #0F172A 35%, #1e1b4b 70%, #312e81 100%)",
          fontFamily: "sans-serif",
          direction: "rtl",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#C4B5FD",
              maxWidth: 900,
              textAlign: "right",
              lineHeight: 1.5,
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 22,
              color: "#7C3AED",
              fontWeight: 700,
              background: "rgba(124,58,237,0.15)",
              padding: "8px 20px",
              borderRadius: 999,
            }}
          >
            adxplore.ir
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
