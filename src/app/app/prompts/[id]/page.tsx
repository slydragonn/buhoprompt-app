'use client';

import AiChat from '@/components/app/ai/chat';
import ErrorComponent from '@/components/app/layout/error';
import Loader from '@/components/app/layout/loader';
import PromptAlert from '@/components/app/prompts/prompt-alert';
import { MarkdownEditor } from '@/components/app/prompts/prompt-markdown-editor';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useDeletePrompt, usePrompt, useUpdatePrompt } from '@/hooks/use-prompts';
import { getFullTime } from '@/lib/utils';
import usePromptStore from '@/store/prompt-store';
import usePromptsStore from '@/store/prompts-store';
import { PromptData } from '@/types/prompt';
import { ArrowLeft, Copy, Save, Trash2 } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function Prompt() {
  const router = useRouter();
  const { id } = useParams();
  const { data, isPending, isError, isSuccess, error } = usePrompt(id as string);
  const deletePrompt = useDeletePrompt();
  const promptMutation = useUpdatePrompt();
  const { prompt, setPrompt } = usePromptStore();
  const { prompts, setPrompts, removePrompt } = usePromptsStore();
  const [isSyncing, setIsSyncing] = useState(false);
  const [newChanges, setNewChanges] = useState('');

  useEffect(() => {
    if (isSuccess) {
      setPrompt(data);
      const updatedPrompt = prompts.find((prompt) => prompt.id === data.id);
      if (updatedPrompt) {
        setNewChanges(updatedPrompt.improved);
      } else {
        setNewChanges(data.improved);
      }
      setIsSyncing(true);
    }
  }, [isSuccess]);

  const handleChange = useCallback(
    (value: string) => {
      console.log(value);
      if (isSyncing && value !== prompt.improved) {
        setIsSyncing(false);
      }
      setNewChanges(value);
    },
    [isSyncing, prompt.improved]
  );

  const handleSave = () => {
    promptMutation.mutate({
      id: prompt.id,
      title: prompt.title,
      description: prompt.description,
      improved: newChanges,
    });

    setPrompt({
      ...prompt,
      improved: newChanges,
      updatedAt: new Date(),
    });

    setPrompts(
      prompts.map((prompt) => {
        if (prompt.id === id) {
          return {
            ...prompt,
            improved: newChanges,
            updatedAt: new Date(),
          };
        }
        return prompt;
      })
    );

    setIsSyncing(true);

    toast.success('Prompt guardado correctamente');
  };

  const handleDelete = () => {
    deletePrompt.mutate({ id: id as string, title: prompt.title });
    removePrompt(id as string);
    toast.success('Prompt eliminado correctamente');
    setPrompt({} as PromptData);
    router.push('/app/prompts');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.improved);
    toast.success('Prompt copiado correctamente');
  };

  const handleExportToTxtFile = () => {
    const blob = new Blob([prompt.improved], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'prompt.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  if (isPending) return <Loader message='Obteniendo Prompt' isFullScreen />;

  if (isError) return <ErrorComponent errorMessage={error.message} isFullScreen />;

  return (
    <div className='container mx-auto p-6 max-w-7xl'>
      {/* Header */}
      <div className='flex sm:flex-row flex-col items-start sm:items-center justify-between gap-4 mb-6'>
        <div className='flex items-center gap-4'>
          <Button variant='ghost' size='sm' onClick={() => router.back()}>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Volver
          </Button>
          <h1 className='font-bold'>{prompt?.title}</h1>
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

      <div className='flex flex-col gap-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='col-span-1 md:col-span-2 flex flex-col gap-6'>
            {/* Editor */}
            <Card>
              <CardHeader>
                <CardTitle>Contenido del Prompt</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className='h-[400px]'>
                  <MarkdownEditor
                    value={newChanges}
                    onChange={(value) => handleChange(value)}
                    placeholder='Escribe tu prompt aquí... Puedes usar markdown para formato.'
                    className='h-[200px]'
                  />
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          <div className='flex flex-col gap-6'>
            {/* Detalles del prompt */}
            <Card className='hidden md:block col-span-1'>
              <CardHeader>
                <CardTitle>Detalles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                  {prompt?.description}
                </p>
                <div className='flex flex-col gap-1 mt-4'>
                  <p className='text-[13px] font-extralight text-neutral-500 dark:text-neutral-400'>
                    Creado: {getFullTime(prompt?.createdAt)}
                  </p>
                  <p className='text-[13px] font-extralight text-neutral-500 dark:text-neutral-400'>
                    Actualizado: {getFullTime(prompt?.updatedAt)}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Acciones rápidas */}
            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>Acciones</CardTitle>
              </CardHeader>
              <CardContent className='space-y-3'>
                <AiChat
                  onApplySuggestion={handleChange}
                  promptContent={newChanges || ''}
                  className='w-full justify-start'
                />
                <Button variant='outline' className='w-full justify-start' onClick={handleCopy}>
                  <Copy className='w-4 h-4 mr-2' />
                  Copiar prompt
                </Button>
                {/* Botón para exportar como archivo */}
                <Button
                  variant='outline'
                  className='w-full justify-start'
                  onClick={handleExportToTxtFile}
                >
                  <svg
                    className='w-4 h-4 mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                  </svg>
                  Exportar archivo
                </Button>
                <PromptAlert
                  button={
                    <Button
                      variant='outline'
                      className='w-full justify-start text-red-400 hover:text-red-500'
                    >
                      <Trash2 className='w-4 h-4 mr-2' />
                      Eliminar prompt
                    </Button>
                  }
                  handleClick={handleDelete}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
