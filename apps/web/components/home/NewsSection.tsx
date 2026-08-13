// apps/web/components/home/NewsSection.tsx
import Link from "next/link";
import { ArrowRight, Calendar, Newspaper } from "lucide-react";

const articles = [
  {
    title: "Lancement officiel du nouveau pôle logistique régional",
    category: "Communiqué",
    date: "10 Août 2026",
    excerpt: "Zaras Global Business déploie une infrastructure transfrontalière moderne pour fluidifier les flux commerciaux et renforcer les échanges en Afrique centrale.",
    href: "/actualites/nouveau-pole-logistique",
  },
  {
    title: "Partenariat stratégique pour l'essor agro-industriel",
    category: "Investissement",
    date: "28 Juillet 2026",
    excerpt: "Signature d'accords majeurs visant à accroître la production locale, la sécurité alimentaire et l'autonomie des chaînes de valeur.",
    href: "/actualites/partenariat-agro-industriel",
  },
  {
    title: "Engagement durable et normes environnementales",
    category: "Développement",
    date: "14 Juillet 2026",
    excerpt: "Le groupe réaffirme son ambition de concilier performance économique rigoureuse et impact sociétal positif à travers l'ensemble de ses projets.",
    href: "/actualites/engagement-durable",
  },
];

export default function NewsSection() {
  return (
    <section className="py-24 bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#f8f2e5] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#a77b24]">
              <Newspaper size={14} />
              Actualités & Médias
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#07111f]">
              Dernières Actualités du Groupe
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Suivez les évolutions, les annonces officielles et les temps forts qui marquent la trajectoire de ZARAS GLOBAL BUSINESS.
            </p>
          </div>

          <div>
            <Link
              href="/actualites"
              className="inline-flex items-center gap-2 rounded-xl bg-[#07111f] px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#10243b] transition duration-300"
            >
              <span>Toutes nos actualités</span>
              <ArrowRight size={16} className="text-[#d8b45b]" />
            </Link>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group relative rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#d8b45b]/50 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Top meta tags */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#f8f2e5] text-[#a77b24]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Calendar size={14} className="text-[#a77b24]" />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Title & Excerpt */}
                <div className="space-y-3">
                  <h3 className="text-xl font-black text-[#07111f] group-hover:text-[#a77b24] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="pt-8 mt-6 border-t border-slate-100">
                <Link
                  href={article.href}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#07111f] group-hover:text-[#a77b24] transition-colors"
                >
                  <span>Lire l'article</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}