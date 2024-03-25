import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Naslth's Portfolio",
  description: "Naslth's portfolio"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} scrollbar-thin scrollbar-thumb-neutral-400 hover:scrollbar-thumb-gray-600 active:scrollbar-thumb-slate-500 scrollbar-track-gray-200 overflow-y-scroll`}
      >
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
