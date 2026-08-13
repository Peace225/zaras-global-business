// apps/web/components/news/NewsFilters.tsx
"use client";

import { Search, Filter } from "lucide-react";

interface NewsFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function NewsFilters({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: NewsFiltersProps) {
  return (
    <div className="space-y-6 mb-12">
      {/* Search Bar & Filter Header */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher une actualité..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d8b45b] focus:ring-2 focus:ring-[#d8b45b]/25 transition shadow-sm"
          />
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest shrink-0">
          <Filter size={14} className="text-[#a77b24]" />
          <span>Filtrer par catégorie</span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2.5 pt-1">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
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
    </div>
  );
}