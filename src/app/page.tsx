import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-full max-w-2xl flex-col justify-center gap-6 p-8">
      <div>
        <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
          Form Admin Panel
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
          Form yönetim iskeleti hazır
        </h1>
        <p className="mt-3 text-zinc-600">
          Adım 1 tamamlandı: Prisma şeması ve proje mimarisi. Sırada Auth +
          RBAC middleware.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/admin/dashboard"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
        >
          Admin Dashboard
        </Link>
        <Link
          href="/form/demo"
          className="rounded-md border border-zinc-300 px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
        >
          Public Form (demo)
        </Link>
      </div>
    </main>
  );
}
