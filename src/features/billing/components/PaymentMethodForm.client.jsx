"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { updatePaymentMethod } from "@/features/billing/actions/updatePaymentMethod";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

const initialState = { ok: false, message: "", errors: {} };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? "Updating..." : "Update method"}
    </Button>
  );
}

export function PaymentMethodForm() {
  const [state, formAction] = useActionState(updatePaymentMethod, initialState);

  return (
    <form action={formAction} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          id="cardholderName"
          label="Cardholder name"
          name="cardholderName"
          placeholder="Avery Stone"
        />
        <Input
          id="cardLast4"
          inputMode="numeric"
          label="Card last 4"
          maxLength={4}
          name="cardLast4"
          placeholder="4242"
        />
      </div>
      {(state.errors?.cardholderName || state.errors?.cardLast4) && (
        <p className="text-sm text-rose-300">
          {state.errors.cardholderName || state.errors.cardLast4}
        </p>
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
