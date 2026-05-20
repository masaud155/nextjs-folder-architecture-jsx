"use server";

import { validateAuthInput } from "@/features/auth/schemas/auth.schema";

export async function register(_previousState, formData) {
  const values = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    password: String(formData.get("password") || "")
  };
  const validation = validateAuthInput(values);

  if (!validation.success) {
    return { ok: false, message: "Check the highlighted fields.", errors: validation.errors };
  }

  return {
    ok: true,
    message: "Account created in mock mode. Connect a real auth provider in lib/auth."
  };
}
