import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  structuredData?: object | object[];
}

const SITE_URL = 'https://trimundo.pt';
const SITE_NAME = 'TriMundo';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogImage = DEFAULT_OG_IMAGE,
  keywords,
  structuredData 
}: SEOProps) => {
  const currentUrl = canonical || `${SITE_URL}${window.location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="TriMundo" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_PT" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
