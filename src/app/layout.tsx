import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Publika — Agence Créative Premium",
  description:
    "Publika est une agence créative spécialisée dans la création de sites web, le design graphique et la production de vidéos publicitaires.",
  keywords: "agence créative, création site web, design graphique, vidéo publicitaire",
  openGraph: {
    title: "Publika — Agence Créative Premium",
    description: "Création de sites web, design graphique & vidéos publicitaires.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
