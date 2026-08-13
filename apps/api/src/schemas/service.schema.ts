import { z } from 'zod';

export const createServiceSchema = z.object({
  title: z.string().min(3, "Le titre du service doit faire au moins 3 caractères"),
  slug: z.string().optional(),
  description: z.string().min(10, "La description doit contenir au moins 10 caractères"),
  icon_name: z.string().optional(), // Ex: "Building2", "Truck", "Sprout" (Lucide icons)
  image_url: z.string().url("URL de l'image invalide").optional(),
  is_active: z.boolean().default(true),
});

export const updateServiceSchema = createServiceSchema.partial();