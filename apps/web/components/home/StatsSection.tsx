// apps/web/components/home/StatsSection.tsx
import { TrendingUp, Users, Building2, Globe2 } from "lucide-react";

const stats = [
  {
    value: "15+",
    label: "Projets Stratégiques",
    description: "Infrastructures et initiatives d'envergure menées.",
    icon: Building2,
  },
  {
    value: "4",
    label: "Pôles d'Activités",
    description: "BTP, agroalimentaire, mines et négoce international.",
    icon: Globe2,
  },
  {
    value: "24+",
    label: "Partenaires de Confiance",
    description: "Collaborations solides avec les secteurs public et privé.",
    icon: Users,
  },
  {
    value: "100%",
    label: "Engagement Durable",
    description: "Création de valeur socio-économique mesurable.",
    icon: TrendingUp,
  },
];

export default function StatsSection() {
  return (
    <section className="relative bg-[#07111f] text-white py-20 overflow-hidden border-y border-slate-800">
      {/* Background pattern & glow effects */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d8b45b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#d8b45b]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d8b45b]">
            Impact & Performance
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            ZARAS GLOBAL BUSINESS en Chiffres
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Notre empreinte économique se traduit par des résultats tangibles et une volonté constante de bâtir l'avenir.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d8b45b]/50 hover:bg-white/10 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon top */}
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-2xl bg-[#d8b45b]/10 border border-[#d8b45b]/20 text-[#d8b45b] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                  </div>

                  {/* Value & Label */}
                  <div className="space-y-2">
                    <div className="text-4xl sm:text-5xl font-black text-[#d8b45b] tracking-tight">
                      {stat.value}
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {stat.label}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 mt-6 pt-4 border-t border-white/10 leading-relaxed">
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