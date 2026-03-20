import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calculator, CheckCircle, Eye, EyeOff, BookOpen, Flame, Zap } from 'lucide-react';
import SEO from '@/components/SEO';
import AdBanner from '@/components/AdBanner';

interface Exercise {
  id: number;
  question: string;
  hint?: string;
  resolution?: string;
  answer: string;
  difficulty: 'fácil' | 'intermédio' | 'avançado';
}

const exercises: Exercise[] = [
  // NÍVEL FÁCIL
  {
    id: 1,
    question: 'Num triângulo retângulo, o cateto oposto mede 6 e a hipotenusa mede 10. Calcula sin θ.',
    hint: 'Usa a fórmula sin θ = oposto / hipotenusa.',
    resolution: 'sin θ = 6/10 = 3/5.',
    answer: '3/5',
    difficulty: 'fácil',
  },
  {
    id: 2,
    question: 'Num triângulo com lados 3, 4 e 5, determina o maior ângulo.',
    hint: 'O maior ângulo está oposto ao maior lado.',
    resolution: 'O maior lado é 5. O triângulo é retângulo (3² + 4² = 5²). Logo, o maior ângulo é 90°.',
    answer: '90°',
    difficulty: 'fácil',
  },
  {
    id: 3,
    question: 'Converte 45° para radianos.',
    hint: 'Multiplica por π/180.',
    resolution: '45° × π/180 = π/4.',
    answer: 'π/4',
    difficulty: 'fácil',
  },
  {
    id: 4,
    question: 'Indica o sinal de cos(150°).',
    hint: '150° está no 2º quadrante.',
    resolution: 'No 2º quadrante, o cosseno é negativo.',
    answer: 'Negativo',
    difficulty: 'fácil',
  },
  {
    id: 5,
    question: 'Se sin θ = 3/5 no 1º quadrante, calcula cos θ.',
    hint: 'Usa sin²θ + cos²θ = 1.',
    resolution: 'cos²θ = 1 - (3/5)² = 16/25 → cos θ = 4/5.',
    answer: '4/5',
    difficulty: 'fácil',
  },
  {
    id: 6,
    question: 'Indica as coordenadas de 0° no círculo unitário.',
    hint: 'No círculo unitário, as coordenadas são (cos θ, sin θ).',
    answer: '(1, 0)',
    difficulty: 'fácil',
  },
  // NÍVEL INTERMÉDIO
  {
    id: 7,
    question: 'Num triângulo ABC, com a = 7, b = 8 e c = 9, calcula o ângulo A.',
    hint: 'Usa cos A = (b² + c² - a²) / (2bc).',
    resolution: 'cos A = (64 + 81 - 49) / 144 = 2/3 → A ≈ 48,19°.',
    answer: '48,19°',
    difficulty: 'intermédio',
  },
  {
    id: 8,
    question: 'Num triângulo, a = 12, A = 30° e B = 45°. Calcula b.',
    hint: 'Usa a Lei dos Senos.',
    resolution: 'b/sin B = a/sin A → b = 12 × sin 45° / sin 30° = 12√2.',
    answer: '12√2',
    difficulty: 'intermédio',
  },
  {
    id: 9,
    question: 'Determina tan(45°).',
    hint: 'No círculo unitário, tan = y/x.',
    resolution: 'tan(45°) = sin(45°)/cos(45°) = (√2/2)/(√2/2) = 1.',
    answer: '1',
    difficulty: 'intermédio',
  },
  {
    id: 10,
    question: 'Calcula sin(60°) e cos(60°).',
    hint: 'Usa o triângulo 30–60–90.',
    resolution: 'No triângulo 30-60-90, sin(60°) = √3/2 e cos(60°) = 1/2.',
    answer: 'sin = √3/2, cos = 1/2',
    difficulty: 'intermédio',
  },
  {
    id: 11,
    question: 'Se sec x = 4, calcula cos x.',
    hint: 'sec x = 1/cos x.',
    resolution: 'cos x = 1/sec x = 1/4.',
    answer: '1/4',
    difficulty: 'intermédio',
  },
  {
    id: 12,
    question: 'Calcula o limite lim(x→0) sin(3x)/x.',
    hint: 'Multiplica e divide por 3x.',
    resolution: 'lim(x→0) sin(3x)/x = lim(x→0) 3 × [sin(3x)/(3x)] = 3 × 1 = 3.',
    answer: '3',
    difficulty: 'intermédio',
  },
  {
    id: 13,
    question: 'Resolve sin x = 1/2 no intervalo [0, 2π].',
    hint: 'Identifica em que quadrantes o seno é positivo.',
    resolution: 'sin x = 1/2 → x = π/6 (1º quadrante) e x = 5π/6 (2º quadrante).',
    answer: 'x = π/6 e 5π/6',
    difficulty: 'intermédio',
  },
  // NÍVEL AVANÇADO
  {
    id: 14,
    question: 'Mostra que sin(2x) = 2 sin x cos x.',
    hint: 'Usa sin(a+b) = sin a cos b + cos a sin b.',
    resolution: 'sin(x+x) = sin x cos x + cos x sin x = 2 sin x cos x.',
    answer: '2 sin x cos x',
    difficulty: 'avançado',
  },
  {
    id: 15,
    question: 'Demonstra que 1 + cot²x = csc²x.',
    hint: 'Divide sin²x + cos²x = 1 por sin²x.',
    resolution: '(sin²x/sin²x) + (cos²x/sin²x) = 1/sin²x → 1 + cot²x = csc²x.',
    answer: '1 + cot²x = csc²x',
    difficulty: 'avançado',
  },
  {
    id: 16,
    question: 'Calcula lim(x→0) tan(5x)/sin(2x).',
    hint: 'tan(kx) ≈ kx e sin(kx) ≈ kx quando x→0.',
    resolution: 'lim(x→0) tan(5x)/sin(2x) ≈ lim(x→0) 5x/(2x) = 5/2.',
    answer: '5/2',
    difficulty: 'avançado',
  },
  {
    id: 17,
    question: 'Um pêndulo forma 12° com a vertical. A força total é 40 N. Determina a componente horizontal.',
    hint: 'Fh = F × sin θ.',
    resolution: 'Fh = 40 × sin(12°) = 40 × 0,2079 ≈ 8,32 N.',
    answer: '8,32 N',
    difficulty: 'avançado',
  },
  {
    id: 18,
    question: 'Um barco desloca-se 12 km para leste e 5 km para norte. Determina a direção final.',
    hint: 'tan θ = cateto oposto / cateto adjacente.',
    resolution: 'tan θ = 5/12 → θ = arctan(5/12) ≈ 22,62°.',
    answer: '22,62° a norte do leste',
    difficulty: 'avançado',
  },
  {
    id: 19,
    question: 'Uma rampa tem 1,2 m de altura e 8 m de comprimento. Determina o ângulo de inclinação.',
    hint: 'sin θ = altura / hipotenusa.',
    resolution: 'sin θ = 1,2/8 = 0,15 → θ = arcsin(0,15) ≈ 8,63°.',
    answer: '8,63°',
    difficulty: 'avançado',
  },
  {
    id: 20,
    question: 'Determina o período e a amplitude de f(x) = 3 sin(2x).',
    hint: 'Amplitude = |A|, Período = 2π/|B| para f(x) = A sin(Bx).',
    resolution: 'Amplitude = |3| = 3. Período = 2π/|2| = π.',
    answer: 'Amplitude = 3; Período = π',
    difficulty: 'avançado',
  },
];

const Exercicios = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'fácil' | 'intermédio' | 'avançado'>('all');
  const [revealedExercises, setRevealedExercises] = useState<{ [key: number]: boolean }>({});

  const filteredExercises = selectedDifficulty === 'all'
    ? exercises
    : exercises.filter(ex => ex.difficulty === selectedDifficulty);

  const toggleReveal = (id: number) => {
    setRevealedExercises(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'fácil': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300';
      case 'intermédio': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300';
      case 'avançado': return 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'fácil': return <BookOpen className="w-3.5 h-3.5" />;
      case 'intermédio': return <Flame className="w-3.5 h-3.5" />;
      case 'avançado': return <Zap className="w-3.5 h-3.5" />;
      default: return null;
    }
  };

  const groupedByDifficulty = (list: Exercise[]) => {
    const groups: { label: string; key: string; items: Exercise[] }[] = [];
    const order: Array<'fácil' | 'intermédio' | 'avançado'> = ['fácil', 'intermédio', 'avançado'];
    for (const d of order) {
      const items = list.filter(ex => ex.difficulty === d);
      if (items.length > 0) {
        groups.push({ label: d === 'fácil' ? 'Nível Fácil' : d === 'intermédio' ? 'Nível Intermédio' : 'Nível Avançado', key: d, items });
      }
    }
    return groups;
  };

  const groups = groupedByDifficulty(filteredExercises);

  return (
    <>
      <SEO
        title="Exercícios de Trigonometria | TriMundo"
        description="20 exercícios de trigonometria organizados por nível de dificuldade: fácil, intermédio e avançado. Pratica com resoluções detalhadas passo a passo."
        keywords="exercícios trigonometria, lei dos cossenos, lei dos senos, limites trigonométricos, identidades trigonométricas, prática matemática"
        canonical="https://trimundo.pt/exercicios"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Quiz",
          "name": "Exercícios de Trigonometria",
          "description": "20 exercícios interativos de trigonometria organizados por nível de dificuldade",
          "educationalLevel": ["Beginner", "Intermediate", "Advanced"],
          "publisher": { "@type": "Organization", "name": "TriMundo", "url": "https://trimundo.pt" }
        }}
      />
      <main className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Calculator className="w-12 h-12 text-primary" />
            </div>
            <h1 className="heading-xl text-gradient mb-4">Exercícios de Trigonometria</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              20 exercícios organizados por nível de dificuldade. Tenta resolver antes de revelar a resolução!
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {[
              { key: 'all' as const, label: 'Todos (20)', icon: <BookOpen className="w-4 h-4" /> },
              { key: 'fácil' as const, label: 'Fácil (6)', icon: <BookOpen className="w-4 h-4" /> },
              { key: 'intermédio' as const, label: 'Intermédio (7)', icon: <Flame className="w-4 h-4" /> },
              { key: 'avançado' as const, label: 'Avançado (7)', icon: <Zap className="w-4 h-4" /> },
            ].map(btn => (
              <Button
                key={btn.key}
                variant={selectedDifficulty === btn.key ? 'default' : 'outline'}
                onClick={() => setSelectedDifficulty(btn.key)}
                className="gap-2"
              >
                {btn.icon}
                {btn.label}
              </Button>
            ))}
          </div>

          <AdBanner adSlot="7890123456" adFormat="horizontal" />

          {/* Exercises by group */}
          <div className="space-y-10">
            {groups.map(group => (
              <section key={group.key}>
                <h2 className="heading-lg mb-6 flex items-center gap-3">
                  {getDifficultyIcon(group.key)}
                  {group.label}
                </h2>
                <div className="grid gap-5">
                  {group.items.map((exercise, index) => {
                    const isRevealed = revealedExercises[exercise.id];
                    return (
                      <Card
                        key={exercise.id}
                        className="hover:shadow-elegant transition-all duration-300 animate-slide-up"
                        style={{ animationDelay: `${0.15 + index * 0.05}s` }}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <CardTitle className="heading-md mb-1.5">
                                Exercício {exercise.id}
                              </CardTitle>
                              <CardDescription className="text-base leading-relaxed text-foreground/80">
                                {exercise.question}
                              </CardDescription>
                            </div>
                            <Badge className={`${getDifficultyColor(exercise.difficulty)} flex items-center gap-1.5 shrink-0`}>
                              {getDifficultyIcon(exercise.difficulty)}
                              {exercise.difficulty}
                            </Badge>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-3 pt-0">
                          {exercise.hint && (
                            <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-primary/50">
                              <p className="text-sm text-foreground">
                                <strong>💡 Dica:</strong> {exercise.hint}
                              </p>
                            </div>
                          )}

                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleReveal(exercise.id)}
                            className="gap-2"
                          >
                            {isRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            {isRevealed ? 'Ocultar Resolução' : 'Ver Resolução'}
                          </Button>

                          {isRevealed && (
                            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg space-y-2 animate-slide-up">
                              {exercise.resolution && (
                                <p className="text-sm text-foreground">
                                  <strong>📝 Resolução:</strong> {exercise.resolution}
                                </p>
                              )}
                              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                Resultado Final: {exercise.answer}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {filteredExercises.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum exercício encontrado para o filtro selecionado.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Exercicios;
