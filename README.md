# Trophy 2

Aplicación web desarrollada con Astro y Supabase para consultar y administrar trofeos de videojuegos.

## Integrantes

- Miguel
- Leider

## Tecnologías utilizadas

- Astro
- Supabase
- Cloudflare Workers
- TypeScript
- HTML
- CSS

## Funcionalidades

### Públicas

- Página de inicio
- Página Acerca de
- Listado público de trofeos
- Búsqueda de trofeos por nombre
- Paginación
- Visualización de imágenes de los trofeos

### Privadas

- Registro de usuarios
- Inicio de sesión
- Cierre de sesión
- Crear trofeos
- Editar trofeos
- Eliminar trofeos

## Arquitectura

### SSG

Las siguientes páginas son generadas estáticamente:

- `/`
- `/acerca-de`
- `/login`
- `/registro`
- `/admin`

### SSR

La página `/trofeos` utiliza renderizado del lado del servidor.

Los trofeos se consultan desde Supabase en cada solicitud y la búsqueda y paginación se procesan en el servidor mediante parámetros de la URL.

Ejemplos:

```text
/trofeos?q=Primer
/trofeos?page=2
```

## Autenticación y seguridad

La autenticación se realiza con Supabase Auth.

Las operaciones de creación, edición y eliminación están protegidas mediante Row Level Security (RLS) en Supabase y requieren un usuario autenticado.

## Variables de entorno

Crear un archivo `.env` tomando como referencia `.env.example`.

Variables públicas utilizadas por Astro y el navegador:

```env
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Variables utilizadas por el runtime de Cloudflare:

```env
SUPABASE_URL=
SUPABASE_ANON_KEY=
```

No se deben subir valores reales de las variables de entorno al repositorio.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Miguel-213/trophy-2.git
```

Entrar al proyecto:

```bash
cd trophy-2
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

## Compilar para producción

```bash
npm run build
```

## Despliegue

El proyecto utiliza el adaptador de Cloudflare para Astro y se despliega mediante Cloudflare Workers.

Para desplegar una nueva versión:

```bash
npm run build
npx wrangler deploy
```

## URL de producción

https://trophy-2.trofeos.workers.dev