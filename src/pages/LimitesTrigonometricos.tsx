import { Card } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import SEO from "@/components/SEO";

const LimitesTrigonometricos = () => {
  const exerciciosResolvidos = [
    {
      id: 1,
      expressao: "[sin(x) / x]",
      passos: [
        "Este é um limite fundamental da trigonometria",
        "Substituição direta resulta em 0/0 (indeterminação)",
        "Usando o limite fundamental: lim [sin(x) / x] = 1",
        "Resultado: 1"
      ],
      resultado: "1"
    },
    {
      id: 2,
      expressao: "[(1 - cos(x)) / x]",
      passos: [
        "Substituição direta: (1-1)/0 = 0/0 (indeterminação)",
        "Multiplicamos por (1 + cos(x))/(1 + cos(x))",
        "= lim [(1 - cos²(x)) / (x(1 + cos(x)))]",
        "= lim [sin²(x) / (x(1 + cos(x)))]",
        "= lim [sin(x)/x · sin(x)/(1 + cos(x))]",
        "= 1 · 0/(1+1) = 0"
      ],
      resultado: "0"
    },
    {
      id: 3,
      expressao: "[tan(x) / x]",
      passos: [
        "Sabemos que tan(x) = sin(x)/cos(x)",
        "Então: lim [tan(x) / x] = lim [sin(x) / (x·cos(x))]",
        "= lim [(sin(x)/x) · (1/cos(x))]",
        "= lim [sin(x)/x] · lim [1/cos(x)]",
        "= 1 · 1/1 = 1"
      ],
      resultado: "1"
    },
    {
      id: 4,
      expressao: "[sin(3x) / sin(5x)]",
      passos: [
        "Multiplicamos e dividimos estrategicamente:",
        "= lim [(sin(3x)/3x) · (3x) · (5x/sin(5x)) · (1/5x)]",
        "= lim [(sin(3x)/3x) · (5x/sin(5x)) · (3x/5x)]",
        "Usando o limite fundamental em cada termo:",
        "= 1 · 1 · (3/5) = 3/5"
      ],
      resultado: "3/5"
    },
    {
      id: 5,
      expressao: "[(1 - cos(2x)) / x²]",
      passos: [
        "Usamos a identidade: 1 - cos(2x) = 2sin²(x)",
        "= lim [2sin²(x) / x²]",
        "= 2 · lim [(sin(x)/x)²]",
        "= 2 · [lim (sin(x)/x)]²",
        "= 2 · 1² = 2"
      ],
      resultado: "2"
    }
  ];

  const LimitNotation = ({ expressao }: { expressao: string }) => (
    <span className="inline-flex items-start gap-2 font-mono whitespace-nowrap">
      <span className="inline-flex flex-col items-center leading-none">
        <span className="text-lg">lim</span>
        <span className="text-xs text-muted-foreground">x→0</span>
      </span>
      <span className="text-foreground text-lg">{expressao}</span>
    </span>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <SEO 
        title="Limites Trigonométricos"
        description="Aprende sobre limites trigonométricos notáveis e resolve exercícios práticos passo a passo. Descobre limites fundamentais como lim(sin(x)/x) e suas aplicações."
        canonical="https://trimundo.lovable.app/limites-trigonometricos"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "EducationalOccupationalProgram",
          "name": "Limites Trigonométricos",
          "description": "Estudo completo sobre limites trigonométricos notáveis e exercícios resolvidos",
          "provider": {
            "@type": "Organization",
            "name": "TriMundo"
          }
        }}
      />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Início</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Limites Trigonométricos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Limites Trigonométricos
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explora os limites fundamentais da trigonometria e aprende a resolver problemas passo a passo
          </p>
        </div>

        {/* Limites Notáveis */}
        <Card className="p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-6 text-primary">Limites Trigonométricos Notáveis</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold mb-3 text-foreground">1. Limite Fundamental</h3>
              <div className="text-center py-4 bg-background rounded-md mb-3">
                <p className="text-2xl font-mono flex items-center justify-center gap-2">
                  <span className="flex flex-col items-center leading-tight">
                    <span>lim</span>
                    <span className="text-xs">x→0</span>
                  </span>
                  <span className="text-primary font-bold">[sin(x) / x] = 1</span>
                </p>
              </div>
              <p className="text-muted-foreground">
                Este é o limite mais importante da trigonometria, base para muitas demonstrações em cálculo.
              </p>
            </div>

            <div className="p-6 bg-muted/50 rounded-lg border-l-4 border-secondary">
              <h3 className="text-xl font-semibold mb-3 text-foreground">2. Limite do Cosseno</h3>
              <div className="text-center py-4 bg-background rounded-md mb-3">
                <p className="text-2xl font-mono flex items-center justify-center gap-2">
                  <span className="flex flex-col items-center leading-tight">
                    <span>lim</span>
                    <span className="text-xs">x→0</span>
                  </span>
                  <span className="text-secondary font-bold">[(1 - cos(x)) / x] = 0</span>
                </p>
              </div>
              <p className="text-muted-foreground">
                Derivado do limite fundamental, muito útil em problemas de otimização.
              </p>
            </div>

            <div className="p-6 bg-muted/50 rounded-lg border-l-4 border-accent">
              <h3 className="text-xl font-semibold mb-3 text-foreground">3. Limite da Tangente</h3>
              <div className="text-center py-4 bg-background rounded-md mb-3">
                <p className="text-2xl font-mono flex items-center justify-center gap-2">
                  <span className="flex flex-col items-center leading-tight">
                    <span>lim</span>
                    <span className="text-xs">x→0</span>
                  </span>
                  <span className="text-accent font-bold">[tan(x) / x] = 1</span>
                </p>
              </div>
              <p className="text-muted-foreground">
                Como tan(x) = sin(x)/cos(x), este limite segue diretamente do limite fundamental.
              </p>
            </div>

            <div className="p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold mb-3 text-foreground">4. Variação do Limite Fundamental</h3>
              <div className="text-center py-4 bg-background rounded-md mb-3">
                <p className="text-2xl font-mono flex items-center justify-center gap-2">
                  <span className="flex flex-col items-center leading-tight">
                    <span>lim</span>
                    <span className="text-xs">x→0</span>
                  </span>
                  <span className="text-primary font-bold">[sin(ax) / x] = a</span>
                </p>
              </div>
              <p className="text-muted-foreground">
                Generalização do limite fundamental para qualquer constante a ≠ 0.
              </p>
            </div>

            <div className="p-6 bg-muted/50 rounded-lg border-l-4 border-secondary">
              <h3 className="text-xl font-semibold mb-3 text-foreground">5. Limite com Cosseno ao Quadrado</h3>
              <div className="text-center py-4 bg-background rounded-md mb-3">
                <p className="text-2xl font-mono flex items-center justify-center gap-2">
                  <span className="flex flex-col items-center leading-tight">
                    <span>lim</span>
                    <span className="text-xs">x→0</span>
                  </span>
                  <span className="text-secondary font-bold">[(1 - cos(x)) / x²] = 1/2</span>
                </p>
              </div>
              <p className="text-muted-foreground">
                Aparece frequentemente em problemas de derivadas e integrais.
              </p>
            </div>
          </div>
        </Card>

        {/* Exercícios Resolvidos */}
        <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-6 text-primary">Exercícios Resolvidos</h2>
          
          <div className="space-y-8">
            {exerciciosResolvidos.map((exercicio, index) => (
              <div key={exercicio.id} className="p-6 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex flex-wrap items-center gap-2">
                      <span>Calcular:</span>
                      <LimitNotation expressao={exercicio.expressao} />
                    </h3>
                    
                    <div className="space-y-3 mb-4">
                      <p className="font-semibold text-muted-foreground">Resolução:</p>
                      {exercicio.passos.map((passo, passoIndex) => (
                        <div key={passoIndex} className="flex items-start gap-3 ml-4">
                          <span className="text-primary font-bold mt-1">→</span>
                          <p className="text-foreground">{passo}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-4 bg-primary/10 rounded-md border-l-4 border-primary">
                      <p className="font-semibold text-primary">
                        Resultado Final: <span className="text-xl ml-2">{exercicio.resultado}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Dica Final */}
        <Card className="p-6 mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Dica para Estudar Limites
          </h3>
          <p className="text-muted-foreground">
            Ao resolver limites trigonométricos, lembra-te sempre do <strong>limite fundamental</strong>: lim(x→0) [sin(x) / x] = 1. 
            Muitos problemas podem ser resolvidos manipulando a expressão para aplicar este limite. 
            Pratica reconhecer padrões e usar identidades trigonométricas para simplificar!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LimitesTrigonometricos;
