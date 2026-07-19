import { BlogForm } from "@/components/admin/blog-form";

export default function AdminNewBlogPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-navy">مقاله جدید</h1>
        <p className="mt-2 text-sm text-muted">
          مقاله جدید در MongoDB ذخیره می‌شود و بلافاصله در سایت منتشر می‌شود.
        </p>
      </div>
      <div className="rounded-2xl border border-border bg-white p-6">
        <BlogForm />
      </div>
    </div>
  );
}
