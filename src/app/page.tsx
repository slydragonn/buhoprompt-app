import prisma from '@/lib/db/prisma';

export default async function Home() {
  const templates = await prisma.template.findMany();
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h1>Test Prisma</h1>
      <div>
        <h2>Templates descriptions</h2>
        <ul>
          {templates.map((template) => (
            <li key={template.id}>{template.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
