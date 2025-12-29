import type { Metadata } from "next";
import { Inter, Playfair_Display, Source_Serif_4, Cinzel, Cormorant_Garamond, EB_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maruf Hasan Rumi - Academic Portfolio",
  description: "Academic portfolio of Maruf Hasan Rumi, Assistant Professor of Public Administration at University of Dhaka and PhD Student in Political Science at Texas Tech University.",
  metadataBase: new URL('https://marufhasanrumi.com'),
  openGraph: {
    title: "Maruf Hasan Rumi - Academic Portfolio",
    description: "Assistant Professor of Public Administration at University of Dhaka and PhD Student at Texas Tech University.",
    url: 'https://marufhasanrumi.com',
    siteName: 'Maruf Hasan Rumi',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maruf Hasan Rumi',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Maruf Hasan Rumi - Academic Portfolio",
    description: "Assistant Professor of Public Administration at University of Dhaka and PhD Student at Texas Tech University.",
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${sourceSerif.variable} ${cinzel.variable} ${cormorant.variable} ${ebGaramond.variable} ${spaceGrotesk.variable} antialiased font-space-grotesk`}
      >
        {children}
      </body>
    </html>
  );
}
