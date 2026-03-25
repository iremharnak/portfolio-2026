import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iremharnak.com"),
  title: "Irem Harnak — Product Designer",
  description:
    "Product designer building clear, principled interfaces. Focused on design systems, onboarding, and data-rich tools.",
  icons: {
    icon: "/imi-favicon.png",
    shortcut: "/imi-favicon.png",
    apple: "/imi-favicon.png",
  },
  openGraph: {
    title: "Irem Harnak — Product Designer",
    description:
      "Product designer building clear, principled interfaces. Focused on design systems, onboarding, and data-rich tools.",
    type: "website",
    locale: "en_US",
    url: "https://iremharnak.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
