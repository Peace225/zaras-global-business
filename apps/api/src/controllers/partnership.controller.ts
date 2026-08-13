import { Request, Response } from 'express';
import { supabase } from '../services/supabase';

// 1. Soumettre une demande de partenariat (Public)
export const createPartnership = async (req: Request, res: Response) => {
  try {
    const { company_name, contact_name, email, phone, partnership_type, message } = req.body;

    const { data, error } = await supabase
      .from('partnership_requests')
      .insert([
        {
          company_name,
          contact_name,
          email,
          phone,
          partnership_type,
          message,
          status: 'pending', // Statut par défaut
        },
      ])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({
      message: 'Demande de partenariat envoyée avec succès',
      data,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 2. Lister toutes les demandes (Admin)
export const getAllPartnerships = async (_req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('partnership_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 3. Obtenir une demande par son ID (Admin)
export const getPartnershipById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('partnership_requests')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 4. Mettre à jour le statut d'une demande (Admin)
export const updatePartnershipStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const { data, error } = await supabase
      .from('partnership_requests')
      .update({ status, notes, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    res.status(200).json({
      message: 'Statut de la demande mis à jour',
      data,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 5. Supprimer une demande (Admin)
export const deletePartnership = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('partnership_requests')
      .delete()
      .eq('id', id);

    if (error) throw error;

    res.status(200).json({ message: 'Demande supprimée avec succès' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};