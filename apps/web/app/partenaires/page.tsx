// apps/web/pages/partenaires/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Handshake, Building2, Globe2, ShieldCheck, ArrowRight, Award } from "lucide-react";

interface PartnerItem {
  id: string;
  name: string;
  category: "Institutionnel" | "Financier" | "Technique & BTP" | "Stratégique";
  logoText: string;
  location: string;
  description: string;
  badge: string;
}

const allPartners: PartnerItem[] = [
  {
    id: "1",
    name: "Cercle Économique & Institutionnel Ouest-Africain",
    category: "Institutionnel",
    logoText: "CEIOA",
    location: "Abidjan, Côte d'Ivoire",
    description: "Partenaire de référence pour l'accompagnement des grands projets d'infrastructure et l'alignement réglementaire régional.",
    badge: "Partenaire Officiel",
  },
  {
    id: "2",
    name: "AfriCorp Invest & Finance",
    category: "Financier",
    logoText: "ACIF",
    location: "Casablanca, Maroc",
    description: "Institution financière partenaire accompagnant la structuration et le financement des investissements lourds du groupe.",
    badge: "Partenaire Financier",
  },
  {
    id: "3",
    name: "Global Build & Engineering Solutions",
    category: "Technique & BTP",
    logoText: "GBES",
    location: "Dakar, Sénégal",
    description: "Alliance technique pour l'exécution des chantiers de BTP, le respect des normes environnementales et le transfert de compétences.",
    badge: "Expertise Technique",
  },
  {
    id: "4",
    name: "AgroTrans Alliance West Africa",
    category: "Stratégique",
    logoText: "ATAWA",
    location: "Bouaké, Côte d'Ivoire",
    description: "Réseau d'experts en logistique et transformation agro-industrielle pour optimiser les chaînes d'approvisionnement régionales.",
    badge: "Partenaire Stratégique",
  },
];

const categories = ["Tous", "Institutionnel", "Financier", "Technique & BTP", "Stratégique"];

export default function PartenairesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredPartners = selectedCategory === "Tous"
    ? allPartners
    : allPartners.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-[#07111f] text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d8b45b]/15 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d8b45b]">
              <Handshake size={14} />
              Écosystème & Alliances
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
              Des alliances stratégiques fondées sur la confiance et l'excellence.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              ZARAS GLOBAL BUSINESS s'entoure des meilleurs acteurs institutionnels, financiers et techniques pour garantir la réussite et l'impact de ses projets.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Partners Grid */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                    isSelected
                      ? "bg-[#07111f] text-white shadow-md border border-[#07111f]"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-[#d8b45b]/50 hover:text-[#a77b24]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                className="group rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#d8b45b]/50 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-6">
                  {/* Top Header inside card */}
                  <div className="flex items-center justify-between">
                    <div className="h-14 w-14 rounded-2xl bg-[#07111f] text-[#d8b45b] font-black text-sm flex items-center justify-center tracking-wider shadow-md border border-[#d8b45b]/30">
                      {partner.logoText}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#d8b45b]/10 text-[#a77b24] border border-[#d8b45b]/30">
                      {partner.badge}
                    </span>
                  </div>

                  {/* Partner Info */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {partner.category} • {partner.location}
                    </div>
                    <h3 className="text-xl font-black text-[#07111f] group-hover:text-[#a77b24] transition-colors leading-snug">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed pt-1">
                      {partner.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                    <ShieldCheck size={16} className="text-[#a77b24]" />
                    <span>Partenariat certifié</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#07111f] group-hover:text-[#a77b24] transition-colors"
                  >
                    <span>Devenir partenaire</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#07111f] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Vous souhaitez rejoindre notre réseau de partenaires ?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Nous sommes constamment ouverts aux collaborations stratégiques, aux synergies industrielles et aux opportunités de co-investissement.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#d8b45b] hover:bg-[#c6a34e] text-[#07111f] font-black text-xs uppercase tracking-wider shadow-lg transition"
            >
              <span>Proposer une alliance</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}