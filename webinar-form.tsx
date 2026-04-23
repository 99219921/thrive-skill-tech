"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FormState = { name: string; phone: string; email: string };

export function WebinarForm() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone)) nextErrors.phone = "Enter a valid 10-digit Indian phone number";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email address";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      // TODO: Replace with POST /api/webinar-leads
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-brand-green/20 bg-brand-green/10 p-6">
        <h3 className="text-xl font-semibold text-white">Thanks for registering</h3>
        <p className="mt-2 text-sm text-zinc-300">
          Your seat request has been recorded. We will contact you with webinar timing and joining instructions.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
      <div>
        <Input
          placeholder="Full name"
          value={form.name}
          onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
          aria-invalid={!!errors.name}
        />
        {errors.name ? <p className="mt-1 text-xs text-red-400">{errors.name}</p> : null}
      </div>
      <div>
        <Input
          placeholder="Phone number"
          value={form.phone}
          onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
          aria-invalid={!!errors.phone}
        />
        {errors.phone ? <p className="mt-1 text-xs text-red-400">{errors.phone}</p> : null}
      </div>
      <div>
        <Input
          placeholder="Email address"
          type="email"
          value={form.email}
          onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
          aria-invalid={!!errors.email}
        />
        {errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email}</p> : null}
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Submitting..." : "Register for Webinar"}
      </Button>
    </form>
  );
}
