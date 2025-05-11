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

The ultimate platform for prompt engineering
**🚧 Under development 🚧**

## Getting Started

First, run the development server:

```bash
npm run dev
```

To build the application:

```bash
npm run build
```

## **📝 Description**

Buho Prompt is a comprehensive platform designed for professionals, content creators, and enthusiasts looking to optimize their interactions with artificial intelligence. This tool allows you to create, store, edit, and refine prompts for different AI models, focusing on prompt engineering best practices.

Our goal is to democratize the power of prompt engineering, enabling users to maximize the capabilities of different AI models without needing technical expertise, while also offering advanced tools for professionals.

🔐 We implement robust authentication with Clerk, leveraging email login, social networks, and two-factor authentication to ensure the security of prompts and user data.

✨ **Key Features:**

- [ ] Library of prompt templates by categories (images, programming, research, etc.)
- [ ] Real-time editor with integrated AI chat for prompt refinement
- [ ] Storage of prompts and responses for analysis and reuse
- [ ] Customization for different AI models (automatic syntax adaptation)
- [ ] Complete documentation with Markdown and interactive guides

🚀 **Future Features:**

- Sharing templates with multiple users
- Export to multiple formats and APIs
- Premium template marketplace

## Project Stack

**Frontend and Backend**

- **Next.js** - Full-stack React framework with App Router for SSR, API routes, and file architecture
- **TypeScript** - Static typing for greater robustness and better developer experience
- **TailwindCSS** - CSS utilities for fast and consistent design
- **shadcn/ui** - Accessible and customizable UI components

**State and Data Management**

- **Zustand** - Lightweight and efficient global state management
- **TanStack Query** - Server state management, caching, and synchronization
- **Zod** - Schema validation and runtime typing

**Database and ORM**

- **PostgreSQL** - Robust relational database
- **Prisma** - Modern ORM for TypeScript with migrations and data modeling

**Authentication and Security**

- **Clerk** - Complete authentication and user management
- **Rate Limiting Middleware** - Protection against API abuse

**AI and Processing**

- **Gemini API** - AI engine for prompt generation and improvement
- **MDX Editor** - Markdown editor with real-time preview

**Internationalization**

- **next-i18next** - Complete multilingual support

**Quality and Testing**

- **ESLint** with **eslint-plugin-jsx-a11y** - Linting and accessibility best practices
- **Prettier** - Consistent code formatting
- **Jest** and **@testing-library/react** - Unit tests
- **Playwright** - End-to-end tests

**DevOps and CI/CD**

- **Husky** and **commit-lint** - Git hooks for code quality
- **GitHub Actions** - Continuous integration and automated testing
- **Vercel** - Deployment platform with preview deployments

**Development Tools**

- **EditorConfig** - Consistent configuration across editors
- **VS Code** - Recommended editor with configured extensions
