// src/app/providers.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThirdwebProvider } from 'thirdweb/react';
import { ReactNode, useState } from 'react';
// import { chains } from '@/lib/chains'; // your chain config

export default function Providers({ children }: { children: ReactNode }) {
  // your own QueryClient for any other queries
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {/* ThirdWebProvider will set up its own QueryClient under the hood */}
      <ThirdwebProvider>
        {children}
      </ThirdwebProvider>
    </QueryClientProvider>
  );
}
