// apps/web/pages/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2, Clock, Globe2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "Demande générale",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfos = [
    {
      icon: MapPin,
      title: "Siège Social & Régional",
      details: ["Abidjan, Côte d'Ivoire", "Boulevard principal / Centre d'affaires"],
    },
    {
      icon: Phone,
      title: "Lignes Téléphoniques",
      details: ["+225 07 00 00 00 00", "Support direct : Lun - Ven, 8h - 18h"],
    },
    {
      icon: Mail,
      title: "Adresses Email",
      details: ["contact@zaras-global.com", "direction@zaras-global.com"],
    },
    {
      icon: Clock,
      title: "Horaires d'Ouverture",
      details: ["Lundi au Vendredi : 08:00 - 18:00", "Samedi : Sur rendez-vous"],
    },
  ];

  const offices = [
    {
      city: "Abidjan",
      country: "Côte d'Ivoire",
      role: "Siège Opérationnel & Hub Afrique de l'Ouest",
      address: "Plateau / Cocody Business District",
    },
    {
      city: "Casablanca",
      country: "Maroc",
      role: "Bureau de Liaison Financier & Partenariats",
      address: "Marina Business Center",
    },
    {
      city: "Bangui",
      country: "République Centrafricaine",
      role: "Représentation Institutionnelle & Projets",
      address: "Centre-ville / Avenue des Martyrs",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-[#07111f] text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d8b45b]/15 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d8b45b]">
              <Mail size={14} />
              Contact & Relations
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
              Parlons de vos projets et de nos opportunités de collaboration.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Notre équipe de direction et nos services spécialisés se tiennent à votre disposition pour répondre à toutes vos demandes institutionnelles, commerciales ou de presse.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfos.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm space-y-4 hover:shadow-lg hover:border-[#d8b45b]/50 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-2xl bg-[#07111f] text-[#d8b45b] flex items-center justify-center shadow-md border border-[#d8b45b]/30">
                    <Icon size={22} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-[#07111f]">{info.title}</h3>
                    {info.details.map((detail, dIdx) => (
                      <p key={dIdx} className="text-xs sm:text-sm text-slate-600 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Form & Office Locations Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Contact Form */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-xl">
              {submitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="h-20 w-20 rounded-full bg-[#d8b45b]/15 text-[#a77b24] flex items-center justify-center mx-auto border border-[#d8b45b]/30">
                    <CheckCircle2 size={40} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-[#07111f]">Message envoyé avec succès !</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Nous vous remercions de nous avoir contactés. Un membre de notre équipe traitera votre demande et vous répondra dans les plus brefs délais.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: "", email: "", phone: "", subject: "Demande générale", message: "" });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#07111f] text-[#d8b45b] font-bold text-xs uppercase tracking-wider hover:bg-[#d8b45b] hover:text-[#07111f] transition shadow-md"
                  >
                    <span>Envoyer un autre message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#a77b24]">Formulaire de contact</span>
                    <h3 className="text-2xl font-black text-[#07111f]">Écrivez-nous directement</h3>
                    <p className="text-xs text-slate-600">Remplissez le formulaire ci-dessous pour transmettre votre requête à notre secrétariat.</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nom & Prénom</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ex: Marie Diallo"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#d8b45b] shadow-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Adresse Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marie.diallo@exemple.com"
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
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Objet de la demande</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#d8b45b] shadow-sm"
                    >
                      <option value="Demande générale">Demande d'information générale</option>
                      <option value="Partenariat">Proposition de partenariat</option>
                      <option value="Investissement">Relations Investisseurs</option>
                      <option value="Presse">Service Presse & Médias</option>
                      <option value="Carrière">Opportunités de carrière</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Votre Message</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Détaillez votre demande ou votre projet ici..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#d8b45b] shadow-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#07111f] hover:bg-[#d8b45b] text-[#d8b45b] hover:text-[#07111f] font-black text-xs uppercase tracking-wider shadow-lg transition duration-300"
                  >
                    <span>Envoyer le message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Offices & Regional Presence */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#a77b24]">Implantations Régionales</span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#07111f] tracking-tight">
                  Nos bureaux à travers la région
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Zaras Global Business déploie ses activités et ses équipes à travers plusieurs hubs stratégiques pour être au plus près de ses partenaires et clients.
                </p>
              </div>

              <div className="space-y-6">
                {offices.map((office, idx) => (
                  <div
                    key={idx}
                    className="rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 space-y-3 shadow-sm hover:border-[#d8b45b]/50 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-[#07111f] text-[#d8b45b] flex items-center justify-center font-black text-xs">
                          {office.city.substring(0, 3).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="text-lg font-black text-[#07111f]">{office.city} <span className="text-xs font-bold text-slate-400">({office.country})</span></h4>
                        </div>
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#d8b45b]/10 text-[#a77b24] border border-[#d8b45b]/30">
                        Bureau officiel
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-700 pt-1">
                      {office.role}
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
                      <MapPin size={13} className="text-[#a77b24]" />
                      <span>{office.address}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl bg-[#07111f] text-white p-8 space-y-4 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[#d8b45b]/10 blur-2xl"></div>
                <h3 className="text-xl font-black text-white relative z-10">Collaboration institutionnelle</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed relative z-10">
                  Les ministères, ambassades et organisations internationales peuvent contacter directement notre direction des relations institutionnelles à <span className="text-[#d8b45b] font-bold">institutionnel@zaras-global.com</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}