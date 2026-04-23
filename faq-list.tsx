"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.q} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between gap-3 text-left"
            >
              <span className="font-medium text-white">{item.q}</span>
              <ChevronDown className={cn("h-5 w-5 text-zinc-400 transition", open && "rotate-180")} />
            </button>
            {open ? <p className="mt-4 text-sm leading-7 text-zinc-300">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
