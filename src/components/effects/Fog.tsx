export function Fog() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-[var(--rito-gold)] opacity-[0.06] blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-violet-400 opacity-[0.05] blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-[0.025] blur-3xl" />
    </div>
  );
}