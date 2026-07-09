import { motion } from "framer-motion";

type ArcanoCardProps = {
  title: string;
  number?: string;
  description: string;
};

export function ArcanoCard({ title, number, description }: ArcanoCardProps) {
  return (
    <motion.article
      whileHover={{ rotate: 1.5, y: -8 }}
      transition={{ duration: 0.35 }}
      className="rito-card relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[1.4rem] p-7"
    >
      <div className="absolute inset-4 rounded-[1rem] border border-[var(--rito-border)] opacity-50" />

      <div className="relative z-10 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.32em] text-[var(--rito-gold-soft)]">
          Arcano
        </span>

        {number && (
          <span className="font-arcane text-2xl text-[var(--rito-gold)]">
            {number}
          </span>
        )}
      </div>

      <div className="relative z-10">
        <h3 className="font-arcane text-3xl text-[var(--rito-ivory)]">
          {title}
        </h3>

        <p className="mt-5 text-sm leading-7 text-[var(--rito-muted)]">
          {description}
        </p>
      </div>
    </motion.article>
  );
}