export function validateUser(user) {
  const errors = {};

  if (!user?.id) errors.id = "User id is required.";
  if (!user?.email?.includes("@")) errors.email = "A valid email is required.";
  if (!["owner", "admin", "member"].includes(user?.role)) errors.role = "Role is invalid.";

  return {
    success: Object.keys(errors).length === 0,
    errors
  };
}
