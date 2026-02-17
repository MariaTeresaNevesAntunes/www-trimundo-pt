import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TriMundo. O conteúdo deste site é original e devidamente licenciado.
          </p>
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              to="/sobre" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre Nós
            </Link>
            <span className="text-border">|</span>
            <Link 
              to="/termos-uso" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Uso
            </Link>
            <span className="text-border">|</span>
            <Link 
              to="/politica-privacidade" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </Link>
            <span className="text-border">|</span>
            <Link 
              to="/contacto" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
