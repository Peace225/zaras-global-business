// apps/web/components/projects/ProjectGallery.tsx
"use client";

import { useState } from "react";
import { Images, Maximize2 } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectGalleryProps {
  items?: GalleryItem[];
}

const defaultItems: GalleryItem[] = [
  {
    id: "1",
    title: "Vue d'ensemble - Chantier Horizon",
    category: "BTP & Infrastructures",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f0c3d?auto=format&fit=crop&w=1200&q=80",
    description: "Avancée des travaux de gros œuvre sur le complexe résidentiel et commercial.",
  },
  {
    id: "2",
    title: "Centre de Transformation Agro-industrielle",
    category: "Agroalimentaire",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    description: "Infrastructures de stockage et de traitement moderne des denrées alimentaires.",
  },
  {
    id: "3",
    title: "Hub Logistique Transfrontalier",
    category: "Négoce & Logistique",
    image: "https://images.unsplash.com/photo-1586528116493-a025325a1e37?auto=format&fit=crop&w=1200&q=80",
    description: "Plateforme de transit et de gestion des flux commerciaux régionaux.",
  },
  {
    id: "4",
    title: "Aménagement Urbain & Durable",
    category: "Infrastructures",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: "Intégration de normes environnementales strictes dans nos réalisations.",
  },
];

export default function ProjectGallery({ items = defaultItems }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#f8f2e5] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#a77b24]">
              <Images size={14} />
              Galerie Multimédia
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07111f]">
              Immersions Visuelles des Projets
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Découvrez en images les jalons, les chantiers et les infrastructures phares portés par ZARAS GLOBAL BUSINESS.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-[#d8b45b]/60"
            >
              {/* Image container */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Badge top */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#07111f]/80 backdrop-blur-md border border-white/15 text-[#d8b45b]">
                    {item.category}
                  </span>
                </div>

                {/* Expand icon top right */}
                <div className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={16} />
                </div>

                {/* Content bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-2 z-10 text-white">
                  <h3 className="text-xl font-black group-hover:text-[#d8b45b] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#07111f] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#d8b45b]/10 text-[#d8b45b] border border-[#d8b45b]/30">
                  {selectedImage.category}
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-slate-400 hover:text-white font-bold text-sm bg-white/10 px-4 py-2 rounded-xl transition"
                >
                  Fermer ✕
                </button>
              </div>

              <div className="relative h-[350px] sm:h-[450px] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">{selectedImage.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}