import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

const PoliticaPrivacidade = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Política de Privacidade - TriMundo",
    "description": "Política de privacidade do site trimundo.pt",
    "dateModified": "2025-03-20"
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
            <p className="text-sm text-muted-foreground mt-4">
              Última atualização: 20 de março de 2025
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Responsável pelo Tratamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                O responsável pelo tratamento dos dados pessoais recolhidos através do website trimundo.pt é o TriMundo, com sede em Portugal. Para qualquer questão relacionada com a proteção de dados, pode contactar-nos através do email <a href="mailto:contacto@trimundo.pt" className="text-primary hover:underline">contacto@trimundo.pt</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Dados Pessoais Recolhidos</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Podemos recolher os seguintes tipos de informação:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Dados fornecidos voluntariamente:</strong> nome e endereço de email, quando o utilizador nos contacta através do formulário ou email.</li>
                <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e data/hora de acesso, recolhidos automaticamente através de cookies e tecnologias similares.</li>
                <li><strong>Dados de cookies de terceiros:</strong> informações recolhidas pelo Google AdSense e Google Analytics para fins de publicidade e análise estatística.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Finalidade e Base Legal do Tratamento</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Os dados recolhidos são utilizados para as seguintes finalidades:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Responder a pedidos de contacto</strong> — base legal: consentimento do titular (art. 6.º, n.º 1, al. a) do RGPD).</li>
                <li><strong>Melhorar o conteúdo e funcionamento do site</strong> — base legal: interesse legítimo (art. 6.º, n.º 1, al. f) do RGPD).</li>
                <li><strong>Analisar estatísticas de utilização</strong> — base legal: interesse legítimo.</li>
                <li><strong>Exibir anúncios personalizados</strong> através do Google AdSense — base legal: consentimento do titular.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Cookies e Tecnologias de Publicidade</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                O trimundo.pt utiliza cookies, incluindo cookies de terceiros, para os seguintes fins:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site.</li>
                <li><strong>Cookies analíticos:</strong> utilizados para compreender como os visitantes interagem com o site (ex.: Google Analytics).</li>
                <li><strong>Cookies de publicidade:</strong> utilizados pelo Google AdSense para apresentar anúncios relevantes com base nos seus interesses e histórico de navegação.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                O utilizador pode gerir, desativar ou eliminar cookies nas definições do seu navegador. Para mais informações sobre os cookies do Google, visite <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">policies.google.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Partilha de Dados com Terceiros</h2>
              <p className="text-muted-foreground leading-relaxed">
                Não vendemos nem partilhamos dados pessoais com terceiros, exceto quando necessário para os serviços descritos nesta política:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-3">
                <li><strong>Google AdSense:</strong> para exibição de anúncios personalizados.</li>
                <li><strong>Google Analytics:</strong> para análise de tráfego e comportamento de navegação.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Estes terceiros estão sujeitos às suas próprias políticas de privacidade e cumprem com o RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Período de Conservação dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Os dados pessoais são conservados apenas durante o tempo necessário para as finalidades para as quais foram recolhidos. Os dados de contacto são eliminados após resolução do pedido. Os dados de navegação e cookies são conservados conforme as políticas dos respetivos fornecedores (Google).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Segurança dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra acesso não autorizado, perda, destruição ou alteração. O site utiliza ligação segura (HTTPS) para proteger a comunicação entre o seu navegador e os nossos servidores.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Direitos do Utilizador (RGPD)</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD), o utilizador tem os seguintes direitos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Direito de acesso:</strong> solicitar informação sobre os dados pessoais que tratamos.</li>
                <li><strong>Direito de retificação:</strong> solicitar a correção de dados inexatos ou incompletos.</li>
                <li><strong>Direito de apagamento:</strong> solicitar a eliminação dos seus dados pessoais.</li>
                <li><strong>Direito à limitação do tratamento:</strong> solicitar a restrição do tratamento dos seus dados.</li>
                <li><strong>Direito de portabilidade:</strong> receber os seus dados em formato estruturado e de leitura automática.</li>
                <li><strong>Direito de oposição:</strong> opor-se ao tratamento dos seus dados para determinadas finalidades.</li>
                <li><strong>Direito de retirar o consentimento:</strong> retirar o consentimento a qualquer momento, sem comprometer a licitude do tratamento efetuado com base no consentimento prévio.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Para exercer qualquer um destes direitos, contacte-nos através de <a href="mailto:contacto@trimundo.pt" className="text-primary hover:underline">contacto@trimundo.pt</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Direito de Reclamação</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se considerar que o tratamento dos seus dados pessoais viola o RGPD, tem o direito de apresentar uma reclamação junto da autoridade de controlo competente em Portugal — a <strong>Comissão Nacional de Proteção de Dados (CNPD)</strong> — através do site <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnpd.pt</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">10. Menores de Idade</h2>
              <p className="text-muted-foreground leading-relaxed">
                O trimundo.pt é um site educativo destinado a estudantes de todas as idades. Não recolhemos intencionalmente dados pessoais de menores de 16 anos sem o consentimento dos respetivos pais ou responsáveis legais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">11. Alterações a esta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Privacidade ocasionalmente para refletir alterações nas nossas práticas ou na legislação aplicável. A versão mais recente estará sempre disponível nesta página com a data de atualização indicada no topo.
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground text-center">
              Se tiver dúvidas sobre esta política, contacte-nos através de{' '}
              <a href="mailto:contacto@trimundo.pt" className="text-primary hover:underline">contacto@trimundo.pt</a>
              {' '}ou visite a nossa{' '}
              <Link to="/contacto" className="text-primary hover:underline">página de Contacto</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliticaPrivacidade;
