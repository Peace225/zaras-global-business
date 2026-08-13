import { Response } from 'express';
import { supabase } from '../services/supabase';
import { AuthenticatedRequest } from '../middlewares/auth.middleware';

// 1. Lister tous les articles (Affiche uniquement les articles publiés au public)
export const getAllNews = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { category, limit } = req.query;

    let query = supabase
      .from('news_articles')
      .select('*')
      .order('created_at', { ascending: false });

    // Filtrer par catégorie si renseigné
    if (category) {
      query = query.eq('category', category as string);
    }

    // Limiter le nombre de résultats (ex: pour la homepage)
    if (limit) {
      query = query.limit(Number(limit));
    }

    const { data, error } = await query;

    if (error) throw error;

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 2. Obtenir un article par son ID ou Slug
export const getNewsById = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('news_articles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 3. Créer un nouvel article (Admin)
export const createNews = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const articleData = req.body;
    const authorId = req.user?.id;

    const { data, error } = await supabase
      .from('news_articles')
      .insert([
        {
          ...articleData,
          author_id: authorId,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({
      message: 'Article créé avec succès',
      data,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 4. Mettre à jour un article (Admin)
export const updateNews = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const { data, error } = await supabase
      .from('news_articles')
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    res.status(200).json({
      message: 'Article mis à jour avec succès',
      data,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 5. Supprimer un article (Admin)
export const deleteNews = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('news_articles')
      .delete()
      .eq('id', id);

    if (error) throw error;

    res.status(200).json({ message: 'Article supprimé avec succès' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};