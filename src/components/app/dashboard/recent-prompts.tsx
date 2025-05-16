import { Prompt } from '@/types/prompt';
import PromptCard from '../prompts/prompt-card';
interface RecentPromptsProps {
  prompts: Prompt[];
}
export default function RecentPrompts({ prompts }: Readonly<RecentPromptsProps>) {
  if (!prompts.length) {
    return (
      <div className='text-center w-full border border-dashed border-neutral-300 dark:border-neutral-800 rounded-md font-extralight text-sm p-4'>
        Aún no tienes prompts
      </div>
    );
  }
  return (
    <ul className='flex flex-col gap-4 w-full'>
      {prompts
        .slice(0, 5)
        .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
        .map((prompt) => (
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
  );
}
