export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className='flex justify-center items-start w-full min-h-screen p-8 pb-30 sm:p-10 font-[family-name:var(--font-geist-sans)]'>
      {children}
    </section>
  );
}
