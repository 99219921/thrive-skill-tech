import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">Thrive Skill Tech</h3>
          <p className="mt-2 text-sm text-zinc-300">Content to Career</p>
          <p className="mt-4 max-w-sm text-sm text-zinc-400">
            Registered Indian ed-tech platform helping students, freelancers, and professionals turn practical skills into earning opportunities.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">Contact</h4>
          <div className="mt-4 space-y-2 text-sm text-zinc-400">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.website}</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">Links</h4>
          <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-400">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
            <Link href="/refund-policy" className="hover:text-white">Refund Policy</Link>
            <a href={siteConfig.linkedin} target="_blank" className="hover:text-white">LinkedIn</a>
            <a href={siteConfig.x} target="_blank" className="hover:text-white">X</a>
            <a href={siteConfig.instagram} target="_blank" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Udyam Number: {siteConfig.udyam}</span>
          <span>© {new Date().getFullYear()} Thrive Skill Tech. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
