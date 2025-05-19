import { Button } from '@/components/ui/button';
import { Ellipsis, Trash2 } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { getFullTime } from '@/lib/utils';
import Link from 'next/link';
import { useDeletePrompt } from '@/hooks/use-prompts';
import usePromptsStore from '@/store/prompts-store';
import PromptAlert from './prompt-alert';
import { toast } from 'sonner';

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
  id: string;
  title: string;
  description: string;
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export default function PromptCard({
  id,
  title,
  description,
  createdAt,
  updatedAt,
}: Readonly<PromptCardProps>) {
  const deletePrompt = useDeletePrompt();
  const { removePrompt } = usePromptsStore();

  function handleDeletePrompt() {
    removePrompt(id);
    deletePrompt.mutate({ id, title });
    toast.success('Prompt eliminado correctamente');
  }

  return (
    <div className='relative flex flex-col justify-between gap-2 w-full sm:w-xl bg-neutral-50 dark:bg-neutral-900 border rounded-md overflow-hidden'>
      <div className='flex flex-col w-full gap-1 p-4'>
        <Link href={`/app/prompts/${id}`}>
          <h3 className='max-w-3/4 md:max-w-full font-medium flow-hidden overflow-hidden whitespace-nowrap text-ellipsis'>
            {title}
          </h3>
        </Link>
        <p className='w-full text-sm font-extralight text-neutral-500 flow-hidden overflow-hidden whitespace-nowrap text-ellipsis'>
          {description}
        </p>
      </div>
      <div className='flex flex-wrap justify-between gap-2 w-full bg-neutral-100 dark:bg-neutral-800 p-1'>
        <span className='text-[13px] font-extralight text-neutral-500 dark:text-neutral-400 justify-self-end align-self-end hidden sm:block'>
          Creado: {getFullTime(createdAt)}
        </span>
        <span className='text-[13px] font-extralight text-neutral-500 dark:text-neutral-400 justify-self-end align-self-end'>
          Actualizado: {getFullTime(updatedAt)}
        </span>
      </div>
      <div className='absolute top-1 right-1'>
        <PrompCardMenu>
          <div className='flex flex-col gap-2'>
            {/* <Button variant='ghost'><Star /> Favorito</Button> */}
            <PromptAlert
              button={
                <Button variant='ghost'>
                  <Trash2 /> Eliminar
                </Button>
              }
              customMessage='Estas a punto de eliminar un prompt.'
              handleClick={handleDeletePrompt}
            />
          </div>
        </PrompCardMenu>
      </div>
    </div>
  );
}
