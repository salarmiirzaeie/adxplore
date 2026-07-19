import Link from "next/link";
import { blogPosts as staticPosts } from "@/lib/content/blog/posts";
import { getAllAdminBlogPosts } from "@/lib/blog/repository";

export default async function AdminBlogPage() {
  const dbPosts = await getAllAdminBlogPosts();

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-navy">مقالات</h1>
          <p className="mt-2 text-sm text-muted">
            مقالات استاتیک فعلی و مقالات جدید منتشرشده از پنل.
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="btn-primary inline-flex rounded-xl px-5 py-2.5 text-sm font-bold"
        >
          مقاله جدید
        </Link>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="mb-3 text-sm font-bold text-muted">مقالات پنل ({dbPosts.length})</h2>
          {dbPosts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-white px-6 py-10 text-center text-sm text-muted">
              هنوز مقاله‌ای از پنل منتشر نشده است.
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-border bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-surface text-right">
                  <tr>
                    <th className="px-4 py-3 font-bold text-navy">عنوان</th>
                    <th className="px-4 py-3 font-bold text-navy">اسلاگ</th>
                    <th className="px-4 py-3 font-bold text-navy">دسته</th>
                    <th className="px-4 py-3 font-bold text-navy">تاریخ</th>
                    <th className="px-4 py-3 font-bold text-navy">لینک</th>
                  </tr>
                </thead>
                <tbody>
                  {dbPosts.map((post) => (
                    <tr key={post.slug} className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-navy">{post.title}</td>
                      <td className="px-4 py-3 font-mono text-muted" dir="ltr">
                        {post.slug}
                      </td>
                      <td className="px-4 py-3 text-muted">{post.category}</td>
                      <td className="px-4 py-3 text-muted">
                        {new Date(post.publishedAt).toLocaleDateString("fa-IR")}
                      </td>
                      <td className="px-4 py-3">
                        <Link href={`/blog/${post.slug}`} className="font-semibold text-purple hover:underline">
                          مشاهده
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold text-muted">مقالات استاتیک ({staticPosts.length})</h2>
          <div className="overflow-x-auto rounded-2xl border border-border bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-surface text-right">
                <tr>
                  <th className="px-4 py-3 font-bold text-navy">عنوان</th>
                  <th className="px-4 py-3 font-bold text-navy">اسلاگ</th>
                  <th className="px-4 py-3 font-bold text-navy">دسته</th>
                  <th className="px-4 py-3 font-bold text-navy">لینک</th>
                </tr>
              </thead>
              <tbody>
                {staticPosts.map((post) => (
                  <tr key={post.slug} className="border-t border-border">
                    <td className="px-4 py-3 font-semibold text-navy">{post.title}</td>
                    <td className="px-4 py-3 font-mono text-muted" dir="ltr">
                      {post.slug}
                    </td>
                    <td className="px-4 py-3 text-muted">{post.category}</td>
                    <td className="px-4 py-3">
                      <Link href={`/blog/${post.slug}`} className="font-semibold text-purple hover:underline">
                        مشاهده
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
