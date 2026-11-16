import { Suspense } from 'react';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AppProvider } from './provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Todo List — Bulletproof React',
  description: 'Next.js App Router + Bulletproof React + RTK Query + Slice + Zod',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Suspense fallback={null}>
          <AppProvider>{children}</AppProvider>
        </Suspense>
      </body>
    </html>
  );
}
