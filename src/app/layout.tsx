import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL('https://mukhtardev.my.id'),
  title: {
    default: "Mukhtar Fadhlurrohman | Fullstack Developer Indonesia",
    template: "%s | Mukhtar Fadhlurrohman"
  },
  description: "Portfolio of Mukhtar Fadhlurrohman, a Software Engineer & Fullstack Developer based in Indonesia. Specializing in Next.js, React, and modern web technologies.",
  keywords: [
    "Mukhtar Fadhlurrohman", 
    "Arthur", 
    "Software Engineer Indonesia", 
    "Fullstack Developer", 
    "Next.js Developer", 
    "React Developer", 
    "Web Developer Indonesia", 
    "Portfolio"
  ],
  authors: [{ name: "Mukhtar Fadhlurrohman" }],
  creator: "Mukhtar Fadhlurrohman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mukhtardev.my.id",
    title: "Mukhtar Fadhlurrohman | Fullstack Developer",
    description: "Personal portfolio showcasing my journey as a software engineer with modern web technologies.",
    siteName: "Mukhtar Fadhlurrohman Portfolio",
    images: [{
      url: '/images/og-image.jpg', // You might want to add an OG image later
      width: 1200,
      height: 630,
      alt: "Mukhtar Fadhlurrohman Portfolio"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukhtar Fadhlurrohman | Fullstack Developer",
    description: "Software Engineer specializing in modern web development.",
    creator: "@mukhtardev", // Update if you have a specific handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
