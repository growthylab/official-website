import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Head";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Midas | Your ultimate strategic ads autopilot",
  description:
    "Midas fuses over $5 Billion in campaign expertise with the most advanced algorithms, empowering worldwide advertisers to effortlessly build enterprise-grade campaigns.",
  icons: {
    icon: "/favicon.svg",
  },
  other: {
    buildtime: process.env.BUILD_TIME || new Date().toISOString(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <div className="min-h-screen bg-[#f5f5f7] mt-[100px]">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main>{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
