import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

const TermosUso = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Termos e Condições - TriMundo",
    "description": "Termos e condições de utilização do site trimundo.pt"
  };

  return (
    <>
      <SEO
        title="Termos e Condições"
        description="Termos e condições de utilização do site trimundo.pt. Ao utilizar o website, o utilizador concorda com os presentes termos."
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Termos e Condições
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ao utilizar o website trimundo.pt, o utilizador concorda com os presentes Termos e Condições.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Objetivo do Site</h2>
              <p className="text-muted-foreground leading-relaxed">
                O trimundo.pt disponibiliza conteúdos educativos, recursos de matemática e materiais de apoio ao estudo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo presente no site (textos, imagens, exercícios, explicações) é propriedade de trimundo.pt, salvo indicação em contrário. Não é permitida a reprodução sem autorização.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Utilização Permitida</h2>
              <p className="text-muted-foreground leading-relaxed">
                O utilizador compromete-se a utilizar o site apenas para fins legais e educativos, sem causar danos ao funcionamento da plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Ligações Externas e Afiliados</h2>
              <p className="text-muted-foreground leading-relaxed">
                O site pode conter links de afiliados (ex.: Auchan). As compras realizadas através desses links podem gerar comissões, sem custo adicional para o utilizador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                Embora nos esforcemos por garantir a exatidão dos conteúdos, não garantimos que toda a informação esteja sempre atualizada. O utilizador assume total responsabilidade pela utilização do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Alterações aos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar estes Termos a qualquer momento. A versão mais recente estará sempre disponível nesta página.
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground text-center">
              <Link to="/politica-privacidade" className="text-primary hover:underline">
                Ver Política de Privacidade
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermosUso;
