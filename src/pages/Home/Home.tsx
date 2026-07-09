import { motion } from "framer-motion";
import { MysticCard } from "../../components/cards/MysticCard";
import { OrdemCard } from "../../components/cards/OrdemCard";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { Fog } from "../../components/effects/Fog";
import { Particles } from "../../components/effects/Particles";
import { Button } from "../../components/ui/Button";
import { Divider } from "../../components/ui/Divider";
import { caminhos, inicioCards, ritoIntro } from "../../data/rito";
import { ordens } from "../../data/ordens";

export function Home() {
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
          <div className="mx-auto mb-10 flex h-28 w-28 items-center justify-center rounded-full border border-[var(--rito-border)] bg-black/30 shadow-[0_0_90px_var(--rito-glow)] animate-rito-float">
            <span className="font-arcane text-5xl tracking-[0.18em] text-[var(--rito-gold-soft)]">
              R
            </span>
          </div>

          <p className="mb-5 text-xs uppercase tracking-[0.48em] text-[var(--rito-gold-soft)]">
            {ritoIntro.subtitulo}
          </p>

          <h1 className="font-arcane text-6xl font-semibold tracking-[0.18em] text-[var(--rito-ivory)] md:text-8xl">
            {ritoIntro.titulo}
          </h1>

          <Divider />

          <p className="mx-auto max-w-3xl text-base leading-8 text-[var(--rito-muted)] md:text-lg">
            {ritoIntro.descricao}
          </p>

          <a href="#entrada">
            <Button className="mt-11" variant="ghost">
              Entrar
            </Button>
          </a>
        </motion.div>
      </section>

      <Section id="entrada">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-[var(--rito-gold-soft)]">
              Primeira Câmara
            </p>

            <h2 className="font-arcane text-4xl text-[var(--rito-ivory)] md:text-6xl">
              A entrada no RITO
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--rito-muted)]">
              O início da experiência apresenta os conceitos essenciais do
              universo: sua natureza, seu objetivo e o primeiro passo de quem
              deseja participar.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {inicioCards.map((card) => (
              <MysticCard
                key={card.titulo}
                title={card.titulo}
                symbol={card.simbolo}
              >
                {card.descricao}
              </MysticCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="caminhos">
        <Container>
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-[var(--rito-gold-soft)]">
              Acervo
            </p>

            <h2 className="font-arcane text-4xl text-[var(--rito-ivory)] md:text-6xl">
              Caminhos do universo
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--rito-muted)]">
              Cada caminho revela uma parte da estrutura que sustenta o RITO,
              sempre a partir dos conceitos presentes na documentação oficial.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caminhos.map((card) => (
              <MysticCard
                key={card.titulo}
                title={card.titulo}
                subtitle={card.subtitulo}
                symbol={card.simbolo}
              >
                {card.descricao}
              </MysticCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="ordens">
        <Container>
          <div className="mb-12 max-w-4xl">
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-[var(--rito-gold-soft)]">
              Quatro Pilares
            </p>

            <h2 className="font-arcane text-4xl text-[var(--rito-ivory)] md:text-6xl">
              As Ordens
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--rito-muted)]">
              As Ordens representam os quatro grandes pilares que sustentam o
              RITO. Todo jogador pertence a uma delas, e é por meio dessa escolha
              que desenvolve sua identidade, suas virtudes e sua forma de
              contribuir para a comunidade.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {ordens.map((ordem) => (
              <OrdemCard
                key={ordem.nome}
                nome={ordem.nome}
                simbolo={ordem.simbolo}
                resumo={ordem.resumo}
                tom={ordem.tom}
              />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}