import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Heart, Users, GraduationCap, Lightbulb } from 'lucide-react';

const SobreNos = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Sobre Nós - TriMundo",
    "description": "O trimundo.pt é um projeto educativo dedicado a tornar a matemática acessível, clara e motivadora."
  };

  return (
    <>
      <SEO
        title="Sobre Nós | TriMundo"
        description="O trimundo.pt é um projeto educativo dedicado a tornar a trigonometria acessível, clara e motivadora para todos os estudantes portugueses."
        canonical="https://trimundo.pt/sobre"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Sobre o TriMundo
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Onde a trigonometria ganha vida e se torna acessível a todos.
            </p>
          </div>

          {/* Missão */}
          <div className="space-y-8 text-muted-foreground leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                A Nossa Missão
              </h2>
              <p>
                O <span className="text-primary font-semibold">TriMundo</span> nasceu com uma missão clara: tornar a trigonometria compreensível, interessante e relevante para todos os estudantes. Acreditamos que a matemática não precisa de ser um obstáculo — pode ser uma ferramenta poderosa que abre portas para compreender o mundo.
              </p>
              <p className="mt-3">
                Criado em Portugal e pensado para estudantes lusófonos, o TriMundo oferece conteúdos originais, explicações detalhadas e exercícios interativos que transformam conceitos abstratos em conhecimento aplicável.
              </p>
            </section>

            {/* Quem Somos */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                Quem Somos
              </h2>
              <p>
                O TriMundo é um projeto criado por <strong className="text-foreground">Maria Teresa</strong>, educadora apaixonada pela matemática e pelo ensino. Com experiência em acompanhamento escolar e explicações, Maria Teresa identificou uma lacuna: muitos estudantes têm dificuldade em trigonometria não por falta de capacidade, mas por falta de recursos claros e motivadores em português.
              </p>
              <p className="mt-3">
                Foi desta observação que nasceu o trimundo.pt — um espaço onde a trigonometria é explicada com paciência, rigor e exemplos do mundo real.
              </p>
            </section>

            {/* O Que Oferecemos */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                O Que Oferecemos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <GraduationCap className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Conteúdo Educativo Original</h3>
                  <p className="text-base">
                    Explicações detalhadas sobre história, conceitos fundamentais, ângulos notáveis, identidades, limites trigonométricos e aplicações práticas — tudo escrito de raiz com rigor pedagógico.
                  </p>
                </div>
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <Lightbulb className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Aprendizagem Interativa</h3>
                  <p className="text-base">
                    Flash cards para memorização, exercícios com verificação automática, modo quiz e exemplos resolvidos passo a passo — ferramentas pensadas para diferentes estilos de aprendizagem.
                  </p>
                </div>
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Aplicações no Mundo Real</h3>
                  <p className="text-base">
                    Mostramos como a trigonometria é usada na arquitetura, navegação, medicina, física e tecnologia — para que saibas por que vale a pena aprender.
                  </p>
                </div>
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Acesso Gratuito</h3>
                  <p className="text-base">
                    Todo o conteúdo do TriMundo é gratuito e acessível a qualquer pessoa, em qualquer dispositivo. Sem registo, sem barreiras — apenas conhecimento aberto.
                  </p>
                </div>
              </div>
            </section>

            {/* Metodologia */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-primary" />
                A Nossa Abordagem
              </h2>
              <p>
                No TriMundo, seguimos uma abordagem pedagógica que combina teoria com prática:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 ml-4">
                <li><strong className="text-foreground">Contexto histórico:</strong> cada conceito é apresentado com a sua origem e evolução, para que compreendas de onde vem e por que foi desenvolvido.</li>
                <li><strong className="text-foreground">Explicação visual:</strong> tabelas, diagramas e representações gráficas acompanham as explicações teóricas.</li>
                <li><strong className="text-foreground">Prática ativa:</strong> flash cards, exercícios interativos e quizzes permitem testar os conhecimentos imediatamente.</li>
                <li><strong className="text-foreground">Aplicações reais:</strong> cada tema é ligado a exemplos concretos do quotidiano e de áreas profissionais.</li>
              </ul>
            </section>

            {/* Valores */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                Os Nossos Valores
              </h2>
              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong className="text-foreground">Rigor:</strong> todo o conteúdo é verificado para garantir exatidão matemática.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong className="text-foreground">Acessibilidade:</strong> linguagem clara, design intuitivo e acesso gratuito.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong className="text-foreground">Originalidade:</strong> todo o conteúdo é criado de raiz pela nossa equipa.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p><strong className="text-foreground">Motivação:</strong> acreditamos que aprender pode ser uma experiência positiva e enriquecedora.</p>
                </div>
              </div>
            </section>

            <blockquote className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
              <p className="italic text-foreground text-xl">
                "Seja bem-vindo ao TriMundo — onde aprender trigonometria é descobrir o mundo."
              </p>
            </blockquote>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-8">
              <h2 className="text-xl font-bold mb-4 text-foreground">Pronto para começar?</h2>
              <p className="text-muted-foreground mb-6">Explora os nossos conteúdos e descobre a trigonometria de uma forma nova.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  to="/conceitos" 
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Começar a Aprender →
                </Link>
                <Link 
                  to="/exercicios" 
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-background text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors border border-border"
                >
                  Ver Exercícios
                </Link>
                <Link 
                  to="/contacto" 
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-background text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors border border-border"
                >
                  Contactar-nos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreNos;
