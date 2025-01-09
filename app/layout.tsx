/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import "./globals.css";
// import Image from "next/image";



export const metadata: Metadata = {
  title: "Bareen Parvez - Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const width = screen.width
  return (
    <html lang="en">
      <body
        className={` w-screen relative`}
      >
        {children}

      </body>
    </html>
  );
}
