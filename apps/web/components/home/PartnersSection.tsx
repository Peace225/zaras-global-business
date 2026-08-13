// apps/web/components/home/PartnersSection.tsx
import Link from "next/link";
import { ArrowRight, Handshake, ShieldCheck, Building2, Globe, Award } from "lucide-react";

const partnerCategories = [
  {
    title: "Institutions & Secteur Public",
    description: "Collaborations étroites avec les agences gouvernementales et régionales pour porter les projets structurants.",
    icon: Building2,
    badge: "Institutionnel",
  },
  {
    title: "Instituts Financiers & Bancaires",
    description: "Partenariats avec des acteurs de premier plan pour sécuriser le financement et la viabilité des investissements.",
    icon: Handshake,
    badge: "Financier",
  },
  {
    title: "Experts Industriels & Techniques",
    description: "Alliances avec des leaders technologiques et industriels garantissant les plus hauts standards d'exécution.",
    icon: ShieldCheck,
    badge: "Technique",
  },
  {
    title: "Réseaux Logistiques Globaux",
    description: "Synergies transfrontalières pour optimiser la chaîne d'approvisionnement et le négoce international.",
    icon: Globe,
    badge: "International",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#f8f2e5] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#a77b24]">
            <Award size={14} />
            Écosystème & Alliances
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#07111f]">
            Nos Partenaires de Confiance
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            ZARAS GLOBAL BUSINESS s'entoure d'alliances stratégiques solides pour conforter son leadership et maximiser l'impact de ses projets en Afrique et à l'international.
          </p>
        </div>

        {/* Partners Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnerCategories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl bg-slate-50 border border-slate-200/80 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#d8b45b]/50 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="h-14 w-14 rounded-2xl bg-[#07111f] text-[#d8b45b] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md">
                      <Icon size={28} />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-slate-200 text-[#a77b24]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-[#07111f] group-hover:text-[#a77b24] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom marker */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-[#a77b24] transition-colors">
                  <span>Réseau certifié</span>
                  <div className="h-2 w-2 rounded-full bg-[#d8b45b]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 rounded-3xl bg-[#07111f] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d8b45b_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="relative z-10 space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Rejoignez notre réseau de partenaires
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Vous êtes une institution, un investisseur ou un expert sectoriel ? Bâtissons ensemble des synergies durables et à fort rendement.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="/partenariat"
              className="inline-flex items-center gap-3 rounded-xl bg-[#d8b45b] px-8 py-4 text-sm font-black text-[#07111f] shadow-lg hover:bg-[#e2c16e] transition duration-300"
            >
              <span>Devenir partenaire</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}