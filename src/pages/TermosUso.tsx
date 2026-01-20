import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Copyright, Shield, FileText, Scale, AlertTriangle, RefreshCw, Mail } from 'lucide-react';

const TermosUso = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Termos de Uso e Direitos de Autor - TriMundo",
    "description": "Termos de uso, direitos de autor e propriedade intelectual do site educativo TriMundo"
  };

  return (
    <>
      <SEO
        title="Termos de Uso e Direitos de Autor"
        description="Termos de uso, direitos de autor e propriedade intelectual do site educativo TriMundo sobre trigonometria."
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Termos de Uso e Direitos de Autor
            </h1>
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-PT')}
            </p>
          </div>

          {/* Termos de Uso */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Termos de Uso</h2>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">1</span>
                  Aceitação dos Termos
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ao aceder e utilizar o site TriMundo, você concorda em cumprir e ficar vinculado a estes Termos de Uso. 
                  Se não concordar com qualquer parte destes termos, não deve utilizar o site.
                </p>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">2</span>
                  Finalidade do Site
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  O TriMundo é um projeto educativo dedicado ao ensino de trigonometria. O site oferece conteúdo teórico, 
                  exercícios práticos, aplicações do mundo real e recursos educacionais gratuitos para estudantes e entusiastas da matemática.
                </p>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">3</span>
                  Uso Permitido
                </h3>
                <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                  <li>Aceder ao conteúdo para fins educacionais pessoais</li>
                  <li>Partilhar links do site para fins educativos</li>
                  <li>Utilizar o conhecimento adquirido em contextos académicos</li>
                  <li>Referenciar o site em trabalhos escolares com devida citação</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">4</span>
                  Uso Proibido
                </h3>
                <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                  <li>Copiar, reproduzir ou distribuir conteúdo sem autorização</li>
                  <li>Utilizar o conteúdo para fins comerciais sem permissão</li>
                  <li>Modificar ou criar obras derivadas do conteúdo original</li>
                  <li>Remover avisos de direitos de autor ou atribuições</li>
                  <li>Utilizar técnicas de scraping ou extração automatizada de dados</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Direitos de Autor */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Copyright className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Direitos de Autor</h2>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Propriedade Intelectual</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Todo o conteúdo presente no site TriMundo, incluindo mas não limitado a textos, gráficos, logótipos, 
                  ícones, imagens, clips de áudio, downloads digitais, compilações de dados e software, é propriedade 
                  do TriMundo ou dos seus criadores de conteúdo e está protegido por leis internacionais de direitos de autor.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Shield className="w-5 h-5" />
                  <span>© {new Date().getFullYear()} TriMundo - Todos os direitos reservados</span>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Conteúdo Original</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Todo o conteúdo educativo, incluindo explicações matemáticas, exercícios, diagramas e ilustrações, 
                  foi criado originalmente pela equipa do TriMundo. Qualquer semelhança com outros materiais educativos 
                  é coincidência ou resulta da natureza universal dos conceitos matemáticos.
                </p>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Licença de Uso Educativo</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  É concedida uma licença limitada, não exclusiva e intransferível para:
                </p>
                <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                  <li>Visualizar e imprimir páginas para uso pessoal e educacional</li>
                  <li>Partilhar conteúdo em contexto de sala de aula com atribuição ao TriMundo</li>
                  <li>Citar pequenos excertos com devida referência à fonte</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Violação de Direitos de Autor</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Qualquer uso não autorizado do conteúdo pode resultar em ação legal. Se acredita que o seu trabalho 
                  foi copiado de forma que constitua violação de direitos de autor, entre em contacto connosco com os 
                  detalhes da alegada violação.
                </p>
              </div>
            </div>
          </section>

          {/* Responsabilidade */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Limitação de Responsabilidade</h2>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Isenção de Garantias</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      O conteúdo do TriMundo é fornecido "tal como está", sem garantias de qualquer tipo, expressas ou 
                      implícitas. Não garantimos que o site esteja livre de erros ou que o acesso seja ininterrupto. 
                      Embora nos esforcemos para manter a precisão matemática, erros podem ocorrer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Uso do Conteúdo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  O TriMundo não se responsabiliza por qualquer decisão ou ação tomada com base no conteúdo do site. 
                  O material é fornecido apenas para fins educacionais e não substitui orientação académica profissional.
                </p>
              </div>
            </div>
          </section>

          {/* Modificações */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Modificações</h2>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes Termos de Uso e as políticas de Direitos de Autor a qualquer 
                momento, sem aviso prévio. As alterações entram em vigor imediatamente após a publicação no site. 
                O uso continuado do site após tais alterações constitui aceitação dos novos termos.
              </p>
            </div>
          </section>

          {/* Contacto */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Contacto</h2>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground leading-relaxed">
                Para questões relacionadas com direitos de autor, pedidos de autorização de uso ou qualquer outra 
                questão legal, entre em contacto através do site.
              </p>
            </div>
          </section>

          {/* Links */}
          <div className="p-6 bg-muted/30 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground text-center mb-4">
              Ao utilizar este site, concorda com os termos aqui apresentados.
            </p>
            <p className="text-sm text-center">
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
