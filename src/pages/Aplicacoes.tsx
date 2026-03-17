import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Navigation, Atom, Stethoscope, Ruler, MapPin } from "lucide-react";
import SEO from '@/components/SEO';
import AdBanner from '@/components/AdBanner';

const Aplicacoes = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aplicações Práticas da Trigonometria",
    "description": "Descobre como a trigonometria é aplicada em engenharia, arquitetura, navegação, física e medicina",
    "publisher": { "@type": "Organization", "name": "TriMundo", "url": "https://trimundo.pt" },
    "mainEntityOfPage": "https://trimundo.pt/aplicacoes"
  };
  const aplicacoesData = [
    {
      categoria: "Construção e Design",
      icon: <Building2 className="w-6 h-6" />,
      color: "blue",
      aplicacoes: [
        {
          area: "Engenharia Civil",
          descricao: "Cálculos trigonométricos são essenciais para o design e a construção de estruturas como pontes, edifícios e casas, garantindo medidas precisas e segurança nas inclinações de rampas e escadas.",
          exemplos: ["Cálculo de inclinações", "Design de pontes", "Estruturas de edifícios"]
        },
        {
          area: "Arquitetura",
          descricao: "Utilizada no design de edificações para calcular alturas, distâncias e ângulos necessários para o projeto.",
          exemplos: ["Design de telhados", "Cálculo de sombras", "Orientação solar"]
        }
      ]
    },
    {
      categoria: "Navegação e Exploração",
      icon: <Navigation className="w-6 h-6" />,
      color: "green",
      aplicacoes: [
        {
          area: "Navegação",
          descricao: "A trigonometria é usada em GPS e mapas para determinar distâncias e localizar pontos geográficos.",
          exemplos: ["Sistemas GPS", "Navegação marítima", "Cartografia"]
        },
        {
          area: "Astronomia",
          descricao: "Ferramentas trigonométricas são usadas para calcular distâncias entre planetas, o raio da Terra e a posição de corpos celestes.",
          exemplos: ["Cálculo de distâncias estelares", "Posicionamento de satélites", "Observação astronómica"]
        }
      ]
    },
    {
      categoria: "Ciência e Tecnologia",
      icon: <Atom className="w-6 h-6" />,
      color: "purple",
      aplicacoes: [
        {
          area: "Física",
          descricao: "Permite analisar e descrever movimentos, forças e a propagação de ondas.",
          exemplos: ["Análise de ondas", "Mecânica de fluidos", "Ótica e acústica"]
        },
        {
          area: "Medicina",
          descricao: "Em diagnósticos por imagem, como tomografias e ressonâncias magnéticas, a trigonometria ajuda a calcular distâncias e ângulos para uma interpretação precisa das imagens.",
          exemplos: ["Tomografia computadorizada", "Ressonância magnética", "Ultrassonografia"]
        }
      ]
    }
  ];

  const exemplosPraticos = [
    {
      titulo: "Medir Alturas Inacessíveis",
      descricao: "Calcular a altura de um prédio ou árvore sem precisar escalá-los, apenas conhecendo a distância até eles e os ângulos de observação.",
      formula: "h = d × tan(θ)",
      icon: <Ruler className="w-5 h-5" />
    },
    {
      titulo: "Determinar Distâncias",
      descricao: "Medir a largura de um rio utilizando uma árvore como referência e as funções trigonométricas.",
      formula: "d = h / tan(θ)",
      icon: <MapPin className="w-5 h-5" />
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
        description="Descobre como a trigonometria é aplicada em engenharia civil, arquitetura, navegação, astronomia, física e medicina."
        keywords="aplicações trigonometria, engenharia, arquitetura, navegação, astronomia, GPS"
        canonical="https://trimundo.pt/aplicacoes"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl text-white mb-6">
            MTNA-TriMundo-Aplicações <span className="text-accent-light">Práticas da Trigonometria</span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            A trigonometria tem aplicações práticas e cruciais em diversas áreas, moldando o mundo moderno através de cálculos precisos e análises fundamentais.
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
              Desde a construção de edifícios até a exploração espacial, a trigonometria está presente em todas as áreas da ciência e tecnologia.
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

      {/* Practical Examples */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gradient mb-4">
              Exemplos do Dia a Dia
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Situações práticas onde a trigonometria resolve problemas reais do quotidiano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exemplosPraticos.map((exemplo, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
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
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
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
    </div>
    </>
  );
};

export default Aplicacoes;