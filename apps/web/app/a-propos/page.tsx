// apps/web/pages/apropos/page.tsx
import Link from "next/link";
import { Building2, ShieldCheck, Target, Award, ArrowRight, CheckCircle2, Globe2 } from "lucide-react";

export default function AproposPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-[#07111f] text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d8b45b]/15 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d8b45b]">
              <Globe2 size={14} />
              À propos du Groupe
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
              Bâtir l'avenir économique avec vision et exigence.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              ZARAS GLOBAL BUSINESS est un acteur clé de référence internationale, engagé dans le développement d'infrastructures durables, l'agroalimentaire, le négoce et les grands projets stratégiques.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#f8f2e5] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#a77b24]">
                <Target size={14} />
                Notre Mission & Vision
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07111f]">
                Catalyser la croissance et l'innovation sectorielle
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Notre ambition est de connecter les marchés, de moderniser les chaînes de valeur industrielles et de porter des projets d'envergure qui créent de la valeur ajoutée pérenne pour nos partenaires et les communautés.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Excellence opérationnelle sur chaque chantier et contrat",
                  "Respect strict des normes environnementales et sociétales",
                  "Partenariats stratégiques de long terme avec les institutions",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-800">
                    <CheckCircle2 size={18} className="text-[#a77b24] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 h-96">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Siège Zaras Global Business"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d8b45b]">Leadership Global</span>
                <h3 className="text-xl font-black">Présence internationale & ancrage régional fort</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#f8f2e5] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#a77b24]">
              <Award size={14} />
              Nos Valeurs Fondamentales
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07111f]">
              Ce qui guide chacune de nos actions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Intégrité & Transparence",
                description: "Nous menons nos affaires avec une rigueur éthique irréprochable et un respect absolu de nos engagements contractuels et institutionnels.",
                icon: ShieldCheck,
              },
              {
                title: "Excellence & Performance",
                description: "Chaque projet est conduit selon les plus hauts standards de qualité internationale pour garantir une durabilité maximale.",
                icon: Award,
              },
              {
                title: "Vision Stratégique",
                description: "Nous anticipons les mutations économiques mondiales pour structurer des investissements porteurs d'avenir.",
                icon: Building2,
              },
            ].map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-slate-50 border border-slate-200 p-8 space-y-6 hover:shadow-xl hover:border-[#d8b45b]/50 transition-all duration-300 group"
                >
                  <div className="h-14 w-14 rounded-2xl bg-[#07111f] text-[#d8b45b] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-black text-[#07111f]">{val.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#07111f] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Prêt à collaborer avec Zaras Global Business ?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Découvrez nos opportunités de partenariats stratégiques et rejoignez un réseau d'excellence.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#d8b45b] hover:bg-[#c6a34e] text-[#07111f] font-black text-xs uppercase tracking-wider shadow-lg transition"
            >
              <span>Nous contacter</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-black text-xs uppercase tracking-wider border border-white/20 transition"
            >
              <span>Voir nos projets</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}