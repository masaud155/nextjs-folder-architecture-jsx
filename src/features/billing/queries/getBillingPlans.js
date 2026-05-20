export async function getBillingPlans() {
  return [
    {
      id: "starter",
      name: "Starter",
      price: 0,
      description: "For prototypes and small internal tools.",
      features: ["App Router example", "Feature modules", "Shared UI primitives"]
    },
    {
      id: "pro",
      name: "Pro",
      price: 29,
      description: "For production teams scaling a real codebase.",
      featured: true,
      features: ["Server actions", "Domain entities", "Infrastructure boundaries"]
    },
    {
      id: "scale",
      name: "Scale",
      price: 79,
      description: "For multi-team products with stricter ownership.",
      features: ["Route groups", "API route boundaries", "Dependency direction rules"]
    }
  ];
}
