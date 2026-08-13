import { Router } from 'express';
import { 
  getAllUsers, 
  getUser, 
  createUser, 
  updateUser, 
  deleteUser 
} from '../controllers/user.controller';
import { authenticateUser } from '../middlewares/auth.middleware';

const router = Router();

// 🔒 Sécurise toutes les routes utilisateur ci-dessous
router.use(authenticateUser);

// GET /api/users -> Récupérer tous les utilisateurs
router.get('/', getAllUsers);

// GET /api/users/:id -> Récupérer un utilisateur par son ID
router.get('/:id', getUser);

// POST /api/users -> Créer un nouvel utilisateur
router.post('/', createUser);

// PUT /api/users/:id -> Mettre à jour un utilisateur
router.put('/:id', updateUser);

// DELETE /api/users/:id -> Supprimer un utilisateur
router.delete('/:id', deleteUser);

export default router;