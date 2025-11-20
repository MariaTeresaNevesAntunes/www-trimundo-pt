import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calculator, CheckCircle, XCircle, BookOpen } from 'lucide-react';
import SEO from '@/components/SEO';

interface Exercise {
  id: number;
  type: 'cosine-law' | 'trigonometric-functions';
  question: string;
  answer: string;
  hint?: string;
  difficulty: 'fácil' | 'médio' | 'difícil';
}

const Exercicios = () => {
  const [selectedType, setSelectedType] = useState<'all' | 'cosine-law' | 'trigonometric-functions'>('all');
  const [userAnswers, setUserAnswers] = useState<{[key: number]: string}>({});
  const [checkedAnswers, setCheckedAnswers] = useState<{[key: number]: boolean}>({});
  const [showResults, setShowResults] = useState<{[key: number]: boolean}>({});

  const exercises: Exercise[] = [
    {
      id: 1,
      type: 'cosine-law',
      question: 'No triângulo ABC, α=60°, b=4 e c=5. Calcular o lado a.',
      answer: '√21 ≈ 4,58',
      hint: 'Use a fórmula: a² = b² + c² - 2bc cos α',
      difficulty: 'médio'
    },
    {
      id: 2,
      type: 'cosine-law',
      question: 'Em um triângulo, os lados medem 3, 4 e 5. Qual é o maior ângulo?',
      answer: '90°',
      hint: 'O maior ângulo está oposto ao maior lado',
      difficulty: 'fácil'
    },
    {
      id: 3,
      type: 'trigonometric-functions',
      question: 'Calcule sen(240°), cos(240°) e tan(240°).',
      answer: 'sen(240°) = -√3/2, cos(240°) = -1/2, tan(240°) = √3',
      hint: '240° = 180° + 60°, use as propriedades do terceiro quadrante',
      difficulty: 'médio'
    },
    {
      id: 4,
      type: 'trigonometric-functions',
      question: 'Calcule sen(150°), cos(150°) e tan(150°).',
      answer: 'sen(150°) = 1/2, cos(150°) = -√3/2, tan(150°) = -√3/3',
      hint: '150° = 180° - 30°, use as propriedades do segundo quadrante',
      difficulty: 'médio'
    },
    {
      id: 5,
      type: 'cosine-law',
      question: 'No triângulo ABC, a=7, b=8 e c=9. Calcule o ângulo A.',
      answer: '60° (aproximadamente)',
      hint: 'Use: cos A = (b² + c² - a²) / (2bc)',
      difficulty: 'difícil'
    },
    {
      id: 6,
      type: 'trigonometric-functions',
      question: 'Se sen θ = 3/5 e θ está no primeiro quadrante, calcule cos θ e tan θ.',
      answer: 'cos θ = 4/5, tan θ = 3/4',
      hint: 'Use a identidade fundamental: sen²θ + cos²θ = 1',
      difficulty: 'fácil'
    }
  ];

  const filteredExercises = selectedType === 'all' 
    ? exercises 
    : exercises.filter(ex => ex.type === selectedType);

  const handleAnswerChange = (exerciseId: number, value: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [exerciseId]: value
    }));
  };

  const checkAnswer = (exerciseId: number) => {
    const exercise = exercises.find(ex => ex.id === exerciseId);
    const userAnswer = userAnswers[exerciseId]?.trim().toLowerCase();
    const correctAnswer = exercise?.answer.toLowerCase();
    
    const isCorrect = userAnswer && correctAnswer && 
      (userAnswer.includes(correctAnswer.split(' ')[0]) || 
       correctAnswer.includes(userAnswer));
    
    setCheckedAnswers(prev => ({
      ...prev,
      [exerciseId]: isCorrect
    }));
    
    setShowResults(prev => ({
      ...prev,
      [exerciseId]: true
    }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'fácil': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'médio': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'difícil': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-subtle py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Calculator className="w-12 h-12 text-primary animate-pulse-soft" />
            <h1 className="heading-xl text-gradient">Exercícios de</h1>
          </div>
          <h2 className="heading-xl text-gradient mb-6">Trigonometria</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pratique seus conhecimentos com exercícios sobre Lei dos Cossenos e funções trigonométricas
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <Button 
            variant={selectedType === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedType('all')}
            className="gap-2"
          >
            <BookOpen className="w-4 h-4" />
            Todos os Exercícios
          </Button>
          <Button 
            variant={selectedType === 'cosine-law' ? 'default' : 'outline'}
            onClick={() => setSelectedType('cosine-law')}
          >
            Lei dos Cossenos
          </Button>
          <Button 
            variant={selectedType === 'trigonometric-functions' ? 'default' : 'outline'}
            onClick={() => setSelectedType('trigonometric-functions')}
          >
            Funções Trigonométricas
          </Button>
        </div>

        {/* Exercises Grid */}
        <div className="grid gap-6">
          {filteredExercises.map((exercise, index) => (
            <Card 
              key={exercise.id} 
              className="math-card hover:shadow-elegant transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="heading-md mb-2">
                      Exercício {exercise.id}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {exercise.question}
                    </CardDescription>
                  </div>
                  <Badge className={getDifficultyColor(exercise.difficulty)}>
                    {exercise.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {exercise.hint && (
                  <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-primary/50">
                    <p className="text-sm text-foreground">
                      <strong>Dica:</strong> {exercise.hint}
                    </p>
                  </div>
                )}
                
                <div className="flex gap-3">
                  <Input
                    placeholder="Digite sua resposta..."
                    value={userAnswers[exercise.id] || ''}
                    onChange={(e) => handleAnswerChange(exercise.id, e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={() => checkAnswer(exercise.id)}
                    disabled={!userAnswers[exercise.id]?.trim()}
                    className="gap-2"
                  >
                    <Calculator className="w-4 h-4" />
                    Verificar
                  </Button>
                </div>
                
                {showResults[exercise.id] && (
                  <div className={`p-3 rounded-lg flex items-center gap-3 ${
                    checkedAnswers[exercise.id] 
                      ? 'bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800' 
                      : 'bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800'
                  }`}>
                    {checkedAnswers[exercise.id] ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-green-700 dark:text-green-300 font-medium">
                          Correto! Parabéns!
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                        <div className="text-red-700 dark:text-red-300">
                          <span className="font-medium">Incorreto.</span>
                          <div className="mt-1 text-sm">
                            <strong>Resposta correta:</strong> {exercise.answer}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
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
  );
};

export default Exercicios;