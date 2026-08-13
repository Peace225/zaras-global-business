import { Request, Response, NextFunction } from 'express';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

// Extension du type Request pour y attacher l'utilisateur vérifié
export interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authenticateUser = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    // 1. Vérifier la présence du header Authorization Bearer 
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        error: 'Accès non autorisé. Token d\'authentification manquant.' 
      });
    }

    const token = authHeader.split(' ')[1];

    // 2. Valider le token auprès de Supabase
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: 'Token invalide ou expiré.' });
    }

    // 3. Attacher les données utilisateur à la requête pour les prochains middlewares/contrôleurs
    req.user = user;

    // 4. Passer à la suite
    next();
  } catch (error: any) {
    return res.status(500).json({ error: 'Erreur serveur lors de l\'authentification.' });
  }
};