import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import SEO from "@/components/SEO";
import { articles } from "@/data/articles";

const ArtigoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/artigos" replace />;

  const url = `https://trimundo.pt/artigos/${article.slug}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      author: { "@type": "Person", name: article.author },
      publisher: {
        "@type": "Organization",
        name: "TriMundo",
        url: "https://trimundo.pt",
      },
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      mainEntityOfPage: url,
      url,
      inLanguage: "pt-PT",
      keywords: article.keywords,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://trimundo.pt/" },
        { "@type": "ListItem", position: 2, name: "Artigos", item: "https://trimundo.pt/artigos" },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={`${article.title} | TriMundo`}
        description={article.description}
        canonical={url}
        keywords={article.keywords}
        structuredData={structuredData}
      />

      <article className="min-h-screen bg-background pt-10 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/artigos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar aos artigos
          </Link>

          <header className="mb-10 pb-8 border-b border-border">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-md font-medium text-sm mb-4">
              {article.category}
            </div>
            <h1 className="heading-xl mb-4">{article.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {article.description}
            </p>
            <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Publicado a{" "}
                {new Date(article.publishedAt).toLocaleDateString("pt-PT", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {article.readingMinutes} min
              </span>
            </div>
          </header>

          <div className="prose-content space-y-5 mb-12">
            {article.intro.map((p, i) => (
              <p key={i} className="text-foreground/90 leading-relaxed text-lg">
                {p}
              </p>
            ))}
          </div>

          {article.sections.map((s, i) => (
            <section key={i} className="mb-10">
              <h2 className="heading-md mb-4 text-primary">{s.heading}</h2>
              <div className="space-y-4">
                {s.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-foreground/85 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="mb-12 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
            <h2 className="heading-sm mb-3">Em resumo</h2>
            <div className="space-y-3">
              {article.conclusion.map((p, i) => (
                <p key={i} className="text-foreground/85 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="heading-md mb-5">Perguntas frequentes</h2>
            <div className="space-y-4">
              {article.faq.map((f, i) => (
                <div
                  key={i}
                  className="p-5 bg-card border border-border rounded-lg"
                >
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <footer className="pt-8 border-t border-border text-sm text-muted-foreground">
            <p>
              Última atualização:{" "}
              {new Date(article.updatedAt).toLocaleDateString("pt-PT", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
              . Conteúdo original e exclusivo do TriMundo.
            </p>
          </footer>
        </div>
      </article>
    </>
  );
};

export default ArtigoDetalhe;
