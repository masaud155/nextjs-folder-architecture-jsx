"use server";

import { mockOrganization } from "@/entities/organization";
import { paymentClient } from "@/lib/payments/stripe";
import { validatePaymentMethod } from "@/features/billing/schemas/billing.schema";

export async function updatePaymentMethod(_previousState, formData) {
  const values = {
    cardholderName: String(formData.get("cardholderName") || ""),
    cardLast4: String(formData.get("cardLast4") || "")
  };
  const validation = validatePaymentMethod(values);

  if (!validation.success) {
    return { ok: false, message: "Check the payment details.", errors: validation.errors };
  }

  const paymentMethod = await paymentClient.updatePaymentMethod({
    organizationId: mockOrganization.id,
    cardLast4: values.cardLast4
  });

  return {
    ok: true,
    message: `Mock payment method updated to ${paymentMethod.brand} ending ${paymentMethod.last4}.`
  };
}
