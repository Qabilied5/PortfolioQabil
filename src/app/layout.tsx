import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AnimationProvider from "@/components/providers/AnimationProvider";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// TODO: replace placeholders with real details.
const SITE_URL = "https://example.com";
const SITE_NAME = "Qabil";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | Portfolio`, template: `%s | ${SITE_NAME}` },
  description: "Personal portfolio of [Your Name], [Your Role].",
  applicationName: `${SITE_NAME} Portfolio`,
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${SITE_NAME} Portfolio`,
    title: `${SITE_NAME} | Portfolio`,
    description: "Personal portfolio of [Your Name], [Your Role].",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AnimationProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </AnimationProvider>
      </body>
    </html>
  );
}