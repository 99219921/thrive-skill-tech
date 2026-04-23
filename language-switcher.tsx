"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
      {(["en", "hi", "mr"] as const).map((item) => (
        <Button
          key={item}
          type="button"
          variant={language === item ? "gold" : "ghost"}
          size="sm"
          className="rounded-full"
          onClick={() => setLanguage(item)}
        >
          {item.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
