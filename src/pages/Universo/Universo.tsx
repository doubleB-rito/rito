import { motion } from "framer-motion";
import { MysticCard } from "../../components/cards/MysticCard";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { Fog } from "../../components/effects/Fog";
import { Particles } from "../../components/effects/Particles";
import { Divider } from "../../components/ui/Divider";
import { universoPage, ordensUniverso } from "../../data/universo";

export function Universo() {
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
            {universoPage.subtitulo}
          </p>

          <h1 className="font-arcane text-5xl font-semibold tracking-[0.12em] text-[var(--rito-ivory)] md:text-7xl">
            {universoPage.titulo}
          </h1>

          <Divider />

          <p className="mx-auto max-w-3xl text-base leading-8 text-[var(--rito-muted)] md:text-lg">
            {universoPage.descricao}
          </p>
        </motion.div>
      </section>

      <Section>
        <Container>
          <div className="grid gap-8">
            {universoPage.secoes.map((secao, index) => (
              <motion.article
                key={secao.titulo}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                className="rito-card rounded-[2rem] p-8 md:p-12"
              >
                <div className="mb-8 flex items-center gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--rito-border)] font-arcane text-xl text-[var(--rito-gold-soft)]">
                    {index + 1}
                  </span>

                  <h2 className="font-arcane text-3xl text-[var(--rito-ivory)] md:text-5xl">
                    {secao.titulo}
                  </h2>
                </div>

                <div className="space-y-5 text-base leading-8 text-[var(--rito-muted)]">
                  {secao.texto.map((paragrafo) => (
                    <p key={paragrafo}>{paragrafo}</p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-[var(--rito-gold-soft)]">
              Ordens
            </p>

            <h2 className="font-arcane text-4xl text-[var(--rito-ivory)] md:text-6xl">
              Quatro pilares
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {ordensUniverso.map((ordem) => (
              <MysticCard
                key={ordem.titulo}
                title={ordem.titulo}
                symbol={ordem.simbolo}
              >
                {ordem.texto}
              </MysticCard>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}