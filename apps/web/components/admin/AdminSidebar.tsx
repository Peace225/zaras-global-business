// apps/web/components/admin/AdminSidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Newspaper,
  FileText,
  Handshake,
  Settings,
  LogOut,
} from "lucide-react";

const navigationItems = [
  { name: "Tableau de bord", href: "/admin", icon: LayoutDashboard },
  { name: "Projets", href: "/admin/projects", icon: FolderKanban },
  { name: "Actualités", href: "/admin/news", icon: Newspaper },
  { name: "Documents", href: "/admin/documents", icon: FileText },
  { name: "Partenaires", href: "/admin/partners", icon: Handshake },
  { name: "Paramètres", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-[#07111f] text-slate-300 border-r border-slate-800 flex flex-col justify-between min-h-screen p-6 sticky top-0">
      <div className="space-y-8">
        {/* Brand Header */}
        <Link href="/admin" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 shadow-sm border border-white/10">
            <span className="text-lg font-black text-[#d8b45b]">Z</span>
          </div>
          <div>
            <div className="text-sm font-black leading-tight tracking-wide text-white">
              ZARAS ADMIN
            </div>
            <div className="text-[10px] font-bold tracking-[0.18em] text-[#d8b45b]">
              PORTAIL DE GESTION
            </div>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="space-y-1.5">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-[#d8b45b] text-[#07111f] shadow-lg shadow-[#d8b45b]/10"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={18} className={isActive ? "text-[#07111f]" : "text-[#d8b45b]"} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / Logout */}
      <div className="pt-6 border-t border-slate-800/80 space-y-4">
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/5">
          <div className="h-9 w-9 rounded-xl bg-[#d8b45b]/20 flex items-center justify-center text-[#d8b45b] font-bold text-xs shrink-0">
            AD
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-white truncate">Administrateur</p>
            <p className="text-[10px] text-slate-400 truncate">admin@zarasglobal.com</p>
          </div>
        </div>

        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all duration-300"
        >
          <LogOut size={16} />
          <span>Quitter l'administration</span>
        </Link>
      </div>
    </aside>
  );
}