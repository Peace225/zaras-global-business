// apps/web/components/home/AboutPreview.tsx
import Link from "next/link";
import { ArrowRight, CheckCircle2, Target } from "lucide-react";

export default function AboutPreview() {
  const highlights = [
    "Vision stratégique axée sur la création de valeur durable",
    "Expertise sectorielle pointue (mines, industrie, infrastructures)",
    "Gouvernance rigoureuse et standards internationaux",
    "Partenariats solides avec les acteurs publics et privés",
  ];

  return (
    <section className="py-24 bg-white text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#d8b45b]/20 to-[#07111f]/10 rounded-3xl blur-2xl -z-10"></div>
              
              <div className="rounded-3xl bg-[#07111f] p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-slate-800">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d8b45b_1px,transparent_1px)] [background-size:20px_20px]"></div>

                <div className="relative z-10 space-y-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d8b45b]">
                    <Target size={14} />
                    Notre ADN
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    Propulser les grands projets de développement en Afrique.
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    ZARAS GLOBAL BUSINESS se positionne comme un catalyseur économique incontournable, alliant vision macroéconomique et agilité opérationnelle sur le terrain.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                    <div className="space-y-1">
                      <div className="text-2xl sm:text-3xl font-black text-[#d8b45b]">100%</div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Engagement Local</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl sm:text-3xl font-black text-[#d8b45b]">Standard</div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">International</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8f2e5] border border-[#d8b45b]/30 text-[#a77b24] text-xs font-bold uppercase tracking-widest">
              À propos du groupe
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07111f] leading-tight">
              Un leadership fondé sur l'excellence et la pérennité.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              En tant que conglomérat multisectoriel, ZARAS GLOBAL BUSINESS structure et pilote des initiatives d'envergure. Notre approche intègre l'ensemble de la chaîne de valeur pour garantir un impact socio-économique mesurable et durable.
            </p>

            {/* Highlights List */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f8f2e5] text-[#a77b24]">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            {/* Action button */}
            <div className="pt-4">
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-3 rounded-xl bg-[#07111f] px-7 py-4 text-sm font-black text-white shadow-lg hover:bg-[#10243b] transition duration-300"
              >
                <span>En savoir plus sur notre vision</span>
                <ArrowRight size={16} className="text-[#d8b45b]" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}