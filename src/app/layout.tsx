import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ScrollToTop} from "@/components/ScrollToTop";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Preve Dengue - Prevenção e Informação",
  description: "Generated by create next app",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <ScrollToTop/>
    <Navbar/>
    <main className="min-h-screen pt-28 p-2 md:px-32">
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  );
}
