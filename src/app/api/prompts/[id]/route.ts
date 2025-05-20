import { deletePrompt, getPrompt, updatePrompt } from '@/lib/api/prompts';
import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const id = params.id;

  const prompt = await getPrompt(id, userId);

  return NextResponse.json(prompt);
}

export async function PUT(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const body = await request.json();
  console.log(body);
  const prompt = await updatePrompt(body, userId);

  return NextResponse.json(prompt);
}

export async function DELETE(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const body = await request.json();
  const prompt = await deletePrompt(body.id, userId, body.title);

  return NextResponse.json(prompt);
}
