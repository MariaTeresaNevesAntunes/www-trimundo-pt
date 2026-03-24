import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const COOKIE_CONSENT_KEY = 'trimundo_cookie_consent';

type ConsentValue = 'accepted' | 'rejected';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: ConsentValue) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setVisible(false);

    if (value === 'rejected') {
      // Disable AdSense personalization
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.requestNonPersonalizedAds = 1;
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-5 md:p-6">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0 mt-0.5">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 space-y-3">
            <h3 className="font-semibold text-foreground text-sm md:text-base">
              🍪 Este site utiliza cookies
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              Utilizamos cookies próprios e de terceiros (incluindo Google AdSense) para melhorar a tua experiência, 
              analisar o tráfego e mostrar anúncios relevantes. Ao aceitar, consentes o uso de cookies conforme a nossa{' '}
              <Link to="/politica-privacidade" className="text-primary underline hover:text-primary-foreground">
                Política de Privacidade
              </Link>.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Button
                onClick={() => handleConsent('accepted')}
                size="sm"
                className="text-xs md:text-sm"
              >
                Aceitar todos
              </Button>
              <Button
                onClick={() => handleConsent('rejected')}
                variant="outline"
                size="sm"
                className="text-xs md:text-sm"
              >
                Apenas essenciais
              </Button>
            </div>
          </div>
          <button
            onClick={() => handleConsent('rejected')}
            className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
