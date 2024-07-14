import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { dark  } from '@clerk/themes';

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sing Along",
  description: "Video calling App",
  icons: {
    icon: "/icons/full-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/all.min.css" />

        <link rel="stylesheet" href="/css/quick-website.css" id="stylesheet" />
      </head>
      <body>

        <ClerkProvider
          appearance={{
            baseTheme: dark 
          }}
        >
          <body className={`${inter.className} bg-dark-2`}>
            <Toaster />
            {children}
          </body>
        </ClerkProvider>


        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
        <script src="/js/svg-injector.min.js"></script>
        <script src="/js/feather.min.js"></script>
        
        <script src="/js/quick-website.js"></script>
      </body>
    </html>
  );
}
