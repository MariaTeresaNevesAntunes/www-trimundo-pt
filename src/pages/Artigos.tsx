import { Link } from "react-router-dom";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { articles } from "@/data/articles";

const Artigos = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Artigos TriMundo",
    description:
      "Artigos aprofundados sobre trigonometria aplicada ao mundo real: arquitetura, música, GPS, videojogos e muito mais.",
    url: "https://trimundo.pt/artigos",
    publisher: {
      "@type": "Organization",
      name: "TriMundo",
      url: "https://trimundo.pt",
    },
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      description: a.description,
      author: { "@type": "Person", name: a.author },
      datePublished: a.publishedAt,
      dateModified: a.updatedAt,
      url: `https://trimundo.pt/artigos/${a.slug}`,
    })),
  };

  return (
    <>
      <SEO
        title="Artigos | TriMundo"
        description="Explora artigos aprofundados sobre trigonometria aplicada: arquitetura, música, GPS, videojogos e outras aplicações reais da matemática."
        keywords="artigos trigonometria, matemática aplicada, trigonometria no mundo real, blog matemática"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background pt-12 pb-20">
        <div className="container mx-auto px-4">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              Artigos & Recursos
            </div>
            <h1 className="heading-xl mb-4">
              Trigonometria <span className="text-gradient">no Mundo Real</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Conteúdo original em português para perceberes como o seno, o
              cosseno e a tangente moldam a tecnologia, a arte e a engenharia
              que te rodeiam todos os dias.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {articles.map((a) => (
              <Link
                key={a.slug}
                to={`/artigos/${a.slug}`}
                className="math-card group flex flex-col h-full bg-card border border-border hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">
                    {a.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {a.readingMinutes} min de leitura
                  </span>
                </div>
                <h2 className="heading-md mb-3 group-hover:text-primary transition-colors">
                  {a.title}
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {a.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Por {a.author} ·{" "}
                    {new Date(a.publishedAt).toLocaleDateString("pt-PT", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                    Ler <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Artigos;
