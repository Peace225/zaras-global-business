// apps/web/pages/actualites/[slug]/page.tsx
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Share2, ArrowRight, Newspaper, Building2 } from "lucide-react";

interface NewsDetailProps {
  params: {
    slug: string;
  };
}

// Données simulées pour alimenter les articles par leur slug
const newsData: Record<string, any> = {
  "lancement-hub-logistique": {
    title: "Lancement officiel des travaux du Hub Logistique Transfrontalier",
    category: "Projets & Infrastructures",
    date: "10 août 2026",
    author: "Direction de la Communication & des Relations Publiques",
    image: "https://images.unsplash.com/photo-1586528116493-a025325a1e37?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Zaras Global Business donne le coup d'envoi de l'aménagement de la plateforme logistique régionale visant à fluidifier les échanges commerciaux transfrontaliers.",
    content: [
      "Dans le cadre de sa stratégie d'expansion et de modernisation des infrastructures en Afrique de l'Ouest, Zaras Global Business a officiellement lancé ce lundi les travaux de construction de son nouveau Hub Logistique Transfrontalier.",
      "Situé à un carrefour stratégique, ce complexe moderne s'étendra sur plusieurs hectares et intègrera des entrepôts de haute sécurité, des zones de transit frigorifiques de dernière génération ainsi qu'un centre administratif douanier automatisé.",
      "« Ce projet d'envergure témoigne de notre engagement indéfectible à soutenir la fluidité des flux commerciaux et à renforcer la compétitivité logistique de la région », a souligné la direction générale lors de la cérémonie de pose de la première pierre.",
      "La mise en service de ce hub, prévue pour le second semestre de l'année prochaine, devrait générer des centaines d'emplois directs et indirects tout en stimulant l'activité économique locale et régionale.",
    ],
  },
  "partenariat-agro-industriel": {
    title: "Partenariat stratégique signé pour le développement agro-industriel",
    category: "Institutionnel",
    date: "28 juillet 2026",
    author: "Comité des Partenariats Stratégiques",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Signature d'une alliance majeure visant à renforcer les unités de transformation et de stockage des denrées alimentaires dans la région.",
    content: [
      "Zaras Global Business a scellé un partenariat stratégique d'envergure avec plusieurs acteurs majeurs du secteur agro-industriel pour accélérer la modernisation des chaînes de valeur agricoles.",
      "Cette alliance permettra de financer et d'implanter de nouvelles unités de transformation locale, réduisant ainsi considérablement les pertes post-récolte et garantissant des débouchés stables aux producteurs de la sous-région.",
      "L'accord prévoit également un transfert technologique et un accompagnement technique accru pour répondre aux normes internationales de qualité et de sécurité alimentaire.",
    ],
  },
};

export default function NewsDetailPage({ params }: NewsDetailProps) {
  // Récupération de l'article ou fallback par défaut si le slug n'existe pas dans le mock
  const article = newsData[params.slug] || {
    title: "Actualité officielle - Zaras Global Business",
    category: "Communiqué",
    date: "13 août 2026",
    author: "Service Presse",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Retrouvez les dernières informations et annonces officielles concernant les activités et les projets de développement du groupe.",
    content: [
      "Zaras Global Business continue de déployer sa vision stratégique à travers des investissements structurants et des partenariats d'excellence.",
      "Chaque initiative portée par le groupe répond à des critères stricts de performance économique, de durabilité environnementale et de création de valeur pour les communautés.",
      "Pour toute question relative à ce communiqué, notre service de communication reste à votre entière disposition.",
    ],
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top Navigation / Breadcrumb Header */}
      <div className="bg-[#07111f] text-white py-12 border-b border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d8b45b] hover:text-white transition"
          >
            <ArrowLeft size={16} />
            <span>Retour aux actualités</span>
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#d8b45b]/15 text-[#d8b45b] border border-[#d8b45b]/30">
                {article.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 font-semibold pt-2">
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-[#d8b45b]" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 size={15} className="text-[#d8b45b]" />
                <span>{article.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            
            {/* Featured Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 h-80 sm:h-[450px]">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Excerpt Lead */}
            <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-sm">
              <p className="text-lg font-bold text-[#07111f] leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* Article Body Paragraphs */}
            <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-sm space-y-6">
              {article.content.map((paragraph: string, idx: number) => (
                <p key={idx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Share & Tags footer inside article */}
              <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <Tag size={14} className="text-[#a77b24]" />
                  <span>Zaras Global Press Room</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-600">Partager :</span>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: article.title, url: window.location.href });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Lien copié dans le presse-papier !");
                      }
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#07111f] hover:text-[#d8b45b] text-slate-700 text-xs font-bold transition shadow-sm"
                  >
                    <Share2 size={14} />
                    <span>Partager l'article</span>
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="rounded-3xl bg-[#07111f] text-white p-8 sm:p-12 shadow-xl space-y-6 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[#d8b45b]/10 blur-2xl"></div>
              <div className="space-y-2 relative z-10 max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d8b45b]">Service Presse</span>
                <h3 className="text-2xl font-black text-white">Une question ou une demande d'interview ?</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Notre équipe de communication est à la disposition des journalistes et partenaires institutionnels.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#d8b45b] hover:bg-[#c6a34e] text-[#07111f] font-black text-xs uppercase tracking-wider shadow-lg transition relative z-10 shrink-0"
              >
                <span>Nous contacter</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}