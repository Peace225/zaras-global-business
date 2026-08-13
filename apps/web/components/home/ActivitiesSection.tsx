// apps/web/components/home/ActivitiesSection.tsx
import Link from "next/link";
import { ArrowRight, Building2, Sprout, Pickaxe, Globe } from "lucide-react";

const activities = [
  {
    title: "BTP & Infrastructures",
    description: "Conception, réalisation de grands ouvrages et développement d'infrastructures durables pour soutenir la croissance urbaine et régionale.",
    icon: Building2,
    href: "/activites#btp",
    tag: "Pôle Majeur",
  },
  {
    title: "Agroalimentaire",
    description: "Investissement dans l'agro-industrie et la chaîne de valeur alimentaire pour garantir la sécurité et l'autonomie alimentaire.",
    icon: Sprout,
    href: "/activites#agroalimentaire",
    tag: "Impact Durable",
  },
  {
    title: "Secteur Minier & Industrie",
    description: "Exploitation responsable et valorisation des ressources stratégiques avec un engagement fort envers les normes environnementales.",
    icon: Pickaxe,
    href: "/activites#mines",
    tag: "Stratégique",
  },
  {
    title: "Négoce & Services Internationaux",
    description: "Optimisation des flux commerciaux transfrontaliers, logistique globale et partenariats d'affaires à haute valeur ajoutée.",
    icon: Globe,
    href: "/activites#negoce",
    tag: "Global",
  },
];

export default function ActivitiesSection() {
  return (
    <section className="py-24 bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#f8f2e5] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#a77b24]">
            Nos Secteurs d'Intervention
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#07111f]">
            Une Expertise Multisectorielle au Service du Développement
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            ZARAS GLOBAL BUSINESS déploie des compétences de pointe à travers des pôles d'activités complémentaires, créant ainsi une dynamique économique robuste et pérenne.
          </p>
        </div>

        {/* Grid of Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl bg-white p-8 shadow-sm border border-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#d8b45b]/50 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Top bar with tag & icon */}
                  <div className="flex items-center justify-between">
                    <div className="h-14 w-14 rounded-2xl bg-[#07111f] text-[#d8b45b] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md">
                      <Icon size={28} />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#f8f2e5] text-[#a77b24]">
                      {activity.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-[#07111f] group-hover:text-[#a77b24] transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>

                {/* Bottom link */}
                <div className="pt-8 mt-6 border-t border-slate-100">
                  <Link
                    href={activity.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#07111f] group-hover:text-[#a77b24] transition-colors"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-16 rounded-3xl bg-[#07111f] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d8b45b_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="relative z-10 space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Vous avez un projet d'envergure ?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Collaborons ensemble pour structurer, financer et concrétiser vos ambitions stratégiques en Afrique centrale et au-delà.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-[#d8b45b] px-8 py-4 text-sm font-black text-[#07111f] shadow-lg hover:bg-[#e2c16e] transition duration-300"
            >
              <span>Discuter de votre projet</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}