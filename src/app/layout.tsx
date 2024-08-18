import type { Metadata } from "next";
import { jost, urbanist } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkyDrop",
  description: "Created by m1her",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${urbanist.variable}`}>
        {children}
      </body>
    </html>
  );
}
