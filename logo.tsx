export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-gold/30 to-brand-green/40 text-lg font-bold text-white shadow-glow">
        TS
      </div>
      <div>
        <div className="text-sm font-semibold tracking-wide text-white">Thrive Skill Tech</div>
        <div className="text-xs text-zinc-400">Content to Career</div>
      </div>
    </div>
  );
}
