import { useMemo, useState } from "react";
import { Search, BookOpen } from "lucide-react";
import SEO from "@/components/SEO";
import { glossary, GlossaryTerm } from "@/data/glossario";

const categories: GlossaryTerm["category"][] = [
  "Fundamentos",
  "Funções",
  "Identidades",
  "Ângulos",
  "Limites",
  "Geometria",
  "Aplicações",
];

const Glossario = () => {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return glossary
      .filter((t) => (activeCat ? t.category === activeCat : true))
      .filter(
        (t) =>
          !q ||
          t.term.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q)
      )
      .sort((a, b) => a.term.localeCompare(b.term, "pt"));
  }, [query, activeCat]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glossário de Trigonometria TriMundo",
    description:
      "Glossário em português com mais de 45 termos essenciais de trigonometria, geometria e análise matemática.",
    url: "https://trimundo.pt/glossario",
    hasDefinedTerm: glossary.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      inDefinedTermSet: "https://trimundo.pt/glossario",
    })),
  };

  return (
    <>
      <SEO
        title="Glossário de Trigonometria | TriMundo"
        description="Glossário completo de trigonometria em português: definições claras de seno, cosseno, tangente, identidades, limites e muito mais."
        keywords="glossário trigonometria, definições matemática, seno cosseno tangente, dicionário matemática português"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background pt-12 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <header className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              Glossário
            </div>
            <h1 className="heading-xl mb-4">
              Glossário de <span className="text-gradient">Trigonometria</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Mais de 45 termos essenciais explicados em português claro, com
              exemplos práticos. Pesquisa, filtra por categoria e consulta
              sempre que precisares.
            </p>
          </header>

          <div className="mb-8 space-y-4">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="search"
                placeholder="Pesquisar termo (ex: seno, hipotenusa, radiano)..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                aria-label="Pesquisar no glossário"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveCat(null)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCat === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                Todas
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeCat === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="text-sm text-muted-foreground mb-4 text-center">
            {filtered.length} {filtered.length === 1 ? "termo" : "termos"} encontrados
          </div>

          <dl className="grid gap-4 md:grid-cols-2">
            {filtered.map((t) => (
              <div
                key={t.term}
                className="p-5 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <dt className="font-bold text-lg text-foreground">
                    {t.term}
                  </dt>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md font-medium whitespace-nowrap">
                    {t.category}
                  </span>
                </div>
                <dd className="text-foreground/85 leading-relaxed mb-2">
                  {t.definition}
                </dd>
                {t.example && (
                  <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                    Exemplo: {t.example}
                  </p>
                )}
              </div>
            ))}
          </dl>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              Nenhum termo encontrado. Tenta outra pesquisa.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Glossario;
