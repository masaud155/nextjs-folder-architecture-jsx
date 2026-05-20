import { formatPrice } from "@/features/billing/utils/formatPrice";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { cn } from "@/shared/utils/cn";

export function BillingPlanCard({ plan }) {
  return (
    <Card
      className={cn(
        "grid gap-5",
        plan.featured &&
          "border-cyan-300/40 bg-cyan-300/[0.06] shadow-[0_0_40px_rgba(34,211,238,0.12)]"
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
          {plan.featured && (
            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-xs font-semibold text-cyan-100">
              Recommended
            </span>
          )}
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-400">{plan.description}</p>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-4xl font-semibold text-white">{formatPrice(plan.price)}</span>
        <span className="pb-1 text-sm text-slate-500">per seat</span>
      </div>
      <ul className="grid gap-2 text-sm text-slate-300">
        {plan.features.map((feature) => (
          <li className="flex gap-2" key={feature}>
            <span className="text-cyan-300">/</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button variant={plan.featured ? "primary" : "secondary"}>Select {plan.name}</Button>
    </Card>
  );
}
