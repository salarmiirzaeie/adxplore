export function HeroPhoneMock() {
  return (
    <div className="relative flex w-full max-w-[300px] items-center justify-center sm:max-w-[320px] lg:max-w-[340px]">
      {/* Backdrop shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute h-[280px] w-[280px] rounded-full bg-gradient-to-br from-purple/35 via-fuchsia-600/20 to-purple-deep/30 blur-2xl animate-pulse-glow sm:h-[320px] sm:w-[320px]" />
        <div className="absolute h-[240px] w-[240px] rounded-full border border-purple/25 bg-white/[0.03] shadow-[inset_0_0_60px_rgba(124,58,237,0.15)] sm:h-[280px] sm:w-[280px]" />
        <div className="absolute h-[300px] w-[300px] rounded-full border border-white/10 sm:h-[340px] sm:w-[340px]" />
        <div className="absolute -right-2 top-10 h-16 w-16 rounded-full border border-purple-muted/30 bg-purple/10 blur-[1px] sm:h-20 sm:w-20" />
        <div className="absolute -left-4 bottom-16 h-10 w-10 rounded-full bg-fuchsia-500/20 blur-md" />
      </div>

      <div className="relative" style={{ perspective: "1100px" }}>
        <div
          className="relative origin-center will-change-transform"
          style={{
            transform: "rotateY(10deg) rotateX(3deg) rotateZ(-1.5deg)",
          }}
        >
          <div
            aria-hidden
            className="absolute -bottom-6 left-6 right-6 h-8 rounded-[100%] bg-black/45 blur-xl"
          />

          <div className="relative w-[210px] sm:w-[230px] lg:w-[240px]">
            <div className="rounded-[1.85rem] bg-gradient-to-b from-[#3a3a3e] via-[#1c1c1e] to-[#0a0a0b] p-[2.5px] shadow-[0_22px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.16)] sm:rounded-[2rem]">
              <div className="relative overflow-hidden rounded-[1.7rem] bg-black sm:rounded-[1.85rem]">
                <span
                  aria-hidden
                  className="absolute -right-[4px] top-20 h-8 w-[2.5px] rounded-l-sm bg-[#2a2a2c]"
                />
                <span
                  aria-hidden
                  className="absolute -left-[4px] top-16 h-6 w-[2.5px] rounded-r-sm bg-[#2a2a2c]"
                />
                <span
                  aria-hidden
                  className="absolute -left-[4px] top-28 h-10 w-[2.5px] rounded-r-sm bg-[#2a2a2c]"
                />

                <div className="absolute inset-x-0 top-2 z-20 flex justify-center">
                  <div className="h-[18px] w-[78px] rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] sm:h-[20px] sm:w-[86px]" />
                </div>

                <div className="relative h-[400px] overflow-hidden bg-black sm:h-[430px] lg:h-[440px]">
                  <div className="flex h-full flex-col pt-8">
                    <div className="flex items-center justify-between px-3 pb-1.5">
                      <div className="flex items-center gap-2.5 text-white">
                        <PlusSquareIcon />
                        <HeartIcon />
                        <DmIcon />
                      </div>
                      <span
                        className="text-[15px] font-semibold tracking-tight text-white"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        Instagram
                      </span>
                    </div>

                    <div className="flex gap-2 overflow-hidden px-2.5 pb-2.5 pt-1">
                      {[
                        { label: "Your story", ring: false },
                        { label: "beauty.co", ring: true },
                        { label: "fashion", ring: true },
                        { label: "cafe.tehran", ring: true },
                      ].map((item, i) => (
                        <div
                          key={item.label}
                          className="flex w-[46px] shrink-0 flex-col items-center gap-0.5"
                        >
                          <div
                            className={
                              item.ring
                                ? "rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1.5px]"
                                : "rounded-full bg-white/20 p-[1.5px]"
                            }
                          >
                            <div
                              className="h-9 w-9 rounded-full border-2 border-black"
                              style={{ background: storyFill(i) }}
                            />
                          </div>
                          <span
                            className="w-full truncate text-center text-[7px] text-white/65"
                            dir="ltr"
                          >
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="h-px bg-white/10" />

                    <div className="flex items-center gap-2 px-2.5 py-2">
                      <div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#ec4899] p-[1.5px]">
                        <div className="h-full w-full rounded-full border border-black bg-[#1a1028]" />
                      </div>
                      <div className="min-w-0 flex-1" dir="ltr">
                        <p className="truncate text-[10px] font-semibold text-white">
                          brand.studio
                        </p>
                        <p className="text-[8px] text-white/45">Sponsored</p>
                      </div>
                      <span className="text-xs leading-none text-white/50">···</span>
                    </div>

                    <div className="relative aspect-square overflow-hidden bg-[#12081f]">
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "radial-gradient(ellipse at 30% 20%, rgba(167,139,250,0.45), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(236,72,153,0.35), transparent 45%), linear-gradient(160deg, #1e1b4b 0%, #4c1d95 45%, #831843 100%)",
                        }}
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-[0.12]"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                          backgroundSize: "16px 16px",
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                        <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
                          <CameraMark />
                        </div>
                        <p className="text-xs font-bold text-white">ادکسپلور</p>
                        <p className="mt-1 max-w-[11rem] text-[9px] leading-3.5 text-white/75">
                          مستقیم با بلاگر · بدون آژانس
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between px-2.5 py-2 text-white">
                      <BookmarkIcon />
                      <div className="flex items-center gap-3">
                        <ShareIcon />
                        <CommentIcon />
                        <HeartIcon />
                      </div>
                    </div>

                    <div className="space-y-0.5 px-2.5 pb-2" dir="ltr">
                      <p className="text-[10px] font-semibold text-white">12.4K likes</p>
                      <p className="text-[9px] leading-3.5 text-white/70">
                        <span className="font-semibold text-white">brand.studio</span> Campaign
                        live with AdXplore
                      </p>
                    </div>

                    <div className="mt-auto flex justify-center pb-1.5 pt-0.5">
                      <div className="h-1 w-24 rounded-full bg-white/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-2.5 top-2.5 h-20 rounded-t-[1.4rem] bg-gradient-to-b from-white/[0.09] to-transparent"
            />
          </div>
        </div>

        <div className="absolute -bottom-0.5 left-0 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[9px] font-bold text-white backdrop-blur-md sm:-left-3">
          پرداخت امن
        </div>
        <div className="absolute right-0 top-12 rounded-full border border-purple/30 bg-purple/20 px-2.5 py-1 text-[9px] font-bold text-purple-soft backdrop-blur-md sm:-right-4 sm:top-14">
          ۰٪ کارمزد
        </div>
      </div>
    </div>
  );
}

function storyFill(i: number) {
  const fills = [
    "linear-gradient(145deg,#334155,#0f172a)",
    "linear-gradient(145deg,#f472b6,#db2777)",
    "linear-gradient(145deg,#a78bfa,#6d28d9)",
    "linear-gradient(145deg,#fb923c,#ea580c)",
  ];
  return fills[i] ?? fills[0];
}

function CameraMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="6" y="6" width="20" height="20" rx="5.5" stroke="white" strokeWidth="1.75" />
      <circle cx="16" cy="16" r="5" stroke="white" strokeWidth="1.75" />
      <circle cx="22" cy="9.5" r="1.2" fill="white" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s-7-4.6-9.5-9A5.2 5.2 0 0 1 12 6.2 5.2 5.2 0 0 1 21.5 12C19 16.4 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DmIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusSquareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 11.5a8.4 8.4 0 0 1-1.2 4.4 8.5 8.5 0 0 1-7.8 4.6 8.4 8.4 0 0 1-4.4-1.2L3 21l1.7-4.6A8.4 8.4 0 0 1 3.5 12a8.5 8.5 0 0 1 4.6-7.8A8.4 8.4 0 0 1 12.5 3H13a8.5 8.5 0 0 1 8 8.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M19 21 12 16 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
