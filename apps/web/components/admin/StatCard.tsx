// apps/web/components/admin/StatCard.tsx
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  description?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#d8b45b]/50 flex flex-col justify-between space-y-4">
      {/* Top Header: Title & Icon */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
          {title}
        </span>
        <div className="h-12 w-12 rounded-2xl bg-[#07111f] text-[#d8b45b] flex items-center justify-center shadow-md">
          <Icon size={22} />
        </div>
      </div>

      {/* Main Value & Trend */}
      <div className="space-y-2">
        <div className="text-3xl sm:text-4xl font-black text-[#07111f] tracking-tight">
          {value}
        </div>

        {(trend || description) && (
          <div className="flex items-center gap-2 pt-1 flex-wrap">
            {trend && (
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                  trend.isPositive
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-rose-50 text-rose-700 border border-rose-200"
                }`}
              >
                {trend.isPositive ? "↑ " : "↓ "}
                {trend.value}
              </span>
            )}
            {description && (
              <span className="text-xs text-slate-400 font-medium">
                {description}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}