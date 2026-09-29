// @ts-check
import { defineConfig, envField } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
  adapter: cloudflare(),

  env: {
    schema: {
      PUBLIC_SUPABASE_URL: envField.string({
        context: 'client',
        access: 'public'
      }),

      PUBLIC_SUPABASE_PUBLISHABLE_KEY: envField.string({
        context: 'client',
        access: 'public'
      })
    }
  }
})