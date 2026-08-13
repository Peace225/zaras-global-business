// apps/web/components/layout/MobileMenu.tsx
"use client";

import Link from "next/link";
import { X, ChevronDown, ArrowRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavItem[];
  isActive: (href: string) => boolean;
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
  isActive,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      {/* Overlay */}
      <button
        type="button"
        aria-label="Fermer le menu"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over / Menu Panel */}
      <aside className="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto border-l border-slate-200 bg-white shadow-2xl flex flex-col justify-between">
        <div className="p-6">
          {/* Header inside mobile menu */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#07111f] shadow-sm">
                <span className="text-base font-black text-[#d8b45b]">Z</span>
              </div>
              <div>
                <div className="text-xs font-black leading-tight tracking-wide text-[#07111f]">
                  ZARAS
                </div>
                <div className="text-[9px] font-bold tracking-[0.18em] text-[#a77b24]">
                  GLOBAL BUSINESS
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-50"
            >
              <X size={20} />
            </button>
          </div>

          {/* Tagline Card */}
          <div className="mb-6 rounded-2xl bg-[#07111f] p-4 text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d8b45b]">
              ZARAS
            </p>
            <h2 className="mt-0.5 text-base font-black">
              GLOBAL BUSINESS
            </h2>
            <p className="mt-1.5 text-xs leading-5 text-slate-300">
              Construire aujourd'hui les opportunités économiques de demain.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {links.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-[#f8f2e5] text-[#a77b24]"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown size={16} className="-rotate-90 opacity-60" />
                </Link>
              );
            })}
          </nav>

          {/* CTA Section */}
          <div className="mt-6 border-t border-slate-200 pt-6 space-y-3">
            <Link
              href="/partenariat"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#07111f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#10243b]"
            >
              <span>Devenir partenaire</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Footer inside drawer */}
        <div className="p-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} ZARAS GLOBAL BUSINESS
          </p>
        </div>
      </aside>
    </div>
  );
}