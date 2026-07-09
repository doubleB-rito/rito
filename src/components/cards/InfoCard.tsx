type InfoCardProps = {
  title: string;
  children: React.ReactNode;
};

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <article className="rito-card rounded-[1.5rem] p-6">
      <h3 className="font-arcane text-2xl text-[var(--rito-ivory)]">
        {title}
      </h3>

      <div className="my-5 h-px w-16 bg-[var(--rito-gold)] opacity-50" />

      <div className="text-sm leading-7 text-[var(--rito-muted)]">
        {children}
      </div>
    </article>
  );
}