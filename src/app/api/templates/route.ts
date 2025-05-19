import { createTemplate, getTemplates } from '@/lib/api/templates';
import { auth } from '@clerk/nextjs/server';

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: 'No autorizado' }, { status: 401 });
  }

  const templates = await getTemplates(userId);

  return Response.json(templates);
}

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return Response.json({ error: 'No autorizado' }, { status: 401 });
    }

    const body = await request.json();
    const template = await createTemplate(body.title, body.description, userId, body.base);

    return Response.json(template);
  } catch (error) {
    console.error('Error creating template:', error);
    return Response.json({ error: 'Error creating template' }, { status: 500 });
  }
}
