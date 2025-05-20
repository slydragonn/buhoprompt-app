import { createPrompt, getPrompts } from '@/lib/api/prompts';
import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const prompts = await getPrompts(userId);

  console.log('api', prompts);

  return NextResponse.json(prompts);
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const body = await request.json();
    const prompt = await createPrompt(
      body.title,
      body.description,
      body.initial,
      userId,
      body.templateId
    );

    return NextResponse.json(prompt);
  } catch (error) {
    console.error('Error creating prompt:', error);
    return NextResponse.json({ error: 'Error creating prompt' }, { status: 500 });
  }
}
