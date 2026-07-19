"use client";

import { useEffect, useState } from "react";

type Registration = {
  _id: string;
  role: "brand" | "influencer";
  phone: string;
  brandName?: string;
  niche?: string;
  instagram?: string;
  followers?: number;
  createdAt: string;
};

export function RegistrationsTable() {
  const [rows, setRows] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch("/api/admin/registrations");
        const data = (await response.json()) as {
          registrations?: Registration[];
          error?: string;
        };

        if (!response.ok) {
          setError(data.error ?? "بارگذاری ناموفق بود.");
          return;
        }

        setRows(data.registrations ?? []);
      } catch {
        setError("اتصال برقرار نشد.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return <p className="text-sm text-muted">در حال بارگذاری...</p>;
  }

  if (error) {
    return (
      <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        {error}
      </p>
    );
  }

  if (rows.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-surface px-6 py-12 text-center text-sm text-muted">
        هنوز ثبت‌نامی وجود ندارد.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-surface text-right">
          <tr>
            <th className="px-4 py-3 font-bold text-navy">نوع</th>
            <th className="px-4 py-3 font-bold text-navy">شماره</th>
            <th className="px-4 py-3 font-bold text-navy">جزئیات</th>
            <th className="px-4 py-3 font-bold text-navy">تاریخ</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row._id} className="border-t border-border">
              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    row.role === "brand"
                      ? "bg-purple/10 text-purple"
                      : "bg-accent/10 text-accent-deep"
                  }`}
                >
                  {row.role === "brand" ? "برند" : "بلاگر"}
                </span>
              </td>
              <td className="px-4 py-3 font-mono" dir="ltr">
                {row.phone}
              </td>
              <td className="px-4 py-3 text-muted">
                {row.role === "brand" ? (
                  <>
                    {row.brandName}
                    {row.niche ? ` · ${row.niche}` : ""}
                  </>
                ) : (
                  <>
                    {row.instagram}
                    {row.followers != null ? ` · ${row.followers.toLocaleString("fa-IR")} فالوور` : ""}
                  </>
                )}
              </td>
              <td className="px-4 py-3 text-muted">
                {new Date(row.createdAt).toLocaleString("fa-IR")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
