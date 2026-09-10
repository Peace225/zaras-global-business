// apps/web/components/home/ProjectsSection.tsx
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Comptoir d'Or et Traçabilité Aurifère",
    category: "Extraction & Négoce d'Or",
    location: "Bangui & Gisements Partenaires, RCA",
    status: "Opérationnel",
    description: "Achat, purification et commercialisation d'or brut issu de l'artisanat minier légal et de concessions partenaires, dans le strict respect des normes internationales.",
    href: "/projets/or-brut",
  },
  {
    title: "Centre de Certification Diamantaire",
    category: "Gemmologie & Processus de Kimberley",
    location: "République Centrafricaine",
    status: "Phase active",
    description: "Expertise, triage et sécurisation de diamants bruts garantissant une chaîne d'approvisionnement 100% conforme et transparente depuis les zones minières.",
    href: "/projets/diamants",
  },
  {
    title: "Logistique d'Exportation & Sécurité Stratégique",
    category: "Transport International",
    location: "Corridor Bangui - Marchés Mondiaux",
    status: "En expansion",
    description: "Dispositif logistique de pointe assurant le transit sécurisé et réglementé des métaux et pierres précieuses vers les plateformes mondiales de négoce.",
    href: "/projets/logistique-miniere",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#f8f2e5] px-3.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#a77b24]">
              Expertise & Opérations Minières
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#07111f] leading-snug sm:leading-tight">
              Nos Pôles d'Activités Stratégiques en RCA
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              Découvrez les piliers opérationnels de ZARAS GLOBAL BUSINESS dédiés à l'achat, la vente et la valorisation des ressources minières en République Centrafricaine.
            </p>
          </div>

          <div>
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 rounded-xl bg-[#07111f] px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#10243b] transition duration-300 w-full sm:w-auto justify-center"
            >
              <span>Voir toutes nos activités</span>
              <ArrowRight size={16} className="text-[#d8b45b]" />
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#d8b45b]/50 flex flex-col justify-between"
            >
              <div className="space-y-5 sm:space-y-6">
                {/* Top meta tags */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-slate-200 text-[#a77b24] truncate max-w-[180px]">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <ShieldCheck size={14} className="text-[#a77b24]" />
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2.5 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-black text-[#07111f] group-hover:text-[#a77b24] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 pt-2">
                  <MapPin size={14} className="text-[#a77b24] shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="pt-6 sm:pt-8 mt-5 sm:mt-6 border-t border-slate-200/60">
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#07111f] group-hover:text-[#a77b24] transition-colors"
                >
                  <span>En savoir plus</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}