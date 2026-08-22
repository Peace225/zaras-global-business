"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

const navigation = [
  {
    label: "À propos",
    href: "/a-propos",
  },
  {
    label: "Activités",
    href: "/activites",
  },
  {
    label: "Projets",
    href: "/projets",
  },
  {
    label: "Actualités",
    href: "/actualites",
  },
  {
    label: "Partenaires",
    href: "/partenaires",
  },
  {
    label: "Investisseurs",
    href: "/investisseurs",
  },
  {
    label: "Documents",
    href: "/documents",
  },
];

const mobileLinks = [
  ...navigation,
  {
    label: "Médias",
    href: "/medias",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#07111f] shadow-sm">
              <span className="text-lg font-black text-[#d8b45b]">
                Z
              </span>
            </div>

            {/* Modification ici : retrait de 'hidden sm:block' */}
            <div>
              <div className="text-sm font-black leading-tight tracking-wide text-[#07111f]">
                ZARAS
              </div>

              <div className="text-[10px] font-bold tracking-[0.18em] text-[#a77b24]">
                GLOBAL BUSINESS
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    active
                      ? "text-[#a77b24]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#a77b24]"
                  }`}
                >
                  {item.label}

                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#c6a04a]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 xl:flex">
            <Link
              href="/partenariat"
              className="group flex items-center gap-2 rounded-full bg-[#07111f] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#10243b]"
            >
              Devenir partenaire

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-50 xl:hidden"
          >
            {mobileOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          
          {/* Overlay */}
          <button
            aria-label="Fermer le menu"
            onClick={closeMobileMenu}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
          />

          {/* Menu */}
          <aside className="absolute right-0 top-20 h-[calc(100vh-5rem)] w-full max-w-sm overflow-y-auto border-l border-slate-200 bg-white shadow-2xl">
            <div className="p-6">

              {/* Mobile header */}
              <div className="mb-6 rounded-2xl bg-[#07111f] p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8b45b]">
                  ZARAS
                </p>

                <h2 className="mt-1 text-xl font-black">
                  GLOBAL BUSINESS
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Construire aujourd'hui les opportunités
                  économiques de demain.
                </p>
              </div>

              {/* Links */}
              <nav className="space-y-1">
                {mobileLinks.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                        active
                          ? "bg-[#f8f2e5] text-[#a77b24]"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>

                      <ChevronDown
                        size={16}
                        className="-rotate-90"
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* CTA */}
              <div className="mt-7 border-t border-slate-200 pt-6">
                <Link
                  href="/partenariat"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#07111f] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#10243b]"
                >
                  Devenir partenaire

                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="mt-3 flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
                >
                  Nous contacter
                </Link>
              </div>

              {/* Mobile footer */}
              <div className="mt-8 text-center">
                <p className="text-xs text-slate-400">
                  © {new Date().getFullYear()} ZARAS GLOBAL BUSINESS
                </p>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}