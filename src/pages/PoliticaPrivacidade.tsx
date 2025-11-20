const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Política de Privacidade e Termos de Uso
          </h1>
          <p className="text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-PT')}
          </p>
        </div>

        {/* Política de Privacidade */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Política de Privacidade</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">1. Informações Coletadas</h3>
              <p className="text-muted-foreground leading-relaxed">
                O site TriMundo não coleta dados pessoais diretamente dos usuários. No entanto, ferramentas de terceiros 
                como Google Analytics e Google AdSense podem coletar informações como localização, tipo de dispositivo, 
                tempo de navegação e páginas visitadas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">2. Uso de Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies para melhorar a experiência do usuário. Esses arquivos permitem lembrar preferências 
                e oferecer conteúdo mais relevante. O uso de cookies por terceiros, como o Google, pode incluir a exibição 
                de anúncios com base em visitas anteriores ao site.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">3. Compartilhamento de Dados</h3>
              <p className="text-muted-foreground leading-relaxed">
                Não compartilhamos dados pessoais com terceiros, exceto quando exigido por lei ou para o funcionamento 
                de serviços como anúncios e estatísticas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">4. Segurança</h3>
              <p className="text-muted-foreground leading-relaxed">
                Adotamos medidas para proteger a integridade do site e dos dados coletados por terceiros, mas não garantimos 
                segurança absoluta contra acessos não autorizados.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">5. Links Externos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nosso site pode conter links para outros sites. Não nos responsabilizamos pelas políticas de privacidade 
                desses sites externos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">6. Consentimento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ao utilizar o TriMundo, você concorda com esta política de privacidade.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">7. Atualizações</h3>
              <p className="text-muted-foreground leading-relaxed">
                Esta política pode ser atualizada sem aviso prévio. Recomendamos que o usuário a revise periodicamente.
              </p>
            </div>
          </div>
        </section>

        {/* Termos de Uso */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Termos de Uso</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">1. Finalidade do Site</h3>
              <p className="text-muted-foreground leading-relaxed">
                O TriMundo é um projeto educativo voltado para o ensino de trigonometria, oferecendo conteúdo teórico, 
                exercícios e aplicações práticas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">2. Propriedade Intelectual</h3>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo do site é protegido por direitos autorais. É proibida a reprodução sem autorização, 
                exceto quando indicado como conteúdo livre ou com atribuição.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">3. Responsabilidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                O site não se responsabiliza por interpretações erradas do conteúdo ou por decisões tomadas com base 
                nas informações apresentadas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">4. Modificações</h3>
              <p className="text-muted-foreground leading-relaxed">
                O conteúdo do site pode ser alterado, removido ou expandido a qualquer momento, sem aviso prévio.
              </p>
            </div>
          </div>
        </section>

        {/* Notice */}
        <div className="p-6 bg-muted/30 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground text-center">
            Ao utilizar este site, concorda com os termos aqui apresentados e com a nossa política de privacidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;