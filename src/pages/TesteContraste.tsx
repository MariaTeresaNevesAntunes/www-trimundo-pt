import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, Moon, Smartphone, Tablet, Monitor } from "lucide-react";

const TesteContraste = () => {
  const [isDark, setIsDark] = useState(false);
  const [frameWidth, setFrameWidth] = useState<string>("100%");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    return () => document.documentElement.classList.remove("dark");
  }, [isDark]);

  const widths = [
    { label: "Mobile", value: "375px", icon: <Smartphone className="w-4 h-4" /> },
    { label: "Tablet", value: "768px", icon: <Tablet className="w-4 h-4" /> },
    { label: "Desktop", value: "100%", icon: <Monitor className="w-4 h-4" /> },
  ];

  const mathColors = [
    { name: "math-blue", label: "Azul" },
    { name: "math-green", label: "Verde" },
    { name: "math-purple", label: "Roxo" },
    { name: "math-orange", label: "Laranja" },
  ];

  return (
    <main className="min-h-screen bg-background pt-24 pb-12">
      {/* Controlos fixos */}
      <div className="sticky top-20 z-40 mb-6 bg-card border border-border rounded-xl p-4 mx-4 md:mx-8 shadow-medium">
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">Tema:</span>
            <Button
              variant={isDark ? "outline" : "default"}
              size="sm"
              onClick={() => setIsDark(false)}
              className="gap-2"
            >
              <Sun className="w-4 h-4" /> Claro
            </Button>
            <Button
              variant={isDark ? "default" : "outline"}
              size="sm"
              onClick={() => setIsDark(true)}
              className="gap-2"
            >
              <Moon className="w-4 h-4" /> Escuro
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">Largura:</span>
            {widths.map((w) => (
              <Button
                key={w.value}
                variant={frameWidth === w.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFrameWidth(w.value)}
                className="gap-2"
              >
                {w.icon} {w.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Frame com largura ajustável */}
      <div className="mx-auto bg-background border border-border/50 rounded-xl overflow-hidden transition-all duration-300" style={{ maxWidth: frameWidth }}>
        <div className="p-4 md:p-8 space-y-8">
          <header>
            <h1 className="heading-lg text-foreground mb-2">Teste de Contraste & Legibilidade</h1>
            <p className="text-muted-foreground">
              Visualize todos os componentes em diferentes temas e larguras para validar a legibilidade.
            </p>
          </header>

          {/* Tipografia */}
          <Card className="math-card">
            <CardHeader>
              <CardTitle>Tipografia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <h1 className="heading-xl text-foreground">Heading XL</h1>
              <h2 className="heading-lg text-foreground">Heading LG</h2>
              <h3 className="heading-md text-foreground">Heading MD</h3>
              <p className="text-foreground">Texto normal sobre fundo padrão (foreground).</p>
              <p className="text-muted-foreground">Texto secundário (muted-foreground) — usado em descrições.</p>
              <p className="text-primary font-semibold">Texto primary — usado em destaques.</p>
              <p className="text-gradient text-2xl font-bold">Texto gradiente</p>
            </CardContent>
          </Card>

          {/* Botões */}
          <Card className="math-card">
            <CardHeader>
              <CardTitle>Botões</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card className="math-card">
            <CardHeader>
              <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </CardContent>
          </Card>

          {/* Caixas de destaque (padrão usado nas páginas) */}
          <Card className="math-card">
            <CardHeader>
              <CardTitle>Caixas de Destaque</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong className="text-primary">Primary /5:</strong> Caixa de informação sobre fundo primary muito claro.
                </p>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong className="text-primary">Primary /10:</strong> Caixa de destaque com mais opacidade.
                </p>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                <p className="text-sm text-foreground">
                  <strong>Accent /10:</strong> Padrão usado para "Para estudar" — texto deve ler-se bem.
                </p>
              </div>
              <div className="p-4 bg-secondary/20 rounded-lg border border-secondary/30">
                <p className="text-sm text-foreground">
                  <strong>Secondary /20:</strong> Caixa secundária verde-sálvia.
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg border border-border">
                <p className="text-sm text-foreground">
                  <strong>Muted:</strong> Caixa neutra para fórmulas ou exemplos.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cores math-* */}
          <Card className="math-card">
            <CardHeader>
              <CardTitle>Cores Math (categorias)</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mathColors.map((c) => (
                <div key={c.name} className="space-y-2">
                  <div className={`p-4 bg-${c.name}/10 border border-${c.name}/20 rounded-lg`}>
                    <h4 className={`font-semibold text-${c.name} mb-1`}>{c.label} — sobre /10</h4>
                    <p className="text-sm text-foreground">Texto foreground sobre fundo {c.name}/10.</p>
                  </div>
                  <div className={`p-4 bg-${c.name} rounded-lg`}>
                    <p className="text-sm text-white font-medium">Texto branco sobre {c.name} sólido.</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Cards aninhados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="math-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">💡</span> Dica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Texto descritivo dentro de um card padrão do site, com leading relaxed.
                </p>
              </CardContent>
            </Card>
            <Card className="math-card border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary">Card destacado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Card com tom primary suave de fundo. O texto deve continuar legível.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Hero gradient */}
          <div className="hero-gradient rounded-xl p-8 text-center">
            <h2 className="heading-md text-white mb-2">Gradiente Hero</h2>
            <p className="text-white/90">Texto branco sobre o gradiente principal.</p>
          </div>

          {/* Fórmulas */}
          <Card className="math-card">
            <CardHeader>
              <CardTitle>Fórmulas matemáticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-muted rounded-lg text-center">
                <code className="text-primary font-mono text-lg">sin²(x) + cos²(x) = 1</code>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center">
                <code className="text-primary font-mono text-lg">tan(x) = sin(x) / cos(x)</code>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default TesteContraste;
