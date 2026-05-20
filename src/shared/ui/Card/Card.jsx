import { cn } from "@/shared/utils/cn";

export function Card({ children, className, as: Component = "section" }) {
  return (
    <Component className={cn("rounded-lg border border-white/10 bg-white/[0.045] p-6", className)}>
      {children}
    </Component>
  );
}
