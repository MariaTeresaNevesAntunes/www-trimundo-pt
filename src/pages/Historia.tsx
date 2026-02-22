import { Clock, MapPin, Star, Compass, Calculator, Globe } from 'lucide-react';
import SEO from '@/components/SEO';
import AdBanner from '@/components/AdBanner';

const Historia = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "História da Trigonometria: 3000 Anos de Evolução",
    "description": "Descobre a evolução da trigonometria desde os babilónios até à era moderna",
    "articleBody": "Uma jornada fascinante através dos milénios, desde as primeiras observações astronómicas até às aplicações modernas."
  };
  const timelineEvents = [
    {
      period: "2000 a.C.",
      title: "Babilónios",
      description: "Primeiras tabelas de relações trigonométricas para astronomia e construção.",
      icon: <Star className="w-6 h-6" />,
      color: "blue"
    },
    {
      period: "300 a.C.",
      title: "Gregos Antigos",
      description: "Hiparco desenvolve os primeiros catálogos estelares usando trigonometria.",
      icon: <MapPin className="w-6 h-6" />,
      color: "green"
    },
    {
      period: "800 d.C.",
      title: "Matemáticos Árabes",
      description: "Al-Battani cria tabelas trigonométricas precisas e desenvolve novas técnicas.",
      icon: <Calculator className="w-6 h-6" />,
      color: "purple"
    },
    {
      period: "1400-1500",
      title: "Era dos Descobrimentos",
      description: "Navegadores portugueses usam trigonometria para explorar novos mundos.",
      icon: <Compass className="w-6 h-6" />,
      color: "orange"
    },
    {
      period: "1600-1700",
      title: "Revolução Científica",
      description: "Newton e Leibniz aplicam trigonometria no cálculo e na física moderna.",
      icon: <Globe className="w-6 h-6" />,
      color: "blue"
    }
  ];

  const colorClasses = {
    blue: 'bg-math-blue text-white',
    green: 'bg-math-green text-white',
    purple: 'bg-math-purple text-white',
    orange: 'bg-math-orange text-white',
  };

  return (
    <>
      <SEO
        title="MTNA-TriMundo-História da Trigonometria"
        description="Descobre a fascinante evolução da trigonometria desde os babilónios até à era moderna. 3000 anos de história e descobertas."
        structuredData={structuredData}
      />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <header className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl text-white mb-6">
            História da <span className="text-accent-light">Trigonometria</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Uma jornada fascinante através dos milénios, desde as primeiras 
            observações astronómicas até às aplicações modernas que moldam o nosso mundo.
          </p>
        </div>
      </header>

      {/* Timeline Section */}
      <main>
        <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start gap-8 mb-16 last:mb-0 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline Icon */}
                <div className={`w-16 h-16 rounded-full ${colorClasses[event.color as keyof typeof colorClasses]} flex items-center justify-center flex-shrink-0 shadow-medium`}>
                  {event.icon}
                </div>
                
                {/* Timeline Content */}
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
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
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

      {/* Curiosity Section */}
      <section className="py-20 bg-muted/30">
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
                  posições usando funções trigonométricas.
                </p>
              </div>

              <div className="math-card animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Origem do Nome</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A palavra "trigonometria" vem do grego: "trigonon" (triângulo) e 
                  "metron" (medida). Literalmente significa "medição de triângulos", 
                  mas hoje abrange muito mais que isso.
                </p>
              </div>

              <div className="math-card animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Primeiras Aplicações</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Os antigos egípcios usavam conceitos trigonométricos para construir 
                  as pirâmides com precisão impressionante, muito antes da formalização 
                  matemática que conhecemos hoje.
                </p>
              </div>

              <div className="math-card animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="w-12 h-12 bg-math-purple/10 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-math-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Era Digital</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hoje, a trigonometria é fundamental para gráficos por computador, 
                  jogos 3D, sistemas GPS e até mesmo para as redes sociais calcularem 
                  que conteúdo mostrar-te.
                </p>
              </div>
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