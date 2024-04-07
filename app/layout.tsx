import Footer from '@/components/base/Footer';
import Header from '@/components/base/Header';
import { ThemeProvider } from '@/components/base/ThemeProvider';
import ParticlesComponent from '@/components/utils/Particles';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
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
        className={`${outfit.className} relative scrollbar-thin scrollbar-thumb-neutral-400 hover:scrollbar-thumb-gray-600 active:scrollbar-thumb-slate-500 scrollbar-track-gray-200 overflow-y-scroll`}
      >
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <ParticlesComponent />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
