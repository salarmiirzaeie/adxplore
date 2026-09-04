import { siteConfig } from "@/lib/site";

type Variant = "primary" | "navy" | "ghost" | "outline";

type Props = {
  className?: string;
  children?: React.ReactNode;
  variant?: Variant;
};

const variantClass: Record<Variant, string> = {
  primary: "btn-primary text-white",
  navy: "btn-navy text-white",
  ghost:
    "border border-white/20 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10",
  outline:
    "border border-border bg-white text-navy transition hover:border-purple/40 hover:text-purple",
};

export function PanelLink({
  className = "",
  children = "ورود به پنل",
  variant = "primary",
}: Props) {
  return (
    <a
      href={siteConfig.links.app}
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold ${variantClass[variant]} ${className}`}
    >
      {children}
      <ExternalArrow />
    </a>
  );
}

function ExternalArrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="hidden shrink-0 opacity-80 sm:block"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
