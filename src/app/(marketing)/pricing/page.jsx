import { BillingPlanCard, getBillingPlans } from "@/features/billing";

export default async function PricingPage() {
  const plans = await getBillingPlans();

  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold text-cyan-200">Billing feature example</p>
        <h1 className="mt-4 text-5xl font-semibold text-white">
          Pricing built from a feature module.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          This route imports billing queries and components while the app directory remains focused
          on route composition.
        </p>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <BillingPlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </main>
  );
}
