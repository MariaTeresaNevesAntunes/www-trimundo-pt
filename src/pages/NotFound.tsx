import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from '@/components/SEO';

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
        title="MTNA-TriMundo-Página Não Encontrada"
        description="A página que procuras não existe. Volta à página inicial do TriMundo para explorar trigonometria."
      />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-6">Página não encontrada</p>
          <Link to="/" className="text-primary hover:text-primary/80 underline text-lg">
            Voltar ao Início
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
