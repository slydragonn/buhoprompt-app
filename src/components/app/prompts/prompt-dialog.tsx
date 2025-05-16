'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown, Zap } from 'lucide-react';
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

const templates = [
  {
    value: 'investigation',
    label: 'Investigación',
  },
  {
    value: 'programming',
    label: 'Programación',
  },
  {
    value: 'writing',
    label: 'Escritura',
  },
  {
    value: 'design',
    label: 'Diseño',
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

export default function CreatePromptDialog() {
  const promptForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    const dataToShow = {
      title: data.title.slice(0, 10) + '...',
      description: data.description.slice(0, 10) + '...',
      content: data.content.slice(0, 10) + '...',
      template: data.template,
    };
    toast('Enviaste los siguientes datos:', {
      description: (
        <pre className='mt-2 w-[320px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(dataToShow, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className='w-full sm:w-70 h-10'>
          <Zap />
          Nuevo Prompt
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Form {...promptForm}>
          <form onSubmit={promptForm.handleSubmit(onSubmit)} className='space-y-6'>
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
                      className='resize-none h-28'
                      placeholder='Generate a resume for a job application'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full'>
              Crear prompt
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
