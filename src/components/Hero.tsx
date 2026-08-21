import { ArrowDown, Play, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="heading-xl text-white mb-6 animate-slide-up">
            Descobre a{' '}
            <span className="text-accent-light font-extrabold">
              Trigonometria
            </span>{' '}
            no Mundo Real
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            A trigonometria não é só ângulos e senos — é a linguagem escondida 
            por trás do mundo que vemos. Da arquitetura à música, da navegação à programação.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/conceitos"
              className="btn-primary bg-white text-primary hover:bg-white/90 hover:text-primary-dark inline-flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Começar a Aprender
            </Link>
            <Link
              to="/historia"
              className="btn-secondary bg-white/20 text-white border border-white/30 hover:bg-white/30 inline-flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Ver História
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-light mb-2">3000+</div>
              <div className="text-white/80">Anos de História</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-light mb-2">∞</div>
              <div className="text-white/80">Aplicações Reais</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-light mb-2">π</div>
              <div className="text-white/80">Constantes Fascinantes</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;