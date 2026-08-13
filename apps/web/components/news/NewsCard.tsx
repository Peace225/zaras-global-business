// apps/web/components/news/NewsCard.tsx
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface NewsCardProps {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  href: string;
  image?: string;
}

export default function NewsCard({
  title,
  category,
  date,
  excerpt,
  href,
  image,
}: NewsCardProps) {
  return (
    <article className="group relative rounded-3xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#d8b45b]/50 flex flex-col justify-between overflow-hidden">
      {/* Optional Header Image */}
      {image && (
        <div className="relative h-52 w-full overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
        </div>
      )}

      {/* Content Container */}
      <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
        <div className="space-y-6">
          {/* Top meta tags */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#f8f2e5] text-[#a77b24] border border-[#d8b45b]/20">
              {category}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <Calendar size={14} className="text-[#a77b24]" />
              <span>{date}</span>
            </div>
          </div>

          {/* Title & Excerpt */}
          <div className="space-y-3">
            <h3 className="text-xl font-black text-[#07111f] group-hover:text-[#a77b24] transition-colors leading-snug">
              {title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
              {excerpt}
            </p>
          </div>
        </div>

        {/* Bottom Link */}
        <div className="pt-6 mt-6 border-t border-slate-100">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#07111f] group-hover:text-[#a77b24] transition-colors"
          >
            <span>Lire l'article</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}