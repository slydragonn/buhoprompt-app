import Navbar from '@/components/layout/navbar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <Navbar />
      <main className='flex flex-1'>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
