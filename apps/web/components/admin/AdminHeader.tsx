// apps/web/components/admin/AdminHeader.tsx
"use client";

import { Bell, Search } from "lucide-react";

interface AdminHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function AdminHeader({
  title = "Tableau de bord",
  subtitle = "Bienvenue sur votre espace de gestion centralisé.",
}: AdminHeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 px-8 py-6 sticky top-0 z-30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
      {/* Title & Subtitle */}
      <div className="space-y-1">
        <h1 className="text-2xl font-black text-[#07111f] tracking-tight">{title}</h1>
        <p className="text-xs sm:text-sm text-slate-500 font-medium">{subtitle}</p>
      </div>

      {/* Right Actions: Search, Notifications, Profile */}
      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
        {/* Quick search input */}
        <div className="relative hidden md:block w-64">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search size={16} />
          </span>
          <input
            type="text"
            placeholder="Recherche rapide..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d8b45b] focus:ring-2 focus:ring-[#d8b45b]/20 transition"
          />
        </div>

        {/* Notification Bell */}
        <button
          aria-label="Notifications"
          className="relative h-10 w-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#a77b24] hover:border-[#d8b45b]/50 flex items-center justify-center transition shadow-sm"
        >
          <Bell size={18} />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#d8b45b] animate-pulse" />
        </button>

        {/* Admin Profile pill */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
          <div className="h-10 w-10 rounded-xl bg-[#07111f] text-[#d8b45b] flex items-center justify-center font-bold text-xs shadow-sm">
            ZA
          </div>
          <div className="hidden lg:block text-left">
            <p className="text-xs font-black text-[#07111f]">Super Admin</p>
            <p className="text-[10px] font-semibold text-slate-400">Zaras Global</p>
          </div>
        </div>
      </div>
    </header>
  );
}