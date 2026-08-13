// apps/web/components/home/ProjectMap.tsx
"use client";

import { useState } from "react";
import { MapPin, Globe2, Building2, ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface Hub {
  id: string;
  city: string;
  country: string;
  role: string;
  description: string;
  status: string;
  stats: string;
  badgeColor: string;
}

const hubs: Hub[] = [
  {
    id: "abidjan",
    city: "Abidjan",
    country: "Côte d'Ivoire",
    role: "Hub Ouest-Africain & Négoce",
    description: "Centre névralgique pour nos activités de négoce international, partenariats stratégiques et projets d'infrastructures urbaines.",
    status: "Actif & Opérationnel",
    stats: "Pôle d'Excellence Commerciale",
    badgeColor: "bg-[#d8b45b]/10 text-[#d8b45b] border-[#d8b45b]/30",
  },
  {
    id: "bangui",
    city: "Bangui",
    country: "République Centrafricaine",
    role: "Siège Opérationnel & Projets Structurants",
    description: "Pilier central du développement de nos activités minières, industrielles et agro-industrielles en Afrique centrale.",
    status: "Siège & Implantation Majeure",
    stats: "Centre de Pilotage Stratégique",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  {
    id: "regional",
    city: "Afrique Centrale & Subsaharienne",
    role: "Expansion & Développement Régional",
    description: "Déploiement multisectoriel axé sur la sécurité alimentaire, la transition énergétique et l'aménagement durable des territoires.",
    status: "En Expansion Continue",
    stats: "Réseau Multisectoriel",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
];

export default function ProjectMap() {
  const [activeHub, setActiveHub] = useState<Hub>(hubs[0]);

  return (
    <section className="py-24 bg-[#07111f] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d8b45b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-[#d8b45b]/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d8b45b]">
            <Globe2 size={14} />
            Empreinte Géographique
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Nos Hubs et Zones d'Intervention
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Une présence stratégique ancrée au cœur des dynamiques économiques régionales pour un impact direct et mesurable.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Hub Selector Buttons */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#d8b45b] mb-6">
              Sélectionnez un pôle d'implantation
            </h3>

            {hubs.map((hub) => {
              const isSelected = activeHub.id === hub.id;
              return (
                <button
                  key={hub.id}
                  onClick={() => setActiveHub(hub)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border flex items-center justify-between group ${
                    isSelected
                      ? "bg-white/10 border-[#d8b45b] shadow-xl shadow-black/30 translate-x-1"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <div className={`h-8 w-8 rounded-xl flex items-center justify-center font-black text-xs ${isSelected ? "bg-[#d8b45b] text-[#07111f]" : "bg-white/10 text-white"}`}>
                        <MapPin size={16} />
                      </div>
                      <span className="text-lg font-black text-white group-hover:text-[#d8b45b] transition-colors">
                        {hub.city}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 pl-11">
                      {hub.country} • <span className="text-slate-300 font-semibold">{hub.role}</span>
                    </p>
                  </div>

                  <div className={`h-8 w-8 rounded-full border flex items-center justify-center transition-transform ${isSelected ? "border-[#d8b45b] text-[#d8b45b] rotate-90" : "border-white/10 text-slate-500 group-hover:border-white/30"}`}>
                    <ArrowRight size={14} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Hub Details Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-10 border border-white/15 backdrop-blur-xl shadow-2xl space-y-8 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Globe2 size={180} className="text-[#d8b45b]" />
              </div>

              {/* Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${activeHub.badgeColor}`}>
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                  {activeHub.status}
                </div>
                <span className="text-xs font-mono text-slate-400 tracking-wider">
                  {activeHub.stats}
                </span>
              </div>

              {/* Location Title */}
              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {activeHub.city}
                </h3>
                <p className="text-sm font-bold text-[#d8b45b] uppercase tracking-widest">
                  {activeHub.country} — {activeHub.role}
                </p>
              </div>

              {/* Description */}
              <p className="text-base text-slate-300 leading-relaxed">
                {activeHub.description}
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="h-8 w-8 rounded-xl bg-[#d8b45b]/20 text-[#d8b45b] flex items-center justify-center shrink-0">
                    <Building2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Infrastructures</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Bureaux et plateformes logistiques.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="h-8 w-8 rounded-xl bg-[#d8b45b]/20 text-[#d8b45b] flex items-center justify-center shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Gouvernance</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Standards internationaux & conformité.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#d8b45b] hover:bg-[#e2c16e] text-[#07111f] font-black text-sm transition shadow-lg"
                >
                  <span>Initier une collaboration à {activeHub.city}</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}