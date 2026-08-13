// apps/web/components/forms/PartnershipForm.tsx
"use client";

import { useState } from "react";
import { Handshake, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

export default function PartnershipForm() {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    partnerType: "Institutionnel",
    sector: "BTP & Infrastructures",
    proposal: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Simulation d'un appel API pour l'enregistrement du partenariat
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (!formData.organizationName || !formData.contactName || !formData.email || !formData.proposal) {
        throw new Error("Veuillez remplir tous les champs obligatoires.");
      }

      setStatus("success");
      setFormData({
        organizationName: "",
        contactName: "",
        email: "",
        phone: "",
        partnerType: "Institutionnel",
        sector: "BTP & Infrastructures",
        proposal: "",
      });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Une erreur est survenue lors de l'envoi de votre dossier.");
    }
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-sm relative overflow-hidden">
      <div className="space-y-6 mb-8">
        <span className="inline-block px-3.5 py-1.5 bg-[#f8f2e5] text-[#a77b24] border border-[#d8b45b]/30 text-xs font-bold uppercase tracking-widest rounded-full">
          Espace Partenaire
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-[#07111f] tracking-tight">
          Soumettre une Proposition de Partenariat
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Unissez vos forces à ZARAS GLOBAL BUSINESS. Remplissez ce formulaire pour initier une alliance stratégique ou un projet d'investissement conjoint.
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center space-y-4 animate-fade-in">
          <div className="h-12 w-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 size={24} />
          </div>
          <h4 className="text-xl font-bold text-emerald-900">Dossier transmis avec succès !</h4>
          <p className="text-sm text-emerald-700 max-w-md mx-auto">
            Nous vous remercions pour votre intérêt. Notre comité des partenariats examinera votre proposition et vous contactera dans les plus brefs délais.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
          >
            Soumettre une autre proposition
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === "error" && (
            <div className="rounded-2xl bg-rose-50 border border-rose-200 p-4 flex items-center gap-3 text-rose-800 text-sm">
              <AlertCircle size={20} className="shrink-0 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="organizationName" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Nom de l'organisation / Entreprise <span className="text-[#a77b24]">*</span>
              </label>
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                required
                value={formData.organizationName}
                onChange={handleChange}
                placeholder="Ex: Global Invest Corp"
                className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d8b45b] focus:ring-2 focus:ring-[#d8b45b]/25 transition shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contactName" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Nom du référent <span className="text-[#a77b24]">*</span>
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                required
                value={formData.contactName}
                onChange={handleChange}
                placeholder="Ex: Dr. Marie Kassi"
                className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d8b45b] focus:ring-2 focus:ring-[#d8b45b]/25 transition shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Email professionnel <span className="text-[#a77b24]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex: direction@globalinvest.com"
                className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d8b45b] focus:ring-2 focus:ring-[#d8b45b]/25 transition shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ex: +225 07 00 00 00 00"
                className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d8b45b] focus:ring-2 focus:ring-[#d8b45b]/25 transition shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="partnerType" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Type de partenaire
              </label>
              <select
                id="partnerType"
                name="partnerType"
                value={formData.partnerType}
                onChange={handleChange}
                className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#d8b45b] focus:ring-2 focus:ring-[#d8b45b]/25 transition shadow-sm"
              >
                <option value="Institutionnel">Institution / Secteur Public</option>
                <option value="Financier">Fonds d'investissement / Banque</option>
                <option value="Technique">Expert Technique / Industriel</option>
                <option value="Commercial">Partenaire Commercial / Négoce</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="sector" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Secteur d'intérêt
              </label>
              <select
                id="sector"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#d8b45b] focus:ring-2 focus:ring-[#d8b45b]/25 transition shadow-sm"
              >
                <option value="BTP & Infrastructures">BTP & Infrastructures</option>
                <option value="Agroalimentaire">Agroalimentaire & Sécurité Alimentaire</option>
                <option value="Négoce">Négoce & Commerce International</option>
                <option value="Transport & Logistique">Transport & Logistique</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="proposal" className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Description de la proposition de partenariat <span className="text-[#a77b24]">*</span>
            </label>
            <textarea
              id="proposal"
              name="proposal"
              required
              rows={5}
              value={formData.proposal}
              onChange={handleChange}
              placeholder="Décrivez brièvement les synergies envisagées, les objectifs conjoints ou le projet ciblé..."
              className="w-full rounded-2xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d8b45b] focus:ring-2 focus:ring-[#d8b45b]/25 transition shadow-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#07111f] hover:bg-[#10243b] text-white font-black text-sm uppercase tracking-wider shadow-lg transition duration-300 disabled:opacity-70"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin text-[#d8b45b]" />
                <span>Transmission en cours...</span>
              </>
            ) : (
              <>
                <span>Soumettre le dossier</span>
                <Handshake size={18} className="text-[#d8b45b]" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}