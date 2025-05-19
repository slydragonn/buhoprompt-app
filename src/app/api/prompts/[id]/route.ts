import { deletePrompt, getPrompt, updatePrompt } from '@/lib/api/prompts';
import { auth } from '@clerk/nextjs/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: 'No autorizado' }, { status: 401 });
  }

  const { id } = await params;

  const prompt = await getPrompt(id, userId);

  return Response.json(prompt);
}

export async function PUT(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: 'No autorizado' }, { status: 401 });
  }

  const body = await request.json();
  console.log(body);
  const prompt = await updatePrompt(body, userId);

  return Response.json(prompt);
}

export async function DELETE(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: 'No autorizado' }, { status: 401 });
  }

  const body = await request.json();
  const prompt = await deletePrompt(body.id, userId, body.title);

  return Response.json(prompt);
}
