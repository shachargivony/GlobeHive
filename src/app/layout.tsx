import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlobeHive - עבודה מהבית בתחום התיירות",
  description: "הצטרפו ל-GlobeHive, סוכנות עצמאית העובדת עם Travelor, והתחילו להרוויח מהבית בעזרת שיווק חבילות נופש – בלי ניסיון, בלי משרד.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
