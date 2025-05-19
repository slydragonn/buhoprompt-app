'use client';
import { MarkdownEditor } from '@/components/app/prompts/prompt-markdown-editor';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Copy, Save } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Template() {
  const router = useRouter();

  return (
    <div className='container mx-auto p-6 max-w-7xl'>
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center gap-4'>
          <Button variant='ghost' size='sm' onClick={() => router.back()}>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Volver
          </Button>
          <h1 className='font-bold'>Template</h1>
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='outline' size='sm'>
            <Copy className='w-4 h-4 mr-2' />
            Copiar
          </Button>
          <Button variant='default' size='sm'>
            <Save className='w-4 h-4 mr-2' />
            Guardar
          </Button>
        </div>
      </div>

      <ScrollArea className='h-[calc(100vh-100px)]'>
        <MarkdownEditor
          onChange={() => console.log('onChange')}
          value='# Template'
          className='h-full'
        />
      </ScrollArea>

      {/** Footer */}
      <div className='flex flex-col gap-2 justify-between mt-6 w-full'>
        <div>
          <span className='text-sm font-medium'>Descripción</span>
          <p className='text-sm font-light'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit pariatur libero iure
            accusamus asperiores laborum minima facilis beatae veniam! Dolorum obcaecati error iste
            sunt, nesciunt libero neque minima quibusdam ab.
          </p>
        </div>
        <Separator />
        <div className='flex justify-between gap-2'>
          <span className='text-sm font-extralight'>Last updated: 2023-06-24</span>
          <span className='text-sm font-extralight'>Created by: @buhoprompt</span>
        </div>
      </div>
    </div>
  );
}
