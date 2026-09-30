import { createClient } from '@supabase/supabase-js'

import {
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_PUBLISHABLE_KEY
} from 'astro:env/client'

export const getSupabase = (customEnv?: Record<string, any>) => {
  const url = customEnv?.SUPABASE_URL || PUBLIC_SUPABASE_URL
  const key = customEnv?.SUPABASE_ANON_KEY || PUBLIC_SUPABASE_PUBLISHABLE_KEY

  if (!url || !key) {
    throw new Error('Faltan las variables de entorno SUPABASE_URL o SUPABASE_ANON_KEY')
  }

  return createClient(url, key)
}