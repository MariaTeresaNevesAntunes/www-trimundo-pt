import { Clock, MapPin, Star, Compass, Calculator, Globe, BookOpen, Landmark, Cpu, Satellite } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';
import AdBanner from '@/components/AdBanner';

const Historia = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "História da Trigonometria: 4000 Anos de Evolução",
    "description": "Descobre a evolução da trigonometria desde os babilónios até à era moderna, passando pelos gregos, árabes, navegadores portugueses, revolução científica e era digital.",
    "articleBody": "Uma jornada fascinante através dos milénios, desde as primeiras observações astronómicas até às aplicações modernas em inteligência artificial e exploração espacial.",
    "publisher": { "@type": "Organization", "name": "TriMundo", "url": "https://trimundo.pt" },
    "mainEntityOfPage": "https://trimundo.pt/historia",
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-12"
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quem inventou a trigonometria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A trigonometria não foi inventada por uma única pessoa. Os babilónios (2000 a.C.) criaram as primeiras tabelas de relações entre lados de triângulos. Hiparco de Niceia (190-120 a.C.) é considerado o 'pai da trigonometria' por ter desenvolvido as primeiras tabelas de cordas sistemáticas. Os matemáticos árabes, como Al-Battani, introduziram a função seno como a conhecemos hoje."
        }
      },
      {
        "@type": "Question",
        "name": "Qual é a origem da palavra trigonometria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A palavra 'trigonometria' vem do grego: 'trigonon' (τρίγωνον) significa 'triângulo' e 'metron' (μέτρον) significa 'medida'. Literalmente, trigonometria é 'a medição de triângulos'. O termo foi usado pela primeira vez por Bartholomaeus Pitiscus no seu livro de 1595."
        }
      },
      {
        "@type": "Question",
        "name": "Como é que os portugueses usaram a trigonometria nos Descobrimentos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Os navegadores portugueses usavam instrumentos como o astrolábio e o quadrante para medir o ângulo de elevação de estrelas (como a Estrela Polar ou o Sol). Com esses ângulos e tabelas trigonométricas, calculavam a latitude em que se encontravam. Esta técnica, chamada navegação astronómica, foi essencial para as viagens de Vasco da Gama, Pedro Álvares Cabral e outros exploradores."
        }
      },
      {
        "@type": "Question",
        "name": "Quando surgiu o conceito de seno?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O conceito moderno de seno tem raízes na função 'jya' (meia-corda) da matemática indiana do século V, desenvolvida por Aryabhata. Os matemáticos árabes traduziram o termo para 'jiba', que foi mal transliterado para o latim como 'sinus' (cavidade), dando origem à palavra 'seno' que usamos hoje."
        }
      },
      {
        "@type": "Question",
        "name": "Qual é a fórmula mais bonita da trigonometria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Muitos matemáticos consideram a fórmula de Euler, e^(iπ) + 1 = 0, como a mais bela de toda a matemática. Esta fórmula, derivada de e^(ix) = cos(x) + i·sin(x), conecta cinco constantes fundamentais: e (número de Euler), i (unidade imaginária), π (pi), 1 (identidade multiplicativa) e 0 (identidade aditiva), unificando a trigonometria com a análise complexa."
        }
      }
    ]
  };

  const timelineEvents = [
    {
      period: "~2000 a.C.",
      title: "Civilização Babilónica",
      description: "Os babilónios foram pioneiros no estudo das relações entre ângulos e lados de triângulos. Usavam um sistema numérico de base 60 (sexagesimal) — é por isso que dividimos os ângulos em 360° e as horas em 60 minutos. A tablete Plimpton 322 (c. 1800 a.C.), descoberta no atual Iraque, contém 15 ternos pitagóricos que demonstram um conhecimento surpreendentemente avançado.",
      details: "Os babilónios observavam os céus para prever eclipses e estações do ano. As suas tabelas de relações angulares permitiam calcular distâncias e alturas de forma prática, sendo utilizadas na construção de templos, canais de irrigação e muralhas defensivas. Este conhecimento prático antecede a formalização grega em mais de mil anos.",
      icon: <Star className="w-6 h-6" />,
      color: "blue"
    },
    {
      period: "~1500 a.C.",
      title: "Antigo Egito",
      description: "Os egípcios aplicavam conceitos proto-trigonométricos na construção das pirâmides. O Papiro de Rhind (c. 1650 a.C.) contém problemas que envolvem o 'seked' — a inclinação de uma face da pirâmide, essencialmente o inverso da tangente moderna.",
      details: "Para construir a Grande Pirâmide de Gizé com uma inclinação de 51°50', os engenheiros egípcios precisavam de controlar a proporção entre o recuo horizontal e a subida vertical de cada camada de blocos. Este 'seked' era expresso como o número de palmos horizontais por cada cúbito vertical, funcionando como uma versão antiga da cotangente.",
      icon: <Landmark className="w-6 h-6" />,
      color: "orange"
    },
    {
      period: "300–100 a.C.",
      title: "Gregos Antigos",
      description: "Hiparco de Niceia (190–120 a.C.), considerado o 'pai da trigonometria', criou as primeiras tabelas de cordas sistemáticas para mapear posições estelares. Dividiu o círculo em 360° (influência babilónica) e compilou tabelas que relacionavam ângulos centrais com comprimentos de cordas — precursoras das tabelas de senos.",
      details: "Ptolomeu de Alexandria (90–168 d.C.) expandiu o trabalho de Hiparco no seu tratado 'Almagesto' (c. 150 d.C.), onde apresentou uma tabela de cordas com precisão de meio grau, equivalente a uma tabela de senos moderna com 4 casas decimais. Também demonstrou o teorema que hoje leva o seu nome (Teorema de Ptolomeu), que relaciona os lados e diagonais de um quadrilátero inscrito num círculo. Euclides, embora mais conhecido pela geometria, também contribuiu com proposições sobre triângulos que seriam fundamentais para a trigonometria.",
      icon: <MapPin className="w-6 h-6" />,
      color: "green"
    },
    {
      period: "500–600 d.C.",
      title: "Matemáticos Indianos",
      description: "Aryabhata (476–550 d.C.) introduziu o conceito de 'jya' (meia-corda), precursor direto do seno moderno, e compilou tabelas de senos com grande precisão. Brahmagupta (598–668 d.C.) desenvolveu fórmulas para a área de triângulos e ciclos usando relações trigonométricas.",
      details: "A contribuição indiana foi revolucionária por dois motivos: primeiro, substituíram as tabelas de cordas gregas (que relacionavam um ângulo com a corda inteira) por tabelas de meias-cordas (senos), tornando os cálculos mais simples e diretos. Segundo, Aryabhata desenvolveu métodos de interpolação para calcular senos de ângulos intermediários, obtendo uma precisão notável. Bhaskara II (1114–1185 d.C.) mais tarde apresentou demonstrações do teorema de Pitágoras e trabalhou com funções trigonométricas inversas.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "purple"
    },
    {
      period: "800–1400 d.C.",
      title: "Idade de Ouro Islâmica",
      description: "Al-Battani (858–929 d.C.) introduziu a função seno na forma que conhecemos hoje e utilizou a tangente e cotangente sistematicamente. Al-Khwarizmi compilou tabelas de senos e tangentes. Abu al-Wafa (940–998 d.C.) introduziu as funções secante e cossecante e desenvolveu identidades trigonométricas.",
      details: "Os matemáticos árabes não só preservaram e traduziram o conhecimento grego e indiano como o expandiram significativamente. Nasir al-Din al-Tusi (1201–1274) foi o primeiro a tratar a trigonometria como uma disciplina separada da astronomia, publicando o 'Tratado sobre o Quadrilátero' — o primeiro livro dedicado exclusivamente à trigonometria. Também formulou a Lei dos Senos para triângulos esféricos, essencial para a navegação. A palavra 'seno' tem origem numa tradução errónea: o termo sânscrito 'jiva' foi transliterado para o árabe 'jiba', que foi confundido com 'jayb' (cavidade), traduzido para o latim como 'sinus'.",
      icon: <Calculator className="w-6 h-6" />,
      color: "blue"
    },
    {
      period: "1400–1600",
      title: "Renascimento e Descobrimentos",
      description: "Regiomontanus (1436–1476) escreveu 'De Triangulis', o primeiro tratado europeu moderno de trigonometria. Os navegadores portugueses, como Vasco da Gama e Pedro Álvares Cabral, utilizaram instrumentos como o astrolábio e o quadrante para calcular latitudes.",
      details: "Portugal tornou-se pioneiro na navegação astronómica graças à Escola de Sagres e aos matemáticos e cartógrafos que desenvolveram tabelas trigonométricas adaptadas à navegação. O Regimento do Astrolábio, um manual de navegação português, continha tabelas de declinação solar e instruções para calcular a latitude usando a altura do Sol ao meio-dia — pura trigonometria aplicada. Bartholomaeus Pitiscus cunhou o termo 'trigonometria' no seu livro de 1595. François Viète (1540–1603) desenvolveu fórmulas para senos e cossenos de ângulos múltiplos, ligando a trigonometria à álgebra.",
      icon: <Compass className="w-6 h-6" />,
      color: "orange"
    },
    {
      period: "1600–1800",
      title: "Revolução Científica",
      description: "Isaac Newton e Gottfried Leibniz incorporaram funções trigonométricas no cálculo infinitesimal. Leonhard Euler (1707–1783) unificou a trigonometria com a análise através da sua célebre fórmula e^(ix) = cos(x) + i·sin(x) e estabeleceu a notação moderna para funções trigonométricas.",
      details: "Euler foi fundamental para a trigonometria moderna: definiu as funções trigonométricas como funções de números reais (não apenas ângulos), introduziu a notação sin, cos, tan que usamos hoje, e descobriu relações profundas entre funções trigonométricas e exponenciais complexas. A fórmula de Euler, e^(iπ) + 1 = 0, é considerada uma das mais belas de toda a matemática. Joseph Fourier (1768–1830) demonstrou que qualquer função periódica pode ser expressa como uma soma de senos e cossenos (séries de Fourier), revolucionando a física, a engenharia e, mais tarde, o processamento de sinais.",
      icon: <Globe className="w-6 h-6" />,
      color: "green"
    },
    {
      period: "1800–1950",
      title: "Era Industrial e Moderna",
      description: "A trigonometria tornou-se indispensável na engenharia, na eletricidade (correntes alternadas descritas por senos), nas telecomunicações (modulação de frequência) e na análise de Fourier para processamento de sinais.",
      details: "A corrente alternada (AC), que alimenta as nossas casas, é descrita por funções sinusoidais: V(t) = V₀·sin(ωt). Nikola Tesla e outros engenheiros usaram a trigonometria extensivamente para projetar geradores e transformadores. Na Segunda Guerra Mundial, a trigonometria foi crucial para cálculos balísticos, radar e criptografia. Alan Turing e a equipa de Bletchley Park utilizaram análise harmónica (baseada em séries de Fourier) para decifrar códigos.",
      icon: <Cpu className="w-6 h-6" />,
      color: "purple"
    },
    {
      period: "1950–Presente",
      title: "Era Digital e Espacial",
      description: "A trigonometria é o alicerce do GPS, da computação gráfica (rotações 3D), da inteligência artificial (redes neurais), da exploração espacial e de toda a tecnologia digital moderna.",
      details: "Sem trigonometria, não haveria GPS (usa triangulação e trigonometria esférica), videojogos 3D (rotações de matrizes trigonométricas), ressonâncias magnéticas (transformada de Fourier), compressão de imagens JPEG (transformada discreta do cosseno), reconhecimento de voz (análise espectral), ou comunicações sem fios (modulação de sinais). Na exploração espacial, a NASA usa trigonometria esférica para calcular trajetórias interplanetárias. As redes neurais em IA utilizam funções de ativação trigonométricas e codificações posicionais baseadas em seno e cosseno (como nos modelos Transformer).",
      icon: <Satellite className="w-6 h-6" />,
      color: "blue"
    }
  ];

  const colorClasses = {
    blue: 'bg-math-blue text-white',
    green: 'bg-math-green text-white',
    purple: 'bg-math-purple text-white',
    orange: 'bg-math-orange text-white',
  };

  const faqs = [
    {
      pergunta: "Quem inventou a trigonometria?",
      resposta: "A trigonometria não foi inventada por uma única pessoa, mas evoluiu ao longo de milénios. Os babilónios (2000 a.C.) criaram as primeiras tabelas de relações angulares. Hiparco de Niceia (190–120 a.C.) é frequentemente chamado o 'pai da trigonometria' por ter sistematizado as tabelas de cordas. Os matemáticos indianos introduziram o conceito de seno, e os árabes formalizaram as seis funções trigonométricas que usamos hoje."
    },
    {
      pergunta: "Qual é a origem da palavra 'trigonometria'?",
      resposta: "Vem do grego: 'trigonon' (triângulo) + 'metron' (medida). O termo foi usado pela primeira vez por Bartholomaeus Pitiscus no seu livro 'Trigonometria: sive de solutione triangulorum tractatus brevis et perspicuus' publicado em 1595."
    },
    {
      pergunta: "Como é que os navegadores portugueses usaram a trigonometria?",
      resposta: "Os navegadores portugueses usavam o astrolábio e o quadrante para medir a altura angular do Sol ou da Estrela Polar. Com esses ângulos e tabelas de declinação solar (baseadas em cálculos trigonométricos), determinavam a latitude em que se encontravam. Esta técnica foi fundamental para as viagens de Vasco da Gama à Índia (1498) e de Pedro Álvares Cabral ao Brasil (1500)."
    },
    {
      pergunta: "Por que é que dividimos os ângulos em 360°?",
      resposta: "Esta convenção vem dos babilónios, que usavam um sistema numérico de base 60. Como 6 × 60 = 360, o círculo foi dividido em 360 partes iguais. Além disso, 360 é um número com muitos divisores (24 no total), o que facilita a divisão do círculo em partes iguais — por 2, 3, 4, 5, 6, 8, 9, 10, 12, etc."
    },
    {
      pergunta: "De onde vem a palavra 'seno'?",
      resposta: "A palavra tem uma história curiosa de tradução: o matemático indiano Aryabhata (séc. V) usou o termo sânscrito 'jya' (corda). Os árabes transliteraram-no como 'jiba'. Quando o texto foi traduzido para latim, 'jiba' foi confundido com 'jayb' (que em árabe significa 'cavidade' ou 'seio'), traduzido como 'sinus' — a origem do português 'seno'."
    }
  ];

  return (
    <>
      <SEO
        title="História da Trigonometria: 4000 Anos | TriMundo"
        description="Descobre a fascinante evolução da trigonometria: dos babilónios aos gregos, dos matemáticos árabes e indianos aos navegadores portugueses, até à era digital e espacial."
        keywords="história trigonometria, babilónios, Hiparco, gregos, matemáticos árabes, indianos, navegadores portugueses, Euler, Fourier, evolução matemática"
        canonical="https://trimundo.pt/historia"
        structuredData={[structuredData, faqData]}
      />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <header className="py-20 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="heading-xl text-white mb-6">
              História da <span className="text-accent-light">Trigonometria</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Uma jornada fascinante através de 4000 anos de história, desde as primeiras 
              observações astronómicas dos babilónios até às aplicações em inteligência artificial 
              e exploração espacial que moldam o nosso mundo.
            </p>
          </div>
        </header>

        <main>
          {/* Intro Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="heading-lg text-gradient mb-6 text-center">Uma Viagem de 4000 Anos</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                A trigonometria é uma das áreas mais antigas da matemática. Nasceu da necessidade prática de 
                medir distâncias, calcular alturas e mapear os céus. Ao longo dos milénios, foi desenvolvida 
                por civilizações de todo o mundo — cada uma acrescentando novas descobertas e ferramentas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desde as tabletes de argila da Mesopotâmia até aos algoritmos de inteligência artificial, 
                a trigonometria transformou-se de uma ferramenta prática de medição numa linguagem universal 
                da ciência e da tecnologia. Conhecer a sua história é compreender como o conhecimento humano 
                se constrói, camada a camada, geração após geração.
              </p>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="heading-lg text-gradient mb-16 text-center">Linha do Tempo</h2>
              <div className="max-w-4xl mx-auto">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="flex items-start gap-8 mb-16 last:mb-0 animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                    <div className={`w-16 h-16 rounded-full ${colorClasses[event.color as keyof typeof colorClasses]} flex items-center justify-center flex-shrink-0 shadow-medium`}>
                      {event.icon}
                    </div>
                    <div className="flex-1">
                      <div className="bg-card border border-border/50 rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {event.period}
                          </span>
                          <Clock className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gradient">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {event.description}
                        </p>
                        <div className="bg-muted/50 rounded-lg p-4 border border-border/30">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {event.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ad Banner */}
          <div className="container mx-auto px-4">
            <AdBanner adSlot="2345678901" adFormat="horizontal" />
          </div>

          {/* Key Figures */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="heading-lg text-center text-gradient mb-12">
                  Figuras-Chave da Trigonometria
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      nome: "Hiparco de Niceia",
                      periodo: "190–120 a.C.",
                      contribuicao: "Criou as primeiras tabelas de cordas e é considerado o pai da trigonometria. Catalogou mais de 850 estrelas usando métodos trigonométricos.",
                      destaque: "Pai da Trigonometria"
                    },
                    {
                      nome: "Ptolomeu",
                      periodo: "90–168 d.C.",
                      contribuicao: "Autor do Almagesto, com tabelas de cordas de precisão superior. Formulou o Teorema de Ptolomeu para quadriláteros cíclicos.",
                      destaque: "Almagesto"
                    },
                    {
                      nome: "Aryabhata",
                      periodo: "476–550 d.C.",
                      contribuicao: "Introduziu o conceito de 'jya' (seno) e compilou tabelas trigonométricas com métodos de interpolação inovadores.",
                      destaque: "Conceito de Seno"
                    },
                    {
                      nome: "Al-Battani",
                      periodo: "858–929 d.C.",
                      contribuicao: "Reformulou a trigonometria grega usando senos em vez de cordas. Calculou a obliquidade da eclíptica com grande precisão.",
                      destaque: "Seno Moderno"
                    },
                    {
                      nome: "Nasir al-Din al-Tusi",
                      periodo: "1201–1274",
                      contribuicao: "Escreveu o primeiro tratado dedicado exclusivamente à trigonometria e formulou a Lei dos Senos para triângulos esféricos.",
                      destaque: "Trigonometria Independente"
                    },
                    {
                      nome: "Leonhard Euler",
                      periodo: "1707–1783",
                      contribuicao: "Unificou trigonometria e análise complexa com e^(ix) = cos(x) + i·sin(x). Estabeleceu a notação moderna sin, cos, tan.",
                      destaque: "Fórmula de Euler"
                    }
                  ].map((figura, i) => (
                    <Card key={i} className="math-card">
                      <CardContent className="pt-6">
                        <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full inline-block mb-3">
                          {figura.destaque}
                        </div>
                        <h3 className="font-bold text-lg text-foreground mb-1">{figura.nome}</h3>
                        <p className="text-xs text-muted-foreground mb-3">{figura.periodo}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{figura.contribuicao}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Curiosity Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="heading-lg text-center text-gradient mb-12">
                  Sabias que...?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="math-card animate-scale-in">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Compass className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Navegação Portuguesa</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sem trigonometria, Vasco da Gama talvez nunca tivesse chegado à Índia. 
                      Os navegadores portugueses usavam o quadrante e o astrolábio para calcular 
                      posições usando funções trigonométricas. O Regimento do Astrolábio, criado 
                      em Portugal, continha tabelas de declinação solar fundamentais para a navegação.
                    </p>
                  </div>

                  <div className="math-card animate-scale-in" style={{ animationDelay: '0.2s' }}>
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Star className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Origem do Nome</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A palavra "trigonometria" vem do grego: "trigonon" (triângulo) e 
                      "metron" (medida). O termo foi usado pela primeira vez por Bartholomaeus 
                      Pitiscus em 1595, mas a disciplina já existia há mais de 3000 anos antes de receber nome.
                    </p>
                  </div>

                  <div className="math-card animate-scale-in" style={{ animationDelay: '0.4s' }}>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Sistema Sexagesimal</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Dividimos os ângulos em 360° por causa dos babilónios, que usavam base 60. 
                      O número 360 tem 24 divisores, facilitando a divisão do círculo. É também por 
                      isso que temos 60 minutos na hora e 60 segundos no minuto — uma herança de 4000 anos.
                    </p>
                  </div>

                  <div className="math-card animate-scale-in" style={{ animationDelay: '0.6s' }}>
                    <div className="w-12 h-12 bg-math-purple/10 rounded-lg flex items-center justify-center mb-4">
                      <Calculator className="w-6 h-6 text-math-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Era Digital</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hoje, a trigonometria é fundamental para gráficos por computador, 
                      jogos 3D, sistemas GPS, compressão de imagens JPEG (que usa a transformada 
                      discreta do cosseno), reconhecimento de voz e até redes neurais de IA.
                    </p>
                  </div>

                  <div className="math-card animate-scale-in" style={{ animationDelay: '0.8s' }}>
                    <div className="w-12 h-12 bg-math-green/10 rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-math-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Erro de Tradução Feliz</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A palavra "seno" existe por causa de um erro de tradução! O termo sânscrito 
                      "jya" (corda) foi transliterado para o árabe como "jiba", confundido com "jayb" 
                      (cavidade), e traduzido para o latim como "sinus" — dando origem ao português "seno".
                    </p>
                  </div>

                  <div className="math-card animate-scale-in" style={{ animationDelay: '1s' }}>
                    <div className="w-12 h-12 bg-math-orange/10 rounded-lg flex items-center justify-center mb-4">
                      <Satellite className="w-6 h-6 text-math-orange" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Exploração Espacial</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A NASA usa trigonometria esférica para calcular trajetórias de sondas 
                      interplanetárias. A missão Apollo 11, que levou o Homem à Lua em 1969, 
                      dependeu de cálculos trigonométricos para a navegação e aterragem lunar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="heading-lg text-gradient mb-12 text-center">
                  Perguntas Frequentes
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-soft">
                      <h3 className="text-lg font-semibold text-foreground mb-3">{faq.pergunta}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.resposta}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Quote Section */}
          <section className="py-20 hero-gradient">
            <div className="container mx-auto px-4 text-center">
              <blockquote className="max-w-4xl mx-auto text-white">
                <p className="text-2xl md:text-3xl font-light mb-6 leading-relaxed">
                  "A trigonometria é a ponte entre a geometria antiga e a física moderna, 
                  conectando as estrelas aos pixéis dos nossos ecrãs."
                </p>
                <footer className="text-xl text-accent-light">
                  — A evolução do conhecimento humano
                </footer>
              </blockquote>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Historia;