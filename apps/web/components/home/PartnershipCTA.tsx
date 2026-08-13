// apps/web/components/home/PartnershipCTA.tsx
import Link from "next/link";
import { ArrowRight, Handshake, ShieldCheck, Mail, Phone, Globe } from "lucide-react";

export default function PartnershipCTA() {
  return (
    <section className="py-24 bg-[#07111f] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background pattern & glow effects */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d8b45b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#d8b45b]/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Benefits */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d8b45b]">
              <Handshake size={14} />
              Alliance Stratégique & Croissance
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Façonnons l'Avenir Ensemble avec <span className="text-[#d8b45b]">ZARAS GLOBAL BUSINESS</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Que vous soyez un investisseur institutionnel, un acteur public ou un partenaire technique, unissez vos forces à un conglomérat engagé dans l'excellence opérationnelle et le développement durable en Afrique.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="h-8 w-8 rounded-xl bg-[#d8b45b]/20 text-[#d8b45b] flex items-center justify-center shrink-0 font-bold">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Gouvernance Rigoureuse</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Standards internationaux et transparence totale.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="h-8 w-8 rounded-xl bg-[#d8b45b]/20 text-[#d8b45b] flex items-center justify-center shrink-0 font-bold">
                  <Globe size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Impact Régional</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Projets structurants à fort rendement économique.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/partenariat"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#d8b45b] text-[#07111f] font-extrabold text-sm shadow-lg hover:bg-[#e2c16e] transition"
              >
                <span>Devenir Partenaire Officiel</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition"
              >
                Prendre Rendez-vous
              </Link>
            </div>
          </div>

          {/* Right Column: Direct Contact Card / Summary */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-10 border border-white/15 backdrop-blur-xl shadow-2xl space-y-6">
                <div className="pb-6 border-b border-white/10 space-y-2">
                  <p className="text-xs uppercase tracking-widest text-[#d8b45b] font-bold">Contact Direct Direction</p>
                  <h3 className="text-xl font-black text-white">Discutez de votre ambition</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="h-10 w-10 rounded-xl bg-[#d8b45b]/20 flex items-center justify-center text-[#d8b45b] shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Email institutionnel</p>
                      <p className="text-sm font-bold text-white mt-0.5">contact@zarasglobalbusiness.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="h-10 w-10 rounded-xl bg-[#d8b45b]/20 flex items-center justify-center text-[#d8b45b] shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Siège & Hubs</p>
                      <p className="text-sm font-bold text-white mt-0.5">Abidjan & Bangui</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs tracking-wider uppercase transition border border-white/10"
                  >
                    <span>Accéder au formulaire de contact</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}