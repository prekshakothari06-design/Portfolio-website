import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learning That Moves Beyond Content | Preksha Kothari",
  description:
    "Designing learning experiences for workplaces, campuses, and career transitions. Instructional Design · Learning Experience Architecture · Workforce Capability Design.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          html { color-scheme: light; color: #3d2e22; }
          body { background-color: #faf6f1 !important; color: #3d2e22 !important; }
        `}} />
      </head>
      <body
        style={{ backgroundColor: '#faf6f1', color: '#3d2e22' }}
        className={`${inter.variable} ${jetbrains.variable}`}
      >
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
