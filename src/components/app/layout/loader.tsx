import { Loader2 } from 'lucide-react';

export default function Loader({
  message,
  isFullScreen,
}: Readonly<{ message: string; isFullScreen: boolean }>) {
  return (
    <div
      className={`w-full ${isFullScreen ? 'h-screen' : 'h-full'} flex items-center justify-center`}
    >
      <Loader2 className='animate-spin mr-2' /> {message}
    </div>
  );
}
