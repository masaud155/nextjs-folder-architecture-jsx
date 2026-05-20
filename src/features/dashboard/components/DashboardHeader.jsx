import { getCurrentUser } from "@/lib/auth/session";
import { Button } from "@/shared/ui/Button";

export async function DashboardHeader() {
  const user = await getCurrentUser();

  return (
    <header className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-medium text-cyan-200">Workspace overview</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Welcome back, {user.name}</h1>
        <p className="mt-2 text-slate-400">
          Server components compose feature queries without leaking infrastructure into routes.
        </p>
      </div>
      <Button href="/settings" variant="secondary">
        Manage settings
      </Button>
    </header>
  );
}
