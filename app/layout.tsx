import type { Metadata } from "next";
import "./globals.css";
import { Chakra_Petch, Sora } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-primary",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://superdev-three.vercel.app/"),
  title: "Superdev Fellowship 2025 | Build on Solana",
  description: "Join the Superdev Fellowship 2025 - An 8-week cohort for SuperDevs building on Solana. Learn from top mentors, ship real Web3 projects, and get paid $2,500.",
  keywords: ["Superdev Fellowship", "Solana", "Web3", "Blockchain Development", "Developer Program", "Cohort 2025"],
  authors: [{ name: "Superdev" }],
  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico' },
      { url: '/favicon_io/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_io/apple-icon.png', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/favicon_io/apple-touch-icon-precomposed.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Superdev Fellowship 2025 | Build on Solana",
    description: "Join the Superdev Fellowship 2025 - An 8-week cohort for SuperDevs building on Solana. Learn from top mentors, ship real Web3 projects, and get paid $2,500.",
    url: "https://superdev.fellowship",
    siteName: "Superdev Fellowship",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Superdev Fellowship 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Superdev Fellowship 2025 | Build on Solana",
    description: "Join the Superdev Fellowship 2025 - An 8-week cohort for SuperDevs building on Solana. Learn from top mentors, ship real Web3 projects, and get paid $2,500.",
    images: ["/og-image.png"],
    creator: "@superdev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="icon" href="/favicon_io/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon_io/apple-icon.png" type="image/png" />
        <link rel="apple-touch-icon-precomposed" href="/favicon_io/apple-touch-icon-precomposed.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${sora.variable} ${chakra.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
