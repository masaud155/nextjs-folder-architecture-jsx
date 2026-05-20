import Link from "next/link";
import { routes } from "@/config/routes";

const items = [
  { label: "Overview", href: routes.dashboard },
  { label: "Settings", href: routes.settings },
  { label: "Pricing", href: routes.pricing }
];

export default function DashboardLayout({ children }) {
  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[240px_1fr]">
      <aside className="h-fit rounded-lg border border-white/10 bg-white/[0.035] p-3">
        <p className="px-3 pb-3 text-xs font-semibold uppercase text-slate-500">Product routes</p>
        <nav className="grid gap-1">
          {items.map((item) => (
            <Link
              className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div>{children}</div>
    </main>
  );
}
