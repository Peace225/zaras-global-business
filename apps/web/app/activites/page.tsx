// apps/web/app/activites/page.tsx
"use client";

import Link from "next/link";
import { Building2, Wheat, Gem, Truck, ArrowRight, CheckCircle2, Briefcase } from "lucide-react";

const sectors = [
  {
    id: "mines-matieres-premieres",
    title: "Matières Premières, Mines (Or, Diamant) & Négoce",
    subtitle: "Extraction responsable et valorisation des richesses minières",
    description: "Au cœur de notre stratégie de croissance, nous intervenons dans l'exploitation rigoureuse, l'approvisionnement et le commerce international de matières premières, avec un focus particulier sur les métaux précieux (or) et les pierres précieuses (diamant), dans le strict respect des normes de traçabilité et de conformité.",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80",
    icon: Gem,
    highlights: [
      "Exploitation et négoce sécurisé d'or et de diamants",
      "Traçabilité rigoureuse et conformité aux standards internationaux",
      "Partenariats miniers et valorisation des gisements stratégiques",
    ],
  },
  {
    id: "btp",
    title: "BTP & Infrastructures",
    subtitle: "Conception et réalisation de grands travaux",
    description: "Nous portons des projets majeurs de construction résidentielle, commerciale et d'infrastructures publiques, en respectant les plus hauts standards de sécurité, de qualité et de durabilité.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f0c3d?auto=format&fit=crop&w=1200&q=80",
    icon: Building2,
    highlights: [
      "Complexes résidentiels et tertiaires",
      "Infrastructures de transport et voiries",
      "Maîtrise d'œuvre et ingénierie de pointe",
    ],
  },
  {
    id: "agro",
    title: "Agroalimentaire & Sécurité Alimentaire",
    subtitle: "Transformation et valorisation des ressources",
    description: "Acteur engagé dans la chaîne de valeur agricole, nous développons des unités modernes de transformation, de stockage et de distribution pour garantir la sécurité alimentaire régionale.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    icon: Wheat,
    highlights: [
      "Centres de transformation agro-industrielle",
      "Chaînes de stockage et conservation modernes",
      "Partenariats durables avec les producteurs locaux",
    ],
  },
  {
    id: "logistique",
    title: "Transport & Logistique",
    subtitle: "Optimisation de la chaîne d'approvisionnement",
    description: "Nous structurons des hubs logistiques performants et des solutions de transport adaptées pour fluidifier l'acheminement des biens à travers les frontières.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    icon: Truck,
    highlights: [
      "Hubs logistiques transfrontaliers",
      "Gestion de flotte et traçabilité des flux",
      "Solutions d'entreposage sécurisées",
    ],
  },
];

export default function ActivitesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-[#07111f] text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d8b45b]/15 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d8b45b]">
              <Briefcase size={14} />
              Nos Cœurs de Métier
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
              Des expertises sectorielles au service du développement.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              ZARAS GLOBAL BUSINESS déploie un modèle multisectoriel performant, avec un ancrage fort dans les matières premières, les mines (or, diamant) et les grands piliers économiques internationaux.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors List Section */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={sector.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Box */}
                <div className={`relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 h-80 sm:h-96 ${isEven ? "" : "lg:order-2"}`}>
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#07111f]/80 backdrop-blur-md border border-white/15 text-[#d8b45b]">
                      Secteur Stratégique Clé
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className={`space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#07111f] text-[#d8b45b] shadow-md">
                    <Icon size={20} />
                    <span className="text-xs font-bold uppercase tracking-wider">{sector.subtitle}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07111f]">
                    {sector.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {sector.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {sector.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-800">
                        <CheckCircle2 size={18} className="text-[#a77b24] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#07111f] hover:text-[#a77b24] transition-colors"
                    >
                      <span>Discuter d'un projet dans ce secteur</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#07111f] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Vous avez un projet ou une opportunité d'investissement ?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Notre équipe d'experts sectoriels est à votre disposition pour étudier vos propositions de partenariat.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#d8b45b] hover:bg-[#c6a34e] text-[#07111f] font-black text-xs uppercase tracking-wider shadow-lg transition"
            >
              <span>Soumettre une proposition</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}