import { motion } from "framer-motion";
import { Container } from "../../../components/layout/Container";
import { Section } from "../../../components/layout/Section";
import { Fog } from "../../../components/effects/Fog";
import { Particles } from "../../../components/effects/Particles";
import { Divider } from "../../../components/ui/Divider";
import {
  laminaPage,
  laminaVirtudes,
  laminaAreas,
  laminaLadoSombrio,
  laminaPapel,
} from "../../../data/lamina";

export function Lamina() {
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
            {laminaPage.subtitulo}
          </p>

          <h1 className="font-arcane text-5xl font-semibold tracking-[0.12em] text-[var(--rito-ivory)] md:text-7xl">
            {laminaPage.titulo}
          </h1>

          <Divider />

          <div className="mx-auto max-w-3xl space-y-5 text-base leading-8 text-[var(--rito-muted)] md:text-lg">
            {laminaPage.lema.map((linha) => (
              <p key={linha}>{linha}</p>
            ))}
          </div>
        </motion.div>
      </section>

      <Section>
        <Container>
          <div className="grid gap-8">
            {laminaPage.secoes.map((secao, index) => (
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
          <motion.article
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8 }}
            className="rito-card rounded-[2rem] p-8 md:p-12"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-[var(--rito-gold-soft)]">
              Virtudes
            </p>

            <h2 className="font-arcane text-4xl text-[var(--rito-ivory)] md:text-6xl">
              Virtudes da Lâmina
            </h2>

            <Divider />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {laminaVirtudes.map((virtude) => (
                <div
                  key={virtude}
                  className="rounded-2xl border border-[var(--rito-border)] bg-black/20 p-5 text-center"
                >
                  <span className="text-sm uppercase tracking-[0.18em] text-[var(--rito-muted)]">
                    {virtude}
                  </span>
                </div>
              ))}
            </div>
          </motion.article>
        </Container>
      </Section>

      <Section>
        <Container>
          <motion.article
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rito-card rounded-[2rem] p-8 md:p-12"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-[var(--rito-gold-soft)]">
              Equilíbrio
            </p>

            <h2 className="font-arcane text-4xl text-[var(--rito-ivory)] md:text-6xl">
              {laminaLadoSombrio.titulo}
            </h2>

            <Divider />

            <p className="mb-8 text-base leading-8 text-[var(--rito-muted)]">
              {laminaLadoSombrio.descricao}
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {laminaLadoSombrio.riscos.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-red-900/30 bg-red-950/10 p-5"
                >
                  <p className="text-sm leading-7 text-[var(--rito-muted)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-[var(--rito-gold-soft)]">
              Especializações
            </p>

            <h2 className="font-arcane text-4xl text-[var(--rito-ivory)] md:text-6xl">
              Áreas de atuação
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {laminaAreas.map((area) => (
              <motion.article
                key={area.categoria}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rito-card rounded-[2rem] p-7"
              >
                <h3 className="font-arcane text-3xl text-[var(--rito-ivory)]">
                  {area.categoria}
                </h3>

                <Divider />

                <div className="flex flex-wrap gap-3">
                  {area.itens.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--rito-border)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--rito-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <motion.article
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rito-card rounded-[2rem] p-8 md:p-12"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-[var(--rito-gold-soft)]">
              Essência
            </p>

            <h2 className="font-arcane text-4xl text-[var(--rito-ivory)] md:text-6xl">
              {laminaPapel.titulo}
            </h2>

            <Divider />

            <div className="space-y-5 text-base leading-8 text-[var(--rito-muted)]">
              {laminaPapel.texto.map((paragrafo) => (
                <p key={paragrafo}>{paragrafo}</p>
              ))}
            </div>
          </motion.article>
        </Container>
      </Section>
    </main>
  );
}