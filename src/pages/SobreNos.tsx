import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Target, 
  BookOpen, 
  Users, 
  Lightbulb, 
  CheckCircle2,
  Eye,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Triangle,
  Compass,
  Calculator,
  Globe
} from 'lucide-react';

const SobreNos = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Sobre o TriMundo",
    "description": "Projeto educativo dedicado a ensinar trigonometria de forma simples, visual e interativa."
  };

  const objetivos = [
    {
      icon: Lightbulb,
      title: "Simplificar a trigonometria ao máximo",
      description: "Cada conceito é apresentado com clareza, usando exemplos visuais e comparações do dia a dia."
    },
    {
      icon: TrendingUp,
      title: "Aumentar a confiança do aluno",
      description: "A trigonometria deixa de ser um obstáculo e passa a ser uma ferramenta matemática compreensível e útil."
    },
    {
      icon: BookOpen,
      title: "Criar recursos acessíveis e autónomos",
      description: "Guias, exercícios e explicações que permitem aprender ao próprio ritmo, com segurança e autonomia."
    },
    {
      icon: Users,
      title: "Apoiar pais, professores e tutores",
      description: "Materiais práticos que podem ser usados em casa, em sala de aula ou em apoio ao estudo."
    },
    {
      icon: Sparkles,
      title: "Tornar a aprendizagem leve e motivadora",
      description: "A matemática pode ser clara, lógica e até divertida quando apresentada com cuidado e propósito."
    }
  ];

  const trabalhoCaracteristicas = [
    { icon: CheckCircle2, text: "Explicações passo a passo" },
    { icon: Eye, text: "Representações visuais intuitivas" },
    { icon: TrendingUp, text: "Exercícios graduais" },
    { icon: MessageSquare, text: "Linguagem simples e direta" },
    { icon: Lightbulb, text: "Rigor matemático sem complicações" }
  ];

  const ofertas = [
    {
      icon: BookOpen,
      title: "Teoria Completa",
      description: "Módulos teóricos abrangentes que cobrem desde conceitos básicos até identidades avançadas."
    },
    {
      icon: Calculator,
      title: "Exercícios Práticos",
      description: "Exercícios interativos com diferentes níveis de dificuldade e feedback instantâneo."
    },
    {
      icon: Compass,
      title: "Visualizações do Círculo Unitário",
      description: "Representações visuais dinâmicas que ajudam a compreender seno, cosseno e tangente."
    },
    {
      icon: Globe,
      title: "Aplicações no Mundo Real",
      description: "Exemplos práticos de como a trigonometria é usada em engenharia, navegação e ciência."
    }
  ];

  return (
    <>
      <SEO
        title="Sobre o TriMundo"
        description="Projeto educativo dedicado a ensinar trigonometria de forma simples, visual e interativa. Conheça a nossa missão e objetivos."
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre o <span className="text-primary">TriMundo</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um projeto dedicado a ajudar alunos a compreender trigonometria de forma simples, visual e confiante.
            </p>
          </div>

          {/* Sobre o Projeto Section */}
          <section className="mb-16">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Triangle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                  <span className="text-2xl">📐</span> Sobre o Projeto
                </h2>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <p className="text-lg text-foreground">
                    O <span className="text-primary font-semibold">TriMundo</span> é um projeto educativo criado para transformar a forma como os alunos aprendem trigonometria.
                  </p>
                  
                  <blockquote className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg italic text-muted-foreground">
                    "Acreditamos que a matemática só se torna difícil quando é mal explicada."
                  </blockquote>
                  
                  <p className="text-muted-foreground">
                    Por isso, desenvolvemos conteúdos que transformam a trigonometria — um dos temas mais desafiantes para muitos estudantes — em algo claro, lógico e acessível. Do círculo unitário às aplicações no mundo real, cada conceito é apresentado de forma visual e progressiva.
                  </p>

                  <div className="pt-4">
                    <p className="font-semibold text-foreground mb-4">O nosso trabalho combina:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {trabalhoCaracteristicas.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                          <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                    <p className="flex items-start gap-2 text-foreground">
                      <Target className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>
                        O objetivo é sempre o mesmo: <span className="text-primary font-medium">fazer com que cada aluno sinta que consegue aprender trigonometria</span>, mesmo que já tenha tentado antes.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Objetivos Section */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
                <span className="text-2xl">🎯</span> Objetivos do TriMundo
              </h2>
            </div>

            <div className="space-y-4">
              {objetivos.map((objetivo, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl border border-border p-6 flex items-start gap-4 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {index + 1}. {objetivo.title}
                    </h3>
                    <p className="text-muted-foreground">{objetivo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* O Que Oferecemos Section */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">O Que Oferecemos</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ofertas.map((oferta, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                    <oferta.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{oferta.title}</h3>
                  <p className="text-muted-foreground">{oferta.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto para explorar a trigonometria?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Descobre conceitos fundamentais, pratica com exercícios interativos e vê como a trigonometria está presente no mundo real.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/conceitos" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Começar a Aprender
                  <span>→</span>
                </Link>
                <Link 
                  to="/exercicios" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors border border-border"
                >
                  Ver Exercícios
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SobreNos;
