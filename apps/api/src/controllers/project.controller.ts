import { Request, Response } from 'express';
import { supabase } from '../services/supabase';

// 1. Lister tous les projets
export const getAllProjects = async (_req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 2. Obtenir un projet par son ID
export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 3. Créer un nouveau projet
export const createProject = async (req: Request, res: Response) => {
  try {
    const { name, location, sector, description, status, launch_date, investment_amount } = req.body;

    const { data, error } = await supabase
      .from('projects')
      .insert([{ name, location, sector, description, status, launch_date, investment_amount }])
      .select()
      .single();

    if (error) throw error;
    res.status(201).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 4. Mettre à jour un projet
export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const { data, error } = await supabase
      .from('projects')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 5. Supprimer un projet
export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.status(200).json({ message: 'Projet supprimé avec succès' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};