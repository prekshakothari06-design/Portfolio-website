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
  title: "Learning That Moves Beyond Content | Preksha Kothari",
  description:
    "Designing learning experiences for workplaces, campuses, and career transitions. Instructional Design · Learning Experience Architecture · Workforce Capability Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'dark' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <style dangerouslySetInnerHTML={{ __html: `
          html { color-scheme: dark; color: #e2e5eb; }
          body { background-color: #0b0d14 !important; color: #e2e5eb !important; }
        `}} />
      </head>
      <body
        style={{ backgroundColor: '#0b0d14', color: '#e2e5eb' }}
        className={`${inter.variable} ${jetbrains.variable}`}
      >
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
