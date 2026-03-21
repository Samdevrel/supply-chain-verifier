import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supply Chain Verifier | @samdevrel",
  description: "Verify products across 6 manufacturers with blockchain certificates. Track origin, batch, and manufacturer data.",
  keywords: ["supply chain", "blockchain", "verifiable", "manufacturer", "EUDI", "credentials"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
