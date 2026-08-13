// apps/web/components/projects/ProjectCard.tsx
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  status: string;
  description: string;
  href: string;
}

export default function ProjectCard({
  title,
  category,
  location,
  status,
  description,
  href,
}: ProjectCardProps) {
  return (
    <div className="group relative rounded-3xl bg-slate-50 border border-slate-200/80 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#d8b45b]/50 flex flex-col justify-between">
      <div className="space-y-6">
        {/* Top meta tags */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-slate-200 text-[#a77b24]">
            {category}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Clock size={14} className="text-[#a77b24]" />
            <span>{status}</span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h3 className="text-xl font-black text-[#07111f] group-hover:text-[#a77b24] transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 pt-2">
          <MapPin size={14} className="text-[#a77b24]" />
          <span>{location}</span>
        </div>
      </div>

      {/* Bottom Link */}
      <div className="pt-8 mt-6 border-t border-slate-200/60">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#07111f] group-hover:text-[#a77b24] transition-colors"
        >
          <span>Découvrir le projet</span>
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}