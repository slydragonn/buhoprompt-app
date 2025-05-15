<div align="center">

<img alt="BuhoPrompt" src="./public/buhoprompt-logo-dark.svg" width="150" />
<h1>BuhoPrompt</h1>

</div>

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
[README - English](README.en.md) •
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

- **Frontend y Backend**

  - Next.js
  - TypeScript
  - TailwindCSS
  - shadcn/ui

- **Estado y Manejo de Datos**

  - Zustand
  - TanStack Query
  - Zod

- **Base de datos y ORM**

  - PostgreSQL
  - Prisma

- **Autenticación**

  - Clerk

- **IA y Procesamiento**

  - Gemini API
  - MDX Editor

- **Internacionalización**

  - next-i18next

- **DevOps y CI/CD**

  - Husky y commit-lint
  - Vercel
