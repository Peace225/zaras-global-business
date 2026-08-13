// apps/web/pages/partenariat/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Handshake, Building2, TrendingUp, ShieldCheck, Send, CheckCircle2, ArrowRight, Landmark } from "lucide-react";

export default function PartenariatPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    partnershipType: "Institutionnel",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const partnershipPillars = [
    {
      title: "Partenariat Institutionnel",
      description: "Collaboration avec les agences gouvernementales, collectivités et organisations régionales pour le développement des infrastructures.",
      icon: Landmark,
    },
    {
      title: "Alliances Techniques & BTP",
      description: "Synergies avec des bureaux d'études, entreprises de construction et experts techniques pour l'exécution des grands chantiers.",
      icon: Building2,
    },
    {
      title: "Co-investissement Financier",
      description: "Fonds d'investissement, banques et institutions financières participant au financement de nos portefeuilles de projets.",
      icon: TrendingUp,
    },
    {
      title: "Négoce & Agro-industrie",
      description: "Partenaires de la chaîne de valeur agricole, producteurs et distributeurs pour l'optimisation des flux logistiques.",
      icon: Handshake,
    },
  ];

  const benefits = [
    "Accès à un portefeuille de projets structurants à fort impact économique en Afrique de l'Ouest",
    "Gouvernance transparente et respect strict des normes internationales de conformité",
    "Partage d'expertise, transfert de compétences et co-création de valeur pérenne",
    "Réseau relationnel solide et ancrage stratégique dans la sous-région",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-[#07111f] text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d8b45b]/15 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d8b45b]">
              <Handshake size={14} />
              Développer des synergies d'avenir
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
              Proposer un partenariat stratégique avec Zaras Global Business.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Nous croyons fermement que les grands succès se bâtissent sur des alliances solides, fondées sur la confiance mutuelle, la rigueur et l'excellence opérationnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Pillars */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#a77b24]">Domaines de Collaboration</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#07111f] tracking-tight">
              Quels types de partenariats recherchons-nous ?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Nos opportunités s'adressent aux acteurs désireux de participer activement à la transformation économique de la région.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm hover:shadow-xl hover:border-[#d8b45b]/50 transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-6">
                    <div className="h-14 w-14 rounded-2xl bg-[#07111f] text-[#d8b45b] flex items-center justify-center shadow-md border border-[#d8b45b]/30 group-hover:scale-110 transition-transform">
                      <Icon size={26} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-black text-[#07111f] group-hover:text-[#a77b24] transition-colors leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Zaras Partnerships
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits & Submission Form Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Why Partner */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#a77b24]">Avantages & Valeurs</span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#07111f] tracking-tight">
                  Pourquoi s'allier avec notre groupe ?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  En devenant partenaire de Zaras Global Business, vous bénéficiez d'un écosystème dynamique et d'un accompagnement sur mesure pour vos projets d'expansion.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 size={20} className="text-[#a77b24] shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-slate-800 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl bg-[#07111f] text-white p-8 space-y-4 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[#d8b45b]/10 blur-2xl"></div>
                <h3 className="text-xl font-black text-white relative z-10">Besoin d'un contact direct ?</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed relative z-10">
                  Notre comité des partenariats est joignable directement par email à <span className="text-[#d8b45b] font-bold">partenariats@zaras-global.com</span>
                </p>
              </div>
            </div>

            {/* Right Column: Submission Form */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-xl">
              {submitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="h-20 w-20 rounded-full bg-[#d8b45b]/15 text-[#a77b24] flex items-center justify-center mx-auto border border-[#d8b45b]/30">
                    <CheckCircle2 size={40} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-[#07111f]">Proposition transmise avec succès !</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Nous vous remercions pour votre intérêt. Notre direction des relations stratégiques examinera votre dossier et vous contactera dans les plus brefs délais.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: "", companyName: "", email: "", phone: "", partnershipType: "Institutionnel", message: "" });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#07111f] text-[#d8b45b] font-bold text-xs uppercase tracking-wider hover:bg-[#d8b45b] hover:text-[#07111f] transition shadow-md"
                  >
                    <span>Soumettre une autre proposition</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#a77b24]">Formulaire en ligne</span>
                    <h3 className="text-2xl font-black text-[#07111f]">Soumettez votre projet de partenariat</h3>
                    <p className="text-xs text-slate-600">Remplissez les informations ci-dessous pour initier un échange avec notre équipe.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nom & Prénom</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ex: Jean Kouassi"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#d8b45b] shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nom de l'Entreprise / Organisation</label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Ex: AfriCorp Solutions"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#d8b45b] shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Adresse Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@entreprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#d8b45b] shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Téléphone</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+225 07 00 00 00 00"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#d8b45b] shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Type de Partenariat</label>
                    <select
                      value={formData.partnershipType}
                      onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#d8b45b] shadow-sm"
                    >
                      <option value="Institutionnel">Partenariat Institutionnel</option>
                      <option value="Technique & BTP">Alliances Techniques & BTP</option>
                      <option value="Financier">Co-investissement Financier</option>
                      <option value="Négoce & Agro">Négoce & Agro-industrie</option>
                      <option value="Autre">Autre proposition stratégique</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Description de votre proposition</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Présentez brièvement votre structure, vos objectifs de collaboration et la nature du projet..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#d8b45b] shadow-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#07111f] hover:bg-[#d8b45b] text-[#d8b45b] hover:text-[#07111f] font-black text-xs uppercase tracking-wider shadow-lg transition duration-300"
                  >
                    <span>Envoyer la proposition</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}