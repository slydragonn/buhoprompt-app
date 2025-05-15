'use client';

import useUserPreferencesStore from '@/store/user-store';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { esES } from '@clerk/localizations';

export default function CustomClerkProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const { preferences } = useUserPreferencesStore();
  return (
    <ClerkProvider
      localization={esES}
      appearance={{ baseTheme: preferences.theme === 'dark' ? dark : [] }}
    >
      {children}
    </ClerkProvider>
  );
}
