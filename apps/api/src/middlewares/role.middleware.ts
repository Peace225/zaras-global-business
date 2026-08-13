import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from './auth.middleware';

export const requireRole = (allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Utilisateur non authentifié' });
    }

    const userRole = req.user.user_metadata?.role || 'user';

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ 
        error: 'Accès refusé : privilèges insuffisants' 
      });
    }

    next();
  };
};