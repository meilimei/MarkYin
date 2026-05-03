import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "AncientEchoes — Discover China's Greatest Cultural Treasures",
    template: "%s | AncientEchoes",
  },
  description:
    "Explore the stories behind China's most extraordinary artifacts and museums. From Bronze Age mysteries to imperial masterpieces — 5,000 years of heritage, one click away.",
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
    title: "AncientEchoes — Discover China's Greatest Cultural Treasures",
    description:
      "Explore the stories behind China's most extraordinary artifacts and museums.",
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "AncientEchoes — Discover China's Greatest Cultural Treasures",
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
    <html lang="en">
      <head>
        {/* Google AdSense - Replace with your actual publisher ID */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous" /> */}
      </head>
      <body className="bg-white text-ink-900 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
