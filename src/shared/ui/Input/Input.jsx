import { cn } from "@/shared/utils/cn";

export function Input({ label, className, id, ...props }) {
  return (
    <label className="grid gap-2 text-sm text-slate-300" htmlFor={id}>
      {label && <span className="font-medium">{label}</span>}
      <input
        id={id}
        className={cn(
          "w-full rounded-lg border border-white/10 bg-slate-950/70 px-3.5 py-2.5 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20",
          className
        )}
        {...props}
      />
    </label>
  );
}
