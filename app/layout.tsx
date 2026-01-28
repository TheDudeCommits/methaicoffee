import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "ME THAI COFFEE | Premium Thai Coffee Experience",
  description:
    "Good coffee will always find the audience. We provide a variety of unique and best specialty coffees, grown and roasted with 40+ years of expertise.",
  keywords: ["coffee", "thai coffee", "specialty coffee", "bangkok", "cafe"],
  openGraph: {
    title: "ME THAI COFFEE",
    description: "Premium Thai Coffee Experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-cream antialiased font-body text-charcoal ${bebasNeue.variable}`}>
        {children}
      </body>
    </html>
  );
}

