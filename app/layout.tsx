import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";

const roboto = LocalFont({
  src: "../public/fonts/roboto.woff2",
});
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${roboto.className} text-primary`}>{children}</body>
    </html>
  );
}
