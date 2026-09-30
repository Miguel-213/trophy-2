# Trophy 2

Aplicación web desarrollada con Astro y Supabase para consultar y administrar trofeos de videojuegos.

## Integrantes

- Miguel
- (Nombre de tu compañero)

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
- Listado de trofeos
- Búsqueda por nombre
- Paginación

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

- /
- /acerca-de
- /login
- /registro
- /admin

### SSR

La página `/trofeos` utiliza renderizado del lado del servidor para obtener información actualizada desde Supabase.

## Variables de entorno

Crear un archivo `.env` utilizando como referencia `.env.example`.

Variables necesarias:

```env
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Miguel-213/trophy-2.git
```

Entrar al proyecto:

```bash
cd trophy-2
```

Instalar dependencias:

```bash
npm install
```

Iniciar servidor de desarrollo:

```bash
npm run dev
```

## Compilar para producción

```bash
npm run build
```

## Despliegue

La aplicación está preparada para desplegarse en Cloudflare Workers.

## URL de producción

Pendiente de despliegue.