import Link from "next/link";
import "./globals.css";
import { APP_NAME } from "@/config/constants";
import { navItems, routes } from "@/config/routes";
import { Button } from "@/shared/ui/Button";

export const metadata = {
  title: APP_NAME,
  description:
    "A practical App Router architecture using route groups, feature modules, server actions, shared UI, entities, and infrastructure boundaries."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
              <Link
                className="flex items-center gap-3 text-sm font-semibold text-white"
                href={routes.home}
              >
                <span className="grid size-8 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                  N
                </span>
                <span className="hidden sm:inline">{APP_NAME}</span>
              </Link>
              <div className="hidden items-center gap-1 md:flex">
                {navItems.map((item) => (
                  <Link
                    className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Button href={routes.login} variant="ghost">
                  Login
                </Button>
                <Button href={routes.github} variant="secondary">
                  GitHub
                </Button>
              </div>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
