import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  // Hacemos una consulta a la tabla 'messages'
  const { data, error } = await supabase.from('messages').select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  console.log(data)
  // Devolvemos los datos en formato JSON
  return NextResponse.json(data);
}