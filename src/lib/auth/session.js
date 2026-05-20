import { mockUser } from "@/entities/user";

export async function getCurrentUser() {
  return mockUser;
}

export async function requireUser() {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Authentication required.");
  }

  return user;
}
