"use client";

import './globals.css';
import { Poppins } from 'next/font/google';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { Footer } from '@/components/Footer';

const poppins = Poppins({ 
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const router = useRouter();

  return (
    <html lang="en">
      <head>
          <link
            rel="icon"
            href="/favicon.ico"
            sizes="any"
          />
          <title>Consulting WebFlow</title>
      </head>
      <body className={poppins.className}>
        <Header router={router} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
