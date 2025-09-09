import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Circle } from "lucide-react";
import angulo1 from "@/assets/angulo1.jpg";
import angulo2 from "@/assets/angulo2.jpg";
import angulo3 from "@/assets/angulo3.jpg";
import angulo4 from "@/assets/angulo4.jpg";
import angulo5 from "@/assets/angulo5.jpg";
import angulo6 from "@/assets/angulo6.jpg";
import angulo7 from "@/assets/angulo7.jpg";

const AngulosNotaveis = () => {
  const angulosData = [
    {
      titulo: "Círculo Trigonométrico",
      descricao: "Ângulos fundamentais no círculo unitário",
      imagem: angulo1,
      conceitos: ["0°", "30°", "45°", "60°", "90°"]
    },
    {
      titulo: "Tabela de Valores",
      descricao: "Valores exatos das funções trigonométricas",
      imagem: angulo2,
      conceitos: ["sen", "cos", "tg"]
    },
    {
      titulo: "Ângulos Especiais",
      descricao: "Demonstração geométrica dos ângulos notáveis",
      imagem: angulo3,
      conceitos: ["Triângulo 30-60-90", "Triângulo 45-45-90"]
    },
    {
      titulo: "Quadrantes",
      descricao: "Sinais das funções por quadrante",
      imagem: angulo4,
      conceitos: ["I Quadrante", "II Quadrante", "III Quadrante", "IV Quadrante"]
    },
    {
      titulo: "Valores Complementares",
      descricao: "Relações entre ângulos complementares",
      imagem: angulo5,
      conceitos: ["90° - θ", "Cofunções"]
    },
    {
      titulo: "Ângulos Suplementares",
      descricao: "Propriedades dos ângulos suplementares",
      imagem: angulo6,
      conceitos: ["180° - θ", "Simetria"]
    },
    {
      titulo: "Resumo Completo",
      descricao: "Compilação de todos os ângulos notáveis",
      imagem: angulo7,
      conceitos: ["Resumo", "Referência Rápida"]
    }
  ];

  const tabelaValores = [
    { angulo: "0°", radianos: "0", sen: "0", cos: "1", tg: "0" },
    { angulo: "30°", radianos: "π/6", sen: "1/2", cos: "√3/2", tg: "√3/3" },
    { angulo: "45°", radianos: "π/4", sen: "√2/2", cos: "√2/2", tg: "1" },
    { angulo: "60°", radianos: "π/3", sen: "√3/2", cos: "1/2", tg: "√3" },
    { angulo: "90°", radianos: "π/2", sen: "1", cos: "0", tg: "∞" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
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
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
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
                    {tabelaValores.map((linha, index) => (
                      <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="py-3 px-4 font-medium">{linha.angulo}</td>
                        <td className="py-3 px-4">{linha.radianos}</td>
                        <td className="py-3 px-4">{linha.sen}</td>
                        <td className="py-3 px-4">{linha.cos}</td>
                        <td className="py-3 px-4">{linha.tg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {angulosData.map((item, index) => (
            <Card 
              key={index}
              className="math-card group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {item.titulo}
                </CardTitle>
                <p className="text-muted-foreground">{item.descricao}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative overflow-hidden rounded-lg border border-border/20">
                  <img 
                    src={item.imagem} 
                    alt={item.titulo}
                    className="w-full h-64 object-contain bg-background group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.conceitos.map((conceito, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary"
                      className="text-xs hover:bg-primary/20 transition-colors"
                    >
                      {conceito}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dicas de Memorização */}
        <div className="mt-12 animate-slide-up" style={{ animationDelay: "0.8s" }}>
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
    </div>
  );
};

export default AngulosNotaveis;