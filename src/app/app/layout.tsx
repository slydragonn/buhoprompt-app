import AppSidebar from '@/components/app/layout/sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='flex flex-1'>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
