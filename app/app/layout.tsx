import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Users Page",
  description: "Users Information with Nextjs and tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header style={{padding:"12px" , background:"#eee", textAlign:"center"}}>
          <h2 style={{color:"green"}}>USERS PAGE</h2>
        </header>
        <section>  <Link href="/about" className="text-white py-2 px-2 m-9 bg-blue-400 rounded-lg">AboutUs</Link></section>
        <main >
              {children}
        </main>
    <footer className="py-5 bg-black text-white text-center">@Copyright 2026</footer>
      </body>
    </html>
  );
}
