type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}