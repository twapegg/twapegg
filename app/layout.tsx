import type { Metadata } from "next";
import LightweightShell from "@/components/ui/lightweight-shell";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stanley Altonaga",
  description: "Stanley's personal portfolio website.",
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
        <LightweightShell>{children}</LightweightShell>
      </body>
    </html>
  );
}
