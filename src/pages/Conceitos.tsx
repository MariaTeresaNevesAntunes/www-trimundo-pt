import { useState } from 'react';
import { Triangle, Circle, Calculator, Eye, ArrowRight } from 'lucide-react';

const Conceitos = () => {
  const [selectedConcept, setSelectedConcept] = useState('triangulo');

  const concepts = {
    triangulo: {
      title: 'Triângulo Retângulo',
      description: 'A base de toda a trigonometria começa com o triângulo retângulo e as relações entre os seus lados.',
      content: (
        <div className="space-y-6">
          <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
            <h4 className="text-xl font-semibold mb-4 text-primary">Relações Fundamentais</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-24 text-lg font-mono bg-secondary/20 px-3 py-2 rounded">sin θ =</div>
                <div className="text-muted-foreground">cateto oposto / hipotenusa</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-lg font-mono bg-secondary/20 px-3 py-2 rounded">cos θ =</div>
                <div className="text-muted-foreground">cateto adjacente / hipotenusa</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-lg font-mono bg-secondary/20 px-3 py-2 rounded">tan θ =</div>
                <div className="text-muted-foreground">cateto oposto / cateto adjacente</div>
              </div>
            </div>
          </div>
          
          <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
            <h4 className="text-xl font-semibold mb-3 text-accent">Mnemónica útil</h4>
            <p className="text-muted-foreground leading-relaxed">
              <strong>SOH-CAH-TOA</strong>: <br />
              <em>Seno = Oposto/Hipotenusa</em><br />
              <em>Cosseno = Adjacente/Hipotenusa</em><br />
              <em>Tangente = Oposto/Adjacente</em>
            </p>
          </div>
        </div>
      )
    },
    circulo: {
      title: 'Círculo Unitário',
      description: 'O círculo de raio 1 é fundamental para compreender as funções trigonométricas em qualquer ângulo.',
      content: (
        <div className="space-y-6">
          <div className="bg-math-blue/5 rounded-xl p-6 border border-math-blue/20">
            <h4 className="text-xl font-semibold mb-4 text-math-blue">Círculo Trigonométrico</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Num círculo de raio 1 centrado na origem, qualquer ponto (x,y) pode ser expresso como:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-16 text-lg font-mono bg-math-blue/20 px-3 py-2 rounded">x =</div>
                <div className="text-muted-foreground">cos θ</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 text-lg font-mono bg-math-blue/20 px-3 py-2 rounded">y =</div>
                <div className="text-muted-foreground">sin θ</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-math-green/5 rounded-xl p-6 border border-math-green/20">
              <h5 className="font-semibold mb-3 text-math-green">Quadrantes</h5>
              <div className="space-y-2 text-sm">
                <div><strong>I:</strong> sin {'>'} 0, cos {'>'} 0</div>
                <div><strong>II:</strong> sin {'>'} 0, cos {'<'} 0</div>
                <div><strong>III:</strong> sin {'<'} 0, cos {'<'} 0</div>
                <div><strong>IV:</strong> sin {'<'} 0, cos {'>'} 0</div>
              </div>
            </div>
            
            <div className="bg-math-purple/5 rounded-xl p-6 border border-math-purple/20">
              <h5 className="font-semibold mb-3 text-math-purple">Periodicidade</h5>
              <div className="space-y-2 text-sm">
                <div>sin(θ + 2π) = sin(θ)</div>
                <div>cos(θ + 2π) = cos(θ)</div>
                <div>tan(θ + π) = tan(θ)</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    funcoes: {
      title: 'Outras Funções',
      description: 'Além de seno, cosseno e tangente, existem mais três funções trigonométricas importantes.',
      content: (
        <div className="space-y-6">
          <div className="bg-math-orange/5 rounded-xl p-6 border border-math-orange/20">
            <h4 className="text-xl font-semibold mb-4 text-math-orange">Funções Recíprocas</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-card rounded-lg border">
                <h5 className="font-semibold mb-2">Cossecante</h5>
                <div className="text-lg font-mono mb-2">csc θ</div>
                <div className="text-sm text-muted-foreground">= 1/sin θ</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <h5 className="font-semibold mb-2">Secante</h5>
                <div className="text-lg font-mono mb-2">sec θ</div>
                <div className="text-sm text-muted-foreground">= 1/cos θ</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <h5 className="font-semibold mb-2">Cotangente</h5>
                <div className="text-lg font-mono mb-2">cot θ</div>
                <div className="text-sm text-muted-foreground">= 1/tan θ</div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
            <h4 className="text-xl font-semibold mb-4 text-primary">Relações Importantes</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="text-lg font-mono bg-secondary/20 px-3 py-2 rounded">cot θ =</div>
                <div className="text-muted-foreground">cos θ / sin θ</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-lg font-mono bg-secondary/20 px-3 py-2 rounded">tan θ · cot θ =</div>
                <div className="text-muted-foreground">1</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  const conceptOptions = [
    { id: 'triangulo', label: 'Triângulo Retângulo', icon: <Triangle className="w-5 h-5" /> },
    { id: 'circulo', label: 'Círculo Unitário', icon: <Circle className="w-5 h-5" /> },
    { id: 'funcoes', label: 'Outras Funções', icon: <Calculator className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl text-white mb-6">
            Conceitos <span className="text-accent-light">Fundamentais</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Descobre as bases da trigonometria. Cada conceito é explicado de forma visual 
            e prática, para que possas compreender como tudo se conecta.
          </p>
        </div>
      </section>

      {/* Interactive Concepts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Concept Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {conceptOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedConcept(option.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedConcept === option.id
                      ? 'bg-primary text-primary-foreground shadow-medium'
                      : 'bg-card text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border/50'
                  }`}
                >
                  {option.icon}
                  {option.label}
                </button>
              ))}
            </div>

            {/* Selected Concept Content */}
            <div className="animate-scale-in">
              <div className="text-center mb-8">
                <h2 className="heading-lg text-gradient mb-4">
                  {concepts[selectedConcept as keyof typeof concepts].title}
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {concepts[selectedConcept as keyof typeof concepts].description}
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                {concepts[selectedConcept as keyof typeof concepts].content}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-gradient mb-8">
              Vamos Praticar!
            </h2>
            
            <div className="math-card max-w-2xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Exemplo Prático</h3>
              </div>
              
              <div className="text-left space-y-4">
                <p className="text-muted-foreground">
                  <strong>Problema:</strong> Numa escada de 5 metros encostada a uma parede, 
                  o ângulo com o chão é de 60°. Qual é a altura alcançada na parede?
                </p>
                
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2"><strong>Solução:</strong></p>
                  <div className="space-y-1 font-mono text-sm">
                    <div>sin(60°) = altura / 5m</div>
                    <div>altura = 5m × sin(60°)</div>
                    <div>altura = 5m × 0.866</div>
                    <div className="text-primary font-semibold">altura ≈ 4.33m</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="/angulos-notaveis" 
                className="btn-primary inline-flex items-center gap-2"
              >
                Explorar Ângulos Notáveis
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conceitos;