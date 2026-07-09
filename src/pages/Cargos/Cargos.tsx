import { motion } from "framer-motion";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { Fog } from "../../components/effects/Fog";
import { Particles } from "../../components/effects/Particles";
import { Divider } from "../../components/ui/Divider";
import { cargos, cargosPage } from "../../data/cargos";

export function Cargos() {
  return (
    <main className="rito-page relative min-h-screen overflow-hidden">
      <div className="rito-grid pointer-events-none fixed inset-0 opacity-35" />
      <Fog />
      <Particles />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="rito-card w-full max-w-5xl rounded-[2rem] px-8 py-14 text-center md:px-16 md:py-20"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.48em] text-[var(--rito-gold-soft)]">
            {cargosPage.subtitulo}
          </p>

          <h1 className="font-arcane text-5xl font-semibold tracking-[0.12em] text-[var(--rito-ivory)] md:text-7xl">
            {cargosPage.titulo}
          </h1>

          <Divider />

          <p className="mx-auto max-w-3xl text-base leading-8 text-[var(--rito-muted)] md:text-lg">
            {cargosPage.descricao}
          </p>
        </motion.div>
      </section>

      <Section>
        <Container>
          <motion.article
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8 }}
            className="rito-card rounded-[2rem] p-8 md:p-12"
          >
            <h2 className="font-arcane text-3xl text-[var(--rito-ivory)] md:text-5xl">
              Introdução
            </h2>

            <Divider />

            <div className="space-y-5 text-base leading-8 text-[var(--rito-muted)]">
              {cargosPage.introducao.map((paragrafo) => (
                <p key={paragrafo}>{paragrafo}</p>
              ))}
            </div>
          </motion.article>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8">
            {cargos.map((cargo, index) => (
              <motion.article
                key={cargo.titulo}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                className="rito-card rounded-[2rem] p-8 md:p-12"
              >
                <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--rito-border)] font-arcane text-3xl text-[var(--rito-gold-soft)]">
                    {cargo.simbolo}
                  </span>

                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.34em] text-[var(--rito-gold-soft)]">
                      Cargo
                    </p>

                    <h2 className="font-arcane text-4xl text-[var(--rito-ivory)] md:text-6xl">
                      {cargo.titulo}
                    </h2>
                  </div>
                </div>

                <p className="mb-6 text-lg leading-8 text-[var(--rito-ivory)]">
                  {cargo.descricao}
                </p>

                <div className="space-y-5 text-base leading-8 text-[var(--rito-muted)]">
                  {cargo.texto.map((paragrafo) => (
                    <p key={paragrafo}>{paragrafo}</p>
                  ))}
                </div>

                <Divider />

                <div className="rounded-2xl border border-[var(--rito-border)] bg-black/20 p-5">
                  <h3 className="mb-4 font-arcane text-2xl text-[var(--rito-ivory)]">
                    O papel do {cargo.titulo}
                  </h3>

                  <ul className="space-y-3 text-sm leading-7 text-[var(--rito-muted)]">
                    {cargo.papel.map((item) => (
                      <li key={item}>✦ {item}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}