"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { register } from "@/features/auth/actions/register";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

const initialState = { ok: false, message: "", errors: {} };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" disabled={pending} type="submit">
      {pending ? "Creating account..." : "Create account"}
    </Button>
  );
}

export function RegisterForm() {
  const [state, formAction] = useActionState(register, initialState);

  return (
    <form action={formAction} className="grid gap-4">
      <Input id="name" label="Name" name="name" placeholder="Avery Stone" />
      {state.errors?.name && <p className="-mt-2 text-sm text-rose-300">{state.errors.name}</p>}
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
