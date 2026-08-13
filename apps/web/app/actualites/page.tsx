// apps/web/pages/actualites/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Newspaper, Calendar, ArrowRight, Tag } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  href: string;
}

const allNews: NewsItem[] = [
  {
    id: "1",
    title: "Lancement officiel des travaux du Hub Logistique Transfrontalier",
    category: "Projets & Infrastructures",
    date: "10 août 2026",
    excerpt: "Zaras Global Business donne le coup d'envoi de l'aménagement de la plateforme logistique régionale visant à fluidifier les échanges commerciaux transfrontaliers.",
    image: "https://images.unsplash.com/photo-1586528116493-a025325a1e37?auto=format&fit=crop&w=1200&q=80",
    href: "/actualites/lancement-hub-logistique",
  },
  {
    id: "2",
    title: "Partenariat stratégique signé pour le développement agro-industriel",
    category: "Institutionnel",
    date: "28 juillet 2026",
    excerpt: "Signature d'une alliance majeure visant à renforcer les unités de transformation et de stockage des denrées alimentaires dans la région.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    href: "/actualites/partenariat-agro-industriel",
  },
  {
    id: "3",
    title: "Publication du rapport annuel d'investissement 2025",
    category: "Finance & Gouvernance",
    date: "15 juin 2026",
    excerpt: "Le groupe présente ses performances financières et l'impact de ses projets structurants portés au cours de l'exercice écoulé.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    href: "/actualites/rapport-annuel-2025",
  },
];

const categories = ["Tous", "Projets & Infrastructures", "Institutionnel", "Finance & Gouvernance"];

export default function ActualitesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredNews = selectedCategory === "Tous"
    ? allNews
    : allNews.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-[#07111f] text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d8b45b]/15 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d8b45b]">
              <Newspaper size={14} />
              Actualités & Publications
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
              Restez informés des avancées et des annonces du groupe.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Découvrez les derniers communiqués de presse, les jalons de nos projets stratégiques et les prises de parole officielles de ZARAS GLOBAL BUSINESS.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Filter Buttons */}
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

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#d8b45b]/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Category Badge */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#07111f]/80 backdrop-blur-md border border-white/15 text-[#d8b45b]">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white text-xs font-semibold z-10">
                    <Calendar size={13} className="text-[#d8b45b]" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4 flex flex-col justify-between flex-grow">
                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-[#07111f] group-hover:text-[#a77b24] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Communiqué officiel
                    </span>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#07111f] group-hover:text-[#a77b24] transition-colors"
                    >
                      <span>Lire l'article</span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
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
            Vous êtes journaliste ou analyste ?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Pour toute demande d'interview, de kit presse ou d'information institutionnelle, notre service communication est à votre disposition.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#d8b45b] hover:bg-[#c6a34e] text-[#07111f] font-black text-xs uppercase tracking-wider shadow-lg transition"
            >
              <span>Contactez le service presse</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}