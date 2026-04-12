import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calculator } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/historia', label: 'História' },
    { path: '/conceitos', label: 'Conceitos' },
    { path: '/funcoes-trigonometricas', label: 'Funções' },
    { path: '/angulos-notaveis', label: 'Ângulos Notáveis' },
    { path: '/identidades', label: 'Identidades' },
    { path: '/limites-trigonometricos', label: 'Limites' },
    { path: '/exercicios', label: 'Exercícios' },
    { path: '/aplicacoes', label: 'Aplicações' },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
              <Calculator className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl text-gradient">TriMundo</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Descobre a Trigonometria no Mundo Real</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-all duration-300 hover:text-primary relative ${
                  isActivePath(item.path)
                    ? 'text-primary after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full'
                    : 'text-muted-foreground hover:scale-105'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-slide-up">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 font-medium transition-all duration-300 rounded-lg mb-1 ${
                  isActivePath(item.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;