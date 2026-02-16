import type { Metadata } from "next";
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
  title: "The Corporate Learning Lab | Preksha Kothari",
  description:
    "Designing learning systems for workplaces, campuses, and career transitions. Instructional Design · Learning Experience Architecture · Workforce Capability Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'dark' }}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          html { color-scheme: dark; color: #f0f6fc; }
          body { background-color: #0d1117 !important; color: #f0f6fc !important; }
        `}} />
      </head>
      <body
        style={{ backgroundColor: '#0d1117', color: '#f0f6fc' }}
        className={`${inter.variable} ${jetbrains.variable}`}
      >
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
