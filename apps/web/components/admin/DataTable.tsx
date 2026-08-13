// apps/web/components/admin/DataTable.tsx
"use client";

import { useState } from "react";
import { Eye, Pencil, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

interface Column<T> {
  header: string;
  accessorKey: keyof T | string;
  cell?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onView?: (item: T) => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  searchKey?: keyof T;
}

export default function DataTable<T extends { id: string | number }>({
  columns,
  data,
  onView,
  onEdit,
  onDelete,
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 shadow-sm overflow-hidden">
      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              {columns.map((column, idx) => (
                <th key={idx} className="px-6 py-4">
                  {column.header}
                </th>
              ))}
              {(onView || onEdit || onDelete) && (
                <th className="px-6 py-4 text-right">Actions</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
            {currentData.length > 0 ? (
              currentData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50/70 transition-colors group"
                >
                  {columns.map((column, idx) => {
                    const value = (item as any)[column.accessorKey];
                    return (
                      <td key={idx} className="px-6 py-4 font-medium text-slate-900">
                        {column.cell ? column.cell(item) : value}
                      </td>
                    );
                  })}

                  {(onView || onEdit || onDelete) && (
                    <td className="px-6 py-4 text-right space-x-2">
                      {onView && (
                        <button
                          onClick={() => onView(item)}
                          title="Voir"
                          className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-[#07111f] hover:text-[#d8b45b] transition shadow-sm"
                        >
                          <Eye size={16} />
                        </button>
                      )}
                      {onEdit && (
                        <button
                          onClick={() => onEdit(item)}
                          title="Modifier"
                          className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-[#d8b45b] hover:text-[#07111f] transition shadow-sm"
                        >
                          <Pencil size={16} />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(item)}
                          title="Supprimer"
                          className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition shadow-sm"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-6 py-12 text-center text-slate-400 font-medium"
                >
                  Aucune donnée disponible pour le moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/50 flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>
          Affichage de <strong className="text-slate-900">{data.length > 0 ? startIndex + 1 : 0}</strong> à{" "}
          <strong className="text-slate-900">
            {Math.min(startIndex + itemsPerPage, data.length)}
          </strong>{" "}
          sur <strong className="text-slate-900">{data.length}</strong> éléments
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:border-[#d8b45b] disabled:opacity-40 transition shadow-sm"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="px-3 py-1 font-bold text-slate-900">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:border-[#d8b45b] disabled:opacity-40 transition shadow-sm"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}