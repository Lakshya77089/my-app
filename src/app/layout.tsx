// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Providers from './providers'; // ✅ your QueryClientProvider wrapper

export const metadata = {
  title: 'BFM Academy',
  description: 'Web3 Learning Platform',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
