export function validateOrganization(organization) {
  const errors = {};

  if (!organization?.name || organization.name.length < 2) {
    errors.name = "Organization name must be at least 2 characters.";
  }

  if (!organization?.slug) {
    errors.slug = "Organization slug is required.";
  }

  return {
    success: Object.keys(errors).length === 0,
    errors
  };
}
