export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className='flex justify-center items-start w-full min-h-screen  pb-30 p-4 md:p-10  sm:p-8 font-[family-name:var(--font-geist-sans)]'>
      <div className='bg-radial from-neutral-200 dark:from-neutral-800 from-10% to-neutral-100 dark:to-neutral-950 to-50% fixed inset-0 -z-10 -top-4/5 -right-4/5 rounded-lg' />
      <div className='flex flex-col gap-5 items-center sm:items-start'>{children}</div>
    </section>
  );
}
