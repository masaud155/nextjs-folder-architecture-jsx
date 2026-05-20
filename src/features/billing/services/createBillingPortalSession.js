import { routes } from "@/config/routes";
import { paymentClient } from "@/lib/payments/stripe";

export async function createBillingPortalSession({ organizationId }) {
  return paymentClient.createPortalSession({
    customerId: organizationId,
    returnUrl: routes.settings
  });
}
