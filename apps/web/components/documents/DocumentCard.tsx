// apps/web/components/documents/DocumentCard.tsx
import { FileText, Download, ArrowRight, Calendar } from "lucide-react";

interface DocumentCardProps {
  title: string;
  category: string;
  fileSize: string;
  fileType?: string;
  date: string;
  description: string;
  href: string;
}

export default function DocumentCard({
  title,
  category,
  fileSize,
  fileType = "PDF",
  date,
  description,
  href,
}: DocumentCardProps) {
  return (
    <div className="group relative rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#d8b45b]/50 flex flex-col justify-between">
      <div className="space-y-6">
        {/* Top metadata tags */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#f8f2e5] text-[#a77b24] border border-[#d8b45b]/20">
            {category}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
              {fileType} • {fileSize}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-[#07111f] text-[#d8b45b] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
              <FileText size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#07111f] group-hover:text-[#a77b24] transition-colors leading-snug">
                {title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mt-1">
                <Calendar size={13} className="text-[#a77b24]" />
                <span>{date}</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed pt-1">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom Download / Action Link */}
      <div className="pt-6 mt-6 border-t border-slate-100">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-slate-50 group-hover:bg-[#07111f] text-slate-800 group-hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-wider"
        >
          <span className="flex items-center gap-2">
            <Download size={14} className="text-[#a77b24] group-hover:text-[#d8b45b]" />
            <span>Télécharger le document</span>
          </span>
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 text-[#a77b24] group-hover:text-[#d8b45b]" />
        </a>
      </div>
    </div>
  );
}