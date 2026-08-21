import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Mail, Clock, MessageSquare, BookOpen, HelpCircle } from 'lucide-react';

const Contacto = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto - TriMundo",
    "description": "Entre em contacto com a equipa do trimundo.pt"
  };

  return (
    <>
      <SEO
        title="Contacto | TriMundo"
        description="Tem dúvidas, sugestões ou precisa de apoio? Entre em contacto connosco através do email contacto@trimundo.pt."
        canonical="https://trimundo.pt/contacto"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Contacto
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tem dúvidas, sugestões ou precisa de apoio? Estamos aqui para ajudar.
            </p>
          </div>

          {/* Email principal */}
          <div className="max-w-lg mx-auto text-center mb-16">
            <div className="p-8 bg-primary/5 rounded-2xl border border-primary/10">
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-xl font-bold text-foreground mb-2">Envie-nos um Email</h2>
              <p className="text-muted-foreground mb-6">
                A forma mais rápida de nos contactar é através do email. Respondemos com a maior brevidade possível.
              </p>
              <a
                href="mailto:contacto@trimundo.pt"
                className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                contacto@trimundo.pt
              </a>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-muted/30 rounded-xl border border-border text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Tempo de Resposta</h3>
              <p className="text-sm text-muted-foreground">
                Procuramos responder a todos os emails no prazo de 48 horas úteis.
              </p>
            </div>
            <div className="p-6 bg-muted/30 rounded-xl border border-border text-center">
              <MessageSquare className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Sugestões</h3>
              <p className="text-sm text-muted-foreground">
                Tem ideias para melhorar o site ou novos conteúdos? Queremos ouvir a sua opinião.
              </p>
            </div>
            <div className="p-6 bg-muted/30 rounded-xl border border-border text-center">
              <HelpCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Dúvidas</h3>
              <p className="text-sm text-muted-foreground">
                Se tiver dúvidas sobre o conteúdo ou funcionamento do site, não hesite em perguntar.
              </p>
            </div>
          </div>

          {/* FAQ rápido */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              <div className="p-5 bg-muted/20 rounded-xl border border-border">
                <h3 className="font-bold text-foreground mb-2">O conteúdo do TriMundo é gratuito?</h3>
                <p className="text-muted-foreground text-sm">
                  Sim, todo o conteúdo educativo do TriMundo é totalmente gratuito e acessível a qualquer pessoa, sem necessidade de registo.
                </p>
              </div>
              <div className="p-5 bg-muted/20 rounded-xl border border-border">
                <h3 className="font-bold text-foreground mb-2">Posso sugerir novos temas ou exercícios?</h3>
                <p className="text-muted-foreground text-sm">
                  Claro! Envie-nos um email com as suas sugestões para contacto@trimundo.pt. Valorizamos muito o feedback dos nossos utilizadores.
                </p>
              </div>
              <div className="p-5 bg-muted/20 rounded-xl border border-border">
                <h3 className="font-bold text-foreground mb-2">Posso usar o conteúdo para fins escolares?</h3>
                <p className="text-muted-foreground text-sm">
                  Sim, o conteúdo pode ser utilizado para estudo pessoal e fins académicos. Para utilização comercial ou reprodução, contacte-nos primeiro. Consulte os nossos{' '}
                  <Link to="/termos-uso" className="text-primary hover:underline">Termos e Condições</Link> para mais informações.
                </p>
              </div>
              <div className="p-5 bg-muted/20 rounded-xl border border-border">
                <h3 className="font-bold text-foreground mb-2">Encontrei um erro no conteúdo. Como posso reportá-lo?</h3>
                <p className="text-muted-foreground text-sm">
                  Agradecemos muito a sua atenção! Envie-nos um email a indicar a página e o erro encontrado. Corrigiremos o mais rapidamente possível.
                </p>
              </div>
            </div>
          </div>

          {/* Links úteis */}
          <div className="text-center">
            <h2 className="text-xl font-bold text-foreground mb-4">Explore o TriMundo</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                to="/conceitos" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Conceitos
              </Link>
              <Link 
                to="/exercicios" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                Exercícios
              </Link>
              <Link 
                to="/sobre" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                Sobre Nós
              </Link>
              <Link 
                to="/politica-privacidade" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
