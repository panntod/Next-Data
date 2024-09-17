import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Next Data Indonesia",
    template: "%s | Next Data",
  },
  description:
    "To become the leading platform that connects top AI professionals with innovative projects worldwide.",
  keywords:
    "Next Data Indonesia, Data Indonesia, Data AI, artificial intelligence, AI, Data, data collectibles, collectible data",
  authors: { name: "Panntod", url: "https://panntod.github.io" },
  creator: "Panntod",
  publisher: "SMK Telkom Malang",
  // icons: "https://www.moklet.org/nextdata.png",
  // openGraph: {
  //   images: "https://www.moklet.org/horizontal.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
