'use client';

import { useEffect } from 'react';
import PromptCard from './prompt-card';
import { usePrompts } from '@/hooks/use-prompts';
import usePromptsStore from '@/store/prompts-store';

interface PromptListProps {
  filter: 'all' | 'recent';
}
export default function PromptList({ filter }: Readonly<PromptListProps>) {
  const { isPending, isError, isSuccess, error, data } = usePrompts();
  const { prompts, setPrompts } = usePromptsStore();
  const dataArray = data ?? [];

  useEffect(() => {
    if (prompts.length === 0 && dataArray.length > prompts.length) {
      if (isSuccess) {
        setPrompts(data);
      }
    }
  }, [isSuccess]);

  if (isPending) return <div className='w-xl text-center'>Cargando...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  if (!prompts.length) {
    return (
      <div className='text-center w-full sm:w-xl border border-dashed border-neutral-300 dark:border-neutral-800 rounded-md font-extralight text-sm p-4'>
        Aún no tienes prompts
      </div>
    );
  }

  return (
    <section>
      <h3 className='text-sm font-extralight mb-2'>Lista de Prompts</h3>
      <ul className='flex flex-col gap-4 w-full mb-10'>
        {filter === 'recent' &&
          prompts
            .slice(0, 5)
            .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
            .map((prompt) => (
              <PromptCard
                key={prompt.id}
                id={prompt.id}
                title={prompt.title}
                description={prompt.description}
                isFavorite={prompt.isFavorite}
                createdAt={prompt.createdAt}
                updatedAt={prompt.updatedAt}
              />
            ))}
        {filter === 'all' &&
          prompts.map((prompt) => (
            <PromptCard
              key={prompt.id}
              id={prompt.id}
              title={prompt.title}
              description={prompt.description}
              isFavorite={prompt.isFavorite}
              createdAt={prompt.createdAt}
              updatedAt={prompt.updatedAt}
            />
          ))}
      </ul>
    </section>
  );
}
