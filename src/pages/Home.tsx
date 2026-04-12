// TriMundo - Página Inicial
import Hero from '@/components/Hero';
import ConceptCard from '@/components/ConceptCard';
import SEO from '@/components/SEO';
import AdBanner from '@/components/AdBanner';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  History, 
  Calculator, 
  Target, 
  Zap, 
  Building, 
  Music,
  Rocket,
  Brain,
  BookOpen,
  TrendingUp,
  GraduationCap,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "TriMundo",
    "description": "Plataforma educativa interativa para aprender trigonometria de forma visual e contextualizada",
    "url": "https://trimundo.pt",
    "educationalProgramMode": "online",
    "sameAs": "https://trimundo.pt"
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Início",
      "item": "https://trimundo.pt"
    }]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é trigonometria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A trigonometria é o ramo da matemática que estuda as relações entre os ângulos e os lados dos triângulos. As suas três funções principais — seno, cosseno e tangente — permitem calcular distâncias, alturas e ângulos em inúmeras situações práticas, desde a navegação até à engenharia."
        }
      },
      {
        "@type": "Question",
        "name": "Para que serve a trigonometria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A trigonometria é essencial em muitas áreas: engenharia civil (cálculo de estruturas), navegação (GPS e rotas marítimas), física (ondas e forças), medicina (imagiologia), computação gráfica (jogos 3D), música (síntese sonora) e astronomia (cálculo de distâncias estelares)."
        }
      },
      {
        "@type": "Question",
        "name": "Quais são as funções trigonométricas principais?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As três funções principais são o seno (sin), o cosseno (cos) e a tangente (tan). Num triângulo retângulo: sin θ = cateto oposto / hipotenusa, cos θ = cateto adjacente / hipotenusa, e tan θ = cateto oposto / cateto adjacente. Existem ainda três funções recíprocas: cossecante, secante e cotangente."
        }
      },
      {
        "@type": "Question",
        "name": "O TriMundo é gratuito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, todo o conteúdo do TriMundo é completamente gratuito e acessível a qualquer pessoa, em qualquer dispositivo. Oferecemos explicações detalhadas, exercícios resolvidos, flash cards interativos e exemplos práticos sem necessidade de registo."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="TriMundo — Descobre a Trigonometria no Mundo Real"
        description="Descobre a Trigonometria no Mundo Real. Aprende trigonometria de forma interativa e visual. História, conceitos fundamentais, ângulos notáveis e aplicações no mundo real."
        keywords="trigonometria, matemática, seno, cosseno, tangente, ângulos notáveis, aprender trigonometria, exercícios trigonometria"
        canonical="https://trimundo.pt"
        structuredData={[structuredData, breadcrumbData, faqData]}
      />
      <div className="min-h-screen">
        <Hero />
        
        <main>
          {/* What is Trigonometry */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="heading-lg text-gradient mb-6 text-center">O Que É a Trigonometria?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A <strong className="text-foreground">trigonometria</strong> é o ramo da matemática que estuda as 
                  relações entre os ângulos e os lados dos triângulos. A palavra vem do grego: <em>trigonon</em> (triângulo) 
                  e <em>metron</em> (medida) — literalmente, "a medição de triângulos".
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Mas a trigonometria vai muito além dos triângulos. As suas funções — <strong>seno</strong>, <strong>cosseno</strong> e 
                  <strong> tangente</strong> — são ferramentas universais usadas para descrever ondas, rotações, oscilações 
                  e qualquer fenómeno cíclico. Desde as marés do oceano até à transmissão de Wi-Fi, desde a música que 
                  ouves até aos gráficos 3D dos videojogos, a trigonometria está presente em tudo.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com mais de <strong>4000 anos de história</strong>, a trigonometria é uma das áreas mais antigas e mais 
                  úteis da matemática. Os babilónios usavam-na para prever eclipses, os egípcios para construir pirâmides, 
                  os navegadores portugueses para descobrir novos mundos, e hoje usamo-la para explorar o espaço e criar 
                  inteligência artificial.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 section-gradient">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="heading-lg text-gradient mb-4">
                  Jornada pela Trigonometria
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Explora cada conceito de forma visual e interativa. 
                  Desde os fundamentos até as aplicações mais avançadas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ConceptCard
                  title="História"
                  description="Descobre como a trigonometria evoluiu desde os antigos babilónios até aos navegadores portugueses."
                  icon={<History className="w-6 h-6" />}
                  color="blue"
                  link="/historia"
                  delay={0.1}
                />
                
                <ConceptCard
                  title="Conceitos Fundamentais"
                  description="Seno, cosseno, tangente - aprende o que significam e como se relacionam no triângulo e no círculo."
                  icon={<Calculator className="w-6 h-6" />}
                  color="green"
                  link="/conceitos"
                  delay={0.2}
                />
                
                <ConceptCard
                  title="Ângulos Notáveis"
                  description="Os valores essenciais de 0°, 30°, 45°, 60°, 90° e os quadrantes do círculo trigonométrico."
                  icon={<Target className="w-6 h-6" />}
                  color="purple"
                  link="/angulos-notaveis"
                  delay={0.3}
                />
                
                <ConceptCard
                  title="Identidades"
                  description="As relações matemáticas elegantes que conectam todas as funções trigonométricas."
                  icon={<Zap className="w-6 h-6" />}
                  color="orange"
                  link="/identidades"
                  delay={0.4}
                />
              </div>

              {/* Second row of content cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <ConceptCard
                  title="Funções Trigonométricas"
                  description="Estudo completo das 6 funções: seno, cosseno, tangente, cotangente, secante e cossecante."
                  icon={<TrendingUp className="w-6 h-6" />}
                  color="blue"
                  link="/funcoes-trigonometricas"
                  delay={0.5}
                />
                <ConceptCard
                  title="Limites Trigonométricos"
                  description="Os limites notáveis da trigonometria, essenciais para o cálculo diferencial e integral."
                  icon={<BookOpen className="w-6 h-6" />}
                  color="green"
                  link="/limites-trigonometricos"
                  delay={0.6}
                />
                <ConceptCard
                  title="Exercícios Resolvidos"
                  description="30 exercícios organizados por dificuldade com resoluções detalhadas passo a passo."
                  icon={<GraduationCap className="w-6 h-6" />}
                  color="purple"
                  link="/exercicios"
                  delay={0.7}
                />
              </div>
            </div>
          </section>

          {/* Ad Banner */}
          <div className="container mx-auto px-4">
            <AdBanner adSlot="1234567890" adFormat="horizontal" />
          </div>

          {/* Why Learn Trigonometry */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="heading-lg text-gradient mb-10 text-center">
                  Porquê Aprender Trigonometria?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      titulo: "Base para Matemática Avançada",
                      descricao: "A trigonometria é pré-requisito para o cálculo diferencial e integral, álgebra linear e análise matemática. Sem ela, é impossível avançar em STEM.",
                      icon: <Calculator className="w-6 h-6" />
                    },
                    {
                      titulo: "Presente nos Exames Nacionais",
                      descricao: "A trigonometria é um tema recorrente nos exames nacionais de Matemática A em Portugal. Dominar este tema pode fazer a diferença na tua nota.",
                      icon: <GraduationCap className="w-6 h-6" />
                    },
                    {
                      titulo: "Aplicações no Mundo Real",
                      descricao: "Engenheiros, arquitetos, físicos, programadores, músicos e médicos usam trigonometria diariamente no seu trabalho profissional.",
                      icon: <Building className="w-6 h-6" />
                    },
                    {
                      titulo: "Desenvolve o Raciocínio",
                      descricao: "Estudar trigonometria desenvolve o pensamento abstrato, a capacidade de resolução de problemas e a visualização espacial.",
                      icon: <Brain className="w-6 h-6" />
                    }
                  ].map((item, i) => (
                    <Card key={i} className="math-card">
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                          {item.icon}
                        </div>
                        <h3 className="font-bold text-lg text-foreground mb-2">{item.titulo}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.descricao}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Applications Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="heading-lg text-gradient mb-4">
                  Onde Encontras Trigonometria?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  A trigonometria está em todo o lado. Vê como ela molda o nosso mundo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ConceptCard
                  title="Arquitetura"
                  description="Cálculo de inclinações, estruturas e a estabilidade de edifícios impressionantes."
                  icon={<Building className="w-6 h-6" />}
                  color="blue"
                  delay={0.1}
                />
                
                <ConceptCard
                  title="Música"
                  description="Ondas sonoras, frequências e a matemática por trás dos sons que ouvimos."
                  icon={<Music className="w-6 h-6" />}
                  color="green"
                  delay={0.2}
                />
                
                <ConceptCard
                  title="Navegação Espacial"
                  description="Como os satélites encontram o caminho e as missões chegam a outros planetas."
                  icon={<Rocket className="w-6 h-6" />}
                  color="purple"
                  delay={0.3}
                />
                
                <ConceptCard
                  title="Inteligência Artificial"
                  description="Algoritmos, visão computacional e redes neurais usam trigonometria constantemente."
                  icon={<Brain className="w-6 h-6" />}
                  color="orange"
                  delay={0.4}
                />
              </div>

              <div className="text-center mt-12">
                <Link 
                  to="/aplicacoes" 
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Ver Todas as Aplicações
                  <Target className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* What You'll Learn */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="heading-lg text-gradient mb-10 text-center">
                  O Que Vais Aprender no TriMundo
                </h2>
                <div className="space-y-4">
                  {[
                    "A história da trigonometria desde os babilónios até à era digital",
                    "As definições e propriedades de seno, cosseno e tangente",
                    "As seis funções trigonométricas e os seus gráficos",
                    "O círculo unitário e a conversão entre graus e radianos",
                    "Os valores exatos dos ângulos notáveis (0°, 30°, 45°, 60°, 90°)",
                    "Todas as identidades trigonométricas fundamentais",
                    "Limites trigonométricos notáveis para cálculo",
                    "Aplicações práticas em engenharia, navegação, física e tecnologia",
                    "30 exercícios resolvidos passo a passo, organizados por dificuldade",
                    "Flash cards e quizzes interativos para memorização"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-card border border-border/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-10">
                  <Link 
                    to="/conceitos" 
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Começar a Aprender
                    <BookOpen className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="heading-lg text-gradient mb-10 text-center">
                  Perguntas Frequentes
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      q: "O que é trigonometria?",
                      a: "A trigonometria é o ramo da matemática que estuda as relações entre os ângulos e os lados dos triângulos. As suas três funções principais — seno, cosseno e tangente — permitem calcular distâncias, alturas e ângulos em inúmeras situações práticas. Estende-se também ao estudo de funções periódicas, essenciais para descrever ondas, oscilações e fenómenos cíclicos."
                    },
                    {
                      q: "Para que serve a trigonometria na vida real?",
                      a: "A trigonometria é usada em engenharia civil (cálculo de estruturas e pontes), navegação (GPS e rotas), física (ondas sonoras e eletromagnéticas), medicina (tomografias e ressonâncias), computação gráfica (jogos 3D e animações), música (síntese sonora), astronomia (distâncias estelares) e até em inteligência artificial (redes neurais)."
                    },
                    {
                      q: "Quais são as funções trigonométricas principais?",
                      a: "As três funções principais são o seno (sin θ = cateto oposto / hipotenusa), o cosseno (cos θ = cateto adjacente / hipotenusa) e a tangente (tan θ = cateto oposto / cateto adjacente). Existem ainda três funções recíprocas: cossecante (csc = 1/sin), secante (sec = 1/cos) e cotangente (cot = 1/tan)."
                    },
                    {
                      q: "O TriMundo é gratuito?",
                      a: "Sim, todo o conteúdo do TriMundo é completamente gratuito e acessível a qualquer pessoa, em qualquer dispositivo, sem necessidade de registo. Oferecemos explicações detalhadas, exercícios resolvidos, flash cards interativos e exemplos práticos do mundo real."
                    },
                    {
                      q: "Para que ano escolar é o conteúdo do TriMundo?",
                      a: "O TriMundo abrange conteúdos de trigonometria desde o 9º ano até ao 12º ano e início do ensino superior. Os exercícios estão organizados por nível de dificuldade (fácil, intermédio e avançado), permitindo que cada estudante encontre material adequado ao seu nível."
                    }
                  ].map((faq, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-soft">
                      <h3 className="text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
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
                  "A trigonometria é a chave que abre as portas da navegação, 
                  da arquitetura, da música e até das estrelas."
                </p>
                <footer className="text-xl text-accent-light">
                  — Descoberta através dos séculos
                </footer>
              </blockquote>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;