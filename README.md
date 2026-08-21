# Form Admin Panel

Next.js (App Router) tabanlı form yönetim ve admin paneli.

## Stack

- **Next.js 16** — App Router, Server Actions
- **PostgreSQL + Prisma 7** — `@prisma/adapter-pg`
- **Auth.js** — Adım 2'de (RBAC: MASTER_ADMIN / ADMIN / USER)
- **Tailwind CSS + shadcn/ui** — Adım 4'te
- **xlsx + PDF** — Adım 5'te

## Roller

| Rol | Yetki |
|-----|--------|
| **USER** | Public formu doldurup gönderir |
| **ADMIN** | Kendi oluşturduğu / kendisine atanmış formlar ve yanıtlar |
| **MASTER_ADMIN** | Tüm adminler, formlar ve yanıtlar |

## Kurulum

```bash
cp .env.example .env
# DATABASE_URL değerini kendi PostgreSQL bağlantınızla güncelleyin

npm install
npm run db:migrate
npm run dev
```

## Proje yapısı

```
src/
  app/
    form/[id]/          # Public form
    admin/dashboard/    # Admin panel
  actions/              # Server Actions
  components/
    ui/                 # shadcn
    admin/              # Tablo, filtre, export
  lib/
    prisma.ts           # Prisma client
    rbac.ts             # Rol yardımcıları
    auth/               # Auth.js (Adım 2)
    export/             # Excel/PDF (Adım 5)
  types/form.ts         # Form alan JSON tipleri
prisma/
  schema.prisma
```

## RBAC sorgu mantığı (özet)

- **ADMIN:** `where: { OR: [{ createdById }, { assignments: { some: { adminId } } }] }`
- **MASTER_ADMIN:** filtre yok
