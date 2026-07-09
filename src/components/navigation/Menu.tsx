const items = [
  "O RITO",
  "Universo",
  "Narrativa",
  "Hierarquia",
  "Cargos",
  "Sistemas",
  "Ordens",
];

export function Menu() {
  return (
    <nav className="fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 rounded-full border border-[var(--rito-border)] bg-black/35 px-6 py-3 backdrop-blur-xl md:block">
      <ul className="flex gap-6">
        {items.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--rito-muted)] transition hover:text-[var(--rito-gold-soft)]"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}