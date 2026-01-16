import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-screen bg-cream antialiased font-body text-charcoal">
        {children}
      </body>
    </html>
  );
}

