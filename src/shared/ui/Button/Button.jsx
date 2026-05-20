import Link from "next/link";
import { cn } from "@/shared/utils/cn";

const variants = {
  primary:
    "bg-cyan-300 text-slate-950 hover:bg-cyan-200 border-cyan-200 shadow-[0_0_32px_rgba(34,211,238,0.18)]",
  secondary: "bg-white/5 text-slate-100 hover:bg-white/10 border-white/10",
  ghost: "bg-transparent text-slate-300 hover:bg-white/5 border-transparent"
};

export function Button({
  children,
  className,
  variant = "primary",
  href,
  type = "button",
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300/40 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
