import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

const TermosUso = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Termos e Condições - TriMundo",
    "description": "Termos e condições de utilização do site trimundo.pt",
    "dateModified": "2025-03-20"
  };

  return (
    <>
      <SEO
        title="Termos e Condições | TriMundo"
        description="Termos e condições de utilização do site trimundo.pt. Ao utilizar o website, o utilizador concorda com os presentes termos."
        canonical="https://trimundo.pt/termos-uso"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Termos e Condições
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ao utilizar o website trimundo.pt, o utilizador concorda com os presentes Termos e Condições. Pedimos que leia atentamente antes de continuar a navegar.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última atualização: 20 de março de 2025
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Identificação do Site</h2>
              <p className="text-muted-foreground leading-relaxed">
                O website <strong>trimundo.pt</strong> é um projeto educativo, propriedade de Maria Teresa, sediado em Portugal. O site tem como missão disponibilizar conteúdos educativos de trigonometria e matemática de forma gratuita e acessível a todos os estudantes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Objetivo e Âmbito do Site</h2>
              <p className="text-muted-foreground leading-relaxed">
                O trimundo.pt disponibiliza conteúdos educativos originais, incluindo explicações teóricas, exercícios interativos, flash cards, tabelas de valores e recursos de apoio ao estudo de trigonometria. Todo o conteúdo é criado com rigor pedagógico e destina-se a uso pessoal e educativo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo presente no site — incluindo textos, explicações, exercícios, imagens, design, logótipo e código — é propriedade intelectual do trimundo.pt, salvo indicação expressa em contrário. Não é permitida a reprodução, distribuição ou utilização comercial sem autorização prévia por escrito. A utilização para fins académicos pessoais é permitida, desde que devidamente atribuída.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Utilização Permitida</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                O utilizador compromete-se a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Utilizar o site apenas para fins legais e educativos.</li>
                <li>Não tentar comprometer a segurança, integridade ou disponibilidade do site.</li>
                <li>Não reproduzir ou distribuir conteúdo do site sem autorização.</li>
                <li>Não utilizar mecanismos automatizados para recolher dados do site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Publicidade e Anúncios</h2>
              <p className="text-muted-foreground leading-relaxed">
                O trimundo.pt exibe anúncios fornecidos pelo Google AdSense. Estes anúncios são geridos por terceiros e podem utilizar cookies para apresentar conteúdo publicitário relevante. O TriMundo não controla o conteúdo dos anúncios apresentados pelo Google. Para mais informações sobre cookies e publicidade, consulte a nossa <Link to="/politica-privacidade" className="text-primary hover:underline">Política de Privacidade</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Ligações Externas e Afiliados</h2>
              <p className="text-muted-foreground leading-relaxed">
                O site pode conter ligações para websites de terceiros e links de afiliados. As compras realizadas através desses links podem gerar comissões para o trimundo.pt, sem qualquer custo adicional para o utilizador. O TriMundo não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas de websites externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Isenção de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                Embora nos esforcemos por garantir a exatidão e qualidade dos conteúdos, o trimundo.pt é disponibilizado "tal como está", sem garantias de qualquer tipo. O conteúdo educativo não substitui o acompanhamento de um professor ou profissional de educação. O utilizador assume total responsabilidade pela utilização das informações do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Disponibilidade do Serviço</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fazemos o possível para manter o site acessível e funcional, mas não garantimos disponibilidade ininterrupta. O serviço pode ser temporariamente indisponível devido a manutenção, atualizações ou fatores fora do nosso controlo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Lei Aplicável</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos e Condições são regidos pela legislação portuguesa. Qualquer litígio será submetido à jurisdição dos tribunais competentes em Portugal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">10. Alterações aos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de atualizar estes Termos e Condições a qualquer momento. A versão mais recente estará sempre disponível nesta página, com a data de atualização indicada no topo. A continuação da utilização do site após alterações constitui aceitação dos novos termos.
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground text-center">
              Consulte também a nossa{' '}
              <Link to="/politica-privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </Link>
              {' '}e a{' '}
              <Link to="/contacto" className="text-primary hover:underline">
                página de Contacto
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermosUso;
