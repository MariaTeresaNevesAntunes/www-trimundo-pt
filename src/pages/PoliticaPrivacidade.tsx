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
              <h3 className="text-xl font-semibold mb-3 text-foreground">1. Informações que Coletamos</h3>
              <p className="text-muted-foreground leading-relaxed">
                O Tri Mundo é um site educacional sobre trigonometria. Não coletamos informações pessoais dos utilizadores. 
                Este site é puramente informativo e não requer registo ou autenticação.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">2. Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Podemos utilizar cookies essenciais para melhorar a experiência de navegação, como preferências de tema 
                (modo claro/escuro). Estes cookies não coletam informações pessoais identificáveis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">3. Partilha de Informações</h3>
              <p className="text-muted-foreground leading-relaxed">
                Não partilhamos, vendemos ou transferimos informações pessoais a terceiros, pois não as coletamos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">4. Segurança</h3>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de segurança adequadas para proteger o nosso site e garantir a melhor experiência possível aos utilizadores.
              </p>
            </div>
          </div>
        </section>

        {/* Termos de Uso */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Termos de Uso</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">1. Propriedade Intelectual</h3>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo presente neste site, incluindo textos, gráficos, ilustrações e design, é original e 
                devidamente licenciado. É protegido por direitos de autor e outras leis de propriedade intelectual.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">2. Uso Permitido</h3>
              <p className="text-muted-foreground leading-relaxed">
                O conteúdo deste site destina-se exclusivamente a fins educacionais. Os utilizadores podem:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-muted-foreground ml-4">
                <li>Consultar o conteúdo para estudo pessoal</li>
                <li>Partilhar links para as páginas do site</li>
                <li>Utilizar o material em contexto educacional com atribuição adequada</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">3. Uso Proibido</h3>
              <p className="text-muted-foreground leading-relaxed">
                É expressamente proibido:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-muted-foreground ml-4">
                <li>Copiar, reproduzir ou distribuir o conteúdo sem autorização</li>
                <li>Utilizar o conteúdo para fins comerciais</li>
                <li>Modificar ou criar obras derivadas sem permissão</li>
                <li>Remover avisos de direitos de autor ou outras marcas proprietárias</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">4. Isenção de Responsabilidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Embora nos esforcemos para garantir a precisão do conteúdo, o site é fornecido "como está". 
                Não garantimos que o conteúdo esteja sempre completo, correto ou atualizado.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">5. Alterações aos Termos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor 
                imediatamente após a publicação no site.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">6. Contacto</h3>
              <p className="text-muted-foreground leading-relaxed">
                Para questões sobre esta política ou termos de uso, utilize os canais de contacto disponíveis no site.
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