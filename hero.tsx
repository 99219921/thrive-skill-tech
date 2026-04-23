import Link from "next/link";
import { Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="hero-grid relative overflow-hidden border-b border-white/10">
      <div className="container-shell grid gap-10 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <div>
          <Badge className="border-brand-gold/20 bg-brand-gold/10 text-brand-gold">
            Registered Indian Ed-Tech Company
          </Badge>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">
            Turn Skills Into <span className="text-gradient">Income</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            From Content to Career — practical learning platform for Digital Marketing, SEO, Content Creation, AI Tools, Video Editing, and Social Media Marketing.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/courses"><Button size="lg">Explore Courses</Button></Link>
            <Link href="/webinar"><Button size="lg" variant="outline">Join Free Webinar</Button></Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 text-sm text-zinc-300">
            <div className="glass rounded-2xl px-4 py-3">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-green" /> Udyam No: {siteConfig.udyam}</div>
            </div>
            <div className="glass rounded-2xl px-4 py-3">
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-gold" /> Practical, career-oriented programs</div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-glow">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">Growth Snapshot</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["2", "Premium programs"],
                ["1000+", "Learners targeted"],
                ["Live + Recorded", "Flexible learning"],
                ["Career Support", "Resume + Internship"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="mt-1 text-sm text-zinc-400">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-brand-green/20 bg-brand-green/10 p-5">
              <p className="text-sm text-zinc-200">
                Learn the skills to create, market, and monetize with confidence through structured mentorship and project-based guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
