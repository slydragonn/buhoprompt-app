import MainLayout from '@/components/app/layout/main';
import Header from '@/components/app/layout/header';
import Footer from '@/components/app/layout/footer';
import CreatePromptDialog from '@/components/app/prompts/prompt-dialog';
import type { Prompt } from '@/types/prompt';
import PromptList from '@/components/app/prompts/prompt-list';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

const examplePrompts: Prompt[] = [
  {
    id: '1',
    title: 'Editor de Texto',
    content:
      'Actúa como un editor de texto profesional para mejorar la claridad y calidad de mi escritura. {{content}}',
    description: 'Mejora la claridad y calidad de tus textos con edición profesional.',
    prevContent: 'Prev Content 1',
    chatHistory: [],
    model: 'chatgpt',
    userId: '1',
    templateId: '1',
    isFavorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    title: 'Consultor de Marketing',
    content:
      'Actúa como un consultor de marketing experto y ayúdame con la siguiente estrategia: {{content}}',
    description: 'Obtén consejos profesionales para tus estrategias de marketing.',
    prevContent: 'Prev Content 2',
    chatHistory: [],
    model: 'chatgpt',
    userId: '1',
    templateId: '1',
    isFavorite: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
export default function Prompts() {
  return (
    <>
      <MainLayout>
        <Header message='Mis Prompts ✨' />
        <CreatePromptDialog
          buttonComponent={
            <Button variant='outline' className='w-full h-10'>
              <Zap />
              Nuevo Prompt
            </Button>
          }
        />
        <PromptList prompts={examplePrompts} />
      </MainLayout>
      <Footer>Total: 10</Footer>
    </>
  );
}
