import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>© {new Date().getFullYear()} Tri Mundo. O conteúdo deste site é original e devidamente licenciado.</p>
          <Link 
            to="/politica-privacidade" 
            className="inline-block hover:text-foreground transition-colors underline"
          >
            Política de Privacidade e Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
