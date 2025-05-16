import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Ellipsis, Star, Trash2 } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { getFullTime } from '@/lib/utils';

function PrompCardMenu({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0' size='icon'>
          <Ellipsis />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-min p-2'>{children}</PopoverContent>
    </Popover>
  );
}

interface PromptCardProps {
  title: string;
  description: string;
  model: 'chatgpt' | 'claude' | 'deepseek' | 'sora' | 'gemini';
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export default function PromptCard({
  title,
  description,
  model,
  createdAt,
  updatedAt,
}: Readonly<PromptCardProps>) {
  return (
    <div className='relative flex flex-col justify-between gap-2 w-full sm:w-xl bg-neutral-50 dark:bg-neutral-900 border rounded-md overflow-hidden'>
      <div className='flex flex-col w-full gap-1 p-4'>
        <h3 className='max-w-3/4 md:max-w-full font-medium flow-hidden overflow-hidden whitespace-nowrap text-ellipsis'>
          {title}
        </h3>
        <p className='w-full text-sm font-extralight text-neutral-500 flow-hidden overflow-hidden whitespace-nowrap text-ellipsis'>
          {description}
        </p>
      </div>
      <div className='flex flex-wrap justify-between gap-2 w-full bg-neutral-100 dark:bg-neutral-800 p-1'>
        <Badge variant='outline'>{model}</Badge>
        <span className='text-[13px] font-extralight text-neutral-500 dark:text-neutral-400 justify-self-end align-self-end hidden sm:block'>
          Creado: {createdAt.toLocaleDateString()}
        </span>
        <span className='text-[13px] font-extralight text-neutral-500 dark:text-neutral-400 justify-self-end align-self-end'>
          Actualizado: {getFullTime(updatedAt.toUTCString())}
        </span>
      </div>
      <div className='absolute top-1 right-1'>
        <PrompCardMenu>
          <div className='flex flex-col gap-2'>
            <Button variant='ghost'>
              <Star /> Favorito
            </Button>
            <Button variant='ghost'>
              <Trash2 /> Eliminar
            </Button>
          </div>
        </PrompCardMenu>
      </div>
    </div>
  );
}
