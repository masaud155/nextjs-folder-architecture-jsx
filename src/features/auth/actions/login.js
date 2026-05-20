"use server";

import { validateAuthInput } from "@/features/auth/schemas/auth.schema";

export async function login(_previousState, formData) {
  const values = {
    email: String(formData.get("email") || ""),
    password: String(formData.get("password") || "")
  };
  const validation = validateAuthInput(values);

  if (!validation.success) {
    return { ok: false, message: "Check the highlighted fields.", errors: validation.errors };
  }

  return {
    ok: true,
    message: "Signed in with a mock session. No real authentication was performed."
  };
}
