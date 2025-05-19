import { getFullTime } from '@/lib/utils';
import Link from 'next/link';
import PromptAlert from '../prompts/prompt-alert';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { PrompCardMenu } from '../prompts/prompt-card';
import { useDeleteTemplate } from '@/hooks/use-templates';
import { toast } from 'sonner';
import useTemplatesStore from '@/store/templates-store';
import { Badge } from '@/components/ui/badge';

interface TemplateCardProps {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function TemplateCard({
  id,
  title,
  description,
  createdAt,
  updatedAt,
}: Readonly<TemplateCardProps>) {
  const deleteTemplate = useDeleteTemplate();
  const { removeTemplate } = useTemplatesStore();

  function handleDeleteTemplate() {
    deleteTemplate.mutate({ id, title });
    removeTemplate(id);
    toast.success('Prompt eliminado correctamente');
  }

  return (
    <div className='relative flex flex-col gap-1 w-full sm:w-xl bg-neutral-50 dark:bg-neutral-900 border rounded-md overflow-hidden'>
      <div className='flex flex-col w-full gap-1 p-4 pb-0'>
        <Link href={`/app/templates/${id}`}>
          <h3 className='max-w-3/4 md:max-w-full font-medium flow-hidden overflow-hidden whitespace-nowrap text-ellipsis'>
            {title}
          </h3>
        </Link>
        <p className='w-full text-sm font-extralight text-neutral-500 flow-hidden overflow-hidden whitespace-nowrap text-ellipsis'>
          {description}
        </p>
      </div>
      <div className='flex flex-wrap gap-4 w-full p-2'>
        <Badge variant='secondary'>Última actualización: {getFullTime(updatedAt)}</Badge>
        <Badge variant='secondary'>Creado: {getFullTime(createdAt)}</Badge>
      </div>
      <div className='absolute top-1 right-1'>
        <PrompCardMenu>
          <div className='flex flex-col gap-2'>
            <PromptAlert
              button={
                <Button variant='ghost'>
                  <Trash2 /> Eliminar
                </Button>
              }
              customMessage='Estas a punto de eliminar un prompt.'
              handleClick={handleDeleteTemplate}
            />
          </div>
        </PrompCardMenu>
      </div>
    </div>
  );
}
