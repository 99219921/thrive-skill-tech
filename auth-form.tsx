"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AuthForm({ type }: { type: "login" | "signup" }) {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: integrate authentication API
    await new Promise((resolve) => setTimeout(resolve, 700));
    setLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
      <h1 className="text-2xl font-semibold text-white">{type === "login" ? "Login" : "Create your account"}</h1>
      <p className="mt-2 text-sm text-zinc-400">
        {type === "login"
          ? "Access student or admin dashboard with role-based authentication."
          : "Join Thrive Skill Tech and start learning with practical programs."}
      </p>

      <div className="mt-6 space-y-4">
        {type === "signup" ? <Input placeholder="Full name" /> : null}
        <Input placeholder="Email address" type="email" required />
        <Input placeholder="Password" type="password" required />
        {type === "signup" ? <Input placeholder="Confirm password" type="password" required /> : null}
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-zinc-400">
          <input type="checkbox" className="rounded border-white/10 bg-white/5" />
          Remember me
        </label>
        <Link href="#" className="text-brand-gold hover:text-white">Forgot password?</Link>
      </div>

      <Button type="submit" className="mt-6 w-full" disabled={loading}>
        {loading ? "Please wait..." : type === "login" ? "Login" : "Signup"}
      </Button>
    </form>
  );
}
