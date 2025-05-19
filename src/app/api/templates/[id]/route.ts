import { deleteTemplate, getTemplate, updateTemplate } from '@/lib/api/templates';
import { auth } from '@clerk/nextjs/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: 'No autorizado' }, { status: 401 });
  }

  const { id } = await params;

  const template = await getTemplate(id, userId);

  return Response.json(template);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: 'No autorizado' }, { status: 401 });
  }

  const body = await request.json();
  const { id } = await params;

  const template = await updateTemplate(id, body.title, body.description, userId, body.content);

  return Response.json(template);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: 'No autorizado' }, { status: 401 });
  }

  const { id } = await params;

  const template = await deleteTemplate(id, userId);

  return Response.json(template);
}
