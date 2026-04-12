import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Navigation, Atom, Stethoscope, Ruler, MapPin, Waves, Gamepad2 } from "lucide-react";
import SEO from '@/components/SEO';
import AdBanner from '@/components/AdBanner';

const Aplicacoes = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aplicações Práticas da Trigonometria",
    "description": "Descobre como a trigonometria é aplicada em engenharia, arquitetura, navegação, física, medicina, música e videojogos",
    "publisher": { "@type": "Organization", "name": "TriMundo", "url": "https://trimundo.pt" },
    "mainEntityOfPage": "https://trimundo.pt/aplicacoes"
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Onde é que a trigonometria é usada no dia a dia?", "acceptedAnswer": { "@type": "Answer", "text": "A trigonometria está presente no GPS, na música, nos videojogos, nas comunicações Wi-Fi, na construção de edifícios e pontes, e nos filtros de redes sociais." } },
      { "@type": "Question", "name": "A trigonometria é usada em videojogos?", "acceptedAnswer": { "@type": "Answer", "text": "Sim! Rotações 3D, iluminação, sombras, deteção de colisões e animações de personagens usam cálculos trigonométricos constantemente." } }
    ]
  };

  const aplicacoesData = [
    {
      categoria: "Construção e Design",
      icon: <Building2 className="w-6 h-6" />,
      color: "blue" as const,
      aplicacoes: [
        {
          area: "Engenharia Civil",
          descricao: "Cálculos trigonométricos são essenciais para o design e a construção de estruturas como pontes, edifícios e casas. Os engenheiros usam a trigonometria para garantir medidas precisas, calcular inclinações de rampas e escadas, e determinar as forças que atuam nas estruturas para garantir a sua segurança e estabilidade.",
          exemplos: ["Cálculo de inclinações", "Design de pontes", "Estruturas de edifícios", "Análise de forças"]
        },
        {
          area: "Arquitetura",
          descricao: "Na arquitetura, a trigonometria é utilizada no design de edificações para calcular alturas, distâncias e ângulos necessários para o projeto. É indispensável no design de telhados (calcular a inclinação ideal para escoamento de água), na orientação solar dos edifícios (maximizar ou minimizar a exposição ao sol), e no cálculo de sombras projetadas por edifícios vizinhos.",
          exemplos: ["Design de telhados", "Cálculo de sombras", "Orientação solar", "Acústica de salas"]
        }
      ]
    },
    {
      categoria: "Navegação e Exploração",
      icon: <Navigation className="w-6 h-6" />,
      color: "green" as const,
      aplicacoes: [
        {
          area: "Navegação e GPS",
          descricao: "A trigonometria é a base dos sistemas de posicionamento global (GPS). Os satélites GPS utilizam a triangulação — um método baseado em trigonometria — para determinar a posição exata de um recetor na Terra. Na navegação marítima e aérea, os navegadores usam a trigonometria esférica para traçar rotas sobre a curvatura da Terra, calculando distâncias e direções entre dois pontos do globo.",
          exemplos: ["Sistemas GPS", "Navegação marítima", "Cartografia", "Triangulação"]
        },
        {
          area: "Astronomia",
          descricao: "Os astrónomos utilizam a trigonometria desde a antiguidade para calcular distâncias a estrelas e planetas. O método da paralaxe estelar, por exemplo, usa triângulos formados pela posição da Terra em diferentes épocas do ano para medir a distância a estrelas próximas. A trigonometria também é usada para prever eclipses, calcular órbitas de satélites e determinar a posição de corpos celestes.",
          exemplos: ["Paralaxe estelar", "Posicionamento de satélites", "Previsão de eclipses", "Cálculo de órbitas"]
        }
      ]
    },
    {
      categoria: "Ciência e Tecnologia",
      icon: <Atom className="w-6 h-6" />,
      color: "purple" as const,
      aplicacoes: [
        {
          area: "Física",
          descricao: "A trigonometria é omnipresente na física. As ondas sonoras e eletromagnéticas são descritas por funções seno e cosseno. O movimento harmónico simples (como o de um pêndulo) é modelado por equações trigonométricas. Na mecânica, a trigonometria decompõe forças e velocidades nas suas componentes horizontal e vertical. Na ótica, a lei de Snell usa o seno para descrever a refração da luz.",
          exemplos: ["Ondas e som", "Movimento harmónico", "Decomposição de forças", "Ótica e refração"]
        },
        {
          area: "Medicina e Imagiologia",
          descricao: "Em diagnósticos por imagem, como tomografias computorizadas (TC) e ressonâncias magnéticas (RM), a trigonometria é fundamental. A reconstrução de imagens em TC baseia-se na transformada de Radon, que utiliza integrais trigonométricas. Na ultrassonografia, os ângulos de emissão e receção das ondas sonoras são calculados trigonometricamente para formar imagens precisas dos órgãos internos.",
          exemplos: ["Tomografia computadorizada", "Ressonância magnética", "Ultrassonografia", "Radioterapia"]
        }
      ]
    },
    {
      categoria: "Música e Entretenimento",
      icon: <Waves className="w-6 h-6" />,
      color: "orange" as const,
      aplicacoes: [
        {
          area: "Música e Acústica",
          descricao: "O som é uma onda, e as ondas são descritas por funções trigonométricas. Cada nota musical corresponde a uma frequência específica, representada por uma onda sinusoidal. A síntese sonora digital combina ondas seno de diferentes frequências e amplitudes para criar timbres complexos. Os equalizadores de áudio utilizam a análise de Fourier, baseada em trigonometria, para separar e modificar componentes de frequência.",
          exemplos: ["Síntese sonora", "Análise de Fourier", "Equalizadores", "Afinação de instrumentos"]
        },
        {
          area: "Videojogos e Computação Gráfica",
          descricao: "Na computação gráfica e nos videojogos, a trigonometria é usada constantemente. As rotações de objetos 3D utilizam matrizes baseadas em seno e cosseno. O cálculo de iluminação e sombras depende dos ângulos de incidência da luz. A deteção de colisões entre objetos, os movimentos de câmara e as animações de personagens também recorrem a cálculos trigonométricos.",
          exemplos: ["Rotações 3D", "Iluminação e sombras", "Deteção de colisões", "Animação de personagens"]
        }
      ]
    }
  ];

  const exemplosPraticos = [
    {
      titulo: "Medir a Altura de um Edifício",
      descricao: "Um observador está a 50 metros de um edifício e mede um ângulo de elevação de 35° até ao topo. Usando tan(35°) = h/50, obtemos h = 50 × tan(35°) ≈ 50 × 0,7002 = 35,01 metros.",
      formula: "h = d × tan(θ)",
      calculo: "h = 50 × tan(35°) ≈ 35,01 m",
      icon: <Ruler className="w-5 h-5" />
    },
    {
      titulo: "Largura de um Rio",
      descricao: "Para medir a largura de um rio, posiciona-te numa margem, marca um ponto na margem oposta e anda 100 metros paralelo ao rio. O ângulo para o ponto marcado é 53°. A largura é d = 100 × tan(53°) ≈ 132,7 metros.",
      formula: "d = L × tan(θ)",
      calculo: "d = 100 × tan(53°) ≈ 132,7 m",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      titulo: "Inclinação de uma Rampa",
      descricao: "Uma rampa de acesso tem 12 metros de comprimento e sobe 1,5 metros. O ângulo de inclinação é obtido por sin(θ) = 1,5/12 = 0,125, logo θ = arcsin(0,125) ≈ 7,18°. Cumpre a norma de acessibilidade (máx. 8,33%).",
      formula: "θ = arcsin(h / c)",
      calculo: "θ = arcsin(1,5/12) ≈ 7,18°",
      icon: <Building2 className="w-5 h-5" />
    },
    {
      titulo: "Distância entre Dois Navios",
      descricao: "De um farol a 80 metros de altura, avistam-se dois navios com ângulos de depressão de 30° e 45°. A distância do farol ao 1º navio é 80/tan(30°) ≈ 138,6 m, e ao 2º é 80/tan(45°) = 80 m. A distância entre eles é 138,6 - 80 ≈ 58,6 m.",
      formula: "d = h / tan(θ)",
      calculo: "d₁ - d₂ = 138,6 - 80 ≈ 58,6 m",
      icon: <Navigation className="w-5 h-5" />
    }
  ];

  const colorClasses = {
    blue: 'bg-math-blue/10 border-math-blue/20',
    green: 'bg-math-green/10 border-math-green/20',
    purple: 'bg-math-purple/10 border-math-purple/20',
    orange: 'bg-math-orange/10 border-math-orange/20',
  };

  const iconColors = {
    blue: 'text-math-blue',
    green: 'text-math-green',
    purple: 'text-math-purple',
    orange: 'text-math-orange',
  };

  return (
    <>
      <SEO
        title="Aplicações Práticas da Trigonometria | TriMundo"
        description="Descobre como a trigonometria é aplicada em engenharia civil, arquitetura, navegação, astronomia, física, medicina, música e videojogos com exemplos práticos e cálculos reais."
        keywords="aplicações trigonometria, engenharia, arquitetura, navegação, astronomia, GPS, música, videojogos, computação gráfica"
        canonical="https://trimundo.pt/aplicacoes"
        structuredData={[structuredData, faqData]}
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl text-white mb-6">
            Aplicações <span className="text-accent-light">Práticas da Trigonometria</span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            A trigonometria tem aplicações práticas e cruciais em diversas áreas, moldando o mundo moderno 
            através de cálculos precisos e análises fundamentais — da construção de pontes à criação de videojogos.
          </p>
        </div>
      </header>

      {/* Main Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gradient mb-4">
              Áreas de Aplicação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desde a construção de edifícios até a exploração espacial, a trigonometria está presente 
              em todas as áreas da ciência, tecnologia e entretenimento.
            </p>
          </div>

          <div className="space-y-12">
            {aplicacoesData.map((categoria, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className={`math-card ${colorClasses[categoria.color]} border-2`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className={`w-12 h-12 rounded-lg ${iconColors[categoria.color]} bg-current/10 flex items-center justify-center`}>
                        {categoria.icon}
                      </div>
                      {categoria.categoria}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {categoria.aplicacoes.map((aplicacao, i) => (
                        <div key={i} className="space-y-4">
                          <h4 className="text-lg font-semibold text-primary">{aplicacao.area}</h4>
                          <p className="text-muted-foreground leading-relaxed">{aplicacao.descricao}</p>
                          <div className="flex flex-wrap gap-2">
                            {aplicacao.exemplos.map((exemplo, j) => (
                              <Badge key={j} variant="secondary" className="text-xs">
                                {exemplo}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4">
        <AdBanner adSlot="6789012345" adFormat="horizontal" />
      </div>

      {/* Practical Examples with Calculations */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gradient mb-4">
              Exemplos Resolvidos do Dia a Dia
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Situações práticas onde a trigonometria resolve problemas reais, com cálculos passo a passo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exemplosPraticos.map((exemplo, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <Card className="math-card h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        {exemplo.icon}
                      </div>
                      {exemplo.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {exemplo.descricao}
                    </p>
                    <div className="p-4 bg-muted/50 rounded-lg border">
                      <p className="text-sm text-muted-foreground mb-2">Fórmula utilizada:</p>
                      <code className="text-primary font-mono text-lg">{exemplo.formula}</code>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-sm font-semibold text-primary font-mono">{exemplo.calculo}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curiosidades */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-gradient mb-8 text-center">
              Curiosidades sobre a Trigonometria
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="math-card bg-math-blue/5 border-math-blue/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-math-blue mb-3">🌊 Ondas do Mar</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    As ondas do oceano podem ser modeladas como a soma de múltiplas ondas sinusoidais de diferentes 
                    frequências e amplitudes. Os oceanógrafos usam a análise de Fourier para prever marés e ondulação.
                  </p>
                </CardContent>
              </Card>
              <Card className="math-card bg-math-green/5 border-math-green/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-math-green mb-3">🎵 Nota Lá (440 Hz)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A nota Lá usada para afinar instrumentos vibra a 440 Hz, o que significa que a onda sonora 
                    completa 440 ciclos de seno por segundo. Todas as notas musicais são frequências trigonométricas.
                  </p>
                </CardContent>
              </Card>
              <Card className="math-card bg-math-purple/5 border-math-purple/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-math-purple mb-3">📡 Wi-Fi e 5G</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    As comunicações sem fio (Wi-Fi, 5G, Bluetooth) transmitem dados através de ondas eletromagnéticas 
                    moduladas trigonometricamente. Sem trigonometria, não haveria internet sem fios.
                  </p>
                </CardContent>
              </Card>
              <Card className="math-card bg-math-orange/5 border-math-orange/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-math-orange mb-3">🏔️ Altura do Everest</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A altura do Monte Everest (8 848,86 m) foi originalmente calculada em 1856 usando trigonometria, 
                    a partir de medições de ângulos feitas a centenas de quilómetros de distância.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-gradient mb-8">
              O Impacto da Trigonometria
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Sem a trigonometria, muitas das tecnologias e estruturas que damos por garantidas hoje simplesmente não existiriam. 
              Desde os arranha-céus que definem os horizontes das cidades até aos satélites que nos conectam globalmente, 
              a trigonometria é a linguagem matemática que torna possível o impossível.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="math-card animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-accent mb-2">∞</div>
                <div className="text-muted-foreground">Aplicações Infinitas</div>
              </div>
              <div className="math-card animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-accent mb-2">360°</div>
                <div className="text-muted-foreground">Perspectiva Completa</div>
              </div>
              <div className="math-card animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-bold text-accent mb-2">π</div>
                <div className="text-muted-foreground">Precisão Universal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="heading-lg text-gradient mb-10 text-center">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              { q: "Onde é que a trigonometria é usada no dia a dia?", a: "A trigonometria está presente em muitas situações do quotidiano: no GPS do telemóvel (triangulação), na música que ouves (ondas sonoras), nos videojogos que jogas (gráficos 3D), nas comunicações Wi-Fi (modulação de sinais), na construção de edifícios e pontes (cálculo de ângulos e forças), e até nos filtros de redes sociais (visão computacional)." },
              { q: "Os engenheiros usam trigonometria?", a: "Sim, a trigonometria é absolutamente essencial na engenharia. Engenheiros civis usam-na para calcular forças em estruturas, inclinações e estabilidade. Engenheiros eletrotécnicos modelam correntes alternadas com funções sinusoidais. Engenheiros de telecomunicações usam-na para modular sinais de rádio e Wi-Fi. Engenheiros aeroespaciais calculam trajetórias e órbitas." },
              { q: "Como é que a trigonometria é usada na medicina?", a: "A trigonometria é fundamental em imagiologia médica. A tomografia computorizada (TC) usa a transformada de Radon (baseada em integrais trigonométricas) para reconstruir imagens de cortes do corpo. A ressonância magnética usa transformadas de Fourier. A ultrassonografia calcula ângulos de emissão e receção de ondas sonoras. A radioterapia utiliza cálculos trigonométricos para direcionar a radiação com precisão." },
              { q: "A trigonometria é usada em videojogos?", a: "Sim, constantemente! As rotações de objetos 3D usam matrizes baseadas em seno e cosseno. O cálculo de iluminação e sombras depende dos ângulos de incidência da luz. A deteção de colisões entre objetos, os movimentos de câmara e as animações de personagens também recorrem a cálculos trigonométricos. Sem trigonometria, os videojogos modernos não existiriam." }
            ].map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Aplicacoes;
