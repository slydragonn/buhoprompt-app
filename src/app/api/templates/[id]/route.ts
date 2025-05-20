import { deleteTemplate, getTemplate, updateTemplate } from '@/lib/api/templates';
import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const id = params.id;

  const template = await getTemplate(id, userId);

  return NextResponse.json(template);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const body = await request.json();
  const id = params.id;

  const template = await updateTemplate(id, body.title, body.description, userId, body.content);

  return NextResponse.json(template);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const id = params.id;

  const template = await deleteTemplate(id, userId);

  return NextResponse.json(template);
}
