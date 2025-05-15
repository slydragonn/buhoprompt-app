'use client';
import RecentPrompts from '@/components/dashboard/recent-prompts';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useUser } from '@clerk/nextjs';
import { BookTemplate, Clock8, Zap } from 'lucide-react';

export default function Dashboard() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <div className='bg-radial from-neutral-200 dark:from-neutral-800 from-10% to-neutral-100 dark:to-neutral-950 to-50% fixed inset-0 -z-10 -top-4/5 -right-4/5 rounded-lg' />
      <section className='flex justify-center items-start w-full min-h-screen p-8 pb-30 sm:p-10 font-[family-name:var(--font-geist-sans)]'>
        <div className='flex flex-col gap-5 items-center sm:items-start'>
          <span className='text-sm font-light'>{new Date().toDateString()}</span>
          <h1 className='text-3xl font-normal text-center'>Welcome back, {user?.firstName}! 👋</h1>
          <Separator />
          <div className='flex flex-col justify-center items-center sm:flex-row gap-5 w-full'>
            <Button variant='outline' className='w-full sm:w-70 h-10 sm:h-20'>
              <Zap />
              New Prompt
            </Button>
            <Button variant='outline' className='w-full sm:w-70 h-10 sm:h-20'>
              <BookTemplate /> New Template
            </Button>
          </div>
          <div className='w-full'>
            <div className='flex items-center gap-2 mb-2'>
              <Clock8 className='w-4 h-4' />
              <h2 className='text-sm font-extralight'>Recent Prompts</h2>
            </div>
            <RecentPrompts prompts={[]} />
          </div>
        </div>
      </section>
      <div className='fixed bottom-0 flex gap-10 bg-neutral-100 dark:bg-neutral-900 w-full p-2 px-4 border-t text-sm font-extralight'>
        <span>Prompts: 10</span>
        <span>Templates: 10</span>
      </div>
    </>
  );
}
