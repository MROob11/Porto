import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

export const metadata: Metadata = {
  title: "Mukhtar Fadhlurrohman - Software Engineer",
  description: "Personal portfolio showcasing my journey as a software engineer with modern web technologies",
  keywords: ["portfolio", "software engineer", "web development", "frontend"],
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
