import { Separator } from '@/components/ui/separator';
import { getLocaleDate } from '@/lib/utils';

interface HeaderProps {
  message: string;
}
export default function Header({ message }: Readonly<HeaderProps>) {
  return (
    <div className='flex flex-col gap-5 items-center sm:items-start w-full'>
      <span className='text-sm font-light'>{getLocaleDate(new Date())}</span>
      <h1 className='text-3xl font-normal text-center'>{message}</h1>
      <Separator />
    </div>
  );
}
