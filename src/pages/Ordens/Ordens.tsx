import { motion } from "framer-motion";
import { OrdemCard } from "../../components/cards/OrdemCard";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { Fog } from "../../components/effects/Fog";
import { Particles } from "../../components/effects/Particles";
import { Divider } from "../../components/ui/Divider";
import { ordens, ordensPage } from "../../data/ordens";

export function Ordens() {
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
            {ordensPage.subtitulo}
          </p>

          <h1 className="font-arcane text-5xl font-semibold tracking-[0.12em] text-[var(--rito-ivory)] md:text-7xl">
            {ordensPage.titulo}
          </h1>

          <Divider />

          <p className="mx-auto max-w-3xl text-base leading-8 text-[var(--rito-muted)] md:text-lg">
            {ordensPage.descricao}
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
              Estrutura das Ordens
            </h2>

            <Divider />

            <div className="space-y-5 text-base leading-8 text-[var(--rito-muted)]">
              {ordensPage.texto.map((paragrafo) => (
                <p key={paragrafo}>{paragrafo}</p>
              ))}
            </div>
          </motion.article>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {ordens.map((ordem, index) => (
              <motion.div
                key={ordem.nome}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
              >
                <OrdemCard
                  nome={ordem.nome}
                  simbolo={ordem.simbolo}
                  resumo={ordem.resumo}
                  tom={ordem.tom}
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}