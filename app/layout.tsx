import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/base/Header';
import Footer from '@/components/base/Footer';
import { ThemeProvider } from '@/components/base/ThemeProvider';

const outfit = Outfit({ subsets: ['latin'] });

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
        className={`${outfit.className} scrollbar-thin scrollbar-thumb-neutral-400 hover:scrollbar-thumb-gray-600 active:scrollbar-thumb-slate-500 scrollbar-track-gray-200 overflow-y-scroll`}
      >
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
