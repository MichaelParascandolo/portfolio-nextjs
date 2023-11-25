"use client";

import "./styles/globals.css";
import { Pacifico } from "next/font/google";
import { Providers } from "./providers";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={`${pacifico.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
