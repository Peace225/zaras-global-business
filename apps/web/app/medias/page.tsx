// apps/web/pages/medias/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Image as ImageIcon, Video, FileText, Download, ArrowRight, Camera, Newspaper, ExternalLink } from "lucide-react";

interface MediaItem {
  id: string;
  title: string;
  category: "Photothèque" | "Vidéos" | "Kit Média" | "Communiqués";
  type: string;
  date: string;
  image: string;
  description: string;
  fileSize?: string;
  duration?: string;
}

const allMediaItems: MediaItem[] = [
  {
    id: "1",
    title: "Cérémonie de pose de la première pierre - Hub Logistique",
    category: "Photothèque",
    type: "Photo HD",
    date: "10 août 2026",
    image: "https://images.unsplash.com/photo-1586528116493-a025325a1e37?auto=format&fit=crop&w=1200&q=80",
    description: "Vues officielles du lancement des travaux du hub logistique transfrontalier en présence des partenaires et autorités.",
  },
  {
    id: "2",
    title: "Vidéo Institutionnelle 2026 - Vision & Projets",
    category: "Vidéos",
    type: "Vidéo 4K",
    date: "01 août 2026",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: "Présentation vidéo immersive des différents pôles d'activités et de la stratégie d'expansion de Zaras Global Business.",
    duration: "03:45",
  },
  {
    id: "3",
    title: "Pack Logos Officiels & Charte Graphique",
    category: "Kit Média",
    type: "ZIP / PDF",
    date: "15 juillet 2026",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1200&q=80",
    description: "Ensemble des logos vectoriels (SVG, PNG, EPS) et guide d'utilisation de la marque pour les publications de presse.",
    fileSize: "14.2 Mo",
  },
  {
    id: "4",
    title: "Visites de chantiers et unités agro-industrielles",
    category: "Photothèque",
    type: "Galerie Photo",
    date: "28 juin 2026",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    description: "Sélection de clichés haute résolution illustrant nos complexes de stockage et de transformation.",
  },
  {
    id: "5",
    title: "Point Presse Semestriel de la Direction Générale",
    category: "Communiqués",
    type: "Dossier de Presse",
    date: "12 juin 2026",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    description: "Dossier complet résumant les performances du premier semestre et les perspectives de fin d'année.",
    fileSize: "5.1 Mo",
  },
];

const categories = ["Tous", "Photothèque", "Vidéos", "Kit Média", "Communiqués"];

export default function MediasPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredMedia = selectedCategory === "Tous"
    ? allMediaItems
    : allMediaItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-[#07111f] text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d8b45b]/15 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d8b45b]">
              <Camera size={14} />
              Espace Médias & Photothèque
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
              Ressources visuelles, kits de presse et actualités en images.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Journalistes, partenaires et créateurs de contenu : accédez librement à nos visuels officiels haute définition, nos vidéos et nos dossiers de presse.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Media Grid */}
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

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#d8b45b]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full bg-[#07111f]/80 text-[#d8b45b] backdrop-blur-md border border-[#d8b45b]/30">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Content info */}
                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <span>{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-lg font-black text-[#07111f] group-hover:text-[#a77b24] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">
                    {item.fileSize || item.duration || "Haute Définition"}
                  </span>
                  <button
                    onClick={() => alert(`Téléchargement / Consultation de "${item.title}" en cours...`)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#07111f] hover:bg-[#d8b45b] text-[#d8b45b] hover:text-[#07111f] text-xs font-bold uppercase tracking-wider transition shadow-sm"
                  >
                    <Download size={14} />
                    <span>Accéder</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Press Contact CTA */}
      <section className="py-20 bg-[#07111f] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Besoin d'un visuel spécifique ou d'une accréditation presse ?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Notre département des relations publiques est à la disposition des journalistes pour toute demande d'interview, de reportage ou de documents exclusifs.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#d8b45b] hover:bg-[#c6a34e] text-[#07111f] font-black text-xs uppercase tracking-wider shadow-lg transition"
            >
              <span>Contacter le service presse</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}