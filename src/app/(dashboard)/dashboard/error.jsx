"use client";

import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";

export default function DashboardError({ error, reset }) {
  return (
    <Card>
      <p className="text-sm font-semibold text-rose-300">Dashboard error boundary</p>
      <h1 className="mt-3 text-2xl font-semibold text-white">Something failed in this route.</h1>
      <p className="mt-3 text-sm text-slate-400">{error.message}</p>
      <Button className="mt-6" onClick={reset}>
        Try again
      </Button>
    </Card>
  );
}
