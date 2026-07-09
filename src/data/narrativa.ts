export const narrativaPage = {
  titulo: "Narrativa",
  subtitulo: "História oficial",
  descricao:
    "A narrativa é o principal elemento do RITO. É por meio dela que os jogadores desenvolvem seus personagens, constroem relações, executam projetos e fazem a história evoluir.",
  secoes: [
    {
      titulo: "Narrativa",
      texto: [
        "A narrativa é o principal elemento do RITO. É por meio dela que os jogadores desenvolvem seus personagens, constroem relações, executam projetos e fazem a história evoluir.",
        "Todas as ações que produzem efeitos dentro do jogo devem ser narradas. Eventos que não fazem parte da narrativa oficial não geram consequências para o universo do RITO.",
        "Cada cena deve respeitar a continuidade da história, a coerência dos personagens envolvidos e as regras estabelecidas neste manual.",
      ],
    },
    {
      titulo: "Regras Gerais",
      texto: [
        "Para manter a organização da narrativa e garantir uma experiência justa para todos os participantes, algumas regras devem ser respeitadas em qualquer cena.",
        "Toda ação narrada passa a fazer parte da história oficial do RITO.",
        "As consequências das ações devem ser respeitadas pelos demais jogadores.",
        "Nenhum participante pode controlar as ações, pensamentos ou decisões do personagem de outro jogador sem sua autorização.",
        "Informações obtidas fora do jogo (off-game) não podem ser utilizadas para beneficiar ou prejudicar personagens na narrativa.",
        "Caso uma situação gere dúvidas ou conflitos, a decisão final caberá à equipe responsável pela condução da narrativa.",
        "O objetivo dessas regras é preservar a coerência da história e garantir que todos possam participar em igualdade de condições.",
      ],
    },
    {
      titulo: "Linearidade",
      texto: [
        "A narrativa do RITO segue uma ordem cronológica.",
        "Isso significa que os acontecimentos devem respeitar a sequência em que foram publicados. Uma ação narrada primeiro possui validade oficial e não pode ser ignorada, alterada ou substituída por uma resposta posterior.",
        "Quem responde a uma cena deve desenvolver as consequências da ação anterior, e não modificar o que já aconteceu.",
        "Respeitar a linearidade é essencial para manter a continuidade da história e evitar conflitos entre narrativas.",
      ],
    },
    {
      titulo: "Edição de cenas",
      texto: [
        "A edição de uma cena deve ser utilizada apenas para corrigir pequenos erros de escrita, ortografia ou formatação.",
        "Não é permitido utilizar a edição para alterar ações, adicionar acontecimentos importantes ou modificar o sentido original da narrativa após sua publicação.",
        "Uma vez publicada, a cena passa a integrar a história oficial do RITO. Caso seja necessário corrigir algum erro que altere significativamente a narrativa, a situação deverá ser analisada pela equipe responsável.",
        "Da mesma forma, não é permitido explorar erros de interpretação ou pequenas inconsistências na narrativa de outro jogador com o objetivo de obter vantagem dentro do jogo. Sempre que possível, a boa-fé e a continuidade da história devem prevalecer.",
      ],
    },
  ],
};

export const linearidadePermitido = [
  "Demonstrar emoções e reações do personagem.",
  "Narrar as consequências da ação recebida.",
  "Descrever tentativas de escapar, responder ou reagir.",
  "Acrescentar detalhes que não contradigam os acontecimentos anteriores.",
];

export const linearidadeNaoPermitido = [
  "Fingir que uma ação anterior não aconteceu.",
  "Reescrever acontecimentos já narrados.",
  "Cancelar ações realizadas por outro jogador.",
  "Alterar a ordem dos fatos para obter vantagem.",
];

export const exemplosNarrativa = [
  {
    titulo: "Exemplo 1 — Correto",
    cenas: [
      {
        label: "Cena inicial",
        texto:
          "Dante atravessa a sala e segura o braço de Helena antes que ela deixe o local.",
      },
      {
        label: "Resposta",
        texto:
          "Helena se surpreende com o gesto e tenta soltar o braço enquanto encara Dante, claramente incomodada com a situação.",
      },
      {
        label: "Resultado",
        texto:
          "Nesse caso, a resposta respeita a ação anterior e desenvolve suas consequências.",
      },
    ],
  },
  {
    titulo: "Exemplo 2 — Incorreto",
    cenas: [
      {
        label: "Cena inicial",
        texto: "Dante atravessa a sala e segura o braço de Helena.",
      },
      {
        label: "Resposta",
        texto: "Dante nunca conseguiu alcançá-la.",
      },
      {
        label: "Resultado",
        texto:
          "Essa resposta invalida uma ação que já havia sido narrada e, portanto, não é permitida.",
      },
    ],
  },
  {
    titulo: "Exemplo 3 — Correto",
    cenas: [
      {
        label: "Cena inicial",
        texto: "Arthur entrega um documento para Lorenzo.",
      },
      {
        label: "Resposta",
        texto:
          "Lorenzo recebe o documento, observa seu conteúdo por alguns instantes e responde que analisará a proposta antes de tomar qualquer decisão.",
      },
      {
        label: "Resultado",
        texto:
          "O jogador aceita que a ação aconteceu e escolhe como seu personagem reage.",
      },
    ],
  },
  {
    titulo: "Exemplo 4 — Controle de personagem",
    cenas: [
      {
        label: "Regra",
        texto: "Não é permitido narrar ações por outro jogador.",
      },
      {
        label: "Incorreto",
        texto: "Lorenzo sorri, concorda imediatamente com a proposta e assina o contrato.",
      },
      {
        label: "Resultado",
        texto:
          "Nesse exemplo, o narrador tomou uma decisão pelo personagem de outro participante.",
      },
      {
        label: "Correto",
        texto: "Arthur entrega o contrato e aguarda a resposta de Lorenzo.",
      },
      {
        label: "Resultado",
        texto:
          "A decisão permanece sob responsabilidade do jogador que controla o personagem.",
      },
    ],
  },
];