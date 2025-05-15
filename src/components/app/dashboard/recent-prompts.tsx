import { FileText } from 'lucide-react';
import { Badge } from '../../ui/badge';
export interface RecentPrompt {
  id: string;
  title: string;
  category: string;
  updatedAt: Date;
}
interface RecentPromptsProps {
  prompts: RecentPrompt[];
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
          <li
            key={prompt.id}
            className='flex gap-2 w-full bg-neutral-50 dark:bg-neutral-900 p-2 border rounded-md'
          >
            <FileText className='w-5 h-5 text-neutral-400 dark:text-neutral-500' />
            <div className='flex justify-between gap-1 w-full'>
              <h3 className='w-1/2 text-sm font-medium flow-hidden overflow-hidden whitespace-nowrap text-ellipsis'>
                {prompt.title}
              </h3>
              <div className='flex gap-2'>
                <Badge variant='secondary' className='hidden sm:block'>
                  {prompt.category}
                </Badge>
                <span className='text-sm font-extralight text-neutral-500 justify-self-end align-self-end'>
                  {prompt.updatedAt.toLocaleDateString()}
                </span>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}
