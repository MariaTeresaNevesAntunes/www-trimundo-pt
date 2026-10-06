export const COOKIE_CONSENT_KEY = "trimundo_cookie_consent";
export const COOKIE_CONSENT_EVENT = "trimundo:cookie-consent-changed";
export const COOKIE_SETTINGS_EVENT = "trimundo:open-cookie-settings";

type ConsentValue = "accepted" | "rejected";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export const getCookieConsent = (): ConsentValue | null => {
  if (typeof window === "undefined") return null;

  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
};

export const requestAd = () => {
  if (typeof window === "undefined" || getCookieConsent() !== "accepted")
    return;

  window.adsbygoogle = window.adsbygoogle || [];

  if (!document.querySelector("script[data-trimundo-adsense]")) {
    const script = document.createElement("script");
    script.async = true;
    script.crossOrigin = "anonymous";
    script.dataset.trimundoAdsense = "true";
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8664195567929159";
    document.head.appendChild(script);
  }

  window.adsbygoogle.push({});
};
