// apps/web/pages/documents/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Download, Calendar, ShieldCheck, ArrowRight, FileCheck } from "lucide-react";

interface DocumentItem {
  id: string;
  title: string;
  category: "Rapports Annuels" | "Gouvernance & Légal" | "Plaquettes" | "Certifications";
  fileSize: string;
  date: string;
  description: string;
  href: string;
}

const allDocuments: DocumentItem[] = [
  {
    id: "1",
    title: "Rapport Annuel d'Investissement 2025",
    category: "Rapports Annuels",
    fileSize: "12.4 Mo",
    date: "15 juin 2026",
    description: "Bilan complet des activités, performances financières et impact des projets structurants portés par le groupe au cours de l'exercice 2025.",
    href: "#",
  },
  {
    id: "2",
    title: "Charte d'Éthique & Gouvernance d'Entreprise",
    category: "Gouvernance & Légal",
    fileSize: "3.2 Mo",
    date: "10 janvier 2026",
    description: "Cadre réglementaire et principes déontologiques régissant l'ensemble des filiales et des partenaires de Zaras Global Business.",
    href: "#",
  },
  {
    id: "3",
    title: "Plaquette Institutionnelle 2026 (Français)",
    category: "Plaquettes",
    fileSize: "8.5 Mo",
    date: "01 mars 2026",
    description: "Présentation détaillée de nos cœurs de métier, de notre vision stratégique et de notre réseau d'implantations régionales.",
    href: "#",
  },
  {
    id: "4",
    title: "Certifications de Conformité & Normes ISO",
    category: "Certifications",
    fileSize: "4.8 Mo",
    date: "20 février 2026",
    description: "Recueil des attestations de qualité, de sécurité sur les chantiers et de respect des normes environnementales internationales.",
    href: "#",
  },
];

const categories = ["Tous", "Rapports Annuels", "Gouvernance & Légal", "Plaquettes", "Certifications"];

export default function DocumentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredDocuments = selectedCategory === "Tous"
    ? allDocuments
    : allDocuments.filter((doc) => doc.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-[#07111f] text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d8b45b]/15 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d8b45b]">
              <FileText size={14} />
              Centre de Documentation
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
              Transparence, rapports et publications officielles.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Téléchargez l'ensemble de nos documents institutionnels, rapports financiers, chartes de gouvernance et plaquettes de présentation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Documents Grid */}
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

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="group rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#d8b45b]/50 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-6">
                  {/* Top Header inside card */}
                  <div className="flex items-center justify-between">
                    <div className="h-14 w-14 rounded-2xl bg-[#07111f] text-[#d8b45b] flex items-center justify-center shadow-md border border-[#d8b45b]/30 group-hover:scale-110 transition-transform">
                      <FileCheck size={26} />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#d8b45b]/10 text-[#a77b24] border border-[#d8b45b]/30">
                      {doc.category}
                    </span>
                  </div>

                  {/* Document Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-[#a77b24]" />
                        {doc.date}
                      </span>
                      <span>•</span>
                      <span>Format PDF ({doc.fileSize})</span>
                    </div>
                    <h3 className="text-xl font-black text-[#07111f] group-hover:text-[#a77b24] transition-colors leading-snug">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                    <ShieldCheck size={16} className="text-[#a77b24]" />
                    <span>Document vérifié</span>
                  </div>
                  <a
                    href={doc.href}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Téléchargement de "${doc.title}" en cours...`);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#07111f] hover:bg-[#d8b45b] text-[#d8b45b] hover:text-[#07111f] text-xs font-bold uppercase tracking-wider transition shadow-sm"
                  >
                    <Download size={14} />
                    <span>Télécharger</span>
                  </a>
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
            Vous recherchez un document spécifique ou confidentiel ?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Les investisseurs et partenaires institutionnels peuvent accéder à des notes d'information complémentaires sur demande auprès de notre secrétariat général.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#d8b45b] hover:bg-[#c6a34e] text-[#07111f] font-black text-xs uppercase tracking-wider shadow-lg transition"
            >
              <span>Faire une demande d'accès</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}