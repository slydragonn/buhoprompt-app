import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { ModeToggle } from '../theme/mode-toggle';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center w-full h-16 p-4 gap-4 border-b border-dashed border-neutral-300 dark:border-neutral-800'>
      <Link href='/'>BuhoPrompt</Link>
      <div className='flex gap-4'>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ModeToggle />
      </div>
    </header>
  );
}
