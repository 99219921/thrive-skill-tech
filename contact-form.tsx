"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactState = { name: string; email: string; phone: string; message: string };

export function ContactForm() {
  const [form, setForm] = useState<ContactState>({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // TODO: Replace with POST /api/contact
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
      <Input
        placeholder="Full name"
        value={form.name}
        onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
      />
      <Input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
      />
      <Input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
      />
      <div className="md:col-span-2">
        <Textarea
          placeholder="Tell us how we can help"
          value={form.message}
          onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
        />
      </div>
      <div className="md:col-span-2">
        <Button type="submit">{status === "sending" ? "Sending..." : status === "sent" ? "Sent Successfully" : "Send Message"}</Button>
      </div>
    </form>
  );
}
