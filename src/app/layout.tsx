import { HomeIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// TODO: Add static metadata export that sets title template and description (from README.md).
export const metadata: Metadata = {
  title: "Tanstack Watch %s | Tanstack Watch",
  description: "App for practicing Next.js.",
  metadataBase: new URL(
    "https://metadata-eight.vercel.app/" ?? "http://localhost:3000"
  ),
};
console.log({
  vercel: process.env.VERCEL_URL,
  next: process.env.NEXT_PUBLIC_VERCEL_URL,

  v: process.env.VERCEL_ENV,
  n: process.env.NEXT_PUBLIC_VERCEL_ENV,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center gap-20 p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <Link href="/" className="flex gap-3 items-center text-xl">
              <HomeIcon /> TanStack Watch
            </Link>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                By{" "}
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div>

          {children}
        </main>
      </body>
    </html>
  );
}
