// apps/web/pages/projets/[slug]/page.tsx
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, CheckCircle2, Building2, ArrowRight, Share2, ShieldCheck } from "lucide-react";

interface ProjectDetailProps {
  params: {
    slug: string;
  };
}

// Données simulées pour alimenter les projets par leur slug
const projectsData: Record<string, any> = {
  "complexe-residentiel-horizon": {
    title: "Complexe Résidentiel et Commercial Horizon",
    category: "BTP & Infrastructures",
    status: "En cours",
    location: "Abidjan, Côte d'Ivoire",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f0c3d?auto=format&fit=crop&w=1200&q=80",
    description: "Construction d'un complexe immobilier de haut standing intégrant des espaces résidentiels sécurisés et des surfaces commerciales modernes pour répondre à la demande croissante d'urbanisation durable.",
    date: "2025 - 2027",
    client: "Zaras Global Properties",
    budget: "Confidentiel / Investissement Stratégique",
    objectives: [
      "Développer des infrastructures résidentielles modernes aux normes internationales",
      "Intégrer des solutions éco-énergétiques et de gestion intelligente des eaux",
      "Stimuler le dynamisme commercial de la zone d'implantation",
    ],
    milestones: [
      { phase: "Études de faisabilité & Ingénierie", status: "Terminé", date: "Q1 2025" },
      { phase: "Gros œuvre & Fondations", status: "En cours", date: "Q3 2025 - Q2 2026" },
      { phase: "Second œuvre & Finitions", status: "Planifié", date: "Q3 2026 - Q2 2027" },
      { phase: "Livraison & Inauguration", status: "Planifié", date: "Fin 2027" },
    ],
  },
  "centre-transformation-agro": {
    title: "Centre de Transformation Agro-industrielle",
    category: "Agroalimentaire",
    status: "Terminé",
    location: "Bouaké, Côte d'Ivoire",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    description: "Mise en service d'une unité moderne de traitement, de conditionnement et de stockage des denrées alimentaires pour renforcer la chaîne de valeur agricole et garantir la sécurité alimentaire régionale.",
    date: "2024 - 2025",
    client: "Zaras Agro Division",
    budget: "Partenariat Public-Privé",
    objectives: [
      "Réduire les pertes post-récolte grâce à des équipements frigorifiques de pointe",
      "Soutenir les coopératives de producteurs locaux par des contrats d'achat garantis",
      "Valoriser la production locale sur les marchés nationaux et internationaux",
    ],
    milestones: [
      { phase: "Conception du modèle industriel", status: "Terminé", date: "2024" },
      { phase: "Installation des équipements de transformation", status: "Terminé", date: "Fin 2024" },
      { phase: "Mise en service & Tests opérationnels", status: "Terminé", date: "Q1 2025" },
    ],
  },
};

export default function ProjectDetailPage({ params }: ProjectDetailProps) {
  // Récupération du projet ou fallback par défaut si le slug n'existe pas dans le mock
  const project = projectsData[params.slug] || {
    title: "Projet Stratégique Zaras Global",
    category: "Développement & Investissement",
    status: "En cours",
    location: "Afrique de l'Ouest",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: "Projet d'envergure structurant porté par ZARAS GLOBAL BUSINESS dans le cadre de sa stratégie d'expansion et de développement d'infrastructures durables.",
    date: "2025 - 2028",
    client: "Zaras Global Business",
    budget: "Investissement Global",
    objectives: [
      "Création de valeur ajoutée économique pérenne",
      "Respect strict des normes environnementales et sociétales",
      "Synergie avec les institutions publiques et privées locales",
    ],
    milestones: [
      { phase: "Phase préparatoire", status: "Terminé", date: "2025" },
      { phase: "Exécution des travaux", status: "En cours", date: "2026" },
      { phase: "Finalisation", status: "Planifié", date: "2028" },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top Navigation / Breadcrumb Header */}
      <div className="bg-[#07111f] text-white py-12 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d8b45b] hover:text-white transition"
          >
            <ArrowLeft size={16} />
            <span>Retour à la liste des projets</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#d8b45b]/15 text-[#d8b45b] border border-[#d8b45b]/30">
                {project.category}
              </span>
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full border ${
                project.status === "Terminé"
                  ? "bg-emerald-950/85 text-emerald-300 border-emerald-500/30"
                  : "bg-amber-950/85 text-amber-300 border-amber-500/30"
              }`}>
                {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 font-semibold pt-2">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#d8b45b]" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#d8b45b]" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 size={16} className="text-[#d8b45b]" />
                <span>{project.client}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Image & Description */}
            <div className="lg:col-span-2 space-y-10">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 h-80 sm:h-[450px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-sm space-y-6">
                <h2 className="text-2xl font-black text-[#07111f]">Aperçu du Projet</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Objectives List */}
              <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-sm space-y-6">
                <h2 className="text-2xl font-black text-[#07111f]">Objectifs Stratégiques</h2>
                <div className="space-y-4">
                  {project.objectives.map((obj: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 size={20} className="text-[#a77b24] shrink-0 mt-0.5" />
                      <span className="text-sm font-bold text-slate-800 leading-relaxed">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Timeline & CTA */}
            <div className="space-y-8">
              
              {/* Timeline / Milestones */}
              <div className="rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm space-y-6">
                <h3 className="text-lg font-black text-[#07111f]">Jalons du Projet</h3>
                <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
                  {project.milestones.map((milestone: any, idx: number) => (
                    <div key={idx} className="flex items-start gap-4 relative pl-8">
                      <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full bg-[#d8b45b] ring-4 ring-white" />
                      <div className="space-y-1">
                        <div className="text-xs font-extrabold text-[#07111f]">{milestone.phase}</div>
                        <div className="text-[10px] font-bold text-slate-400">{milestone.date} — {milestone.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation & Partnership Card */}
              <div className="rounded-3xl bg-[#07111f] text-white p-8 shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[#d8b45b]/10 blur-2xl"></div>
                <div className="space-y-2 relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d8b45b]">Opportunité</span>
                  <h3 className="text-xl font-black text-white">Investir ou Participer</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Vous souhaitez en savoir plus sur ce chantier ou proposer un partenariat stratégique ?
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#d8b45b] hover:bg-[#c6a34e] text-[#07111f] font-black text-xs uppercase tracking-wider shadow-lg transition relative z-10"
                >
                  <span>Nous contacter</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}