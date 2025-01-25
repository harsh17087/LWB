import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { nunito } from "@/utils/styles/font";

export const metadata: Metadata = {
  title: "Learning With Basics",
  description: "Learning With Basics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <AppRouterCacheProvider>
          <Header />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
