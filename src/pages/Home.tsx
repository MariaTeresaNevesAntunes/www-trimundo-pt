import Hero from '@/components/Hero';
import ConceptCard from '@/components/ConceptCard';
import SEO from '@/components/SEO';
import { 
  History, 
  Calculator, 
  Target, 
  Zap, 
  Building, 
  Music,
  Rocket,
  Brain
} from 'lucide-react';

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "TriMundo",
    "description": "Plataforma educativa interativa para aprender trigonometria de forma visual e contextualizada",
    "url": "https://lovable.app",
    "educationalProgramMode": "online"
  };

  return (
    <>
      <SEO
        title="MTNA-TriMundo-Descobre a Trigonometria no Mundo Real"
        description="Descobre a Trigonometria no Mundo Real. Aprende trigonometria de forma interativa e visual. História, conceitos fundamentais, ângulos notáveis e aplicações no mundo real."
        structuredData={structuredData}
      />
      <div className="min-h-screen">
        <Hero />
        
        {/* Features Section */}
        <main>
          <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gradient mb-4">
              Jornada pela Trigonometria
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explora cada conceito de forma visual e interativa. 
              Desde os fundamentos até as aplicações mais avançadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ConceptCard
              title="História"
              description="Descobre como a trigonometria evoluiu desde os antigos babilónios até aos navegadores portugueses."
              icon={<History className="w-6 h-6" />}
              color="blue"
              link="/historia"
              delay={0.1}
            />
            
            <ConceptCard
              title="Conceitos Fundamentais"
              description="Seno, cosseno, tangente - aprende o que significam e como se relacionam no triângulo e no círculo."
              icon={<Calculator className="w-6 h-6" />}
              color="green"
              link="/conceitos"
              delay={0.2}
            />
            
            <ConceptCard
              title="Ângulos Notáveis"
              description="Os valores essenciais de 0°, 30°, 45°, 60°, 90° e os quadrantes do círculo trigonométrico."
              icon={<Target className="w-6 h-6" />}
              color="purple"
              link="/angulos-notaveis"
              delay={0.3}
            />
            
            <ConceptCard
              title="Identidades"
              description="As relações matemáticas elegantes que conectam todas as funções trigonométricas."
              icon={<Zap className="w-6 h-6" />}
              color="orange"
              link="/identidades"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gradient mb-4">
              Onde Encontras Trigonometria?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A trigonometria está em todo o lado. Vê como ela molda o nosso mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ConceptCard
              title="Arquitetura"
              description="Cálculo de inclinações, estruturas e a estabilidade de edifícios impressionantes."
              icon={<Building className="w-6 h-6" />}
              color="blue"
              delay={0.1}
            />
            
            <ConceptCard
              title="Música"
              description="Ondas sonoras, frequências e a matemática por trás dos sons que ouvimos."
              icon={<Music className="w-6 h-6" />}
              color="green"
              delay={0.2}
            />
            
            <ConceptCard
              title="Navegação Espacial"
              description="Como os satélites encontram o caminho e as missões chegam a outros planetas."
              icon={<Rocket className="w-6 h-6" />}
              color="purple"
              delay={0.3}
            />
            
            <ConceptCard
              title="Inteligência Artificial"
              description="Algoritmos, visão computacional e redes neurais usam trigonometria constantemente."
              icon={<Brain className="w-6 h-6" />}
              color="orange"
              delay={0.4}
            />
          </div>

          <div className="text-center mt-12">
            <a 
              href="/aplicacoes" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Ver Todas as Aplicações
              <Target className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-4xl mx-auto text-white">
            <p className="text-2xl md:text-3xl font-light mb-6 leading-relaxed">
              "A trigonometria é a chave que abre as portas da navegação, 
              da arquitetura, da música e até das estrelas."
            </p>
            <footer className="text-xl text-accent-light">
              — Descoberta através dos séculos
            </footer>
          </blockquote>
        </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;