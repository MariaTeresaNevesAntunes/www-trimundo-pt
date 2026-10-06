import { useEffect, useRef, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent,
  requestAd,
} from "@/lib/adsense";

interface AdBannerProps {
  adSlot: string;
  adFormat?: "auto" | "fluid" | "rectangle" | "vertical" | "horizontal";
  fullWidth?: boolean;
  className?: string;
}

const AdBanner = ({
  adSlot,
  adFormat = "auto",
  fullWidth = true,
  className = "",
}: AdBannerProps) => {
  const adRef = useRef<HTMLModElement>(null);
  const isAdLoaded = useRef(false);
  const [hasConsent, setHasConsent] = useState(
    () => getCookieConsent() === "accepted",
  );

  useEffect(() => {
    const updateConsent = () =>
      setHasConsent(getCookieConsent() === "accepted");
    window.addEventListener(COOKIE_CONSENT_EVENT, updateConsent);
    return () =>
      window.removeEventListener(COOKIE_CONSENT_EVENT, updateConsent);
  }, []);

  useEffect(() => {
    if (!hasConsent || isAdLoaded.current) return;

    try {
      requestAd();
      isAdLoaded.current = true;
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, [hasConsent]);

  if (!hasConsent) return null;

  return (
    <div className={`ad-container my-6 ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          textAlign: "center",
        }}
        data-ad-client="ca-pub-8664195567929159"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidth ? "true" : "false"}
      />
      {/* Placeholder visual para desenvolvimento */}
      {import.meta.env.DEV && (
        <div className="bg-muted/50 border-2 border-dashed border-border rounded-lg p-4 text-center text-muted-foreground text-sm">
          <p className="font-medium">Espaço para Anúncio</p>
          <p className="text-xs">
            Slot: {adSlot} | Formato: {adFormat}
          </p>
        </div>
      )}
    </div>
  );
};

export default AdBanner;
