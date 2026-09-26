const rows = [
  {
    role: "برند",
    title: "کمپین ساخته شد",
    detail: "هدف، بریف، بودجه و نوع محتوا مشخص شده است.",
    status: "آماده دعوت",
  },
  {
    role: "اینفلوئنسر",
    title: "پیشنهاد ثبت شد",
    detail: "دعوت را پذیرفته یا خودش برای همکاری پیشنهاد داده است.",
    status: "در حال گفتگو",
  },
  {
    role: "پرداخت امن",
    title: "پول تا انتشار پیش ادکسپلور است",
    detail: "بعد از تأیید برند، تبلیغ انجام شده و درآمد اینفلوئنسر واریز می‌شود.",
    status: "در انتظار انتشار",
  },
] as const;

export function MarketplaceBoard() {
  return (
    <div className="card-dark w-full max-w-md rounded-3xl p-4 sm:p-5" aria-hidden>
      <div className="mb-4 flex items-center justify-between px-1">
        <span className="text-xs font-bold text-white">همکاری در ادکسپلور</span>
        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-bold text-accent">اینستاگرام</span>
      </div>

      <ol className="space-y-3">
        {rows.map((row, index) => (
          <li key={row.role} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-bold text-purple-muted">
                {index + 1}. {row.role}
              </span>
              <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium text-slate-300">
                {row.status}
              </span>
            </div>
            <p className="mt-2 text-sm font-bold text-white">{row.title}</p>
            <p className="mt-1 text-xs leading-6 text-slate-400">{row.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
