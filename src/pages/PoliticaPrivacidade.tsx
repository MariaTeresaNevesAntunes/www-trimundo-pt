import SEO from '@/components/SEO';

const PoliticaPrivacidade = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Política de Privacidade - TriMundo",
    "description": "Política de privacidade do site trimundo.pt"
  };

  return (
    <>
      <SEO
        title="Política de Privacidade | TriMundo"
        description="Política de privacidade do site trimundo.pt. Saiba como recolhemos, utilizamos e protegemos os seus dados pessoais."
        canonical="https://trimundo.pt/politica-privacidade"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Política de Privacidade
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A sua privacidade é importante para nós. Esta Política de Privacidade explica como recolhemos, utilizamos e protegemos os seus dados pessoais quando utiliza o website trimundo.pt.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Recolha de Informações</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos recolher informações fornecidas voluntariamente pelo utilizador, como nome e email, quando preenche formulários ou entra em contacto connosco. Também utilizamos cookies e tecnologias semelhantes para melhorar a experiência de navegação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Utilização dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Os dados recolhidos são utilizados para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Responder a pedidos de contacto</li>
                <li>Melhorar o conteúdo e funcionamento do site</li>
                <li>Analisar estatísticas de utilização</li>
                <li>Exibir anúncios personalizados através do Google AdSense</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Cookies e Tecnologias de Publicidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                O trimundo.pt utiliza cookies, incluindo cookies de terceiros, como o Google AdSense, para apresentar anúncios relevantes. O utilizador pode gerir ou desativar cookies no seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Partilha de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Não vendemos nem partilhamos dados pessoais com terceiros, exceto quando necessário para serviços como análise de tráfego ou publicidade (ex.: Google).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Segurança</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas técnicas e organizativas para proteger os seus dados contra acesso não autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Direitos do Utilizador</h2>
              <p className="text-muted-foreground leading-relaxed">
                O utilizador pode solicitar acesso, correção ou eliminação dos seus dados pessoais, contactando-nos através da página de Contacto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Alterações a esta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política ocasionalmente. A versão mais recente estará sempre disponível nesta página.
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground text-center">
              Se tiver dúvidas, contacte-nos através da página de Contacto.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliticaPrivacidade;
