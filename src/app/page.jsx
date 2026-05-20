import Link from "next/link";
import { architectureLayers } from "@/config/constants";
import { routes } from "@/config/routes";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";

const folderTree = `src/
  app/                 route composition only
    (marketing)/       public route group
    (auth)/            auth route group
    (dashboard)/       protected product routes
    api/               thin route handlers
  features/            product modules
  entities/            domain models and rules
  shared/              reusable UI and utilities
  lib/                 infrastructure wrappers
  config/              constants, routes, env`;

const sections = [
  {
    title: "Why this structure works",
    body: "Each layer has a job. Routes compose, features own product behavior, entities hold business rules, and lib wraps external systems."
  },
  {
    title: "App Router boundaries",
    body: "The app directory stays focused on layouts, pages, loading states, error boundaries, and API route handlers."
  },
  {
    title: "Feature-based modules",
    body: "Auth, billing, and dashboard code live with their actions, queries, schemas, services, components, and utilities."
  },
  {
    title: "Server vs client components",
    body: "Interactive files use the .client.jsx suffix while data-fetching server components remain simple and colocated."
  },
  {
    title: "Shared UI layer",
    body: "Product-neutral primitives like Button, Input, Modal, and Card are reusable without importing feature logic."
  },
  {
    title: "Entities and domain logic",
    body: "User, organization, and subscription rules are centralized so multiple features can depend on stable business concepts."
  },
  {
    title: "Infrastructure with lib",
    body: "Database, auth session, payments, email, storage, and HTTP errors are wrapped behind low-level adapters."
  },
  {
    title: "Full folder tree preview",
    body: "The repository includes a full, working tree with mock data and thin routes that demonstrate the boundaries."
  }
];

const codePreview = `import { DashboardStats } from "@/features/dashboard";

export default function DashboardPage() {
  return <DashboardStats />;
}`;

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:py-24">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
            App Router architecture for serious projects
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-white md:text-7xl">
            Build scalable Next.js apps with a folder structure that stays clean.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A practical App Router architecture using route groups, feature modules, server actions,
            shared UI, entities, and infrastructure boundaries.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#architecture">View Architecture</Button>
            <Button href={routes.github} variant="secondary">
              Open GitHub
            </Button>
          </div>
        </div>
        <Card className="overflow-hidden p-0">
          <div className="border-b border-white/10 px-5 py-4">
            <p className="text-sm font-medium text-slate-300">Folder tree preview</p>
          </div>
          <pre className="code-scroll overflow-auto p-5 text-sm leading-7 text-slate-300">
            <code>{folderTree}</code>
          </pre>
        </Card>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 sm:grid-cols-3 lg:grid-cols-6">
          {architectureLayers.map((layer) => (
            <div
              className="rounded-lg border border-white/10 bg-slate-950/50 px-4 py-3"
              key={layer}
            >
              <p className="font-mono text-sm text-cyan-200">@/{layer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16" id="architecture">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-cyan-200">Architecture guide</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Clear ownership without ceremony.
            </h2>
          </div>
          <Link
            className="text-sm font-semibold text-cyan-200 hover:text-cyan-100"
            href={routes.dashboard}
          >
            See dashboard example
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {sections.map((section) => (
            <Card className="min-h-52" key={section.title}>
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{section.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-20 lg:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-semibold text-white">Route-level composition</h2>
          <p className="mt-3 text-slate-400">
            Pages import feature components and queries. They do not become a dumping ground for
            product logic, schemas, adapters, and reusable UI.
          </p>
          <pre className="code-scroll mt-6 overflow-auto rounded-lg border border-white/10 bg-slate-950 p-4 text-sm text-slate-300">
            <code>{codePreview}</code>
          </pre>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold text-white">Dependency direction</h2>
          <div className="mt-6 grid gap-3 text-sm text-slate-300">
            {[
              "app -> features -> entities -> shared",
              "features -> lib for infrastructure",
              "shared imports no product-specific code",
              "API routes stay thin and call feature services"
            ].map((rule) => (
              <p className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3" key={rule}>
                {rule}
              </p>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
}
