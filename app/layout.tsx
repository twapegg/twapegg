import type { Metadata } from "next";

import StarBackground from "@/components/ui/star-background";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stanley Altonaga",
  description: "Stanley's personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-y-scroll overflow-x-hidden`}
      >
        <StarBackground />
        {children}
      </body>
    </html>
  );
}
