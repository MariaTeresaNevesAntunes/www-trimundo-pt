import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

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
        title="MTNA-TriMundo-Sobre Nós"
        description="O trimundo.pt é um projeto educativo dedicado a tornar a matemática acessível, clara e motivadora para todos os estudantes."
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Sobre Nós
            </h1>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              O <span className="text-primary font-semibold">trimundo.pt</span> é um projeto educativo dedicado a tornar a matemática acessível, clara e motivadora para todos os estudantes. Criado por <strong className="text-foreground">Maria Teresa</strong>, educadora apaixonada pela aprendizagem, o site oferece explicações simples, exercícios práticos e recursos digitais que ajudam alunos a ganhar confiança e autonomia.
            </p>

            <p>
              Acreditamos que aprender matemática pode ser leve, intuitivo e até divertido. O nosso objetivo é apoiar estudantes, pais e professores com conteúdos de qualidade, sempre atualizados e pensados para o sucesso escolar.
            </p>

            <blockquote className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
              <p className="italic text-foreground text-xl">
                Seja bem-vindo ao Trimundo – onde aprender é crescer.
              </p>
            </blockquote>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-8">
              <h2 className="text-xl font-bold mb-4 text-foreground">Pronto para começar?</h2>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreNos;
