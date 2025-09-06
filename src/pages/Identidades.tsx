import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Identidades = () => {
  return (
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
  );
};

export default Identidades;