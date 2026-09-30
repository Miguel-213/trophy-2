/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

// Especifica las variables de entorno / secretos que tienes en Cloudflare
interface Env {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
}

declare namespace App {
  interface Locals extends Runtime {}
}