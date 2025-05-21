import AppSidebar from '@/components/app/layout/sidebar';
import WelcomeDialog from '@/components/app/layout/welcome';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';

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
        <WelcomeDialog />
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
