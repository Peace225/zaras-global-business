import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialisation du client Supabase
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

/**
 * GET /api/users
 * Récupère la liste complète des utilisateurs
 */
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Erreur interne du serveur', details: error.message },
      { status: 500 }
    );
  }
}

/**
 * POST /api/users
 * Crée un nouvel utilisateur
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validation basique des données reçues
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { error: 'Le corps de la requête ne peut pas être vide' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('users')
      .insert([body])
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'utilisateur', details: error.message },
      { status: 500 }
    );
  }
}