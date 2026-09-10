"use client";

import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Gem, MapPin, Sparkles } from "lucide-react";

const HERO_BACKGROUND_IMAGE = "/images/hero-or-diamant.jpg";
const HERO_VIDEO_PATH = "/videos/hero-video.mp4"; // Remplacez par le chemin de votre vidéo

const highlights = [
  { title: "Comptoir Agréé", desc: "Achat & exportation légale en RCA" },
  { title: "Traçabilité Pure", desc: "Processus conforme aux normes" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-80px)] bg-[#090b0e] text-slate-100 overflow-hidden flex items-center bg-cover bg-center bg-no-repeat py-12 lg:py-0"
      style={{ backgroundImage: `url('${HERO_BACKGROUND_IMAGE}')` }}
    >
      {/* 1. OVERLAY SOMBRE (Renforcé légèrement sur mobile pour la lisibilité) */}
      <div className="absolute inset-0 z-0 bg-[#090b0e]/50 lg:bg-[#090b0e]/20" />
      
      {/* 2. DÉGRADÉ ADAPTATIF: 
          - Mobile : de haut en bas (to-b) car les éléments sont empilés.
          - Desktop : de gauche à droite (to-r) car les éléments sont côte à côte.
      */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#090b0e]/95 lg:from-[#090b0e] via-[#090b0e]/80 to-transparent" />

      {/* 3. Texture de fond discrète */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      {/* CONTENU PRINCIPAL */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 py-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Colonne Gauche : Contenu Texte */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            
            {/* Tag Institutionnel */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#C5A059]/30 bg-[#C5A059]/10 backdrop-blur-md w-fit">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059]" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#E5C378] uppercase">
                Acteur Minier Stratégique • RCA
              </span>
            </div>

            {/* Titre Principal */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-slate-400 drop-shadow-md">
                L'excellence des ressources naturelles
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-lg">
                ZARAS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#C5A059] to-[#997635]">
                  GLOBAL BUSINESS
                </span>
              </h1>
            </div>

            {/* Description Courte */}
            <p className="max-w-xl text-sm sm:text-base lg:text-lg text-slate-300 font-light leading-relaxed drop-shadow-md">
              Comptoir d'achat, d'exploitation et de négociation internationale d'{" "}
              <strong className="font-semibold text-white">or</strong> et de{" "}
              <strong className="font-semibold text-white">diamants bruts</strong>.{" "}
              Une présence ancrée en République Centrafricaine, dédiée aux investisseurs et partenaires mondiaux.
            </p>

            {/* Boutons d'Action (100% de la largeur sur mobile, s'alignent sur grand écran) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                className="flex justify-center w-full sm:w-auto items-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 bg-gradient-to-r from-[#C5A059] to-[#A37E3A] text-[#090b0e] text-xs font-bold tracking-widest uppercase hover:brightness-110 transition-all duration-300 shadow-xl shadow-black/50"
                href="/activites"
              >
                Acheter / Investir
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                className="flex justify-center w-full sm:w-auto items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 border border-slate-600 bg-slate-900/60 hover:bg-slate-800 text-xs font-semibold tracking-widest uppercase text-slate-200 backdrop-blur-sm transition-all duration-300"
                href="/contact"
              >
                Nous Contacter
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 sm:pt-8 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 backdrop-blur-sm bg-black/30 p-3 rounded-lg border border-white/10"
                >
                  <div className="p-2 bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne Droite : Cadre Vidéo Éditorial & Badge Flottant */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Cadre Vidéo avec bordure dorée */}
              <div className="relative aspect-[4/5] overflow-hidden border border-[#C5A059]/30 bg-slate-900 shadow-2xl ring-1 ring-white/10 rounded-sm">
                
                {/* Élément Vidéo */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={HERO_VIDEO_PATH} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>

                {/* Overlay sur la vidéo pour lisibilité du texte du cadre */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Information en bas du cadre vidéo */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 bg-[#090b0e]/80 backdrop-blur-md border border-white/10 z-10">
                  <div className="flex items-center justify-between text-[10px] sm:text-xs">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> RCA (Bangui)
                    </span>
                    <span className="text-[#E5C378] font-mono">OR & DIAMANT</span>
                  </div>
                </div>
              </div>

              {/* Badge flottant d'authenticité - Masqué sur mobile par soucis de clarté visuelle */}
              <div className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 p-4 bg-[#090b0e] border border-[#C5A059]/40 shadow-xl backdrop-blur-md z-20">
                <div className="h-10 w-10 flex items-center justify-center bg-[#C5A059]/10 text-[#C5A059]">
                  <Gem className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    Qualité Supérieure
                  </p>
                  <p className="text-xs font-bold text-white">
                    Pierres & Métaux Précieux
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}