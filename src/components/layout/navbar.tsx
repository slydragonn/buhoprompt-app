'use client';

import { Home, Settings, Zap, BookTemplate, ArrowUpCircleIcon } from 'lucide-react';

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

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/app/dashboard',
    icon: Home,
  },
  {
    title: 'Prompts',
    url: '#',
    icon: Zap,
  },
  {
    title: 'Templates',
    url: '#',
    icon: BookTemplate,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
];

export default function Navbar() {
  const { user } = useUser();

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className='data-[slot=sidebar-menu-button]:!p-1.5'>
              <Link href='/'>
                <ArrowUpCircleIcon className='h-5 w-5' />
                <span className='text-base font-semibold'>BuhoPrompt</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
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
                </div>
              </SignedIn>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
