import { PrismaClient } from '@/generated/prisma';
import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient().$extends(withAccelerate());

async function main() {
  console.log('🌱 Iniciando proceso de semilla de la base de datos...');

  try {
    // Crear usuario administrador (requiere Clerk para el clerkId)
    console.log('👤 Creando usuario administrador...');
    const adminUser = await createAdminUser();

    // Crear categorías
    console.log('📋 Creando categorías...');
    const categories = await createCategories();

    // Crear etiquetas
    console.log('🏷️ Creando etiquetas...');
    const tags = await createTags();

    // Crear plantillas oficiales
    console.log('📑 Creando plantillas oficiales...');
    await createOfficialTemplates(adminUser.id, categories);

    // Crear algunos prompts de ejemplo
    console.log('💬 Creando prompts de ejemplo...');
    await createSamplePrompts(adminUser.id, categories, tags);

    console.log('✅ Proceso de semilla completado exitosamente!');
  } catch (error) {
    console.error('❌ Error durante el proceso de semilla:', error);
    throw error;
  }
}

/**
 * Crea un usuario administrador para propósitos de semilla
 */
async function createAdminUser() {
  // Verifica si ya existe un usuario administrador
  const existingAdmin = await prisma.user.findFirst({
    where: {
      email: 'admin@promptplatform.com',
    },
  });

  if (existingAdmin) {
    console.log('  ↪ Usuario administrador ya existe, omitiendo creación');
    return existingAdmin;
  }

  // Crea un nuevo usuario administrador
  const adminUser = await prisma.user.create({
    data: {
      clerkId: 'seed_admin_clerk_id', // En producción, esto sería un ID real de Clerk
      email: 'admin@promptplatform.com',
      name: 'Administrador',
      preferences: {
        theme: 'dark',
        language: 'es',
        notifications: {
          email: true,
          push: false,
        },
      },
    },
  });

  // Crear registro de tokens para el usuario administrador
  await prisma.userToken.create({
    data: {
      userId: adminUser.id,
      tokensLimit: 5000, // Mayor límite para administrador
      tokensUsed: 0,
    },
  });

  console.log(`  ↪ Usuario administrador creado con ID: ${adminUser.id}`);
  return adminUser;
}

/**
 * Crea categorías predefinidas para prompts y plantillas
 */
async function createCategories() {
  const categoryData = [
    {
      name: 'Content Creation',
      description:
        'Plantillas para crear diversos tipos de contenido como blogs, artículos y publicaciones en redes sociales.',
    },
    {
      name: 'SEO',
      description: 'Plantillas optimizadas para mejorar el posicionamiento en motores de búsqueda.',
    },
    {
      name: 'Marketing',
      description: 'Plantillas para campañas de marketing, emails y estrategias de contenido.',
    },
    {
      name: 'Programming',
      description:
        'Plantillas para asistencia en programación, documentación de código y desarrollo de software.',
    },
    {
      name: 'Business',
      description:
        'Plantillas para casos de uso empresarial como presentaciones, informes y análisis.',
    },
    {
      name: 'Academic',
      description: 'Plantillas para investigación académica, ensayos y contenido educativo.',
    },
    {
      name: 'Creative Writing',
      description: 'Plantillas para escritura creativa, narrativa y generación de ideas.',
    },
  ];

  const categories = {};

  for (const category of categoryData) {
    // Upsert para evitar duplicados si se ejecuta el seed múltiples veces
    const result = await prisma.category.upsert({
      where: { name: category.name },
      update: { description: category.description },
      create: category,
    });

    categories[category.name] = result;
    console.log(`  ↪ Categoría "${category.name}" procesada`);
  }

  return categories;
}

/**
 * Crea etiquetas predefinidas para clasificar prompts
 */
async function createTags() {
  const tagNames = [
    'beginner',
    'intermediate',
    'advanced',
    'technical',
    'creative',
    'business',
    'academic',
    'marketing',
    'productivity',
    'coding',
    'writing',
    'analysis',
    'brainstorming',
    'summarization',
    'translation',
    'editing',
  ];

  const tags = {};

  for (const name of tagNames) {
    const tag = await prisma.tag.upsert({
      where: { name },
      update: {},
      create: { name },
    });

    tags[name] = tag;
  }

  console.log(`  ↪ ${Object.keys(tags).length} etiquetas procesadas`);
  return tags;
}

/**
 * Crea plantillas oficiales para la plataforma
 */
async function createOfficialTemplates(adminUserId: string, categories: any) {
  const templates = [
    {
      title: 'Blog Post Generator',
      content: `# Blog Post Generator

## Instructions
Write a comprehensive blog post about [TOPIC]. The blog post should include:

- An engaging introduction that hooks the reader
- At least 3 main sections with subheadings
- Practical tips or actionable advice
- A conclusion that summarizes key points
- 2-3 relevant questions to encourage comments

## Parameters
- Topic: [TOPIC]
- Target audience: [AUDIENCE]
- Word count: Approximately [WORD_COUNT] words
- Tone: [TONE: professional/casual/humorous]`,
      description: 'Generate complete blog posts with proper structure',
      categoryName: 'Content Creation',
    },
    {
      title: 'Code Documentation Template',
      content: `# Code Documentation Generator

## Instructions
Create comprehensive documentation for the following [LANGUAGE] code or function. Include:

- Function name and purpose
- Parameter descriptions
- Return value explanation
- Usage examples
- Edge cases and error handling
- Performance considerations

## Parameters
- Language: [LANGUAGE]
- Code complexity: [COMPLEXITY: simple/moderate/complex]
- Include examples: [YES/NO]`,
      description: 'Create detailed documentation for code and functions',
      categoryName: 'Programming',
    },
    {
      title: 'SEO Article Optimizer',
      content: `# SEO Article Optimizer

## Instructions
Optimize the following article for SEO while maintaining readability and value for human readers. Make the following improvements:

- Create an engaging, SEO-friendly title
- Add appropriate H2 and H3 subheadings
- Include the primary keyword [PRIMARY_KEYWORD] in the title, first paragraph, and at least one subheading
- Naturally incorporate secondary keywords [SECONDARY_KEYWORDS] throughout the text
- Optimize meta description to include primary keyword and a call to action
- Suggest relevant internal and external linking opportunities
- Ensure proper keyword density (2-3% for primary keyword)

## Parameters
- Primary keyword: [PRIMARY_KEYWORD]
- Secondary keywords: [SECONDARY_KEYWORDS]
- Target audience: [AUDIENCE]
- Word count: [WORD_COUNT]

## Original Text
[ORIGINAL_TEXT]`,
      description: 'Optimize content for search engines while maintaining quality',
      categoryName: 'SEO',
    },
    {
      title: 'Marketing Email Sequence',
      content: `# Marketing Email Sequence Generator

## Instructions
Create a sequence of [NUMBER] marketing emails for a [PRODUCT_TYPE] designed to [CAMPAIGN_GOAL]. Each email should include:

- Attention-grabbing subject line
- Personalized greeting
- Engaging opening that addresses a pain point or desire
- Value proposition clearly stated
- Feature-to-benefit connections
- Clear call to action
- Professional signature with contact information

## Parameters
- Product/Service: [PRODUCT_NAME]
- Target audience: [TARGET_AUDIENCE]
- Campaign goal: [CAMPAIGN_GOAL: awareness/consideration/conversion]
- Number of emails: [NUMBER]
- Email frequency: [FREQUENCY]
- Tone: [TONE]

## Sequence Structure
- Email 1: Introduction and value proposition
- Email 2: Problem elaboration and solution revelation
- Email 3: Social proof and testimonials
- Email 4: Overcome objections
- Email 5: Final offer with incentive`,
      description: 'Create effective email marketing sequences that convert',
      categoryName: 'Marketing',
    },
    {
      title: 'Business Plan Outline',
      content: `# Business Plan Generator

## Instructions
Create a comprehensive business plan outline for [BUSINESS_TYPE] that includes:

- Executive Summary
  * Business concept
  * Goals and vision
  * Product/service overview
  * Target market
  * Financial highlights
  * Success factors

- Company Description
  * Mission statement
  * Legal structure
  * History (if applicable)
  * Industry
  * Core strengths and competencies

- Market Analysis
  * Industry description and outlook
  * Target market information
  * Competitive analysis
  * Regulatory restrictions

- Organization & Management
  * Organizational structure
  * Key management profiles
  * Board of directors
  * Management team gaps

- Service or Product Line
  * Product/service description
  * Product lifecycle
  * Intellectual property
  * R&D activities

- Marketing & Sales
  * Marketing strategy
  * Sales strategy
  * Pricing strategy

- Financial Projections
  * Income statement
  * Balance sheet
  * Cash flow statement
  * Break-even analysis

- Funding Request (if applicable)
  * Current funding requirement
  * Future funding requirements
  * Use of funds
  * Strategic financial situational plans

- Appendix
  * Resumes of key team members
  * Market studies
  * Relevant legal documents or permits

## Parameters
- Business type: [BUSINESS_TYPE]
- Industry: [INDUSTRY]
- Target market: [TARGET_MARKET]
- Investment needed: [INVESTMENT]
- Timeframe: [TIMEFRAME]`,
      description: 'Create professional business plans for startups and existing businesses',
      categoryName: 'Business',
    },
  ];

  for (const template of templates) {
    const { categoryName, ...templateData } = template;

    // Find the category
    const category = Object.values(categories).find((cat: any) => cat.name === categoryName);

    if (!category) {
      console.log(`  ⚠️ Categoría no encontrada para plantilla "${template.title}", omitiendo...`);
      continue;
    }

    await prisma.template.upsert({
      where: {
        // Unique constraint based on title + userId
        title_userId: {
          title: templateData.title,
          userId: adminUserId,
        },
      },
      update: {
        content: templateData.content,
        description: templateData.description,
      },
      create: {
        ...templateData,
        userId: adminUserId,
        categoryId: category.id,
        isOfficial: true,
        isPublic: true,
      },
    });

    console.log(`  ↪ Plantilla oficial "${templateData.title}" procesada`);
  }
}

/**
 * Crear prompts de ejemplo para demostración
 */
async function createSamplePrompts(userId: string, categories: any, tags: any) {
  const prompts = [
    {
      title: 'Análisis FODA para startup de SaaS',
      content: `Por favor, realiza un análisis FODA (Fortalezas, Oportunidades, Debilidades y Amenazas) para una startup de SaaS enfocada en software de gestión de proyectos para equipos remotos.

El análisis debe incluir:
- 4-5 puntos para cada sección del FODA
- Explicaciones breves pero detalladas de cada punto
- Consideraciones específicas para el mercado actual post-pandemia
- Recomendaciones basadas en el análisis

Formato: Secciones claramente divididas con viñetas y explicaciones concisas.`,
      description: 'Prompt para generar un análisis FODA detallado para empresas SaaS',
      model: 'gpt-4',
      categoryNames: ['Business'],
      tagNames: ['analysis', 'business'],
      isPublic: true,
    },
    {
      title: 'Generador de funciones JavaScript con documentación',
      content: `Crea una función de JavaScript que [DESCRIPCIÓN_FUNCIÓN].

La función debe:
- Ser eficiente en términos de rendimiento
- Incluir manejo de errores
- Seguir las mejores prácticas actuales
- Utilizar ES6+ cuando sea apropiado

Proporciona además:
1. Documentación JSDoc completa
2. Ejemplo de uso
3. Pruebas unitarias básicas usando Jest
4. Explicación del enfoque utilizado`,
      description: 'Crea funciones JavaScript bien documentadas y optimizadas',
      model: 'claude-3-sonnet',
      categoryNames: ['Programming'],
      tagNames: ['coding', 'intermediate'],
      isPublic: true,
    },
    {
      title: 'Plan de contenidos para redes sociales',
      content: `Crea un plan de contenidos para redes sociales para un [TIPO_DE_NEGOCIO] durante un período de 2 semanas.

El plan debe incluir:
- 3 publicaciones por semana para Instagram
- 2 publicaciones por semana para LinkedIn
- 4 publicaciones por semana para Twitter/X

Para cada publicación, especifica:
- Red social
- Día de publicación
- Tipo de contenido (imagen, carrusel, video, texto)
- Tema/título de la publicación
- Texto principal sugerido (con hashtags para Instagram y Twitter)
- Call to action

El contenido debe seguir una estrategia cohesiva y abordar diferentes etapas del embudo de conversión.`,
      description: 'Crea planes de contenido efectivos para múltiples redes sociales',
      model: 'gemini-pro',
      categoryNames: ['Marketing', 'Content Creation'],
      tagNames: ['marketing', 'intermediate'],
      isPublic: true,
    },
  ];

  for (const prompt of prompts) {
    const { categoryNames, tagNames, ...promptData } = prompt;

    // Obtener IDs de categorías
    const categoryIds = categoryNames
      .map((name) => {
        const category = Object.values(categories).find((cat: any) => cat.name === name);
        return category ? category.id : null;
      })
      .filter(Boolean);

    // Obtener IDs de etiquetas
    const tagIds = tagNames
      .map((name) => {
        return tags[name] ? tags[name].id : null;
      })
      .filter(Boolean);

    // Crear o actualizar el prompt
    await prisma.prompt.upsert({
      where: {
        // Unique constraint based on title + userId
        title_userId: {
          title: promptData.title,
          userId: userId,
        },
      },
      update: {
        content: promptData.content,
        description: promptData.description,
        model: promptData.model,
        isPublic: promptData.isPublic,
        categories: {
          set: [],
          connect: categoryIds.map((id) => ({ id })),
        },
        tags: {
          set: [],
          connect: tagIds.map((id) => ({ id })),
        },
      },
      create: {
        ...promptData,
        userId: userId,
        categories: {
          connect: categoryIds.map((id) => ({ id })),
        },
        tags: {
          connect: tagIds.map((id) => ({ id })),
        },
      },
    });

    console.log(`  ↪ Prompt de ejemplo "${promptData.title}" procesado`);
  }
}

// Ejecutar la función principal
main()
  .catch((e) => {
    console.error('Error en el proceso de semilla:', e);
    process.exit(1);
  })
  .finally(async () => {
    // Cerrar la conexión del cliente de Prisma al finalizar
    await prisma.$disconnect();
  });
