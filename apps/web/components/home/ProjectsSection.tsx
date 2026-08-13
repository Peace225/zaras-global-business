// apps/web/components/home/ProjectsSection.tsx
import Link from "next/link";
import { ArrowRight, MapPin, Clock, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "Complexe Résidentiel & Commercial Horizon",
    category: "BTP & Infrastructures",
    location: "Abidjan, Côte d'Ivoire",
    status: "En cours",
    description: "Développement d'un pôle immobilier mixte de haut standing intégrant des espaces résidentiels éco-responsables et des plateaux de bureaux modernes.",
    href: "/projets/horizon",
  },
  {
    title: "Agro-Pôle Intégré de Transformation",
    category: "Agroalimentaire",
    location: "Afrique Centrale",
    status: "Phase active",
    description: "Mise en place d'une chaîne de valeur complète pour la production, le stockage et la transformation locale des denrées alimentaires à grande échelle.",
    href: "/projets/agro-pole",
  },
  {
    title: "Plateforme Logistique Régionale",
    category: "Négoce & Services",
    location: "Hub Stratégique",
    status: "Planification",
    description: "Infrastructure transfrontalière de stockage et de transit destinée à fluidifier les flux commerciaux et soutenir les échanges internationaux.",
    href: "/projets/logistique",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#f8f2e5] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#a77b24]">
              Réalisations & Ambitions
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#07111f]">
              Nos Projets Phares
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Découvrez les initiatives structurantes portées par ZARAS GLOBAL BUSINESS pour stimuler l'économie et répondre aux défis de demain.
            </p>
          </div>

          <div>
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 rounded-xl bg-[#07111f] px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#10243b] transition duration-300"
            >
              <span>Voir tous nos projets</span>
              <ArrowRight size={16} className="text-[#d8b45b]" />
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-slate-50 border border-slate-200/80 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#d8b45b]/50 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Top meta tags */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-slate-200 text-[#a77b24]">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Clock size={14} className="text-[#a77b24]" />
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-black text-[#07111f] group-hover:text-[#a77b24] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 pt-2">
                  <MapPin size={14} className="text-[#a77b24]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="pt-8 mt-6 border-t border-slate-200/60">
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#07111f] group-hover:text-[#a77b24] transition-colors"
                >
                  <span>Découvrir le projet</span>
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