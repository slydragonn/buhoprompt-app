'use client';
import ErrorComponent from '@/components/app/layout/error';
import Loader from '@/components/app/layout/loader';
import { MarkdownEditor } from '@/components/app/prompts/prompt-markdown-editor';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useTemplate, useUpdateTemplate } from '@/hooks/use-templates';
import { getFullTime } from '@/lib/utils';
import useTemplateStore from '@/store/template-store';
import useTemplatesStore from '@/store/templates-store';
import { ArrowLeft, Copy, Save } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function Template() {
  const router = useRouter();
  const { id } = useParams();
  const { data, isPending, isError, isSuccess, error } = useTemplate(id as string);
  const templateMutation = useUpdateTemplate();
  const { template, setTemplate } = useTemplateStore();
  const { templates, setTemplates } = useTemplatesStore();
  const [isSyncing, setIsSyncing] = useState(true);
  const [newChanges, setNewChanges] = useState('');

  useEffect(() => {
    if (isSuccess) {
      setTemplate(data);
      const updatedTemplate = templates.find((template) => template.id === data.id);
      if (updatedTemplate) {
        setNewChanges(updatedTemplate.content);
      } else {
        setNewChanges(data.content);
      }
      setIsSyncing(true);
    }
  }, [isSuccess]);

  const handleChange = useCallback(
    (value: string) => {
      console.log(value);
      if (isSyncing && value !== template.content) {
        setIsSyncing(false);
      }
      setNewChanges(value);
    },
    [isSyncing, template.content]
  );

  const handleSave = () => {
    templateMutation.mutate({
      id: template.id,
      title: template.title,
      description: template.description,
      content: newChanges,
    });

    setTemplate({
      ...template,
      content: newChanges,
      updatedAt: new Date(),
    });

    setTemplates(
      templates.map((template) => {
        if (template.id === id) {
          return {
            ...template,
            content: newChanges,
            updatedAt: new Date(),
          };
        }
        return template;
      })
    );

    setIsSyncing(true);

    toast.success('Template guardado correctamente');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(template.content);
    toast.success('Template copiado correctamente');
  };

  if (isPending) return <Loader message='Obteniendo Template' isFullScreen />;

  if (isError) return <ErrorComponent errorMessage={error.message} isFullScreen />;

  return (
    <div className='container mx-auto p-6 max-w-7xl'>
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center gap-4'>
          <Button variant='ghost' size='sm' onClick={() => router.back()}>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Volver
          </Button>
          <h1 className='font-bold'>{template.title}</h1>
          {!isSyncing && (
            <span className='text-sm text-orange-500 font-medium'>• Cambios sin guardar</span>
          )}
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='outline' size='sm' onClick={handleCopy}>
            <Copy className='w-4 h-4 mr-2' />
            Copiar
          </Button>
          <Button
            variant={isSyncing ? 'default' : 'outline'}
            size='sm'
            onClick={handleSave}
            disabled={isSyncing}
          >
            <Save className='w-4 h-4 mr-2' />
            {isSyncing ? 'Guardado' : 'Guardar'}
          </Button>
        </div>
      </div>

      <ScrollArea className='h-[calc(100vh-100px)]'>
        <MarkdownEditor
          onChange={(content) => handleChange(content)}
          value={newChanges || template.base}
          className='h-full'
        />
      </ScrollArea>

      {/** Footer */}
      <div className='flex flex-col gap-2 justify-between mt-6 w-full'>
        <div>
          <span className='text-sm font-medium'>Descripción</span>
          <p className='text-sm font-light'>{template.description}</p>
        </div>
        <Separator />
        <div className='flex justify-between gap-2'>
          <span className='text-sm font-extralight'>
            Última actualización: {getFullTime(template.updatedAt)}{' '}
          </span>
          <span className='text-sm font-extralight'>Creado: {getFullTime(template.createdAt)}</span>
        </div>
      </div>
    </div>
  );
}
