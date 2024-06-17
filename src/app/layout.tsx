import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { APP_CONFIG } from "@/config";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_CONFIG.title,
  description: APP_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen dark:bg-neutral-950 dark:text-neutral-50",
          inter.className,
        )}
      >
        <div className="mx-auto max-w-6xl">
          <Navbar />
          <main className="py-24">{children}</main>
        </div>
      </body>
    </html>
  );
}
