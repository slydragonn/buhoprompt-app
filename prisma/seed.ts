import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create example users with unique clerkId
  const user1 = await prisma.user.upsert({
    where: { clerkId: 'clerk_example_id_1' },
    update: {},
    create: {
      clerkId: 'clerk_example_id_1',
      userToken: {
        create: {
          tokensUsed: 2,
          tokensLimit: 10,
          resetAt: new Date(new Date().setDate(new Date().getDate() + 1)), // Reseteo diario
        },
      },
    },
  });

  const user2 = await prisma.user.upsert({
    where: { clerkId: 'clerk_example_id_2' },
    update: {},
    create: {
      clerkId: 'clerk_example_id_2',
      userToken: {
        create: {
          tokensUsed: 5,
          tokensLimit: 10,
          resetAt: new Date(new Date().setDate(new Date().getDate() + 1)), // Reseteo diario
        },
      },
    },
  });

  console.log(`Created users: ${user1.id}, ${user2.id}`);

  // Create official templates
  const officialTemplates = [
    {
      title: 'Editor de Texto',
      content:
        'Actúa como un editor de texto profesional para mejorar la claridad y calidad de mi escritura. {{content}}',
      description: 'Mejora la claridad y calidad de tus textos con edición profesional.',
      model: 'Claude',
      isOfficial: true,
      userId: user1.id,
    },
    {
      title: 'Consultor de Marketing',
      content:
        'Actúa como un consultor de marketing experto y ayúdame con la siguiente estrategia: {{content}}',
      description: 'Obtén consejos profesionales para tus estrategias de marketing.',
      model: 'ChatGPT',
      isOfficial: true,
      userId: user1.id,
    },
    {
      title: 'Programador Asistente',
      content: 'Actúa como un asistente de programación en {{language}}. Ayúdame con: {{content}}',
      description: 'Asistencia con código en diferentes lenguajes de programación.',
      model: 'Gemini',
      isOfficial: true,
      userId: user1.id,
    },
  ];

  for (const template of officialTemplates) {
    await prisma.template.upsert({
      where: {
        title_userId: {
          title: template.title,
          userId: template.userId,
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
      userId: user1.id,
    },
    {
      title: 'Análisis de Datos',
      content: 'Analiza los siguientes datos y proporciona insights: {{content}}',
      description: 'Template para análisis de datos e insights',
      model: 'Deepseek',
      isOfficial: false,
      userId: user2.id,
    },
  ];

  for (const template of userTemplates) {
    await prisma.template.upsert({
      where: {
        title_userId: {
          title: template.title,
          userId: template.userId,
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

  // Example of chat history for the prompts
  const chatHistoryExample1 = [
    {
      req: '¿Puedes revisar mi texto para mejorar la claridad?',
      res: 'Por supuesto, he revisado tu texto y tengo algunas sugerencias para mejorar la claridad y coherencia.',
    },
    {
      req: '¿Qué opinas del segundo párrafo?',
      res: 'El segundo párrafo podría beneficiarse de oraciones más cortas y precisas. También recomendaría añadir un ejemplo concreto para ilustrar mejor tu punto.',
    },
  ];

  const chatHistoryExample2 = [
    {
      req: 'Necesito ideas para promocionar mi producto en redes sociales',
      res: 'Aquí tienes algunas estrategias efectivas para promocionar tu producto en diferentes plataformas de redes sociales.',
    },
    {
      req: '¿Cómo puedo medir el éxito de la campaña?',
      res: 'Para medir el éxito de tu campaña de redes sociales, deberías centrarte en estos KPIs clave: engagement, conversiones, alcance y ROI.',
    },
  ];

  // Create prompts for users
  const prompts = [
    {
      title: 'Revisión documento importante',
      description: 'Revisión de mi propuesta para cliente potencial',
      content:
        'Por favor, revisa este documento para una presentación importante: [contenido del documento]',
      prevContent: 'He revisado el documento y aquí están mis sugerencias...',
      chatHistory: chatHistoryExample1,
      model: 'Claude',
      userId: user1.id,
      templateId: templateEditor?.id,
      isFavorite: true,
    },
    {
      title: 'Estrategia redes sociales',
      description: 'Plan de marketing para lanzamiento de producto',
      content:
        'Necesito una estrategia de redes sociales para el lanzamiento de nuestro nuevo producto de software',
      prevContent: 'Aquí tienes una estrategia de redes sociales para tu lanzamiento...',
      chatHistory: chatHistoryExample2,
      model: 'ChatGPT',
      userId: user1.id,
      templateId: templateMarketing?.id,
      isFavorite: false,
    },
    {
      title: 'Corrección informe anual',
      description: 'Revisar errores gramaticales en informe',
      content: 'Revisa este informe anual para errores gramaticales y mejoras de estilo',
      prevContent: '',
      chatHistory: null,
      model: 'Gemini',
      userId: user2.id,
      templateId: templateEditor?.id,
      isFavorite: true,
    },
  ];

  for (const prompt of prompts) {
    const update = {
      ...prompt,
      chatHistory: prompt.chatHistory ? JSON.parse(JSON.stringify(prompt.chatHistory)) : undefined,
    };
    await prisma.prompt.upsert({
      where: {
        title_userId: {
          title: prompt.title,
          userId: prompt.userId,
        },
      },
      update,
      create: update,
    });
  }

  console.log('Created prompts');
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
