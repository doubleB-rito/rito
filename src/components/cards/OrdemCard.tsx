import { motion } from "framer-motion";

type OrdemCardProps = {
  nome: string;
  resumo: string;
  simbolo: string;
  tom: "lamina" | "veu" | "ledger" | "codigo";
};

const tons = {
  lamina: "from-slate-300/20 to-slate-900/10",
  veu: "from-pink-200/20 to-white/5",
  ledger: "from-amber-200/20 to-stone-900/10",
  codigo: "from-violet-300/20 to-cyan-900/10",
};

export function OrdemCard({ nome, resumo, simbolo, tom }: OrdemCardProps) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className={`rito-card relative min-h-[320px] overflow-hidden rounded-[2rem] bg-gradient-to-br ${tons[tom]} p-8`}
    >
      <div className="absolute right-7 top-6 font-arcane text-7xl text-[var(--rito-gold-soft)] opacity-20">
        {simbolo}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end">
        <p className="mb-4 text-xs uppercase tracking-[0.34em] text-[var(--rito-gold-soft)]">
          Ordem
        </p>

        <h3 className="font-arcane text-4xl text-[var(--rito-ivory)]">
          {nome}
        </h3>

        <p className="mt-5 max-w-md text-sm leading-7 text-[var(--rito-muted)]">
          {resumo}
        </p>
      </div>
    </motion.article>
  );
}