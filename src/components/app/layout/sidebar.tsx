'use client';

import { Home, Zap, BookTemplate, Book, Box, Star } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { SignedIn, UserButton, useUser } from '@clerk/nextjs';
import { ModeToggle } from '../../theme/mode-toggle';
import { usePathname } from 'next/navigation';

// Menu items.
const items = {
  application: [
    {
      title: 'Inicio',
      url: '/app/dashboard',
      icon: Home,
    },
    {
      title: 'Favoritos',
      url: '#',
      icon: Star,
    },
    {
      title: 'Prompts',
      url: '/app/prompts',
      icon: Zap,
    },
    {
      title: 'Templates',
      url: '#',
      icon: BookTemplate,
    },
  ],
  resources: [
    {
      title: 'Documentación',
      url: '#',
      icon: Book,
    },
    {
      title: 'Extensión',
      url: '#',
      icon: Box,
    },
  ],
};

export default function AppSidebar() {
  const { user } = useUser();
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className='data-[slot=sidebar-menu-button]:!p-1.5'>
              <Link href='/'>
                <span className='text-base font-semibold'>BuhoPrompt</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Aplicación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.application.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.url === pathname}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Recursos</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.resources.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <SignedIn>
                <div className='flex items-center gap-2'>
                  <UserButton />
                  <div className='grid flex-1 text-left text-sm leading-tight'>
                    <span className='truncate font-medium'>{user?.firstName}</span>
                    <span className='truncate text-xs text-muted-foreground'>
                      {user?.emailAddresses[0]?.emailAddress}
                    </span>
                  </div>
                  <ModeToggle />
                </div>
              </SignedIn>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
