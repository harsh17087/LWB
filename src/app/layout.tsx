import Header from '@/components/Header';
import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  title: 'Learning With Basics',
  description: 'Learning With Basics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}