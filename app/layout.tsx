import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Radiant Horizons LLC | Independent Living Skills Services Sacramento",
  description:
    "Independent Living Skills (ILS) services supporting adults with developmental disabilities across Sacramento, Placer, Sutter, and El Dorado Counties. Radiant Horizons LLC.",
  keywords: [
    "Independent Living Skills Sacramento",
    "ILS services Sacramento",
    "Alta California Regional Center ILS provider",
    "developmental disability support Sacramento",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
