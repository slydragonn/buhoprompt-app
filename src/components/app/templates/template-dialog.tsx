'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCreateTemplate } from '@/hooks/use-templates';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const baseOptions = [
  {
    value: 'empty',
    label: 'Vacío',
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
  {
    value: 'general',
    label: 'General',
  },
];

const formSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'El título debe tener al menos 3 caracteres' })
    .max(20, { message: 'El título debe tener menos de 20 caracteres' }),
  description: z
    .string()
    .min(3, { message: 'La descripción debe tener al menos 3 caracteres' })
    .max(100, { message: 'La descripción debe tener menos de 100 caracteres' }),
  base: z.string(),
});

export default function CreateTemplateDialog({
  buttonComponent,
}: Readonly<{ buttonComponent: React.ReactNode }>) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const templateForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const templateMutation = useCreateTemplate();

  async function onSubmit() {
    try {
      await templateMutation.mutateAsync({
        title: templateForm.getValues('title'),
        description: templateForm.getValues('description'),
        base: templateForm.getValues('base'),
      });
      toast.success('Template creado correctamente');
    } catch (error) {
      console.error('Error al crear el template:', error);
      toast.error('Error al crear el template');
    }
  }

  return (
    <>
      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => !templateMutation.isPending && setDialogOpen(open)}
      >
        <DialogTrigger asChild>{buttonComponent}</DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Crear template</DialogTitle>
            <DialogDescription>Crea un template para usarlo en tus prompts</DialogDescription>
          </DialogHeader>
          <Form {...templateForm}>
            <form
              onSubmit={templateForm.handleSubmit(onSubmit)}
              className={cn(
                'flex flex-col space-y-4 px-6 pb-6',
                templateMutation.isPending && 'pointer-events-none opacity-50'
              )}
            >
              <FormField
                name='title'
                control={templateForm.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='Título' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='description'
                control={templateForm.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='Descripción' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='base'
                control={templateForm.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder='Template base' />
                        </SelectTrigger>
                        <SelectContent>
                          {baseOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type='submit' disabled={templateMutation.isPending}>
                  {templateMutation.isPending ? (
                    <>
                      <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                      Creando Template...
                    </>
                  ) : (
                    'Crear Template'
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      {templateMutation.isPending && (
        <div className='fixed inset-0 bg-background/90 backdrop-blur-sm z-[100] flex items-center justify-center'>
          <div className='flex flex-col items-center gap-4'>
            <Loader2 className='h-12 w-12 animate-spin' />
            <h2 className='text-xl font-semibold'>Creando Template...</h2>
            <p className='text-muted-foreground'>
              Por favor espera, esto puede tomar unos segundos
            </p>
          </div>
        </div>
      )}
    </>
  );
}
