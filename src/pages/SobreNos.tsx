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
  Globe,
  HelpCircle
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
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre o <span className="text-primary">TriMundo</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um projeto dedicado a ajudar alunos a compreender trigonometria de forma simples, visual e confiante.
            </p>
          </div>

          {/* Sobre o Projeto Section */}
          <section className="mb-12">
            <div className="bg-card rounded-2xl border border-border shadow-sm p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Triangle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                  <span>👩‍🏫</span> Sobre o Projeto
                </h2>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <p className="text-base text-foreground">
                    O <span className="text-primary font-semibold">TriMundo</span> é um projeto educativo dedicado a ajudar alunos a compreender trigonometria de forma simples, visual e confiante.
                  </p>
                  
                  <blockquote className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                    <p className="italic text-foreground">
                      "Acreditamos que a matemática só se torna difícil quando é mal explicada."
                    </p>
                  </blockquote>
                  
                  <p className="text-muted-foreground text-sm">
                    Por isso, desenvolvemos conteúdos que transformam a trigonometria — um dos temas mais desafiantes para muitos estudantes — em algo claro, lógico e acessível.
                  </p>

                  <div className="pt-2">
                    <p className="font-medium text-foreground text-sm mb-3">O nosso trabalho combina:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {trabalhoCaracteristicas.map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-2 px-3 py-2 bg-muted/40 rounded-lg border border-border/50"
                        >
                          <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/20">
                    <p className="flex items-start gap-2 text-sm text-foreground">
                      <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        O objetivo é sempre o mesmo: <span className="text-primary font-medium underline decoration-primary/30">fazer com que cada aluno sinta que consegue aprender trigonometria</span>, mesmo que já tenha tentado antes.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Objetivos Section */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold flex items-center justify-center gap-2">
                <span>🎯</span> Objetivos do TriMundo
              </h2>
            </div>

            <div className="space-y-3">
              {objetivos.map((objetivo, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl border border-border p-5 flex items-start gap-4 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {index + 1}. {objetivo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{objetivo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* O Que Oferecemos Section */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold">O Que Oferecemos</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {ofertas.map((oferta, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-3">
                    <oferta.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{oferta.title}</h3>
                  <p className="text-sm text-muted-foreground">{oferta.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <div className="bg-muted/30 rounded-xl border border-border p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                <p className="text-base font-medium text-foreground">Tem questões ou sugestões?</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Estamos sempre a melhorar os nossos conteúdos. O seu feedback é bem-vindo!
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-6 md:p-10">
              <h2 className="text-xl md:text-2xl font-bold mb-3">Pronto para explorar a trigonometria?</h2>
              <p className="text-sm text-muted-foreground mb-5 max-w-lg mx-auto">
                Descobre conceitos fundamentais, pratica com exercícios interativos e vê como a trigonometria está presente no mundo real.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  to="/conceitos" 
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Começar a Aprender
                  <span>→</span>
                </Link>
                <Link 
                  to="/exercicios" 
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-background text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors border border-border"
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
