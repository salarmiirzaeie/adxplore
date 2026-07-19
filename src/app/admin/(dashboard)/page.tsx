import { RegistrationsTable } from "@/components/admin/registrations-table";

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-navy">ثبت‌نام‌های اولیه</h1>
        <p className="mt-2 text-sm text-muted">
          لیست برندها و بلاگرهایی که از فرم لندینگ ثبت‌نام کرده‌اند.
        </p>
      </div>
      <RegistrationsTable />
    </div>
  );
}
