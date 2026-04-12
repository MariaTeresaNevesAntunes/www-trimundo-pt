import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronLeft, ChevronRight, RotateCcw, Check, X, Trophy } from "lucide-react";
import SEO from "@/components/SEO";
import AdBanner from '@/components/AdBanner';
const LimitesTrigonometricos = () => {
  const flashCards = [
    { pergunta: "lim(x→0) [sin(x) / x]", resposta: "1" },
    { pergunta: "lim(x→0) [(1 - cos(x)) / x]", resposta: "0" },
    { pergunta: "lim(x→0) [tan(x) / x]", resposta: "1" },
    { pergunta: "lim(x→0) [sin(ax) / x]", resposta: "a" },
    { pergunta: "lim(x→0) [(1 - cos(x)) / x²]", resposta: "1/2" },
    { pergunta: "lim(x→0) [sin(3x) / sin(5x)]", resposta: "3/5" },
    { pergunta: "lim(x→0) [(1 - cos(2x)) / x²]", resposta: "2" },
    { pergunta: "lim(x→0) [x / sin(x)]", resposta: "1" },
    { pergunta: "lim(x→0) [sin²(x) / x²]", resposta: "1" },
    { pergunta: "lim(x→0) [(tan(x) - sin(x)) / x³]", resposta: "1/2" },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [quizMode, setQuizMode] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(flashCards.length).fill(false));
  const [showResult, setShowResult] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => (prev + 1) % flashCards.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => (prev - 1 + flashCards.length) % flashCards.length);
  };

  const handleAnswer = (correct: boolean) => {
    if (!answered[currentCard]) {
      const newAnswered = [...answered];
      newAnswered[currentCard] = true;
      setAnswered(newAnswered);
      if (correct) setScore((prev) => prev + 1);
    }
    setIsFlipped(true);
    
    // Check if quiz is complete
    const newAnswered = [...answered];
    newAnswered[currentCard] = true;
    if (newAnswered.every(a => a)) {
      setTimeout(() => setShowResult(true), 1000);
    }
  };

  const resetQuiz = () => {
    setCurrentCard(0);
    setIsFlipped(false);
    setScore(0);
    setAnswered(new Array(flashCards.length).fill(false));
    setShowResult(false);
  };

  const toggleQuizMode = () => {
    setQuizMode(!quizMode);
    resetQuiz();
  };
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

  const LimSymbol = () => (
    <span className="inline-flex flex-col items-center leading-none mx-1 font-mono">
      <span>lim</span>
      <span className="text-xs text-muted-foreground">x→0</span>
    </span>
  );

  const renderPasso = (passo: string) => {
    const parts = passo.split(/\blim\b/);
    if (parts.length === 1) return passo;
    
    return parts.map((part, index) => (
      <span key={index}>
        {index > 0 && <LimSymbol />}
        {part}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <SEO 
        title="Limites Trigonométricos | TriMundo"
        description="Aprende sobre limites trigonométricos notáveis e resolve exercícios práticos passo a passo. Descobre limites fundamentais como lim(sin(x)/x) e suas aplicações."
        keywords="limites trigonométricos, lim sin(x)/x, limites notáveis, cálculo trigonometria"
        canonical="https://trimundo.pt/limites-trigonometricos"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "EducationalOccupationalProgram",
          "name": "Limites Trigonométricos",
          "description": "Estudo completo sobre limites trigonométricos notáveis e exercícios resolvidos",
          "provider": {
            "@type": "Organization",
            "name": "TriMundo",
            "url": "https://trimundo.pt"
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
                <p className="text-2xl font-mono inline-flex items-start justify-center gap-2">
                  <span className="inline-flex flex-col items-center leading-none">
                    <span>lim</span>
                    <span className="text-xs text-muted-foreground">x→0</span>
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
                <p className="text-2xl font-mono inline-flex items-start justify-center gap-2">
                  <span className="inline-flex flex-col items-center leading-none">
                    <span>lim</span>
                    <span className="text-xs text-muted-foreground">x→0</span>
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
                <p className="text-2xl font-mono inline-flex items-start justify-center gap-2">
                  <span className="inline-flex flex-col items-center leading-none">
                    <span>lim</span>
                    <span className="text-xs text-muted-foreground">x→0</span>
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
                <p className="text-2xl font-mono inline-flex items-start justify-center gap-2">
                  <span className="inline-flex flex-col items-center leading-none">
                    <span>lim</span>
                    <span className="text-xs text-muted-foreground">x→0</span>
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
                <p className="text-2xl font-mono inline-flex items-start justify-center gap-2">
                  <span className="inline-flex flex-col items-center leading-none">
                    <span>lim</span>
                    <span className="text-xs text-muted-foreground">x→0</span>
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

        {/* Ad Banner */}
        <AdBanner adSlot="8901234567" adFormat="horizontal" className="my-8" />

        {/* Flash Cards com Quiz */}
        <Card className="p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-primary">Flash Cards - Limites</h2>
            <Button 
              onClick={toggleQuizMode} 
              variant={quizMode ? "default" : "outline"}
              className="flex items-center gap-2"
            >
              <Trophy className="h-4 w-4" />
              {quizMode ? "Modo Normal" : "Modo Quiz"}
            </Button>
          </div>

          {showResult ? (
            <div className="text-center py-12">
              <Trophy className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Quiz Completo!</h3>
              <p className="text-xl mb-4">
                Pontuação: <span className="text-primary font-bold">{score}/{flashCards.length}</span>
              </p>
              <p className="text-muted-foreground mb-6">
                {score === flashCards.length ? "Perfeito! Dominas os limites! 🎉" : 
                 score >= flashCards.length * 0.7 ? "Muito bem! Continua a praticar! 👏" :
                 "Continua a estudar, vais melhorar! 💪"}
              </p>
              <Button onClick={resetQuiz} className="flex items-center gap-2 mx-auto">
                <RotateCcw className="h-4 w-4" />
                Tentar Novamente
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-center mb-4">
                <span className="text-sm text-muted-foreground">
                  Cartão {currentCard + 1} de {flashCards.length}
                  {quizMode && ` • Pontuação: ${score}/${answered.filter(a => a).length}`}
                </span>
              </div>

              <div 
                className="perspective-1000 cursor-pointer mb-6"
                onClick={() => !quizMode && setIsFlipped(!isFlipped)}
              >
                <div className={`relative w-full h-64 transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                  {/* Frente */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex flex-col items-center justify-center p-6 border border-border">
                    <p className="text-sm text-muted-foreground mb-3">Qual o resultado de:</p>
                    <p className="text-xl md:text-2xl font-mono font-semibold text-center">{flashCards[currentCard].pergunta}</p>
                    {!quizMode && <p className="text-sm text-muted-foreground mt-4">Clica para ver a resposta</p>}
                  </div>
                  
                  {/* Verso */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex flex-col items-center justify-center p-6 border border-primary">
                    <p className="text-sm text-muted-foreground mb-3">Resposta:</p>
                    <p className="text-4xl md:text-5xl font-bold text-primary">{flashCards[currentCard].resposta}</p>
                  </div>
                </div>
              </div>

              {quizMode && !isFlipped && !answered[currentCard] && (
                <div className="flex justify-center gap-4 mb-6">
                  <Button 
                    onClick={() => handleAnswer(false)} 
                    variant="outline"
                    className="flex items-center gap-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <X className="h-4 w-4" />
                    Não Sei
                  </Button>
                  <Button 
                    onClick={() => handleAnswer(true)}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  >
                    <Check className="h-4 w-4" />
                    Sei a Resposta
                  </Button>
                </div>
              )}

              <div className="flex justify-center items-center gap-4">
                <Button variant="outline" size="icon" onClick={prevCard}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => { setIsFlipped(false); setCurrentCard(0); }}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextCard}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
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
                          <p className="text-foreground flex flex-wrap items-start">{renderPasso(passo)}</p>
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

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-primary text-center">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              { q: "O que é o limite fundamental da trigonometria?", a: "O limite fundamental é lim(x→0) [sin(x)/x] = 1. Isto significa que, quando x se aproxima de zero, a razão entre sin(x) e x aproxima-se de 1. Este limite é a base para calcular derivadas de funções trigonométricas e é o mais importante de toda a trigonometria." },
              { q: "Por que é que lim(x→0) sin(x)/x não é simplesmente 0/0?", a: "A expressão 0/0 é uma indeterminação, não um número. Quando x se aproxima de 0, tanto sin(x) como x se aproximam de 0, mas a razão entre eles tem um comportamento bem definido que tende para 1. O limite descreve o comportamento 'no limite', não uma divisão propriamente dita." },
              { q: "Como resolver limites trigonométricos mais complexos?", a: "A estratégia é manipular a expressão para reconhecer o limite fundamental. Técnicas comuns incluem: multiplicar e dividir por constantes para obter sin(ax)/(ax), usar identidades trigonométricas como 1-cos(x) = 2sin²(x/2), e separar em produtos de limites conhecidos." }
            ].map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LimitesTrigonometricos;
