export const paymentClient = {
  async createPortalSession({ customerId, returnUrl }) {
    return {
      id: `portal_${customerId}`,
      url: `${returnUrl}?billingPortal=mock`
    };
  },
  async updatePaymentMethod({ organizationId, cardLast4 }) {
    return {
      organizationId,
      brand: "Visa",
      last4: cardLast4,
      updatedAt: new Date().toISOString()
    };
  }
};
