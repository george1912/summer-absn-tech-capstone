import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://george1912.github.io/summer-absn-tech-capstone/";
const title = "Nursing Workflow Portfolio";
const description =
  "A portfolio of small tools that reduce friction in course files, clinical forms, and study workflows.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: title,
  category: "portfolio",
  creator: "George",
  keywords: [
    "nursing workflow",
    "software portfolio",
    "clinical education",
    "study tools",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: title,
    title,
    description,
    images: [
      {
        url: `${siteUrl}og.png`,
        width: 1731,
        height: 909,
        alt: "Nursing Workflow Portfolio with course-file, clinical-form, and study-plan panels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}og.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: `${siteUrl}site.webmanifest`,
  icons: {
    icon: `${siteUrl}fox-logo.png`,
    shortcut: `${siteUrl}fox-logo.png`,
    apple: `${siteUrl}fox-logo.png`,
  },
};

export const viewport: Viewport = {
  themeColor: "#102338",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
