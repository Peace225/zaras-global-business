// apps/web/components/admin/RecentActivity.tsx
import { FileText, Newspaper, FolderKanban, Handshake, Clock } from "lucide-react";

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "project" | "news" | "document" | "partner";
}

interface RecentActivityProps {
  activities?: ActivityItem[];
}

const defaultActivities: ActivityItem[] = [
  {
    id: "1",
    title: "Nouveau projet ajouté",
    description: "Complexe Résidentiel Horizon a été mis à jour.",
    time: "Il y a 10 minutes",
    type: "project",
  },
  {
    id: "2",
    title: "Demande de partenariat",
    description: "Global Invest Corp a soumis un dossier d'alliance.",
    time: "Il y a 1 heure",
    type: "partner",
  },
  {
    id: "3",
    title: "Actualité publiée",
    description: "Lancement des travaux du Hub Logistique Transfrontalier.",
    time: "Il y a 3 heures",
    type: "news",
  },
  {
    id: "4",
    title: "Rapport financier mis en ligne",
    description: "Le rapport annuel 2025 est désormais disponible.",
    time: "Il y a 1 jour",
    type: "document",
  },
];

const typeIcons = {
  project: FolderKanban,
  news: Newspaper,
  document: FileText,
  partner: Handshake,
};

export default function RecentActivity({ activities = defaultActivities }: RecentActivityProps) {
  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-xl font-black text-[#07111f] tracking-tight">Activités Récentes</h3>
          <p className="text-xs text-slate-500 font-medium">Dernières actions enregistrées sur la plateforme</p>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#f8f2e5] text-[#a77b24] border border-[#d8b45b]/30">
          Temps réel
        </span>
      </div>

      <div className="space-y-4">
        {activities.map((item) => {
          const Icon = typeIcons[item.type] || FileText;
          return (
            <div
              key={item.id}
              className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-[#d8b45b]/40 hover:bg-white transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-xl bg-[#07111f] text-[#d8b45b] flex items-center justify-center shrink-0 shadow-sm">
                <Icon size={18} />
              </div>
              <div className="flex-grow min-w-0 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-black text-[#07111f] truncate">{item.title}</h4>
                  <span className="text-[10px] font-semibold text-slate-400 shrink-0 flex items-center gap-1">
                    <Clock size={12} />
                    {item.time}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}