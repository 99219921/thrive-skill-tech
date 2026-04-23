"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/courses", label: t.nav.courses },
    { href: "/webinar", label: t.nav.webinar },
    { href: "/contact", label: t.nav.contact },
    { href: "/faq", label: t.nav.faq }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-zinc-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link href="/login"><Button variant="outline">{t.nav.login}</Button></Link>
          <Link href="/signup"><Button>{t.nav.signup}</Button></Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-xl border border-white/10 p-2 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="container-shell border-t border-white/10 pb-5 pt-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-zinc-300" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <div className="flex gap-3 pt-2">
              <Link href="/login" onClick={() => setOpen(false)}><Button variant="outline">{t.nav.login}</Button></Link>
              <Link href="/signup" onClick={() => setOpen(false)}><Button>{t.nav.signup}</Button></Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
