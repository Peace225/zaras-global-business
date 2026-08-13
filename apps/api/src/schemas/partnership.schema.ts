import { z } from 'zod';

// Validation lors de la soumission publique
export const createPartnershipSchema = z.object({
  company_name: z.string().min(2, "Le nom de l'entreprise est requis"),
  contact_name: z.string().min(2, "Le nom du contact est requis"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  partnership_type: z.enum(['investment', 'strategic', 'sponsorship', 'other'], {
    errorMap: () => ({ message: 'Type de partenariat invalide' }),
  }),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

// Validation lors de la mise à jour du statut par un Admin
export const updatePartnershipStatusSchema = z.object({
  status: z.enum(['pending', 'under_review', 'accepted', 'rejected'], {
    errorMap: () => ({ message: 'Statut invalide' }),
  }),
  notes: z.string().optional(),
});