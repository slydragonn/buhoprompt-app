import { PromptUpdateValue } from '@/types/prompt';
import generateContent from '../ai/gemini';
import prisma from '../db/prisma';
import templates from '../templates';

export async function getPrompts(userId: string) {
  const prompts = await prisma.prompt.findMany({
    where: {
      userClerkId: userId,
    },
  });

  return prompts;
}

export async function getPrompt(promptId: string, userId: string) {
  const prompt = await prisma.prompt.findUnique({
    where: {
      id: promptId,
    },
  });

  if (!prompt) {
    throw new Error('Prompt not found');
  }

  if (prompt.userClerkId !== userId) {
    throw new Error('Unauthorized');
  }

  return prompt;
}

export async function createPrompt(
  title: string,
  description: string,
  initial: string,
  userId: string,
  templateId: string
) {
  const userTokens = await prisma.userToken.findUnique({
    where: {
      userClerkId: userId,
    },
  });

  if (!userTokens) {
    await prisma.userToken.create({
      data: {
        userClerkId: userId,
        tokensUsed: 0,
        tokensLimit: 10,
      },
    });
  } else if (userTokens.tokensUsed >= userTokens.tokensLimit) {
    if (userTokens.resetAt < new Date()) {
      await prisma.userToken.update({
        where: {
          userClerkId: userId,
        },
        data: {
          tokensUsed: 0,
          resetAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
        },
      });
    } else {
      throw new Error('Has alcanzado tu límite de tokens para este período');
    }
  }

  let template;

  if (['programming', 'summary', 'images', 'investigation'].includes(templateId)) {
    template = templates[templateId as keyof typeof templates];
  } else {
    const response = await prisma.template.findUnique({
      where: {
        id: templateId,
      },
    });

    if (!response) {
      throw new Error('Template not found');
    }

    template = response.content;
  }

  const content = `${template}\n\n Prompt de usuario a mejorar: ${initial}\n\nSOLO INCLUYE EN TU RESPUESTA EL PROMPT MEJORADO. NO INCLUYAS NADA ADICIONAL.`;
  const improvedPromptReponse = await generateContent(content);

  if (improvedPromptReponse) {
    await prisma.userToken.update({
      where: {
        userClerkId: userId,
      },
      data: {
        tokensUsed: {
          increment: 1,
        },
      },
    });
  }

  const prompt = await prisma.prompt.create({
    data: {
      title,
      description,
      initial,
      improved: improvedPromptReponse ?? '',
      userClerkId: userId,
      templateId,
    },
  });

  console.log(prompt);

  return prompt;
}

export async function updatePrompt(prompt: PromptUpdateValue, userId: string) {
  const existingPrompt = await prisma.prompt.findUnique({
    where: {
      title_userId: {
        title: prompt.title,
        userClerkId: userId,
      },
    },
  });

  if (!existingPrompt) {
    throw new Error('Prompt not found');
  }

  if (existingPrompt.userClerkId !== userId) {
    throw new Error('Unauthorized');
  }

  return await prisma.prompt.update({
    where: {
      id: prompt.id,
    },
    data: {
      title: prompt.title,
      description: prompt.description,
      improved: prompt.improved,
      updatedAt: new Date(),
    },
  });
}

export async function deletePrompt(promptId: string, userId: string, promptTitle: string) {
  const existingPrompt = await prisma.prompt.findUnique({
    where: {
      title_userId: {
        title: promptTitle,
        userClerkId: userId,
      },
    },
  });

  if (!existingPrompt) {
    throw new Error('Prompt not found');
  }

  if (existingPrompt.id !== promptId) {
    throw new Error('Unauthorized');
  }

  return await prisma.prompt.delete({
    where: {
      id: promptId,
    },
  });
}
