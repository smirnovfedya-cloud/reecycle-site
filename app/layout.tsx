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

export const metadata: Metadata = {
  metadataBase: new URL("https://reecycle.app"),
  title: "REE — The Waste Reduction Company",
  description: "Waste reduction systems, recycling, ESG-ready reporting, circular products and hands-on workshops across the UAE.",
  icons: {
    icon: "/assets/ree-logo.svg",
    shortcut: "/assets/ree-logo.svg",
  },
  openGraph: {
    title: "REE — The Waste Reduction Company",
    description: "Find what is in the bags, recover what still has value and turn the result into reportable data.",
    type: "website",
    images: [{ url: "/og.png", width: 1732, height: 909, alt: "REE — The Waste Reduction Company" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "REE — The Waste Reduction Company",
    description: "Independent waste reduction, recycling and reporting in the UAE.",
    images: ["/og.png"],
  },
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
