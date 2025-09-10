import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Circle } from "lucide-react";
const AngulosNotaveis = () => {
  const tabelaValores = [{
    angulo: "0°",
    radianos: "0",
    sen: "0",
    cos: "1",
    tg: "0"
  }, {
    angulo: "30°",
    radianos: "π/6",
    sen: "1/2",
    cos: "√3/2",
    tg: "√3/3"
  }, {
    angulo: "45°",
    radianos: "π/4",
    sen: "√2/2",
    cos: "√2/2",
    tg: "1"
  }, {
    angulo: "60°",
    radianos: "π/3",
    sen: "√3/2",
    cos: "1/2",
    tg: "√3"
  }, {
    angulo: "90°",
    radianos: "π/2",
    sen: "1",
    cos: "0",
    tg: "∞"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Circle className="w-8 h-8 text-primary animate-pulse-soft" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Ângulos Notáveis
            </h1>
            <Calculator className="w-8 h-8 text-primary animate-pulse-soft" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore os ângulos fundamentais da trigonometria e suas propriedades especiais
          </p>
        </div>

        {/* Tabela de Valores Exatos */}
        <div className="mb-12 animate-slide-up" style={{
        animationDelay: "0.1s"
      }}>
          <Card className="math-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Calculator className="w-6 h-6 text-primary" />
                Tabela de Valores Exatos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 px-4 font-bold text-primary">Ângulo</th>
                      <th className="py-3 px-4 font-bold text-primary">Radianos</th>
                      <th className="py-3 px-4 font-bold text-primary">sen θ</th>
                      <th className="py-3 px-4 font-bold text-primary">cos θ</th>
                      <th className="py-3 px-4 font-bold text-primary">tg θ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabelaValores.map((linha, index) => <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="py-3 px-4 font-medium">{linha.angulo}</td>
                        <td className="py-3 px-4">{linha.radianos}</td>
                        <td className="py-3 px-4">{linha.sen}</td>
                        <td className="py-3 px-4">{linha.cos}</td>
                        <td className="py-3 px-4">{linha.tg}</td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>


        {/* Sinais das Funções Trigonométricas */}
        <div className="mt-12 animate-slide-up" style={{
        animationDelay: "0.8s"
      }}>
          <Card className="math-card border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">📍 Sinais das Funções por Quadrante</CardTitle>
              <p className="text-muted-foreground">
                Compreenda como os sinais das funções trigonométricas variam em cada quadrante
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Primeiro Quadrante - Destaque */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-lg border border-green-500/20">
                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                  <Circle className="w-5 h-5" />
                  1º Quadrante (0° a 90°) - TODAS POSITIVAS ✅
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-500/5 rounded-lg border border-green-500/10">
                    <div className="text-2xl font-bold text-green-600 mb-2">sen θ</div>
                    <div className="text-green-700 font-medium">POSITIVO (+)</div>
                  </div>
                  <div className="text-center p-4 bg-green-500/5 rounded-lg border border-green-500/10">
                    <div className="text-2xl font-bold text-green-600 mb-2">cos θ</div>
                    <div className="text-green-700 font-medium">POSITIVO (+)</div>
                  </div>
                  <div className="text-center p-4 bg-green-500/5 rounded-lg border border-green-500/10">
                    <div className="text-2xl font-bold text-green-600 mb-2">tg θ</div>
                    <div className="text-green-700 font-medium">POSITIVA (+)</div>
                  </div>
                </div>
                <p className="text-center text-green-700 mt-4 font-medium">
                  Como tanto seno quanto cosseno são positivos, a tangente (sen/cos) também é positiva
                </p>
              </div>

              {/* Outros Quadrantes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 2º Quadrante */}
                <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <h4 className="text-lg font-bold text-blue-600 mb-3">2º Quadrante (90° a 180°)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>sen θ:</span>
                      <span className="text-green-600 font-medium">+ (positivo)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>cos θ:</span>
                      <span className="text-red-600 font-medium">- (negativo)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>tg θ:</span>
                      <span className="text-red-600 font-medium">- (negativa)</span>
                    </div>
                  </div>
                </div>

                {/* 3º Quadrante */}
                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <h4 className="text-lg font-bold text-purple-600 mb-3">3º Quadrante (180° a 270°)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>sen θ:</span>
                      <span className="text-red-600 font-medium">- (negativo)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>cos θ:</span>
                      <span className="text-red-600 font-medium">- (negativo)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>tg θ:</span>
                      <span className="text-green-600 font-medium">+ (positiva)</span>
                    </div>
                  </div>
                </div>

                {/* 4º Quadrante */}
                <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <h4 className="text-lg font-bold text-orange-600 mb-3">4º Quadrante (270° a 360°)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>sen θ:</span>
                      <span className="text-red-600 font-medium">- (negativo)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>cos θ:</span>
                      <span className="text-green-600 font-medium">+ (positivo)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>tg θ:</span>
                      <span className="text-red-600 font-medium">- (negativa)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regra Mnemônica */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-lg font-bold text-primary mb-3">🧠 Regra Mnemônica: "TODO SENO É TAN"</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-3 bg-background/50 rounded-lg">
                    <div className="font-bold text-primary">1º</div>
                    <div className="text-sm">TODO positivo</div>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <div className="font-bold text-primary">2º</div>
                    <div className="text-sm">SENO positivo</div>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <div className="font-bold text-primary">3º</div>
                    <div className="text-sm">TAN positiva</div>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <div className="font-bold text-primary">4º</div>
                    <div className="text-sm">COS positivo</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dicas de Memorização */}
        <div className="mt-12 animate-slide-up" style={{
        animationDelay: "0.9s"
      }}>
          <Card className="math-card border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">💡 Dicas de Memorização</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-bold text-primary">Para sen 30°, 45°, 60°:</h4>
                  <p className="text-muted-foreground">
                    √1/2, √2/2, √3/2 (raiz de 1, 2, 3 dividido por 2)
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-primary">Para cos 30°, 45°, 60°:</h4>
                  <p className="text-muted-foreground">
                    √3/2, √2/2, √1/2 (ordem inversa do seno)
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-primary">Triângulo 30-60-90:</h4>
                  <p className="text-muted-foreground">
                    Lados na proporção 1 : √3 : 2
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-primary">Triângulo 45-45-90:</h4>
                  <p className="text-muted-foreground">
                    Lados na proporção 1 : 1 : √2
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default AngulosNotaveis;