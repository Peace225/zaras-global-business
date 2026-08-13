// apps/web/components/types/index.ts

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content?: string;
  href: string;
  image?: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  category: string;
  fileSize: string;
  fileType?: string;
  date: string;
  description: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: "En cours" | "Terminé" | "Planifié";
  location?: string;
  image?: string;
  description: string;
  date?: string;
}

export interface PartnerItem {
  id: string;
  organizationName: string;
  contactName: string;
  email: string;
  phone?: string;
  partnerType: string;
  sector: string;
  proposal: string;
  status?: "En attente" | "Approuvé" | "Rejeté";
  createdAt?: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "project" | "news" | "document" | "partner";
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "Super Admin" | "Editor" | "Viewer";
}