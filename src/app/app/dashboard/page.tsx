'use client';
import RecentPrompts from '@/components/app/dashboard/recent-prompts';
import Footer from '@/components/app/layout/footer';
import Header from '@/components/app/layout/header';
import MainLayout from '@/components/app/layout/main';
import CreatePromptDialog from '@/components/app/prompts/prompt-dialog';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { BookTemplate, Clock8, Zap } from 'lucide-react';
import { examplePrompts } from '../prompts/page';

export default function Dashboard() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <MainLayout>
        <div className='flex flex-col gap-5 items-center sm:items-start'>
          <Header message={`Bienvenido de nuevo, ${user?.firstName}! 👋`} />
          <div className='flex flex-col justify-center items-center sm:flex-row gap-5 w-full'>
            <CreatePromptDialog
              buttonComponent={
                <Button variant='outline' className='w-full sm:w-70 h-10'>
                  <Zap />
                  Nuevo Prompt
                </Button>
              }
            />
            <Button variant='outline' className='w-full sm:w-70 h-10'>
              <BookTemplate /> Nuevo Template
            </Button>
          </div>
          <div className='w-full'>
            <div className='flex items-center gap-2 mb-2'>
              <Clock8 className='w-4 h-4' />
              <h2 className='text-sm font-extralight'>Prompts Recientes</h2>
            </div>
            <RecentPrompts prompts={examplePrompts} />
          </div>
        </div>
      </MainLayout>
      <Footer>
        <span>Prompts: 10</span>
        <span>Templates: 10</span>
      </Footer>
    </>
  );
}
