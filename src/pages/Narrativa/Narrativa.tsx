import { motion } from "framer-motion";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { Fog } from "../../components/effects/Fog";
import { Particles } from "../../components/effects/Particles";
import { Divider } from "../../components/ui/Divider";
import {
  exemplosNarrativa,
  linearidadeNaoPermitido,
  linearidadePermitido,
  narrativaPage,
} from "../../data/narrativa";

export function Narrativa() {
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
            {narrativaPage.subtitulo}
          </p>

          <h1 className="font-arcane text-5xl font-semibold tracking-[0.12em] text-[var(--rito-ivory)] md:text-7xl">
            {narrativaPage.titulo}
          </h1>

          <Divider />

          <p className="mx-auto max-w-3xl text-base leading-8 text-[var(--rito-muted)] md:text-lg">
            {narrativaPage.descricao}
          </p>
        </motion.div>
      </section>

      <Section>
        <Container>
          <div className="grid gap-8">
            {narrativaPage.secoes.map((secao, index) => (
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
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rito-card rounded-[2rem] p-8 md:p-10">
              <h2 className="font-arcane text-3xl text-[var(--rito-ivory)] md:text-4xl">
                É permitido
              </h2>

              <Divider />

              <ul className="space-y-4 text-base leading-8 text-[var(--rito-muted)]">
                {linearidadePermitido.map((item) => (
                  <li key={item}>✦ {item}</li>
                ))}
              </ul>
            </article>

            <article className="rito-card rounded-[2rem] p-8 md:p-10">
              <h2 className="font-arcane text-3xl text-[var(--rito-ivory)] md:text-4xl">
                Não é permitido
              </h2>

              <Divider />

              <ul className="space-y-4 text-base leading-8 text-[var(--rito-muted)]">
                {linearidadeNaoPermitido.map((item) => (
                  <li key={item}>✧ {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-[var(--rito-gold-soft)]">
              Exemplos
            </p>

            <h2 className="font-arcane text-4xl text-[var(--rito-ivory)] md:text-6xl">
              Cenas narrativas
            </h2>
          </div>

          <div className="grid gap-8">
            {exemplosNarrativa.map((exemplo, index) => (
              <motion.article
                key={exemplo.titulo}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                className="rito-card rounded-[2rem] p-8 md:p-10"
              >
                <h3 className="font-arcane text-3xl text-[var(--rito-ivory)]">
                  {exemplo.titulo}
                </h3>

                <Divider />

                <div className="grid gap-5">
                  {exemplo.cenas.map((cena) => (
                    <div
                      key={`${exemplo.titulo}-${cena.label}-${cena.texto}`}
                      className="rounded-2xl border border-[var(--rito-border)] bg-black/20 p-5"
                    >
                      <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[var(--rito-gold-soft)]">
                        {cena.label}
                      </p>

                      <p className="text-base leading-8 text-[var(--rito-muted)]">
                        {cena.texto}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}