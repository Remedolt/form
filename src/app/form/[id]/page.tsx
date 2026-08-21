/**
 * Public form page — implemented in step 3.
 */

type FormPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PublicFormPage({ params }: FormPageProps) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-2xl font-semibold">Form</h1>
      <p className="mt-2 text-zinc-600">Form ID: {id}</p>
      <p className="mt-1 text-sm text-zinc-500">
        Gönderim Server Action&apos;ı Adım 3&apos;te eklenecek.
      </p>
    </main>
  );
}
