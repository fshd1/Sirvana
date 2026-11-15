export default function Home() {
  return (
    <main className="min-h-screen bg-background p-10 text-foreground">
      <div className="rounded-xl bg-surface p-6">
        <h1>به سیروانا خوش آمدید</h1>
      </div>

      <div className="mt-4 rounded-xl border border-border bg-surface p-6">
        <h2 className="text-foreground">پیدا کردن هم‌تیمی</h2>

        <p className="text-muted">پلیر مناسب خودت رو پیدا کن.</p>

        <button className="w-full mt-4 rounded-lg bg-primary px-5 py-2 text-primary-foreground">
          جستجوی پلیر
        </button>
      </div>
    </main>
  );
}
