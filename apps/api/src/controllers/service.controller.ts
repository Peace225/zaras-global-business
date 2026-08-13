import { Response } from 'express';
import { supabase } from '../services/supabase';
import { AuthenticatedRequest } from '../middlewares/auth.middleware';

// 1. Lister tous les services actifs
export const getAllServices = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { all } = req.query; // Permet aux admins de voir aussi les services inactifs

    let query = supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: true });

    if (!all) {
      query = query.eq('is_active', true);
    }

    const { data, error } = await query;

    if (error) throw error;

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 2. Obtenir un service par son ID
export const getServiceById = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 3. Créer un nouveau service (Admin)
export const createService = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const serviceData = req.body;

    const { data, error } = await supabase
      .from('services')
      .insert([serviceData])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({
      message: 'Service créé avec succès',
      data,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 4. Mettre à jour un service (Admin)
export const updateService = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const { data, error } = await supabase
      .from('services')
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    res.status(200).json({
      message: 'Service mis à jour avec succès',
      data,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 5. Supprimer un service (Admin)
export const deleteService = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id);

    if (error) throw error;

    res.status(200).json({ message: 'Service supprimé avec succès' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};