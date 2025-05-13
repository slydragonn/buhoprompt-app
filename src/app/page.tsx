import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <Header />
      <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <Link href='app/dashboard'>
          <Button>Go to App</Button>
        </Link>
      </div>
    </>
  );
}
