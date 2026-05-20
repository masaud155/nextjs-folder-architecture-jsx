import { routes } from "@/config/routes";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";

export default function MarketingPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-cyan-200">Marketing route group</p>
          <h1 className="mt-4 text-5xl font-semibold text-white">
            Public pages without product clutter.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Route groups let marketing, auth, and dashboard routes share the App Router while
            keeping their layouts and intent visible in the filesystem.
          </p>
          <div className="mt-8 flex gap-3">
            <Button href={routes.pricing}>View pricing</Button>
            <Button href={routes.register} variant="secondary">
              Create account
            </Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Campaign pages", "Pricing surfaces", "Content sections", "SEO metadata"].map(
            (item) => (
              <Card className="min-h-40" key={item}>
                <h2 className="text-xl font-semibold text-white">{item}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Belongs in the marketing group while reusable primitives stay in shared UI.
                </p>
              </Card>
            )
          )}
        </div>
      </section>
    </main>
  );
}
