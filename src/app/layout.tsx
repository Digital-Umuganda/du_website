import { Suspense } from "react";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import "./globals.css";
import Loading from "./loading";

// Components
import { Provider } from "@/components/provider";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Umuganda",
  description: "Let’s bridge the digital gap in Africa.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        href: "/favicon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Suspense fallback={<Loading />}>
          <Provider>{children}</Provider>
        </Suspense>
      </body>
    </html>
  );
}
