export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingMinutes: number;
  publishedAt: string; // ISO
  updatedAt: string;
  author: string;
  keywords: string;
  intro: string[];
  sections: ArticleSection[];
  conclusion: string[];
  faq: { q: string; a: string }[];
}

export const articles: Article[] = [
  {
    slug: "trigonometria-na-arquitetura",
    title: "Trigonometria na Arquitetura: Como Edifícios e Pontes Se Mantêm de Pé",
    description:
      "Descobre como a trigonometria é usada por arquitetos e engenheiros para calcular ângulos de telhados, estabilidade de pontes e iluminação natural em projetos reais.",
    category: "Aplicações",
    readingMinutes: 9,
    publishedAt: "2026-05-02",
    updatedAt: "2026-05-18",
    author: "Maria Teresa",
    keywords:
      "trigonometria, arquitetura, engenharia civil, ângulos, pontes, edifícios, geometria aplicada",
    intro: [
      "Quando olhamos para uma ponte suspensa, um arranha-céus ou a cúpula de uma igreja antiga, raramente pensamos nas equações trigonométricas que tornam aquela estrutura possível. No entanto, sem seno, cosseno e tangente, grande parte da arquitetura moderna — e clássica — simplesmente não existiria.",
      "Neste artigo vamos mostrar, passo a passo e com exemplos concretos, como a trigonometria é usada por arquitetos e engenheiros civis. Vais perceber porque é que dominar estes conceitos no secundário é uma vantagem real para quem sonha construir, projetar ou simplesmente compreender o mundo construído.",
    ],
    sections: [
      {
        heading: "1. Telhados e a inclinação certa para a chuva",
        paragraphs: [
          "Um telhado mal dimensionado acumula água, danifica estruturas e provoca infiltrações. A inclinação ideal — chamada pendente — é normalmente expressa em percentagem ou em graus, e é diretamente calculada com a tangente do ângulo.",
          "Se um telhado tem 4 metros de altura no cume e 6 metros de base horizontal, o ângulo de inclinação θ é dado por tan(θ) = 4/6, ou seja θ ≈ 33,7°. Esta simples conta determina se a água escoa rapidamente, se a neve desliza ou se o telhado vai abater ao fim de alguns anos.",
          "Em regiões com muita pluviosidade, como o norte de Portugal, recomendam-se inclinações superiores a 30°. Em zonas mais secas, telhados quase planos funcionam bem. Tudo isto é decidido com base num triângulo retângulo.",
        ],
      },
      {
        heading: "2. Pontes: triângulos por todo o lado",
        paragraphs: [
          "Observa qualquer ponte metálica e vais notar uma estrutura em treliça composta por triângulos. Não é decoração: o triângulo é a única figura geométrica rígida — não se deforma sob carga sem partir um dos lados. Por isso, engenheiros usam-no como unidade básica de força.",
          "Para calcular a tensão em cada barra de uma treliça, decompõem-se as forças nas componentes horizontal e vertical usando F·cos(θ) e F·sin(θ). Sem este passo, é impossível saber se uma ponte aguenta o peso de um camião de 40 toneladas.",
          "A famosa Ponte 25 de Abril, em Lisboa, é um exemplo claro. Os cabos principais formam catenárias, mas cada ponto onde se ligam ao tabuleiro é analisado com trigonometria para distribuir as cargas de forma equilibrada.",
        ],
      },
      {
        heading: "3. Iluminação natural e ângulos solares",
        paragraphs: [
          "Um bom arquiteto não desenha apenas paredes — desenha luz. Para saber a que horas o sol entra por uma janela em janeiro ou em julho, é preciso conhecer a altura solar (ângulo entre o sol e o horizonte) e o azimute (direção em que o sol está).",
          "Ambos são calculados com fórmulas trigonométricas que envolvem a latitude do local, o dia do ano e a hora. Em Lisboa, por exemplo, o sol atinge cerca de 75° de altura ao meio-dia solar do solstício de verão e apenas 28° no solstício de inverno. Esta diferença explica porque é que um beirado bem dimensionado pode tapar o sol no verão mas deixar entrar a luz no inverno.",
          "Programas como SketchUp ou Revit fazem estes cálculos automaticamente, mas o conceito de base — projetar a sombra como cateto oposto a um ângulo — é puro 11.º ano.",
        ],
      },
      {
        heading: "4. Cúpulas, arcos e a magia dos arcos góticos",
        paragraphs: [
          "Os arcos góticos das catedrais medievais não foram construídos por acaso. A divisão de uma circunferência em ângulos iguais, com base em senos e cossenos, permite traçar arcos que distribuem o peso para os pilares laterais em vez de empurrarem as paredes para fora.",
          "O famoso arco quebrado divide a abertura em duas porções circulares cujos centros estão deslocados. O cálculo da altura de cada ponto do arco usa h = R·sin(θ), onde R é o raio e θ é o ângulo a partir do eixo vertical.",
          "Mesmo hoje, cúpulas modernas como a do Reichstag em Berlim são geradas por funções trigonométricas paramétricas. A elegância da matemática produz, literalmente, beleza visível.",
        ],
      },
      {
        heading: "5. Como aplicar isto se queres ser arquiteto ou engenheiro",
        paragraphs: [
          "Não precisas de decorar tabelas de senos. Precisas de perceber o significado das funções: o seno relaciona-te a altura com a distância em diagonal; o cosseno relaciona-te a base com essa mesma diagonal; a tangente diz-te a inclinação.",
          "Treina com exercícios contextualizados, como os disponíveis em /exercicios, e tenta sempre desenhar o triângulo antes de calcular. Esta etapa visual é o que distingue um bom estudante de ciências de quem só decora.",
        ],
      },
    ],
    conclusion: [
      "A próxima vez que entrares numa estação de comboios com cobertura abobadada, atravessares uma ponte ou simplesmente olhares para o teu próprio telhado, lembra-te: estás a ver trigonometria construída em betão, aço e vidro.",
      "Continua a explorar o TriMundo para descobrires mais aplicações: música, navegação, programação 3D e muito mais.",
    ],
    faq: [
      {
        q: "Preciso de ser bom a matemática para ser arquiteto?",
        a: "Não precisas de ser génio, mas dominar trigonometria, álgebra e geometria descritiva é essencial. São ferramentas usadas diariamente, mesmo quando o software faz parte dos cálculos.",
      },
      {
        q: "Que função trigonométrica é mais usada em construção?",
        a: "A tangente, porque relaciona altura e base — exatamente o que precisas para inclinações de telhados, rampas e escadas.",
      },
    ],
  },
  {
    slug: "trigonometria-na-musica",
    title: "A Trigonometria por trás da Música: Ondas, Harmonias e Sintetizadores",
    description:
      "Explora como o som é descrito por funções seno e cosseno, como instrumentos produzem harmonias e como os sintetizadores digitais usam trigonometria para gerar todos os timbres que ouves.",
    category: "Aplicações",
    readingMinutes: 10,
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-18",
    author: "Maria Teresa",
    keywords:
      "trigonometria, música, ondas sonoras, frequência, harmonia, sintetizador, série de Fourier",
    intro: [
      "Liga uns auscultadores, toca qualquer música que gostes e pergunta-te: o que é, fisicamente, aquele som? A resposta é simples e maravilhosa — é uma soma de funções seno. Toda a música que já ouviste pode ser descrita por trigonometria.",
      "Este artigo mostra como o seno e o cosseno descrevem ondas sonoras, porque é que algumas notas soam bem juntas e como sintetizadores transformam matemática em arte.",
    ],
    sections: [
      {
        heading: "1. O som é uma onda — e a onda é um seno",
        paragraphs: [
          "Um som puro, como o de um diapasão, é descrito pela função y = A·sin(2πft), onde A é a amplitude (volume), f é a frequência (altura, em Hertz) e t é o tempo. A nota Lá central, por exemplo, vibra a 440 Hz: significa 440 oscilações por segundo.",
          "Se duplicares a frequência, obténs a mesma nota uma oitava acima. A escala temperada divide cada oitava em 12 semitons, e cada semitom multiplica a frequência por raiz12(2) ≈ 1,0595. Toda esta estrutura matemática nasce de comparar funções seno com diferentes frequências.",
        ],
      },
      {
        heading: "2. Porque é que duas notas soam bem juntas",
        paragraphs: [
          "Uma harmonia agradável (consonância) ocorre quando as frequências de duas notas estão numa razão simples, como 3:2 (quinta justa) ou 4:3 (quarta justa). Visualmente, as ondas seno encaixam-se com padrões regulares.",
          "Quando a razão é complexa, como 16:15 (segunda menor), as ondas interferem de forma irregular e ouvimos dissonância. Compositores como Bach ou Debussy exploraram conscientemente estas relações trigonométricas.",
        ],
      },
      {
        heading: "3. Timbre: porque é que um piano e um violino não soam iguais",
        paragraphs: [
          "Se ambos tocam Lá 440 Hz, porque conseguimos distinguir os instrumentos? Porque nenhum instrumento real produz uma onda seno pura: produz uma onda complexa formada pela frequência fundamental e por harmónicos (múltiplos inteiros da frequência fundamental).",
          "Joseph Fourier provou no século XIX que qualquer som periódico pode ser escrito como soma de senos e cossenos. Esta soma chama-se Série de Fourier e é a base de toda a engenharia de áudio moderna — desde o MP3 até ao Spotify.",
        ],
      },
      {
        heading: "4. Sintetizadores: trigonometria em tempo real",
        paragraphs: [
          "Um sintetizador analógico clássico gera diretamente formas de onda matemáticas: sinusoidal, quadrada, triangular e dente-de-serra. Cada uma corresponde a uma combinação específica de harmónicos.",
          "Em software (VST, Ableton, FL Studio), o computador calcula milhares de valores de sin(2πft) por segundo. Quando ouves um sintetizador moderno, estás literalmente a ouvir um processador a resolver equações trigonométricas em tempo real.",
        ],
      },
      {
        heading: "5. Aplicação prática: ondas estacionárias num violão",
        paragraphs: [
          "Quando puxas uma corda de guitarra de comprimento L, ela vibra com modos cujas frequências são fn = n·v/(2L), onde v é a velocidade da onda na corda. Cada modo corresponde a uma função seno com n ventres.",
          "Por isso, encurtar a corda (premindo um traste) aumenta a frequência. É trigonometria física que gera cada nota que tocas.",
        ],
      },
    ],
    conclusion: [
      "Da próxima vez que ouvires uma música, lembra-te: estás a ouvir uma sinfonia de funções seno a oscilarem milhares de vezes por segundo, somadas com a precisão matemática que Fourier descobriu há quase 200 anos.",
      "Para aprofundares, vê a página de funções trigonométricas e explora como amplitude, frequência e fase moldam o que ouves.",
    ],
    faq: [
      {
        q: "O que é a Série de Fourier em linguagem simples?",
        a: "É uma forma de partir qualquer som complexo em senos e cossenos simples. Como tirar todos os ingredientes de um bolo já cozinhado.",
      },
      {
        q: "Posso aprender música sem saber matemática?",
        a: "Sim — milhões de músicos tocam sem nunca olharem para uma fórmula. Mas perceber a matemática abre portas para produção musical, engenharia de som e composição avançada.",
      },
    ],
  },
  {
    slug: "como-o-gps-usa-trigonometria",
    title: "Como o GPS Funciona: A Trigonometria que te Localiza em Segundos",
    description:
      "Descobre como satélites em órbita usam triangulação trigonométrica para calcular a tua posição em qualquer ponto da Terra com poucos metros de precisão.",
    category: "Aplicações",
    readingMinutes: 8,
    publishedAt: "2026-05-08",
    updatedAt: "2026-05-18",
    author: "Maria Teresa",
    keywords:
      "GPS, trigonometria, triangulação, satélites, navegação, geolocalização",
    intro: [
      "Sempre que abres o Google Maps e vês aquele ponto azul a marcar a tua posição com 5 metros de precisão, está em ação uma das aplicações mais espantosas da trigonometria moderna: o GPS (Global Positioning System).",
      "Vamos explicar, sem rodeios técnicos desnecessários, como 4 satélites no espaço conseguem dizer-te onde estás, e onde entra a trigonometria neste milagre quotidiano.",
    ],
    sections: [
      {
        heading: "1. O princípio: trilateração, não triangulação",
        paragraphs: [
          "Tecnicamente, o GPS usa trilateração — uma técnica próxima da triangulação clássica, mas baseada em distâncias em vez de ângulos. Cada satélite envia um sinal com a sua posição e a hora exata em que o sinal foi emitido.",
          "O teu telemóvel mede o tempo que o sinal demorou a chegar e multiplica pela velocidade da luz para obter a distância ao satélite. Com 3 distâncias, a tua posição é o ponto onde 3 esferas se intersetam. Um 4.º satélite corrige o desvio do relógio do telemóvel.",
        ],
      },
      {
        heading: "2. Porque é que a trigonometria é essencial",
        paragraphs: [
          "Os satélites GPS orbitam a 20.200 km de altitude, em 6 planos orbitais inclinados 55° relativamente ao equador. Para o teu telemóvel saber em que direção cada satélite está — e como projetar a sua posição em coordenadas (latitude, longitude, altitude) — usa intensivamente seno, cosseno e tangente.",
          "A passagem de coordenadas esféricas (que descrevem a Terra como uma esfera) para coordenadas cartesianas (necessárias para resolver o sistema de equações da trilateração) é feita pelas equações: x = R·cos(φ)·cos(λ), y = R·cos(φ)·sin(λ), z = R·sin(φ), onde φ é a latitude e λ a longitude.",
        ],
      },
      {
        heading: "3. Relatividade e correções trigonométricas",
        paragraphs: [
          "Pormenor fascinante: os relógios atómicos dos satélites avançam cerca de 38 microssegundos por dia mais depressa do que na Terra, por causa da Relatividade. Sem correção, o GPS acumularia 11 km de erro por dia.",
          "A correção é aplicada com modelos matemáticos que incluem termos trigonométricos para a órbita elíptica de cada satélite. Sem trigonometria, o teu Uber chegaria sempre ao sítio errado.",
        ],
      },
      {
        heading: "4. Aplicações além de mapas",
        paragraphs: [
          "Agricultura de precisão: tratores autoguiados sulcam linhas com erro inferior a 2 cm. Aviação: aterragens automáticas em aeroportos com nevoeiro. Salvamento marítimo: localizar barcos em apuros em segundos. Tudo assenta nas mesmas equações trigonométricas que aprendes no secundário.",
        ],
      },
    ],
    conclusion: [
      "O GPS é prova viva de que a matemática que aprendes na escola não está confinada a quadros pretos. Ela liga literalmente o céu (satélites) à tua mão (telemóvel) — através de senos, cossenos e algumas das ideias mais elegantes da física moderna.",
    ],
    faq: [
      {
        q: "Porque é que o GPS precisa de pelo menos 4 satélites?",
        a: "Três satélites bastariam se o relógio do telemóvel fosse atómico. Como não é, o 4.º satélite serve para resolver simultaneamente posição (x, y, z) e correção temporal.",
      },
      {
        q: "Quantos satélites GPS existem?",
        a: "Cerca de 31 ativos. Em qualquer ponto da Terra, normalmente estão visíveis entre 6 e 12 simultaneamente.",
      },
    ],
  },
  {
    slug: "trigonometria-em-jogos-3d",
    title: "Trigonometria em Videojogos 3D: Como a Câmara Sabe para Onde Olhar",
    description:
      "Aprende como motores de jogo como Unity e Unreal usam vetores, ângulos e funções trigonométricas para mover personagens, rodar câmaras e detetar colisões em mundos 3D.",
    category: "Aplicações",
    readingMinutes: 9,
    publishedAt: "2026-05-12",
    updatedAt: "2026-05-18",
    author: "Maria Teresa",
    keywords:
      "trigonometria, videojogos, programação 3D, Unity, Unreal, vetores, rotação",
    intro: [
      "Se já jogaste Minecraft, FIFA, GTA ou qualquer outro jogo 3D, interagiste com milhares de cálculos trigonométricos por segundo sem nunca te aperceberes. Cada movimento de câmara, cada salto de personagem, cada disparo — tudo passa por seno e cosseno.",
      "Neste artigo explicamos como, em termos práticos, a trigonometria sustenta a indústria dos videojogos e o que precisas de saber se queres ser programador de jogos.",
    ],
    sections: [
      {
        heading: "1. Personagens movem-se em direções, não em coordenadas",
        paragraphs: [
          "Quando carregas em W para andar em frente, o motor de jogo não soma 1 à coordenada x. Ele calcula a direção para onde a tua personagem está virada e divide o movimento em componentes x e z (no espaço 3D).",
          "A fórmula é simples: deltaX = velocidade·sin(ângulo) e deltaZ = velocidade·cos(ângulo). Se rodares 90° à direita, o seno e cosseno trocam e o personagem passa a deslocar-se para o lado.",
        ],
      },
      {
        heading: "2. Câmaras em terceira pessoa: orbitar em torno do herói",
        paragraphs: [
          "Numa câmara estilo Zelda ou Tomb Raider, a câmara orbita à volta da personagem a uma distância fixa R. A sua posição é dada por: x = personagem.x + R·cos(θ)·cos(φ), y = personagem.y + R·sin(φ), z = personagem.z + R·cos(φ)·sin(θ).",
          "Os ângulos θ (yaw) e φ (pitch) atualizam-se em tempo real conforme moves o rato. É exatamente a mesma matemática que aprendeste em coordenadas esféricas.",
        ],
      },
      {
        heading: "3. Disparos e linhas de tiro",
        paragraphs: [
          "Em jogos de tiro, quando carregas no gatilho o motor lança um raio (ray) na direção em que estás a olhar. O cálculo da direção desse raio usa sin, cos do yaw e pitch da câmara, e a deteção de impacto compara este raio com geometrias do cenário.",
          "É também por isto que mira automática (aim assist) é tão eficaz: o jogo já tem o vetor de direção pronto e só precisa de o desviar suavemente para o alvo mais próximo.",
        ],
      },
      {
        heading: "4. Animação e interpolação esférica",
        paragraphs: [
          "Quando uma personagem roda suavemente para encarar o jogador, o motor não soma graus linearmente — usa interpolação esférica (slerp) com quaterniões. Por baixo, os quaterniões dependem fortemente de sin e cos de metade do ângulo de rotação.",
          "Resultado: rotações suaves, sem o efeito de bloqueio (gimbal lock) que ocorreria com simples ângulos de Euler.",
        ],
      },
      {
        heading: "5. Como começar a programar isto",
        paragraphs: [
          "Tanto Unity (C#) como Unreal (C++ ou Blueprints) têm bibliotecas matemáticas (Mathf, FMath) com Sin, Cos, Atan2 prontos a usar. O segredo é compreender o que cada função faz, não decorar sintaxe.",
          "Treina criando uma esfera que orbite um cubo. Em 20 linhas vais sentir a matemática a ganhar vida no ecrã.",
        ],
      },
    ],
    conclusion: [
      "Os videojogos são, talvez, a forma mais imediata de ver matemática a transformar-se em magia. E o ingrediente principal continua a ser a trigonometria que aprendes a partir do 9.º ano.",
    ],
    faq: [
      {
        q: "Preciso de saber muita matemática para fazer jogos?",
        a: "Para jogos simples 2D, pouca. Para 3D, programação gráfica ou física, dominar trigonometria, vetores e álgebra linear é essencial.",
      },
      {
        q: "Que função trigonométrica é mais usada em jogos?",
        a: "atan2(y, x) — devolve o ângulo entre dois pontos. É a ferramenta perfeita para descobrir para onde uma personagem deve virar-se.",
      },
    ],
  },
];
