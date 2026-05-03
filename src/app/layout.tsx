import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    default: `${SITE_NAME} — Discover China's Cultural Treasures`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Explore the magnificent artifacts, museums, and historical periods that shaped Chinese civilization.",
  keywords: [
    "Chinese artifacts",
    "Chinese museums",
    "Terracotta Warriors",
    "Sanxingdui",
    "Forbidden City",
    "Chinese culture",
    "ancient China",
    "Chinese history",
    "museum guide",
    "cultural heritage",
  ],
  openGraph: {
    title: "China Heritage — Discover China's Greatest Cultural Treasures",
    description:
      "Explore the stories behind China's most extraordinary artifacts and museums.",
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "China Heritage — Discover China's Greatest Cultural Treasures",
    description:
      "Explore the stories behind China's most extraordinary artifacts and museums.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google AdSense - Replace with your actual publisher ID */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous" /> */}
      </head>
      <body className="bg-paper text-ink-900 font-sans min-h-screen flex flex-col antialiased selection:bg-imperial-500 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
