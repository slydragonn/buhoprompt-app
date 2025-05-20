import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';

export default function SignInPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-purple-500 to-green-500'>
      <div className='flex flex-col items-center justify-center w-full max-w-md'>
        <div className='mb-8 flex justify-center'>
          <Link href='/' className='flex items-center gap-2'>
            <Image src='/buhoprompt-logo-dark.svg' alt='logo' width={50} height={50} />
            <span className='text-xl font-bold text-white'>BuhoPrompt</span>
          </Link>
        </div>
        <SignIn />
      </div>
    </div>
  );
}
