'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCreatePrompt } from '@/hooks/use-prompts';

const templates = [
  {
    value: 'general',
    label: 'General',
  },
  {
    value: 'investigation',
    label: 'Investigación',
  },
  {
    value: 'programming',
    label: 'Programación',
  },
  {
    value: 'images',
    label: 'Generación de imágenes',
  },
  {
    value: 'summary',
    label: 'Resumen',
  },
] as const;

const formSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'El título debe tener al menos 3 caracteres' })
    .max(50, { message: 'El título debe tener menos de 50 caracteres' }),
  description: z
    .string()
    .min(3, { message: 'La descripción debe tener al menos 3 caracteres' })
    .max(100, { message: 'La descripción debe tener menos de 100 caracteres' }),
  content: z
    .string()
    .min(3, { message: 'El contenido debe tener al menos 3 caracteres' })
    .max(5000, { message: 'El contenido debe tener menos de 5000 caracteres' }),
  template: z.string(),
});

export default function CreatePromptDialog({
  buttonComponent,
}: Readonly<{ buttonComponent: React.ReactNode }>) {
  const promptForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const promptMutation = useCreatePrompt();

  async function onSubmit() {
    try {
      await promptMutation.mutateAsync({
        title: promptForm.getValues('title'),
        description: promptForm.getValues('description'),
        initial: promptForm.getValues('content'),
        templateId: promptForm.getValues('template'),
      });
      toast.success('Prompt creado correctamente');
    } catch (error) {
      console.error('Error al crear el prompt:', error);
      toast.error('Error al crear el prompt');
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>{buttonComponent}</SheetTrigger>
      <SheetContent>
        <ScrollArea className='max-h-[100vh]'>
          <SheetHeader>
            <SheetTitle>Crear Prompt</SheetTitle>
          </SheetHeader>
          <Form {...promptForm}>
            <form
              onSubmit={promptForm.handleSubmit(onSubmit)}
              className='flex flex-col space-y-4 px-6 pb-6'
            >
              <FormField
                control={promptForm.control}
                name='title'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título</FormLabel>
                    <FormControl>
                      <Input placeholder='Example: Resume' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={promptForm.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Input placeholder='Resume for a job application' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={promptForm.control}
                name='template'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Template</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant='outline'
                            role='combobox'
                            className={cn(
                              'w-[200px] justify-between',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value
                              ? templates.find((template) => template.value === field.value)?.label
                              : 'Seleccione un template...'}
                            <ChevronsUpDown className='opacity-50' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-[200px] p-0'>
                        <Command>
                          <CommandInput placeholder='Buscar template...' className='h-9' />
                          <CommandList>
                            <CommandEmpty>Sin resultados</CommandEmpty>
                            <CommandGroup>
                              {templates.map((template) => (
                                <CommandItem
                                  value={template.label}
                                  key={template.value}
                                  onSelect={() => {
                                    promptForm.setValue('template', template.value);
                                  }}
                                >
                                  {template.label}
                                  <Check
                                    className={cn(
                                      'ml-auto',
                                      template.value === field.value ? 'opacity-100' : 'opacity-0'
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={promptForm.control}
                name='content'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contenido</FormLabel>
                    <FormControl>
                      <Textarea
                        className='resize-none h-56'
                        placeholder='Generate a resume for a job application'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='self-end' disabled={promptMutation.isPending}>
                {promptMutation.isPending && <Loader2 className='h-4 w-4 animate-spin' />}
                Crear Prompt
              </Button>
            </form>
          </Form>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
