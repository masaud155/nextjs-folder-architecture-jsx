"use client";

import { Button } from "@/shared/ui/Button";
import { cn } from "@/shared/utils/cn";

export function Modal({ open, title, children, onClose, className }) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-4 backdrop-blur">
      <div
        className={cn(
          "w-full max-w-lg rounded-lg border border-white/10 bg-slate-950 p-6",
          className
        )}
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <Button aria-label="Close modal" onClick={onClose} variant="ghost">
            Close
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}
