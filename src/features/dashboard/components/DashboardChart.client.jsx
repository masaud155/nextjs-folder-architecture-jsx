"use client";

import { useMemo, useState } from "react";
import { Card } from "@/shared/ui/Card";

export function DashboardChart({ data }) {
  const [active, setActive] = useState(data.at(-1)?.label);
  const maxValue = useMemo(() => Math.max(...data.map((item) => item.value)), [data]);

  return (
    <Card className="p-6">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Client-side engagement chart</h2>
          <p className="mt-1 text-sm text-slate-400">
            Isolated interactivity keeps server components clean.
          </p>
        </div>
        <span className="text-sm text-cyan-200">Active: {active}</span>
      </div>
      <div className="flex h-72 items-end gap-3">
        {data.map((item) => {
          const height = `${(item.value / maxValue) * 100}%`;
          const isActive = active === item.label;

          return (
            <button
              aria-label={`Show ${item.label}`}
              className="group flex h-full flex-1 flex-col justify-end gap-2"
              key={item.label}
              onClick={() => setActive(item.label)}
              type="button"
            >
              <span
                className={`w-full rounded-t-md border transition ${
                  isActive
                    ? "border-cyan-200 bg-cyan-300"
                    : "border-white/10 bg-white/10 group-hover:bg-white/20"
                }`}
                style={{ height }}
              />
              <span className="text-xs text-slate-400">{item.label}</span>
            </button>
          );
        })}
      </div>
    </Card>
  );
}
