import { Router } from 'express';
import {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
} from '../controllers/news.controller';

// Middlewares
import { authenticateUser } from '../middlewares/auth.middleware';
import { requireRole } from '../middlewares/role.middleware';
import { validateBody } from '../middlewares/validate.middleware';

// Schémas
import {
  createNewsSchema,
  updateNewsSchema,
} from '../schemas/news.schema';

const router = Router();

// 🟢 Routes PUBLIQUES (Lecture seule)
router.get('/', getAllNews);
router.get('/:id', getNewsById);

// 🔒 Routes PROTÉGÉES (Réservées aux Admins)
router.post(
  '/',
  authenticateUser,
  requireRole(['admin', 'super_admin']),
  validateBody(createNewsSchema),
  createNews
);

router.put(
  '/:id',
  authenticateUser,
  requireRole(['admin', 'super_admin']),
  validateBody(updateNewsSchema),
  updateNews
);

router.delete(
  '/:id',
  authenticateUser,
  requireRole(['admin', 'super_admin']),
  deleteNews
);

export default router;