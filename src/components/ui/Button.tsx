import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "rounded-full px-7 py-3 text-xs uppercase tracking-[0.28em] transition duration-300";

  const variants = {
    primary:
      "border border-[var(--rito-border)] bg-[var(--rito-gold)] text-black hover:bg-[var(--rito-gold-soft)]",
    ghost:
      "border border-[var(--rito-border)] text-[var(--rito-gold-soft)] hover:bg-[var(--rito-gold)] hover:text-black",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}