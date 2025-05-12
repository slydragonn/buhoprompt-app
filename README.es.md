# Buho Prompt

<div align="center">

<!--[GitHub forks](https://img.shields.io/github/forks/slydragonn/buhoprompt-app?style=social)-->

![GitHub stars](https://img.shields.io/github/stars/slydragonn/buhoprompt-app?style=social)
![GitHub issues](https://img.shields.io/github/issues/slydragonn/buhoprompt-app)
![GitHub license](https://img.shields.io/github/license/slydragonn/buhoprompt-app)
![GitHub last commit](https://img.shields.io/github/last-commit/slydragonn/buhoprompt-app)
![GitHub release](https://img.shields.io/github/v/release/slydragonn/buhoprompt-app)
![GitHub contributors](https://img.shields.io/github/contributors/slydragonn/buhoprompt-app)
![Maintenance](https://img.shields.io/badge/Maintained-Actively-green)

</div>

<div align="center">

[Live Demo](#) •
[README - Español](README.es.md) •
[Docs](#)

</div>

La plataforma definitiva para prompt engineering
**🚧 En desarrollo 🚧**

## Primeros pasos

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Para compilar la aplicación:

```bash
npm run build
```

## **📝 Descripción**

Buho Prompt es una plataforma completa diseñada para profesionales, creadores de contenido y entusiastas que buscan optimizar sus interacciones con inteligencia artificial. Esta herramienta permite crear, almacenar, editar y perfeccionar prompts para diferentes modelos de IA, con un enfoque en las mejores prácticas de prompt engineering.

El objetivo es democratizar el poder del prompt engineering, permitiendo a los usuarios aprovechar al máximo las capacidades de los diferentes modelos de IA sin necesidad de ser expertos técnicos, mientras ofrece herramientas avanzadas para profesionales.

🔐 Implementamos autenticación robusta con Clerk, aprovechando inicio de sesión con email, redes sociales y autenticación de doble factor para garantizar la seguridad de los prompts y datos de usuarios.

✨ **Funcionalidades principales:**

- [ ] Biblioteca de plantillas de prompts por categorías (imágenes, programación, investigación, etc.)
- [ ] Editor en tiempo real con chat integrado con IA para perfeccionar prompts
- [ ] Almacenamiento de prompts y respuestas para análisis y reutilización
- [ ] Personalización para diferentes modelos de IA (adaptación automática de sintaxis)
- [ ] Documentación completa con Markdown y guías interactivas

🚀 **Futuras Características:**

- Compartir plantillas con múltiples usuarios
- Exportación a múltiples formatos y APIs
- Marketplace de plantillas premium

## Stack del Proyecto

### Frontend y Backend

- **Next.js** - Framework React fullstack con App Router para SSR, API routes y arquitectura de archivos
- **TypeScript** - Tipado estático para mayor robustez y mejor experiencia de desarrollo
- **TailwindCSS** - Utilidades CSS para un diseño rápido y consistente
- **shadcn/ui** - Componentes de UI accesibles y personalizables

### Estado y Manejo de Datos

- **Zustand** - Gestión de estado global liviana y eficiente
- **TanStack Query** - Manejo de estado del servidor, caché y sincronización
- **Zod** - Validación de esquemas y tipado en tiempo de ejecución

### Base de datos y ORM

- **PostgreSQL** - Base de datos relacional robusta
- **Prisma** - ORM moderno para TypeScript con migraciones y modelado de datos

### Autenticación y Seguridad

- **Clerk** - Autenticación completa y gestión de usuarios
- **Middleware de Rate Limiting** - Protección contra abusos en la API

### IA y Procesamiento

- **Gemini API** - Motor de IA para generación y mejora de prompts
- **MDX Editor** - Editor de Markdown con vista previa en tiempo real

### Internacionalización

- **next-i18next** - Soporte multiidioma completo

### Calidad y Testing

- **ESLint** con **eslint-plugin-jsx-a11y** - Linting y mejores prácticas de accesibilidad
- **Prettier** - Formateo de código consistente
- **Jest** y **@testing-library/react** - Tests unitarios
- **Playwright** - Tests end-to-end

### DevOps y CI/CD

- **Husky** y **commit-lint** - Hooks de Git para calidad de código
- **GitHub Actions** - Integración continua y testing automatizado
- **Vercel** - Plataforma de despliegue con preview deployments

### Herramientas de Desarrollo

- **EditorConfig** - Configuración consistente entre editores
- **VS Code** - Editor recomendado con extensiones configuradas
