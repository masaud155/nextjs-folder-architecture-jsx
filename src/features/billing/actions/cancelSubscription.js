"use server";

export async function cancelSubscription() {
  return {
    ok: true,
    message: "Subscription cancellation was simulated. No payment provider was contacted."
  };
}
