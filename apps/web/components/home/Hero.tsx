// apps/web/components/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";

// Chemins vers vos images locales situées dans le dossier public/images/
const heroImages = [
  "/images/hero-or-diamant.jpg", // Mettez votre image Or / Diamant ici
  "/images/hero-minier.jpg",     // Mettez votre image secteur minier ici
  "/images/hero-diamant.jpg",  // Mettez votre image lingots/industrie ici

];

const stats = [
  {
    value: "12+",
    label: "Projets",
  },
  {
    value: "24+",
    label: "Partenaires",
  },
  {
    value: "03",
    label: "Secteurs stratégiques",
  },
  {
    value: "100%",
    label: "Engagement",
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effet pour faire défiler les images du carrousel toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#07111f] text-white">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              transitionProperty: "opacity, transform",
              transitionDuration: "1.5s",
            }}
          />
        ))}

        {/* Dark overlay - Allégé à 50% pour laisser voir l'image */}
        <div className="absolute inset-0 bg-[#07111f]/50 z-10" />

        {/* Gradient - Allégé pour plus de visibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/90 via-[#07111f]/60 to-[#07111f]/30 z-10" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07111f] to-transparent z-10" />
      </div>

      {/* Grid decoration */}
      <div className="hero-grid absolute inset-0 opacity-20 z-20 pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#d8b45b]/10 z-20 pointer-events-none" />
      <div className="absolute -right-20 top-40 h-[350px] w-[350px] rounded-full border border-[#d8b45b]/10 z-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-30 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#07111f]/60 backdrop-blur-md px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#d8b45b]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6cc82]">
              Mines • Or • Diamant • Investissement
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-md">
            ZARAS
            <span className="block text-[#d8b45b]">
              GLOBAL BUSINESS
            </span>
          </h1>

          {/* Separator */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-16 bg-[#d8b45b]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#d8b45b]" />
            <div className="h-px w-8 bg-[#d8b45b]/50" />
          </div>

          {/* Slogan */}
          <p className="mt-7 max-w-2xl text-2xl font-medium leading-relaxed text-slate-100 sm:text-3xl drop-shadow">
            Construire aujourd'hui les
            <span className="text-[#e6cc82]"> opportunités économiques </span>
            de demain.
          </p>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg drop-shadow">
            ZARAS GLOBAL BUSINESS développe des projets stratégiques majeurs, spécialisés dans l'exploitation minière (or, diamant), le négoce international et la valorisation durable des richesses en Afrique.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/activites"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c6a04a] px-7 py-4 text-sm font-black text-[#07111f] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e0bf69]"
            >
              Découvrir nos activités
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/projets"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-black/30 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d8b45b]/50 hover:bg-black/50"
            >
              Voir nos projets
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold text-slate-200 transition hover:text-[#e6cc82]"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Bottom information */}
        <div className="mt-16 grid max-w-5xl gap-4 border-t border-white/10 pt-7 sm:grid-cols-2 lg:grid-cols-4 backdrop-blur-sm bg-black/20 p-4 rounded-2xl">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-l border-white/15 pl-5"
            >
              <div className="text-2xl font-black text-[#e6cc82]">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 right-8 z-30 hidden items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-300 lg:flex">
        <span>Explorer</span>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-sm">
          <ArrowDown
            size={16}
            className="animate-bounce text-[#d8b45b]"
          />
        </div>
      </div>

      {/* Location indicator */}
      <div className="absolute bottom-8 left-8 z-30 hidden items-center gap-2 text-xs text-slate-300 lg:flex bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
        <MapPin size={14} className="text-[#d8b45b]" />
        Afrique centrale & Internationale
      </div>
    </section>
  );
}