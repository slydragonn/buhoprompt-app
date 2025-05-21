import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { ModeToggle } from '../../theme/mode-toggle';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='z-50 fixed flex justify-between items-center w-full h-16 p-4 gap-4 border-b border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-950/60 backdrop-blur'>
      <Link href='/' className='font-bold'>
        BuhoPrompt
      </Link>
      <nav className='flex gap-4 text-sm dark:text-neutral-300 text-neutral-800'>
        <Link href='/app/dashboard' className='hover:underline'>
          App
        </Link>
        <Link href='/docs' className='hover:underline'>
          Docs
        </Link>
        <Link href='/extension' className='hover:underline'>
          Extensión
        </Link>
        <Link href='/contact' className='hover:underline'>
          Contacto
        </Link>
      </nav>
      <div className='flex gap-4 text-sm'>
        <ModeToggle />
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
