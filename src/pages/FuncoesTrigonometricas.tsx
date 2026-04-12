import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SEO from '@/components/SEO';
import AdBanner from '@/components/AdBanner';

const FuncoesTrigonometricas = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Funções Trigonométricas: Seno, Cosseno, Tangente e mais",
    "description": "Estudo completo das 6 funções trigonométricas: definições, gráficos, propriedades, domínio, contradomínio, período e amplitude.",
    "publisher": { "@type": "Organization", "name": "TriMundo", "url": "https://trimundo.pt" },
    "mainEntityOfPage": "https://trimundo.pt/funcoes-trigonometricas",
    "datePublished": "2026-04-12"
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual é a diferença entre seno e cosseno?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O seno (sin θ) representa a razão entre o cateto oposto e a hipotenusa num triângulo retângulo, ou a coordenada y no círculo unitário. O cosseno (cos θ) representa a razão entre o cateto adjacente e a hipotenusa, ou a coordenada x. Os seus gráficos têm a mesma forma, mas o cosseno está deslocado π/2 para a esquerda: cos(θ) = sin(θ + π/2)."
        }
      },
      {
        "@type": "Question",
        "name": "O que é o período de uma função trigonométrica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O período é o menor intervalo após o qual a função se repete. O seno e o cosseno têm período 2π (360°), o que significa que sin(θ + 2π) = sin(θ). A tangente e a cotangente têm período π (180°). A amplitude é metade da diferença entre o valor máximo e mínimo da função."
        }
      },
      {
        "@type": "Question",
        "name": "Para que servem as funções trigonométricas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As funções trigonométricas são usadas em inúmeras áreas: na física para descrever ondas e oscilações, na engenharia para cálculos estruturais, na música para síntese sonora, na computação gráfica para rotações 3D, no GPS para triangulação, e em muitas outras aplicações científicas e tecnológicas."
        }
      },
      {
        "@type": "Question",
        "name": "Qual é a relação entre as funções trigonométricas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Todas as seis funções estão inter-relacionadas. A tangente é a razão sin/cos. A cotangente é cos/sin. A secante é 1/cos e a cossecante é 1/sin. A identidade fundamental sin²θ + cos²θ = 1 conecta seno e cosseno. Conhecendo uma função e o quadrante, podemos calcular todas as outras."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Funções Trigonométricas: Guia Completo | TriMundo"
        description="Guia completo das 6 funções trigonométricas: seno, cosseno, tangente, cotangente, secante e cossecante. Definições, gráficos, propriedades, domínio, período e amplitude."
        keywords="funções trigonométricas, seno, cosseno, tangente, cotangente, secante, cossecante, gráfico seno, período, amplitude"
        canonical="https://trimundo.pt/funcoes-trigonometricas"
        structuredData={[structuredData, faqData]}
      />
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <header className="py-20 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="heading-xl text-white mb-6">
              Funções <span className="text-accent-light">Trigonométricas</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Estudo completo das seis funções trigonométricas: definições, propriedades, 
              gráficos, domínio, contradomínio e aplicações práticas.
            </p>
          </div>
        </header>

        <main>
          {/* Introduction */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="heading-lg text-gradient mb-6 text-center">O Que São Funções Trigonométricas?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                As funções trigonométricas são funções matemáticas que relacionam ângulos com razões entre 
                lados de triângulos retângulos. Existem seis funções trigonométricas: três principais 
                (seno, cosseno e tangente) e três recíprocas (cossecante, secante e cotangente).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                No contexto do <strong>triângulo retângulo</strong>, estas funções são definidas como razões 
                entre os lados. No contexto do <strong>círculo unitário</strong>, são definidas como coordenadas 
                de pontos sobre a circunferência de raio 1. Esta segunda definição permite-nos estender as funções 
                para qualquer ângulo real, não apenas ângulos agudos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As funções trigonométricas são <strong>periódicas</strong> — os seus valores repetem-se em intervalos 
                regulares. Esta propriedade torna-as perfeitas para descrever fenómenos cíclicos como ondas sonoras, 
                correntes alternadas, marés e órbitas planetárias.
              </p>
            </div>
          </section>

          {/* Sine */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="heading-lg text-gradient mb-10 text-center">As Seis Funções em Detalhe</h2>

              {/* Seno */}
              <Card className="math-card mb-8 border-math-blue/20 bg-math-blue/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-math-blue flex items-center gap-3">
                    <span className="text-3xl">〰️</span> 1. Função Seno — sin(θ)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Definição</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No triângulo retângulo: <strong className="font-mono">sin θ = cateto oposto / hipotenusa</strong>. 
                      No círculo unitário: sin θ é a <strong>coordenada y</strong> do ponto correspondente ao ângulo θ.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="font-semibold text-sm text-math-blue mb-2">Propriedades</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Domínio:</strong> ℝ (todos os reais)</li>
                        <li>• <strong>Contradomínio:</strong> [-1, 1]</li>
                        <li>• <strong>Período:</strong> 2π (360°)</li>
                        <li>• <strong>Paridade:</strong> Função ímpar — sin(-θ) = -sin(θ)</li>
                        <li>• <strong>Zeros:</strong> θ = nπ, n ∈ ℤ</li>
                        <li>• <strong>Máximo:</strong> 1 em θ = π/2 + 2nπ</li>
                        <li>• <strong>Mínimo:</strong> -1 em θ = 3π/2 + 2nπ</li>
                      </ul>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="font-semibold text-sm text-math-blue mb-2">Comportamento por Quadrante</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>1º Quadrante (0° a 90°):</strong> crescente, positivo</li>
                        <li>• <strong>2º Quadrante (90° a 180°):</strong> decrescente, positivo</li>
                        <li>• <strong>3º Quadrante (180° a 270°):</strong> decrescente, negativo</li>
                        <li>• <strong>4º Quadrante (270° a 360°):</strong> crescente, negativo</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-card p-4 rounded-lg border">
                    <h4 className="font-semibold text-sm text-math-blue mb-2">Gráfico da Função Seno</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      O gráfico do seno é uma <strong>sinusoide</strong> — uma curva ondulada que oscila entre -1 e 1. 
                      Começa em (0, 0), atinge o máximo em (π/2, 1), volta a zero em (π, 0), atinge o mínimo 
                      em (3π/2, -1), e completa o ciclo em (2π, 0).
                    </p>
                    <div className="flex justify-center">
                      <div className="bg-muted/30 rounded-lg p-4 border w-full max-w-md">
                        <div className="text-center font-mono text-xs text-muted-foreground space-y-1">
                          <div>θ: 0 → π/2 → π → 3π/2 → 2π</div>
                          <div>sin: 0 → 1 → 0 → -1 → 0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-math-blue/10 p-4 rounded-lg border border-math-blue/20">
                    <h4 className="font-semibold text-sm text-math-blue mb-2">Transformações: f(x) = A·sin(Bx + C) + D</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>A</strong> (amplitude): altera a altura da onda. |A| {'>'} 1 estica, |A| {'<'} 1 comprime verticalmente.</li>
                      <li>• <strong>B</strong> (frequência): altera o período para 2π/|B|. B {'>'} 1 comprime horizontalmente.</li>
                      <li>• <strong>C</strong> (fase): desloca o gráfico horizontalmente. C {'>'} 0 desloca para a esquerda.</li>
                      <li>• <strong>D</strong> (deslocamento vertical): desloca o gráfico para cima (D {'>'} 0) ou para baixo (D {'<'} 0).</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Cosseno */}
              <Card className="math-card mb-8 border-math-green/20 bg-math-green/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-math-green flex items-center gap-3">
                    <span className="text-3xl">📊</span> 2. Função Cosseno — cos(θ)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Definição</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No triângulo retângulo: <strong className="font-mono">cos θ = cateto adjacente / hipotenusa</strong>. 
                      No círculo unitário: cos θ é a <strong>coordenada x</strong> do ponto correspondente ao ângulo θ.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="font-semibold text-sm text-math-green mb-2">Propriedades</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Domínio:</strong> ℝ</li>
                        <li>• <strong>Contradomínio:</strong> [-1, 1]</li>
                        <li>• <strong>Período:</strong> 2π (360°)</li>
                        <li>• <strong>Paridade:</strong> Função par — cos(-θ) = cos(θ)</li>
                        <li>• <strong>Zeros:</strong> θ = π/2 + nπ, n ∈ ℤ</li>
                        <li>• <strong>Máximo:</strong> 1 em θ = 2nπ</li>
                        <li>• <strong>Mínimo:</strong> -1 em θ = π + 2nπ</li>
                      </ul>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="font-semibold text-sm text-math-green mb-2">Relação com o Seno</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• cos(θ) = sin(θ + π/2) — o cosseno é o seno deslocado π/2</li>
                        <li>• cos(θ) = sin(π/2 - θ) — relação de complementaridade</li>
                        <li>• sin²θ + cos²θ = 1 — identidade fundamental</li>
                        <li>• O gráfico do cosseno é idêntico ao do seno, mas começa no máximo (0, 1)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-card p-4 rounded-lg border">
                    <h4 className="font-semibold text-sm text-math-green mb-2">Gráfico da Função Cosseno</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      O gráfico do cosseno é também uma sinusoide, mas deslocada π/2 para a esquerda em relação ao seno. 
                      Começa no máximo (0, 1), desce a zero em (π/2, 0), atinge o mínimo em (π, -1), volta a zero 
                      em (3π/2, 0) e regressa ao máximo em (2π, 1).
                    </p>
                    <div className="flex justify-center">
                      <div className="bg-muted/30 rounded-lg p-4 border w-full max-w-md">
                        <div className="text-center font-mono text-xs text-muted-foreground space-y-1">
                          <div>θ: 0 → π/2 → π → 3π/2 → 2π</div>
                          <div>cos: 1 → 0 → -1 → 0 → 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tangente */}
              <Card className="math-card mb-8 border-math-orange/20 bg-math-orange/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-math-orange flex items-center gap-3">
                    <span className="text-3xl">📈</span> 3. Função Tangente — tan(θ)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Definição</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No triângulo retângulo: <strong className="font-mono">tan θ = cateto oposto / cateto adjacente</strong>. 
                      Equivalentemente: <strong className="font-mono">tan θ = sin θ / cos θ</strong>. 
                      No círculo unitário, a tangente é o comprimento do segmento tangente à circunferência no ponto (1, 0).
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="font-semibold text-sm text-math-orange mb-2">Propriedades</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Domínio:</strong> ℝ \ {'{ π/2 + nπ, n ∈ ℤ }'}</li>
                        <li>• <strong>Contradomínio:</strong> ℝ (todos os reais)</li>
                        <li>• <strong>Período:</strong> π (180°)</li>
                        <li>• <strong>Paridade:</strong> Função ímpar — tan(-θ) = -tan(θ)</li>
                        <li>• <strong>Zeros:</strong> θ = nπ, n ∈ ℤ</li>
                        <li>• <strong>Assíntotas verticais:</strong> θ = π/2 + nπ</li>
                      </ul>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="font-semibold text-sm text-math-orange mb-2">Comportamento</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Sempre crescente em cada intervalo do domínio</li>
                        <li>• Não tem máximo nem mínimo (contradomínio infinito)</li>
                        <li>• Tende a +∞ antes das assíntotas (pela esquerda)</li>
                        <li>• Tende a -∞ depois das assíntotas (pela direita)</li>
                        <li>• A tangente é indefinida quando cos θ = 0</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-card p-4 rounded-lg border">
                    <h4 className="font-semibold text-sm text-math-orange mb-2">Valores Notáveis da Tangente</h4>
                    <div className="grid grid-cols-5 gap-2 text-center text-sm">
                      {[
                        { ang: '0°', val: '0' },
                        { ang: '30°', val: '√3/3' },
                        { ang: '45°', val: '1' },
                        { ang: '60°', val: '√3' },
                        { ang: '90°', val: '∞' },
                      ].map((v, i) => (
                        <div key={i} className="p-2 bg-muted/50 rounded">
                          <div className="font-semibold text-math-orange">{v.ang}</div>
                          <div className="text-muted-foreground font-mono">{v.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <AdBanner adSlot="9012345678" adFormat="horizontal" />

              {/* Cotangente */}
              <Card className="math-card mb-8 border-math-purple/20 bg-math-purple/5 mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-math-purple flex items-center gap-3">
                    <span className="text-3xl">↕️</span> 4. Função Cotangente — cot(θ)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Definição</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="font-mono">cot θ = cos θ / sin θ = 1 / tan θ</strong>. 
                      No triângulo retângulo: cot θ = cateto adjacente / cateto oposto.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="font-semibold text-sm text-math-purple mb-2">Propriedades</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Domínio:</strong> ℝ \ {'{ nπ, n ∈ ℤ }'}</li>
                        <li>• <strong>Contradomínio:</strong> ℝ</li>
                        <li>• <strong>Período:</strong> π (180°)</li>
                        <li>• <strong>Paridade:</strong> Função ímpar</li>
                        <li>• <strong>Assíntotas verticais:</strong> θ = nπ</li>
                        <li>• <strong>Zeros:</strong> θ = π/2 + nπ</li>
                      </ul>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="font-semibold text-sm text-math-purple mb-2">Relação com a Tangente</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A cotangente é o recíproco da tangente: cot θ = 1/tan θ. O seu gráfico é semelhante 
                        ao da tangente, mas refletido e deslocado. Enquanto a tangente é crescente, a cotangente 
                        é sempre <strong>decrescente</strong> em cada intervalo do domínio. Os zeros da cotangente 
                        são as assíntotas da tangente, e vice-versa.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Secante */}
              <Card className="math-card mb-8 border-math-blue/20 bg-math-blue/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-math-blue flex items-center gap-3">
                    <span className="text-3xl">🔀</span> 5. Função Secante — sec(θ)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Definição</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="font-mono">sec θ = 1 / cos θ = hipotenusa / cateto adjacente</strong>.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="font-semibold text-sm text-math-blue mb-2">Propriedades</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Domínio:</strong> ℝ \ {'{ π/2 + nπ }'}</li>
                        <li>• <strong>Contradomínio:</strong> (-∞, -1] ∪ [1, +∞)</li>
                        <li>• <strong>Período:</strong> 2π</li>
                        <li>• <strong>Paridade:</strong> Função par — sec(-θ) = sec(θ)</li>
                        <li>• <strong>Não tem zeros</strong></li>
                        <li>• <strong>Identidade:</strong> tan²θ + 1 = sec²θ</li>
                      </ul>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="font-semibold text-sm text-math-blue mb-2">Utilidade</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A secante aparece frequentemente em cálculo integral (especialmente na integral de √(x²+1)), 
                        em fórmulas de comprimento de arco e em equações diferenciais. Na engenharia, é usada 
                        em problemas de ótica e na análise de lentes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cossecante */}
              <Card className="math-card mb-8 border-math-green/20 bg-math-green/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-math-green flex items-center gap-3">
                    <span className="text-3xl">🔁</span> 6. Função Cossecante — csc(θ)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Definição</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="font-mono">csc θ = 1 / sin θ = hipotenusa / cateto oposto</strong>.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="font-semibold text-sm text-math-green mb-2">Propriedades</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Domínio:</strong> ℝ \ {'{ nπ }'}</li>
                        <li>• <strong>Contradomínio:</strong> (-∞, -1] ∪ [1, +∞)</li>
                        <li>• <strong>Período:</strong> 2π</li>
                        <li>• <strong>Paridade:</strong> Função ímpar — csc(-θ) = -csc(θ)</li>
                        <li>• <strong>Não tem zeros</strong></li>
                        <li>• <strong>Identidade:</strong> 1 + cot²θ = csc²θ</li>
                      </ul>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="font-semibold text-sm text-math-green mb-2">Utilidade</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A cossecante é menos comum no dia a dia, mas é importante em cálculo avançado, 
                        especialmente em integrais trigonométricas e substituições. É também usada em 
                        problemas de engenharia e física que envolvem ondas e oscilações.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Summary Table */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="heading-lg text-gradient mb-10 text-center">Tabela Resumo</h2>
              <Card className="math-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary/10 border-b">
                          <th className="py-3 px-4 text-left font-bold text-primary">Função</th>
                          <th className="py-3 px-4 text-left font-bold text-primary">Definição</th>
                          <th className="py-3 px-4 text-left font-bold text-primary">Domínio</th>
                          <th className="py-3 px-4 text-left font-bold text-primary">Contradomínio</th>
                          <th className="py-3 px-4 text-left font-bold text-primary">Período</th>
                          <th className="py-3 px-4 text-left font-bold text-primary">Paridade</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border/50 hover:bg-muted/20">
                          <td className="py-3 px-4 font-mono font-semibold">sin θ</td>
                          <td className="py-3 px-4">oposto / hip.</td>
                          <td className="py-3 px-4">ℝ</td>
                          <td className="py-3 px-4">[-1, 1]</td>
                          <td className="py-3 px-4">2π</td>
                          <td className="py-3 px-4">Ímpar</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/20">
                          <td className="py-3 px-4 font-mono font-semibold">cos θ</td>
                          <td className="py-3 px-4">adjacente / hip.</td>
                          <td className="py-3 px-4">ℝ</td>
                          <td className="py-3 px-4">[-1, 1]</td>
                          <td className="py-3 px-4">2π</td>
                          <td className="py-3 px-4">Par</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/20">
                          <td className="py-3 px-4 font-mono font-semibold">tan θ</td>
                          <td className="py-3 px-4">sin / cos</td>
                          <td className="py-3 px-4">ℝ \ {'{ π/2+nπ }'}</td>
                          <td className="py-3 px-4">ℝ</td>
                          <td className="py-3 px-4">π</td>
                          <td className="py-3 px-4">Ímpar</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/20">
                          <td className="py-3 px-4 font-mono font-semibold">cot θ</td>
                          <td className="py-3 px-4">cos / sin</td>
                          <td className="py-3 px-4">ℝ \ {'{ nπ }'}</td>
                          <td className="py-3 px-4">ℝ</td>
                          <td className="py-3 px-4">π</td>
                          <td className="py-3 px-4">Ímpar</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/20">
                          <td className="py-3 px-4 font-mono font-semibold">sec θ</td>
                          <td className="py-3 px-4">1 / cos</td>
                          <td className="py-3 px-4">ℝ \ {'{ π/2+nπ }'}</td>
                          <td className="py-3 px-4">(-∞,-1]∪[1,∞)</td>
                          <td className="py-3 px-4">2π</td>
                          <td className="py-3 px-4">Par</td>
                        </tr>
                        <tr className="hover:bg-muted/20">
                          <td className="py-3 px-4 font-mono font-semibold">csc θ</td>
                          <td className="py-3 px-4">1 / sin</td>
                          <td className="py-3 px-4">ℝ \ {'{ nπ }'}</td>
                          <td className="py-3 px-4">(-∞,-1]∪[1,∞)</td>
                          <td className="py-3 px-4">2π</td>
                          <td className="py-3 px-4">Ímpar</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Transformations */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="heading-lg text-gradient mb-10 text-center">Transformações de Funções Trigonométricas</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
                Qualquer função trigonométrica pode ser transformada alterando os seus parâmetros. 
                A forma geral é: <strong className="font-mono text-primary">f(x) = A·sin(Bx + C) + D</strong>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="math-card">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-primary mb-3">|A| — Amplitude</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      Controla a "altura" da onda. A amplitude é |A|. Se A = 3, a função oscila entre -3 e 3.
                    </p>
                    <div className="p-3 bg-muted/50 rounded-lg font-mono text-sm text-center">
                      f(x) = <strong className="text-primary">3</strong>·sin(x) → amplitude = 3
                    </div>
                  </CardContent>
                </Card>
                <Card className="math-card">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-primary mb-3">B — Frequência / Período</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      Controla a "velocidade" da onda. Período = 2π/|B|. Se B = 2, o período é π (oscila mais rápido).
                    </p>
                    <div className="p-3 bg-muted/50 rounded-lg font-mono text-sm text-center">
                      f(x) = sin(<strong className="text-primary">2</strong>x) → período = π
                    </div>
                  </CardContent>
                </Card>
                <Card className="math-card">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-primary mb-3">C — Fase (Deslocamento Horizontal)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      Desloca o gráfico horizontalmente. C {'>'} 0 desloca para a esquerda; C {'<'} 0 para a direita.
                    </p>
                    <div className="p-3 bg-muted/50 rounded-lg font-mono text-sm text-center">
                      f(x) = sin(x + <strong className="text-primary">π/2</strong>) = cos(x)
                    </div>
                  </CardContent>
                </Card>
                <Card className="math-card">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-primary mb-3">D — Deslocamento Vertical</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      Desloca o gráfico verticalmente. A linha média passa de y = 0 para y = D.
                    </p>
                    <div className="p-3 bg-muted/50 rounded-lg font-mono text-sm text-center">
                      f(x) = sin(x) + <strong className="text-primary">2</strong> → oscila entre 1 e 3
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="heading-lg text-gradient mb-10 text-center">Perguntas Frequentes</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Qual é a diferença entre seno e cosseno?",
                    a: "O seno mede a razão entre o cateto oposto e a hipotenusa (coordenada y no círculo unitário), enquanto o cosseno mede a razão entre o cateto adjacente e a hipotenusa (coordenada x). Os seus gráficos são idênticos, mas o cosseno está deslocado π/2 para a esquerda: cos(θ) = sin(θ + π/2)."
                  },
                  {
                    q: "O que é o período de uma função trigonométrica?",
                    a: "O período é o menor intervalo após o qual a função se repete. O seno e o cosseno têm período 2π (360°). A tangente e a cotangente têm período π (180°). Se multiplicarmos o argumento por B (como em sin(Bx)), o período passa a ser 2π/|B|."
                  },
                  {
                    q: "Para que servem as funções trigonométricas na vida real?",
                    a: "São usadas em inúmeras áreas: na física para descrever ondas e oscilações, na engenharia para cálculos estruturais, na música para síntese sonora, na computação gráfica para rotações 3D, no GPS para triangulação, em comunicações sem fio e em inteligência artificial."
                  },
                  {
                    q: "Como se determina a amplitude e o período de f(x) = A·sin(Bx)?",
                    a: "A amplitude é |A| (o valor absoluto do coeficiente à frente do seno). O período é 2π/|B|. Por exemplo, f(x) = 3·sin(2x) tem amplitude 3 e período π."
                  }
                ].map((faq, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-soft">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default FuncoesTrigonometricas;