import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from '@/components/SEO';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

const Identidades = () => {
  const flashCards = [
    { pergunta: "sin²θ + cos²θ = ?", resposta: "1" },
    { pergunta: "tan(θ) = ?", resposta: "sin(θ) / cos(θ)" },
    { pergunta: "cot(θ) = ?", resposta: "cos(θ) / sin(θ)" },
    { pergunta: "csc(θ) = ?", resposta: "1 / sin(θ)" },
    { pergunta: "sec(θ) = ?", resposta: "1 / cos(θ)" },
    { pergunta: "tan²(θ) + 1 = ?", resposta: "sec²(θ)" },
    { pergunta: "1 + cot²(θ) = ?", resposta: "csc²(θ)" },
    { pergunta: "sin(2θ) = ?", resposta: "2sin(θ)cos(θ)" },
    { pergunta: "cos(2θ) = ?", resposta: "cos²(θ) - sin²(θ)" },
    { pergunta: "tan(2θ) = ?", resposta: "2tan(θ) / (1 - tan²(θ))" },
    { pergunta: "sin²(θ) = ?", resposta: "1 - cos²(θ)" },
    { pergunta: "cos²(θ) = ?", resposta: "1 - sin²(θ)" },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashCards.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashCards.length) % flashCards.length);
    setIsFlipped(false);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Identidades Trigonométricas Fundamentais",
    "description": "Identidades fundamentais, de quociente, recíprocas, pitagóricas e de ângulo duplo"
  };

  return (
    <>
      <SEO
        title="Identidades Trigonométricas"
        description="Descobre as identidades trigonométricas fundamentais: identidade pitagórica, quociente, recíprocas e ângulo duplo."
        structuredData={structuredData}
      />
      <main className="min-h-screen bg-gradient-subtle pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="heading-xl mb-4 gradient-text">
            Identidades Trigonométricas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As identidades são ferramentas fundamentais que relacionam as funções trigonométricas entre si. 
            Elas simplificam cálculos e revelam padrões matemáticos fascinantes.
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {/* Identidade Fundamental */}
          <Card className="math-card animate-slide-up border-math-blue/20 bg-math-blue/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-math-blue">
                <span className="text-2xl">🔗</span>
                1. Identidade Fundamental
              </CardTitle>
              <CardDescription>
                Esta é a base de tudo, derivada do Teorema de Pitágoras
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-background/80 rounded-lg p-6 border math-formula text-center">
                <span className="text-2xl font-mono text-primary">
                  sin²(x) + cos²(x) = 1
                </span>
              </div>
              <p className="mt-4 text-muted-foreground">
                Esta identidade expressa que para qualquer ângulo x, a soma dos quadrados 
                do seno e cosseno é sempre igual a 1, refletindo o Teorema de Pitágoras no círculo unitário.
              </p>
            </CardContent>
          </Card>

          {/* Identidades de Quociente */}
          <Card className="math-card animate-slide-up border-math-green/20 bg-math-green/5" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-math-green">
                <span className="text-2xl">➗</span>
                2. Identidades de Quociente
              </CardTitle>
              <CardDescription>
                Relacionam tangente e cotangente com seno e cosseno
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-background/80 rounded-lg p-4 border math-formula text-center">
                  <span className="text-xl font-mono text-primary">
                    tan(x) = sin(x) / cos(x)
                  </span>
                </div>
                <div className="bg-background/80 rounded-lg p-4 border math-formula text-center">
                  <span className="text-xl font-mono text-primary">
                    cot(x) = cos(x) / sin(x)
                  </span>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                A tangente é a razão entre seno e cosseno, enquanto a cotangente é o inverso dessa razão.
              </p>
            </CardContent>
          </Card>

          {/* Identidades Recíprocas */}
          <Card className="math-card animate-slide-up border-math-purple/20 bg-math-purple/5" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-math-purple">
                <span className="text-2xl">🔁</span>
                3. Identidades Recíprocas
              </CardTitle>
              <CardDescription>
                Cada função tem uma inversa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-background/80 rounded-lg p-4 border math-formula text-center">
                  <span className="text-xl font-mono text-primary">
                    csc(x) = 1 / sin(x)
                  </span>
                </div>
                <div className="bg-background/80 rounded-lg p-4 border math-formula text-center">
                  <span className="text-xl font-mono text-primary">
                    sec(x) = 1 / cos(x)
                  </span>
                </div>
                <div className="bg-background/80 rounded-lg p-4 border math-formula text-center">
                  <span className="text-xl font-mono text-primary">
                    cot(x) = 1 / tan(x)
                  </span>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                Cossecante, secante e cotangente são as funções recíprocas de seno, cosseno e tangente, respectivamente.
              </p>
            </CardContent>
          </Card>

          {/* Identidades Pitagóricas Derivadas */}
          <Card className="math-card animate-slide-up border-math-orange/20 bg-math-orange/5" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-math-orange">
                <span className="text-2xl">📐</span>
                4. Identidades Pitagóricas Derivadas
              </CardTitle>
              <CardDescription>
                A partir da identidade fundamental, temos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-background/80 rounded-lg p-4 border math-formula text-center">
                  <span className="text-xl font-mono text-primary">
                    tan²(x) + 1 = sec²(x)
                  </span>
                </div>
                <div className="bg-background/80 rounded-lg p-4 border math-formula text-center">
                  <span className="text-xl font-mono text-primary">
                    1 + cot²(x) = csc²(x)
                  </span>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                Estas identidades são obtidas dividindo a identidade fundamental por cos²(x) e sin²(x), respectivamente.
              </p>
            </CardContent>
          </Card>

          {/* Identidades de Ângulo Duplo */}
          <Card className="math-card animate-slide-up border-math-blue/20 bg-math-blue/5" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-math-blue">
                <span className="text-2xl">🔄</span>
                5. Identidades de Ângulo Duplo
              </CardTitle>
              <CardDescription>
                Fórmulas para calcular funções de ângulos duplos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-background/80 rounded-lg p-4 border math-formula text-center">
                  <span className="text-xl font-mono text-primary">
                    sin(2x) = 2sin(x)cos(x)
                  </span>
                </div>
                <div className="bg-background/80 rounded-lg p-4 border math-formula text-center">
                  <span className="text-xl font-mono text-primary">
                    cos(2x) = cos²(x) - sin²(x)
                  </span>
                </div>
                <div className="bg-background/80 rounded-lg p-4 border math-formula text-center">
                  <span className="text-xl font-mono text-primary">
                    tan(2x) = 2tan(x) / (1 - tan²(x))
                  </span>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                Estas fórmulas permitem calcular as funções trigonométricas de um ângulo duplo 
                em termos das funções do ângulo original.
              </p>
            </CardContent>
          </Card>

          {/* Flash Cards - Exercícios Interativos */}
          <div className="mt-16 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Exercícios - Flash Cards</h2>
              <p className="text-muted-foreground">Clique na carta para revelar a resposta</p>
            </div>
            
            <div className="relative w-full max-w-xl mx-auto">
              <div 
                className="relative h-72 cursor-pointer perspective-1000"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div 
                  className={`absolute inset-0 transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Frente - Pergunta */}
                  <div 
                    className="absolute inset-0 bg-card rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Pergunta</span>
                    <span className="text-2xl md:text-3xl font-mono text-primary text-center">
                      {flashCards[currentCard].pergunta}
                    </span>
                  </div>
                  
                  {/* Verso - Resposta */}
                  <div 
                    className="absolute inset-0 bg-card rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 backface-hidden"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Resposta</span>
                    <span className="text-2xl md:text-3xl font-mono text-math-green text-center">
                      {flashCards[currentCard].resposta}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Controles */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <Button 
                  variant="outline" 
                  onClick={prevCard}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Anterior
                </Button>
                <Button 
                  variant="secondary"
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Virar Carta
                </Button>
                <Button 
                  variant="outline" 
                  onClick={nextCard}
                  className="flex items-center gap-2"
                >
                  Próximo
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Contador */}
              <p className="text-center text-muted-foreground mt-4">
                Carta {currentCard + 1} de {flashCards.length}
              </p>
            </div>
          </div>

          {/* Dica Prática */}
          <Card className="math-card animate-slide-up border-primary/20 bg-primary/5" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary">
                <span className="text-2xl">💡</span>
                Dica para Memorizar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                <strong>Truque da memória:</strong> A identidade fundamental (sin²(x) + cos²(x) = 1) 
                é o ponto de partida. Todas as outras identidades podem ser derivadas a partir dela 
                usando álgebra básica e as definições das funções trigonométricas.
              </p>
              <div className="mt-4 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                <p className="text-sm text-accent-foreground">
                  <strong>Para estudar:</strong> Pratique derivar uma identidade a partir da outra. 
                  Por exemplo, divida sin²(x) + cos²(x) = 1 por cos²(x) para obter tan²(x) + 1 = sec²(x)!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
    </>
  );
};

export default Identidades;