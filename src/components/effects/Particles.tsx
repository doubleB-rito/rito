const particles = Array.from({ length: 34 });

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-[var(--rito-gold-soft)] opacity-40 animate-rito-pulse"
          style={{
            left: `${(index * 29) % 100}%`,
            top: `${(index * 47) % 100}%`,
            animationDelay: `${index * 0.18}s`,
          }}
        />
      ))}
    </div>
  );
}