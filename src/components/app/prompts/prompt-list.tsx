import type { Prompt } from '@/types/prompt';
import PromptCard from './prompt-card';
interface PromptListProps {
  prompts: Prompt[];
}
export default function PromptList({ prompts }: Readonly<PromptListProps>) {
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
      <ul className='flex flex-col gap-4 w-full'>
        {prompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            title={prompt.title}
            description={prompt.description}
            model={prompt.model}
            isFavorite={prompt.isFavorite}
            createdAt={prompt.createdAt}
            updatedAt={prompt.updatedAt}
          />
        ))}
      </ul>
    </section>
  );
}
