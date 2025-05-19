import MainLayout from '@/components/app/layout/main';
import Header from '@/components/app/layout/header';
import Footer from '@/components/app/layout/footer';
import CreatePromptDialog from '@/components/app/prompts/prompt-dialog';
import PromptList from '@/components/app/prompts/prompt-list';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

export default function Prompts() {
  return (
    <>
      <MainLayout>
        <Header message='Mis Prompts ✨' />
        <CreatePromptDialog
          buttonComponent={
            <Button variant='outline' className='w-full h-10'>
              <Zap />
              Nuevo Prompt
            </Button>
          }
        />
        <PromptList filter='all' />
      </MainLayout>
      <Footer>Total: 10</Footer>
    </>
  );
}
