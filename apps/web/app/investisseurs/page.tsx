// apps/web/pages/investisseur/page.tsx
import Link from "next/link";
import { TrendingUp, ShieldCheck, PieChart, ArrowRight, FileText, Building2, CheckCircle2, Users, Landmark } from "lucide-react";

export default function InvestisseurPage() {
  const investmentPillars = [
    {
      title: "BTP & Infrastructures Durables",
      description: "Projets immobiliers et d'infrastructures à fort rendement adossés à une demande urbaine en forte croissance.",
      metrics: "ROI estimé attractif & sécurisé",
      icon: Building2,
    },
    {
      title: "Agroalimentaire & Transformation",
      description: "Unités industrielles de traitement et de stockage garantissant la sécurité alimentaire et la valorisation locale.",
      metrics: "Marché résilient à fort impact",
      icon: TrendingUp,
    },
    {
      title: "Négoce & Logistique Transfrontalière",
      description: "Plateformes de transit et hubs régionaux optimisant les flux commerciaux en Afrique de l'Ouest.",
      metrics: "Synergies régionales puissantes",
      icon: Landmark,
    },
  ];

  const keyAdvantages = [
    "Gouvernance transparente et conformité aux standards internationaux",
    "Présentation rigoureuse des risques et diversification sectorielle maîtrisée",
    "Partenariats institutionnels solides et ancrage local stratégique",
    "Création de valeur pérenne axée sur la durabilité et l'impact socio-économique",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-[#07111f] text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d8b45b]/15 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d8b45b]">
              <PieChart size={14} />
              Espace Investisseurs
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
              Investissez dans la croissance structurante de l'Afrique de l'Ouest.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              ZARAS GLOBAL BUSINESS offre aux investisseurs institutionnels et privés des opportunités de co-développement à fort impact et à haute performance financière.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#d8b45b] hover:bg-[#c6a34e] text-[#07111f] font-black text-xs uppercase tracking-wider shadow-lg transition"
              >
                <span>Demoncer un dossier d'investissement</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="bg-slate-900 text-white py-12 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#d8b45b]">Multi-secteurs</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">BTP, Agro, Négoce</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#d8b45b]">Stratégique</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Implantation Régionale</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#d8b45b]">100%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Conformité & Transparence</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#d8b45b]">Durable</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Impact Économique</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Pillars */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#a77b24]">Nos Secteurs Clés</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#07111f] tracking-tight">
              Des portefeuilles d'investissement diversifiés et rentables
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Nos projets majeurs sont pensés pour répondre aux besoins structurels du marché tout en garantissant une création de valeur à long terme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#d8b45b]/50 transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="h-14 w-14 rounded-2xl bg-[#07111f] text-[#d8b45b] flex items-center justify-center shadow-md border border-[#d8b45b]/30 group-hover:scale-110 transition-transform">
                        <Icon size={26} />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#d8b45b]/10 text-[#a77b24] border border-[#d8b45b]/30">
                        {pillar.metrics}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-black text-[#07111f] group-hover:text-[#a77b24] transition-colors leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Zaras Asset Group
                    </span>
                    <Link
                      href="/contact"
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
        </div>
      </section>

      {/* Why Invest With Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#a77b24]">Pourquoi Choisir Zaras</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#07111f] tracking-tight">
                L'excellence opérationnelle au service des investisseurs
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Notre équipe de direction combine une parfaite maîtrise des marchés locaux ouest-africains et des standards internationaux de gestion de projets et de capitaux.
              </p>

              <div className="space-y-4 pt-2">
                {keyAdvantages.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 size={20} className="text-[#a77b24] shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-slate-800 leading-relaxed">{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Investor Documentation / Report Card */}
            <div className="rounded-3xl bg-[#07111f] text-white p-8 sm:p-12 shadow-2xl space-y-8 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#d8b45b]/10 blur-3xl"></div>
              
              <div className="space-y-3 relative z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#d8b45b]">Documentation Financière</span>
                <h3 className="text-2xl font-black text-white">Rapport Annuel & Plaquette Investisseurs</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Accédez à nos notes d'information, bilans d'activités et perspectives financières sur demande sécurisée.
                </p>
              </div>

              <div className="space-y-3 relative z-10 pt-2">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold">
                  <FileText size={18} className="text-[#d8b45b]" />
                  <span>Brochure institutionnelle 2026 (PDF confidentiel)</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold">
                  <ShieldCheck size={18} className="text-[#d8b45b]" />
                  <span>Audit de gouvernance et conformité</span>
                </div>
              </div>

              <div className="pt-2 relative z-10">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#d8b45b] hover:bg-[#c6a34e] text-[#07111f] font-black text-xs uppercase tracking-wider shadow-lg transition"
                >
                  <span>Contacter la direction financière</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Planifier une réunion avec les relations investisseurs
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Notre comité de direction se tient à la disposition des investisseurs qualifiés pour présenter nos opportunités en cours.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#d8b45b] hover:bg-[#c6a34e] text-[#07111f] font-black text-xs uppercase tracking-wider shadow-lg transition"
            >
              <span>Prendre rendez-vous</span>
              <Users size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}