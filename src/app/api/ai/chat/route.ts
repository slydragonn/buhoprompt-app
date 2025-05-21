import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/db/prisma';
import generateContent from '@/lib/ai/gemini';
import { getConfiguredPrompt } from '@/lib/ai/prompt-utils';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  message: string;
  promptContext: string;
  type: 'question' | 'improve';
  conversationHistory: ChatMessage[];
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const body: ChatRequest = await request.json();
    const { message, promptContext, type, conversationHistory } = body;

    // Verificar límites de tokens del usuario
    const userToken = await prisma.userToken.findFirst({
      where: { userClerkId: userId },
    });

    if (userToken && userToken.tokensUsed >= userToken.tokensLimit) {
      if (userToken.resetAt < new Date()) {
        await prisma.userToken.update({
          where: { id: userToken.id },
          data: { tokensUsed: 0, resetAt: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) },
        });
      } else {
        return NextResponse.json({ error: 'Limite de tokens alcanzado' }, { status: 429 });
      }
    }

    const { systemPrompt, userPrompt } = getConfiguredPrompt(type, message, promptContext);

    // Construir historial de conversación para contexto
    const conversationContext = conversationHistory
      .slice(-4) // Solo últimos 4 mensajes
      .map((msg) => `${msg.role === 'user' ? 'Usuario' : 'Asistente'}: ${msg.content}`)
      .join('\n');

    const fullPrompt = `${systemPrompt}

${conversationContext ? `Historial reciente:\n${conversationContext}\n` : ''}

Usuario: ${userPrompt}`;

    const response = await generateContent(fullPrompt);
    const text = response ?? 'No se pudo generar una respuesta';

    // Actualizar contador de tokens
    if (userToken) {
      await prisma.userToken.update({
        where: { id: userToken.id },
        data: { tokensUsed: userToken.tokensUsed + 1 },
      });
    } else {
      await prisma.userToken.create({
        data: {
          userClerkId: userId,
          tokensUsed: 1,
        },
      });
    }

    return NextResponse.json({
      response: text,
      improvedPrompt: text,
      tokensRemaining: userToken ? userToken.tokensLimit - userToken.tokensUsed - 1 : 10,
    });
  } catch (error) {
    console.error('Error in AI chat:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
