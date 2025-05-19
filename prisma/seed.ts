import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create official templates
  const officialTemplates = [
    {
      title: 'Editor de Texto',
      content:
        'Actúa como un editor de texto profesional para mejorar la claridad y calidad de mi escritura. {{content}}',
      description: 'Mejora la claridad y calidad de tus textos con edición profesional.',
      model: 'Claude',
      isOfficial: true,
      userClerkId: 'user_1',
    },
    {
      title: 'Consultor de Marketing',
      content:
        'Actúa como un consultor de marketing experto y ayúdame con la siguiente estrategia: {{content}}',
      description: 'Obtén consejos profesionales para tus estrategias de marketing.',
      model: 'ChatGPT',
      isOfficial: true,
      userClerkId: 'user_2',
    },
    {
      title: 'Programador Asistente',
      content: 'Actúa como un asistente de programación en {{language}}. Ayúdame con: {{content}}',
      description: 'Asistencia con código en diferentes lenguajes de programación.',
      model: 'Gemini',
      isOfficial: true,
      userClerkId: 'user_3',
    },
  ];

  for (const template of officialTemplates) {
    await prisma.template.upsert({
      where: {
        title_userId: {
          title: template.title,
          userClerkId: template.userClerkId,
        },
      },
      update: template,
      create: template,
    });
  }

  console.log('Created official templates');

  // Create user templates
  const userTemplates = [
    {
      title: 'Mi Template Personal',
      content: 'Este es mi template personalizado para: {{content}}',
      description: 'Template personalizado para uso específico',
      model: 'Claude',
      isOfficial: false,
      userClerkId: 'user_1',
    },
    {
      title: 'Análisis de Datos',
      content: 'Analiza los siguientes datos y proporciona insights: {{content}}',
      description: 'Template para análisis de datos e insights',
      model: 'Deepseek',
      isOfficial: false,
      userClerkId: 'user_2',
    },
  ];

  for (const template of userTemplates) {
    await prisma.template.upsert({
      where: {
        title_userId: {
          title: template.title,
          userClerkId: template.userClerkId,
        },
      },
      update: template,
      create: template,
    });
  }

  console.log('Created user templates');

  // Get templates created to link them with prompts
  const templateEditor = await prisma.template.findFirst({
    where: { title: 'Editor de Texto' },
  });

  const templateMarketing = await prisma.template.findFirst({
    where: { title: 'Consultor de Marketing' },
  });

  // Create prompts for users
  const prompts = [
    {
      title: 'Revisión documento importante',
      description: 'Revisión de mi propuesta para cliente potencial',
      initial:
        'Por favor, revisa este documento para una presentación importante: [contenido del documento]',
      improved: '',
      userClerkId: 'user_1',
      templateId: templateEditor?.id,
      isFavorite: true,
    },
    {
      title: 'Estrategia redes sociales',
      description: 'Plan de marketing para lanzamiento de producto',
      initial:
        'Necesito una estrategia de redes sociales para el lanzamiento de nuestro nuevo producto de software',
      improved: '',
      userClerkId: 'user_2',
      templateId: templateMarketing?.id,
      isFavorite: false,
    },
    {
      title: 'Corrección informe anual',
      description: 'Revisar errores gramaticales en informe',
      initial: 'Revisa este informe anual para errores gramaticales y mejoras de estilo',
      improved: '',
      userClerkId: 'user_3',
      templateId: templateEditor?.id,
      isFavorite: true,
    },
  ];

  for (const prompt of prompts) {
    await prisma.prompt.upsert({
      where: {
        title_userId: {
          title: prompt.title,
          userClerkId: prompt.userClerkId,
        },
      },
      update: prompt,
      create: prompt,
    });
  }
  console.log('Created prompts');

  // Create user tokens
  console.log('Creating user tokens');

  const userTokens = [
    {
      userClerkId: 'user_1',
      tokensUsed: 0,
      tokensLimit: 10,
    },
    {
      userClerkId: 'user_2',
      tokensUsed: 0,
      tokensLimit: 10,
    },
    {
      userClerkId: 'user_3',
      tokensUsed: 0,
      tokensLimit: 10,
    },
  ];

  for (const token of userTokens) {
    await prisma.userToken.upsert({
      where: {
        userClerkId: token.userClerkId,
      },
      update: token,
      create: token,
    });
  }

  console.log('Created user tokens');
  console.log('Database seeding completed successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
