import type { Metadata } from 'next';
import './globals.css';
import { Nunito } from 'next/font/google';
import ThemeContextProvider from '@/context/theme-context';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Header from '@/components/header';
import ThemeSwitch from '@/components/theme-switch';
import { Toaster } from 'react-hot-toast';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Justin Fontaine | student-apprentice developer',
  description: 'student-apprentice developer at Atmo HDF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className='!scroll-smooth'>
      <body
        className={`${nunito.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
