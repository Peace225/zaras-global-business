// apps/web/components/projects/ProjectStatus.tsx
import { Clock, CheckCircle2, PlayCircle } from "lucide-react";

interface ProjectStatusProps {
  status: string;
  className?: string;
}

export default function ProjectStatus({ status, className = "" }: ProjectStatusProps) {
  const normalizedStatus = status.toLowerCase();

  let badgeStyles = "bg-slate-100 text-slate-700 border-slate-200";
  let dotColor = "bg-slate-400";

  if (normalizedStatus.includes("cours") || normalizedStatus.includes("active")) {
    badgeStyles = "bg-[#f8f2e5] text-[#a77b24] border-[#d8b45b]/30";
    dotColor = "bg-[#d8b45b]";
  } else if (normalizedStatus.includes("terminé") || normalizedStatus.includes("achevé")) {
    badgeStyles = "bg-emerald-50 text-emerald-700 border-emerald-200";
    dotColor = "bg-emerald-500";
  } else if (normalizedStatus.includes("planification") || normalizedStatus.includes("étude")) {
    badgeStyles = "bg-blue-50 text-blue-700 border-blue-200";
    dotColor = "bg-blue-500";
  }

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider ${badgeStyles} ${className}`}
    >
      <span className={`h-2 w-2 rounded-full ${dotColor} animate-pulse`} />
      <span>{status}</span>
    </div>
  );
}