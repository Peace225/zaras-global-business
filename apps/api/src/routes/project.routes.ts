import { Router } from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} from '../controllers/project.controller';
import { authenticateUser } from '../middlewares/auth.middleware';

const router = Router();

// 🟢 Routes publiques (consultation sur le site)
router.get('/', getAllProjects);
router.get('/:id', getProjectById);

// 🔒 Routes protégées (Administration)
router.post('/', authenticateUser, createProject);
router.put('/:id', authenticateUser, updateProject);
router.delete('/:id', authenticateUser, deleteProject);

export default router;