import SEO from '@/components/SEO';
import { Mail } from 'lucide-react';

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
        title="Contacto"
        description="Tem dúvidas, sugestões ou precisa de apoio? Entre em contacto connosco através do email contacto@trimundo.pt."
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Contacto
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tem dúvidas, sugestões ou precisa de apoio?
            </p>
          </div>

          <div className="max-w-md mx-auto text-center space-y-6">
            <p className="text-muted-foreground text-lg">
              Entre em contacto connosco através do email:
            </p>

            <a
              href="mailto:contacto@trimundo.pt"
              className="inline-flex items-center gap-3 px-6 py-4 bg-primary/10 border border-primary/20 rounded-xl text-primary font-semibold text-lg hover:bg-primary/20 transition-colors"
            >
              <Mail className="w-6 h-6" />
              contacto@trimundo.pt
            </a>

            <p className="text-muted-foreground text-sm">
              Respondemos com a maior brevidade possível.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
