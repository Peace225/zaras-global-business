import { z } from 'zod';

// Schéma pour la création d'un article
export const createNewsSchema = z.object({
  title: z.string().min(3, 'Le titre doit contenir au moins 3 caractères'),
  slug: z.string().optional(),
  summary: z.string().min(5, 'Le résumé doit faire au moins 5 caractères').optional(),
  content: z.string().min(10, 'Le contenu de l\'article est obligatoire'),
  category: z.enum(['press', 'event', 'article', 'announcement'], {
    errorMap: () => ({ message: 'Catégorie invalide' }),
  }).default('article'),
  cover_image_url: z.string().url('URL de l\'image invalide').optional(),
  published: z.boolean().default(true),
});

// Schéma pour la mise à jour d'un article (tous les champs deviennent optionnels)
export const updateNewsSchema = createNewsSchema.partial();