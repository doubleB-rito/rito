import { motion } from "framer-motion";

export function Portal() {
  return (
    <main className="rito-page relative min-h-screen overflow-hidden">
      <div className="rito-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.34)_58%,rgba(0,0,0,0.86)_100%)]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="rito-card w-full max-w-5xl rounded-[2rem] px-8 py-14 text-center md:px-16 md:py-20"
        >
          <div className="mx-auto mb-10 flex h-28 w-28 items-center justify-center rounded-full border border-[var(--rito-border)] bg-black/30 shadow-[0_0_90px_var(--rito-glow)] animate-rito-float">
            <span className="font-arcane text-5xl tracking-[0.18em] text-[var(--rito-gold-soft)]">
              R
            </span>
          </div>

          <p className="mb-5 text-xs uppercase tracking-[0.48em] text-[var(--rito-gold-soft)]">
            Sociedade Arcana
          </p>

          <h1 className="font-arcane text-6xl font-semibold tracking-[0.18em] text-[var(--rito-ivory)] md:text-8xl">
            RITO
          </h1>

          <div className="rito-divider mx-auto my-9 max-w-xl" />

          <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--rito-muted)] md:text-lg">
            Uma experiência narrativa inspirada nos Arcanos do Tarô, organizada
            por Ordens, hierarquias, cargos, sistemas e escolhas.
          </p>

          <button className="mt-11 rounded-full border border-[var(--rito-border)] px-8 py-3 text-xs uppercase tracking-[0.32em] text-[var(--rito-gold-soft)] transition hover:bg-[var(--rito-gold)] hover:text-black">
            Entrar
          </button>
        </motion.div>
      </section>
    </main>
  );
}