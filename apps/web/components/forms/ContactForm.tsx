// apps/web/components/forms/ContactForm.tsx
"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Partenariat Stratégique",
    message: "",
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
      // Simulation d'un appel API (remplacer par l'endpoint réel de l'application)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Validation basique
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Veuillez remplir tous les champs obligatoires.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "Partenariat Stratégique",
        message: "",
      });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Une erreur est survenue lors de l'envoi du message.");
    }
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-sm relative overflow-hidden">
      <div className="space-y-6 mb-8">
        <span className="inline-block px-3.5 py-1.5 bg-[#f8f2e5] text-[#a77b24] border border-[#d8b45b]/30 text-xs font-bold uppercase tracking-widest rounded-full">
          Formulaire de Contact
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-[#07111f] tracking-tight">
          Envoyez-nous un message
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Notre équipe de direction et nos experts sectoriels vous répondent dans les plus brefs délais.
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center space-y-4 animate-fade-in">
          <div className="h-12 w-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 size={24} />
          </div>
          <h4 className="text-xl font-bold text-emerald-900">Message envoyé avec succès !</h4>
          <p className="text-sm text-emerald-700 max-w-md mx-auto">
            Merci pour votre intérêt. Votre demande a bien été transmise à nos services compétents.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
          >
            Envoyer un autre message
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
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Nom complet <span className="text-[#a77b24]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: Jean Dupont"
                className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d8b45b] focus:ring-2 focus:ring-[#d8b45b]/25 transition shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Adresse Email <span className="text-[#a77b24]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex: jean.dupont@example.com"
                className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d8b45b] focus:ring-2 focus:ring-[#d8b45b]/25 transition shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Objet de la demande
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#d8b45b] focus:ring-2 focus:ring-[#d8b45b]/25 transition shadow-sm"
            >
              <option value="Partenariat Stratégique">Partenariat Stratégique & Institutionnel</option>
              <option value="Investissement">Opportunités d'Investissement</option>
              <option value="Projets BTP">Projets BTP & Infrastructures</option>
              <option value="Agroalimentaire">Agroalimentaire & Négoce</option>
              <option value="Autre">Autre demande</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Message <span className="text-[#a77b24]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Détaillez votre projet ou votre demande..."
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
                <span>Envoi en cours...</span>
              </>
            ) : (
              <>
                <span>Envoyer le message</span>
                <Send size={16} className="text-[#d8b45b]" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}