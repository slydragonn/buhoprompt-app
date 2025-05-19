import prisma from '../db/prisma';
import templates from '../templates';

export async function getTemplates(userId: string) {
  const templates = await prisma.template.findMany({
    where: {
      userClerkId: userId,
    },
  });

  return templates;
}

export async function getTemplate(templateId: string, userId: string) {
  const template = await prisma.template.findUnique({
    where: {
      id: templateId,
    },
  });

  if (!template) {
    throw new Error('Template not found');
  }

  if (template.userClerkId !== userId) {
    throw new Error('Unauthorized');
  }

  return template;
}

export async function createTemplate(
  title: string,
  description: string,
  userId: string,
  base: string
) {
  let baseTemplate = '';
  if (['programming', 'summary', 'images', 'investigation', 'general'].includes(base)) {
    baseTemplate = templates[base as keyof typeof templates];
  }

  const createdTemplate = await prisma.template.create({
    data: {
      title,
      description,
      userClerkId: userId,
      base: baseTemplate,
      content: '',
    },
  });

  return createdTemplate;
}

export async function updateTemplate(
  templateId: string,
  title: string,
  description: string,
  userId: string,
  content: string
) {
  const existingTemplate = await prisma.template.findUnique({
    where: {
      id: templateId,
    },
  });

  if (!existingTemplate) {
    throw new Error('Template not found');
  }

  if (existingTemplate.userClerkId !== userId) {
    throw new Error('Unauthorized');
  }

  const updatedTemplate = await prisma.template.update({
    where: {
      id: templateId,
    },
    data: {
      title,
      description,
      content,
      updatedAt: new Date(),
    },
  });

  return updatedTemplate;
}

export async function deleteTemplate(templateId: string, userId: string) {
  const existingTemplate = await prisma.template.findUnique({
    where: {
      id: templateId,
    },
  });

  if (!existingTemplate) {
    throw new Error('Template not found');
  }

  if (existingTemplate.userClerkId !== userId) {
    throw new Error('Unauthorized');
  }

  return await prisma.template.delete({
    where: {
      id: templateId,
    },
  });
}
