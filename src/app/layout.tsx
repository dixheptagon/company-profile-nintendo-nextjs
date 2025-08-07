import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { ToastContainer } from "react-toastify";
import AuthProvider from "@/providers/AuthProvider";
import FooterSection from "@/components/footer/footer-section";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nintendo® - Official Site",
  description:
    "Join the world of Nintendo® — Discover legendary characters, shop exclusive products, read latest blogs, and connect with the Nintendo community.",
  keywords: [
    "Nintendo",
    "Nintendo Store",
    "Mario",
    "Zelda",
    "Switch Games",
    "Nintendo Blog",
    "Nintendo Teams",
    "Play Together Sale",
  ],
  creator: "Forentino Haryanto",
  publisher: "Forentino Haryanto",
  openGraph: {
    title: "Nintendo® - Official Site",
    description:
      "Join the world of Nintendo® — Discover legendary characters, shop exclusive products, read latest blogs, and connect with the Nintendo community.",
    url: "https://your-nintendo-clone-site.com",
    siteName: "Nintendo® - Official Site",
    images: [
      {
        url: "https://assets.nintendo.com/image/upload/v1643742733/ncom/global/social-share.jpg", // ganti dengan URL og-image yang kamu pakai
        width: 1200,
        height: 630,
        alt: "Nintendo ® - Official Site",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nintendo® - Official Site",
    description:
      "Dive into the world of Nintendo® — your go-to place for characters, stories, blogs, and exclusive products.",
    images: [
      "https://assets.nintendo.com/image/upload/v1643742733/ncom/global/social-share.jpg",
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground h-screen antialiased`}
      >
        <AuthProvider>
          <ToastContainer />
          <Navbar />
          {children}
          <FooterSection />
        </AuthProvider>
      </body>
    </html>
  );
}
