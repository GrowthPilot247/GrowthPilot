import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GrowthPilot",
  description:
    "GrowthPilot is a digital growth platform for marketing, automation, AI, and business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
