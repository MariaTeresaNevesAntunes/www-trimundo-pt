import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  structuredData 
}: SEOProps) => {
  const fullTitle = `TriMundo | ${title}`;
  const currentUrl = canonical || window.location.href;

  return (
    <Helmet>
      {/* Title */}
      <title>{fullTitle}</title>
      
      {/* Meta Tags */}
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
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
