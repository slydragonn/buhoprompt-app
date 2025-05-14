'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CustomClerkProvider from '@/components/clerk-provider';
import { useState } from 'react';

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <CustomClerkProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </CustomClerkProvider>
  );
}
