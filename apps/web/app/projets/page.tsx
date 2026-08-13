// apps/web/pages/projets/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FolderKanban, MapPin, Calendar, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import ProjectGallery from "@/components/projects/ProjectGallery";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: "En cours" | "Terminé" | "Planifié";
  location: string;
  image: string;
  description: string;
  date: string;
}

const allProjects: ProjectItem[] = [
  {
    id: "1",
    title: "Complexe Résidentiel et Commercial Horizon",
    category: "BTP & Infrastructures",
    status: "En cours",
    location: "Abidjan, Côte d'Ivoire",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f0c3d?auto=format&fit=crop&w=1200&q=80",
    description: "Construction d'un complexe immobilier de haut standing intégrant des espaces résidentiels sécurisés et des surfaces commerciales modernes.",
    date: "2025 - 2027",
  },
  {
    id: "2",
    title: "Centre de Transformation Agro-industrielle",
    category: "Agroalimentaire",
    status: "Terminé",
    location: "Bouaké, Côte d'Ivoire",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    description: "Mise en service d'une unité moderne de traitement, de conditionnement et de stockage des denrées alimentaires pour renforcer la chaîne de valeur locale.",
    date: "2024 - 2025",
  },
  {
    id: "3",
    title: "Hub Logistique Transfrontalier",
    category: "Négoce & Logistique",
    status: "En cours",
    location: "Korhogo, Côte d'Ivoire",
    image: "https://images.unsplash.com/photo-1586528116493-a025325a1e37?auto=format&fit=crop&w=1200&q=80",
    description: "Aménagement d'une plateforme de transit et de gestion des flux commerciaux régionaux pour fluidifier les échanges transfrontaliers.",
    date: "2025 - 2026",
  },
  {
    id: "4",
    title: "Aménagement Urbain & Infrastructures Durables",
    category: "Infrastructures",
    status: "Planifié",
    location: "San-Pédro, Côte d'Ivoire",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: "Projet d'envergure intégrant des normes environnementales strictes pour le développement d'infrastructures d'accompagnement portuaire.",
    date: "2026 - 2028",
  },
];

const categories = ["Tous", "BTP & Infrastructures", "Agroalimentaire", "Négoce & Logistique", "Infrastructures"];

export default function ProjetsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects = selectedCategory === "Tous"
    ? allProjects
    : allProjects.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-[#07111f] text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d8b45b]/15 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d8b45b]">
              <FolderKanban size={14} />
              Nos Réalisations
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
              Des projets d'envergure porteurs de croissance durable.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Découvrez l'ensemble de nos chantiers, infrastructures et investissements structurants portés par ZARAS GLOBAL BUSINESS à travers la région.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Projects Grid */}
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#d8b45b]/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Badges */}
                <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Category & Status */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#07111f]/80 backdrop-blur-md border border-white/15 text-[#d8b45b]">
                      {project.category}
                    </span>
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full backdrop-blur-md border ${
                      project.status === "Terminé"
                        ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/30"
                        : project.status === "En cours"
                        ? "bg-amber-950/80 text-amber-300 border-amber-500/30"
                        : "bg-slate-950/80 text-slate-300 border-slate-500/30"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Location & Date at bottom of image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold z-10">
                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                      <MapPin size={13} className="text-[#d8b45b]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                      <Calendar size={13} className="text-[#d8b45b]" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4 flex flex-col justify-between flex-grow">
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-[#07111f] group-hover:text-[#a77b24] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Zaras Global Project
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Gallery Section */}
      <ProjectGallery />

      {/* CTA Section */}
      <section className="py-20 bg-[#07111f] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Vous souhaitez investir ou co-développer un projet ?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Notre équipe de direction et nos experts sectoriels étudient toutes les propositions de partenariat stratégique.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#d8b45b] hover:bg-[#c6a34e] text-[#07111f] font-black text-xs uppercase tracking-wider shadow-lg transition"
            >
              <span>Proposer un partenariat</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}