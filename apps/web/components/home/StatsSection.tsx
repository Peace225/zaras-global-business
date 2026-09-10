// apps/web/components/home/StatsSection.tsx
import { Gem, ShieldCheck, Scale, Globe } from "lucide-react";

const stats = [
  {
    value: "99.9%",
    label: "Pureté & Certification",
    description: "Or et diamants bruts rigoureusement certifiés aux normes internationales et locales en RCA.",
    icon: Gem,
  },
  {
    value: "100%",
    label: "Conformité & Traçabilité",
    description: "Circuits d'approvisionnement légaux, sécurisés et pleinement conformes aux réglementations minières centrafricaines.",
    icon: ShieldCheck,
  },
  {
    value: "15+",
    label: "Partenaires Miniers",
    description: "Relations durables établies avec les coopératives et les autorités de régulation du secteur en République Centrafricaine.",
    icon: Scale,
  },
  {
    value: "10+",
    label: "Destinations Internationales",
    description: "Expertise logistique pour l'exportation sécurisée depuis Bangui vers les marchés mondiaux (Dubaï, Anvers, etc.).",
    icon: Globe,
  },
];

export default function StatsSection() {
  return (
    <section className="relative bg-[#07111f] text-white py-14 sm:py-20 overflow-hidden border-y border-slate-800">
      {/* Background pattern & glow effects */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d8b45b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[200px] sm:h-[250px] bg-[#d8b45b]/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#d8b45b] text-center">
            Leader Minier en République Centrafricaine
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-snug sm:leading-tight">
            L'Excellence dans l'Or et les Diamants en RCA
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed px-2 sm:px-0">
            Acteur stratégique de référence basé à Bangui, spécialisé dans l'achat, la vente et l'exportation sécurisée de ressources minières précieuses.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d8b45b]/50 hover:bg-white/10 flex flex-col justify-between shadow-lg sm:shadow-none"
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Icon top */}
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-[#d8b45b]/10 border border-[#d8b45b]/20 text-[#d8b45b] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} className="sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                  </div>

                  {/* Value & Label */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="text-3xl sm:text-5xl font-black text-[#d8b45b] tracking-tight">
                      {stat.value}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {stat.label}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 mt-5 sm:mt-6 pt-4 border-t border-white/10 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}