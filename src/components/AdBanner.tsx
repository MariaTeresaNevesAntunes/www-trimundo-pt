import { useEffect, useRef } from 'react';

interface AdBannerProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  fullWidth?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdBanner = ({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidth = true,
  className = '' 
}: AdBannerProps) => {
  const adRef = useRef<HTMLModElement>(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    if (isAdLoaded.current) return;
    
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
        isAdLoaded.current = true;
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`ad-container my-6 ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ 
          display: 'block',
          textAlign: 'center'
        }}
        data-ad-client="ca-pub-8664195567929159"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidth ? 'true' : 'false'}
      />
      {/* Placeholder visual para desenvolvimento */}
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-muted/50 border-2 border-dashed border-border rounded-lg p-4 text-center text-muted-foreground text-sm">
          <p className="font-medium">Espaço para Anúncio</p>
          <p className="text-xs">Slot: {adSlot} | Formato: {adFormat}</p>
        </div>
      )}
    </div>
  );
};

export default AdBanner;
