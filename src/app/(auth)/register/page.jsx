import Link from "next/link";
import { RegisterForm } from "@/features/auth";
import { Card } from "@/shared/ui/Card";

export default function RegisterPage() {
  return (
    <main className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl place-items-center px-5 py-12">
      <Card className="w-full max-w-md">
        <p className="text-sm font-semibold text-cyan-200">Auth feature</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Create account</h1>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Registration uses a feature-owned server action and a shared input primitive.
        </p>
        <div className="mt-6">
          <RegisterForm />
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Already registered?{" "}
          <Link className="font-semibold text-cyan-200" href="/login">
            Sign in
          </Link>
        </p>
      </Card>
    </main>
  );
}
