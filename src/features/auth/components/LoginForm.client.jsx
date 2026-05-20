"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "@/features/auth/actions/login";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

const initialState = { ok: false, message: "", errors: {} };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" disabled={pending} type="submit">
      {pending ? "Signing in..." : "Sign in"}
    </Button>
  );
}

export function LoginForm() {
  const [state, formAction] = useActionState(login, initialState);

  return (
    <form action={formAction} className="grid gap-4">
      <Input id="email" label="Email" name="email" placeholder="avery@example.com" type="email" />
      {state.errors?.email && <p className="-mt-2 text-sm text-rose-300">{state.errors.email}</p>}
      <Input
        id="password"
        label="Password"
        name="password"
        placeholder="At least 8 characters"
        type="password"
      />
      {state.errors?.password && (
        <p className="-mt-2 text-sm text-rose-300">{state.errors.password}</p>
      )}
      {state.message && (
        <p className={state.ok ? "text-sm text-emerald-300" : "text-sm text-amber-200"}>
          {state.message}
        </p>
      )}
      <SubmitButton />
    </form>
  );
}
