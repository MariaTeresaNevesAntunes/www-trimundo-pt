export interface GlossaryTerm {
  term: string;
  definition: string;
  example?: string;
  category:
    | "Fundamentos"
    | "Funções"
    | "Identidades"
    | "Ângulos"
    | "Limites"
    | "Aplicações"
    | "Geometria";
}

export const glossary: GlossaryTerm[] = [
  {
    term: "Ângulo",
    category: "Fundamentos",
    definition:
      "Abertura formada por duas semirretas com a mesma origem (vértice). Mede-se em graus (°) ou radianos (rad).",
    example: "Um ângulo reto mede 90° ou π/2 rad.",
  },
  {
    term: "Ângulo agudo",
    category: "Ângulos",
    definition: "Ângulo cuja amplitude é maior que 0° e menor que 90°.",
  },
  {
    term: "Ângulo obtuso",
    category: "Ângulos",
    definition: "Ângulo cuja amplitude é maior que 90° e menor que 180°.",
  },
  {
    term: "Ângulo raso",
    category: "Ângulos",
    definition: "Ângulo de 180°, formado por duas semirretas opostas.",
  },
  {
    term: "Ângulo giro",
    category: "Ângulos",
    definition: "Ângulo de 360°, equivalente a uma volta completa.",
  },
  {
    term: "Ângulos complementares",
    category: "Ângulos",
    definition: "Dois ângulos cuja soma é 90°.",
    example: "30° e 60° são complementares.",
  },
  {
    term: "Ângulos suplementares",
    category: "Ângulos",
    definition: "Dois ângulos cuja soma é 180°.",
  },
  {
    term: "Ângulos notáveis",
    category: "Ângulos",
    definition:
      "Ângulos cujos valores trigonométricos são memorizados por aparecerem com frequência: 0°, 30°, 45°, 60° e 90°.",
  },
  {
    term: "Radiano",
    category: "Fundamentos",
    definition:
      "Unidade de medida angular igual ao ângulo central que subtende um arco com o mesmo comprimento que o raio. 2π rad = 360°.",
  },
  {
    term: "Círculo trigonométrico",
    category: "Fundamentos",
    definition:
      "Circunferência de raio 1 centrada na origem usada para visualizar as funções trigonométricas para qualquer ângulo.",
  },
  {
    term: "Seno",
    category: "Funções",
    definition:
      "Razão entre o cateto oposto e a hipotenusa num triângulo retângulo. No círculo trigonométrico, é a ordenada (y) do ponto associado ao ângulo.",
    example: "sin(30°) = 1/2.",
  },
  {
    term: "Cosseno",
    category: "Funções",
    definition:
      "Razão entre o cateto adjacente e a hipotenusa num triângulo retângulo. No círculo trigonométrico, é a abcissa (x) do ponto associado ao ângulo.",
    example: "cos(60°) = 1/2.",
  },
  {
    term: "Tangente",
    category: "Funções",
    definition:
      "Razão entre o seno e o cosseno (sin θ / cos θ). Geometricamente, é a inclinação da reta que passa pela origem com ângulo θ.",
    example: "tan(45°) = 1.",
  },
  {
    term: "Cotangente",
    category: "Funções",
    definition: "Inversa da tangente: cot θ = cos θ / sin θ.",
  },
  {
    term: "Secante",
    category: "Funções",
    definition: "Inversa do cosseno: sec θ = 1 / cos θ.",
  },
  {
    term: "Cossecante",
    category: "Funções",
    definition: "Inversa do seno: csc θ = 1 / sin θ.",
  },
  {
    term: "Amplitude",
    category: "Funções",
    definition:
      "Em y = A·sin(Bx + C) + D, o valor |A| representa a altura máxima da onda em relação ao eixo central.",
  },
  {
    term: "Período",
    category: "Funções",
    definition:
      "Menor intervalo após o qual uma função periódica se repete. Para sin e cos é 2π; para tan é π.",
  },
  {
    term: "Frequência",
    category: "Funções",
    definition: "Número de ciclos por unidade de tempo. É o inverso do período.",
  },
  {
    term: "Fase",
    category: "Funções",
    definition:
      "Deslocamento horizontal de uma função periódica. Em y = sin(x − φ), φ é a fase.",
  },
  {
    term: "Identidade fundamental",
    category: "Identidades",
    definition: "sin²θ + cos²θ = 1, válida para qualquer ângulo θ.",
  },
  {
    term: "Identidade da tangente",
    category: "Identidades",
    definition: "tan θ = sin θ / cos θ, definida sempre que cos θ ≠ 0.",
  },
  {
    term: "Fórmula da soma de ângulos",
    category: "Identidades",
    definition:
      "sin(a + b) = sin a · cos b + cos a · sin b; cos(a + b) = cos a · cos b − sin a · sin b.",
  },
  {
    term: "Fórmula do ângulo duplo",
    category: "Identidades",
    definition:
      "sin(2θ) = 2 sin θ · cos θ; cos(2θ) = cos²θ − sin²θ = 1 − 2 sin²θ.",
  },
  {
    term: "Limite trigonométrico fundamental",
    category: "Limites",
    definition: "lim (x→0) sin(x) / x = 1, com x em radianos.",
  },
  {
    term: "Limite (1 − cos x) / x",
    category: "Limites",
    definition: "lim (x→0) (1 − cos x) / x = 0.",
  },
  {
    term: "Hipotenusa",
    category: "Geometria",
    definition:
      "Lado mais comprido de um triângulo retângulo, oposto ao ângulo reto.",
  },
  {
    term: "Cateto oposto",
    category: "Geometria",
    definition: "Lado de um triângulo retângulo oposto ao ângulo considerado.",
  },
  {
    term: "Cateto adjacente",
    category: "Geometria",
    definition:
      "Lado de um triângulo retângulo adjacente ao ângulo considerado (não a hipotenusa).",
  },
  {
    term: "Teorema de Pitágoras",
    category: "Geometria",
    definition:
      "Num triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos: a² + b² = c².",
  },
  {
    term: "Lei dos senos",
    category: "Geometria",
    definition:
      "Em qualquer triângulo: a/sin A = b/sin B = c/sin C = 2R, onde R é o raio do circuncírculo.",
  },
  {
    term: "Lei dos cossenos",
    category: "Geometria",
    definition:
      "Generaliza Pitágoras: c² = a² + b² − 2ab·cos C, válida para qualquer triângulo.",
  },
  {
    term: "Triângulo retângulo",
    category: "Geometria",
    definition: "Triângulo que tem um ângulo de 90°.",
  },
  {
    term: "Triângulo equilátero",
    category: "Geometria",
    definition: "Triângulo com os três lados iguais e três ângulos de 60°.",
  },
  {
    term: "Triângulo isósceles",
    category: "Geometria",
    definition: "Triângulo com dois lados iguais e dois ângulos iguais.",
  },
  {
    term: "Quadrante",
    category: "Fundamentos",
    definition:
      "Cada uma das quatro regiões do plano cartesiano. Determina o sinal das funções trigonométricas.",
  },
  {
    term: "Ângulo de elevação",
    category: "Aplicações",
    definition:
      "Ângulo entre a horizontal e a linha que vai do observador até um objeto acima dele.",
  },
  {
    term: "Ângulo de depressão",
    category: "Aplicações",
    definition:
      "Ângulo entre a horizontal e a linha que vai do observador até um objeto abaixo dele.",
  },
  {
    term: "Triangulação",
    category: "Aplicações",
    definition:
      "Técnica para determinar a posição de um ponto medindo ângulos a partir de dois pontos conhecidos.",
  },
  {
    term: "Trilateração",
    category: "Aplicações",
    definition:
      "Técnica que determina a posição de um ponto a partir das suas distâncias a pontos conhecidos. Base do GPS.",
  },
  {
    term: "Onda sinusoidal",
    category: "Aplicações",
    definition:
      "Curva descrita por uma função seno ou cosseno. Modela ondas sonoras, luz, eletricidade alternada e muitos fenómenos físicos.",
  },
  {
    term: "Série de Fourier",
    category: "Aplicações",
    definition:
      "Decomposição de qualquer função periódica numa soma (eventualmente infinita) de senos e cossenos.",
  },
  {
    term: "Função periódica",
    category: "Funções",
    definition:
      "Função f tal que existe T > 0 com f(x + T) = f(x) para todo o x. T é o período.",
  },
  {
    term: "Função par",
    category: "Funções",
    definition:
      "Função f tal que f(−x) = f(x). O cosseno é par; o seu gráfico é simétrico em relação ao eixo dos yy.",
  },
  {
    term: "Função ímpar",
    category: "Funções",
    definition:
      "Função f tal que f(−x) = −f(x). O seno é ímpar; o gráfico é simétrico em relação à origem.",
  },
  {
    term: "Inversa trigonométrica (arcsin)",
    category: "Funções",
    definition:
      "Função que devolve o ângulo cujo seno é um dado valor. arcsin: [−1, 1] → [−π/2, π/2].",
  },
];
