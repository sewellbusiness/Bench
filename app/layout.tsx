import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
const sora = Sora({ subsets:["latin"], variable:"--font-sora", display:"swap" });
const dmSans = DM_Sans({ subsets:["latin"], variable:"--font-dm-sans", display:"swap" });
export const metadata: Metadata = {
  title: "Kevin Sewell — Sewell Labs",
  description: "28 years building production systems for enterprise clients. Available for select client engagements.",
  metadataBase: new URL("https://bench.sewelllabs.com"),
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
