import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/app/lib/utils"
import { Inter } from 'next/font/google'
import { Providers } from "@/app/components/Providers";


const inter = Inter({ subsets: ["latin"]})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ cn(inter.className, "min-h-screen antialiased")}  >
        <Providers>
          <main className="h-screen dark text-foreground bg-background">
          {children}

          </main>

          </Providers>
      </body>
    </html>
  );
}
