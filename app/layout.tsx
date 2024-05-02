import type { Metadata } from "next";
import { Playfair } from "next/font/google";
import "./globals.css";

const inter = Playfair({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mana and Norberto Wedding",
  description: "Mana and Norberto Wedding Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
