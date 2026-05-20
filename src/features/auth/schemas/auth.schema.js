export function validateAuthInput(values) {
  const errors = {};

  if (!values.email || !values.email.includes("@")) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.password || values.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  if ("name" in values && values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  return {
    success: Object.keys(errors).length === 0,
    errors
  };
}
