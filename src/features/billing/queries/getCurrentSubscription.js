import { mockSubscription } from "@/entities/subscription";

export async function getCurrentSubscription() {
  return {
    ...mockSubscription,
    paymentMethod: {
      brand: "Visa",
      last4: "4242"
    }
  };
}
