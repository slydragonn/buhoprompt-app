'use client';

import useUserPreferencesStore from '@/store/user-store';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

export default function CustomClerkProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const { preferences } = useUserPreferencesStore();
  return (
    <ClerkProvider appearance={{ baseTheme: preferences.theme === 'dark' ? dark : [] }}>
      {children}
    </ClerkProvider>
  );
}
