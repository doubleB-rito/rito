export function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="rounded-full border border-[var(--rito-border)] px-5 py-2 text-xs uppercase tracking-[0.24em] text-[var(--rito-gold-soft)] transition hover:bg-[var(--rito-gold)] hover:text-black"
    >
      Voltar
    </button>
  );
}