import { motion } from "framer-motion";

type MysticCardProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  symbol?: string;
  onClick?: () => void;
};

export function MysticCard({
  title,
  subtitle,
  children,
  symbol = "✦",
  onClick,
}: MysticCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onClick={onClick}
      className="rito-card group relative min-h-[260px] cursor-pointer overflow-hidden rounded-[1.7rem] p-7"
    >
      <div className="absolute right-6 top-5 text-5xl text-[var(--rito-gold)] opacity-20 transition group-hover:opacity-50">
        {symbol}
      </div>

      <div className="relative z-10">
        {subtitle && (
          <p className="mb-4 text-xs uppercase tracking-[0.34em] text-[var(--rito-gold-soft)]">
            {subtitle}
          </p>
        )}

        <h3 className="font-arcane text-3xl text-[var(--rito-ivory)]">
          {title}
        </h3>

        <div className="my-6 h-px w-24 bg-[var(--rito-gold)] opacity-50" />

        <div className="text-sm leading-7 text-[var(--rito-muted)]">
          {children}
        </div>
      </div>
    </motion.article>
  );
}