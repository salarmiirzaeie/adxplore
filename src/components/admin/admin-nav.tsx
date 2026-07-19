"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/admin", label: "ثبت‌نام‌ها" },
  { href: "/admin/blog", label: "مقالات" },
  { href: "/admin/blog/new", label: "مقاله جدید" },
];

export function AdminNav({ email }: { email: string }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-sm font-bold text-purple">پنل مدیریت ادکسپلور</p>
          <p className="text-xs text-muted" dir="ltr">
            {email}
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-2">
          {links.map((link) => {
            const active =
              link.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-purple text-white"
                    : "bg-surface text-navy hover:bg-purple/10 hover:text-purple"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl border border-border px-4 py-2 text-sm font-semibold text-muted hover:text-navy"
          >
            خروج
          </button>
        </nav>
      </div>
    </header>
  );
}
