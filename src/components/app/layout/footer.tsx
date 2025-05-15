export default function Footer({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='fixed bottom-0 flex gap-10 bg-neutral-100 dark:bg-neutral-900 w-full p-2 px-4 border-t text-sm font-extralight'>
      {children}
    </div>
  );
}
