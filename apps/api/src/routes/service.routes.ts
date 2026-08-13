import { Router } from 'express';
import {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} from '../controllers/service.controller';

import { authenticateUser } from '../middlewares/auth.middleware';
import { requireRole } from '../middlewares/role.middleware';
import { validateBody } from '../middlewares/validate.middleware';

import {
  createServiceSchema,
  updateServiceSchema,
} from '../schemas/service.schema';

const router = Router();

// 🟢 Routes PUBLIQUES (Consultation)
router.get('/', getAllServices);
router.get('/:id', getServiceById);

// 🔒 Routes PROTÉGÉES (Administration)
router.post(
  '/',
  authenticateUser,
  requireRole(['admin', 'super_admin']),
  validateBody(createServiceSchema),
  createService
);

router.put(
  '/:id',
  authenticateUser,
  requireRole(['admin', 'super_admin']),
  validateBody(updateServiceSchema),
  updateService
);

router.delete(
  '/:id',
  authenticateUser,
  requireRole(['admin', 'super_admin']),
  deleteService
);

export default router;