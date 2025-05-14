import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center min-h-[calc(100vh-4rem)] p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <Image src='/buhoprompt-logo-dark.svg' alt='logo' width={150} height={150} />
        <h1 className='text-3xl font-extralight text-center'>
          The ultimate platform for prompt engineering
        </h1>
        <Link href='app/dashboard'>
          <Button>Go to App</Button>
        </Link>
      </div>
    </>
  );
}
