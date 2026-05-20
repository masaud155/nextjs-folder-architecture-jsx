import { canAccessBilling, mockUser } from "@/entities/user";
import { getCurrentSubscription, PaymentMethodForm } from "@/features/billing";
import { formatSubscriptionStatus } from "@/entities/subscription";
import { Card } from "@/shared/ui/Card";
import { formatDate } from "@/shared/utils/formatDate";

export default async function SettingsPage() {
  const subscription = await getCurrentSubscription();
  const canManageBilling = canAccessBilling(mockUser);

  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <div>
        <p className="text-sm font-semibold text-cyan-200">Settings route</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Organization settings</h1>
        <p className="mt-3 text-slate-400">
          This page combines entity permissions with billing feature queries and actions.
        </p>
      </div>
      <div className="mt-8 grid gap-5">
        <Card>
          <h2 className="text-xl font-semibold text-white">Subscription</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm text-slate-500">Status</p>
              <p className="mt-1 font-semibold text-white">
                {formatSubscriptionStatus(subscription.status)}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Plan</p>
              <p className="mt-1 font-semibold text-white">{subscription.planId}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Renewal</p>
              <p className="mt-1 font-semibold text-white">
                {formatDate(subscription.renewalDate)}
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold text-white">Payment method</h2>
          <p className="mt-2 text-sm text-slate-400">
            Current method: {subscription.paymentMethod.brand} ending{" "}
            {subscription.paymentMethod.last4}
          </p>
          <div className="mt-6">
            {canManageBilling ? (
              <PaymentMethodForm />
            ) : (
              <p className="text-sm text-amber-200">Only organization owners can update billing.</p>
            )}
          </div>
        </Card>
      </div>
    </main>
  );
}
