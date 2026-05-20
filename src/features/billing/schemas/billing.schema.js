export function validatePaymentMethod(values) {
  const errors = {};

  if (!values.cardholderName || values.cardholderName.trim().length < 2) {
    errors.cardholderName = "Cardholder name is required.";
  }

  if (!/^\d{4}$/.test(values.cardLast4)) {
    errors.cardLast4 = "Use the final 4 digits of the card.";
  }

  return {
    success: Object.keys(errors).length === 0,
    errors
  };
}
