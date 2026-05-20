export function getAuthErrorMessage(error) {
  if (error?.code === "INVALID_CREDENTIALS") {
    return "Use any valid-looking email and a password with at least 8 characters.";
  }

  return error?.message || "Something went wrong. Please try again.";
}
