"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function DashboardSidebar({
  items,
  title,
  basePath
}: {
  items: { label: string; href: string }[];
  title: string;
  basePath: string;
}) {
  const pathname = usePathname();

  return (
    <aside className="rounded-3xl border border-white/10 bg-white/5 p-4 lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
      <div className="px-3 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">{title}</div>
      <nav className="space-y-1">
        {items.map((item) => {
          const active = pathname === `${basePath}${item.href}`;
          return (
            <Link
              key={item.href}
              href={`${basePath}${item.href}`}
              className={cn(
                "block rounded-2xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white",
                active && "bg-brand-green/15 text-white"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
