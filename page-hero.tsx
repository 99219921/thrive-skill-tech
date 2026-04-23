import { Badge } from "@/components/ui/badge";

export function PageHero({
  title,
  description,
  badge
}: {
  title: string;
  description: string;
  badge?: string;
}) {
  return (
    <section className="border-b border-white/10 py-16">
      <div className="container-shell">
        {badge ? <Badge className="border-brand-gold/20 bg-brand-gold/10 text-brand-gold">{badge}</Badge> : null}
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">{description}</p>
      </div>
    </section>
  );
}
