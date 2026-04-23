import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={18} />
      WhatsApp
    </a>
  );
}
