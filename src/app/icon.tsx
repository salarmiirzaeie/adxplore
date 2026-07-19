import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <defs>
          <linearGradient id="bg" x1="2" y1="30" x2="30" y2="2">
            <stop offset="0%" stopColor="#5B21B6" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#bg)" />
        <rect
          x="6"
          y="6"
          width="20"
          height="20"
          rx="5.5"
          stroke="white"
          strokeWidth="1.75"
          fill="none"
        />
        <circle cx="16" cy="16" r="5.5" stroke="white" strokeWidth="1.75" fill="none" />
        <path
          d="M13.5 18L16 14.5M18.5 18L16 14.5"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="22" cy="9.5" r="1.3" fill="white" />
      </svg>
    ),
    { ...size },
  );
}
