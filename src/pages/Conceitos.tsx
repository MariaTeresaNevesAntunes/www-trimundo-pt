import { useState } from 'react';
import { Triangle, Circle, Calculator, Eye, ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SEO from '@/components/SEO';
import AdBanner from '@/components/AdBanner';

const Conceitos = () => {
  const [selectedConcept, setSelectedConcept] = useState('triangulo');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Conceitos Fundamentais de Trigonometria",
    "description": "Aprende os conceitos básicos: seno, cosseno, tangente, círculo unitário e o Teorema de Pitágoras aplicado à trigonometria",
    "publisher": { "@type": "Organization", "name": "TriMundo", "url": "https://trimundo.pt" },
    "mainEntityOfPage": "https://trimundo.pt/conceitos"
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "O que é o seno de um ângulo?", "acceptedAnswer": { "@type": "Answer", "text": "O seno de um ângulo θ num triângulo retângulo é a razão entre o comprimento do cateto oposto a esse ângulo e o comprimento da hipotenusa: sin θ = cateto oposto / hipotenusa. No círculo unitário, o seno corresponde à coordenada y do ponto." } },
      { "@type": "Question", "name": "O que é o círculo unitário?", "acceptedAnswer": { "@type": "Answer", "text": "O círculo unitário (ou trigonométrico) é uma circunferência de raio 1 centrada na origem do plano cartesiano. Qualquer ponto (x, y) sobre o círculo pode ser expresso como (cos θ, sin θ), onde θ é o ângulo medido a partir do eixo x positivo no sentido anti-horário." } },
      { "@type": "Question", "name": "Qual é a relação entre seno e cosseno?", "acceptedAnswer": { "@type": "Answer", "text": "Seno e cosseno estão relacionados pela identidade fundamental: sin²θ + cos²θ = 1. Além disso, são funções complementares: sin θ = cos(90° - θ). No círculo unitário, o seno é a coordenada y e o cosseno é a coordenada x." } },
      { "@type": "Question", "name": "O que é SOH-CAH-TOA?", "acceptedAnswer": { "@type": "Answer", "text": "SOH-CAH-TOA é uma mnemónica para lembrar as definições das funções trigonométricas: SOH (Seno = Oposto/Hipotenusa), CAH (Cosseno = Adjacente/Hipotenusa) e TOA (Tangente = Oposto/Adjacente)." } }
    ]
  };

  const concepts = {
    triangulo: {
      title: 'Triângulo Retângulo',
      description: 'A base de toda a trigonometria começa com o triângulo retângulo e as relações entre os seus lados.',
      content: (
        <div className="space-y-6">
          <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
            <h4 className="text-xl font-semibold mb-4 text-primary">Relações Fundamentais</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Num triângulo retângulo, as razões trigonométricas descrevem a relação entre os ângulos e os comprimentos dos lados. 
              A <strong>hipotenusa</strong> é o lado maior, oposto ao ângulo reto. O <strong>cateto oposto</strong> é o lado que está 
              em frente ao ângulo θ, e o <strong>cateto adjacente</strong> é o lado que está ao lado do ângulo θ (sem ser a hipotenusa).
            </p>
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
            <h4 className="text-xl font-semibold mb-3 text-accent">Mnemónica útil: SOH-CAH-TOA</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Uma das formas mais simples de memorizar as três razões trigonométricas é usar a sigla <strong>SOH-CAH-TOA</strong>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-card rounded-lg border text-center">
                <div className="text-lg font-bold text-primary mb-1">SOH</div>
                <div className="text-sm text-muted-foreground"><strong>S</strong>eno = <strong>O</strong>posto / <strong>H</strong>ipotenusa</div>
              </div>
              <div className="p-4 bg-card rounded-lg border text-center">
                <div className="text-lg font-bold text-primary mb-1">CAH</div>
                <div className="text-sm text-muted-foreground"><strong>C</strong>osseno = <strong>A</strong>djacente / <strong>H</strong>ipotenusa</div>
              </div>
              <div className="p-4 bg-card rounded-lg border text-center">
                <div className="text-lg font-bold text-primary mb-1">TOA</div>
                <div className="text-sm text-muted-foreground"><strong>T</strong>angente = <strong>O</strong>posto / <strong>A</strong>djacente</div>
              </div>
            </div>
          </div>

          <div className="bg-math-green/5 rounded-xl p-6 border border-math-green/20">
            <h4 className="text-xl font-semibold mb-3 text-math-green">Teorema de Pitágoras e Trigonometria</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O Teorema de Pitágoras afirma que, num triângulo retângulo, o quadrado da hipotenusa é igual à soma dos 
              quadrados dos catetos: <strong className="font-mono">a² + b² = c²</strong>. Esta relação é a base da identidade 
              fundamental da trigonometria.
            </p>
            <div className="p-4 bg-card rounded-lg border text-center mb-4">
              <span className="text-xl font-mono text-math-green">sin²θ + cos²θ = 1</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Esta identidade é obtida ao dividir ambos os lados da equação de Pitágoras pela hipotenusa ao quadrado. 
              Como sin θ = oposto/hipotenusa e cos θ = adjacente/hipotenusa, obtemos: (oposto/hipotenusa)² + (adjacente/hipotenusa)² = 1.
            </p>
          </div>

          <div className="bg-math-purple/5 rounded-xl p-6 border border-math-purple/20">
            <h4 className="text-xl font-semibold mb-3 text-math-purple">Triângulos Especiais</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Existem dois triângulos retângulos especiais cujas razões trigonométricas têm valores exatos muito usados em cálculos:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-lg border">
                <h5 className="font-semibold text-math-purple mb-2">Triângulo 30°-60°-90°</h5>
                <p className="text-sm text-muted-foreground mb-2">Lados na proporção <strong className="font-mono">1 : √3 : 2</strong></p>
                <div className="text-sm space-y-1 text-muted-foreground">
                  <div>sin 30° = 1/2 · cos 30° = √3/2</div>
                  <div>sin 60° = √3/2 · cos 60° = 1/2</div>
                </div>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <h5 className="font-semibold text-math-purple mb-2">Triângulo 45°-45°-90°</h5>
                <p className="text-sm text-muted-foreground mb-2">Lados na proporção <strong className="font-mono">1 : 1 : √2</strong></p>
                <div className="text-sm space-y-1 text-muted-foreground">
                  <div>sin 45° = √2/2</div>
                  <div>cos 45° = √2/2</div>
                </div>
              </div>
            </div>
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
              O Círculo Trigonométrico, também chamado de Ciclo ou Circunferência Trigonométrica, é uma 
              representação gráfica que auxilia no cálculo das razões trigonométricas. Trata-se de uma circunferência 
              de raio 1, centrada na origem do plano cartesiano. Qualquer ponto sobre esta circunferência pode ser 
              descrito usando funções trigonométricas, o que torna este conceito essencial para estender a 
              trigonometria para além dos triângulos retângulos.
            </p>
            
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/fcb8dd65-eb51-481c-9675-5c6e048617c9.png" 
                alt="Círculo Trigonométrico mostrando seno, cosseno, tangente, cotangente, secante e cossecante"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Num círculo de raio 1 centrado na origem, qualquer ponto (x,y) pode ser expresso como:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-16 text-lg font-mono bg-math-blue/20 px-3 py-2 rounded">x =</div>
                <div className="text-muted-foreground">cos θ (coordenada horizontal)</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 text-lg font-mono bg-math-blue/20 px-3 py-2 rounded">y =</div>
                <div className="text-muted-foreground">sin θ (coordenada vertical)</div>
              </div>
            </div>
          </div>

          <div className="bg-math-orange/5 rounded-xl p-6 border border-math-orange/20">
            <h4 className="text-xl font-semibold mb-3 text-math-orange">Radianos vs. Graus</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Os ângulos podem ser medidos em <strong>graus</strong> ou em <strong>radianos</strong>. Um radiano é o ângulo 
              central cujo arco tem comprimento igual ao raio do círculo. Uma volta completa equivale a 360° ou 2π radianos.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { graus: '0°', rad: '0' },
                { graus: '90°', rad: 'π/2' },
                { graus: '180°', rad: 'π' },
                { graus: '360°', rad: '2π' },
              ].map((v, i) => (
                <div key={i} className="text-center p-3 bg-card rounded-lg border">
                  <div className="font-bold text-math-orange">{v.graus}</div>
                  <div className="text-sm text-muted-foreground">{v.rad} rad</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              <strong>Fórmula de conversão:</strong> Para converter graus em radianos, multiplica por π/180. 
              Para converter radianos em graus, multiplica por 180/π.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-math-green/5 rounded-xl p-6 border border-math-green/20">
              <h5 className="font-semibold mb-3 text-math-green">Quadrantes</h5>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                O plano cartesiano divide-se em 4 quadrantes, e em cada um, o seno e o cosseno têm sinais diferentes:
              </p>
              <div className="space-y-2 text-sm">
                <div><strong>I (0°–90°):</strong> sin {'>'} 0, cos {'>'} 0</div>
                <div><strong>II (90°–180°):</strong> sin {'>'} 0, cos {'<'} 0</div>
                <div><strong>III (180°–270°):</strong> sin {'<'} 0, cos {'<'} 0</div>
                <div><strong>IV (270°–360°):</strong> sin {'<'} 0, cos {'>'} 0</div>
              </div>
            </div>
            
            <div className="bg-math-purple/5 rounded-xl p-6 border border-math-purple/20">
              <h5 className="font-semibold mb-3 text-math-purple">Periodicidade</h5>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                As funções trigonométricas são periódicas, ou seja, os seus valores repetem-se após um certo intervalo:
              </p>
              <div className="space-y-2 text-sm">
                <div><strong>sin(θ + 2π) = sin(θ)</strong> — período 2π</div>
                <div><strong>cos(θ + 2π) = cos(θ)</strong> — período 2π</div>
                <div><strong>tan(θ + π) = tan(θ)</strong> — período π</div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
            <h4 className="text-xl font-semibold mb-3 text-primary">Ângulos Negativos e Coterminais</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ângulos negativos são medidos no sentido horário. Dois ângulos são <strong>coterminais</strong> se diferem 
              por um múltiplo de 360° (ou 2π rad) — partilham o mesmo ponto no círculo unitário.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div><strong>Exemplo:</strong> 45° e 405° são coterminais (405° - 360° = 45°)</div>
              <div><strong>Exemplo:</strong> -30° equivale a 330° no círculo unitário</div>
            </div>
          </div>
        </div>
      )
    },
    funcoes: {
      title: 'Outras Funções Trigonométricas',
      description: 'Além de seno, cosseno e tangente, existem mais três funções trigonométricas importantes.',
      content: (
        <div className="space-y-6">
          <div className="bg-math-orange/5 rounded-xl p-6 border border-math-orange/20">
            <h4 className="text-xl font-semibold mb-4 text-math-orange">Funções Recíprocas</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Cada uma das três funções trigonométricas principais tem uma função recíproca correspondente. Estas funções 
              são muito utilizadas em cálculo diferencial e integral, bem como em problemas de engenharia e física.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-card rounded-lg border">
                <h5 className="font-semibold mb-2">Cossecante</h5>
                <div className="text-lg font-mono mb-2">csc θ</div>
                <div className="text-sm text-muted-foreground mb-2">= 1/sin θ</div>
                <div className="text-xs text-muted-foreground">= hipotenusa / cateto oposto</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <h5 className="font-semibold mb-2">Secante</h5>
                <div className="text-lg font-mono mb-2">sec θ</div>
                <div className="text-sm text-muted-foreground mb-2">= 1/cos θ</div>
                <div className="text-xs text-muted-foreground">= hipotenusa / cateto adjacente</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <h5 className="font-semibold mb-2">Cotangente</h5>
                <div className="text-lg font-mono mb-2">cot θ</div>
                <div className="text-sm text-muted-foreground mb-2">= 1/tan θ</div>
                <div className="text-xs text-muted-foreground">= cateto adjacente / cateto oposto</div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
            <h4 className="text-xl font-semibold mb-4 text-primary">Relações Importantes</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Todas as seis funções trigonométricas estão inter-relacionadas. Conhecer uma delas (e o quadrante do ângulo) 
              permite calcular todas as outras.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="text-lg font-mono bg-secondary/20 px-3 py-2 rounded">cot θ =</div>
                <div className="text-muted-foreground">cos θ / sin θ</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-lg font-mono bg-secondary/20 px-3 py-2 rounded">tan θ · cot θ =</div>
                <div className="text-muted-foreground">1</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-lg font-mono bg-secondary/20 px-3 py-2 rounded">sin θ · csc θ =</div>
                <div className="text-muted-foreground">1</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-lg font-mono bg-secondary/20 px-3 py-2 rounded">cos θ · sec θ =</div>
                <div className="text-muted-foreground">1</div>
              </div>
            </div>
          </div>

          <div className="bg-math-blue/5 rounded-xl p-6 border border-math-blue/20">
            <h4 className="text-xl font-semibold mb-3 text-math-blue">Domínio e Contradomínio</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Cada função trigonométrica tem restrições no seu domínio (valores de entrada) e contradomínio (valores de saída):
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-3 text-left font-semibold text-math-blue">Função</th>
                    <th className="py-2 px-3 text-left font-semibold text-math-blue">Domínio</th>
                    <th className="py-2 px-3 text-left font-semibold text-math-blue">Contradomínio</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono">sin θ</td><td className="py-2 px-3">ℝ (todos os reais)</td><td className="py-2 px-3">[-1, 1]</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono">cos θ</td><td className="py-2 px-3">ℝ</td><td className="py-2 px-3">[-1, 1]</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono">tan θ</td><td className="py-2 px-3">ℝ \ {'{π/2 + nπ}'}</td><td className="py-2 px-3">ℝ</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono">csc θ</td><td className="py-2 px-3">ℝ \ {'{nπ}'}</td><td className="py-2 px-3">(-∞, -1] ∪ [1, +∞)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono">sec θ</td><td className="py-2 px-3">ℝ \ {'{π/2 + nπ}'}</td><td className="py-2 px-3">(-∞, -1] ∪ [1, +∞)</td></tr>
                  <tr><td className="py-2 px-3 font-mono">cot θ</td><td className="py-2 px-3">ℝ \ {'{nπ}'}</td><td className="py-2 px-3">ℝ</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-math-green/5 rounded-xl p-6 border border-math-green/20">
            <h4 className="text-xl font-semibold mb-3 text-math-green">Gráficos das Funções</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Os gráficos das funções trigonométricas são curvas características chamadas <strong>sinusoides</strong>. A função 
              seno forma uma onda suave que oscila entre -1 e 1, começando em 0. O cosseno é idêntico ao seno, mas deslocado 
              π/2 para a esquerda (ou seja, começa em 1). A tangente tem um comportamento diferente: cresce de -∞ a +∞ entre 
              cada par de assíntotas verticais, com período π.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 bg-card rounded-lg border text-center">
                <div className="font-semibold text-math-green mb-1">sin θ</div>
                <div className="text-xs text-muted-foreground">Onda suave, período 2π</div>
              </div>
              <div className="p-3 bg-card rounded-lg border text-center">
                <div className="font-semibold text-math-green mb-1">cos θ</div>
                <div className="text-xs text-muted-foreground">sin θ deslocado π/2</div>
              </div>
              <div className="p-3 bg-card rounded-lg border text-center">
                <div className="font-semibold text-math-green mb-1">tan θ</div>
                <div className="text-xs text-muted-foreground">Assíntotas em π/2 + nπ</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    leis: {
      title: 'Leis dos Senos e Cossenos',
      description: 'Ferramentas essenciais para resolver qualquer triângulo, não apenas os retângulos.',
      content: (
        <div className="space-y-6">
          <div className="bg-math-blue/5 rounded-xl p-6 border border-math-blue/20">
            <h4 className="text-xl font-semibold mb-4 text-math-blue">Lei dos Senos</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Lei dos Senos estabelece que, em qualquer triângulo, a razão entre um lado e o seno do ângulo oposto 
              é constante. É especialmente útil quando conhecemos um par lado-ângulo oposto.
            </p>
            <div className="p-4 bg-card rounded-lg border text-center mb-4">
              <span className="text-xl font-mono text-math-blue">a/sin A = b/sin B = c/sin C</span>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-math-blue/50">
              <p className="text-sm text-muted-foreground">
                <strong>Quando usar:</strong> Quando tens dois ângulos e um lado (AAS ou ASA), ou dois lados e um ângulo oposto (SSA — caso ambíguo).
              </p>
            </div>
          </div>

          <div className="bg-math-green/5 rounded-xl p-6 border border-math-green/20">
            <h4 className="text-xl font-semibold mb-4 text-math-green">Lei dos Cossenos</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Lei dos Cossenos é uma generalização do Teorema de Pitágoras para triângulos não retângulos. 
              Permite calcular um lado quando se conhecem os outros dois e o ângulo entre eles, ou calcular 
              um ângulo quando se conhecem os três lados.
            </p>
            <div className="p-4 bg-card rounded-lg border text-center mb-4">
              <span className="text-xl font-mono text-math-green">c² = a² + b² - 2ab·cos C</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Nota que quando C = 90°, cos C = 0, e a fórmula reduz-se ao Teorema de Pitágoras: c² = a² + b².
            </p>
            <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-math-green/50">
              <p className="text-sm text-muted-foreground">
                <strong>Quando usar:</strong> Quando tens dois lados e o ângulo entre eles (SAS), ou quando tens os três lados (SSS) e queres calcular um ângulo.
              </p>
            </div>
          </div>

          <div className="bg-math-purple/5 rounded-xl p-6 border border-math-purple/20">
            <h4 className="text-xl font-semibold mb-3 text-math-purple">Exemplo Prático: Lei dos Cossenos</h4>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>Problema:</strong> Num triângulo ABC, a = 7, b = 10, e o ângulo C = 60°. Calcula o lado c.
            </p>
            <div className="p-4 bg-card rounded-lg border space-y-2 font-mono text-sm">
              <div>c² = a² + b² - 2ab·cos C</div>
              <div>c² = 49 + 100 - 2(7)(10)·cos(60°)</div>
              <div>c² = 149 - 140 × 0,5</div>
              <div>c² = 149 - 70 = 79</div>
              <div className="text-primary font-semibold">c = √79 ≈ 8,89</div>
            </div>
          </div>

          <div className="bg-math-orange/5 rounded-xl p-6 border border-math-orange/20">
            <h4 className="text-xl font-semibold mb-3 text-math-orange">Área de um Triângulo</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quando conhecemos dois lados e o ângulo entre eles, podemos calcular a área do triângulo usando trigonometria:
            </p>
            <div className="p-4 bg-card rounded-lg border text-center mb-4">
              <span className="text-xl font-mono text-math-orange">Área = ½ · a · b · sin C</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Esta fórmula é uma alternativa à clássica Área = base × altura / 2, sendo muito útil quando 
              não conhecemos a altura diretamente.
            </p>
          </div>
        </div>
      )
    }
  };

  const conceptOptions = [
    { id: 'triangulo', label: 'Triângulo Retângulo', icon: <Triangle className="w-5 h-5" /> },
    { id: 'circulo', label: 'Círculo Unitário', icon: <Circle className="w-5 h-5" /> },
    { id: 'funcoes', label: 'Outras Funções', icon: <Calculator className="w-5 h-5" /> },
    { id: 'leis', label: 'Leis dos Senos/Cossenos', icon: <BookOpen className="w-5 h-5" /> },
  ];

  return (
    <>
      <SEO
        title="Conceitos Fundamentais de Trigonometria | TriMundo"
        description="Aprende os conceitos fundamentais de trigonometria: seno, cosseno, tangente, círculo unitário, Leis dos Senos e Cossenos e relações trigonométricas."
        keywords="seno, cosseno, tangente, triângulo retângulo, círculo unitário, SOH-CAH-TOA, funções trigonométricas, lei dos senos, lei dos cossenos"
        canonical="https://trimundo.pt/conceitos"
        structuredData={structuredData}
      />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl text-white mb-6">
            Conceitos <span className="text-accent-light">Fundamentais de Trigonometria</span>
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

      {/* Ad Banner */}
      <div className="container mx-auto px-4">
        <AdBanner adSlot="3456789012" adFormat="horizontal" />
      </div>

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

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="heading-lg text-gradient mb-10 text-center">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              { q: "O que é o seno de um ângulo?", a: "O seno de um ângulo θ num triângulo retângulo é a razão entre o comprimento do cateto oposto a esse ângulo e o comprimento da hipotenusa: sin θ = cateto oposto / hipotenusa. No círculo unitário, o seno corresponde à coordenada y do ponto sobre a circunferência." },
              { q: "O que é o círculo unitário?", a: "O círculo unitário (ou trigonométrico) é uma circunferência de raio 1 centrada na origem do plano cartesiano. Qualquer ponto (x, y) sobre o círculo pode ser expresso como (cos θ, sin θ), onde θ é o ângulo medido a partir do eixo x positivo no sentido anti-horário. É fundamental para estender as funções trigonométricas para qualquer ângulo real." },
              { q: "Qual é a relação entre seno e cosseno?", a: "Seno e cosseno estão relacionados pela identidade fundamental: sin²θ + cos²θ = 1. São funções complementares: sin θ = cos(90° - θ). No círculo unitário, o seno é a coordenada y e o cosseno é a coordenada x. Os seus gráficos são idênticos mas deslocados de π/2." },
              { q: "O que é a mnemónica SOH-CAH-TOA?", a: "SOH-CAH-TOA é uma mnemónica para lembrar as definições das três funções trigonométricas principais: SOH (Seno = Oposto/Hipotenusa), CAH (Cosseno = Adjacente/Hipotenusa) e TOA (Tangente = Oposto/Adjacente). É uma das formas mais simples de memorizar as razões trigonométricas." }
            ].map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Conceitos;
