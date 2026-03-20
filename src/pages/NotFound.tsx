import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from '@/components/SEO';
import { Home, BookOpen, HelpCircle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Página Não Encontrada | TriMundo"
        description="A página que procuras não existe. Volta à página inicial do TriMundo para explorar trigonometria."
      />
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-3">Página Não Encontrada</h2>
          <p className="text-lg text-muted-foreground mb-8">
            A página que procuras não existe ou foi movida. Mas não te preocupes — há muito para explorar no TriMundo!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Home className="w-4 h-4" />
              Voltar ao Início
            </Link>
            <Link 
              to="/conceitos" 
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-background text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors border border-border"
            >
              <BookOpen className="w-4 h-4" />
              Ver Conceitos
            </Link>
            <Link 
              to="/contacto" 
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-background text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors border border-border"
            >
              <HelpCircle className="w-4 h-4" />
              Contacto
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            Se acreditas que isto é um erro, por favor{' '}
            <Link to="/contacto" className="text-primary hover:underline">
              contacta-nos
            </Link>.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
