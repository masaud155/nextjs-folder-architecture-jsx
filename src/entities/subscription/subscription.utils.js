export function formatSubscriptionStatus(status) {
  const labels = {
    active: "Active",
    trialing: "Trialing",
    past_due: "Past due",
    canceled: "Canceled"
  };

  return labels[status] || "Unknown";
}

export function isActiveSubscription(subscription) {
  return ["active", "trialing"].includes(subscription?.status);
}
