// apps/web/components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#07111f] text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 shadow-sm border border-white/10">
                <span className="text-lg font-black text-[#d8b45b]">Z</span>
              </div>
              <div>
                <div className="text-sm font-black leading-tight tracking-wide text-white">
                  ZARAS
                </div>
                <div className="text-[10px] font-bold tracking-[0.18em] text-[#d8b45b]">
                  GLOBAL BUSINESS
                </div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Conglomérat international et investisseur stratégique. Nous bâtissons l'avenir à travers des projets d'envergure dans les secteurs du BTP, de l'agroalimentaire, du négoce et des services.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#d8b45b] shrink-0" />
                <span>Bangui, République Centrafricaine</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#d8b45b] shrink-0" />
                <span>contact@zarasglobal.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8b45b] mb-4">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/a-propos" className="text-slate-300 hover:text-[#d8b45b] transition">
                  A propos
                </Link>
              </li>
              <li>
                <Link href="/activites" className="text-slate-300 hover:text-[#d8b45b] transition">
                  Activités
                </Link>
              </li>
              <li>
                <Link href="/projets" className="text-slate-300 hover:text-[#d8b45b] transition">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="text-slate-300 hover:text-[#d8b45b] transition">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/partenaires" className="text-slate-300 hover:text-[#d8b45b] transition">
                  Partenaires
                </Link>
              </li>
            </ul>
          </div>

          {/* Investor Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8b45b] mb-4">
              Investisseurs
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/investisseurs" className="text-slate-300 hover:text-[#d8b45b] transition">
                  Espace Investisseurs
                </Link>
              </li>
              <li>
                <Link href="/documents" className="text-slate-300 hover:text-[#d8b45b] transition">
                  Documents & Rapports
                </Link>
              </li>
              <li>
                <Link href="/partenariat" className="text-slate-300 hover:text-[#d8b45b] transition">
                  Devenir partenaire
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-[#d8b45b] transition">
                  Contact direct
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8b45b] mb-4">
              Restez informés
            </h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Inscrivez-vous pour recevoir nos dernières actualités institutionnelles et financières.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full rounded-xl bg-white/5 border border-slate-700 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-[#d8b45b] focus:outline-none transition"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#d8b45b] px-4 py-2.5 text-sm font-bold text-[#07111f] transition hover:bg-[#e2c16e]"
              >
                <span>S'inscrire</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} ZARAS GLOBAL BUSINESS. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <Link href="/mentions-legales" className="hover:text-slate-400 transition">Mentions Légales</Link>
            <Link href="/confidentialite" className="hover:text-slate-400 transition">Politique de Confidentialité</Link>
            <Link href="/cookies" className="hover:text-slate-400 transition">Gestion des Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}