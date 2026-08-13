import { Router } from 'express';
import {
  createPartnership,
  getAllPartnerships,
  getPartnershipById,
  updatePartnershipStatus,
  deletePartnership,
} from '../controllers/partnership.controller';

// Import des middlewares
import { authenticateUser } from '../middlewares/auth.middleware';
import { requireRole } from '../middlewares/role.middleware';
import { validateBody } from '../middlewares/validate.middleware';

// Import des schémas de validation
import {
  createPartnershipSchema,
  updatePartnershipStatusSchema,
} from '../schemas/partnership.schema';

const router = Router();

// 🟢 Route PUBLIQUE : Soumettre un formulaire depuis le site
router.post(
  '/',
  validateBody(createPartnershipSchema),
  createPartnership
);

// 🔒 Routes PROTÉGÉES : Réservées aux Administrateurs
router.use(authenticateUser); // Exige une connexion pour toutes les routes ci-dessous
router.use(requireRole(['admin', 'super_admin'])); // Exige le rôle Admin

router.get('/', getAllPartnerships);
router.get('/:id', getPartnershipById);
router.patch(
  '/:id/status',
  validateBody(updatePartnershipStatusSchema),
  updatePartnershipStatus
);
router.delete('/:id', deletePartnership);

export default router;